import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import AppComponent from '../components/component'
import IconListItemSolution from '../components/icon-list-item-solution'
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
        <div className="project-management-container01">
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
        <div className="project-management-container02">
          <div className="project-management-problems1">
            <div className="project-management-card">
              <div className="project-management-container03">
                <h3 className="project-management-text18">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="project-management-list list">
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
                  <ul className="project-management-ul list">
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
              <div className="project-management-container04">
                <h3 className="project-management-text27">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container05 list">
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
      <div id="section2" className="project-management-section2">
        <div className="project-management-container06">
          <h1 className="project-management-text30">
            <span>2.</span>
            <br></br>
            <span>BOQ REVIEW</span>
          </h1>
          <p className="project-management-text34">
            <span>
              The second and one the most important stages is the BOQ (Bill of
              Quantity) review. 
            </span>
            <span>
              Here are some of the common problems and how to manage to avoid
              and overcome them.
            </span>
          </p>
        </div>
        <div className="project-management-container07">
          <div className="project-management-problems11">
            <div className="project-management-card2">
              <div className="project-management-container08">
                <h3 className="project-management-text37">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="project-management-ul1 list">
                <li className="list-item project-management-li06">
                  <span className="project-management-text40">
                    Template-style BOQs are a major problem. Using templates of
                    predefined items, some companies intentionally ignore the
                    specific needs of a project.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text41">
                    Absence of balance between reliability, price, and the real
                    world usage when it comes to item selection.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text42">
                    Absence of integrity.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text43">
                    Risk of time delays, inefficient equipment, or unfair
                    contract terms.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-management-solutions11">
            <div className="project-management-card3">
              <div className="project-management-container09">
                <h3 className="project-management-text44">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container10 list">
                <IconListItemSolution
                  text="Review the BOQ as per standards keeping the real world needs and conditions in mind."
                  rootClassName="icon-list-item-solution-root-class-name5"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Audit the BOQ to maximize its compatibility with the project."
                  rootClassName="icon-list-item-solution-root-class-name6"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Equipment selection based on reliability, price, and the real world usage."
                  rootClassName="icon-list-item-solution-root-class-name7"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Risk Management for the contract terms and conditions achieving the best interest to the project."
                  rootClassName="icon-list-item-solution-root-class-name8"
                ></IconListItemSolution>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section2" className="project-management-section21">
        <div className="project-management-container11">
          <h1 className="project-management-text47">
            <span>3.</span>
            <br></br>
            <span>TENDER</span>
          </h1>
          <p className="project-management-text51">
            Our team of qualified engineers and employees will help you in this
            stage to get the best financial evaluation without compromising the
            technical standards. Here are some of the common problems and how to
            manage to avoid and overcome them.
          </p>
        </div>
        <div className="project-management-container12">
          <div className="project-management-problems12">
            <div className="project-management-card4">
              <div className="project-management-container13">
                <h3 className="project-management-text52">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="project-management-ul2 list">
                <li className="list-item project-management-li10">
                  <span className="project-management-text55">
                    Contractor selection which shouldn’t be on the financial
                    side of the offer only.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text56">
                    Absence of integrity.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text57">
                    Lack of effectiveness and efficiency of the selected
                    contractor/s, their time schedules or plans.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-management-solutions12">
            <div className="project-management-card5">
              <div className="project-management-container14">
                <h3 className="project-management-text58">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container15 list">
                <IconListItemSolution
                  text="Select the appropriate contractor based on both technical and financial sides."
                  rootClassName="icon-list-item-solution-root-class-name9"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Ensure effectiveness and efficiency of the selected contractor/s, their time schedules and plans."
                  rootClassName="icon-list-item-solution-root-class-name10"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Equipment selection based on reliability, price, and the real world usage."
                  rootClassName="icon-list-item-solution-root-class-name11"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Ensure integrity of the offer by keeping up with the market prices and news."
                  rootClassName="icon-list-item-solution-root-class-name12"
                ></IconListItemSolution>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section2" className="project-management-section22">
        <div className="project-management-container16">
          <h1 className="project-management-text61">
            <span>4.</span>
            <br></br>
            <span>EXECUTION AND SUPERVISION</span>
          </h1>
          <p className="project-management-text65">
            We ensure smooth and on-time time schedules, avoid delays, approve
            materials and supervise the installation and operation processes.
            Here are some of the common problems and how to manage to avoid and
            overcome them.
          </p>
        </div>
        <div className="project-management-container17">
          <div className="project-management-problems13">
            <div className="project-management-card6">
              <div className="project-management-container18">
                <h3 className="project-management-text66">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="project-management-ul3 list">
                <li className="list-item project-management-li13">
                  <span className="project-management-text69">
                    Poor planning can result in:
                  </span>
                  <ul className="project-management-ul4 list">
                    <li className="list-item">
                      <span className="project-management-text70">
                        Time delays and missed up workflow.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="project-management-text71">
                        On-site problems and complications.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="project-management-text72">
                        Unapproved Material used or poor testing for operation.
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-management-solutions13">
            <div className="project-management-card7">
              <div className="project-management-container19">
                <h3 className="project-management-text73">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container20 list">
                <IconListItemSolution
                  text="Review contractor's plan and time schedule to maintain the shortest and most efficient path."
                  rootClassName="icon-list-item-solution-root-class-name13"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Manage workflow with plain and simple rules to ensure smooth transitions between sequential tasks."
                  rootClassName="icon-list-item-solution-root-class-name14"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Approve the supplied materials and equipment."
                  rootClassName="icon-list-item-solution-root-class-name15"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Track progress in the project and apply the appropriate strategies to maintain the time schedule."
                  rootClassName="icon-list-item-solution-root-class-name16"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Supervise the installation process and apply the required tests."
                  rootClassName="icon-list-item-solution-root-class-name17"
                ></IconListItemSolution>
                <IconListItemSolution
                  text="Supervise the operation process and apply the required tests."
                  rootClassName="icon-list-item-solution-root-class-name18"
                ></IconListItemSolution>
              </div>
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
