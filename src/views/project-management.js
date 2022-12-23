import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import IconListItemDark from '../components/icon-list-item-dark'
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
        <div className="project-management-container01">
          <h1 className="project-management-text animate__fadeInUp animate__animated">
            <span className="project-management-text01">P</span>
            <span>
              ROJECT
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="project-management-text03">M</span>
            <span>ANAGEMENT</span>
          </h1>
          <span className="project-management-text05 animate__fadeIn animate__animated">
            <span>
              A balance between the engineering view and the business view will
              help you solve most common problems and overcome a lot of
              obstacles saving a lot of time and maintaining the best quality
              with an eye on the financial side and the other on the practical
              engineering side.
            </span>
            <br className="project-management-text07"></br>
            <br className="project-management-text08"></br>
            <br></br>
            <span>
              To help you understand what we do and how can we help you manage
              your project efficiently and effectively, we designed a journey
              for you where you will learn about your project stages and what we
              do for you in every single stage.
            </span>
          </span>
          <div className="project-management-btn-group">
            <div className="project-management-container02 animate__fadeInDown animate__animated">
              <a
                href="#section1"
                className="project-management-link button animate__fadeInDown animate__animated"
              >
                Get Started
              </a>
            </div>
            <button className="project-management-button button animate__fadeInDown animate__animated">
              <span>
                <span className="project-management-text12">
                  oTHER SERVICES
                </span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="section1" className="project-management-section1">
        <div className="project-management-container03">
          <h1 className="project-management-text14">
            <span>1.</span>
            <br></br>
            <span>DESIGN CONCEPT</span>
          </h1>
          <p className="project-management-text18">
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
        <div className="serv-section-container">
          <div className="project-management-problems1">
            <div className="serv-section-problems">
              <div className="project-management-container05">
                <h3 className="project-management-text22">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item project-management-li">
                  <span className="project-management-text25">
                    Inefficient engineering design quality.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text26">
                    Lack of communication between the engineering view and the
                    business financial view.
                  </span>
                  <ul className="list serv-section-problems-list-Inside">
                    <li className="list-item">
                      <span className="project-management-text27">
                        Project owner has no engineering experience.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="project-management-text28">
                        Consultant engineers mostly don’t have financial or
                        economical approach.
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="list-item">
                  <span className="project-management-text29">
                    Lack of future estimations and predictions.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text30">
                    A huge gap between theoretical approach and reality.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="project-management-solutions1">
            <div className="serv-section-solutions project-management-card1">
              <div className="project-management-container07">
                <h3 className="project-management-text31">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container08 list">
                <IconListItemDark
                  text="Review project designs."
                  rootClassName="icon-list-item-dark-root-class-name"
                ></IconListItemDark>
                <IconListItemDark
                  text="Establish a man in between role to raise the level of communication between all project stakeholders."
                  rootClassName="icon-list-item-dark-root-class-name1"
                ></IconListItemDark>
                <IconListItemDark
                  text="Translate the owner's ideas to an engineering concept."
                  rootClassName="icon-list-item-dark-root-class-name2"
                ></IconListItemDark>
                <IconListItemDark
                  text="A future expansion for the project to get the best estimation which will reflect on the plans and equipment selection."
                  rootClassName="icon-list-item-dark-root-class-name3"
                ></IconListItemDark>
                <IconListItemDark
                  text="Reality in mind."
                  rootClassName="icon-list-item-dark-root-class-name4"
                ></IconListItemDark>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section2" className="project-management-section2">
        <div className="project-management-container09">
          <h1 className="project-management-text34">
            <span>2.</span>
            <br></br>
            <span>BOQ REVIEW</span>
          </h1>
          <p className="project-management-text38">
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
        <div className="serv-section-container">
          <div className="project-management-problems11">
            <div className="serv-section-problems">
              <div className="project-management-container11">
                <h3 className="project-management-text41">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item project-management-li06">
                  <span className="project-management-text44">
                    Template-style BOQs are a major problem. Using templates of
                    predefined items, some companies intentionally ignore the
                    specific needs of a project.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text45">
                    Absence of balance between reliability, price, and the real
                    world usage when it comes to item selection.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text46">
                    Absence of integrity.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text47">
                    Risk of time delays, inefficient equipment, or unfair
                    contract terms.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="project-management-solutions11">
            <div className="serv-section-solutions">
              <div className="project-management-container13">
                <h3 className="project-management-text48">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container14 list">
                <IconListItemDark
                  text="Review the BOQ as per standards keeping the real world needs and conditions in mind."
                  rootClassName="icon-list-item-dark-root-class-name5"
                ></IconListItemDark>
                <IconListItemDark
                  text="Audit the BOQ to maximize its compatibility with the project."
                  rootClassName="icon-list-item-dark-root-class-name6"
                ></IconListItemDark>
                <IconListItemDark
                  text="Equipment selection based on reliability, price, and the real world usage."
                  rootClassName="icon-list-item-dark-root-class-name7"
                ></IconListItemDark>
                <IconListItemDark
                  text="Risk Management for the contract terms and conditions achieving the best interest to the project."
                  rootClassName="icon-list-item-dark-root-class-name8"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="section3" className="project-management-section21">
        <div className="project-management-container16">
          <h1 className="project-management-text51">
            <span>3.</span>
            <br></br>
            <span>TENDER</span>
          </h1>
          <p className="project-management-text55">
            Our team of qualified engineers and employees will help you in this
            stage to get the best financial evaluation without compromising the
            technical standards. Here are some of the common problems and how to
            manage to avoid and overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="project-management-problems12">
            <div className="serv-section-problems">
              <div className="project-management-container18">
                <h3 className="project-management-text56">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item project-management-li10">
                  <span className="project-management-text59">
                    Contractor selection which shouldn’t be based on the
                    financial side of the offer only.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text60">
                    Absence of integrity.
                  </span>
                </li>
                <li className="list-item">
                  <span className="project-management-text61">
                    Lack of effectiveness and efficiency of the selected
                    contractor/s, their time schedules or plans.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="project-management-solutions12">
            <div className="serv-section-solutions">
              <div className="project-management-container20">
                <h3 className="project-management-text62">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container21 list">
                <IconListItemDark
                  text="Select the appropriate contractor based on both technical and financial sides."
                  rootClassName="icon-list-item-dark-root-class-name9"
                ></IconListItemDark>
                <IconListItemDark
                  text="Ensure effectiveness and efficiency of the selected contractor/s, their time schedules, quality and technicality."
                  rootClassName="icon-list-item-dark-root-class-name10"
                ></IconListItemDark>
                <IconListItemDark
                  text="Equipment selection based on reliability, price, and the real world usage."
                  rootClassName="icon-list-item-dark-root-class-name11"
                ></IconListItemDark>
                <IconListItemDark
                  text="Ensure integrity of the offer by keeping up with the market prices and news."
                  rootClassName="icon-list-item-dark-root-class-name12"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="section4" className="project-management-section22">
        <div className="project-management-container23">
          <h1 className="project-management-text65">
            <span>4.</span>
            <br></br>
            <span>EXECUTION AND SUPERVISION</span>
          </h1>
          <p className="project-management-text69">
            We ensure smooth and on-time time schedules, avoid delays, approve
            materials and supervise the installation and operation processes.
            Here are some of the common problems and how to manage to avoid and
            overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="project-management-problems13">
            <div className="project-management-card6 serv-section-problems">
              <div className="project-management-container25">
                <h3 className="project-management-text70">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="project-management-ul3 list serv-section-problems-list">
                <li className="list-item project-management-li13">
                  <span className="project-management-text73">
                    Poor planning can result in:
                  </span>
                  <ul className="project-management-ul4 list serv-section-problems-list-Inside">
                    <li className="list-item">
                      <span className="project-management-text74">
                        Time delays and missed up workflow.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="project-management-text75">
                        On-site problems and complications.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="project-management-text76">
                        Unapproved Material used or poor testing for operation.
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="project-management-solutions13">
            <div className="serv-section-solutions">
              <div className="project-management-container26">
                <h3 className="project-management-text77">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="project-management-container27 list">
                <IconListItemDark
                  text="Review contractor's plan and time schedule to maintain the shortest and most efficient path."
                  rootClassName="icon-list-item-dark-root-class-name13"
                ></IconListItemDark>
                <IconListItemDark
                  text="Manage workflow with plain and simple rules to ensure smooth transitions between sequential tasks."
                  rootClassName="icon-list-item-dark-root-class-name14"
                ></IconListItemDark>
                <IconListItemDark
                  text="Approve the supplied materials and equipment."
                  rootClassName="icon-list-item-dark-root-class-name15"
                ></IconListItemDark>
                <IconListItemDark
                  text="Track progress in the project and apply the appropriate strategies to maintain the time schedule."
                  rootClassName="icon-list-item-dark-root-class-name16"
                ></IconListItemDark>
                <IconListItemDark
                  text="Supervise the installation and the operation processes and apply the required tests."
                  rootClassName="icon-list-item-dark-root-class-name17"
                ></IconListItemDark>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-management-container28">
        <div className="project-management-container29">
          <h4 className="project-management-text80 animate-gradient">
            Other Services
          </h4>
          <div className="project-management-container30">
            <div className="project-management-pricing-card Card">
              <h3 className="project-management-text81 title transition">
                PROJECT MANAGEMENT
              </h3>
              <div className="folder">
                <div className="project-management-container32">
                  <span className="project-management-text82">
                    Providing the best scenario for managing MEP projects by
                    optimizing the dilemma between Scope, time, quality, and
                    budget. Using our experience in managing MEP projects and
                    through our specialization in MEP systems.
                  </span>
                </div>
                <div className="project-management-container33">
                  <a
                    href="/project-management"
                    className="project-management-link1 button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="project-management-pricing-card1 Card">
              <h3 className="project-management-text83 title transition">
                MAINTENANCE MANAGEMENT
              </h3>
              <div className="project-management-container34 folder">
                <div className="project-management-container35">
                  <span className="project-management-text84">
                    We support clients to achieve the best lifetime for their
                    assets and equipment by proposing the optimum maintenance
                    scenario and following up on the implementation of this
                    scenario.
                  </span>
                </div>
                <div className="project-management-container36">
                  <Link
                    to="/maintenance-management"
                    className="project-management-navlink button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="project-management-pricing-card2 Card">
              <h3 className="project-management-text85 title transition">
                ENERGY MANAGEMENT
              </h3>
              <div className="project-management-container37 folder">
                <div className="project-management-container38">
                  <span className="project-management-text86">
                    Developing optimized Mechanical, Electrical, and Plumbing
                    (MEP) designs as per client requirements. we design, select,
                    and optimize best-fit MEP systems that facilitate operations
                    and fulfill client requirements as per international
                    standards with considering the best life cycle cost.
                  </span>
                </div>
                <div className="project-management-container39">
                  <Link
                    to="/project-management"
                    className="project-management-navlink1 button"
                  >
                    Learn More
                  </Link>
                </div>
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
