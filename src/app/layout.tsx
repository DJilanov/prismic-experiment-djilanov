import "./globals.css";

import Image from "next/image";
import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import Link from "next/link";
import { getIsSsrMobile } from "@/utils/isMobile";
import { headers } from "next/headers";
import FlowbiteInit from "@/components/flowbite/init";
import { getServerTranslations } from "@/i18n/server";
import Dropdown from "@/components/dropdown/dropdown";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Header() {
  const client = createClient();
  const { t, language } = await getServerTranslations('translation');
  const isMobile = getIsSsrMobile((await headers()).get("user-agent") ?? '');

  return (
    <header className="w-full py-6 px-6 md:px-12 lg:px-20 flex items-center justify-between bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col space-y-1">
            <Image
              width={150}
              height={32}
              src="/img/logo.png"
              alt="Logo"
              draggable={false}
            />
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1 p-2"
      >
        <div className="h-0.5 w-6 bg-black"></div>
        <div className="h-0.5 w-6 bg-black"></div>
        <div className="h-0.5 w-6 bg-black"></div>
      </button>

      {/* Mobile Navigation */}
      {isMobile ? (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
          <nav className="flex flex-col space-y-4">
            <Link href="/refugees" className="font-medium text-gray-900 hover:text-gray-600 py-2">
              FOR REFUGEES
            </Link>
            <Link href="/companies" className="font-medium text-gray-900 hover:text-gray-600 py-2">
              FOR COMPANIES
            </Link>
            <Link href="/support" className="font-medium text-gray-900 hover:text-gray-600 py-2">
              SUPPORT
            </Link>
            <Link href="/diversity" className="font-medium text-gray-900 hover:text-gray-600 py-2">
              DIVERSITY MANAGEMENT
            </Link>
            <Link href="/about" className="font-medium text-gray-900 hover:text-gray-600 py-2">
              ABOUT US
            </Link>
            <Dropdown 
              selected={language}
              options={[]}
            />
          </nav>
        </div>
      ) : (
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/refugees" className="font-bold text-lg text-gray-900 hover:text-gray-600">
            FOR REFUGEES
          </Link>
          <Link href="/companies" className="font-bold text-lg text-gray-900 hover:text-gray-600">
            FOR COMPANIES
          </Link>
          <Link href="/support" className="font-bold text-lg text-gray-900 hover:text-gray-600">
            SUPPORT
          </Link>
          <Link href="/diversity" className="font-bold text-lg text-gray-900 hover:text-gray-600">
            DIVERSITY MANAGEMENT
          </Link>
          <Link href="/about" className="font-bold text-lg text-gray-900 hover:text-gray-600">
            ABOUT US
          </Link>
          <Dropdown 
            selected={language}
            options={[]}
          />
        </nav>
      )}
      <FlowbiteInit />
    </header>
  );
}

