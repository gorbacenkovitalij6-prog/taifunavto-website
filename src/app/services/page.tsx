"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Search,
  ShieldCheck,
  FileText,
  Truck,
  Wrench,
  CreditCard,
  ArrowRight,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Подбор автомобиля",
    description: "Поможем найти идеальный автомобиль под ваши требования и бюджет. Работаем с европейскими, японскими, корейскими и американскими площадками.",
    features: [
      "Анализ ваших требований",
      "Поиск на проверенных площадках",
      "Сравнение вариантов",
      "Рекомендации эксперта",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Проверка автомобиля",
    description: "Полная диагностика и проверка истории автомобиля перед покупкой. Гарантируем юридическую чистоту.",
    features: [
      "Проверка VIN-номера",
      "История обслуживания",
      "Техническая диагностика",
      "Юридическая проверка",
    ],
  },
  {
    icon: CreditCard,
    title: "Покупка и оплата",
    description: "Безопасное проведение сделки с полным сопровождением. Прозрачная система оплаты.",
    features: [
      "Безопасные платежи",
      "Прозрачные условия",
      "Договор купли-продажи",
      "Гарантия сделки",
    ],
  },
  {
    icon: FileText,
    title: "Оформление документов",
    description: "Полное сопровождение документального оформления: растаможка, сертификация, постановка на учёт.",
    features: [
      "Растаможка авто",
      "Сертификация",
      "ЭПТС оформление",
      "Постановка на учёт",
    ],
  },
  {
    icon: Truck,
    title: "Доставка",
    description: "Безопасная доставка автомобиля из любой точки мира. Полное страхование и отслеживание.",
    features: [
      "Доставка от 2 недель",
      "Полное страхование",
      "Отслеживание груза",
      "Доставка до двери",
    ],
  },
  {
    icon: Wrench,
    title: "Сервисное обслуживание",
    description: "Рекомендации по обслуживанию и подключение к проверенным сервисным центрам.",
    features: [
      "Рекомендации по ТО",
      "Проверенные сервисы",
      "Гарантийная поддержка",
      "Консультации",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 gradient-hero overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Полный спектр услуг</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="neon-text">Наши услуги</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по подбору и доставке автомобилей из-за рубежа
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="neon-text">Готовы начать?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <button className="glow-btn text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3">
                  Оставить заявку
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a
                href="https://t.me/Privezen_auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 hover:bg-primary/5 h-14 px-8 rounded-xl gap-2">
                  <Send className="w-5 h-5" />
                  Telegram
                </Button>
              </a>
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
