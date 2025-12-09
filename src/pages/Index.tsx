import { useState } from 'react';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Layers" className="text-secondary" size={28} />
              <span className="text-white font-bold text-xl">SPPI Engineering</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Технологии', 'Процесс', 'Услуги', 'Портфолио', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/90 hover:text-secondary transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="secondary" size="sm">
              Расчёт проекта
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(217, 91, 67, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(217, 91, 67, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="text-secondary text-sm font-medium">Проектирование дорожных сетей</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Проектируем не просто дороги.<br />
              <span className="text-secondary">Проектируем надежное основание.</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Внедряем BIM и технологии стабилизации грунтов на этапе проектирования. 
              Гарантируем прохождение экспертизы и снижение затрат до 30%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                onClick={() => scrollToSection('калькулятор')}
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать экономию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20"
                onClick={() => scrollToSection('технологии')}
              >
                Технологические решения
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Layers', value: '50+', label: 'Проектов' },
              { icon: 'TrendingDown', value: '30%', label: 'Экономия затрат' },
              { icon: 'Clock', value: '2 мес', label: 'Сокращение сроков' },
              { icon: 'Award', value: '100%', label: 'Экспертиза' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
                <Icon name={stat.icon as any} className="mx-auto mb-3 text-secondary" size={32} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Слабый грунт, перерасход бюджета и срывы сроков?
            </h2>
            <p className="text-xl text-muted-foreground">
              Это решается на этапе проектирования
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'Mountain',
                problem: 'Болотистая местность или вечная мерзлота',
                solution: 'Проектируем стабилизацию in-situ, а не дорогостоящую замену грунта'
              },
              {
                icon: 'Package',
                problem: 'Дефицит и дороговизна щебня в регионе',
                solution: 'Проектируем укрепление местных грунтов вяжущими, сокращая импорт материалов'
              },
              {
                icon: 'Construction',
                problem: 'Реконструкция без остановки движения',
                solution: 'Проектируем ресайклинг и армирование существующего полотна'
              },
            ].map((item, i) => (
              <Card key={i} className="border-2 hover:border-secondary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-lg text-primary">{item.problem}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Узнать решение для вашей задачи
            </Button>
          </div>
        </div>
      </section>

      <section id="процесс" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Полный цикл проектирования
            </h2>
            <p className="text-xl text-muted-foreground">
              От изысканий до рабочей документации в BIM
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: '01',
                title: 'Инженерные изыскания и анализ',
                description: 'Не просто отчет. Цифровая модель грунтов для расчета стабилизации.',
                icon: 'Search'
              },
              {
                number: '02',
                title: 'Проектная документация (ПД)',
                description: 'Разработка с прохождением экспертизы. Конструкция дорожной одежды с обоснованием методов стабилизации.',
                icon: 'FileText'
              },
              {
                number: '03',
                title: 'Рабочая документация (РД) в BIM',
                description: 'Детальные чертежи и спецификации для подрядчика. 3D-модель для устранения коллизий.',
                icon: 'Layers'
              },
              {
                number: '04',
                title: 'Авторский надзор и сопровождение',
                description: 'Контроль реализации проектных решений по стабилизации.',
                icon: 'Eye'
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 mb-8 bg-white p-6 rounded-lg border-l-4 border-secondary hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-2">
                    <Icon name={step.icon as any} className="text-secondary mt-1" size={24} />
                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="технологии" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наши технологические решения
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы не маскируем проблему грунта. Мы проектируем её устранение.
            </p>
          </div>

          <Tabs defaultValue="cement" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="cement">Стабилизация вяжущими</TabsTrigger>
              <TabsTrigger value="bitumen">Битумные материалы</TabsTrigger>
              <TabsTrigger value="geo">Геосинтетики</TabsTrigger>
              <TabsTrigger value="complex">Комплексные решения</TabsTrigger>
            </TabsList>

            <TabsContent value="cement">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Layers" className="text-secondary" size={28} />
                    Стабилизация грунтов вяжущими (цемент, известь)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Проектный расчет состава и толщины слоя для преобразования пучинистого грунта в прочное основание.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Применение:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          Глинистые и пылеватые грунты
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          Участки с высоким УГВ
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          Просадочные грунты
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Преимущества:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="TrendingDown" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          Экономия до 40% на материалах
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Clock" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          Сокращение сроков на 2-3 месяца
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Shield" className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                          Долговечность 25+ лет
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bitumen">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Droplet" className="text-secondary" size={28} />
                    Стабилизация битумными материалами
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Проектирование ресайклинга и укрепления существующих дорожных одежд с использованием битумных эмульсий и вспененного битума.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="geo">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Grid3x3" className="text-secondary" size={28} />
                    Армирование геосинтетиками
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Проектирование с применением георешеток, геотекстиля для разделения, армирования и дренажа.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="complex">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Settings" className="text-secondary" size={28} />
                    Комплексные решения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Глубокое смешивание, сваи и комбинированные методы для объектов с особыми условиями.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="калькулятор" className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Калькулятор предварительной экономии
              </h2>
              <p className="text-xl text-white/80">
                Оцените потенциал экономии с проектным решением по стабилизации
              </p>
            </div>

            <Card className="border-none shadow-2xl">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="project-type">Тип объекта</Label>
                    <Select>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Выберите тип объекта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Новая дорога</SelectItem>
                        <SelectItem value="reconstruction">Реконструкция</SelectItem>
                        <SelectItem value="reinforcement">Усиление участка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="length">Длина участка: {length[0]} км</Label>
                    <Slider
                      id="length"
                      value={length}
                      onValueChange={setLength}
                      max={50}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="soil-type">Преобладающий тип грунта</Label>
                    <Select>
                      <SelectTrigger id="soil-type">
                        <SelectValue placeholder="Выберите тип грунта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Глина/Суглинок</SelectItem>
                        <SelectItem value="sand">Песок</SelectItem>
                        <SelectItem value="peat">Торф</SelectItem>
                        <SelectItem value="bulk">Насыпной</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="category">Категория дороги</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">I категория</SelectItem>
                        <SelectItem value="2">II категория</SelectItem>
                        <SelectItem value="3">III категория</SelectItem>
                        <SelectItem value="4">IV категория</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg" 
                    variant="secondary"
                    onClick={() => setShowCalculation(true)}
                  >
                    <Icon name="Calculator" className="mr-2" size={20} />
                    Рассчитать потенциал экономии
                  </Button>

                  {showCalculation && (
                    <div className="bg-secondary/10 border-2 border-secondary rounded-lg p-6 animate-fade-in">
                      <h3 className="font-bold text-primary text-lg mb-3">Предварительный результат:</h3>
                      <p className="text-muted-foreground mb-4">
                        На проектах с аналогичными параметрами внедрение стабилизации позволило сократить 
                        объем привозного щебня до 40% и снизить стоимость устройства земляного полотна на 15-25%.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 space-y-4">
                        <h4 className="font-semibold text-primary">Для получения индивидуального расчета оставьте контакты:</h4>
                        <div className="grid gap-4">
                          <div>
                            <Label htmlFor="name">Имя</Label>
                            <Input id="name" placeholder="Ваше имя" />
                          </div>
                          <div>
                            <Label htmlFor="company">Компания</Label>
                            <Input id="company" placeholder="Название компании" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" placeholder="+7 (___) ___-__-__" />
                          </div>
                          <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email" type="email" placeholder="your@email.com" />
                          </div>
                          <Button variant="secondary" size="lg" className="w-full">
                            Получить предварительный расчет
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Реализованные проекты
            </h2>
            <p className="text-xl text-muted-foreground">
              Кейсы с измеримыми результатами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Подъездная дорога к промышленному комплексу',
                challenge: 'Слабые просадочные грунты на 80% участка',
                solution: 'Стабилизация грунта цементом на глубину 0.8 м',
                result: 'Экономия 90 млн руб., сокращение сроков на 2 месяца',
                savings: '90 млн ₽'
              },
              {
                title: 'Дорога к логистическому центру',
                challenge: 'Высокий УГВ, болотистая местность',
                solution: 'Комплексная стабилизация с геосинтетикой',
                result: 'Сокращение объема завозного грунта на 65%',
                savings: '45 млн ₽'
              },
              {
                title: 'Трасса к морскому порту',
                challenge: 'Дефицит щебня в регионе, высокие транспортные затраты',
                solution: 'Укрепление местных грунтов битумной эмульсией',
                result: 'Экономия на материалах 55%, ускорение на 1.5 мес',
                savings: '120 млн ₽'
              },
            ].map((project, i) => (
              <Card key={i} className="border-2 hover:border-secondary transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-primary to-primary/80 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={64} />
                  </div>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase">Вызов:</span>
                    <p className="text-sm text-muted-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase">Решение:</span>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase">Результат:</span>
                    <p className="text-sm text-muted-foreground">{project.result}</p>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">Экономия:</span>
                      <span className="text-2xl font-bold text-secondary">{project.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр проектных работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'Search',
                title: 'Инженерные изыскания',
                description: 'Геотехнические исследования, цифровое моделирование грунтов'
              },
              {
                icon: 'FileText',
                title: 'Проектная документация',
                description: 'Разработка ПД с прохождением государственной экспертизы'
              },
              {
                icon: 'Layers',
                title: 'Рабочая документация в BIM',
                description: '3D-моделирование, чертежи, спецификации, сметы'
              },
              {
                icon: 'Settings',
                title: 'Технологические решения',
                description: 'Расчет составов стабилизации, оптимизация конструкций'
              },
              {
                icon: 'Eye',
                title: 'Авторский надзор',
                description: 'Контроль соответствия строительства проектным решениям'
              },
              {
                icon: 'BookOpen',
                title: 'Экспертиза проектов',
                description: 'Проверка проектной документации, поиск оптимизаций'
              },
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                    <Icon name={service.icon as any} className="text-secondary" size={24} />
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Почему нам доверяют
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Award',
                value: '50+',
                label: 'Объектов с применением стабилизации'
              },
              {
                icon: 'TrendingDown',
                value: '>20%',
                label: 'Средняя экономия для заказчика'
              },
              {
                icon: 'Layers',
                value: 'BIM',
                label: 'Сертификация Autodesk & Bentley'
              },
              {
                icon: 'Shield',
                value: 'СРО',
                label: 'Членство в СРО и НОПРИЗ'
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name={item.icon as any} className="text-secondary" size={36} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Готовы проектировать дорогу, которая прослужит дольше?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Получите бесплатную консультацию инженера-проектировщика
            </p>

            <Card className="border-none shadow-2xl">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-secondary mt-1" size={20} />
                      <div className="text-left">
                        <div className="font-semibold text-primary">Телефон</div>
                        <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-secondary mt-1" size={20} />
                      <div className="text-left">
                        <div className="font-semibold text-primary">Email</div>
                        <div className="text-muted-foreground">info@sppi.space</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-secondary mt-1" size={20} />
                      <div className="text-left">
                        <div className="font-semibold text-primary">Офис</div>
                        <div className="text-muted-foreground">г. Москва, ул. Инженерная, 12</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                    <Input placeholder="Email" />
                    <Button variant="secondary" size="lg" className="w-full">
                      <Icon name="Send" className="mr-2" size={20} />
                      Получить консультацию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Layers" className="text-secondary" size={24} />
              <span className="font-bold">SPPI Engineering</span>
            </div>
            <div className="text-sm text-white/70">
              © 2024 Проектирование дорог к промышленным объектам
            </div>
            <div className="flex gap-4">
              {['Linkedin', 'Youtube', 'Mail'].map((social) => (
                <button key={social} className="hover:text-secondary transition-colors">
                  <Icon name={social as any} size={20} />
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
