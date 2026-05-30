"use client";

import { Search } from "lucide-react";
import { allLocations } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <form className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 md:grid-cols-7">
      <select className="h-11 rounded-md border border-slate-200 px-3 text-sm md:col-span-1" defaultValue="SALE" aria-label="Listing type"><option value="SALE">Buy</option><option value="RENT">Rent</option></select>
      <select className="h-11 rounded-md border border-slate-200 px-3 text-sm md:col-span-2" aria-label="Location"><option>Any Location</option>{allLocations.map((location) => <option key={location.slug}>{location.name}</option>)}</select>
      <Input placeholder="Budget" className="md:col-span-1" />
      <select className="h-11 rounded-md border border-slate-200 px-3 text-sm md:col-span-1" aria-label="Bedrooms"><option>Bedrooms</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4+ BHK</option></select>
      <select className="h-11 rounded-md border border-slate-200 px-3 text-sm md:col-span-1" aria-label="Furnished"><option>Furnished</option><option>Semi furnished</option><option>Unfurnished</option></select>
      <Button type="submit" className="md:col-span-1"><Search className="h-4 w-4" />Search</Button>
    </form>
  );
}
