import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() 
{
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-secondary backdrop-blur-md border-b border-gray-700">
            <a href="#" className="font-bold text-accent text-2xl sm:text-3xl font-sriracha hover:text-accent-light transition-colors duration-300">
                Logesh
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
                <ul className="flex space-x-8 text-white">
                    <li><a href="/" className="hover:text-accent transition-colors duration-300 font-medium">Home</a></li>
                    <li><a href="#about" className="hover:text-accent transition-colors duration-300 font-medium">About</a></li>
                    <li><a href="#projects" className="hover:text-accent transition-colors duration-300 font-medium">Projects</a></li>
                    <li><a href="#resume" className="hover:text-accent transition-colors duration-300 font-medium">Resume</a></li>
                    <li><a href="#contact" className="hover:text-accent transition-colors duration-300 font-medium">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setToggleMenu(!toggleMenu)} 
                className='lg:hidden p-2 text-white hover:text-accent transition-colors duration-300'
                aria-label="Toggle menu"
            >
                {toggleMenu ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />}
            </button>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="lg:hidden">
                    <ul onClick={() => setToggleMenu(false)} className="mobile-nav">
                        <li><a href="/" className="text-lg font-medium">Home</a></li>
                        <li><a href="#about" className="text-lg font-medium">About</a></li>
                        <li><a href="#projects" className="text-lg font-medium">Projects</a></li>
                        <li><a href="#resume" className="text-lg font-medium">Resume</a></li>
                        <li><a href="#contact" className="text-lg font-medium">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}