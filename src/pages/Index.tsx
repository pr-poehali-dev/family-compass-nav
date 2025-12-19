import { useState } from 'react';
import Header from '@/components/Header';
import HeroAndProblem from '@/components/HeroAndProblem';
import BenefitsCatalog from '@/components/BenefitsCatalog';
import CalculatorAndFooter from '@/components/CalculatorAndFooter';

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

  const calculateEstimate = () => {
    let monthlyTotal = 0;
    const benefitsList: string[] = [];

    if (childrenCount >= 3 && hasChildUnder3 && livesInYaroslavl) {
      monthlyTotal += 12000;
      benefitsList.push('Ежемесячная выплата на 3-го ребенка');
    }

    if (childrenCount >= 3) {
      benefitsList.push('Скидка 50% на ЖКХ (~3000 руб экономии)');
      benefitsList.push('Бесплатное питание в школе');
      benefitsList.push('Бесплатные лекарства до 6 лет');
    }

    return { monthlyTotal, benefits: benefitsList };
  };

  const estimate = calculateEstimate();

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />

      <main>
        <HeroAndProblem
          scrollToSection={scrollToSection}
          childrenCount={childrenCount}
          setChildrenCount={setChildrenCount}
          youngestAge={youngestAge}
          setYoungestAge={setYoungestAge}
          citizenStatus={citizenStatus}
          setCitizenStatus={setCitizenStatus}
        />

        <BenefitsCatalog
          scrollToSection={scrollToSection}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          benefits={benefits}
        />

        <CalculatorAndFooter
          childrenCount={childrenCount}
          setChildrenCount={setChildrenCount}
          hasChildUnder3={hasChildUnder3}
          setHasChildUnder3={setHasChildUnder3}
          livesInYaroslavl={livesInYaroslavl}
          setLivesInYaroslavl={setLivesInYaroslavl}
          estimate={estimate}
        />
      </main>
    </div>
  );
};

export default Index;
