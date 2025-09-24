
import cme from '../assets/contactme.png'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";

export default function Contact()
{
    const config = {
        title: 'Get In Touch',
        subtitle: 'Ready to work together? Let\'s discuss your next project!',
        github : 'https://github.com/logesh8804',
        linkedin : 'https://www.linkedin.com/in/logesh-b-376bb236b/',
        email : 'logeshlogu8804@gmail.com',
        phone : '+91 96263 99440',
        location: 'Thanjavur, Tamilnadu, India'
    }

    const contactInfo = [
        {
            icon: <AiOutlineMail size={24} />,
            label: 'Email',
            value: config.email,
            link: `mailto:${config.email}`
        },
        {
            icon: <AiOutlinePhone size={24} />,
            label: 'Phone',
            value: config.phone,
            link: `tel:${config.phone}`
        },
        {
            icon: <AiOutlineGithub size={24} />,
            label: 'GitHub',
            value: 'github.com/logesh8804',
            link: config.github
        },
        {
            icon: <AiOutlineLinkedin size={24} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/logesh-b',
            link: config.linkedin
        },
        {
            icon: <AiOutlineEnvironment size={24} />,
            label: 'Location',
            value: config.location,
            link: '#'
        }
    ]

    return (
        <section className="py-6 sm:py-8 lg:py-10 bg-primary" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1">
                        Get In <span className="text-accent">Touch</span>
                    </h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-3"></div>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {config.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img 
                                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl" 
                                src={cme} 
                                alt="Contact Logesh"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="space-y-6">
                            <div className="card">
                                <h3 className="text-2xl font-bold text-accent mb-2">Contact Information</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.link}
                                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
                                        >
                                            <div className="text-accent group-hover:text-accent-light transition-colors duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">{info.label}</p>
                                                <p className="text-white font-medium group-hover:text-accent transition-colors duration-300">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}