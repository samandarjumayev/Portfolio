import { useContext, useState } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Sun } from 'lucide-react';
import { UserContext } from '../App';
import SunCloud from '../ui/SunCloud';

export default function Home() {
  const {isDark} = useContext(UserContext);

  const skills = ['HTML', 'CSS', 'SASS', 'Tailwind CSS', 'JavaScript', 'React JS', 'GitHub', 'Redux Toolkit'];
  
  const experiences = [
    {
      date: 'Sep 2012-May 2023',
      title: '23-maktab',
      desc: 'Men 2012-yili 7-yoshimda maktabga chiqqanman. Jarqo\'rg\'on tumanidagi "Muqimiy nomidagi" 23-maktabda tahsil olganman va 2023-yili shu maktabni tamomlaganman. Maktabni tugatiboq O\'qishga GRANT asosida qabul qilinganman.'
    },
    {
      date: 'Sep 2022-Aug 2023',
      title: 'Termiz | Galaktika o\'quv markazi',
      desc: '2022-yil sentabr oyida, Matematika va Fizika fanlaridan chuqur tayyorlanish uchun Termiz shaharga repititorga borganman. Termizda "Galaktika" o\'quv markazida ustozim Mirjalol aka Matematika fanidan tayyorlagan. Abiturientlik davrida ham o\'ziga yarasha qiyinchiliklar bo\'lgan, lekin yaxshi davr bo\'lgan'
    },
    {
      date: 'Sep 2023- ... 2027',
      title: 'TATU | Samarqand',
      desc: '2023-yil 6-avgust kuni ertalab DTM imtihoniga kirganman va 3 soat davomida 2 ta Asosiy va 3 ta Majburiy fanlardan imtihon topshirganman, DTM Natijam 20-avgust kuni chiqqan va Men 118 ball bilan Toshkent Axborot Texnologiyalari Universiteti Samarqand filialiga Grant asosida 🎓Talaba🎓 bo\'ldim Alhamdulillah'
    }
  ];

  const mySkills = [
    { image: 'https://cdn-icons-png.flaticon.com/128/17482/17482427.png', title: 'HTML & CSS', org: 'Origamid', hours: '23 hours' },
    { image: 'https://cdn-icons-png.flaticon.com/128/4248/4248104.png', title: 'Tailwind CSS', org: 'Origamid', hours: '8 hours' },
    { image: 'https://cdn-icons-png.flaticon.com/128/13191/13191281.png', title: 'UI / UX Design', org: 'Origamid', hours: '17 hours' },
    { image: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', title: 'JavaScript', org: 'Origamid', hours: '37 hours' },
    { image: 'https://cdn-icons-png.flaticon.com/128/15772/15772797.png', title: 'React JS', org: 'Rodrigo Braonas', hours: '12 hours' },
    { image: 'https://cdn-icons-png.flaticon.com/128/270/270798.png', title: 'GitHub', org: 'Rodrigo Braonas', hours: '12 hours' }
  ];

  const contacts = [
    { icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111646.png', label: 'Telegram', color: 'text-blue-400', toLink: 'https://t.me/developersamandar' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png', label: 'Instagram', color: 'text-pink-400', toLink: 'https://instagram.com/developer_samandar' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/270/270798.png', label: 'GitHub', color: 'text-gray-400', toLink: 'https://github.com/samandarjumayev' },
    { icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047587.png', label: 'E-mail', color: 'text-red-400' }
  ];

  return (
    <div className={`${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-300`}>

      {/* HERO SECTION */}
      <section className={`${isDark ? 'bg-slate-900' : 'bg-blue-50'} relative md:py-30 py-7 px-4 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* CODE FRAME */}
          <div className="flex justify-center">
            <div className={`w-58 h-58 flex items-end justify-center relative`}>
              <div className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${isDark ? 'text-cyan-400' : 'text-blue-500'} md:scale-130 text-4xl font-bold`}>
                <SunCloud />
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Hi, I'm Samandar.</h2>
            <p className={`text-3xl font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Frontend Developer</p>
            
            <div className="flex gap-4 pt-6">
              {[
                'https://cdn-icons-png.flaticon.com/128/1051/1051277.png',
                'https://cdn-icons-png.flaticon.com/128/732/732190.png',
                'https://cdn-icons-png.flaticon.com/128/5968/5968292.png',
                'https://cdn-icons-png.flaticon.com/128/1126/1126012.png',
                'https://cdn-icons-png.flaticon.com/128/5968/5968705.png',
                'https://cdn-icons-png.flaticon.com/128/15466/15466163.png'
              ].map((item, index) => (
                <div key={index} className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'} border rounded p-2 w-[40px] cursor-pointer`}>
                  <img src={item} alt="code png" className='w-full' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SCROLLING BAR */}
      <div className={`${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'} border-y py-4 overflow-hidden transition-colors duration-300`}>
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className={`${isDark ? 'text-cyan-400' : 'text-slate-600'} font-semibold text-sm`}>
              {skill} <span className="inline">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ADD ANIMATION STYLES */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

      {/* ABOUT SECTION */}
      <section id="about" className={`${isDark ? 'bg-slate-900' : 'bg-slate-50'} py-10 px-4 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center flex items-center justify-center gap-0">
            About<span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>Me.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isDark ? 'bg-cyan-400' : 'bg-blue-400'} w-full h-76 rounded-lg transition-colors duration-300 overflow-hidden`}>
              <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="" className='h-full w-full object-cover' />
            </div>
            
            <div className={`${isDark ? 'text-slate-300' : 'text-slate-700'} space-y-4 leading-relaxed`}>
              <p className="text-lg font-semibold">Kuchli <span className={`${isDark ? `text-cyan-400` : `text-blue-500`}  transition-colors duration-100`}>Frontend</span>chi bo'lish yo'lida izchil rivojlanayotgan dasturchi..</p>
              <p>Men <span className={`${isDark ? `text-cyan-400` : `text-blue-500`} font-medium`}>Toshkent Axborot Texnologiyalari Universiteti</span>ning 3-kurs talabasi bo‘lib, shu bilan birga <span className='text-[#eca100] font-medium'>Najot Ta'limda</span> Frontend yo‘nalishida o‘qiyapman. Hozirgi maqsadim — zamonaviy web texnologiyalarini chuqur o‘rganib, kuchli Frontend dasturchi darajasiga yetish va real loyihalar orqali tajribamni oshirishdir.</p>
              <p>HTML, CSS, SASS, JavaScript (ES6+), DOM, async/await, Promise, fetch API, Git, React JS (hooks), Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className={`${isDark ? 'bg-slate-950' : 'bg-white'} py-20 px-4 transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Experience<span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>.</span></h2>
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className={`${isDark ? 'text-cyan-400' : 'text-blue-500'} font-semibold text-sm`}>
                  {exp.date}
                </div>
                <div className="md:col-span-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <ArrowUpRight size={18} className={`mt-1 ${isDark ? 'text-cyan-400' : 'text-blue-500'} flex-shrink-0`} />
                  </div>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className={`${isDark ? 'bg-slate-900' : 'bg-slate-50'} py-20 px-4 transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">My Skills<span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>.</span></h2>
          
          <div className="space-y-6">
            {mySkills.map((form, i) => (
              <div key={i} className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-300'} border rounded-lg p-6 flex gap-6 items-center transition-colors duration-300`}>
                <div className={` w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-xl p-1`}>
                  <img src={form.image} alt="" className='w-full h-full object-contain' />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{form.title}</h3>
                </div>
                <div className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm whitespace-nowrap`}>
                  <p>{form.org}</p>
                  <p>{form.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={`${isDark ? 'bg-slate-950' : 'bg-white'} py-20 px-4 transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center">Contact<span className={isDark ? 'text-cyan-400' : 'text-blue-500'}>.</span></h2>
          <p className={`text-center mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Mening Ijtimoiy tarmoqdagi manzillarim</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <a href={contact.toLink} key={i} className={`${isDark ? 'bg-slate-900 border-slate-700 hover:border-cyan-400' : 'bg-slate-50 border-slate-300 hover:border-blue-500'} cursor-pointer border rounded-lg p-6 flex flex-col items-center gap-3 transition-all duration-300 group`}>
                  {/* <Icon size={32} className={`${isDark ? 'text-slate-400 group-hover:text-cyan-400' : 'text-slate-600 group-hover:text-blue-500'} transition-colors`} /> */}
                  <img src={contact.icon} alt="" className='max-w-[60px]' />
                  <span className={`font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{contact.label}</span>
                  <ArrowUpRight size={16} className={`${isDark ? 'text-slate-600 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-500'} transition-colors`} />
                </a>
              );
            })}
          </div>

          <div className={`text-center mt-16 pt-8 border-t ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'}`}>
            <p>©2025 | Frontent React JS | NajotTalim</p>
          </div>
        </div>
      </section>
    </div>
  );
}