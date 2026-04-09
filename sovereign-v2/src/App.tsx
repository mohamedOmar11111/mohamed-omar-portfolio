import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Briefcase, Zap, Shield, Map, Monitor, Target, Box, Search, Layers, Cpu, TrendingUp, ChevronRight, Lock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Language = 'en' | 'ar'

// --- Data ---

const ARSENAL_DATA = {
  en: [
    { id: 'STRK-01', title: 'Revenue Audit', price: '$500', desc: 'Identifies 3 critical friction points causing budget bleed.', icon: <Search size={18}/> },
    { id: 'STRK-02', title: 'Predictive Wargame', price: '$900', desc: 'Simulates competitor moves before your next launch.', icon: <Monitor size={18}/> },
    { id: 'STRK-03', title: 'Authority Shield', price: '$800', desc: 'Purges AI bot-markers; installs high-status narrative.', icon: <Shield size={18}/> },
    { id: 'STRK-04', title: 'Cognitive Map', price: '$700', desc: 'Connects fragmented assets to verified ROI via Graph.', icon: <Map size={18}/> },
    { id: 'STRK-05', title: 'Vampire Monitor', price: '$400/mo', desc: 'Real-time surveillance of competitor budget shifts.', icon: <Zap size={18}/> },
    { id: 'STRK-06', title: 'Arbitrage Strike', price: '$600', desc: 'Find underpriced attention gaps in your niche.', icon: <Target size={18}/> }
  ],
  ar: [
    { id: 'STRK-01', title: 'تدقيق الإيرادات', price: '500$', desc: 'تحديد ٣ نقاط احتكاك حرجة تسبب نزيفاً في الميزانية.', icon: <Search size={18}/> },
    { id: 'STRK-02', title: 'محاكاة المواجهة', price: '900$', desc: 'محاكاة تحركات المنافسين قبل حملة الإطلاق القادمة.', icon: <Monitor size={18}/> },
    { id: 'STRK-03', title: 'درع السلطة', price: '800$', desc: 'تطهير نصوصك من علامات البوت واستعادة الثقة.', icon: <Shield size={18}/> },
    { id: 'STRK-04', title: 'الخريطة المعرفية', price: '700$', desc: 'ربط الأصول المشتتة بعائد استثمار حقيقي عبر الرسم البياني.', icon: <Map size={18}/> },
    { id: 'STRK-05', title: 'مراقب مصاص الدماء', price: '400$/ش', desc: 'مراقبة لحظية لتحولات ميزانيات المنافسين.', icon: <Zap size={18}/> },
    { id: 'STRK-06', title: 'ضربة الاربتراج', price: '600$', desc: 'البحث عن فجوات الانتباه الرخيصة في مجالك.', icon: <Target size={18}/> }
  ]
}

const JOURNEY_DATA = {
  en: [
    { date: '2025 - Present', title: 'Head of Marketing @ Etlaala', desc: 'Recovered -70k SAR monthly deficit to +1M SAR Net Profit in 12 months. Installed autonomous revenue systems.', icon: <TrendingUp size={16}/> },
    { date: '2026', title: 'Founder @ Aqarverse', desc: 'Architected the Sovereign Intelligence Nexus for off-market real estate dominance using AI Search.', icon: <Box size={16}/> },
    { date: '2026', title: 'Lead Architect @ Onyx Hive', desc: 'Developed a custom Multi-Agent System (MAS) achieving 71x context efficiency via Knowledge Graphs.', icon: <Cpu size={16}/> }
  ],
  ar: [
    { date: '٢٠٢٥ - الحاضر', title: 'رئيس التسويق @ إطلالة', desc: 'استعادة عجز شهري قدره -٧٠ ألف ريال سعودي إلى +١ مليون ريال صافي ربح في ١٢ شهرًا. تثبيت أنظمة إيرادات آلية.', icon: <TrendingUp size={16}/> },
    { date: '٢٠٢٦', title: 'مؤسس @ عقارفيرس', desc: 'هندسة "رابط الاستخبارات السيادية" للهيمنة على العقارات غير المعروضة في السوق باستخدام بحث الذكاء الاصطناعي.', icon: <Box size={16}/> },
    { date: '٢٠٢٦', title: 'كبير المهندسين @ خلية أونيكس', desc: 'تطوير نظام وكلاء متعدد مخصص (MAS) يحقق كفاءة سياق تبلغ ٧١ ضعفاً عبر الرسوم البيانية المعرفية.', icon: <Cpu size={16}/> }
  ]
}

