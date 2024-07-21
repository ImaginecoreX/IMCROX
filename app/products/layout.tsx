import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMCROX Products",
  description: "Discover the ImaginecoreX Products.",
};

export default function ProductsLayout({
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
