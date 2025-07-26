import { default as Header } from '@/components/layout/header';

// Custom LawGPTHeader that hides login/signup
function LawGPTHeader() {
  return <Header hideAuthButtons />;
}

export default function LawGPTPage() {
  return (
    <>
      <LawGPTHeader />
      {/* Main LawGPT content goes here, centered and clean, matching Figma/landing page */}
      <div className="relative w-screen h-screen min-h-[720px] bg-background font-body overflow-hidden flex flex-col items-center justify-center">
        {/* LawGPT Logo and Title */}
        <div className="flex flex-row items-center justify-center gap-3 mb-4">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.35028 11.6585C5.38323 9.62556 8.67069 9.61698 10.693 11.6393L14.0619 15.0082L10.7122 18.3579C8.67927 20.3908 5.39181 20.3994 3.36946 18.377L0.000606868 15.0082L3.35028 11.6585Z" fill="#3C9B97" fillOpacity="0.6"/>
            <path d="M18.3581 3.34931C20.391 5.38225 20.3996 8.66971 18.3773 10.6921L15.0084 14.0609L11.6587 10.7112C9.6258 8.6783 9.61722 5.39083 11.6396 3.36848L15.0084 -0.000370287L18.3581 3.34931Z" fill="#3C9B97" fillOpacity="0.6"/>
            <path d="M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z" fill="#3C9B97" fillOpacity="0.6"/>
            <path d="M18.4934 19.1696C20.5263 21.2026 20.5033 24.5216 18.4421 26.5828L15.0085 30.0164L11.6588 26.6668C9.62585 24.6338 9.64879 21.3148 11.71 19.2536L15.1437 15.8199L18.4934 19.1696Z" fill="#3C9B97" fillOpacity="0.6"/>
          </svg>
          <span className="font-semibold text-[20px] leading-6 text-white/60" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>LawGPT</span>
        </div>
        {/* Heading */}
        <h1 className="font-bold text-[40px] leading-[48px] text-white mb-8 text-center" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>What can I help with</h1>
        {/* Chatbox */}
        <div className="w-[600px] h-[96px] bg-[#232323] rounded-[28px] flex items-center relative mx-auto">
          <input
            className="w-[480px] h-[48px] bg-transparent border-none outline-none text-white font-medium text-[18px] leading-[22px] pl-8 z-20 box-border"
            style={{ fontFamily: 'Instrument Sans, sans-serif' }}
            placeholder="Ask me anything about law"
          />
          {/* Send Button */}
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full border-none flex items-center justify-center cursor-pointer z-30 shadow-none p-0"
            aria-label="Send"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="none" />
              <path d="M12 17V7M12 7L7 12M12 7L17 12" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}


