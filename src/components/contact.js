import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2 className="contact-text">Just a few fields to fill...</h2>
          <span className="contact-text01 Lead">{props.text}</span>
          <input
            type="hidden"
            name="_captcha"
            value="false"
            placeholder={props.textinput_placeholder2}
            className="input"
          />
          <input
            type="hidden"
            name="_next"
            value="iees.teleporthq.app/"
            placeholder={props.textinput_placeholder3}
            className="input"
          />
          <form
            action="https://formsubmit.co/abdelrhman.sh.ahmed@gmail.com"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            autoComplete="off"
            className="contact-form1"
          >
            <label htmlFor="first-naame" className="contact-text02 Label">
              {props.text1}
            </label>
            <input
              type="text"
              id="first-naame"
              name="client-name"
              required
              placeholder={props.textinput_placeholder}
              className="contact-textinput2 Small input"
            />
            <label htmlFor="phonne" className="contact-text03 Label">
              {props.text8}
            </label>
            <input
              type="tel"
              id="phonne"
              name="phone number"
              required
              placeholder={props.textinput_placeholder11}
              className="contact-textinput3 Small input"
            />
            <label className="contact-text04 Label">{props.text2}</label>
            <input
              type="text"
              name="company name"
              required
              placeholder={props.textinput_placeholder1}
              className="contact-textinput4 Small input"
            />
            <label htmlFor="phonne" className="contact-text05 Label">
              {props.text3}
            </label>
            <textarea
              id="text-areaaa"
              name="message"
              rows="4"
              placeholder={props.textarea_placeholder}
              className="contact-textarea textarea Small"
            ></textarea>
            <button type="submit" className="contact-button">
              {props.button}
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-container1">
            <h3 className="HeadingTwo">
              <span>
                Contact
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Information</span>
            </h3>
            <span className="contact-text09">{props.text4}</span>
            <div className="contact-container2">
              <div className="contact-container3">
                <svg viewBox="0 0 1024 1024" className="contact-icon">
                  <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                </svg>
                <a href="tel:+201095722947" className="contact-link Small">
                  {props.text5}
                </a>
              </div>
              <div className="contact-container4">
                <svg viewBox="0 0 1024 1024" className="contact-icon02">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <a
                  href="mailto:sales@iees-co.com?subject="
                  className="contact-link1 Small"
                >
                  {props.text6}
                </a>
              </div>
              <div className="contact-container5">
                <svg viewBox="0 0 1024 1024" className="contact-icon04">
                  <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                </svg>
                <span className="contact-text10 Small">{props.text7}</span>
              </div>
            </div>
            <div className="contact-container6">
              <svg viewBox="0 0 1024 1024" className="contact-icon06">
                <path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon08"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="contact-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
            </div>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="contact-image"
          />
          <div className="contact-container7"></div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  text7:
    '18 St. Zahrah Al Madaen, Joseph Tito, Second floor, Al Nozha, Cairo, Egypt',
  textinput_placeholder11: '+000000000',
  textinput_placeholder2: 'placeholder',
  image_src: '/playground_assets/wave-1.svg',
  textarea_placeholder:
    'Tell us more about your company and what services you need...',
  textinput_placeholder: 'Full Name',
  text4: 'Fill up the form and our Team will get back to you within 24 hours.',
  button: 'Button',
  text1: 'My name is',
  text: 'Setting up the most suitable services for you.',
  text3: 'More',
  text2: "I'm looking for",
  textinput_placeholder3: 'placeholder',
  textinput_placeholder1: 'Company Name',
  text6: 'sales@iees-co.com',
  text8: 'Phone number',
  text5: '(+40) 772 100 200',
  image_alt: 'image',
}

Contact.propTypes = {
  text7: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  image_src: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text4: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text5: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Contact
