import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface FormData {
  nickname: string;
  characterName: string;
  serviceType: string;
  description: string;
  contactMethod: string;
  contactInfo: string;
  agreeTerms: boolean;
}

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    nickname: '',
    characterName: '',
    serviceType: '',
    description: '',
    contactMethod: 'kakao',
    contactInfo: '',
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const serviceTypes = [
    { value: 'leveling', label: '육성 대리' },
    { value: 'equipment', label: '장비 파밍' },
    { value: 'quest', label: '퀘스트 진행' },
    { value: 'daily', label: '일일 컨텐츠' },
    { value: 'other', label: '기타 (상담 필요)' },
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nickname.trim()) {
      newErrors.nickname = '닉네임을 입력해주세요';
    }
    if (!formData.characterName.trim()) {
      newErrors.characterName = '캐릭터명을 입력해주세요';
    }
    if (!formData.serviceType) {
      newErrors.serviceType = '서비스 유형을 선택해주세요';
    }
    if (!formData.description.trim()) {
      newErrors.description = '요청 사항을 입력해주세요';
    }
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = '연락처를 입력해주세요';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '약관에 동의해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // 실제 제출 로직 (카카오톡 오픈채팅으로 리다이렉트)
      const message = `
[아이온2 부주 서비스 신청]
닉네임: ${formData.nickname}
캐릭터명: ${formData.characterName}
서비스 유형: ${serviceTypes.find(t => t.value === formData.serviceType)?.label}
요청 사항: ${formData.description}
연락처: ${formData.contactInfo}
`;

      // 카카오톡 오픈채팅으로 이동
      window.open('https://open.kakao.com/o/sxT1c2ci', '_blank');
      setSubmitted(true);

      // 3초 후 폼 초기화
      setTimeout(() => {
        setFormData({
          nickname: '',
          characterName: '',
          serviceType: '',
          description: '',
          contactMethod: 'kakao',
          contactInfo: '',
          agreeTerms: false,
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900">
        <Card className="w-full max-w-md bg-card border-primary/50">
          <CardContent className="pt-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">신청이 완료되었습니다!</h3>
            <p className="text-muted-foreground mb-4">
              카카오톡 오픈채팅으로 이동합니다.
              <br />
              담당자가 빠르게 응답하겠습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">아이온2 부주 서비스 신청</h2>
            <p className="text-muted-foreground text-lg">
              간단한 정보 입력으로 빠르게 상담을 시작하세요
            </p>
          </div>

          <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">서비스 신청 양식</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 닉네임 */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    게임 닉네임 *
                  </label>
                  <Input
                    type="text"
                    placeholder="예: 아이온2마스터"
                    value={formData.nickname}
                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                  {errors.nickname && (
                    <p className="text-red-400 text-sm mt-1">{errors.nickname}</p>
                  )}
                </div>

                {/* 캐릭터명 */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    캐릭터명 *
                  </label>
                  <Input
                    type="text"
                    placeholder="예: 아이온2전사"
                    value={formData.characterName}
                    onChange={(e) => setFormData({ ...formData, characterName: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  />
                  {errors.characterName && (
                    <p className="text-red-400 text-sm mt-1">{errors.characterName}</p>
                  )}
                </div>

                {/* 서비스 유형 */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    서비스 유형 *
                  </label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="서비스 유형을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      {serviceTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-white">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-red-400 text-sm mt-1">{errors.serviceType}</p>
                  )}
                </div>

                {/* 요청 사항 */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    요청 사항 *
                  </label>
                  <Textarea
                    placeholder="구체적인 요청 사항을 입력해주세요. 예: 50레벨까지 육성 필요, 특정 장비 파밍 등"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                    rows={4}
                  />
                  {errors.description && (
                    <p className="text-red-400 text-sm mt-1">{errors.description}</p>
                  )}
                </div>

                {/* 연락처 */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    연락처 *
                  </label>
                  <div className="flex gap-2">
                    <Select value={formData.contactMethod} onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}>
                      <SelectTrigger className="w-32 bg-white/5 border-white/10 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-white/10">
                        <SelectItem value="kakao" className="text-white">카카오톡</SelectItem>
                        <SelectItem value="phone" className="text-white">전화</SelectItem>
                        <SelectItem value="email" className="text-white">이메일</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="text"
                      placeholder={formData.contactMethod === 'kakao' ? '카카오톡 ID' : formData.contactMethod === 'phone' ? '010-0000-0000' : 'example@email.com'}
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  {errors.contactInfo && (
                    <p className="text-red-400 text-sm mt-1">{errors.contactInfo}</p>
                  )}
                </div>

                {/* 약관 동의 */}
                <div className="space-y-3">
                  <Alert className="bg-white/5 border-white/10">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-sm text-gray-300">
                      신청 후 카카오톡 오픈채팅으로 이동합니다. 담당자가 24시간 이내에 연락드립니다.
                    </AlertDescription>
                  </Alert>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="w-4 h-4 mt-1 accent-primary"
                    />
                    <span className="text-sm text-gray-300">
                      아이온2 부주 서비스 이용약관 및 개인정보 처리방침에 동의합니다 *
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-red-400 text-sm">{errors.agreeTerms}</p>
                  )}
                </div>

                {/* 제출 버튼 */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-6 text-lg rounded-lg transition-all hover:scale-105"
                >
                  서비스 신청하기
                </Button>

                <p className="text-center text-xs text-gray-500">
                  이미 계정이 있으신가요?{' '}
                  <button
                    type="button"
                    onClick={() => window.open('https://open.kakao.com/o/sxT1c2ci', '_blank')}
                    className="text-primary hover:underline"
                  >
                    카카오톡으로 직접 문의
                  </button>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
