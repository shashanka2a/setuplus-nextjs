import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SetuPlus - Your Complete Business Solution',
  description: 'Discover our comprehensive suite of business applications including FoodPe, KiranaPe, ShopPe, RepairPe, SnapPe, RidePe, TicketPe, EventPe, DocPe, and LearnPe. Powered by AI for enhanced user experience.',
  keywords: 'business solutions, food delivery, grocery, marketplace, home services, photography, ride sharing, tickets, events, healthcare, education, AI-powered',
  authors: [{ name: 'SetuPlus Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'SetuPlus - Your Complete Business Solution',
    description: 'Discover our comprehensive suite of business applications powered by AI',
    type: 'website',
    locale: 'en_US',
    url: 'https://setuplus.com',
    siteName: 'SetuPlus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SetuPlus - Your Complete Business Solution',
    description: 'Discover our comprehensive suite of business applications powered by AI',
    creator: '@setuplus',
  },
  alternates: {
    canonical: 'https://setuplus.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}