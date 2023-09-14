import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo.png'
import Image from 'next/image'
import mukeshpatel from '@/public/images/MPSTME-Logo.png'
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
           <Image  src={logo}  alt="Features 03" width={80} height={80} />

            </Link>
           

          </div>

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

        </div>
      </div>
    </header>
  )
}
