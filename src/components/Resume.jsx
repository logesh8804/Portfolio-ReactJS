import ResumeImg from '../assets/resume.jpg'

export default function Resume()
{
    const config = { 
        link: 'https://drive.google.com/file/d/1P19S5NNF7OWPhkCwGLcwK3Oz20_hBFqr/view?usp=drive_link/view',
        downloadLink: 'https://drive.google.com/file/d/1P19S5NNF7OWPhkCwGLcwK3Oz20_hBFqr/view?usp=drive_link/'
    }

    const education = [
        {
            degree: 'Bachelor of Engineering in Computer Science Engineeing',
            institution: 'Star Lion College of Engineering and Technology',
            year: '2021 - 2025',
            gpa: '3.2/4.0'
        }
    ]

    return (
        <section className='py-6 sm:py-8 lg:py-10 bg-secondary' id='resume'>
            <div className='max-w-7xl mx-auto px-2 sm:px-3 lg:px-4'>
                <div className='text-center mb-6'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4'>
                        My <span className='text-accent'>Resume</span>
                    </h1>
                    <div className='w-24 h-1 bg-accent mx-auto mb-6'></div>
                    <p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                        Download my resume to learn more about my professional experience and qualifications
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    <div className='order-2 lg:order-1'>
                        <div className='relative'>
                            <img 
                                className='w-90 max-w-lg mx-auto rounded-2xl shadow-2xl' 
                                src={ResumeImg} 
                                alt="Logesh Resume"
                            />
                        </div>
                    </div>

                    <div className='order-1 lg:order-2 space-y-8'>

                        <div className='card'>
                            <h3 className='text-2xl font-bold text-accent mb-6'>Education</h3>
                            <div className='space-y-4'>
                                {education.map((edu, index) => (
                                    <div key={index} className='border-l-4 border-accent pl-4'>
                                        <h4 className='text-lg font-semibold text-white'>{edu.degree}</h4>
                                        <p className='text-accent font-medium'>{edu.institution}</p>
                                        <p className='text-gray-400 text-sm'>{edu.year} • GPA: {edu.gpa}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4'>
                            <a 
                                href={config.downloadLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='btn text-center'
                            >
                                Download Resume
                            </a>
                            <a 
                                href={config.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='btn-outline text-center'
                            >
                                View Online
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}