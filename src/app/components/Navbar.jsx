'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Menu, x} from 'lucide-react' //icons (built into Next.js if you install lucide-react)
import React from 'react'

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='w-full fixed top-0 left-0 bg-white shadow-md z-50'>
            <div className='flex items-center justify-between px-6 py-4'>
                <Image src='/logo.jpg' alt='Ndogbati Logo' width={75} height={75}/>
                <Link href="/" className='text-2xl font-playfair font-bold text-gray-800'>
                Ndogbati
                </Link>
                {/* Hamburder Icon (Mobile) */}
                <div className='md:hidden'>
                    {isOpen? (
                        <x onClick={() => setIsOpen(false)} className="h-6 w-6 cursor-pointer"/>
                    ) : (
                        <Menu onClick={() => setIsOpen(true)} className='h-6 w-6 cursor-pointer'/>
                    )
                    }
                </div>
                {/* Desktop Menu */}
                <ul className='hidden md:flex space-x-8 font-medium'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/services"></Link>Services</li>
                <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <ul className='md:hidden flex flex-col items-center space-y-4 pb-6 font-medium bg-white border-t'>
                    <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={setIsOpen(false)}>About</Link></li>
                    <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
                    <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </nav>
    )
}