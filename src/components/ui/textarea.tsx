import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-28 w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0B2A6F] focus:ring-2 focus:ring-[#0B2A6F]/10", className)} {...props} />;
}
