import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>varun.verma2020@vitstudent.ac.in</h5>
                        <a href="mailto:varun.verma2020@vitstudent.ac.in">Send a Mail</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>sakeths</h5>
                        <a href="https://m.me/ernest.sakeeths">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+919515291756</h5>
                        <a href="https://api.whatsapp.com/send?phone=9515291756">Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder="Your Message" required /></textarea>
                    <button type="submit" className='btn bn-primary'>Send Message</button> 
                </form>
            </div>
        </section>
    )
}

export default Contact