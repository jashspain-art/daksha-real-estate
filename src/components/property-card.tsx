import Image from "next/image";
import Link from "next/link";
import { BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <Link href={`/properties/${property.slug}`} className="block">
        <div className="relative aspect-[4/3]">
          <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
          <span className="absolute left-3 top-3 rounded-md bg-white px-3 py-1 text-xs font-semibold text-[#0B2A6F]">{property.listingType === "SALE" ? "For Sale" : "For Rent"}</span>
        </div>
      </Link>
      <div className="p-5">
        <div className="text-lg font-semibold text-[#0B2A6F]">{formatPrice(property.price, property.listingType)}</div>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-950">{property.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" />{property.location}, {property.region}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-600">
          <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" />{property.bedrooms} BHK</span>
          <span className="flex items-center gap-1"><Ruler className="h-4 w-4" />{property.carpetArea} sq.ft.</span>
          <span>{property.furnished}</span>
        </div>
        <Link href={`/properties/${property.slug}`} className={buttonVariants({ variant: "outline", className: "mt-5 w-full" })}>View Details</Link>
      </div>
    </article>
  );
}
