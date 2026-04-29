import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Coffee, Code, Users } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OnyxHiveExplorer } from './components/OnyxHiveExplorer'

gsap.registerPlugin(ScrollTrigger)

type Language = 'en' | 'ar'

// --- Ingested Content (Marjo Structure + Omar Data) ---

const CONTENT = {
  en: {
    hero: {
      greeting: "Hi there! 👋 I'M",
      name: "MOHAMED OMAR",
      role: "Full-Stack Growth Architect // Systems Engineer",
      bio: "I design and build autonomous revenue systems that eliminate marketing toil. From +1M SAR profit recoveries to multi-agent swarm orchestration."
    },
    about: {
      title: "ABOUT ME",
      text: "I am a Systems Engineer who pivoted to Revenue Architecture. I believe marketing is a deterministic science, not a creative guess. I replace legacy agency models with sovereign agentic infrastructure."
    },
    journey: {
      title: "MY JOURNEY",
      items: [
        { date: "2025 - Present", company: "Etlaala Travel", role: "Head of Marketing", desc: "Installed the Onyx engine. Recovered -70k SAR burn to +1M SAR Net Profit." },
        { date: "2026", company: "Aqarverse", role: "Founder", desc: "Building the future of off-market real estate acquisition via AI Agentic Search." },
        { date: "2026", company: "Onyx Hive", role: "Lead Architect", desc: "Developed MAS protocols achieving 71x context efficiency for strategic strikes." }
      ]
    },
    skills: {
      title: "SKILLS",
      categories: [
        { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "GSAP"] },
        { name: "Backend & AI", items: ["Python", "Multi-Agent Systems", "Prompt Engineering", "SQL"] },
        { name: "Strategy", items: ["Media Science", "Growth Architecture", "Unit Economics", "Anti-AI Copy"] }
      ]
    }
  },
  ar: {
    hero: {
      greeting: "أهلاً بك! 👋 أنا",
      name: "محمد عمر",
      role: "مهندس نمو متكامل // مهندس أنظمة",
      bio: "أقوم بتصميم وبناء أنظمة إيرادات ذاتية تقضي على عناء التسويق اليدوي. من استعادة أرباح بقيمة +١ مليون ريال إلى تنسيق أسراب الوكلاء المتعددين."
    },
    about: {
      title: "نبذة عني",
      text: "أنا مهندس أنظمة تحولت إلى هندسة الإيرادات. أؤمن أن التسويق علم حتمي، وليس تخميناً إبداعياً. أستبدل نماذج الوكالات التقليدية ببيئة تحتية سيادية تعتمد على الوكلاء."
    },
    journey: {
      title: "رحلتي",
      items: [
        { date: "٢٠٢٥ - الحاضر", company: "إطلالة للسفر", role: "رئيس التسويق", desc: "تثبيت محرك أونيكس. استعادة عجز ٧٠ ألف ريال إلى ١ مليون ريال صافي ربح." },
        { date: "٢٠٢٦", company: "عقارفيرس", role: "مؤسس", desc: "بناء مستقبل الاستحواذ العقاري خارج السوق عبر البحث المعتمد على وكلاء الذكاء الاصطناعي." },
        { date: "٢٠٢٦", company: "خلية أونيكس", role: "كبير المهندسين", desc: "تطوير بروتوكولات MAS تحقق كفاءة سياق تبلغ ٧١ ضعفاً للضربات الاستراتيجية." }
      ]
    },
    skills: {
      title: "المهارات",
      categories: [
        { name: "الواجهات الأمامية", items: ["React", "TypeScript", "Tailwind CSS", "GSAP"] },
        { name: "الخلفية والذكاء الاصطناعي", items: ["بايثون", "أنظمة الوكلاء", "هندسة الأوامر", "SQL"] },
        { name: "الاستراتيجية", items: ["علوم الميديا", "هندسة النمو", "اقتصاديات الوحدة", "نصوص بشرية"] }
      ]
    }
  }
}

// --- Components ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en')
  const c = CONTENT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <main className={`bg-bg min-h-screen text-white selection:bg-primary selection:text-black overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-sm border-b border-border">
        <div className="flex gap-4">
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="text-[0.65rem] font-mono border border-border px-3 py-1 hover:bg-white hover:text-black transition-all">
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
        <div className="flex gap-6 items-center">
           <a href="https://github.com/mohamedOmar11111" className="text-textMuted hover:text-primary"><Code size={18}/></a>
           <a href="https://linkedin.com/in/mo-omar-mraketing-expert" className="text-textMuted hover:text-primary"><Users size={18}/></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-primary font-mono text-sm mb-4">{c.hero.greeting}</div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">{c.hero.name}</h1>
          <div className="text-xl md:text-2xl font-light text-textMuted mb-10 tracking-widest">{c.hero.role}</div>
          <p className="max-w-2xl text-white/60 leading-relaxed mx-auto text-lg mb-12">{c.hero.bio}</p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:mo.omar477@gmail.com" className="bg-primary text-black px-8 py-3 font-bold text-sm uppercase rounded hover:bg-white transition-all">Get in Touch!</a>
            <button className="bg-secondary text-black px-8 py-3 font-bold text-sm uppercase rounded flex items-center gap-2 hover:bg-white transition-all">
              <Coffee size={16} /> Buy me a coffee
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-border">
        <h2 className="text-xs font-mono text-primary mb-12 tracking-[0.5em]">{c.about.title}</h2>
        <p className="text-xl md:text-2xl leading-relaxed font-light text-white/80">{c.about.text}</p>
      </section>

      {/* Onyx Hive Explorer Integration */}
      <OnyxHiveExplorer />

      {/* Journey Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-border">
        <h2 className="text-xs font-mono text-primary mb-20 tracking-[0.5em]">{c.journey.title}</h2>
        <div className="relative border-l border-border ml-2 space-y-16 py-4">
          {c.journey.items.map((item, i) => (
            <div key={i} className="relative pl-10">
              <div className="absolute left-[-6.5px] top-0 w-3 h-3 bg-primary rounded-full" />
              <div className="text-[0.65rem] font-mono text-textMuted mb-2 uppercase">{item.date}</div>
              <h3 className="text-xl font-bold mb-1">{item.role}</h3>
              <div className="text-primary text-sm font-bold mb-4">{item.company}</div>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 px-6 max-w-4xl mx-auto border-t border-border">
        <h2 className="text-xs font-mono text-primary mb-20 tracking-[0.5em]">{c.skills.title}</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {c.skills.categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-sm font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
                <Code size={16} className="text-primary"/> {cat.name}
              </h3>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-textMuted text-sm flex items-center gap-3">
                    <div className="w-1.5 h-1.5 border border-primary rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-border bg-surface text-center">
        <div className="font-mono text-[0.65rem] text-textMuted flex justify-center items-center gap-2 mb-4">
          <Terminal size={14} className="text-primary" /> system.status === 'LIVE'
        </div>
        <p className="text-[0.6rem] font-mono text-white/20 tracking-[0.4em] uppercase">
          © 2026 MOHAMED OMAR // BUILT WITH SOVEREIGN ENGINE
        </p>
      </footer>

    </main>
  )
}

export default App
