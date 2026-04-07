/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Bot, 
  Target, 
  Cpu, 
  Database, 
  MessageSquare, 
  Search, 
  Zap, 
  Layers, 
  Code, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Github,
  Globe,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Users,
  BarChart3,
  Mic,
  Settings
} from "lucide-react";

const SectionTitle = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-8 border-b border-blue-100 pb-4"
  >
    <div className="p-2 bg-blue-600 rounded-lg text-white">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </motion.div>
);

const Card = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
  >
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900" dir="rtl">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white border-b border-slate-200 pt-20 pb-24">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>مشروع مساعد المعرفة الذكي (AKAI)</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              وكيل ذكاء اصطناعي <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-cyan-500">لخدمة العملاء</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-10">
              نظام ذكي يعتمد على قاعدة معرفة منظمة للإجابة عن أسئلة المستخدمين بشكل سريع ودقيق، مما يقلل الجهد المبذول في الرد على الاستفسارات المتكررة.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2"
              >
                <Globe size={20} />
                عرض التجربة الحية
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold shadow-sm flex items-center gap-2"
              >
                <Github size={20} />
                المستودع البرمجي
              </motion.button>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        
        {/* Goals Section */}
        <section id="goals">
          <SectionTitle title="أهداف المشروع" icon={Target} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              title="إجابات آلية" 
              description="تقديم إجابات فورية ودقيقة على الأسئلة الشائعة والمتكررة." 
              icon={MessageSquare} 
              delay={0.1}
            />
            <Card 
              title="الوصول للمعرفة" 
              description="تحسين إمكانية الوصول إلى المعلومات المخزنة في قاعدة البيانات." 
              icon={Search} 
              delay={0.2}
            />
            <Card 
              title="تقليل العبء" 
              description="تخفيف الضغط على فرق الدعم الفني من خلال أتمتة الردود." 
              icon={Zap} 
              delay={0.3}
            />
            <Card 
              title="تجربة المستخدم" 
              description="تعزيز التفاعل من خلال واجهة ذكية وسهلة الاستخدام." 
              icon={Users} 
              delay={0.4}
            />
          </div>
        </section>

        {/* System Components */}
        <section id="components">
          <SectionTitle title="مكونات النظام" icon={Layers} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl h-fit">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">الواجهة الأمامية (Frontend)</h3>
                  <p className="text-slate-600 text-sm">واجهة دردشة تفاعلية مبنية باستخدام React وTailwind CSS لتجربة سلسة.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl h-fit">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">الواجهة الخلفية (Backend)</h3>
                  <p className="text-slate-600 text-sm">محرك Node.js + Express للتعامل مع الطلبات ودمج معالجة الذكاء الاصطناعي.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl h-fit">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">قاعدة المعرفة (Knowledge Base)</h3>
                  <p className="text-slate-600 text-sm">تخزين المعلومات المنظمة بصيغة JSON لسهولة البحث والاسترجاع.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl h-fit">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">نموذج الذكاء الاصطناعي</h3>
                  <p className="text-slate-600 text-sm">توليد ردود سياقية دقيقة بناءً على المعلومات المسترجعة من قاعدة المعرفة.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="bg-blue-600 rounded-[2rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl font-black mb-4">سير عمل النظام</h2>
            <p className="text-blue-100 max-w-xl mx-auto">كيف تتم معالجة سؤال المستخدم وتحويله إلى إجابة ذكية؟</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {[
              { step: "01", title: "إرسال السؤال", desc: "المستخدم يرسل استفساره عبر الدردشة", icon: MessageSquare },
              { step: "02", title: "البحث", desc: "النظام يبحث في قاعدة المعرفة", icon: Search },
              { step: "03", title: "الاسترجاع", desc: "استخراج المعلومات ذات الصلة", icon: Database },
              { step: "04", title: "المعالجة", desc: "الذكاء الاصطناعي يولد الاستجابة", icon: Cpu },
              { step: "05", title: "الإجابة", desc: "إرسال الرد النهائي للمستخدم", icon: CheckCircle2 },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <item.icon size={28} />
                </div>
                <div className="text-xs font-bold text-blue-200 mb-1">الخطوة {item.step}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-blue-100 leading-tight">{item.desc}</p>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-[calc(20%*idx+15%)] w-[10%] h-[2px] bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech">
          <SectionTitle title="التقنيات والتطوير" icon={Code} />
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "React", color: "bg-blue-50 text-blue-600" },
              { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-600" },
              { name: "Node.js", color: "bg-green-50 text-green-600" },
              { name: "Express.js", color: "bg-slate-100 text-slate-700" },
              { name: "Puter.js", color: "bg-indigo-50 text-indigo-600" },
              { name: "JSON", color: "bg-amber-50 text-amber-600" },
              { name: "Vercel", color: "bg-black text-white" },
              { name: "GitHub", color: "bg-slate-800 text-white" },
            ].map((tech, idx) => (
              <motion.span 
                key={idx}
                whileHover={{ scale: 1.1 }}
                className={`px-6 py-3 rounded-full font-bold text-sm shadow-sm ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Benefits & Future */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <SectionTitle title="الفوائد الرئيسية" icon={TrendingUp} />
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              {[
                { title: "استجابة أسرع", desc: "تقليل وقت الانتظار للمستخدمين بشكل ملحوظ.", icon: Clock },
                { title: "تقليل التكاليف", desc: "خفض تكاليف التشغيل والدعم الفني البشري.", icon: Zap },
                { title: "إدارة مركزية", desc: "سهولة تحديث المعلومات من مكان واحد.", icon: Database },
                { title: "تحسين التجربة", desc: "تفاعل ذكي يشعر المستخدم بالاهتمام والدقة.", icon: Sparkles },
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                    <benefit.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="التحسينات المستقبلية" icon={Sparkles} />
            <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-6">
              {[
                { title: "تكامل واجهات البرمجة", desc: "ربط النظام مع أنظمة CRM وERP المختلفة.", icon: Layers },
                { title: "التفاعل الصوتي", desc: "دعم الأوامر الصوتية والردود المنطوقة.", icon: Mic },
                { title: "تحسينات تعلم الآلة", desc: "تطوير قدرة النظام على التعلم من المحادثات.", icon: TrendingUp },
                { title: "لوحة تحكم مباشرة", desc: "تحليلات البيانات في الوقت الحقيقي للأداء.", icon: BarChart3 },
              ].map((future, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2 bg-white/10 text-blue-400 rounded-lg">
                    <future.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{future.title}</h4>
                    <p className="text-slate-400 text-sm">{future.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <section className="text-center py-20 border-t border-slate-200">
          <h2 className="text-3xl font-black text-slate-900 mb-6">الخاتمة</h2>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
            يمثل مشروع AKAI نموذجاً عملياً لتطبيق تقنيات الذكاء الاصطناعي في مجال إدارة المعرفة وتقديم الدعم الذكي. 
            يساهم هذا النظام في تحسين كفاءة الوصول إلى المعلومات وتقليل الاعتماد على الطرق التقليدية، 
            مما يعزز التحول الرقمي ويحسن عمليات التواصل بطريقة أكثر كفاءة ومرونة.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Bot size={24} />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">AKAI Project</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/skcc-dev/AKAI.git" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium">
              <Github size={18} /> GitHub
            </a>
            <a href="https://akai-one.vercel.app/" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium">
              <Globe size={18} /> Vercel Demo
            </a>
            <a href="https://docs.puter.com/" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium">
              <ExternalLink size={18} /> Puter Docs
            </a>
          </div>
          
          <p className="text-slate-400 text-xs">© 2026 مشروع AKAI - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
