import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:py-28 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Build Your Online Presence in Minutes
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Our AI-powered website builder helps you create stunning, professional websites without any coding skills. Launch your dream site today.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Start Building Free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/learn-more"
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}