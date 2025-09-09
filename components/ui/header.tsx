"use client"
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/council-logo.png'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top bar with back button and logo centered */}
        <div className="relative flex items-center justify-center h-24">
          {/* Back Button (only show if not home) */}
          {!isHome && (
            <button
              onClick={() => router.back()}
              className="absolute left-0 p-2 rounded-full"
              aria-label="Go back"
              title="Go back"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          )}

          {/* Logo - always centered */}
          <Link href="/" aria-label="Council Home">
            <Image
              src={logo}
              alt="Council Logo"
              width={100}
              height={100}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
            />
          </Link>
        </div>

        {/* Navigation Row (below logo) */}
        <div className="flex items-center justify-between h--10">
          {/* Placeholder or spacer for symmetry */}
          <div className="w-6" />

          {/* Desktop navigation (customize as needed) */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 items-center">
              {/* Example nav item */}
              {/* <li>
                <Link href="/clubs" className="text-sm text-gray-700 hover:underline">
                  Clubs & Committees
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
