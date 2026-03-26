import { useState, useEffect } from 'react'

const slides = [
    { bg: 'slide1.png', img: 'slide1.png' },
    { bg: 'slide2.png', img: 'slide2.png' },
    { bg: 'slide3.png', img: 'slide3.png' },
]

export const Slides = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
      <section className="relative w-full h-200 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center blur-md scale-105 transition-all duration-500"
            style={{ backgroundImage: `url(${slides[current].bg})` }}
          ></div>
  
          <div className="relative z-10 flex flex-col h-full">
              <div className="flex flex-1 items-center justify-center px-6">
                  <img
                    src={slides[current].img}
                    alt=""
                    className="w-[60vw] max-w-5xl max-h-150 object-cover shadow-[10px_10px_50px_0px_rgba(0,0,0,0.8)] transition-all duration-500"
                  />
              </div>

              <div className="flex justify-center gap-3 mb-10">
                  {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full h-5 w-5 transition-all duration-300  
                          ${index === current 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/80'
                          }`}
                      />
                  ))}
              </div>
          </div>
      </section>
    )
}