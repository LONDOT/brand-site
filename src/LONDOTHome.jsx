import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Leaf, Droplets, TestTube2, Instagram, ShoppingBag, Youtube, Mail, MapPin } from "lucide-react";

// --- Utility ---
const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full max-w-7xl mx-auto px-6 md:px-10 ${className}`}>{children}</section>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm tracking-tight bg-white/60 backdrop-blur border-black/10">
    {children}
  </span>
);

// --- Mock assets (replace with real) ---
const productImages = {
  shampoo: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1400&auto=format&fit=crop",
  tonic: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop",
  oil: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1400&auto=format&fit=crop",
};

export default function LONDOTHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onHash = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="min-h-screen antialiased text-neutral-900 bg-gradient-to-b from-neutral-50 via-white to-[#F6F8F7]">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <a href="#top" className="font-semibold tracking-tight text-lg">LONDOT</a>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#story" className="hover:opacity-70">스토리</a>
            <a href="#products" className="hover:opacity-70">제품</a>
            <a href="#science" className="hover:opacity-70">테크놀로지</a>
            <a href="#gallery" className="hover:opacity-70">비주얼</a>
            <a href="#contact" className="hover:opacity-70">문의</a>
          </nav>
          <a href="https://smartstore.naver.com/louisboutique/products/11171564763" className="hidden md:inline-flex items-center gap-2 text-sm rounded-2xl px-4 py-2 bg-black text-white hover:opacity-90"><ShoppingBag size={16}/>스토어</a>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(v=>!v)} aria-label="menu">☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-black/5 bg-white">
            <div className="px-6 py-3 grid gap-3 text-sm">
              <a href="#story">스토리</a>
              <a href="#products">제품</a>
              <a href="#science">과학</a>
              <a href="#gallery">비주얼</a>
              <a href="#contact">문의</a>
              <a href="#shop" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-black text-white w-max"><ShoppingBag size={16}/>스토어</a>
            </div>
          </div>
        )}
      </header>


      {/* Hero */}

      <div id="top" className="relative">
        <div className="absolute inset-0 -z-10">
          <video
            className="w-full h-[68vh] md:h-[78vh] object-cover"
            src={`${import.meta.env.BASE_URL}hero.mp4`}
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
          >
            <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-white"/>
        </div>
        <Section className="h-[68vh] md:h-[78vh] grid place-items-center">
          <motion.div variants={fade} initial="hidden" animate="show" className="text-center text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            <Tag>THE BRIGHTEST MOMENT OF YOU</Tag>
            <h1 className="mt-5 text-4xl md:text-6xl font-medium tracking-[-0.02em]">고품격 헤어 & 스칼프 케어</h1>
            <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed">
              깨끗한 두피. 윤기 있는 모발. 불필요한 과장은 배제하고 성분과 공정으로 증명합니다.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-neutral-900">
                <ChevronRight size={16}/>제품 보기
              </a>
              <a href="#science" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 ring-1 ring-white/40">
                작동 원리
              </a>
            </div>
          </motion.div>
        </Section>
      </div>



      {/* Story */}
      <Section id="story" className="py-20 md:py-28">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden shadow-sm bg-gradient-to-br from-[#EAF7F2] to-[#F7FAF9] border border-black/5"/>
          <div className="md:col-span-7">
            <Tag>브랜드 스토리</Tag>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">일상의 절제된 럭셔리</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">LONDOT은 간결한 디자인과 검증된 성분을 바탕으로 고품질의 헤어 케어 경험을 제안합니다. 500ml 화이트 펌프, 350ml 튜브, 프로스트 투명 보틀과 실버 펌프 등 절제된 하드웨어에 집중합니다.</p>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Sparkles size={16}/> 미니멀 패키징과 균형 잡힌 사용감</li>
              <li className="flex items-center gap-2"><Leaf size={16}/> 성분 중심 설계(원료적 특성에 한함)</li>
              <li className="flex items-center gap-2"><Droplets size={16}/> 수분·윤기 밸런스와 두피 컨디셔닝</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* Products */}
      <Section id="products" className="py-16 md:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">대표 제품</h2>
          <a href="#shop" className="hidden md:inline-flex items-center gap-2 text-sm rounded-xl px-3 py-2 bg-black text-white"><ShoppingBag size={16}/>스토어로</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { key: "shampoo", name: "카페인 샴푸 500ml", notes: "두피 청정, 볼륨 밸런스", price: "₩45,000", img: productImages.shampoo },
            { key: "tonic", name: "스칼프 토닉 120ml", notes: "쿨링과 컨디셔닝", price: "₩57,000", img: productImages.tonic },
            { key: "oil", name: "라이트 헤어 오일 50ml", notes: "윤기와 부드러움", price: "₩53,000", img: productImages.oil },
          ].map((p) => (
            <motion.article key={p.key} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="group rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"/>
              </div>
              <div className="p-5">
                <h3 className="font-medium tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.notes}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm">{p.price}</span>
                  <a href="#shop" className="inline-flex items-center gap-1 text-sm">구매하기 <ChevronRight size={16}/></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-xs text-neutral-500">* 성분 효능 표기는 원료적 특성에 한함. 개인의 모발/두피 상태에 따라 사용감은 다를 수 있습니다.</p>
      </Section>

      {/* Science */}
      <Section id="science" className="py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6">
            <Tag>작동 원리</Tag>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">성분과 공정의 정합성</h2>
            <ul className="mt-6 grid gap-3 text-sm text-neutral-700">
              <li className="flex items-start gap-3"><TestTube2 size={18} className="mt-0.5"/> 카페인 · 멘톨 · 히알루론산 · 보태니컬 추출물의 밸런스(원료적 특성에 한함)</li>
              <li className="flex items-start gap-3"><TestTube2 size={18} className="mt-0.5"/> 실리콘 사용 여부는 제품 목적에 맞춰 최소화/대체 설계(텍스처 품질 유지)</li>
              <li className="flex items-start gap-3"><TestTube2 size={18} className="mt-0.5"/> 세정력 대비 저자극을 목표로 한 계면활성제 블렌드</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-2xl p-4 bg-white border border-black/5">
                <div className="font-semibold">두피 프레시</div>
                <div className="text-neutral-500 mt-1">쿨링 밸런스</div>
              </div>
              <div className="rounded-2xl p-4 bg-white border border-black/5">
                <div className="font-semibold">모발 글로시</div>
                <div className="text-neutral-500 mt-1">빛 반사 보정</div>
              </div>
              <div className="rounded-2xl p-4 bg-white border border-black/5">
                <div className="font-semibold">향의 잔상</div>
                <div className="text-neutral-500 mt-1">클린 ∙ 미니멀</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 aspect-[4/5] rounded-3xl overflow-hidden shadow-sm bg-gradient-to-br from-[#F0FAF6] to-[#EEF7FF] border border-black/5"/>
        </div>
      </Section>

      {/* Visual Gallery */}
      <Section id="gallery" className="py-16 md:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">비주얼</h2>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-black/10"><Instagram size={16}/>Instagram</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-black/10"><Youtube size={16}/>YouTube</a>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[1,2,3,4,5,6,7,8].map(i=> (
            <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
              <img src={`https://images.unsplash.com/photo-15${20+i}000000-000000000000?q=80&w=1200&auto=format&fit=crop`} alt="visual" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing / Sets */}
      <Section id="shop" className="py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">런칭 구성</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "싱글", desc: "단품 구매", price: "15% 런칭할인", items: ["샴푸 / 토닉 / 오일 중 택1"], cta: "구매" },
            { title: "듀오 세트", desc: "2종 묶음 + 사은품", price: "추가 5%", items: ["2세트 이상 구매 시 헤어 스크런치 증정"], cta: "세트 구매" },
            { title: "트리오 풀세트", desc: "샴푸+토닉+오일", price: "15% + 5%", items: ["5일간 추가 5% 할인 이벤트"], cta: "풀세트" },
          ].map(card => (
            <div key={card.title} className="rounded-3xl p-6 bg-white border border-black/5 shadow-sm">
              <div className="text-sm text-neutral-500">{card.desc}</div>
              <div className="mt-1 text-xl font-semibold">{card.title}</div>
              <div className="mt-3 inline-flex items-center gap-2 text-sm rounded-full px-3 py-1 bg-[#E9F7F0]">프로모션: {card.price}</div>
              <ul className="mt-4 grid gap-2 text-sm text-neutral-700">
                {card.items.map(it => <li key={it} className="flex items-center gap-2"><ChevronRight size={16}/>{it}</li>)}
              </ul>
              <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-black text-white text-sm">{card.cta}<ChevronRight size={16}/></a>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">문의</h2>
            <p className="mt-3 text-neutral-700 text-sm leading-relaxed">컬래버레이션, 유통, 미디어, OEM/ODM 관련 문의를 환영합니다.</p>
            <div className="mt-5 grid gap-3 text-sm">
              <a href="mailto:hello@londot.co" className="inline-flex items-center gap-2"><Mail size={16}/>hello@londot.co</a>
              <div className="inline-flex items-center gap-2"><MapPin size={16}/>Seoul, Korea</div>
            </div>
          </div>
          <form className="rounded-3xl p-6 bg-white border border-black/5 shadow-sm grid gap-4">
            <input placeholder="이름" className="rounded-xl px-4 py-3 border border-black/10 focus:outline-none"/>
            <input placeholder="이메일" className="rounded-xl px-4 py-3 border border-black/10 focus:outline-none"/>
            <textarea placeholder="문의 내용" rows={5} className="rounded-xl px-4 py-3 border border-black/10 focus:outline-none"/>
            <button type="button" className="rounded-xl px-4 py-3 bg-black text-white">보내기</button>
          </form>
        </div>
        <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} LONDOT. All rights reserved.</p>
      </Section>

      {/* Floating quick bar */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <a href="#shop" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black text-white shadow-lg"><ShoppingBag size={16}/>바로 구매</a>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white border border-black/10 shadow-lg">문의</a>
      </div>

      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Brand",
        name: "LONDOT",
        slogan: "The Brightest Moment of You",
        logo: "https://londot.example/logo.png",
        url: "https://londot.example",
        sameAs: ["https://instagram.com/", "https://youtube.com/"],
        brand: {
          "@type": "Organization",
          name: "LONDOT"
        }
      }) }} />
    </div>
  );
}
