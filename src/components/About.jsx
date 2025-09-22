export default function About()
{
    const config = {
        title: 'About Me',
        description: 'A passionate Frontend Developer with a strong foundation in modern web technologies and a drive to create exceptional user experiences.',
        skills: [
            { category: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'] },
            { category: 'Backend', items: ['Django', 'Flask', 'Python', 'RESTful APIs'] },
            { category: 'Tools & Others', items: ['Git', 'GitHub', 'Vite', 'VS Code', 'MS Office'] }
        ],
        highlights: [
            'Computer Science graduate with strong technical foundation',
            'Specialized in React.js and modern JavaScript frameworks',
            'Experience in building responsive, mobile-first web applications',
            'Proficient in both frontend and backend development',
            'Strong problem-solving skills and attention to detail',
            'Passionate about clean code and best practices'
        ]
    }

    return (
        <section className='py-12 sm:py-16 lg:py-20 bg-secondary' id='about'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4'>
                        About <span className='text-accent'>Me</span>
                    </h1>
                    <div className='w-24 h-1 bg-accent mx-auto mb-6'></div>
                    <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                        {config.description}
                    </p>
                </div>

                <div className='lg:grid-cols-2 gap-8 lg:gap-12 items-center flex justify-center'>
                    {/* <div className='order-2 lg:order-1'>
                        <div className='relative'>
                            <img 
                                src={AboutImg} 
                                alt="Logesh - Frontend Developer"
                                className='w-full max-w-lg mx-auto rounded-2xl shadow-2xl'
                            />
                        </div>
                    </div> */}

                    <div className='order-1 lg:order-2 space-y-8'>

                        <div className='card'>
                            <h3 className='text-2xl font-bold text-accent mb-6'>Technical Skills</h3>
                            <div className='space-y-6'>
                                {config.skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <h4 className='text-lg font-semibold text-white mb-3'>{skillGroup.category}</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <span 
                                                    key={skillIndex}
                                                    className='px-3 py-1 bg-accent text-primary-navy rounded-full text-sm font-medium'
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}