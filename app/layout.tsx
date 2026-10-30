import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoultryOne ERP",
  description: "Poultry integration management and financial operations prototype"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
