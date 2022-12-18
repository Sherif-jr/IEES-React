import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>ContactUs - IEES</title>
        <meta property="og:title" content="ContactUs - IEES" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <Contact
        text1="Name"
        text2="Company"
        text6="sales@iees-co.com"
        textinput_placeholder1="Your company name"
      ></Contact>
      <Footer></Footer>
    </div>
  )
}

export default ContactUs
