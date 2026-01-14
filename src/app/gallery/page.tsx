"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Send, CheckCircle, Phone, Sparkles, ArrowRight } from "lucide-react";

const cars = [
  {
    name: "Mitsubishi Outlander PHEV 2.4 4WD",
    year: 2020,
    mileage: "76 600 км",
    price: "1 190 000",
    savings: "400 000",
    image: "/images/car1.jpeg",
  },
  {
    name: "Hyundai Santa Fe",
    year: 2022,
    mileage: "36 139 км",
    price: "1 680 000",
    savings: "650 000",
    image: "/images/car2.jpeg",
  },
  {
    name: "BMW X5",
    year: 2014,
    mileage: "94 777 км",
    price: "1 529 000",
    savings: "900 000",
    image: "/images/car3.jpeg",
  },
];

const telegramBenefits = [
  {
    title: "Актуальность 24/7",
    description: "Каталог обновляется ежедневно с новыми предложениями",
  },
  {
    title: "Быстрая связь",
    description: "Задайте вопрос и получите ответ в течение нескольких минут",
  },
  {
    title: "Полная информация",
    description: "Фото, видео, характеристики и история каждого авто",
  },
  {
    title: "Уведомления",
    description: "Узнавайте первыми о новых поступлениях и спецпредложениях",
  },
];

export default function GalleryPage() {
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
              <span className="text-sm text-muted-foreground">Актуальные предложения</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="neon-text">Каталог автомобилей</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Актуальные предложения автомобилей из Европы, Японии, Кореи и США
            </p>

            {/* Telegram CTA */}
            <div className="glass-card rounded-3xl p-8 max-w-3xl mx-auto neon-border">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Все автомобили в нашем Telegram
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                Мы ежедневно обновляем каталог доступных автомобилей в нашем Telegram-канале.
                Там вы найдете актуальные предложения с реальными фотографиями, ценами и характеристиками.
              </p>
              <a
                href="https://t.me/Privezen_auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg shadow-blue-600/30 transition-all hover:scale-105">
                  <Send className="w-5 h-5" />
                  Открыть каталог в Telegram
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Cars Examples */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                <span className="neon-text">Примеры наших автомобилей</span>
              </h2>
              <p className="text-lg text-muted-foreground">Вот несколько примеров того, что мы можем предложить</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {cars.map((car, index) => (
                <div key={index} className="glass-card glass-card-hover rounded-3xl overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-blue-600/90 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                      Пример
                    </span>
                    <span className="absolute top-4 right-4 glow-btn text-white text-sm font-bold px-4 py-1.5 rounded-full">
                      -{car.savings} P
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{car.name}</h3>
                    <p className="text-muted-foreground mb-4">{car.year} год * {car.mileage}</p>
                    <p className="text-2xl font-black neon-text-pink">{car.price} P</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Telegram */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-10">
                <span className="neon-text">Почему каталог в Telegram?</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {telegramBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="neon-text">Не нашли нужный автомобиль?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Напишите нам, и мы подберём именно то, что вам нужно
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://t.me/vnesheconomsnab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg shadow-blue-600/30 transition-all hover:scale-105">
                  <Send className="w-5 h-5" />
                  Telegram
                </button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary/50 hover:bg-primary/5 h-14 px-8 rounded-xl gap-2">
                  <Phone className="w-5 h-5" />
                  Оставить заявку
                </Button>
              </Link>
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
