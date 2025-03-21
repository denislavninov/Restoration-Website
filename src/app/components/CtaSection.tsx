import React, { forwardRef } from 'react'
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

const CtaSection = forwardRef<HTMLDivElement>((props, ref) => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@example.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div ref={ref} className="flex flex-col items-center py-10 px-4 mx-auto mt-20 mb-20 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-lora">Transform Your Art Today</h2>
        <p className="text-lg md:text-xl font-lora">Get a free consultation for your restoration needs.</p>
      </div>
      <div id="contact" className="w-full h-70 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d231.9441311168976!2d28.98064440997578!3d41.033122068641866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2sse!4v1741785329299!5m2!1str!2sse"
          width="100%"
          height="300"
          style={{ border: 'none' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <button onClick={handleEmailClick} className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-md flex items-center space-x-2 shadow-md">
          <MdOutlineMailOutline className="text-2xl" />
          Email Us
        </button>
        <button onClick={handlePhoneClick} className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 rounded-md flex items-center space-x-2 shadow-md">
          <MdOutlinePhone className="text-2xl" />
          Call Us
        </button>
      </div>
    </div>
  )
})

CtaSection.displayName = 'CtaSection'

export default CtaSection