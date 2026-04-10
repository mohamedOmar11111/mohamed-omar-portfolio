import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Mail, Users, ArrowRight, ShieldCheck, Activity, Brain, Box } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Language = 'en' | 'ar'

// --- Futuristic Content Data ---

const STRATEGIC_CONTENT = {
  en: {
    hero: {
      greeting: "System.Initialize(Growth_Architect)",
      name: "Mohamed Omar",
      sub: "Engineering autonomous revenue pipelines through multi-agent orchestration and mathematical precision."
    },
    manifesto: {
      title: "Category: Sovereign",
      body: "Legacy marketing is a liability. I build infrastructure that functions without permission. By mapping global logic nodes, we move from speculative spending to deterministic profit. This is the end of the agency era."
    },
    journey: [
      { date: "2025 - 2026", role: "Etlaala Deployment", impact: "+1,400% ROI recovery. Replaced manual toil with the Onyx execution kernel. Total Net Profit: +1M SAR." },
      { date: "2026", role: "Aqarverse Nexus", impact: "Sovereign real estate intelligence. 0% manual search. 100% agent-driven inventory acquisition." },
      { date: "2026", role: "Onyx Hive MAS", impact: "71x Context Efficiency breakthrough. Strategic reasoning at sub-second speeds across 4,200+ knowledge nodes." }
    ],
    arsenal: [
      { id: "STRK-01", title: "Revenue Audit", price: "$500", desc: "Hard-data strike identifying the exact friction points killing your conversion velocity." },
      { id: "STRK-02", title: "Predictive Wargame", price: "$900", desc: "Adversarial simulation of market moves. Predict competitor pivots before they occur." },
      { id: "STRK-03", title: "Authority Shield", price: "$800", desc: "Deep-surface linguistic purge. Strip bot-markers to reclaim human authority." },
      { id: "STRK-04", title: "Cognitive Map", price: "$700", desc: "3D architectural visualization of your revenue logic. Find the missing God Node." }
    ]
  },
  ar: {
    hero: {
      greeting: "بدء_التشغيل(مهندس_النمو)",
      name: "محمد عمر",
      sub: "هندسة قنوات إيرادات ذاتية من خلال تنسيق الوكلاء المتعددين والدقة الرياضية."
    },
    manifesto: {
      title: "التصنيف: سيادي",
      body: "التسويق التقليدي عبء مالي. أنا أبني بنية تحتية تعمل دون إذن. من خلال رسم خرائط عقد المنطق العالمية، ننتقل من الإنفاق التخميني إلى الربح الحتمي. هذه نهاية عصر الوكالات."
    },
    journey: [
      { date: "٢٠٢٥ - ٢٠٢٦", role: "انتشار إطلالة", impact: "استعادة ١٤٠٠٪ من عائد الاستثمار. استبدال العمل الشاق بنواة تنفيذ أونيكس. صافي الربح: +١ مليون ريال." },
      { date: "٢٠٢٦", role: "رابط عقارفيرس", impact: "ذكاء عقاري سيادي. ٠٪ بحث يدوي. ١٠٠٪ استحواذ على المخزون بواسطة الوكلاء." },
      { date: "٢٠٢٦", role: "خلية أونيكس MAS", impact: "طفرة في كفاءة السياق بمقدار ٧١ ضعفاً. تفكير استراتيجي بسرعات فائقة عبر ٤٢٠٠+ عقدة معرفية." }
    ],
    arsenal: [
      { id: "STRK-01", title: "تدقيق الإيرادات", price: "500$", desc: "ضربة بيانات دقيقة تحدد نقاط الاحتكاك التي تقتل سرعة التحويل لديك." },
      { id: "STRK-02", title: "محاكاة المواجهة", price: "900$", desc: "محاكاة هجومية لتحركات السوق. تنبأ بتحولات المنافسين قبل حدوثها." },
      { id: "STRK-03", title: "درع السلطة", price: "800$", desc: "تطهير لغوي عميق. إزالة بصمات البوت لاستعادة السلطة البشرية." },
      { id: "STRK-04", title: "الخريطة المعرفية", price: "700$", desc: "تصور معماري ثلاثي الأبعاد لمنطق إيراداتك. ابحث عن النواة المفقودة." }
    ]
  }
}

// --- Specialized Components ---

const GlassCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.05] ${className}`}>
    {children}
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
    <main className={`bg-[#050505] min-h-screen text-[#FAFAFA] selection:bg-blue-600 selection:text-white overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      {/* Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 px-8 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-between items-center shadow-2xl">
        <div className="font-mono text-xs tracking-[0.4em] font-bold text-blue-500">ONYX_HQ</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-[0.65rem] font-bold uppercase tracking-widest text-white/40">
            <a href="#logic" className="hover:text-white transition-colors">Logic</a>
            <a href="#signal" className="hover:text-white transition-colors">Signal</a>
            <a href="#arsenal" className="hover:text-white transition-colors">Arsenal</a>
          </div>
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-[0.65rem] font-bold bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-mono text-[0.6rem] uppercase tracking-[0.3em] mb-8">
            {content.hero.greeting}
          </div>
          <h1 className="text-6xl md:text-[140px] font-black tracking-tighter leading-[0.8] mb-8 uppercase">
            {content.hero.name.split(' ')[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">{content.hero.name.split(' ')[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto font-medium leading-relaxed mb-12">
            {content.hero.sub}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#arsenal" className="group flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
              Initiate Strike <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Logic Module */}
      <section id="logic" className="relative py-40 px-8 z-10 max-w-7xl mx-auto">
        <GlassCard className="p-12 md:p-24 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-blue-500 font-mono text-[0.6rem] tracking-[0.4em] mb-4 uppercase">Protocol // Logic</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">{content.manifesto.title}</h2>
            <p className="text-xl text-white/60 font-light leading-relaxed italic">
              {content.manifesto.body}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
              <Activity className="text-blue-500 mb-4" />
              <div className="text-2xl font-black">+1400%</div>
              <div className="text-[0.5rem] font-mono text-white/30 uppercase tracking-widest mt-2">ROI Recovery</div>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center">
              <Brain className="text-blue-500 mb-4" />
              <div className="text-2xl font-black">71x</div>
              <div className="text-[0.5rem] font-mono text-white/30 uppercase tracking-widest mt-2">Context Efficiency</div>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center col-span-2">
              <Box className="text-blue-500 mb-4" />
              <div className="text-2xl font-black">4,200+</div>
              <div className="text-[0.5rem] font-mono text-white/30 uppercase tracking-widest mt-2">Strategic Nodes Mapped</div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Signal Timeline */}
      <section id="signal" className="relative py-40 px-8 z-10 max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <div className="text-blue-500 font-mono text-[0.6rem] tracking-[0.4em] mb-4 uppercase">Verification // Impact</div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Impact Log</h2>
        </div>
        <div className="space-y-8">
          {content.journey.map((item, i) => (
            <GlassCard key={i} className="p-10 group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="text-blue-500 font-mono text-[0.6rem] mb-2 uppercase tracking-widest">{item.date}</div>
                  <h3 className="text-2xl font-bold mb-4 uppercase group-hover:text-blue-400 transition-colors">{item.role}</h3>
                  <p className="text-white/40 text-lg leading-relaxed">{item.impact}</p>
                </div>
                <div className="shrink-0 p-4 rounded-full border border-white/10 bg-white/5">
                  <ShieldCheck className="text-white/20 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Arsenal Grid */}
      <section id="arsenal" className="relative py-40 px-8 z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <div className="text-blue-500 font-mono text-[0.6rem] tracking-[0.4em] mb-4 uppercase">Deployment // Units</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Strategic Arsenal</h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs uppercase tracking-widest font-bold">
            Modular Revenue Strikes. Decoupled from Toil.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.arsenal.map((item, i) => (
            <GlassCard key={i} className="p-10 group cursor-crosshair">
              <div className="text-blue-500 font-mono text-[0.6rem] mb-10 tracking-widest">{item.id}</div>
              <h4 className="text-xl font-bold mb-4 uppercase leading-tight group-hover:text-blue-400 transition-colors">{item.title}</h4>
              <p className="text-xs text-white/40 mb-10 font-bold leading-relaxed h-16 uppercase tracking-wider">{item.desc}</p>
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <span className="font-mono text-sm text-white font-black">{item.price}</span>
                <button className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <ChevronRight size={14} className="text-white" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Final Call */}
      <footer className="relative py-40 px-8 z-10 max-w-7xl mx-auto border-t border-white/10 text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">Stop Planning.<br/>Start Building.</h2>
        <div className="flex justify-center gap-6 mb-24">
          <a href="https://linkedin.com/in/mo-omar-mraketing-expert" className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 hover:border-blue-600 transition-all group">
            <Users size={24} className="text-white/40 group-hover:text-white" />
          </a>
          <a href="mailto:mo.omar477@gmail.com" className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 hover:border-blue-600 transition-all group">
            <Mail size={24} className="text-white/40 group-hover:text-white" />
          </a>
        </div>
        <div className="font-mono text-[0.55rem] text-white/10 tracking-[0.8em] uppercase">
          Mohamed Omar // Sovereign Architect HQ // 2026
        </div>
      </footer>
    </main>
  )
}

export default App
