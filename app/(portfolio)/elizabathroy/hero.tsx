import React from 'react'

export default function hero() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 w-full max-h-full '>
            <div className=' w-full p-10 flex flex-col justify-center items-start shadow-xl'>

                <h1 className="font-bold text-5xl text-blue-950 dark:text-slate-200 ">Elizabath Roy</h1>
                <h2 className='text-xl mt-2 text-blue-800 dark:text-slate-400'>Academic Director- Psychology</h2>
            </div>
            <div className='w-full flex-cols items-center  justify-start text-justify col-span-2 h-full  '>
                <div className='md:max-h-[80vh] overflow-auto p-5 md:p-10'>
                    <p className='text-base md:text-xl indent-5'>Elizebath Roy is a dedicated professional with a strong academic background and a passion for research and teaching in the field of psychology. She achieved academic excellence by securing 10th rank in B.Sc. Psychology from Mahatma Gandhi University and further pursued her post-graduation in Applied Psychology at Bharathiar University.</p>
                    <br />
                    <p className='text-base md:text-xl indent-5'>During her academic journey, Elizebath actively engaged in practical applications of psychology through an internship at the Delhi Institute of Psychology Research (DIPR), Delhi. This experience broadened her perspective and deepened her understanding of research and its practical aspects.</p>
                    <br />
                    <p className='text-base md:text-xl indent-5'>Her commitment to making a positive impact on society led her to work with the Education For Good Foundation, an NGO focused on providing education on topics not covered in the traditional curriculum. Elizebath contributed to the foundation's mission with a two-year work experience, where she played a vital role in promoting education for the betterment of society.</p>
                    <br />
                    <p className='text-base md:text-xl indent-5'>Elizebath's passion for research has driven her to specialize in the study of young adults, resilience, and happiness. Her academic pursuits are complemented by a hands-on approach as she actively engages with the community. She has conducted enlightening sessions across Kerala, reaching out to approximately 1000 students. These sessions covered crucial topics such as menstruation and mental health, reflecting her commitment to breaking societal taboos and promoting mental well-being.</p>
                    <br />
                    <p className='text-base md:text-xl indent-5'>With a combination of academic achievement, practical experience, and a passion for community engagement, Elizebath Roy stands as a dedicated professional contributing meaningfully to the field of psychology.</p>
                </div>
            </div>
        </section>

    )
}