const SKILLS_DATA = {
  en: [
    { category: 'Sensory (Intelligence)', items: ['Google Ads Media Science', 'Python Web Crawling', 'Market Arbitrage Analysis'], icon: <Search size={18}/> },
    { category: 'Cognitive (Architecture)', items: ['Multi-Agent Orchestration', 'Knowledge Graph Synthesis', 'Context Engineering'], icon: <Layers size={18}/> },
    { category: 'Execution (Strike)', items: ['Revenue System Building', 'Anti-AI Content Writing', 'Automated Launch Recipes'], icon: <Target size={18}/> }
  ],
  ar: [
    { category: 'الحواس (الاستخبارات)', items: ['علوم ميديا إعلانات جوجل', 'الزحف للويب باستخدام بايثون', 'تحليل أربتراج السوق'], icon: <Search size={18}/> },
    { category: 'الإدراك (الهندسة)', items: ['تنسيق الوكلاء المتعددين', 'تركيب الرسوم البيانية المعرفية', 'هندسة السياق'], icon: <Layers size={18}/> },
    { category: 'التنفيذ (الضربة)', items: ['بناء أنظمة الإيرادات', 'كتابة محتوى مضاد للذكاء الاصطناعي', 'وصفات الإطلاق المؤتمتة'], icon: <Target size={18}/> }
  ]
}

// --- Components ---

const Navbar: React.FC<{ lang: Language, setLang: (l: Language) => void }> = ({ lang, setLang }) => (
  <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
    <div className="font-mono text-[0.6rem] tracking-[0.3em] text-gold uppercase">
      {lang === 'en' ? 'Onyx // Architect // HQ' : 'أونيكس // المهندس // المقر'}
    </div>
    <div className="flex gap-4">
      <button 
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        className="text-[0.6rem] font-mono border border-white/10 px-4 py-1 hover:bg-white hover:text-black transition-all rounded-full"
      >
        {lang === 'en' ? 'AR' : 'EN'}
      </button>
    </div>
  </nav>
)

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const [text, setText] = useState('')
  const fullText = lang === 'en' ? 'GROWTH ARCHITECT // SYSTEMS ENGINEER' : 'مهندس النمو // مهندس أنظمة'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [lang])

  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white/40 font-mono text-[0.6rem] mb-8 tracking-[0.5em] uppercase"
      >
        {lang === 'en' ? 'Signal Acquired' : 'تم استقبال الإشارة'}
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl md:text-9xl font-black tracking-tighter mb-6 uppercase leading-[0.85]"
      >
        {lang === 'en' ? 'Mohamed' : 'محمد'}<br />
        <span className="text-gold">{lang === 'en' ? 'Omar' : 'عمر'}</span>
      </motion.h1>
      <div className="font-mono text-xs md:text-sm text-gold tracking-[0.3em] min-h-[1.5em] opacity-80">
        {text}<span className="animate-pulse">_</span>
      </div>
    </section>
  )
}

