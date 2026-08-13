import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Custom Website Design",
      description: "We craft a unique, mobile-responsive website tailored to your brand and business goals. From layout and color to copy and calls-to-action, every element is designed to make a strong first impression and convert visitors into customers.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "We optimize your site's structure, content, and technical performance to rank higher on Google. This drives more organic traffic, increases visibility among your target audience, and delivers long-term, cost-effective growth.",
    },
    {
      title: "Ongoing Maintenance & Support",
      description: "We handle updates, security patches, backups, and performance monitoring so your website stays fast, secure, and glitch-free. You get peace of mind and more time to focus on running your business, while we keep your digital presence in top shape.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What We Offer
        </h2>

        <div
          role="tablist"
          aria-label="Services"
          className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3"
        >
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold transition-colors sm:text-base ${
                index === activeIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="mt-8 rounded-lg border border-border bg-card p-8 text-center sm:mt-10 sm:p-12"
        >
          <h3 className="text-2xl font-semibold text-card-foreground">{active.title}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}