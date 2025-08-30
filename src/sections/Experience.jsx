import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constsnts'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import Developer from '../components/Developer'
import Button from '../components/Button'

const Experience = () => {

  const [animationName,setAnimationName] = useState('idle')

  return (
    <section className="c-space my-20">
        <div className="w-full text-white-600">
            <h3 className="head-text">My skill and degree</h3>
        </div>
        <div className="work-container">
            <div className="work-canvas">
                <Canvas>
                   <ambientLight intensity={7} />
                   <spotLight position={[10,10,10]} intensity={1}/>
                   <directionalLight position={[10,10,10]} intensity={1}/>
                   <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} />
                     <Suspense fallback={null}>
                        <Developer scale={3} position={[0,-3,0]} animationName={animationName} />
                     </Suspense>
                </Canvas>
            </div>
            <div className="work-content">
                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {
                        workExperiences.map(({id,name,pos,icon,animation,title,duration})=>(
                            <div key={id} className="work-content_container group" onClick={()=> setAnimationName(animation.toLowerCase())} onPointerOver = {()=> setAnimationName(animation.toLowerCase())}
                            onPointerOut={()=> setAnimationName("idle")}>
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                       <div className="work-conten_logo">
                                        <img src={icon} alt="icon" className="w-10" />
                                        </div>
                                        <div className="work-content_bar" />
                                </div>
                                <div className="sm:p-5 px:-2.5 py-5">
                                    <p className="font-bold text-white-800">{name}</p>
                                    <p className="text-sm text-white-600 ">{pos}</p>
                                    <p className="text-sm text-white-600 mb-4">{duration}</p>
                                    <p className="gropu-hover:text-white transition ease-in-out text-white-600 duration-500">{title}</p>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
                 <div className="flex justify-center gap-3 mb-4">
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
            </div>
        </div>
         <div className="work-content mt-4 h-40 ">
            <div className='p-5 text-center'>
                <p className='text-white-600'>You can download my CV here for more details about my education, skills, and projects. </p>
               <div className="relative mt-24">
  <div className="absolute  bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
    <a 
      href="https://drive.google.com/file/d/1SxKALiD8j6GvqAItDQc0oeAvWipRHm35/view?usp=sharing" 
      target="_blank"
      className="w-fit"
    >
      <button
        className="sm:w-fit w-full sm:min-w-9 mt-20 px-6 py-3 
                   bg-neutral-900 text-white font-semibold rounded-xl 
                   shadow-lg hover:bg-neutral-800 hover:scale-105 
                   transition-all duration-300 ease-in-out"

                   
      >
        📄 Download CV
      </button>
    </a>
  </div>
 
</div>

            </div>
         </div>
    </section>
  )
}

export default Experience