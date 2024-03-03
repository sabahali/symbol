import React from 'react'

export default function hero() {

    return (
        <section className='grid grid-cols-1 md:grid-cols-3 w-full max-h-full'>
            <div className=' w-full p-10 flex flex-col justify-center items-start shadow-xl'>
                <span className="font-bold text-5xl  text-blue-950 dark:text-slate-200 ">Sherin P</span>
                <span className='text-xl mt-2 text-blue-800 dark:text-slate-400'>Psychologist</span>
            </div>
            <div className='w-full flex-cols items-center  justify-start text-justify col-span-2 h-full  '>
                <div className='md:max-h-[80vh] overflow-auto p-5 md:p-10'>
                    <p className='text-base md:text-xl indent-5 text-justify'>
                    Sherin is a dedicated Consultant Psychologist currently immersed in full-time Ph.D. research. With a proven track record, Sherin has served as a Guest Lecturer at Bharathiar University, contributing significantly to higher education. Holding positions as a Lead Psychologist and Research & Development Specialist at various organizations showcases Sherin&apos;s diverse expertise. Having successfully cleared the UGC-NET examination, Sherin also dedicates time as a part-time expert, crafting impactful lesson plans and study materials for UGC-NET and NTA-CUET aspirants. This professional brings a perfect blend of academic excellence and real-world teaching experience to the evolving journey where academic rigor meets dedication to student success.
                    </p>
                    <br />
   
                </div>
            </div>
        </section>

    )
}
