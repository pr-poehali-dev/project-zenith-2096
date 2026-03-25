import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Building2",
    title: "Квартиры",
    description: "Косметический, капитальный и дизайнерский ремонт квартир любой площади. Работаем в новостройках и вторичном жилье.",
    features: ["Демонтаж и перепланировка", "Черновая и чистовая отделка", "Электрика, сантехника, вентиляция", "Установка мебели и техники"],
    price: "от 5 000 ₽/м²",
  },
  {
    icon: "Home",
    title: "Частные дома",
    description: "Строительство и ремонт загородных домов под ключ. От фундамента до кровли и внутренней отделки.",
    features: ["Строительство с нуля", "Утепление и фасадные работы", "Кровля и водосток", "Внутренняя отделка"],
    price: "от 8 000 ₽/м²",
  },
  {
    icon: "Briefcase",
    title: "Коммерческие объекты",
    description: "Офисы, рестораны, магазины и склады. Работаем без остановки вашего бизнеса, соблюдаем сроки.",
    features: ["Офисы и коворкинги", "Рестораны и кафе", "Магазины и шоурумы", "Склады и производства"],
    price: "от 6 000 ₽/м²",
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Наши услуги</p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Всё что нужно <br />
            <i className="font-light">для вашего объекта</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-border p-8 flex flex-col gap-6 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors duration-300">
                  <Icon name={service.icon as "Home"} size={20} className="text-primary" />
                </div>
                <span className="font-mono text-xs text-foreground/40 uppercase tracking-widest">{service.price}</span>
              </div>

              <div>
                <h3 className="text-2xl font-sentient mb-3">{service.title}</h3>
                <p className="font-mono text-sm text-foreground/60 leading-relaxed">{service.description}</p>
              </div>

              <ul className="mt-auto flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-mono text-xs text-foreground/50">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-4 font-mono text-xs uppercase tracking-widest text-primary hover:text-primary/70 transition-colors duration-150 flex items-center gap-2"
              >
                Узнать стоимость
                <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
