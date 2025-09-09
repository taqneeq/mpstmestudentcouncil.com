import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
// import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'NMIMS MPSTME Student Council',
  description: 'NMIMS MPSTME\'s Student Council Official Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <script defer src="https://umami.mpst.me/script.js" data-website-id="104c14c4-cd4c-46ad-abfa-8aa6432409bb"></script>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <div className="-mt-20"> {/* negative margin to pull children up */}
            {children}
          </div>
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
