import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-harbor-navy p-8">
      <div className="text-center">
        <h1 className="font-display text-display-md font-light uppercase tracking-[0.2em] text-yacht-white">
          Brand Showcase
        </h1>
        <nav className="mt-8 flex flex-col gap-3">
          <Link
            href="/halcyon"
            className="font-body text-body-md text-yacht-white transition-colors hover:text-sunset-orange"
          >
            Halcyon →
          </Link>
          <Link
            href="/juniper-house"
            className="font-body text-body-md text-yacht-white transition-colors hover:text-sunset-orange"
          >
            Juniper House →
          </Link>
        </nav>
      </div>
    </main>
  );
}
