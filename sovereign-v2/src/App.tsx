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
  <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-black/40 backdrop-blur-2xl border-b border-gold/10">
    <div className="font-mono text-[0.65rem] tracking-[0.4em] text-gold uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
      {lang === 'en' ? 'Onyx // Architect // HQ' : 'أونيكس // المهندس // المقر'}
    </div>
    <div className="flex gap-4">
      <button 
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        className="text-[0.7rem] font-mono border border-gold/20 px-5 py-1.5 hover:bg-gold hover:text-black transition-all rounded-full bg-black/20"
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
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
      <div className="absolute w-[800px] h-[800px] bg-gold/10 rounded-full blur-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gold font-mono text-[0.7rem] mb-10 tracking-[0.6em] uppercase"
      >
        {lang === 'en' ? 'Signal Acquired' : 'تم استقبال الإشارة'}
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 uppercase leading-[0.8] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        {lang === 'en' ? 'Mohamed' : 'محمد'}<br />
        <span className="text-gold drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">{lang === 'en' ? 'Omar' : 'عمر'}</span>
      </motion.h1>
      
      <div className="font-mono text-sm md:text-lg text-gold tracking-[0.4em] min-h-[1.5em] bg-black/40 px-6 py-2 rounded-full border border-gold/10 backdrop-blur-sm">
        {text}<span className="animate-pulse bg-gold inline-block w-2 h-5 align-middle ml-1"></span>
      </div>
    </section>
  )
}

const Timeline: React.FC<{ lang: Language }> = ({ lang }) => (
  <section className="py-40 px-6 max-w-5xl mx-auto relative border-t border-white/5">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/10">
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

const Arsenal: React.FC<{ lang: Language }> = ({ lang }) => (
  <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
      <div>
        <h2 className="text-sm font-mono text-gold mb-4 tracking-widest uppercase flex items-center gap-4">
          <Zap size={16} className="animate-bounce" /> {lang === 'en' ? '04 // THE ARSENAL' : '٠٤ // الترسانة'}
        </h2>
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          {lang === 'en' ? 'Modular Strikes.' : 'ضربات نمطية.'}
        </h3>
      </div>
      <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed">
        {lang === 'en' ? 'High-velocity strategic modules priced for instant deployment.' : 'وحدات استراتيجية عالية السرعة مصممة للنشر الفوري.'}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ARSENAL_DATA[lang].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] p-10 border border-white/5 hover:border-gold/40 transition-all group relative rounded-3xl backdrop-blur-xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
            <Lock size={16} className="text-gold" />
          </div>
          <div className="font-mono text-[0.65rem] text-white/20 mb-10 tracking-[0.3em]">{item.id}</div>
          <div className="text-gold mb-8 bg-gold/10 w-fit p-4 rounded-2xl group-hover:bg-gold group-hover:text-black transition-all">
            {item.icon}
          </div>
          <h4 className="text-2xl font-bold mb-4 uppercase text-white group-hover:text-gold transition-colors">{item.title}</h4>
          <p className="text-sm text-white/40 mb-10 font-light leading-relaxed h-12">{item.desc}</p>
          <div className="flex justify-between items-center pt-8 border-t border-white/5">
            <span className="font-mono text-base text-gold font-black tracking-tighter">{item.price}</span>
            <div className="flex items-center gap-2 text-white/20 group-hover:text-gold transition-all">
               <span className="text-[0.6rem] font-mono tracking-widest opacity-0 group-hover:opacity-100 uppercase">Deploy</span>
               <ChevronRight size={18} />
            </div>
          </div>
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
    <main className={`bg-[#050505] min-h-screen text-white selection:bg-gold selection:text-black overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#1a1a1a_0%,_#050505_100%)] pointer-events-none" />
      
      <Navbar lang={lang} setLang={setLang} />
      
      <Hero lang={lang} />

      <section className="py-60 px-6 max-w-5xl mx-auto relative border-t border-white/5">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-gold/5 blur-[100px]" />
        <h2 className="text-sm font-mono text-gold mb-16 tracking-widest uppercase flex items-center gap-4">
          <Terminal size={16} /> {lang === 'en' ? '01 // THE MANIFEST' : '٠١ // البيان'}
        </h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-12 text-white"
        >
          {lang === 'en' ? 'Logic in the Magic.' : 'المنطق في السحر.'}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl md:text-3xl text-white/50 leading-[1.5] font-light italic border-l-4 border-gold/20 pl-10"
        >
          {lang === 'en' 
            ? '"In an era of AI-driven commodity, the primary competitive advantage is no longer \'Content\' or \'Ads,\' but the Durable Revenue Infrastructure that orchestrates them."'
            : '"في عصر السلع المدفوعة بالذكاء الاصطناعي، لم تعد الميزة التنافسية الأساسية هي \'المحتوى\' أو \'الإعلانات\'، بل البنية التحتية المستدامة للإيرادات التي تديرها."'}
        </motion.p>
      </section>

      <Timeline lang={lang} />
      
      <Skills lang={lang} />

      <Arsenal lang={lang} />

      <footer className="py-20 px-6 text-center relative z-10 border-t border-white/5 bg-black">
        <div className="font-mono text-[0.65rem] text-white/20 tracking-[0.6em] uppercase">
          {lang === 'en' ? '© 2026 Growth Architect HQ // Noise Reduction Protocol' : '© ٢٠٢٦ مقر مهندس النمو // بروتوكول تقليل الضجيج'}
        </div>
      </footer>
    </main>
  )
}

export default App
