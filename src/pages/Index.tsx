import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [childrenCount, setChildrenCount] = useState(3);
  const [youngestAge, setYoungestAge] = useState<'до3' | '3-7' | 'старше7'>('до3');
  const [citizenStatus, setCitizenStatus] = useState<'гражданка' | 'вид'>('гражданка');
  const [filterCategory, setFilterCategory] = useState<'все' | 'федеральные' | 'региональные'>('все');
  const [hasChildUnder3, setHasChildUnder3] = useState(false);
  const [livesInYaroslavl, setLivesInYaroslavl] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      icon: 'Baby',
      title: 'Ежемесячная выплата на 3-го ребенка',
      category: 'Региональная',
      type: 'regional',
      description: 'До 3 лет — около 12 000 руб/мес',
      details: 'Для семей с доходом ниже 2 прожиточных минимумов. Оформляется в МФЦ или соцзащите. Нужны: свидетельства о рождении всех детей, паспорта родителей, справка о доходах.',
    },
    {
      icon: 'Home',
      title: 'Скидка 50% на ЖКХ',
      category: 'Федеральная',
      type: 'federal',
      description: 'Для многодетных семей',
      details: 'Оформляется в соцзащите или через Госуслуги. Применяется автоматически при оплате коммунальных услуг. Нужны: удостоверение многодетной семьи, выписка из домовой книги.',
    },
    {
      icon: 'DollarSign',
      title: 'Единовременная выплата при рождении',
      category: 'Федеральная',
      type: 'federal',
      description: '24 604 руб (2025)',
      details: 'Выплачивается на каждого ребенка. Оформить может любой из родителей по месту работы или в ФСС. Нужны: свидетельство о рождении, справка с работы второго родителя о неполучении.',
    },
    {
      icon: 'School',
      title: 'Бесплатное питание в школе',
      category: 'Региональная',
      type: 'regional',
      description: 'Завтрак и обед для школьников',
      details: 'Предоставляется детям из многодетных семей автоматически после подтверждения статуса в школе. Нужны: удостоверение многодетной семьи.',
    },
    {
      icon: 'Banknote',
      title: 'Материнский капитал',
      category: 'Федеральная',
      type: 'federal',
      description: '775 628 руб на 3-го ребенка (2025)',
      details: 'Если ранее не получали. Оформляется автоматически через Пенсионный фонд. Можно использовать на жилье, образование детей или пенсию мамы.',
    },
    {
      icon: 'Heart',
      title: 'Бесплатные лекарства до 6 лет',
      category: 'Федеральная',
      type: 'federal',
      description: 'По рецепту врача',
      details: 'Для всех детей из многодетных семей до 6 лет. Получение по рецепту в льготных аптеках. Список препаратов утвержден Минздравом.',
    },
  ];

  const filteredBenefits = benefits.filter((b) => {
    if (filterCategory === 'федеральные') return b.type === 'federal';
    if (filterCategory === 'региональные') return b.type === 'regional';
    return true;
  });

  const calculateEstimate = () => {
    let monthlyTotal = 0;
    const benefits: string[] = [];

    if (childrenCount >= 3 && hasChildUnder3 && livesInYaroslavl) {
      monthlyTotal += 12000;
      benefits.push('Ежемесячная выплата на 3-го ребенка');
    }

    if (childrenCount >= 3) {
      benefits.push('Скидка 50% на ЖКХ (~3000 руб экономии)');
      benefits.push('Бесплатное питание в школе');
      benefits.push('Бесплатные лекарства до 6 лет');
    }

    return { monthlyTotal, benefits };
  };

  const estimate = calculateEstimate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Compass" size={28} className="text-primary" />
            <span className="font-heading font-bold text-xl text-foreground">Семейный компас</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
              Льготы и пособия 2025
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
              Вопрос-Ответ
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О проекте
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://cdn.poehali.dev/projects/0f3fdd7d-e8ee-4f88-a965-03c4c91dd318/files/639f40b6-68da-4a4c-bcdc-6a93bd38f991.jpg')`,
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Ваши льготы и пособия в Ярославле — без сложных слов
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                <span className="font-semibold text-primary">Семейный компас</span>: понятные инструкции для многодетных мам. Куда идти, что говорить, какие документы готовить.
              </p>
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                НАЙТИ СВОИ ЛЬГОТЫ
              </Button>
            </div>
          </div>
        </section>

        <section id="problem" className="py-16 bg-white">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Знакомо?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Scale" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">Запутались в законах?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Слишком много статей, терминов и непонятных формулировок</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="FileText" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">Боитесь ошибки в заявлении?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Одна неправильная справка — и придется начинать заново</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">Нет времени обходить десятки кабинетов?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">С детьми каждая минута на счету</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-lg mt-12 text-muted-foreground max-w-2xl mx-auto">
              Государственная поддержка есть, но добраться до нее сложно. Мы перевели официальный язык на человеческий.
            </p>
          </div>
        </section>

        <section id="constructor" className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Найдите, что положено именно вашей семье</h2>
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Конструктор помощи</CardTitle>
                <CardDescription>Ответьте на несколько вопросов, и мы покажем ваши меры поддержки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <label className="font-semibold mb-4 block">Сколько у вас детей?</label>
                  <div className="flex gap-3 flex-wrap">
                    {[3, 4, 5, 6].map((num) => (
                      <Button
                        key={num}
                        variant={childrenCount === num ? 'default' : 'outline'}
                        onClick={() => setChildrenCount(num)}
                        className="px-8"
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-semibold mb-4 block">Возраст младшего ребенка?</label>
                  <div className="flex gap-3 flex-wrap">
                    <Button variant={youngestAge === 'до3' ? 'default' : 'outline'} onClick={() => setYoungestAge('до3')}>
                      до 3 лет
                    </Button>
                    <Button variant={youngestAge === '3-7' ? 'default' : 'outline'} onClick={() => setYoungestAge('3-7')}>
                      от 3 до 7
                    </Button>
                    <Button variant={youngestAge === 'старше7' ? 'default' : 'outline'} onClick={() => setYoungestAge('старше7')}>
                      старше 7
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="font-semibold mb-4 block">Ваш статус?</label>
                  <div className="flex gap-3 flex-wrap">
                    <Button
                      variant={citizenStatus === 'гражданка' ? 'default' : 'outline'}
                      onClick={() => setCitizenStatus('гражданка')}
                    >
                      Гражданка РФ
                    </Button>
                    <Button variant={citizenStatus === 'вид' ? 'default' : 'outline'} onClick={() => setCitizenStatus('вид')}>
                      Вид на жительство / РВП
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full" onClick={() => scrollToSection('catalog')}>
                  ПОКАЗАТЬ МОИ ВАРИАНТЫ
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="catalog" className="py-16 bg-white">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Все меры поддержки 2025</h2>
            <p className="text-center text-muted-foreground mb-8">Актуально для многодетных семей Ярославля</p>

            <div className="flex justify-center gap-3 mb-12 flex-wrap">
              <Button variant={filterCategory === 'все' ? 'default' : 'outline'} onClick={() => setFilterCategory('все')}>
                Все
              </Button>
              <Button
                variant={filterCategory === 'федеральные' ? 'default' : 'outline'}
                onClick={() => setFilterCategory('федеральные')}
              >
                Федеральные
              </Button>
              <Button
                variant={filterCategory === 'региональные' ? 'default' : 'outline'}
                onClick={() => setFilterCategory('региональные')}
              >
                Региональные (Ярославль)
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBenefits.map((benefit, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={benefit.icon as any} size={24} className="text-primary" />
                      </div>
                      <Badge variant={benefit.type === 'federal' ? 'default' : 'secondary'}>{benefit.category}</Badge>
                    </div>
                    <CardTitle className="font-heading text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground">{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <details className="group">
                      <summary className="cursor-pointer text-primary font-medium hover:underline list-none flex items-center gap-2">
                        Подробнее
                        <Icon name="ChevronDown" size={16} className="group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground">{benefit.details}</p>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-accent/30">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">От информации к действию за 3 шага</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Search" size={24} className="text-primary" />
                    <h3 className="font-heading text-xl font-bold">НАЙТИ</h3>
                  </div>
                  <p className="text-muted-foreground">Выберите меру в нашем каталоге</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="ClipboardCheck" size={24} className="text-primary" />
                    <h3 className="font-heading text-xl font-bold">ПОДГОТОВИТЬ</h3>
                  </div>
                  <p className="text-muted-foreground">Скачайте готовый список документов и образцы заявлений</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="CheckCircle" size={24} className="text-primary" />
                    <h3 className="font-heading text-xl font-bold">ПОЛУЧИТЬ</h3>
                  </div>
                  <p className="text-muted-foreground">Идите в нужный МФЦ с полным пакетом. Всё!</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" onClick={() => scrollToSection('catalog')}>
                НАЧАТЬ СЕЙЧАС
              </Button>
            </div>
          </div>
        </section>

        <section id="calculator" className="py-16 bg-white">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
              Прикиньте, на какую помощь вы можете рассчитывать
            </h2>
            <p className="text-center text-muted-foreground mb-12">Примерный расчет на основе ваших данных</p>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Калькулятор выплат</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="font-semibold mb-4 block">Количество несовершеннолетних детей: {childrenCount}</label>
                  <Slider value={[childrenCount]} onValueChange={(v) => setChildrenCount(v[0])} min={1} max={10} step={1} />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="under3" checked={hasChildUnder3} onCheckedChange={(checked) => setHasChildUnder3(!!checked)} />
                  <label htmlFor="under3" className="text-sm font-medium cursor-pointer">
                    Есть ребенок до 3 лет?
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="yaroslavl"
                    checked={livesInYaroslavl}
                    onCheckedChange={(checked) => setLivesInYaroslavl(!!checked)}
                  />
                  <label htmlFor="yaroslavl" className="text-sm font-medium cursor-pointer">
                    Проживаете в Ярославле?
                  </label>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <div className="bg-primary/5 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Примерная сумма ежемесячных выплат:</p>
                    <p className="text-3xl font-bold text-primary">{estimate.monthlyTotal.toLocaleString('ru-RU')} ₽</p>
                  </div>

                  {estimate.benefits.length > 0 && (
                    <div>
                      <p className="font-semibold mb-2">Возможные льготы:</p>
                      <ul className="space-y-2">
                        {estimate.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {childrenCount < 3 && (
                    <p className="text-sm text-muted-foreground italic">
                      Большинство мер для многодетных семей доступны при наличии 3 и более детей
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Самые частые «а если…»</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading hover:no-underline">
                  Муж иностранец, нам что-то положено?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да! Если вы — гражданка РФ, а муж имеет вид на жительство или РВП, семья может получать большинство федеральных выплат.
                  Региональные меры зависят от правил конкретного субъекта — в Ярославской области обычно требуется регистрация в регионе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading hover:no-underline">
                  Мы прописаны в области, а живем в Ярославле. Куда обращаться?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Федеральные выплаты можно оформить по месту фактического проживания через МФЦ. Для региональных мер обычно требуется
                  регистрация в Ярославской области — уточните в соцзащите по месту прописки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading hover:no-underline">
                  Какие документы нужны, если паспорт еще на старой фамилии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Потребуется свидетельство о браке (или о перемене имени), чтобы подтвердить связь между старой и новой фамилией. Лучше
                  заменить паспорт как можно скорее — это упростит все дальнейшие процедуры.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading hover:no-underline">
                  Можно ли получить выплаты, если работаю неофициально?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Многие меры (например, пособие на детей до 17 лет) учитывают доход семьи. Если работа неофициальная, потребуется
                  объяснить источники дохода или подтвердить низкий доход справками. Лучше проконсультироваться в соцзащите.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-none">
                <AccordionTrigger className="font-heading hover:no-underline">
                  Как долго рассматривают заявление на пособие?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Обычно от 10 до 30 рабочих дней, в зависимости от вида выплаты. Если документы собраны правильно, решение принимается
                  быстрее. Отслеживать статус можно через личный кабинет на Госуслугах или по телефону МФЦ.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Почему мы это делаем?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Это студенческий проект в рамках программы «Обучение служением». Мы увидели, как сложно многодетным мамам разобраться в
                море законов, форм и кабинетов — и решили сделать права доступными.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша цель — чтобы каждая семья могла быстро найти свои меры поддержки, понять, куда идти, и получить помощь без стресса.
              </p>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Нашли ошибку? Хотите помочь? Есть вопрос?</CardTitle>
                  <CardDescription>Мы всегда открыты для обратной связи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-6 flex-wrap">
                    <a href="mailto:info@semkompas.ru" className="flex items-center gap-2 text-primary hover:underline">
                      <Icon name="Mail" size={20} />
                      info@semkompas.ru
                    </a>
                    <a href="tel:+79876543210" className="flex items-center gap-2 text-primary hover:underline">
                      <Icon name="Phone" size={20} />
                      +7 (987) 654-32-10
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Compass" size={32} />
              <span className="font-heading font-bold text-2xl">Семейный компас</span>
            </div>
            <p className="text-sm text-white/80">
              Неофициальный социальный проект. Информация актуальна на 2025 год.
              <br />
              Для принятия решений сверяйтесь с официальными источниками.
            </p>
            <div className="flex justify-center gap-8 text-sm flex-wrap">
              <a href="#" className="hover:text-primary transition-colors">
                Контакты для СМИ
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Методичка проекта
              </a>
            </div>
            <p className="text-xs text-white/60">© 2025 Семейный компас. Проект создан с заботой о семьях.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
