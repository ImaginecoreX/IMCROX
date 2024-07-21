import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMCROX | Contact",
  description: "Reach us for any inquiries or send us feedback about our products",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
    </section>
  );
}