const Arsenal: React.FC<{ lang: Language }> = ({ lang }) => (
  <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
      <div>
        <h2 className="text-sm font-mono text-gold mb-4 tracking-widest uppercase flex items-center gap-4">
          <Zap size={16} /> {lang === 'en' ? '04 // THE ARSENAL' : '٠٤ // الترسانة'}
        </h2>
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          {lang === 'en' ? 'Modular Strikes.' : 'ضربات نمطية.'}
        </h3>
      </div>
      <p className="text-white/40 text-sm max-w-xs font-light">
        {lang === 'en' ? 'High-velocity strategic modules priced for instant deployment.' : 'وحدات استراتيجية عالية السرعة مصممة للنشر الفوري.'}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10">
      {ARSENAL_DATA[lang].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg p-10 group relative cursor-crosshair overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <Lock size={14} className="text-gold" />
          </div>
          <div className="font-mono text-[0.6rem] text-white/30 mb-8 tracking-widest">{item.id}</div>
          <div className="text-gold mb-6">{item.icon}</div>
          <h4 className="text-xl font-bold mb-4 uppercase">{item.title}</h4>
          <p className="text-sm text-white/50 mb-8 font-light leading-relaxed">{item.desc}</p>
          <div className="flex justify-between items-center pt-6 border-t border-white/5">
            <span className="font-mono text-xs text-gold font-bold">{item.price}</span>
            <ChevronRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

const Timeline: React.FC<{ lang: Language }> = ({ lang }) => (
  <section className="py-40 px-6 max-w-5xl mx-auto border-t border-white/5">
    <h2 className="text-sm font-mono text-gold mb-20 tracking-widest uppercase flex items-center gap-4">
      <Briefcase size={16} /> {lang === 'en' ? '02 // THE JOURNEY' : '٠٢ // الرحلة'}
    </h2>
    <div className="relative border-l border-white/10 ml-4 py-10 space-y-20">
      {JOURNEY_DATA[lang].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-12"
        >
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_#D4AF37] flex justify-center items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-black" />
          </div>
          <div className="text-[0.6rem] font-mono text-white/40 mb-2 uppercase tracking-widest">{item.date}</div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-gold opacity-50">{item.icon}</span> {item.title}
          </h3>
          <p className="text-white/50 leading-relaxed font-light max-w-2xl">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

const Skills: React.FC<{ lang: Language }> = ({ lang }) => (
  <section className="py-40 px-6 max-w-6xl mx-auto border-t border-white/5">
    <h2 className="text-sm font-mono text-gold mb-20 tracking-widest uppercase flex items-center gap-4">
      <Terminal size={16} /> {lang === 'en' ? '03 // THE ENGINE' : '٠٣ // المحرك'}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/10">
      {SKILLS_DATA[lang].map((skill, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-bg p-10 hover:bg-white/[0.03] transition-colors"
        >
          <div className="text-gold mb-8">{skill.icon}</div>
          <h3 className="text-xs font-mono text-white/40 mb-6 uppercase tracking-widest">{skill.category}</h3>
          <ul className="space-y-4">
            {skill.items.map((item, j) => (
              <li key={j} className="text-sm font-light text-white/70 flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-gold/30" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <main className={`bg-bg min-h-screen text-white selection:bg-gold selection:text-black ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar lang={lang} setLang={setLang} />
      
      <Hero lang={lang} />

      <section className="py-40 px-6 max-w-4xl mx-auto border-t border-white/5">
        <h2 className="text-sm font-mono text-gold mb-12 tracking-widest uppercase flex items-center gap-4">
          <Terminal size={16} /> {lang === 'en' ? '01 // THE MANIFEST' : '٠١ // البيان'}
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-[1.1] mb-8"
        >
          {lang === 'en' ? 'Logic in the Magic.' : 'المنطق في السحر.'}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg md:text-2xl text-white/80 leading-[1.4] font-light italic"
        >
          {lang === 'en' 
            ? '"In an era of AI-driven commodity, the primary competitive advantage is no longer \'Content\' or \'Ads,\' but the Durable Revenue Infrastructure that orchestrates them."'
            : '"في عصر السلع المدفوعة بالذكاء الاصطناعي، لم تعد الميزة التنافسية الأساسية هي \'المحتوى\' أو \'الإعلانات\'، بل البنية التحتية المستدامة للإيرادات التي تديرها."'}
        </motion.p>
      </section>

      <Timeline lang={lang} />
      
      <Skills lang={lang} />

      <Arsenal lang={lang} />

      <footer className="py-20 px-6 text-center border-t border-white/5 bg-black/50">
        <div className="font-mono text-[0.6rem] text-white/20 tracking-[0.5em] uppercase">
          {lang === 'en' ? '© 2026 Growth Architect HQ // Noise Reduction Protocol' : '© ٢٠٢٦ مقر مهندس النمو // بروتوكول تقليل الضجيج'}
        </div>
      </footer>
    </main>
  )
}

export default App
