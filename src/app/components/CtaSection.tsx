import React from 'react'

function CtaSection() {
  return (
    <div className="flex flex-row items-start justify-around py-10 px-10 mx-auto mb-20">
      <div>
        <h2 className="text-3xl font-bold text-left mb-2 font-lora " >Transform Your Art Today</h2>
        <p className="text-left mb-2 font-lora" >Get a free consultaion for your restoration needs.</p>
      </div>
      <div>
        <button className=" bg-white hover:bg-black hover:text-white border-2 border-black text-black px-4 py-2 rounded-xs" >Contact Us</button>

      </div>
    </div>

  )
}

export default CtaSection