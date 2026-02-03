import React from 'react';
import Layout from '@/components/Layout';
import FAQSection from '@/components/FAQSection';

export default function FAQPage() {
  return (
    <Layout>
      {/* SEO Optimization */}
      <head>
        <title>Q&A | 어비스팀, 자주 묻는 질문</title>
        <meta name="description" content="어비스팀 서비스 이용에 관한 결제, 보안, 환불 등 자주 묻는 질문들을 모았습니다. 어비스팀 상담 전 궁금한 사항을 확인하세요." />
        <meta name="keywords" content="어비스팀 Q&A, 어비스팀 질문, 어비스팀 보안, 어비스팀 환불" />
      </head>

      <div className="pt-20">
        <FAQSection />
      </div>
    </Layout>
  );
}
