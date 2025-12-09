import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [length, setLength] = useState([5]);
  const [showCalculation, setShowCalculation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeRoadType, setActiveRoadType] = useState('federal');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(167, 139, 250, 0.15), transparent 40%)`
        }}
      />

      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center neon-glow">
                <Icon name="Layers" className="text-white" size={24} />
              </div>
              <span className="text-white font-bold text-2xl gradient-text">SPPI Engineering</span>
            </div>
            <div className="hidden lg:flex gap-8">
              {['Главная', 'Направления', 'Технологии', 'Портфолио', 'Калькулятор', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-all text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 neon-glow">
              Расчёт проекта
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8 neon-border">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-glow" />
              <span className="text-purple-400 text-sm font-medium tracking-wider">ИНЖЕНЕРНОЕ ПРОЕКТИРОВАНИЕ ДОРОГ</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Дороги к будущему.<br />
              <span className="gradient-text neon-text">Технологии настоящего.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              BIM-проектирование и инновационные технологии стабилизации грунтов. 
              Снижение затрат до 30%, сокращение сроков в 2 раза.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 neon-glow rounded-2xl"
                onClick={() => scrollToSection('калькулятор')}
              >
                <Icon name="Calculator" className="mr-2" size={24} />
                Рассчитать экономию
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 glass-effect text-white border border-white/20 hover:border-purple-500/50 rounded-2xl"
                onClick={() => scrollToSection('портфолио')}
              >
                <Icon name="Eye" className="mr-2" size={24} />
                Наши проекты
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Target', value: '50+', label: 'Реализованных проектов', color: 'from-purple-500 to-blue-500' },
              { icon: 'TrendingDown', value: '30%', label: 'Экономия затрат', color: 'from-cyan-500 to-blue-500' },
              { icon: 'Zap', value: '2x', label: 'Быстрее аналогов', color: 'from-blue-500 to-indigo-500' },
              { icon: 'Shield', value: '100%', label: 'Прохождение экспертизы', color: 'from-green-500 to-emerald-500' },
            ].map((stat, i) => (
              <div key={i} className="glass-effect rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 neon-border">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center neon-glow`}>
                  <Icon name={stat.icon as any} className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-white mb-2 gradient-text">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="направления" className="py-24 relative">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1622473590773-f588134b6ce7?w=1920&q=80" 
            alt="Road background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              От федеральной трассы до городского проезда
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Полный спектр проектных работ. Проектируем дороги всех типов и категорий.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {[
              {
                id: 'federal',
                icon: 'MoveRight',
                title: 'Федеральные и региональные',
                subtitle: 'Магистрали I-IV категорий',
                image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80'
              },
              {
                id: 'urban',
                icon: 'Building2',
                title: 'Городские улицы',
                subtitle: 'От магистралей до проездов',
                image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80'
              },
              {
                id: 'industrial',
                icon: 'Factory',
                title: 'Промышленные',
                subtitle: 'Карьерные, рудничные, сверхнагрузки',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
              },
              {
                id: 'infrastructure',
                icon: 'Construction',
                title: 'ИССО',
                subtitle: 'Мосты, путепроводы, тоннели',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
              },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveRoadType(type.id)}
                className={`glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 text-left ${
                  activeRoadType === type.id ? 'neon-border ring-2 ring-purple-500/50' : 'border border-white/10'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center neon-glow`}>
                    <Icon name={type.icon as any} className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-sm text-white/60">{type.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="glass-effect rounded-3xl p-10 neon-border max-w-7xl mx-auto animate-fade-in">
            {activeRoadType === 'federal' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center neon-glow">
                      <Icon name="MoveRight" className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Дороги федерального и регионального значения</h3>
                      <p className="text-white/60">Внегородские магистрали</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Для кого</span>
                    <p className="text-white/80 mt-2">Минтранс, крупные госкомпании, инвесторы в межрегиональную инфраструктуру</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 block">Что проектируем</span>
                    <ul className="space-y-3">
                      {[
                        'Скоростные дороги и автомагистрали (I кат.) с многоуровневыми развязками',
                        'Дороги обычные (I-IV кат.) для связи населенных пунктов',
                        'Обходы населенных пунктов',
                        'Подъезды к транспортным узлам (порты, аэропорты, логистика)'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl mb-6">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 block">Акцент</span>
                    <p className="text-white/80">
                      Сложные инженерные изыскания, проектирование многоуровневых развязок, 
                      стабилизация грунтов на протяженных участках, обеспечение высоких 
                      скоростных режимов, безопасность
                    </p>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl border-l-4 border-purple-500">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 block">Кейс</span>
                    <p className="text-white font-semibold mb-1">Проектирование обхода г. Новоград</p>
                    <p className="text-white/70 text-sm">Категория I. Применение стабилизации на болотистых участках протяженностью 18 км</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80" 
                    alt="Federal highway"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
              </div>
            )}

            {activeRoadType === 'urban' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center neon-glow">
                      <Icon name="Building2" className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Городские улицы и дороги</h3>
                      <p className="text-white/60">Муниципальная инфраструктура</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Для кого</span>
                    <p className="text-white/80 mt-2">Муниципалитеты, девелоперы, застройщики кварталов</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 block">Что проектируем</span>
                    <ul className="space-y-3">
                      {[
                        'Магистральные улицы общегородского и районного значения',
                        'Улицы и дороги местного значения',
                        'Проекты организации дорожного движения (ПОДД)',
                        'Транспортные узлы и развязки в стесненных условиях'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl mb-6">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 block">Акцент</span>
                    <p className="text-white/80">
                      Интеграция с инженерными коммуникациями, проектирование ливневой канализации 
                      и дренажа, сложное пересечение уровней, организация пешеходных потоков 
                      и общественного транспорта, стабилизация оснований под коммуникациями
                    </p>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl border-l-4 border-cyan-500">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 block">Кейс</span>
                    <p className="text-white font-semibold mb-1">Реконструкция ул. Центральной в г. Москва</p>
                    <p className="text-white/70 text-sm">Устройство карманных остановок, новое водоотведение, выделенные полосы для транспорта</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80" 
                    alt="Urban streets"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
              </div>
            )}

            {activeRoadType === 'industrial' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center neon-glow">
                      <Icon name="Factory" className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Промышленные и специальные дороги</h3>
                      <p className="text-white/60">Технологические проезды</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Для кого</span>
                    <p className="text-white/80 mt-2">Горнодобывающие, нефтегазовые, промышленные предприятия, сельхозпроизводители</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 block">Что проектируем</span>
                    <ul className="space-y-3">
                      {[
                        'Карьерные, рудничные, лесовозные дороги (по спецнормам СН)',
                        'Подъезды к промплощадкам и складам',
                        'Дороги на территориях предприятий',
                        'Дороги для тяжелых нагрузок (спецтракторы, негабарит)'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl mb-6">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 block">Акцент</span>
                    <p className="text-white/80">
                      Расчет на сверхнормативные нагрузки, проектирование усиленных дорожных одежд, 
                      стабилизация грунтов под постоянным воздействием тяжелой техники, 
                      учет специфических условий (вибрация, химическое воздействие)
                    </p>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl border-l-4 border-blue-500">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2 block">Кейс</span>
                    <p className="text-white font-semibold mb-1">Проект внутрикарьерных дорог «Гранитный»</p>
                    <p className="text-white/70 text-sm">Расчет на нагрузку от БелАЗов 90 тонн, специальные требования к уклонам</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80" 
                    alt="Industrial roads"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
              </div>
            )}

            {activeRoadType === 'infrastructure' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center neon-glow">
                      <Icon name="Construction" className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Искусственные сооружения (ИССО)</h3>
                      <p className="text-white/60">Мосты и сложные конструкции</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Для кого</span>
                    <p className="text-white/80 mt-2">Все заказчики, чьи трассы требуют сложных пересечений</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3 block">Что проектируем</span>
                    <ul className="space-y-3">
                      {[
                        'Мосты, путепроводы, эстакады',
                        'Тоннели',
                        'Шумозащитные экраны, галереи',
                        'Большепролетные водопропускные трубы'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl mb-6">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 block">Акцент</span>
                    <p className="text-white/80">
                      Комплексное проектирование «мост + подходы», устройство и стабилизация 
                      оснований под опорами, расчет сложных фундаментов в слабых грунтах
                    </p>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl border-l-4 border-green-500">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 block">Кейс</span>
                    <p className="text-white font-semibold mb-1">Путепровод через ж/д пути М-7</p>
                    <p className="text-white/70 text-sm">Укрепление насыпей геосинтетикой, проектирование опор в водонасыщенных грунтах</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-[600px]">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" 
                    alt="Bridge infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80" 
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Решаем сложные задачи
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Превращаем инженерные вызовы в проектные решения
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Mountain',
                title: 'Сложные грунтовые условия',
                problem: 'Болота, вечная мерзлота, просадочные грунты',
                solution: 'Стабилизация in-situ вместо дорогостоящей замены',
                gradient: 'from-purple-500 to-blue-500'
              },
              {
                icon: 'DollarSign',
                title: 'Оптимизация бюджета',
                solution: 'Укрепление местных грунтов, минимум импорта',
                problem: 'Дефицит и высокая стоимость материалов',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: 'Rocket',
                title: 'Сжатые сроки',
                problem: 'Реконструкция без остановки движения',
                solution: 'Ресайклинг и армирование существующего полотна',
                gradient: 'from-blue-500 to-indigo-500'
              },
            ].map((item, i) => (
              <div key={i} className="glass-effect rounded-3xl p-8 group hover:scale-105 transition-all duration-300 neon-border">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 neon-glow group-hover:animate-float`}>
                  <Icon name={item.icon as any} className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Проблема</span>
                    <p className="text-white/70 mt-1">{item.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Решение</span>
                    <p className="text-white/70 mt-1">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Реализованные проекты
            </h2>
            <p className="text-xl text-white/70">
              Результаты, измеримые в цифрах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Дорога к промышленному комплексу',
                location: 'Московская область',
                challenge: 'Просадочные грунты на 80% участка',
                solution: 'Стабилизация цементом глубиной 0.8м',
                savings: '90 млн ₽',
                time: '2 месяца',
                length: '12 км',
                gradient: 'from-purple-600 to-blue-600',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
              },
              {
                title: 'Подъезд к логистическому центру',
                location: 'Ленинградская область',
                challenge: 'Высокий УГВ, болотистая местность',
                solution: 'Комплексная стабилизация с геосинтетикой',
                savings: '45 млн ₽',
                time: '1.5 месяца',
                length: '8 км',
                gradient: 'from-cyan-600 to-blue-600',
                image: 'https://images.unsplash.com/photo-1586864387634-e410b6773e4f?w=800&q=80'
              },
              {
                title: 'Трасса к морскому порту',
                location: 'Приморский край',
                challenge: 'Дефицит щебня, высокие транспортные затраты',
                solution: 'Укрепление битумной эмульсией',
                savings: '120 млн ₽',
                time: '3 месяца',
                length: '25 км',
                gradient: 'from-blue-600 to-indigo-600',
                image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
              },
            ].map((project, i) => (
              <div key={i} className="glass-effect rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 neon-border">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute top-4 right-4 glass-effect px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-semibold">{project.length}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2">{project.location}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-semibold text-red-400 uppercase">Вызов</span>
                      <p className="text-white/70 text-sm mt-1">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-green-400 uppercase">Решение</span>
                      <p className="text-white/70 text-sm mt-1">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <div className="text-xs text-white/50 mb-1">Экономия</div>
                      <div className="text-2xl font-bold gradient-text">{project.savings}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50 mb-1">Срок</div>
                      <div className="text-lg font-semibold text-white">{project.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="технологии" className="py-24 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1622473590773-f588134b6ce7?w=1920&q=80" 
            alt="Technology background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Технологии стабилизации
            </h2>
            <p className="text-xl text-white/70">
              Инновационные решения для надежного основания
            </p>
          </div>

          <Tabs defaultValue="cement" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 glass-effect border border-white/10 p-2 mb-12 rounded-2xl">
              {[
                { value: 'cement', label: 'Вяжущие', icon: 'Layers' },
                { value: 'bitumen', label: 'Битумные', icon: 'Droplet' },
                { value: 'geo', label: 'Геосинтетики', icon: 'Grid3x3' },
                { value: 'complex', label: 'Комплексные', icon: 'Settings' }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-xl py-4 text-sm lg:text-base"
                >
                  <Icon name={tab.icon as any} className="mr-2" size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.value === 'cement' ? 'Вяж.' : tab.value === 'bitumen' ? 'Бит.' : tab.value === 'geo' ? 'Гео' : 'Комп.'}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="cement" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-6 lg:p-10 neon-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center neon-glow flex-shrink-0">
                    <Icon name="Layers" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Стабилизация вяжущими</h3>
                    <p className="text-white/60">Цемент, известь, комбинированные составы</p>
                  </div>
                </div>

                <p className="text-white/80 text-base lg:text-lg mb-8">
                  Проектный расчет оптимального состава и толщины слоя для преобразования 
                  пучинистого грунта в прочное, долговечное основание.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="glass-effect p-6 rounded-2xl">
                    <Icon name="Target" className="text-purple-400 mb-4" size={32} />
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Применение</h4>
                    <ul className="space-y-2 text-sm lg:text-base text-white/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                        Глинистые грунты
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                        Высокий УГВ
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                        Просадочные участки
                      </li>
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl">
                    <Icon name="TrendingUp" className="text-cyan-400 mb-4" size={32} />
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Преимущества</h4>
                    <ul className="space-y-2 text-sm lg:text-base text-white/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                        Экономия до 40%
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                        Сроки -2-3 месяца
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                        Срок службы 25+ лет
                      </li>
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl sm:col-span-2 lg:col-span-1">
                    <Icon name="Award" className="text-blue-400 mb-4" size={32} />
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Результат</h4>
                    <ul className="space-y-2 text-sm lg:text-base text-white/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        Прочность CBR 80+
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        Морозостойкость F100
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                        Водостойкость W4
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 relative rounded-2xl overflow-hidden h-64 lg:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" 
                    alt="Soil stabilization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bitumen" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-6 lg:p-10 neon-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center neon-glow flex-shrink-0">
                    <Icon name="Droplet" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Битумные материалы</h3>
                    <p className="text-white/60">Эмульсии, вспененный битум, ресайклинг</p>
                  </div>
                </div>
                <p className="text-white/80 text-base lg:text-lg mb-6">
                  Проектирование холодного ресайклинга и укрепления существующих дорожных одежд. 
                  Минимальные сроки, отсутствие простоев движения.
                </p>
                <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80" 
                    alt="Bitumen work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="geo" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-6 lg:p-10 neon-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center neon-glow flex-shrink-0">
                    <Icon name="Grid3x3" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Геосинтетические материалы</h3>
                    <p className="text-white/60">Георешетки, геотекстиль, геомембраны</p>
                  </div>
                </div>
                <p className="text-white/80 text-base lg:text-lg mb-6">
                  Армирование, разделение слоев, дренаж. Увеличение несущей способности 
                  на 40-60% при минимальных затратах.
                </p>
                <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1599492880336-8d38fed31d03?w=1200&q=80" 
                    alt="Geosynthetics"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="complex" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-6 lg:p-10 neon-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center neon-glow flex-shrink-0">
                    <Icon name="Settings" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Комплексные решения</h3>
                    <p className="text-white/60">Глубокое смешивание, сваи, комбинированные методы</p>
                  </div>
                </div>
                <p className="text-white/80 text-base lg:text-lg mb-6">
                  Для объектов с особо сложными условиями: глубокое смешивание грунтов, 
                  буросмесительные сваи, jet-grouting.
                </p>
                <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80" 
                    alt="Complex solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="калькулятор" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text">
                Калькулятор экономии
              </h2>
              <p className="text-lg md:text-xl text-white/70">
                Узнайте потенциал оптимизации вашего проекта
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-6 lg:p-10 neon-border">
              <div className="space-y-8">
                <div>
                  <Label className="text-white text-base lg:text-lg mb-3 block">Тип объекта</Label>
                  <Select>
                    <SelectTrigger className="glass-effect border-white/20 text-white h-12 lg:h-14 text-base lg:text-lg rounded-xl">
                      <SelectValue placeholder="Выберите тип объекта" />
                    </SelectTrigger>
                    <SelectContent className="glass-effect border-white/20">
                      <SelectItem value="new">Новая дорога</SelectItem>
                      <SelectItem value="reconstruction">Реконструкция</SelectItem>
                      <SelectItem value="reinforcement">Усиление участка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white text-base lg:text-lg mb-3 block">
                    Длина участка: <span className="gradient-text font-bold">{length[0]} км</span>
                  </Label>
                  <Slider
                    value={length}
                    onValueChange={setLength}
                    max={50}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-white text-base lg:text-lg mb-3 block">Тип грунта</Label>
                  <Select>
                    <SelectTrigger className="glass-effect border-white/20 text-white h-12 lg:h-14 text-base lg:text-lg rounded-xl">
                      <SelectValue placeholder="Выберите тип грунта" />
                    </SelectTrigger>
                    <SelectContent className="glass-effect border-white/20">
                      <SelectItem value="clay">Глина/Суглинок</SelectItem>
                      <SelectItem value="sand">Песок</SelectItem>
                      <SelectItem value="peat">Торф</SelectItem>
                      <SelectItem value="bulk">Насыпной</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full h-14 lg:h-16 text-base lg:text-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 neon-glow rounded-2xl"
                  onClick={() => setShowCalculation(true)}
                >
                  <Icon name="Sparkles" className="mr-2" size={24} />
                  Рассчитать экономию
                </Button>

                {showCalculation && (
                  <div className="glass-effect rounded-2xl p-6 lg:p-8 neon-border animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center neon-glow">
                        <Icon name="CheckCircle" className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">Предварительный расчет</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
                      <div className="text-center p-4 lg:p-6 glass-effect rounded-xl">
                        <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">40%</div>
                        <div className="text-white/60 text-xs lg:text-sm">Сокращение щебня</div>
                      </div>
                      <div className="text-center p-4 lg:p-6 glass-effect rounded-xl">
                        <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">25%</div>
                        <div className="text-white/60 text-xs lg:text-sm">Снижение затрат</div>
                      </div>
                      <div className="text-center p-4 lg:p-6 glass-effect rounded-xl">
                        <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">2 мес</div>
                        <div className="text-white/60 text-xs lg:text-sm">Ускорение работ</div>
                      </div>
                    </div>

                    <div className="glass-effect rounded-2xl p-6">
                      <h4 className="text-white font-semibold text-base lg:text-lg mb-6">Получить детальный расчет:</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input placeholder="Ваше имя" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                        <Input placeholder="Компания" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                        <Input placeholder="Телефон" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                        <Input placeholder="Email" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                      </div>
                      <Button className="w-full mt-6 h-12 lg:h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 rounded-xl">
                        <Icon name="Send" className="mr-2" size={20} />
                        Получить расчет на почту
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-6 lg:p-12 neon-border">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 gradient-text">
                Начнем сотрудничество?
              </h2>
              <p className="text-lg lg:text-xl text-white/70">
                Бесплатная консультация инженера-проектировщика
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67', gradient: 'from-purple-500 to-blue-500' },
                  { icon: 'Mail', label: 'Email', value: 'info@sppi.space', gradient: 'from-cyan-500 to-blue-500' },
                  { icon: 'MapPin', label: 'Офис', value: 'г. Москва, ул. Инженерная, 12', gradient: 'from-blue-500 to-indigo-500' },
                ].map((contact, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-12 lg:w-14 h-12 lg:h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center neon-glow flex-shrink-0`}>
                      <Icon name={contact.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">{contact.label}</div>
                      <div className="text-white font-semibold text-base lg:text-lg break-all">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="glass-effect border-white/20 text-white h-12 lg:h-14 rounded-xl" />
                <Input placeholder="Телефон" className="glass-effect border-white/20 text-white h-12 lg:h-14 rounded-xl" />
                <Input placeholder="Email" className="glass-effect border-white/20 text-white h-12 lg:h-14 rounded-xl" />
                <Button className="w-full h-12 lg:h-14 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 neon-glow rounded-xl text-base lg:text-lg">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center neon-glow">
                <Icon name="Layers" className="text-white" size={20} />
              </div>
              <span className="text-white font-bold text-xl gradient-text">SPPI Engineering</span>
            </div>
            <div className="text-white/50 text-sm">
              © 2024 Инженерное проектирование дорог
            </div>
            <div className="flex gap-4">
              {['Linkedin', 'Youtube', 'Mail'].map((social) => (
                <button key={social} className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-transform neon-border">
                  <Icon name={social as any} className="text-white" size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;