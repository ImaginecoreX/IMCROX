import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ImaginecoreX",
  description: "We are ImaginecoreX, dedicated to transforming core imaginations into reality.",
};

export default function CompanyLayout({
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
