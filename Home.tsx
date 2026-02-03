import React from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import YouTubeSection from '@/components/YouTubeSection';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Clock, Award, ChevronRight, MessageCircle, Monitor, Users, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
          <img 
            src="/images/hero-bg.jpg" 
            alt="아이온2 대리 서비스 배경" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-20 text-center px-4">
          <div className="animate-fade-in-up">
            <h2 className="text-primary font-serif text-xl md:text-2xl mb-4 tracking-widest uppercase">Premium Aion2 Proxy Service</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
              당신의 시간을 가치 있게, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">프리미엄 게임 케어 솔루션 어비스팀</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              압도적인 기술력과 철저한 보안 시스템으로 증명하는<br className="hidden md:block" /> 
              최상위 부주 서비스를 경험하세요.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://open.kakao.com/o/sxT1c2ci', '_blank')}
                className="bg-primary hover:bg-primary/90 text-black font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105 cursor-pointer"
              >
                상담 문의하기
              </button>
              <Link href="/items" className="border border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm font-bold transition-all hover:scale-105 inline-block text-center">
                서비스 안내
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">어비스팀, 당신의 게임 라이프를 한 단계 업그레이드</h2>
            <p className="text-muted-foreground text-lg">
              어비스팀은 다년간의 프리미엄 부주 노하우와 압도적인 전문성을 바탕으로<br />
              고객님의 소중한 시간을 더욱 가치 있게 만들어 드립니다.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="/images/sword-loading.jpg" 
              alt="아이온2 대리 작업 화면 예시" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Trusted</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                어비스팀,<br />
                <span className="text-blue-400">최고의 경험</span>을 선사하는 파트너
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                어비스팀은 고객님의 계정 보안을 최우선으로, 모든 작업 과정을 투명하게 공유하며<br />
                책임감 있는 프리미엄 서비스를 약속드립니다. 상담부터 작업 완료까지 모든 과정은<br />
                기록과 증빙을 기반으로 진행되어 안심하고 맡기실 수 있습니다.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "철저한 신원 인증을 거친 전문 기사 배정",
                  "24시간 실시간 모니터링 및 소통 가능",
                  "작업 시작/종료 시 상세 리포트 제공"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/images/trusted-illustration.jpg" 
                alt="아이온2 대리 신뢰성 강조 이미지" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10 hover:translate-y-[-10px] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safe Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/images/security-illustration.jpg" 
                alt="어비스팀의 철저한 보안 시스템" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10 hover:translate-y-[-10px] transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Safe</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                안정적인<br />
                <span className="text-cyan-400">최상위 보안</span> 관리
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                고객님의 소중한 계정을 보호하기 위해 IP 접속 환경 관리와 보안 수칙을 철저히 준수합니다.<br />
                어비스팀 작업 시 발생할 수 있는 모든 위험 요소를 사전에 차단하여<br />
                안전하고 쾌적한 플레이 환경을 보장합니다.
              </p>
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30">
                보안 정책 자세히 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Section */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Live</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                실시간 작업 현황<br />
                <span className="text-indigo-400">투명한 소통</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                어비스팀의 모든 작업 진행 상황은 공지 및 작업 현황 메뉴에서 실시간으로 확인 가능하며,<br />
                궁금한 점은 카카오톡 오픈채팅을 통해 언제든지 편리하게 소통하실 수 있습니다.
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                실시간 현황 확인하기
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/images/live-status.jpg" 
                alt="아이온2 대리 실시간 소통 화면" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border border-white/10 hover:translate-y-[-10px] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-white">어비스팀 가이드</h2>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center transition-colors">
              전체 보기 <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "어비스팀 부주 서비스 제공 안내", desc: "검증된 작업자만 참여하는 어비스팀 부주 서비스로, 계정 보안을 최우선으로 안전하고 신속하게 진행합니다.", icon: "📊" },
              { title: "어비스팀 신뢰의 운영", desc: "운영 경험을 바탕으로 어비스팀 작업 내역을 투명하게 공유하며 약속을 지키는 것을 원칙으로 합니다.", icon: "🤝" },
              { title: "어비스팀 육성 부주 보안 시스템", desc: "필요 최소한의 정보만 요청하며, 이중 보안 수칙과 비밀번호 변경 안내로 안전한 어비스팀 육성 부주를 돕습니다.", icon: "🛡️" },
              { title: "실시간 어비스팀 현황 안내", desc: "카카오톡 오픈채팅으로 진행 상황을 수시 안내하며, 어비스팀 주요 구간 캡처를 제공합니다.", icon: "📱" },
              { title: "합리적인 어비스팀 가격 기준", desc: "사냥터, 시간, 목표 수치에 따라 어비스팀 요금을 세분화하여 사전에 안내해 드립니다.", icon: "💰" },
              { title: "카카오톡 전용 어비스팀 상담", desc: "전화나 이메일 대신 카카오톡 오픈채팅으로만 어비스팀 상담을 진행하고 있습니다.", icon: "💬" },
              { title: "어비스팀 공지 및 규정 안내", desc: "어비스팀 작업 요청 전 환불 및 취소 규정 등 필수 안내 사항을 수시로 업데이트합니다.", icon: "📢" },
              { title: "검증된 어비스팀 후기", desc: "실제 어비스팀 이용자 후기와 재의뢰율로 서비스 퀄리티를 확인하실 수 있습니다.", icon: "⭐" }
            ].map((item, i) => (
              <Card key={i} className="bg-card/50 border-white/5 hover:border-primary/50 transition-all hover:bg-card group overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-3 line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 text-xs text-gray-500 font-mono">어비스팀 블로그</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* YouTube Video Section */}
      <YouTubeSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-black/30 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">왜 어비스팀을 선택해야 할까요?</h2>
            <p className="text-muted-foreground text-lg">프리미엄 게임 케어, 어비스팀이 제시하는 새로운 표준</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-8 h-8 text-primary" />, title: "신뢰와 안전", desc: "최상위 보안 시스템으로 고객님의 계정을 완벽하게 보호하며, 모든 작업 과정을 투명하게 공개합니다." },
              { icon: <Clock className="w-8 h-8 text-primary" />, title: "24시간 운영", desc: "24시간 언제든지 전문 상담이 가능하며, 실시간 작업 현황을 공유하여 답답함 없이 소통합니다." },
              { icon: <Award className="w-8 h-8 text-primary" />, title: "전문 기사", desc: "다년간의 경험과 노하우를 갖춘 전문 기사가 최고의 프리미엄 서비스를 제공하여 만족도를 높입니다." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-start">
                <div className="mb-4 p-3 bg-primary/20 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
