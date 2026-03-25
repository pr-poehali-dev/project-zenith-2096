import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", type: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 bg-background border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Связаться с нами</p>
            <h2 className="text-4xl md:text-5xl font-sentient">
              Рассчитаем стоимость <br />
              <i className="font-light">бесплатно</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 mt-6 max-w-md mx-auto">
              Оставьте заявку — перезвоним в течение 30 минут и обсудим ваш проект
            </p>
          </div>

          {sent ? (
            <div className="border border-primary/40 p-10 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-primary/40">
                <Icon name="Check" size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-sentient">Заявка отправлена!</h3>
              <p className="font-mono text-sm text-foreground/60">Мы перезвоним вам в течение 30 минут</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", phone: "", type: "", comment: "" }); }}
                className="mt-4 font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/70 transition-colors duration-150"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-border p-8 md:p-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground/50">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-150"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground/50">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-150"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-foreground/50">Тип объекта</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="bg-background border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors duration-150 appearance-none"
                >
                  <option value="" disabled>Выберите тип объекта</option>
                  <option value="apartment">Квартира</option>
                  <option value="house">Частный дом</option>
                  <option value="commercial">Коммерческий объект</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-foreground/50">Комментарий</label>
                <textarea
                  rows={4}
                  placeholder="Опишите ваш проект: площадь, вид работ, сроки..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-150 resize-none"
                />
              </div>

              <Button type="submit" className="mt-2 w-full sm:w-auto">
                [Отправить заявку]
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
