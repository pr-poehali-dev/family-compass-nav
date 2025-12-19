import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Benefit {
  icon: string;
  title: string;
  category: string;
  type: string;
  description: string;
  details: string;
}

interface BenefitsCatalogProps {
  scrollToSection: (id: string) => void;
  filterCategory: 'все' | 'федеральные' | 'региональные';
  setFilterCategory: (category: 'все' | 'федеральные' | 'региональные') => void;
  benefits: Benefit[];
}

const BenefitsCatalog = ({ scrollToSection, filterCategory, setFilterCategory, benefits }: BenefitsCatalogProps) => {
  const filteredBenefits = benefits.filter((b) => {
    if (filterCategory === 'федеральные') return b.type === 'federal';
    if (filterCategory === 'региональные') return b.type === 'regional';
    return true;
  });

  return (
    <>
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
    </>
  );
};

export default BenefitsCatalog;
