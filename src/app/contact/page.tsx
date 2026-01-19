"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (495) 132-61-14",
    description: "Звоните в рабочее время",
  },
  {
    icon: Mail,
    title: "Email",
    value: "taifunavto@gmail.com",
    description: "Ответим в течение дня",
  },
  {
    icon: MapPin,
    title: "Офис",
    value: "г. Тольятти, ул. Александра Кудашева, д. 110",
    description: "Приезжайте на консультацию",
  },
  {
    icon: Clock,
    title: "Режим работы",
    value: "Ежедневно: 9:00 - 19:00",
    description: "Без выходных",
  },
];

export default function ContactPage() {
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
              <span className="text-sm text-muted-foreground">Связаться с нами</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="neon-text">Свяжитесь с нами</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение 30 минут
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="glass-card rounded-3xl p-8 neon-border">
                <h3 className="text-2xl font-bold text-foreground mb-2">Заявка на подбор автомобиля</h3>
                <p className="text-muted-foreground mb-8">
                  Заполните форму и наш менеджер свяжется с вами
                </p>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя *" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                    <Input placeholder="Телефон *" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  </div>
                  <Input placeholder="Email" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  <Input placeholder="Желаемая марка и модель" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Год выпуска" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                    <Input placeholder="Бюджет" className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl" />
                  </div>
                  <Textarea
                    placeholder="Дополнительные пожелания (цвет, комплектация, пробег и т.д.)"
                    className="bg-secondary/50 border-border focus:border-primary rounded-xl min-h-[120px]"
                  />
                  <button className="w-full glow-btn text-white font-bold py-4 rounded-xl text-lg">
                    Отправить заявку
                  </button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="grid gap-6">
                  {contacts.map((contact, index) => (
                    <div key={index} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                      <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <contact.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{contact.title}</h4>
                          <p className="text-lg text-foreground font-medium">{contact.value}</p>
                          <p className="text-sm text-muted-foreground">{contact.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Telegram CTA */}
                <div className="glass-card rounded-2xl p-8 text-center border border-blue-500/30">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Быстрая связь через Telegram
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Напишите нам напрямую и получите ответ в течение нескольких минут
                  </p>
                  <a
                    href="https://t.me/Privezen_auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl inline-flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105">
                      <Send className="w-5 h-5" />
                      Написать в Telegram
                    </button>
                  </a>
                </div>
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
