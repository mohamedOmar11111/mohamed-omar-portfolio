import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Search, Layers, ChevronRight, Mail, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Language = 'en' | 'ar'

// --- Content Data (Anti-AI & Result-Focused) ---

const STRATEGIC_CONTENT = {
  en: {
    hero: {
      greeting: "Growth Architect // Systems Engineer",
      name: "Mohamed Omar",
      sub: "I build autonomous revenue systems that turn marketing spend into predictable profit."
    },
    manifesto: {
      title: "The Logic of Growth",
      body: "Most marketing relies on hope. I rely on architecture. I replace manual toil with agentic systems, and fragmented strategies with unified knowledge graphs. The goal is simple: Deterministic ROI."
    },
    journey: [
      { date: "2025 - Present", role: "Head of Marketing @ Etlaala", impact: "Recovered a -70k SAR monthly deficit to +1M SAR Net Profit. Built and deployed the Onyx execution engine." },
      { date: "2026", role: "Founder @ Aqarverse", impact: "Architected a sovereign intelligence nexus for real estate, identifying off-market opportunities via AI search." },
      { date: "2026", role: "Lead Architect @ Onyx Hive", impact: "Developed a Multi-Agent System (MAS) that achieves 71x context efficiency for high-speed market research." }
    ],
    arsenal: [
      { title: "Revenue Audit", price: "$500", desc: "Hard-data identification of the 3 leaks killing your conversion rate." },
      { title: "Predictive Wargame", price: "$900", desc: "Full simulation of competitor moves before you spend $1 on ads." },
      { title: "Authority Shield", price: "$800", desc: "Removing 'AI-markers' from your sales copy to reclaim human trust." },
      { title: "Cognitive Map", price: "$700", desc: "Visualizing your business logic to find the God Node that scales." }
    ],
    skills: {
      sensory: "Intelligence (Python, Google Ads, Scraping)",
      cognitive: "Architecture (MAS Orchestration, Graphs)",
      execution: "Strike (Revenue Systems, Anti-AI Copy)"
    }
  },
  ar: {
    hero: {
      greeting: "مهندس نمو // مهندس أنظمة إيرادات",
      name: "محمد عمر",
      sub: "أقوم ببناء أنظمة إيرادات ذاتية تحول الإنفاق التسويقي إلى أرباح يمكن التنبؤ بها."
    },
    manifesto: {
      title: "منطق النمو",
      body: "يعتمد معظم التسويق على الأمل. أنا أعتمد على الهندسة. أستبدل العمل اليدوي الشاق بأنظمة وكلاء ذكية، والاستراتيجيات المشتتة برسوم بيانية معرفية موحدة. الهدف بسيط: عائد استثمار حتمي."
    },
    journey: [
      { date: "٢٠٢٥ - الحاضر", role: "رئيس التسويق @ إطلالة", impact: "تحويل عجز شهري قدره -٧٠ ألف ريال إلى +١ مليون ريال صافي ربح. بناء ونشر محرك تنفيذ أونيكس." },
      { date: "٢٠٢٦", role: "مؤسس @ عقارفيرس", impact: "هندسة رابط استخباراتي للعقارات، لتحديد الفرص غير المعروضة في السوق عبر بحث الذكاء الاصطناعي." },
      { date: "٢٠٢٦", role: "كبير المهندسين @ خلية أونيكس", impact: "تطوير نظام وكلاء متعدد يحقق كفاءة سياق تبلغ ٧١ ضعفاً للبحث السريع في السوق." }
    ],
    arsenal: [
      { title: "تدقيق الإيرادات", price: "500$", desc: "تحديد دقيق لثلاث ثغرات تقتل معدل التحويل الخاص بك." },
      { title: "محاكاة المواجهة", price: "900$", desc: "محاكاة كاملة لتحركات المنافسين قبل صرف دولار واحد على الإعلانات." },
      { title: "درع السلطة", price: "800$", desc: "إزالة بصمات الذكاء الاصطناعي من نصوصك البيعية لاستعادة الثقة." },
      { title: "الخريطة المعرفية", price: "700$", desc: "تصور منطق عملك للعثور على النواة التي تدفع النمو الحقيقي." }
    ],
    skills: {
      sensory: "الاستخبارات (بايثون، إعلانات جوجل، الزحف)",
      cognitive: "الهندسة (تنسيق الوكلاء، الرسوم البيانية)",
      execution: "التنفيذ (أنظمة الإيرادات، نصوص بشرية)"
    }
  }
}

// --- Components ---

