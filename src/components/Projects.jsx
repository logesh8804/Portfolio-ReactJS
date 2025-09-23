import pro1 from '../assets/portfolio.png'
import pro2 from '../assets/weather.png'
import pro3 from '../assets/smarteval.png'

export default function Projects()
{
    const config = {
        title: 'My Projects',
        subtitle: 'Showcasing my expertise in modern web development through innovative projects',
        projects : [
            {
                image : pro1,
                title: 'Personal Portfolio Website',
                description : 'A modern, responsive portfolio website built with React.js and Tailwind CSS. Features smooth animations, mobile-first design, and optimized performance. This is the preview of this project.',
                technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Vite'],
                link : 'https://github.com/logesh8804/Portfolio-ReactJS',
                demo: 'https://logesh-b-portfolio.vercel.app/'
            },
            {
                image : pro2,
                title: 'React.js Weather app',
                description : 'Created a responsive Weather App using React.js with real-time API integration. Features include location-based search, dynamic UI updates, and a user-friendly interface for seamless weather forecasts.',
                technologies: ['React.js', 'HTML', 'CSS', 'Weather API'],
                link : 'https://github.com/logesh8804/WeatherApp-ReactJS',
                demo: '#'
            },
            {
                image : pro3,
                title: 'Smart Evaluation System',
                description : 'An intelligent evaluation platform for educational institutions. Built with React frontend and Django backend, featuring automated grading and analytics.',
                technologies: ['React.js', 'Django', 'Python', 'PostgreSQL', 'REST API'],
                link : 'https://github.com/logesh8804/PaperEvaluation-Django',
                demo: 'https://logesh.pythonanywhere.com/'
            }
        ]
    }

    return (
        <section className="py-6 sm:py-8 lg:py-10 bg-primary text-white" id='projects'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="text-accent">Projects</span>
                    </h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {config.subtitle}
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {config.projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                    src={project.image} 
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-3">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 btn text-center text-sm py-2"
                                    >
                                        View Code
                                    </a>
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 btn-outline text-center text-sm py-2"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/logesh8804" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-outline text-lg px-8 py-3"
                    >
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}