"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Send, Award, Users, Clock, Shield, Target, Heart, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Довольных клиентов", icon: Users },
  { value: "2021", label: "Год основания", icon: Clock },
  { value: "100%", label: "Легальность сделок", icon: Shield },
  { value: "30%", label: "Средняя экономия", icon: Target },
];

const values = [
  {
    icon: Shield,
    title: "Надёжность",
    description: "Мы гарантируем юридическую чистоту каждого автомобиля. Полная прозрачность на всех этапах сделки.",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Работаем только с проверенными площадками и поставщиками. Каждый автомобиль проходит тщательную проверку.",
  },
  {
    icon: Heart,
    title: "Забота о клиенте",
    description: "Индивидуальный подход к каждому клиенту. Сопровождаем на всех этапах от консультации до передачи ключей.",
  },
  {
    icon: Target,
    title: "Профессионализм",
    description: "Опыт работы на рынке автомобилей. Команда экспертов в подборе и доставке авто из-за рубежа.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 gradient-hero overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">О нашей компании</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="neon-text">О компании ТАЙФУНАВТО</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы помогаем клиентам приобретать качественные автомобили из Европы,
                Японии, Кореи и США по выгодным ценам с полным документальным сопровождением.
              </p>
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-black neon-text mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="gradient-line mt-16" />
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
                <span className="neon-text">Наша история</span>
              </h2>
              <div className="glass-card rounded-3xl p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p className="leading-relaxed">
                    Компания ТАЙФУНАВТО была основана в Тольятти с целью предоставить
                    клиентам доступ к качественным подержанным автомобилям из-за рубежа по
                    справедливым ценам.
                  </p>
                  <p className="leading-relaxed">
                    За время работы мы помогли сотням клиентов приобрести автомобили
                    их мечты из Европы, Японии, Кореи и США. Наша команда экспертов тщательно
                    отбирает каждый автомобиль, проводит полную проверку и обеспечивает
                    безопасную доставку.
                  </p>
                  <p className="leading-relaxed">
                    Мы гордимся нашей репутацией надёжного партнёра и стремимся к тому, чтобы
                    каждый клиент остался доволен своей покупкой. Наша миссия - сделать процесс
                    покупки автомобиля из-за рубежа простым, прозрачным и выгодным.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-16 text-center">
              <span className="neon-text">Наши ценности</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="glass-card glass-card-hover rounded-3xl p-8 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="neon-text">Хотите узнать больше?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Свяжитесь с нами для бесплатной консультации
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <button className="glow-btn text-white font-bold px-8 py-4 rounded-xl flex items-center gap-3">
                  Связаться с нами
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
