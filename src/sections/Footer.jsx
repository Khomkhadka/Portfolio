import React from 'react'

const Footer = () => {
  return (
    <section className='c-space mt-10 pt-7 pb-3 border-black-300 flex justify-between flex-wrap gap-5'>
        <div className="text-white-500 mt-3 flex gap-2">
            <p>Love to work</p>
            <p>|</p>
            <p>privacy policy</p>
        </div>

        <div className="flex gap-3">
            <div className="social-icon">
                <a href="https://github.com/Khomkhadka" target="_blank" 
                rel="noopener noreferrer"><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 ml-3" /></a>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/khom-khadka-971b14251" target="_blank" 
                rel="noopener noreferrer"><img src="/assets/linkdin.png" alt="linkdin" className="w-1/2 h-1/2 ml-3" /></a>
            </div>
            <div className="social-icon">
                <a href="https://www.facebook.com/akavishek.khadka/" target="_blank" 
                 rel="noopener noreferrer"><img src="/assets/fb.png" alt="facebook" className="w-1/2 h-1/2 ml-3" /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer