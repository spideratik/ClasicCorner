// 1. MUST import globals.css at the very top
import "./globals.css"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Corner",
  description: "Aesthetic Home Decor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Note the CamelCase: suppressHydrationWarning
    // 3. This stops browser extensions from breaking your layout
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-brand-blue">
  {children}
</body>
    </html>
  );
}