const SectionHeading: React.FC<{ title: string, id: string }> = ({ title, id }) => (
  <div className="mb-12">
    <div className="text-gold font-mono text-[0.65rem] tracking-[0.4em] uppercase mb-2">{id}</div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
  </div>
)

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en')
  const content = STRATEGIC_CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <main className={`bg-[#0a0a0a] min-h-screen text-white selection:bg-gold selection:text-black overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
        <div className="font-bold text-lg tracking-tight">M.OMAR</div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-[0.7rem] font-medium uppercase tracking-widest text-white/40">
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#journey" className="hover:text-gold transition-colors">Journey</a>
            <a href="#arsenal" className="hover:text-gold transition-colors">Arsenal</a>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-[0.7rem] font-bold border border-white/10 px-4 py-1.5 hover:border-gold hover:text-gold transition-all rounded-sm bg-white/5"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-gold font-mono text-xs mb-6 tracking-[0.3em] uppercase">{content.hero.greeting}</div>
          <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] mb-10 uppercase">
            {content.hero.name.split(' ')[0]}<br />
            <span className="text-white/20">{content.hero.name.split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
            {content.hero.sub}
          </p>
          <div className="mt-12 flex gap-6">
            <a href="mailto:mo.omar477@gmail.com" className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gold transition-colors">Contact</a>
            <a href="#journey" className="border border-white/10 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:border-white transition-colors">View Systems</a>
          </div>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section id="about" className="py-40 px-8 md:px-20 max-w-7xl mx-auto bg-white/[0.02]">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <SectionHeading title={content.manifesto.title} id="01 // PHILOSOPHY" />
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic border-l-2 border-gold/30 pl-10">
            {content.manifesto.body}
          </p>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="py-40 px-8 md:px-20 max-w-7xl mx-auto">
        <SectionHeading title={lang === 'en' ? "The Impact Path" : "مسار التأثير"} id="02 // JOURNEY" />
        <div className="space-y-12">
          {content.journey.map((item, i) => (
            <div key={i} className="group border-b border-white/5 pb-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="text-2xl font-bold group-hover:text-gold transition-colors">{item.role}</h3>
                <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{item.date}</span>
              </div>
              <p className="text-white/50 text-lg leading-relaxed max-w-4xl">{item.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-40 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-10 bg-white/[0.03] border border-white/5 rounded-xl text-center md:text-left">
            <Search className="text-gold mb-6 mx-auto md:mx-0" size={24} />
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/40">Sensory</h4>
            <p className="text-lg">{content.skills.sensory}</p>
          </div>
          <div className="p-10 bg-white/[0.03] border border-white/5 rounded-xl text-center md:text-left">
            <Layers className="text-gold mb-6 mx-auto md:mx-0" size={24} />
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/40">Cognitive</h4>
            <p className="text-lg">{content.skills.cognitive}</p>
          </div>
          <div className="p-10 bg-white/[0.03] border border-white/5 rounded-xl text-center md:text-left">
            <Terminal className="text-gold mb-6 mx-auto md:mx-0" size={24} />
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-white/40">Execution</h4>
            <p className="text-lg">{content.skills.execution}</p>
          </div>
        </div>
      </section>

      {/* Arsenal */}
      <section id="arsenal" className="py-40 px-8 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <SectionHeading title={lang === 'en' ? "Modular Arsenal" : "ترسانة الوحدات"} id="03 // PRODUCTS" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.arsenal.map((item, i) => (
            <div key={i} className="p-10 border border-white/10 hover:border-gold/50 transition-all rounded-sm bg-black group">
              <div className="text-gold font-mono text-[0.6rem] mb-8 tracking-widest">UNIT-{i+1}</div>
              <h4 className="text-xl font-bold mb-4 uppercase leading-tight">{item.title}</h4>
              <p className="text-sm text-white/40 mb-8 font-light leading-relaxed h-16">{item.desc}</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="font-mono text-sm text-gold font-bold">{item.price}</span>
                <ChevronRight size={16} className="text-white/20 group-hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <div className="font-bold text-2xl mb-2">Mohamed Omar</div>
            <div className="text-white/30 text-sm font-mono tracking-widest uppercase">The Growth Architect</div>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/mo-omar-mraketing-expert" className="p-4 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-all"><Users size={20} /></a>
            <a href="mailto:mo.omar477@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-all"><Mail size={20} /></a>
          </div>
        </div>
        <div className="mt-20 text-center text-[0.6rem] font-mono text-white/10 tracking-[0.5em] uppercase">
          © 2026 Growth Architect HQ // Noise Reduction Protocol
        </div>
      </footer>
    </main>
  )
}

export default App
