"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Zap, Send } from "lucide-react";

const navItems = [
  { href: "/services", label: "Услуги" },
  { href: "/process", label: "Как это работает" },
  { href: "/gallery", label: "Галерея" },
  { href: "/about", label: "О нас" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Контакты" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl neon-border flex items-center justify-center bg-background group-hover:animate-pulse-neon transition-all">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://t.me/Privezen_auto"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
          >
            <Send className="w-4 h-4" />
            <span className="hidden lg:inline">Telegram</span>
          </a>
          <Link href="/contact" className="hidden md:inline-flex">
            <button className="glow-btn text-white font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Связаться
            </button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-card border-border">
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="w-12 h-12 rounded-xl neon-border flex items-center justify-center bg-background">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xl font-black neon-text">ТАЙФУНАВТО</span>
                </Link>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium text-lg py-3 px-4 rounded-lg hover:bg-secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <a
                  href="https://t.me/Privezen_auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full glow-btn text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Связаться
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
