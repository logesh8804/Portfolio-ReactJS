import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer()
{
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            icon: <AiOutlineGithub size={20} />,
            href: 'https://github.com/logesh8804',
            label: 'GitHub'
        },
        {
            icon: <AiOutlineLinkedin size={20} />,
            href: 'https://www.linkedin.com/in/logesh-b-376bb236b/',
            label: 'LinkedIn'
        },
        {
            icon: <AiOutlineMail size={20} />,
            href: 'mailto:logeshlogu8804@gmail.com',
            label: 'Email'
        }
    ];

    return (
        <footer className="bg-secondary border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-accent font-sriracha mb-2">Logesh</h3>
                        <p className="text-gray-400 text-sm">
                            Frontend Developer | React.js Enthusiast
                        </p>
                    </div>
                    
                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : '_self'}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-2 pt-1.5">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {currentYear} Logesh. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built with React.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}