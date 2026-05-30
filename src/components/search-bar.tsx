"use client";

import { Search } from "lucide-react";
import { allLocations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <form className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 md:grid-cols-2 lg:grid-cols-[100px_minmax(180px,2fr)_minmax(120px,1fr)_minmax(140px,1fr)_minmax(160px,1fr)_120px]">
      <select className="h-11 min-w-0 rounded-md border border-slate-200 px-3 text-sm" defaultValue="SALE" aria-label="Listing type"><option value="SALE">Buy</option><option value="RENT">Rent</option></select>
      <select className="h-11 min-w-0 rounded-md border border-slate-200 px-3 text-sm" aria-label="Location"><option>Any Location</option>{allLocations.map((location) => <option key={location.slug}>{location.name}</option>)}</select>
      <Input placeholder="Budget" />
      <select className="h-11 min-w-0 rounded-md border border-slate-200 px-3 text-sm" aria-label="Bedrooms"><option>Bedrooms</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4+ BHK</option></select>
      <select className="h-11 min-w-0 rounded-md border border-slate-200 px-3 text-sm" aria-label="Furnished"><option>Furnished</option><option>Semi furnished</option><option>Unfurnished</option></select>
      <Button type="submit"><Search className="h-4 w-4" />Search</Button>
    </form>
  );
}
