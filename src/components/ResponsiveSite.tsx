import { useState } from 'react';
import svgPaths from "../imports/svg-2tlj5752x9";
import imgFrame427319362 from "figma:asset/6dd1c1cece75c003d7ac7c926b0f632e2432e679.png";
import imgHouse1 from "figma:asset/685ea27e02f5f0bc7bc06e720041bdf7d4f682e2.png";
import imgHouse2 from "figma:asset/390ec5d35237bca1b4fe8b4897b85bd72e0ffe20.png";
import imgHouse3 from "figma:asset/e603b813ee6c703352bd22448fa837becb7b1246.png";
import imgHouse4 from "figma:asset/7895392627b15fc26fc9deff4e455089a8ff3505.png";
import imgHouse5 from "figma:asset/c78e9eb9b57324fec9e58e8351172d442f093ccc.png";
import imgHouse6 from "figma:asset/eeafa484bddd7f7c3f06c367ebcbc98c40d1e74b.png";
import imgHouse7 from "figma:asset/257b0b0d88de6d326c5c6e5ff8da9ac7b67a04ef.png";
import imgRectangle7369 from "figma:asset/2034a2e5ddc0cf0e745a94e01ad98922b3829cdd.png";
import imgFrame2085673137 from "figma:asset/39bcb7cbd930fa171c69ff8f5e4d876a5e81a001.png";
import imgFrame2085673138 from "figma:asset/47f8d1dde5fefe3f369a77563dfb6be435809013.png";
import imgFrame2085673139 from "figma:asset/977f9d2b16983f8d9c8a13edcd4f8be0f90f19a8.png";
import imgFrame2085673140 from "figma:asset/8813a04c89491250286c6b82e558a763bdf4b668.png";
import imgFrame2085673147 from "figma:asset/976f07623c1842215cfbfa3a1b057884ebd2cdce.png";
import imgFrame427319347 from "figma:asset/bc086dde46b2c42f75ff599b5db485a107bf9c0f.png";
import imgFrame2085673150 from "figma:asset/1ef26cd4eb20e6e5db5fe6fd1512c333e2f5342b.png";
import imgImage315 from "figma:asset/789514e54b138bd5ce6bb46a5c3021fbefbb46a0.png";
import imgImage316 from "figma:asset/c4032906f667aeeebdba1746543415baf53bd4b0.png";
import imgImage317 from "figma:asset/256c841a364244422ac30d44ee3c8adda6e2457d.png";
import imgImage318 from "figma:asset/fde2e5949a17e43ab4e973887b95d99aae115da1.png";
import imgImage319 from "figma:asset/407345f3ddefe20f6782c31388b633add286c3af.png";
import { Menu, X } from 'lucide-react';

