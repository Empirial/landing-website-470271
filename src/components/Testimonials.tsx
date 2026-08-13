import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium text-muted-foreground sm:h-20">
            Partner
          </div>
          <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium text-muted-foreground sm:h-20">
            Partner
          </div>
          <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium text-muted-foreground sm:h-20">
            Partner
          </div>
          <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-muted text-sm font-medium text-muted-foreground sm:h-20">
            Partner
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Quote className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
          <blockquote className="mt-6">
            <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              {""}
            </p>
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-3">
            <img
              src="https://placehold.co/96x96/e2e8f0/475569?text=%20"
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {""}
              </p>
              <p className="text-xs text-muted-foreground">
                {""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}