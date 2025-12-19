import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface CalculatorAndFooterProps {
  childrenCount: number;
  setChildrenCount: (count: number) => void;
  hasChildUnder3: boolean;
  setHasChildUnder3: (has: boolean) => void;
  livesInYaroslavl: boolean;
  setLivesInYaroslavl: (lives: boolean) => void;
  estimate: {
    monthlyTotal: number;
    benefits: string[];
  };
}

const CalculatorAndFooter = ({
  childrenCount,
  setChildrenCount,
  hasChildUnder3,
  setHasChildUnder3,
  livesInYaroslavl,
  setLivesInYaroslavl,
  estimate,
}: CalculatorAndFooterProps) => {
  return (
    <>
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
                <Checkbox id="yaroslavl" checked={livesInYaroslavl} onCheckedChange={(checked) => setLivesInYaroslavl(!!checked)} />
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
              <AccordionTrigger className="font-heading hover:no-underline">Муж иностранец, нам что-то положено?</AccordionTrigger>
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
                Многие меры (например, пособие на детей до 17 лет) учитывают доход семьи. Если работа неофициальная, потребуется объяснить
                источники дохода или подтвердить низкий доход справками. Лучше проконсультироваться в соцзащите.
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
              Это студенческий проект в рамках программы «Обучение служением». Мы увидели, как сложно многодетным мамам разобраться в море
              законов, форм и кабинетов — и решили сделать права доступными.
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
    </>
  );
};

export default CalculatorAndFooter;
