import React, { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from '@emailjs/browser'
const TerminalContact = () => {

  const formRef = useRef();

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
//service_qfk0z3l
  const handleChange = ({target: {name, value}}) =>{
     setForm({...form,[name]:value})
  }

  const handleSubmit = async (e) =>{
           e.preventDefault();

           setLoading(true);

           try {
            await  emailjs.send(
            'service_qfk0z3l',
            'template_ewi48f6',
            {
              name: form.name,
              to_name: 'Khom khadka',
              email: form.email,
              to_email: 'khomkhadka67@gmail.com',
              message: form.message,
            },
            'YwOgMpG8J_wIJmiRO' 
          )
           setLoading(false);
            alert('message sent sucessfully!')
            setForm({
              name: '',
              email: '',
              message:''
            })
           } catch (error) {
            console.log('error')
            alert('something went wrong!')
            setLoading(false);
           }

         
  }


  return (
   <section className="c-space my-space" id='contact'>
    <div className="relative min-h-screen flex items-center justify-center flex-col">
      <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
      <div className="contact-container">
        <h3 className="head-text">Let's talk</h3>
        <p className="text-lg text-white-600 mt-3">
          Wheather you're looking to build a new website, improve your existing platform, or bring a unique project to life , i'm here to help.
        </p>
         <div className="bg-black mt-6 text-green-400 font-mono p-6 rounded-lg w-full max-w-xl mx-auto">
      {/* Terminal text typing effect */}
      <div className="mb-4 h-12">
        <span>$ </span>
        <Typewriter
          words={[
            "Connecting to portfolio...",
            "Initializing contact protocol...",
            "Hello, type your message!"
          ]}
          loop={0}             // 0 = infinite typing loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={500}
        />
      </div>

      {/* Contact form always visible */}
      <form  ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-black border border-green-400 text-green-400 p-2 rounded font-mono focus:outline-none"
          required
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-black border border-green-400 text-green-400 p-2 rounded font-mono focus:outline-none"
          required
          onChange={handleChange}
          value={form.email}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="bg-black border border-green-400 text-green-400 p-2 rounded font-mono focus:outline-none"
          required
          onChange={handleChange}
          value={form.message}
          rows={5}
        />
        <button
          type="submit"
          className="bg-green-400 text-black font-bold p-2 rounded hover:bg-green-300"
          disabled={loading}
        >
          {loading ? 'Sending' : 'Send Message'}
        </button>
      </form>
    </div>
      </div>
    </div>
   </section>
  );
};

export default TerminalContact;
