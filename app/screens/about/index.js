import React from 'react'

const index = () => {
  return (
    <section
      className="min-h-[90vh] max-h-[1440px] max-w-7xl flex flex-col md:flex-col justify-center items-center relative md:gap-5 mx-auto"
    >
        <hr className="w-1/2 border-2 md:border-4 absolute top-10 -left-1/4 text-brandOffWhite opacity-70"></hr>
        <h1 className="font-BSD text-4xl md:text-5xl text-white absolute top-5 left-1/4 ml-4">/ [ About ]</h1>
        <div className="flex flex-row justify-center items-center relative md:gap-10 mx-auto">
            <img src='/astronaut.svg' alt="filler image" width="30%" className='hidden md:block'></img>
            <p
            className="md:text-base font-ibm max-w-prose w-[80%] md:w-full text-justify md:[text-align-last:right]"
            >
            We at ACM aim to ignite passion in young minds for technology and foster innovation. We conduct workshops, hackathons, podcasts, and blogs while offering members opportunities to excel in their fields through projects. Our goal is to empower youth to master computing and coding, gaining a technological edge. We provide high-quality education and open doors to new opportunities. Bound by our love for coding, ACM combines competition and collaboration, reaching milestones yearly with a growing team of bright minds. Join us as we explore the fascinating world of coding!
            </p>
        </div> 
    </section>
  )
}

export default index