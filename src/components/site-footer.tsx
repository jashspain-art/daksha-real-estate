import Link from "next/link";
import { business } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-[#0B2A6F] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">{business.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">Premium, verified property advisory for Mumbai and Navi Mumbai homes, rentals, and investment requirements.</p>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <div className="mt-3 space-y-2 text-sm text-white/75">
            <p>{business.phone}</p>
            <p>{business.secondaryPhone}</p>
            <p>{business.address}</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/login">Sign in</Link>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Daksha Real Estate. All rights reserved.</div>
    </footer>
  );
}
