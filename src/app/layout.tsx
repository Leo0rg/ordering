import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Booking.io - Сервис онлайн-бронирования",
  description: "Современный сервис для онлайн-бронирования услуг",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
