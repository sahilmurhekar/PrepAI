"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

function Header() {
    const path = usePathname();
    useEffect(() =>{
        console.log(path)
    },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-md'>
        <Image src={"/logo.svg"} width={50} height={20} alt='logo'/>
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-primary transition duration-300 cursor-pointer ${path=='/dashboard'&&'text-primary'}`}>Dashboard</li>
            <li className={`hover:text-primary transition duration-300 cursor-pointer ${path=='/dashboard/questions'&&'text-primary'}`}>Questions</li>
            <li className={`hover:text-primary transition duration-300 cursor-pointer ${path=='/dashboard/upgrade'&&'text-primary'}`}>Upgrade</li>
            <li className={`hover:text-primary transition duration-300 cursor-pointer ${path=='/dashboard/how'&&'text-primary'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}
export default Header