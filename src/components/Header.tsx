import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
