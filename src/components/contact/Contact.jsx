import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact">
      <section id='Get In Touch'>
        <h5>Get In Touch</h5>
        <h2>Contact</h2>

        <div className="container contact__container">
          <div className="contact__options">
              <article className='contact__option'>
                <MdOutlineEmail/>
                <h4>Email</h4>
                <h5>badredzari@gmail.com</h5>
                <a href="mailto:dummyegator@gmail.com">Send a message</a>
              </article>
          </div>
          <form action="">

          </form>
        </div>
      </section>
    </section>
  )
}

export default Contact