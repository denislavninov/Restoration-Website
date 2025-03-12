import React, { forwardRef } from 'react'

const CtaSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center py-10 px-10 mx-auto mt-20 mb-20">
      <div>
        <h2 className="text-3xl font-bold text-left mb-2 font-lora" >Transform Your Art Today</h2>
        <p className="text-left mb-2 font-lora" >Get a free consultation for your restoration needs.</p>
      </div>
      <div id="contact">
        <div className="w-full h-70 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d231.9441311168976!2d28.98064440997578!3d41.033122068641866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2sse!4v1741785329299!5m2!1str!2sse"
            width="500px"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
      <div className="mt-10">
        <button className="bg-white hover:bg-black hover:text-white border-2 border-black text-black px-4 py-2 rounded-xs" >Contact Us</button>
      </div>
    </div>
  )
})

export default CtaSection