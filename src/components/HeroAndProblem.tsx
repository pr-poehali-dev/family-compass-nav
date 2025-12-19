import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroAndProblemProps {
  scrollToSection: (id: string) => void;
  childrenCount: number;
  setChildrenCount: (count: number) => void;
  youngestAge: 'до3' | '3-7' | 'старше7';
  setYoungestAge: (age: 'до3' | '3-7' | 'старше7') => void;
  citizenStatus: 'гражданка' | 'вид';
  setCitizenStatus: (status: 'гражданка' | 'вид') => void;
}

const HeroAndProblem = ({
  scrollToSection,
  childrenCount,
  setChildrenCount,
  youngestAge,
  setYoungestAge,
  citizenStatus,
  setCitizenStatus,
}: HeroAndProblemProps) => {
  return (
    <>
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
              <span className="font-semibold text-primary">Семейный компас</span>: понятные инструкции для многодетных мам. Куда идти, что
              говорить, какие документы готовить.
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
    </>
  );
};

export default HeroAndProblem;
