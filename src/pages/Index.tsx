import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
              {['Главная', 'Технологии', 'Процесс', 'Услуги', 'Портфолио', 'Контакты'].map((item) => (
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
                className="text-lg px-10 py-7 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 neon-glow rounded-2xl"
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
              { icon: 'Target', value: '50+', label: 'Реализованных проектов', color: 'from-purple-500 to-pink-500' },
              { icon: 'TrendingDown', value: '30%', label: 'Экономия затрат', color: 'from-cyan-500 to-blue-500' },
              { icon: 'Zap', value: '2x', label: 'Быстрее аналогов', color: 'from-pink-500 to-orange-500' },
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

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
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
                gradient: 'from-purple-500 to-pink-500'
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
                gradient: 'from-pink-500 to-orange-500'
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
                gradient: 'from-purple-600 to-pink-600',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800'
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
                image: 'https://images.unsplash.com/photo-1586864387634-e410b6773e4f?w=800'
              },
              {
                title: 'Трасса к морскому порту',
                location: 'Приморский край',
                challenge: 'Дефицит щебня, высокие транспортные затраты',
                solution: 'Укрепление битумной эмульсией',
                savings: '120 млн ₽',
                time: '3 месяца',
                length: '25 км',
                gradient: 'from-pink-600 to-orange-600',
                image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800'
              },
            ].map((project, i) => (
              <div key={i} className="glass-effect rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 neon-border">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
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
        <div className="container mx-auto px-4">
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
                { value: 'cement', label: 'Вяжущие материалы', icon: 'Layers' },
                { value: 'bitumen', label: 'Битумные смеси', icon: 'Droplet' },
                { value: 'geo', label: 'Геосинтетики', icon: 'Grid3x3' },
                { value: 'complex', label: 'Комплексные', icon: 'Settings' }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-xl py-4"
                >
                  <Icon name={tab.icon as any} className="mr-2" size={18} />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="cement" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-10 neon-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow">
                    <Icon name="Layers" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Стабилизация вяжущими</h3>
                    <p className="text-white/60">Цемент, известь, комбинированные составы</p>
                  </div>
                </div>

                <p className="text-white/80 text-lg mb-8">
                  Проектный расчет оптимального состава и толщины слоя для преобразования 
                  пучинистого грунта в прочное, долговечное основание.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="glass-effect p-6 rounded-2xl">
                    <Icon name="Target" className="text-purple-400 mb-4" size={32} />
                    <h4 className="text-xl font-semibold text-white mb-3">Применение</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        Глинистые грунты
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        Высокий УГВ
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        Просадочные участки
                      </li>
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl">
                    <Icon name="TrendingUp" className="text-cyan-400 mb-4" size={32} />
                    <h4 className="text-xl font-semibold text-white mb-3">Преимущества</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        Экономия до 40%
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        Сроки -2-3 месяца
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        Срок службы 25+ лет
                      </li>
                    </ul>
                  </div>

                  <div className="glass-effect p-6 rounded-2xl">
                    <Icon name="Award" className="text-pink-400 mb-4" size={32} />
                    <h4 className="text-xl font-semibold text-white mb-3">Результат</h4>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                        Прочность CBR 80+
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                        Морозостойкость F100
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                        Водостойкость W4
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bitumen" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-10 neon-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center neon-glow">
                    <Icon name="Droplet" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Битумные материалы</h3>
                    <p className="text-white/60">Эмульсии, вспененный битум, ресайклинг</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg">
                  Проектирование холодного ресайклинга и укрепления существующих дорожных одежд. 
                  Минимальные сроки, отсутствие простоев движения.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="geo" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-10 neon-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center neon-glow">
                    <Icon name="Grid3x3" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Геосинтетические материалы</h3>
                    <p className="text-white/60">Георешетки, геотекстиль, геомембраны</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg">
                  Армирование, разделение слоев, дренаж. Увеличение несущей способности 
                  на 40-60% при минимальных затратах.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="complex" className="animate-fade-in">
              <div className="glass-effect rounded-3xl p-10 neon-border">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center neon-glow">
                    <Icon name="Settings" className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Комплексные решения</h3>
                    <p className="text-white/60">Глубокое смешивание, сваи, комбинированные методы</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg">
                  Для объектов с особо сложными условиями: глубокое смешивание грунтов, 
                  буросмесительные сваи, jet-grouting.
                </p>
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
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
                Калькулятор экономии
              </h2>
              <p className="text-xl text-white/70">
                Узнайте потенциал оптимизации вашего проекта
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-10 neon-border">
              <div className="space-y-8">
                <div>
                  <Label className="text-white text-lg mb-3 block">Тип объекта</Label>
                  <Select>
                    <SelectTrigger className="glass-effect border-white/20 text-white h-14 text-lg rounded-xl">
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
                  <Label className="text-white text-lg mb-3 block">Длина участка: <span className="gradient-text font-bold">{length[0]} км</span></Label>
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
                  <Label className="text-white text-lg mb-3 block">Тип грунта</Label>
                  <Select>
                    <SelectTrigger className="glass-effect border-white/20 text-white h-14 text-lg rounded-xl">
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
                  className="w-full h-16 text-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 neon-glow rounded-2xl"
                  onClick={() => setShowCalculation(true)}
                >
                  <Icon name="Sparkles" className="mr-2" size={24} />
                  Рассчитать экономию
                </Button>

                {showCalculation && (
                  <div className="glass-effect rounded-2xl p-8 neon-border animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center neon-glow">
                        <Icon name="CheckCircle" className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Предварительный расчет</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 glass-effect rounded-xl">
                        <div className="text-4xl font-bold gradient-text mb-2">40%</div>
                        <div className="text-white/60 text-sm">Сокращение щебня</div>
                      </div>
                      <div className="text-center p-6 glass-effect rounded-xl">
                        <div className="text-4xl font-bold gradient-text mb-2">25%</div>
                        <div className="text-white/60 text-sm">Снижение затрат</div>
                      </div>
                      <div className="text-center p-6 glass-effect rounded-xl">
                        <div className="text-4xl font-bold gradient-text mb-2">2 мес</div>
                        <div className="text-white/60 text-sm">Ускорение работ</div>
                      </div>
                    </div>

                    <div className="glass-effect rounded-2xl p-6">
                      <h4 className="text-white font-semibold text-lg mb-6">Получить детальный расчет:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Ваше имя" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                        <Input placeholder="Компания" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                        <Input placeholder="Телефон" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                        <Input placeholder="Email" className="glass-effect border-white/20 text-white h-12 rounded-xl" />
                      </div>
                      <Button className="w-full mt-6 h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 rounded-xl">
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
          <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-12 neon-border">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6 gradient-text">
                Начнем сотрудничество?
              </h2>
              <p className="text-xl text-white/70">
                Бесплатная консультация инженера-проектировщика
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67', gradient: 'from-purple-500 to-pink-500' },
                  { icon: 'Mail', label: 'Email', value: 'info@sppi.space', gradient: 'from-cyan-500 to-blue-500' },
                  { icon: 'MapPin', label: 'Офис', value: 'г. Москва, ул. Инженерная, 12', gradient: 'from-pink-500 to-orange-500' },
                ].map((contact, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center neon-glow flex-shrink-0`}>
                      <Icon name={contact.icon as any} className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">{contact.label}</div>
                      <div className="text-white font-semibold text-lg">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="glass-effect border-white/20 text-white h-14 rounded-xl" />
                <Input placeholder="Телефон" className="glass-effect border-white/20 text-white h-14 rounded-xl" />
                <Input placeholder="Email" className="glass-effect border-white/20 text-white h-14 rounded-xl" />
                <Button className="w-full h-14 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 neon-glow rounded-xl text-lg">
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
