import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, Zap } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/process", label: "Как это работает" },
  { href: "/gallery", label: "Галерея" },
  { href: "/about", label: "О нас" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Контакты" },
];

const contacts = [
  { icon: Phone, label: "+7 (495) 132-61-14" },
  { icon: Mail, label: "taifunavto@gmail.com" },
  { icon: MapPin, label: "г. Тольятти, ул. А. Кудашева, 110" },
  { icon: Clock, label: "Ежедневно: 9:00 - 19:00" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl neon-border flex items-center justify-center bg-background">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider neon-text">
                  ТАЙФУН
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">
                  АВТО
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              ООО "Тайфунавто" - надежная компания по продаже качественных автомобилей в Тольятти.
              Подбор и доставка из Европы, Японии, Кореи и США.
            </p>
            <a
              href="https://t.me/Privezen_auto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-colors font-semibold"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Навигация</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Контакты</h3>
            <div className="flex flex-col gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <contact.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{contact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 ТАЙФУНАВТО. Все права защищены.
            </p>
            <p className="text-muted-foreground text-sm">
              Продажа и пригон автомобилей из Европы, Японии, Кореи и США.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
