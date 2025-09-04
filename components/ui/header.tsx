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
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-10 h-20">

          {!isHome && (
              <button
                onClick={() => router.back()}
                className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Go back"
                title="Go back"
              >
                {/* Using Heroicons ChevronLeft, you can replace with any icon */}
                <ChevronLeftIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            )}

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {/* <li>
                  <Link
                    href="https://prabir.in"
                    className="font-medium text-yellow-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Clubs & Committies 
                  </Link>
                
                </li> */}
                
                
              </ul>
            </nav>

            <MobileMenu />
            
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link href="/" className="block right-" aria-label="Cruip">
            <Image  src={logo}  alt="Features 03" width={120} height={120} />
              </Link>
            </div>

          </div>
        </div>
      </header>
    )
  }

export default Header