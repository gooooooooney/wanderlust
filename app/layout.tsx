import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/FadeIn";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative h-screen">
            <header className="top-2 opacity-50 sm:opacity-100 fixed sm:top-auto sm:bottom-[10%] sm:right-10 right-5 z-50">
              <ThemeSwitch />
            </header>
            <div className="flex flex-col  justify-between">
              <main>{children}</main>

              <FadeIn>
                <Footer />
              </FadeIn>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
