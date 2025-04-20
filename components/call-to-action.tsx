import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Start Building
          </h2>
          <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

          <div className="mt-8 w-full"> {/* Changed justify-center to w-full for the container */}
            <iframe src="https://embeds.beehiiv.com/68d67b66-da9d-4a3b-8270-5755d3500cc8" data-test-id="beehiiv-embed" width="100%" height="320" frameBorder="0" scrolling="no" style={{ borderRadius: '4px', margin: 0, backgroundColor: 'transparent' }}></iframe>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Get Started</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
