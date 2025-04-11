import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const myFont = localFont({
  src: "../../fonts/Poppins-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Ünlü Hafriyat Yalova",
  description: "Yalova, Kepçe, hafriyat, ekskvatör, kamyon, kiralık kepçe",
  icons: ["../../favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      dir="ltr"
      className={`${myFont.className} scroll-smooth md:scroll-auto`}
    >
      <body
        className={`antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
