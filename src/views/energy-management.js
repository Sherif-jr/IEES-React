import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import AppComponent from '../components/component'
import IconListItemDark from '../components/icon-list-item-dark'
import FooterGray from '../components/footer-gray'
import './energy-management.css'

const EnergyManagement = (props) => {
  return (
    <div className="energy-management-container">
      <Helmet>
        <title>Energy-Management - IEES</title>
        <meta property="og:title" content="Energy-Management - IEES" />
      </Helmet>
      <Header></Header>
      <div className="energy-management-hero">
        <div className="energy-management-container01">
          <h1 className="energy-management-text animate__fadeInUp animate__animated">
            <span className="energy-management-text001">E</span>
            <span>
              nergy
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="energy-management-text003">M</span>
            <span>anagement</span>
          </h1>
          <span className="energy-management-text005 animate__fadeIn animate__animated">
            <span className="energy-management-text006">
              Our energy management service isn&apos;t about saving energy by
              any means, it&apos;s about smart management of all energy sources,
              decreasing consumption, and integrate with latest technologies.
              All without compromising business operation or decreasing its
              productivity. Eventually we save energy but without sacrificing
              anything.
            </span>
            <br></br>
            <br></br>
            <span>
              To help you understand what we do and how can we help you manage
              your project efficiently and effectively, we designed a journey
              for you where you will learn about your project stages and what we
              do for you in every single stage.
            </span>
            <br></br>
          </span>
          <div className="energy-management-btn-group">
            <a href="#section1" className="energy-management-link">
              <AppComponent
                rootClassName="app-component-root-class-name"
                className="energy-management-get-started-button"
              ></AppComponent>
            </a>
            <a
              href="#other-services"
              className="energy-management-link1 button animate__fadeInDown animate__animated"
            >
              <span>
                <span className="energy-management-text012">
                  oTHER SERVICES
                </span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div
        id="section1"
        className="energy-management-section1 serv-section-full-section"
      >
        <div className="energy-management-container02">
          <h1 className="energy-management-text014">
            <span>1.</span>
            <br></br>
            <span>ENERGY BILL EVALUATION</span>
          </h1>
          <p className="energy-management-text018">
            We gather and review energy bill data, analyze, categorize, and
            output a full report about bills and fines with our recommendations
            based on the data. This step is more like a quick look and
            evaluation of the current situation. Later in the upcoming steps we
            will apply more advanced techniques to refine these data by
            surveying and measuring. Here are some of the common problems and
            how to manage to avoid and overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="energy-management-problems1">
            <div className="serv-section-problems">
              <div className="energy-management-container04">
                <h3 className="energy-management-text019">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="energy-management-text022">
                    Difficulty of evaluating energy bills (gas, electricity,
                    etc..) as it is affected by a lot of factors.
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text023">
                    High energy consumption therefore expensive bills.
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text024">
                    <span>
                      Additional expenses due to fines and energy waste on
                      unimportant tasks in business operations.
                    </span>
                    <br></br>
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="energy-management-solutions1">
            <div className="serv-section-solutions">
              <div className="energy-management-container06">
                <h3 className="energy-management-text027">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="energy-management-container07 list">
                <IconListItemDark
                  text="Review energy bill data, analyze and categorize the consumption based on urgency and value."
                  rootClassName="icon-list-item-dark-root-class-name39"
                ></IconListItemDark>
                <IconListItemDark
                  text="Submit a full report about the energy consumption, current average rate and fines costs."
                  rootClassName="icon-list-item-dark-root-class-name40"
                ></IconListItemDark>
                <IconListItemDark
                  text="Evaluate the current average consumption rate compared to standards."
                  rootClassName="icon-list-item-dark-root-class-name41"
                ></IconListItemDark>
                <IconListItemDark
                  text="Recommend actions or proceed to next steps to refine data and measure."
                  rootClassName="icon-list-item-dark-root-class-name42"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section2"
        className="energy-management-section2 serv-section-full-section"
      >
        <div className="energy-management-container09">
          <h1 className="energy-management-text030">
            <span>2.</span>
            <br></br>
            <span>FACILITY WALK THROUGH (SURVEYING)</span>
          </h1>
          <p className="energy-management-text034">
            <span>
              A quick scan and survey help us offer you more specific
              recommendations based on equipment quantity and efficiency. 
            </span>
            <span>
              Here are some of the common problems and how to manage to avoid
              and overcome them.
            </span>
          </p>
        </div>
        <div className="serv-section-container">
          <div className="energy-management-problems11">
            <div className="serv-section-problems">
              <div className="energy-management-container11">
                <h3 className="energy-management-text037">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="energy-management-text040">
                    Small waste of energy on some activities or equipment
                    malfunction adds up and form a huge bill.
                  </span>
                  <ul className="energy-management-ul1 list serv-section-problems-list-Inside">
                    <li className="list-item">
                      <span className="energy-management-text041">
                        Ignorant behavior of staff and visitors.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="energy-management-text042">
                        <span>Uncalibrated equipment. </span>
                        <br></br>
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="energy-management-text045">
                        <span>Wrong setup for some devices.</span>
                        <br></br>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="energy-management-solutions11">
            <div className="serv-section-solutions">
              <div className="energy-management-container13">
                <h3 className="energy-management-text048">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="energy-management-container14 list">
                <IconListItemDark
                  text="Report the condition of installed equipment."
                  rootClassName="icon-list-item-dark-root-class-name43"
                ></IconListItemDark>
                <IconListItemDark
                  text="Recommend quick solutions for the malfunctioned equipment."
                  rootClassName="icon-list-item-dark-root-class-name53"
                ></IconListItemDark>
                <IconListItemDark
                  text="Recommend quick free or low-cost solutions for the low energy draining activities or behaviors."
                  rootClassName="icon-list-item-dark-root-class-name54"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section3"
        className="energy-management-section3 serv-section-full-section"
      >
        <div className="energy-management-container16">
          <h1 className="energy-management-text051">
            <span>3.</span>
            <br></br>
            <span>ENERGY AUDITING &amp; ANALYSIS</span>
            <br></br>
          </h1>
          <p className="energy-management-text056">
            Advanced techniques that help you pick your system based on a
            detailed analysis. We measure, plan and audit then we select the
            proper equipment based on specs and project needs. Here are some of
            the common problems and how to manage to avoid and overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="energy-management-problems12">
            <div className="serv-section-problems">
              <div className="energy-management-container18">
                <h3 className="energy-management-text057">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item energy-management-li07">
                  <span className="energy-management-text060">
                    <span>
                      Lack of knowledge about the project-specific details such
                      as consumption and operation conditions, efficiency,
                      energy losses, equipment and alternatives.
                    </span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text063">
                    Lack of prioritization in case of development and scaling
                    due to shortage of enough data that could be used instead of
                    guessing and personal diligence.
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text064">
                    Absence of an evaluation criteria for the discissions
                    financially and technically.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="energy-management-solutions12">
            <div className="serv-section-solutions">
              <div className="energy-management-container20">
                <h3 className="energy-management-text065">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="energy-management-container21 list">
                <IconListItemDark
                  text="Measure, audit, plan, and select the proper equipment based on its specs and the project needs."
                  rootClassName="icon-list-item-dark-root-class-name44"
                ></IconListItemDark>
                <IconListItemDark
                  text="Implementation of the auditing results in real world and optionally involve members of the business energy management division."
                  rootClassName="icon-list-item-dark-root-class-name45"
                ></IconListItemDark>
                <IconListItemDark
                  text="Gradually proceed with actions after each measure step to keep our fast-track process without delays."
                  rootClassName="icon-list-item-dark-root-class-name55"
                ></IconListItemDark>
                <IconListItemDark
                  text="Analyze the audit result and offer recommendations."
                  rootClassName="icon-list-item-dark-root-class-name57"
                ></IconListItemDark>
                <IconListItemDark
                  text="Attach a feasibility study for the recommendation using lifetime cost analysis offering detailed information about ROI and Payback Period."
                  rootClassName="icon-list-item-dark-root-class-name56"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section4"
        className="energy-management-section4 serv-section-full-section"
      >
        <div className="energy-management-container23">
          <h1 className="energy-management-text068">
            <span>4.</span>
            <br></br>
            <span>MEASURING AND VERIFICATION</span>
            <br></br>
          </h1>
          <p className="energy-management-text073">
            And here we are to what could be considered as the last practical
            step of our energy management cycle. In this step we finally
            evaluate the solution. It is a recurring step that represents how
            well our strategies are going and what do we need next. Here are
            some of the common problems and how to manage to avoid and overcome
            them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="energy-management-problems13">
            <div className="serv-section-problems">
              <div className="energy-management-container25">
                <h3 className="energy-management-text074">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="energy-management-text077">
                    lack of energy conservation projects evaluation approaches.
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text078">
                    No clear vision about the next steps.
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text079">
                    Wrong analysis could lead to a false conclusion either in
                    case of process success or failure.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="energy-management-solutions13">
            <div className="serv-section-solutions">
              <div className="energy-management-container27">
                <h3 className="energy-management-text080">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="energy-management-container28 list">
                <IconListItemDark
                  text="Define KPI's, Analyze on different measures and periods, and report with an up-to-date situation about the following:"
                  rootClassName="icon-list-item-dark-root-class-name46"
                ></IconListItemDark>
                <div className="energy-management-container29">
                  <div className="energy-management-container30">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="energy-management-icon"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="energy-management-text083">Budget</p>
                  </div>
                </div>
                <div className="energy-management-container31">
                  <div className="energy-management-container32">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="energy-management-icon02"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="energy-management-text084">Operation</p>
                  </div>
                </div>
                <div className="energy-management-container33">
                  <div className="energy-management-container34">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="energy-management-icon04"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="energy-management-text085">
                      Equipment Condition
                    </p>
                  </div>
                </div>
                <div className="energy-management-container35">
                  <div className="energy-management-container36">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="energy-management-icon06"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="energy-management-text086">
                      Maintenance team activities.
                    </p>
                  </div>
                </div>
                <IconListItemDark
                  text="Summarize a list of needed actions in the meantime and in the future based on their priorities."
                  rootClassName="icon-list-item-dark-root-class-name47"
                ></IconListItemDark>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section6"
        className="energy-management-section7 serv-section-full-section"
      >
        <div className="energy-management-container37">
          <h1 className="energy-management-text087">
            <span>5.</span>
            <br></br>
            <span>ENERGY MANAGEMENT MANUAL</span>
            <br></br>
          </h1>
          <p className="energy-management-text092">
            Imagine a system with an ability to identify its malfunctions,
            provide the proper way to fix it and even predict and prevent it
            before it happens. That is what an energy management manual can do. 
            Here are some of the common problems and how to manage to avoid and
            overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="energy-management-problems14">
            <div className="serv-section-problems">
              <div className="energy-management-container39">
                <h3 className="energy-management-text093">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item energy-management-li13">
                  <span className="energy-management-text096">
                    <span>
                      Unstable energy processes because of the staff changes
                      over the time.
                    </span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text099">
                    Slower system development compared to the business scale
                    rate due to lack of accurate information about its
                    capabilities and problems.
                  </span>
                </li>
                <li className="list-item">
                  <span className="energy-management-text100">
                    Lack of sustainability.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="energy-management-solutions14">
            <div className="serv-section-solutions">
              <div className="energy-management-container41">
                <h3 className="energy-management-text101">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="energy-management-container42 list">
                <IconListItemDark
                  text="Define system standards to make it independent, self-maintained and predictive."
                  rootClassName="icon-list-item-dark-root-class-name50"
                ></IconListItemDark>
                <IconListItemDark
                  text="Define every possible procedure to keep the system under observation and control."
                  rootClassName="icon-list-item-dark-root-class-name51"
                ></IconListItemDark>
                <IconListItemDark
                  text="Providing the manual that contains all information about the system life cycle to ensure sustainability."
                  rootClassName="icon-list-item-dark-root-class-name52"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="other-services" className="energy-management-other-services">
        <div className="energy-management-container44">
          <h4 className="energy-management-text104">Other Services</h4>
          <div className="energy-management-container45">
            <div className="energy-management-pricing-card Card">
              <h3 className="energy-management-text105 title transition">
                PROJECT MANAGEMENT
              </h3>
              <div className="folder">
                <div className="energy-management-container47">
                  <span className="energy-management-text106">
                    Providing the best scenario for managing MEP projects by
                    optimizing the dilemma between Scope, time, quality, and
                    budget. Using our experience in managing MEP projects and
                    through our specialization in MEP systems.
                  </span>
                </div>
                <div className="energy-management-container48">
                  <a
                    href="/project-management"
                    className="energy-management-link2 button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="energy-management-pricing-card1 Card">
              <h3 className="energy-management-text107 title transition">
                MAINTENANCE MANAGEMENT
              </h3>
              <div className="energy-management-container49 folder">
                <div className="energy-management-container50">
                  <span className="energy-management-text108">
                    We support clients to achieve the best lifetime for their
                    assets and equipment by proposing the optimum maintenance
                    scenario and following up on the implementation of this
                    scenario.
                  </span>
                </div>
                <div className="energy-management-container51">
                  <Link
                    to="/maintenance-management"
                    className="energy-management-navlink button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="energy-management-pricing-card2 Card">
              <h3 className="energy-management-text109 title transition">
                ENERGY MANAGEMENT
              </h3>
              <div className="energy-management-container52 folder">
                <div className="energy-management-container53">
                  <span className="energy-management-text110">
                    Developing optimized Mechanical, Electrical, and Plumbing
                    (MEP) designs as per client requirements. we design, select,
                    and optimize best-fit MEP systems that facilitate operations
                    and fulfill client requirements as per international
                    standards with considering the best life cycle cost.
                  </span>
                </div>
                <div className="energy-management-container54">
                  <Link
                    to="/energy-management"
                    className="energy-management-navlink1 button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="energy-management-up">
        <svg
          viewBox="0 0 658.2857142857142 1024"
          className="energy-management-icon08"
        >
          <path d="M614.286 749.714c0 4.571-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8 5.714-13.143 5.714-4.571 0-9.714-2.286-13.143-5.714l-224.571-224.571-224.571 224.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-28.571-28.571c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l266.286 266.286c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 530.286c0 4.571-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8 5.714-13.143 5.714-4.571 0-9.714-2.286-13.143-5.714l-224.571-224.571-224.571 224.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-28.571-28.571c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l266.286 266.286c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
        </svg>
      </div>
      <div className="energy-management-down">
        <svg
          viewBox="0 0 658.2857142857142 1024"
          className="energy-management-icon10"
        >
          <path d="M614.286 493.714c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 274.286c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
        </svg>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default EnergyManagement
