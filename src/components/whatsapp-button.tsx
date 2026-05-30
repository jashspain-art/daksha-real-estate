import { MessageCircle } from "lucide-react";
import { business } from "@/lib/constants";

export function WhatsAppButton({ propertyId }: { propertyId?: string }) {
  const text = propertyId ? `Hi Daksha Real Estate, I am interested in property ${propertyId}.` : "Hi Daksha Real Estate, I would like to discuss a property requirement.";
  return (
    <a href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`} className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/20" aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
