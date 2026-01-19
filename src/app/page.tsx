"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  TrendingDown,
  ShieldCheck,
  FileText,
  Truck,
  Car,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Клиентов", icon: "users" },
  { value: "2021", label: "Год основания", icon: "calendar" },
  { value: "100%", label: "Легальность", icon: "shield" },
  { value: "30%", label: "Экономия", icon: "percent" },
];

const advantages = [
  {
    icon: TrendingDown,
    title: "Экономия 20-30%",
    description: "Покупка напрямую с европейских аукционов по минимальным ценам",
  },
  {
    icon: ShieldCheck,
    title: "Полная проверка",
    description: "Детальная диагностика и проверка юридической чистоты",
  },
  {
    icon: FileText,
    title: "Все документы",
    description: "Растаможка, сертификация и постановка на учёт",
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    description: "Доставка от 2 недель с полным страхованием",
  },
  {
    icon: Car,
    title: "Любые марки",
    description: "BMW, Mercedes, Toyota, Lexus, Hyundai и другие",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Договор с полным описанием услуг и гарантии",
  },
];

const steps = [
  { num: "01", title: "Консультация", description: "Обсуждаем ваши пожелания и бюджет" },
  { num: "02", title: "Подбор авто", description: "Находим лучшие варианты на аукционах" },
  { num: "03", title: "Проверка", description: "Полная диагностика и проверка истории" },
  { num: "04", title: "Доставка", description: "Безопасная доставка с документами" },
];

const cars = [
  {
    name: "Mitsubishi Outlander PHEV",
    spec: "2.4 4WD",
    year: 2020,
    mileage: "76 600",
    price: "1 190 000",
    savings: "400 000",
    image: "/images/car1.jpeg",
  },
  {
    name: "Hyundai Santa Fe",
    spec: "Premium",
    year: 2022,
    mileage: "36 139",
    price: "1 680 000",
    savings: "650 000",
    image: "/images/car2.jpeg",
  },
  {
    name: "BMW X5",
    spec: "xDrive",
    year: 2014,
    mileage: "94 777",
    price: "1 529 000",
    savings: "900 000",
    image: "/images/car3.jpeg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Автосалон в Тольятти</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  <span className="text-foreground">Авто мечты</span>
                  <br />
                  <span className="neon-text">уже ждёт вас</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
                  Подберём и доставим автомобиль из Европы, Японии или США.
                  Экономия до 30% от рыночной цены.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <button className="glow-btn text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3 text-lg">
                      Подобрать авто
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 hover:bg-primary/5 h-14 px-8 rounded-xl">
                      Смотреть каталог
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden neon-border">
                  <img
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
                    alt="Премиальные автомобили"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg">100% Гарантия</p>
                      <p className="text-sm text-muted-foreground">Юридическая чистота</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="gradient-line mb-16" />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <p className="text-4xl md:text-5xl font-black neon-text mb-2">{stat.value}</p>
                  <p className="text-muted-foreground uppercase tracking-wider text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="gradient-line mt-16" />
        </section>

        {/* Advantages Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="neon-text">Почему мы?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Преимущества работы с нами
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, index) => (
                <div key={index} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="neon-text">Как это работает</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Простой процесс в 4 шага
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="number-badge w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black text-white">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cars Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  <span className="neon-text">В наличии</span>
                </h2>
                <p className="text-muted-foreground">Актуальные предложения</p>
              </div>
              <Link href="/gallery">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Все автомобили <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <div key={index} className="glass-card glass-card-hover rounded-3xl overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="glow-btn text-white text-sm font-bold px-4 py-2 rounded-full">
                        -{car.savings} P
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground">{car.name}</h3>
                      <p className="text-muted-foreground text-sm">{car.spec}</p>
                    </div>

                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <span>{car.year} г.</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{car.mileage} км</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Цена</p>
                        <p className="text-2xl font-black neon-text-pink">{car.price} P</p>
                      </div>
                      <button className="glow-btn text-white font-semibold px-6 py-3 rounded-xl">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="neon-text">Связаться с нами</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Оставьте заявку и мы перезвоним за 30 минут
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Заявка на подбор</h3>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя *" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  <Input placeholder="Телефон *" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  <Input placeholder="Желаемая марка и модель" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  <Textarea placeholder="Дополнительные пожелания" className="bg-secondary/50 border-border focus:border-primary rounded-xl min-h-[100px]" />
                  <button className="w-full glow-btn text-white font-bold py-4 rounded-xl text-lg">
                    Отправить заявку
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Телефон", value: "+7 (495) 132-61-14" },
                  { icon: Mail, title: "Email", value: "taifunavto@gmail.com" },
                  { icon: MapPin, title: "Адрес", value: "г. Тольятти, ул. А. Кудашева, 110" },
                  { icon: Clock, title: "Режим работы", value: "Ежедневно: 9:00 - 19:00" },
                ].map((item, index) => (
                  <div key={index} className="glass-card rounded-2xl p-5 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}

                <a
                  href="https://t.me/Privezen_auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-colors font-bold w-full"
                >
                  <Send className="w-5 h-5" />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Telegram Float Button */}
      <a
        href="https://t.me/Privezen_auto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-110 font-semibold"
      >
        <Send className="w-5 h-5" />
        <span className="hidden sm:inline">Telegram</span>
      </a>

      <Footer />
    </div>
  );
}
