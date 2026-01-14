"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Send, MessageCircle, Search, CreditCard, FileText, Truck, KeyRound, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Консультация",
    description: "Обсуждаем ваши пожелания, предпочтения по маркам, моделям, году выпуска и бюджету. Отвечаем на все вопросы.",
    details: ["Бесплатная консультация", "Анализ ваших требований", "Рекомендации эксперта"],
  },
  {
    num: "02",
    icon: Search,
    title: "Подбор автомобиля",
    description: "Ищем подходящие варианты на проверенных европейских, японских и корейских площадках. Предоставляем полный отчёт.",
    details: ["Поиск на аукционах", "Проверка истории", "Сравнение вариантов"],
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Согласование и оплата",
    description: "После выбора автомобиля согласовываем финальную стоимость и условия. Безопасное проведение оплаты.",
    details: ["Прозрачная цена", "Договор купли-продажи", "Безопасный платёж"],
  },
  {
    num: "04",
    icon: FileText,
    title: "Оформление документов",
    description: "Занимаемся всеми документами: растаможка, сертификация, оформление ЭПТС и других необходимых бумаг.",
    details: ["Растаможка", "Сертификация", "Оформление ЭПТС"],
  },
  {
    num: "05",
    icon: Truck,
    title: "Доставка",
    description: "Организуем безопасную доставку автомобиля в Россию. Полное страхование груза и отслеживание в реальном времени.",
    details: ["Страхование груза", "Отслеживание", "Срок от 2 недель"],
  },
  {
    num: "06",
    icon: KeyRound,
    title: "Передача автомобиля",
    description: "Передаём вам автомобиль с полным пакетом документов. Помогаем с постановкой на учёт в ГИБДД.",
    details: ["Все документы", "Постановка на учёт", "Гарантия качества"],
  },
];

export default function ProcessPage() {
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
              <span className="text-sm text-muted-foreground">Простой процесс</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="neon-text">Как это работает</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и прозрачный процесс покупки автомобиля из-за рубежа
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-accent/50" />
                  )}

                  <div className="flex gap-8 mb-12">
                    <div className="flex-shrink-0">
                      <div className="number-badge w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white relative z-10">
                        {step.num}
                      </div>
                    </div>
                    <div className="glass-card glass-card-hover flex-grow rounded-2xl p-6 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-[4.5rem]">
                        {step.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm rounded-full font-medium border border-primary/20"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
              Первый шаг - бесплатная консультация. Свяжитесь с нами!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <button className="glow-btn text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3">
                  Получить консультацию
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