// Logo Component
function Logo() {
  return (
    <div className="h-[40px] md:h-[53px] overflow-clip relative shrink-0 w-[150px] md:w-[200px]">
      <div className="absolute bottom-[31.9%] left-0 right-[84.83%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 37">
          <g>
            <path d={svgPaths.p26152a80} fill="#1BB8CE" />
            <path d={svgPaths.p6fd1b00} fill="#1BB8CE" />
            <path d={svgPaths.p29255b80} fill="#E60012" />
            <path d={svgPaths.p13cee000} fill="#0093CE" />
            <path d={svgPaths.p383be100} fill="#00479D" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[3.34%_1.35%_75.31%_15.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 12">
          <g>
            <path d={svgPaths.p2b8a9f70} fill="#3E3A39" />
            <path d={svgPaths.p31c2e600} fill="#3E3A39" />
            <path d={svgPaths.pafcd980} fill="#3E3A39" />
            <path d={svgPaths.p3cd3900} fill="#3E3A39" />
            <path d={svgPaths.p1318c300} fill="#3E3A39" />
            <path d={svgPaths.p31a51e70} fill="#3E3A39" />
            <path d={svgPaths.pe1da670} fill="#3E3A39" />
            <path d={svgPaths.p3a1b0300} fill="#3E3A39" />
            <path d={svgPaths.p23f80100} fill="#3E3A39" />
            <path d={svgPaths.p3fbdd710} fill="#3E3A39" />
            <path d={svgPaths.p711c600} fill="#3E3A39" />
            <path d={svgPaths.p32d56500} fill="#3E3A39" />
            <path d={svgPaths.p2cfa0b00} fill="#3E3A39" />
            <path d={svgPaths.p33b15af0} fill="#3E3A39" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-[-0.03%] left-[14.02%] right-0 top-[31.21%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 37">
          <g>
            <path d={svgPaths.p119a5180} fill="#00B3C4" />
            <path d={svgPaths.p19ee0500} fill="#00B3C4" />
            <path d={svgPaths.p2fa88100} fill="#F18D00" />
            <path d={svgPaths.pf685500} fill="#F18D00" />
            <path d={svgPaths.p2f293780} fill="#F18D00" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Header Component
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ['행복문화인', '사업안내', '문화인소식', '커뮤니티', '후원과 참여'];

  return (
    <header className="bg-white w-full border-b border-[#ececec] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4 xl:gap-8">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-[#121212] text-base xl:text-lg hover:text-[#f18d00] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden bg-[#fa8d62] p-3 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <a key={index} href="#" className="text-[#121212] text-base hover:text-[#f18d00] transition-colors py-2 border-b border-gray-100">
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

// Hero Banner
function HeroBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[620px] overflow-hidden">
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFrame427319362} />
      <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16 xl:px-60">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-[#8b69af] text-2xl md:text-4xl lg:text-5xl font-['Jalnan_2_TTF']">행복문화인</p>
              <p className="text-[#623296] text-2xl md:text-4xl lg:text-5xl font-['Jalnan_2_TTF']">나눔과 사회적 책임</p>
            </div>
            <p className="text-[#595959] text-sm md:text-lg lg:text-xl max-w-2xl">
              복지용구 서비스와 돌봄을 통해 복음을 전하고, 사회적 약자를 보호하며, 지역사회 복지사역에 헌신
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 items-center">
        <div className="size-8 rounded-full border border-white flex items-center justify-center">
          <div className="h-3 w-1.5">
            <svg className="block size-full" fill="none" viewBox="0 0 6 12">
              <line stroke="white" strokeWidth="2" x1="1" x2="1" y1="0" y2="12" />
              <line stroke="white" strokeWidth="2" x1="5" x2="5" y1="0" y2="12" />
            </svg>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.4)] rounded-3xl px-4 py-1 min-w-[150px] md:min-w-[240px]">
          <div className="bg-white h-1 w-12 rounded" />
        </div>
      </div>
    </div>
  );
}

// Quick Menu Icons
function QuickMenu() {
  const menuItems = [
    { icon: imgHouse1, label: '단체소개' },
    { icon: imgHouse2, label: '사업안내' },
    { icon: imgHouse3, label: '공지사항' },
    { icon: imgHouse4, label: '후원안내' },
    { icon: imgHouse5, label: '후원파트너' },
    { icon: imgHouse6, label: '행복스토리' },
    { icon: imgHouse7, label: '행사안내' },
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-60">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[90px] lg:h-[90px] rounded-3xl bg-[rgba(241,141,0,0.08)] flex items-center justify-center group-hover:bg-[rgba(241,141,0,0.15)] transition-colors">
                <img alt={item.label} className="w-8 h-8 md:w-10 md:h-10 lg:w-[38px] lg:h-[38px] object-contain" src={item.icon} />
              </div>
              <p className="text-[#141414] text-xs md:text-sm text-center">{item.label}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Notice Section
function NoticeSection() {
  const notices = [
    { date: '2025.11.26', title: '어르신 반찬 나눔 사업 우리 동네에 행복을 나눔합니다' },
    { date: '2025.11.23', title: '인왕노인복지관 시설장 채용 발표' },
    { date: '2025.11.20', title: '사랑의 연탄 나눔 홍보 영상' },
    { date: '2025.11.20', title: '인왕노인복지관 시설장 채용 발표' },
    { date: '2025.11.20', title: '연간 기부금모금액 및 활용실적명세서 공지합니다' },
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-60">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[630/350] rounded-3xl overflow-hidden relative">
              <img alt="" className="w-full h-full object-cover" src={imgRectangle7369} />
              <div className="absolute bottom-6 right-6 bg-[rgba(255,255,255,0.7)] px-4 py-1 rounded-full">
                <p className="text-black text-base md:text-lg">1 / 5</p>
              </div>
            </div>
          </div>

          {/* Notice List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="flex gap-4 md:gap-6 items-center">
              <div className="bg-[#f18d00] px-4 py-1.5 rounded-2xl">
                <p className="text-white text-base md:text-lg">공지사항</p>
              </div>
              <p className="text-[#444444] text-sm md:text-base">프로그램</p>
              <p className="text-[#444444] text-sm md:text-base">행복소식지</p>
            </div>

            <div className="flex flex-col">
              {notices.map((notice, index) => (
                <a key={index} href="#" className="flex items-center py-3 md:py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <p className="text-black text-sm md:text-lg shrink-0 w-32 md:w-48">• {notice.date}</p>
                  <p className="text-[#333333] text-sm md:text-lg flex-1">{notice.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Promise Section
function PromiseSection() {
  const promises = [
    {
      image: imgFrame2085673137,
      title: 'Kindness',
      subtitle: '이웃 사랑 실천',
      description: '주변의 어려운 이웃을 돕고\n따뜻함을 나누는 행동을 꾸준히 실천합니다',
      borderColor: 'rgba(255,233,201,0.5)'
    },
    {
      image: imgFrame2085673140,
      title: 'Generosity',
      subtitle: '나눔의 가치 확산',
      description: '사회 전체에 나눔의 중요성과\n의미를 널리 알리고 참여를 이끌어냅니다.',
      borderColor: 'rgba(254,255,221,0.5)'
    },
    {
      image: imgFrame2085673138,
      title: 'Happiness',
      subtitle: '행복한 삶 지원',
      description: '모든 이웃이 더 나은 삶을\n누릴 수 있도록 필요한 지원과 프로그램을 제공합니다.',
      borderColor: 'rgba(255,233,201,0.5)'
    },
    {
      image: imgFrame2085673139,
      title: 'Solidarity',
      subtitle: '연대와 소통 강화',
      description: '서로 협력하고 소통하는\n공동체 문화를 만들어 관계를 더욱 단단하게 합니다.',
      borderColor: 'rgba(254,255,221,0.5)'
    },
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 relative">
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none" src={imgFrame2085673147} />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center gap-6 mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center gap-4">
            <p className="text-[#f56400] text-xl md:text-2xl">사랑</p>
            <div className="w-20 md:w-32 lg:w-[180px] h-0.5 bg-[#F56400]" />
            <p className="text-[#f56400] text-xl md:text-2xl">나눔</p>
          </div>
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl text-center">
            행복문화인의 <span className="font-bold">4가지 약속</span>
          </h2>
          <p className="text-[#616161] text-sm md:text-base text-center max-w-3xl">
            (사)행복 문화인은 도움이 필요한 이웃에게 실질적인 지원을 제공하고 문화적 감수성과
            배움을 나누는 프로그램을 통해 지역사회에 더 큰 행복과 변화를 가져올 수 있도록 최선을 다하겠습니다.
          </p>
        </div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center gap-8 md:gap-12 lg:gap-20">
              <div className="relative">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden relative">
                  <img alt="" className="w-full h-full object-cover" src={promise.image} />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-2xl md:text-3xl">{promise.title}</p>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 rounded-full border-[15px] md:border-[20px] pointer-events-none -m-[15px] md:-m-[20px]" 
                  style={{ borderColor: promise.borderColor }}
                />
              </div>
              <div className="flex flex-col items-center gap-4 text-center">
                <h3 className="text-black text-xl md:text-2xl">{promise.subtitle}</h3>
                <p className="text-[#616161] text-sm md:text-base whitespace-pre-line">{promise.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F18D00]" />
    </div>
  );
}

// Program Section
function ProgramSection() {
  const programs = [
    { image: imgFrame2085673140, title: '연말 나눔 바자 & 기부 캠페인', date: '2025-10-24 ~ 2025-12-31' },
    { image: imgFrame427319347, title: '연말 나눔 바자 & 기부 캠페인', date: '2025-10-24 ~ 2025-12-31' },
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 xl:px-60">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-20">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-[#f56400] text-sm md:text-base uppercase">Program</p>
              <h2 className="text-black text-2xl md:text-3xl lg:text-4xl">
                행복문화인의<br />새로운 소식을 만나보세요.
              </h2>
            </div>
            <a href="#" className="bg-[#fae100] px-6 py-4 rounded-full flex items-center justify-between w-full md:w-[220px] hover:bg-[#e5cf00] transition-colors">
              <p className="text-[#3c1e1e] text-base md:text-lg"><span className="font-bold">카카오톡</span> 바로가기</p>
            </a>
          </div>

          {/* Right Side - Programs */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <a key={index} href="#" className="flex flex-col gap-5 group">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={program.image} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-black text-lg md:text-xl">{program.title}</p>
                  <p className="text-[#666666] text-sm md:text-base">{program.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Support Section
function SupportSection() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-60 relative">
      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.28] pointer-events-none" src={imgFrame2085673150} />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
            <p className="text-[#f56400] text-sm md:text-base uppercase">support</p>
            <h2 className="text-[#121212] text-2xl md:text-3xl lg:text-4xl">
              <span className="text-black">행복문화인</span>과 함께<br />
              지역 사회를 행복으로 채워주세요
            </h2>
          </div>
          <a href="#" className="bg-[#f18d00] px-6 py-4 rounded-full flex items-center gap-3 hover:bg-[#d67d00] transition-colors">
            <p className="text-white text-base md:text-lg">후원하기</p>
            <div className="w-3 h-1.5 rotate-90">
              <svg viewBox="0 0 14 8" fill="none">
                <path d="M13 7L7 1L1 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// Partner Logos
function PartnerLogos() {
  const logos = [imgImage315, imgImage316, imgImage317, imgImage318, imgImage319];

  return (
    <div className="w-full bg-white py-5 overflow-hidden">
      <div className="flex gap-4 md:gap-6 animate-scroll">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img alt="" className="w-full h-full object-contain" src={logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer
function Footer() {
  const footerLinks = [
    '재단소개', '오시는길', '개인정보처리방침', '정관', '이메일무단수집거부', '사이트맵'
  ];

  return (
    <footer className="w-full bg-white border-t-2 border-[#dbdbdb] px-4 md:px-8 lg:px-16 xl:px-32 py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Links */}
        <div className="flex flex-wrap gap-4 md:gap-8 justify-between mb-8 md:mb-12">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {footerLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className={`text-sm md:text-lg ${link === '개인정보처리방침' ? 'text-[#f18d00]' : 'text-[#999999]'} hover:text-[#f18d00] transition-colors`}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-4 md:gap-8 text-sm md:text-lg text-[#999999]">
            <a href="#" className="hover:text-[#f18d00] transition-colors">관리자로그인</a>
            <a href="#" className="hover:text-[#f18d00] transition-colors">회원가입</a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
          <div className="flex flex-col gap-6">
            <div className="h-[40px] md:h-[50px] overflow-clip relative w-[150px] md:w-[190px]">
              <div className="absolute bottom-[31.9%] left-0 right-[84.83%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 35">
                  <g>
                    <path d={svgPaths.p5d7c270} fill="#7B7B7B" />
                    <path d={svgPaths.p1b596380} fill="#7B7B7B" />
                    <path d={svgPaths.p19766180} fill="#7B7B7B" />
                    <path d={svgPaths.p1428ff00} fill="#7B7B7B" />
                    <path d={svgPaths.p2b000880} fill="#7B7B7B" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[3.34%_1.35%_75.31%_15.91%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 11">
                  <g>
                    <path d={svgPaths.p32acce80} fill="#7B7B7B" />
                    <path d={svgPaths.p39bd3420} fill="#7B7B7B" />
                    <path d={svgPaths.p1fb30c00} fill="#7B7B7B" />
                    <path d={svgPaths.pf32c700} fill="#7B7B7B" />
                    <path d={svgPaths.p1e9f7a40} fill="#7B7B7B" />
                    <path d={svgPaths.p3770da00} fill="#7B7B7B" />
                    <path d={svgPaths.p10669600} fill="#7B7B7B" />
                    <path d={svgPaths.pcd08f80} fill="#7B7B7B" />
                    <path d={svgPaths.p2c3c5a00} fill="#7B7B7B" />
                    <path d={svgPaths.p2dd25e00} fill="#7B7B7B" />
                    <path d={svgPaths.p2b820580} fill="#7B7B7B" />
                    <path d={svgPaths.p3dc10500} fill="#7B7B7B" />
                    <path d={svgPaths.p3a2d4300} fill="#7B7B7B" />
                    <path d={svgPaths.p285c0c00} fill="#7B7B7B" />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-[-0.03%] left-[14.02%] right-0 top-[31.21%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 35">
                  <g>
                    <path d={svgPaths.p3f64b800} fill="#7B7B7B" />
                    <path d={svgPaths.p3e64300} fill="#7B7B7B" />
                    <path d={svgPaths.p59e4e00} fill="#7B7B7B" />
                    <path d={svgPaths.p1719d180} fill="#7B7B7B" />
                    <path d={svgPaths.p21d35b40} fill="#7B7B7B" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-[#7b7b7b] text-sm md:text-base">
              <div className="flex flex-wrap gap-2 md:gap-5 items-center">
                <p>사업자등록번호 105-82-17063</p>
                <span>|</span>
                <p>대표 : 서경철</p>
                <span>|</span>
                <p>개인정보관리책임자 : 이석만 실장</p>
              </div>
              <p>(03617) 서울특별시 서대문구 간호대로2길 21</p>
              <p>E-mail : happyhuman12@daum.net</p>
              <div className="flex flex-wrap gap-2 md:gap-5 items-center">
                <p>TEL : 02-3142-0238</p>
                <span>|</span>
                <p>FAX : 02-394-0060</p>
              </div>
            </div>
            <p className="text-[#a4a3a3] text-sm md:text-lg">Copyright ⓒ 2025 happy21c All Right Reserved.</p>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <div className="w-10 h-10">
                <svg className="block size-full" fill="none" viewBox="0 0 50 50">
                  <g clipPath="url(#clip0_1_357)">
                    <path d={svgPaths.p39ceb900} fill="#FAE100" />
                    <path d={svgPaths.p3393c180} fill="#020303" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_357">
                      <rect fill="white" height="49.9996" width="49.716" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex-1 bg-[#ececec] rounded-3xl px-5 py-3 flex items-center justify-between min-w-[200px]">
              <p className="text-[#7b7b7b] text-sm md:text-base">패밀리 사이트</p>
              <svg className="w-3 h-2" viewBox="0 0 13 7" fill="none">
                <path d="M12.5 6.5L6.5 0.5L0.5 6.5" stroke="#7B7B7B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Component
export default function ResponsiveSite() {
  return (
    <div className="bg-white w-full">
      <Header />
      <HeroBanner />
      <QuickMenu />
      <NoticeSection />
      <PromiseSection />
      <ProgramSection />
      <SupportSection />
      <PartnerLogos />
      <Footer />
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
