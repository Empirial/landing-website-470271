export default function About() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About Us
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Founded in 2015 by a team of designers and engineers who believed the web should be accessible to everyone, our company started in a small garage with a single mission: to empower creators of all skill levels to build beautiful, functional websites without writing a single line of code. What began as a side project for freelancers has grown into a platform trusted by over 200,000 businesses, nonprofits, and dreamers across 40 countries. We’ve stayed true to our roots—iterating quickly, listening to our users, and shipping tools that remove friction so you can focus on what matters most: your story.
        </p>
        <blockquote className="mx-auto my-10 max-w-2xl border-l-4 border-accent pl-6 text-left">
          <p className="text-xl italic leading-relaxed text-foreground md:text-2xl">
            We don’t just build websites—we build the confidence that anyone, anywhere, can share their ideas with the world.
          </p>
        </blockquote>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          At our core, we value simplicity, creativity, and inclusion. We believe technology should adapt to people, not the other way around. That’s why every template, drag-and-drop element, and AI-assisted feature we release is tested against one question: does this make it easier for someone to bring their vision to life? We’re a remote-first team of lifelong learners who celebrate small wins, own our mistakes, and treat every user as a partner in our shared journey. Whether you’re launching a first blog or scaling an online store, we’re here to help you build something you’re proud of—and have a little fun along the way.
        </p>
      </div>
    </section>
  );
}