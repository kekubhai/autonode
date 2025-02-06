import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Props={}
const Navbar = async(props:Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
        <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">AN</p>
        <Image
          src="/logo.png"
          width={120}
          height={110}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">ode</p>
      </aside>
      <nav className='absolute left-[50%] top-[50%] transform translate-x-2 translate-y-2 hidden md:block'>
        <ul className='flex items-center gap-8 text-white'>
          <li>
            <Link href={'#'} >
            Products
            </Link>
          </li>
          <li>
            <Link href={'#'} >
            Pricing
            </Link>
          </li>
          <li>
            <Link href={'#'} >
            Clients
            </Link>
          </li>
          <li>
            <Link href={'#'} >
            Resources
            </Link>
          </li>
          <li>
            <Link href={'#'} >
            Documentation
            </Link>
          </li>
          <li>
            <Link href={'#'} >
            Enterprise
            </Link>
          </li>
        </ul>

      </nav>
      <aside></aside>
    </header>
  )
}

export default Navbar
