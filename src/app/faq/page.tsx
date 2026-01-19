"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Send, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Сколько времени занимает доставка автомобиля?",
    answer: "Срок доставки зависит от страны происхождения автомобиля. В среднем доставка из Европы занимает 2-4 недели, из Японии и Кореи - 4-6 недель, из США - 6-8 недель. Мы предоставляем точные сроки после выбора конкретного автомобиля.",
  },
  {
    question: "Какие документы я получу вместе с автомобилем?",
    answer: "Вы получите полный пакет документов: электронный ПТС (ЭПТС), сертификат соответствия, таможенные документы, договор купли-продажи, а также всю историю обслуживания автомобиля из страны происхождения.",
  },
  {
    question: "Можно ли заказать конкретную модель автомобиля?",
    answer: "Да, мы можем найти практически любую модель автомобиля под ваш заказ. Расскажите нам о ваших предпочтениях, и мы подберём оптимальные варианты на европейских, японских, корейских или американских площадках.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится в несколько этапов: предоплата за услуги подбора, оплата стоимости автомобиля после его выбора, и финальная оплата после доставки и проверки. Все платежи проводятся официально с заключением договора.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем юридическую чистоту автомобиля, соответствие заявленному техническому состоянию и полное документальное сопровождение. В случае выявления скрытых дефектов, не заявленных продавцом, мы помогаем решить вопрос с возвратом или компенсацией.",
  },
  {
    question: "Нужно ли мне самому заниматься растаможкой?",
    answer: "Нет, мы берём на себя все хлопоты по растаможке автомобиля. Наши специалисты занимаются оформлением всех таможенных документов, оплатой пошлин и получением сертификата соответствия.",
  },
  {
    question: "Могу ли я проверить автомобиль перед покупкой?",
    answer: "Да, мы предоставляем полный отчёт о состоянии автомобиля, включая фотографии, видео, результаты технической диагностики и проверку истории. При необходимости можем организовать независимую экспертизу.",
  },
  {
    question: "Работаете ли вы с автомобилями из США?",
    answer: "Да, мы работаем с американскими площадками и аукционами. Доставка из США занимает больше времени, но мы можем найти отличные варианты по привлекательным ценам, особенно для премиальных марок.",
  },
  {
    question: "Какую экономию я получу при покупке через вас?",
    answer: "В среднем наши клиенты экономят от 20% до 30% по сравнению с покупкой аналогичного автомобиля на российском рынке. Экономия зависит от модели, года выпуска и страны происхождения.",
  },
  {
    question: "Помогаете ли вы с постановкой на учёт?",
    answer: "Да, после доставки автомобиля мы помогаем с постановкой на учёт в ГИБДД. Можем полностью взять на себя этот процесс или проконсультировать вас по всем необходимым шагам.",
  },
];

export default function FAQPage() {
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
              <span className="text-sm text-muted-foreground">Ответы на вопросы</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="neon-text">Частые вопросы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о покупке автомобилей из-за рубежа
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card rounded-2xl px-6 border-0 data-[state=open]:neon-border transition-all"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6 hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="neon-text">Не нашли ответ на свой вопрос?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Свяжитесь с нами, и мы ответим на все ваши вопросы
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <button className="glow-btn text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3">
                  Задать вопрос
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
