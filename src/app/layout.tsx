import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css";
import { Montserrat } from 'next/font/google'
import NavBar from "@/components/ux/nav-bar";
import Footer from "@/components/ux/footer";
const montserrat = Montserrat({ subsets: ['latin'] })
import 'leaflet/dist/leaflet.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleTagManager } from '@next/third-parties/google';


export const metadata: Metadata = {
  title: "Sell My House Fast Houston - IE Builders",
  description: "Need to sell your Houston home quickly? IE Builders offers fast cash for properties in any condition across The Heights, Katy, and more. No repairs, no fees, no hassle. Get your transparent cash offer today!",
  keywords: ['sell my house fast Houston',
    'sell house fast Houston',
    'we buy houses Houston',
    'sell my house for cash Houston',
    'cash home buyers Houston',
    'need to sell my house fast Houston',
    'urgent home sale Houston',
    'sell house as-is Houston',
    'avoid foreclosure Houston',
    'sell inherited house Houston',
    'sell my house fast The Heights Houston',
    'sell house fast Katy Houston',
    'we buy houses The Heights Houston',
    'cash home buyers Katy Houston',
    'get a cash offer for my house Houston',
    'quick home sale Houston',
    'companies that buy houses fast Houston',
    'sell my property fast Houston',
    'sell distressed property Houston',
    'sell home with no repairs Houston']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!; // Tu ID de Google Ads

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >

        <GoogleTagManager gtmId={googleAdsId} />
        <NavBar></NavBar>
        <main className="bg-[#F2F6F5] min-h-screen pb-24">
          <ToastContainer theme="colored" position="bottom-right" />
          {children}
        </main>
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  );
}
