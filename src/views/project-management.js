import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import AppComponent from '../components/component'
import IconListItemSolution from '../components/icon-list-item-solution'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'
import './project-management.css'

const ProjectManagement = (props) => {
  return (
    <div className="project-management-container">
      <Helmet>
        <title>Project-Management - IEES</title>
        <meta property="og:title" content="Project-Management - IEES" />
      </Helmet>
      <Header></Header>
      <div className="project-management-hero">
        <h1 className="project-management-text">PROJECT MANAGEMENT</h1>
        <span className="project-management-text01">
          <span>
            A balance between the engineering view and the business view will
            help you solve most common problems and overcome a lot of obstacles
            saving a lot of time and maintaining the best quality with an eye on
            the financial side and the other on the practical engineering side.
          </span>
          <br className="project-management-text03"></br>
          <br className="project-management-text04"></br>
          <br></br>
          <span>
            To help you understand what we do and how can we help you manage
            your project efficiently and effectively, we designed a journey for
            you where you will learn about your project stages and what we do
            for you in every single stage.
          </span>
        </span>
        <div className="project-management-btn-group">
          <a href="#section1" className="project-management-link">
            <AppComponent
              rootClassName="app-component-root-class-name"
              className="project-management-get-started-button"
            ></AppComponent>
          </a>
          <button className="project-management-button button">
            <span>
              <span className="project-management-text08">oTHER SERVICES</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <div id="section1" className="project-management-section1">
        <div className="project-management-container1">
          <h1 className="project-management-text10">
            <span>1.</span>
            <br></br>
            <span>DESIGN CONCEPT</span>
          </h1>
          <p className="project-management-text14">
            <span>
              This is the first stage of any construction project. It is the
              part which we apply most of the studies, optimizations which will
              determine the path of the entire project.
            </span>
            <br></br>
            <span>
              Here are some of the common problems and how to manage to avoid
              and overcome them.
            </span>
          </p>
        </div>
        <div className="project-management-container2">
          <div className="project-management-problems1">
            <div className="project-management-card">
              <div className="project-management-container3">
                <h3 className="project-management-text18">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="project-management-ul list">
                <li className="list-item project-management-li">
                  <span className="project-management-text21">
                    Inefficient engineering design quality.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text22">
                    Lack of communication between the engineering view and the
                    business financial view.
                  </span>
                  <ul className="project-management-ul1 list">
                    <li className="list-item">
                      <span className="project-management-text23">
                        Project owner has no engineering experience.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="project-management-text24">
                        Consultant engineers mostly don’t have financial or
                        economical approach.
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="list-item">
                  <span className="project-management-text25">
                    Lack of future estimations and predictions.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text26">
                    A huge gap between theoretical approach and reality.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-management-solutions1">
            <div className="project-management-card1">
              <div className="project-management-container4">
                <h3 className="project-management-text27">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container5 list">
                <IconListItemSolution
                  text="Review project designs."
                  rootClassName="icon-list-item-solution-root-class-name"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Establish a man in between role to raise the level of communication between all project parties."
                  rootClassName="icon-list-item-solution-root-class-name1"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Translate the owner's ideas and desires to an engineering concept."
                  rootClassName="icon-list-item-solution-root-class-name2"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="A future study for the project to get the best estimation which will reflect on the plans and equipment selection."
                  rootClassName="icon-list-item-solution-root-class-name3"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Reality in mind."
                  rootClassName="icon-list-item-solution-root-class-name4"
                ></IconListItemSolution>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-management-container6">
        <div className="project-management-main">
          <div className="project-management-container7">
            <h1 className="project-management-text30 HeadingOne">
              You Work With
            </h1>
            <h1 className="project-management-text31">Soft Design System</h1>
            <p className="project-management-text32 Lead">
              <span className="project-management-text33">
                The time is now for it be okay to be great. Subscribe now and
                get notified when it&apos;s launched!
              </span>
            </p>
            <div className="project-management-container8">
              <input
                type="text"
                placeholder="Email here"
                className="project-management-textinput Small input"
              />
              <SecondaryButton button="Subscribe"></SecondaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="project-management-up">
        <svg
          viewBox="0 0 658.2857142857142 1024"
          className="project-management-icon"
        >
          <path d="M614.286 749.714c0 4.571-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8 5.714-13.143 5.714-4.571 0-9.714-2.286-13.143-5.714l-224.571-224.571-224.571 224.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-28.571-28.571c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l266.286 266.286c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 530.286c0 4.571-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8 5.714-13.143 5.714-4.571 0-9.714-2.286-13.143-5.714l-224.571-224.571-224.571 224.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-28.571-28.571c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l266.286 266.286c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
        </svg>
      </div>
      <div className="project-management-down">
        <svg
          viewBox="0 0 658.2857142857142 1024"
          className="project-management-icon2"
        >
          <path d="M614.286 493.714c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 274.286c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
        </svg>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default ProjectManagement
