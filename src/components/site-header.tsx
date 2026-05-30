import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { business } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";

const nav = [
  ["Buy", "/properties/sale"],
  ["Rent", "/properties/rent"],
  ["Locations", "/properties-in-vashi"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/daksha-logo.png" alt="Daksha Real Estate logo" width={116} height={81} className="h-[76px] w-auto object-contain" priority />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[#0B2A6F]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a href={`tel:${business.phone.replace(/\s/g, "")}`} className={buttonVariants({ variant: "outline", size: "sm", className: "hidden sm:inline-flex" })}>
            <Phone className="h-4 w-4" />
            Call
          </a>
          <Link href="/schedule-visit" className={buttonVariants({ variant: "accent", size: "sm" })}>
            Schedule Visit
          </Link>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 lg:hidden" aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
