import HeroImg from '../assets/hero.jpg'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";

export default function Home()
{
    const config = { 
        name: 'Logesh',
        title: 'Frontend Developer | React.js Enthusiast',
        subtitle: '',
        description: 'Passionate about creating beautiful, responsive, and user-friendly web applications. Specialized in React.js, JavaScript, and modern frontend technologies.',
        social: {
            linkedin : 'https://www.linkedin.com/in/logesh-b-376bb236b/',
            github : 'https://github.com/logesh8804',
            email : 'logeshlogu8804@gmail.com',
            phone : '+91 96263 99440'
        }
    }

    return (
        <section className='min-h-screen flex flex-col lg:flex-row items-center justify-center bg-primary px-4 sm:px-6 lg:px-8 pt-20 pb-8'>
            {/* <div className='lg:w-1/2 flex justify-center lg:justify-center mt-6 lg:mt-0'>
                <div className='relative'>
                    <img 
                        className='w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-full shadow-2xl' 
                        src={HeroImg} 
                        alt="Logesh - Frontend Developer"
                    />
                </div>
            </div> */}
            <div className='lg:w-1/2 flex justify-center lg:justify-center mt-6 lg:mt-0'>
                <div className='relative'>
                    <img 
                        className='w-60 h-60 sm:w-66 sm:h-66 lg:w-96 lg:h-96 rounded-full shadow-2xl object-cover' 
                        src={HeroImg} 
                        alt="Logesh - Frontend Developer" 
                    />
                </div>
                </div>
            
            <div className='lg:w-1/2 flex flex-col justify-end space-y-6'>
                <div className='space-y-3'>
                    <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sriracha leading-tight'>
                        Hi, <br /> 
                        I'm <span className='text-accent'>Logesh</span>
                    </h1>
                    <h2 className='text-accent text-lg sm:text-xl lg:text-2xl font-bold'>
                        {config.title}
                    </h2>
                    <p className='text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed'>
                        {config.subtitle}
                    </p>
                    <p className='text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed'>
                        {config.description}
                    </p>
                </div>
                
                <div className='flex flex-col sm:flex-row gap-4'>
                    <a href="#contact" className='btn inline-block text-center'>
                        Get In Touch
                    </a>
                    <a href="#projects" className='btn-outline inline-block text-center'>
                        View My Work
                    </a>
                </div>

                <div className='flex flex-wrap gap-6 pt-4'>
                    <a 
                        href={config.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110'
                        aria-label="LinkedIn Profile"
                    >
                        <AiOutlineLinkedin size={32} />
                    </a>
                    <a 
                        href={config.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110'
                        aria-label="GitHub Profile"
                    >
                        <AiOutlineGithub size={32} />
                    </a>
                    <a 
                        href={`mailto:${config.social.email}`}
                        className='text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110'
                        aria-label="Email"
                    >
                        <AiOutlineMail size={32} />
                    </a>
                    <a 
                        href={`tel:${config.social.phone}`}
                        className='text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110'
                        aria-label="Phone"
                    >
                        <AiOutlinePhone size={32} />
                    </a>
                </div>
            </div>  
        </section>
    )
}