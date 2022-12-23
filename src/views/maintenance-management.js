import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import AppComponent from '../components/component'
import IconListItemDark from '../components/icon-list-item-dark'
import FooterGray from '../components/footer-gray'
import './maintenance-management.css'

const MaintenanceManagement = (props) => {
  return (
    <div className="maintenance-management-container">
      <Helmet>
        <title>Maintenance-Management - IEES</title>
        <meta property="og:title" content="Maintenance-Management - IEES" />
      </Helmet>
      <Header></Header>
      <div className="maintenance-management-hero">
        <div className="maintenance-management-container01">
          <h1 className="maintenance-management-text animate__fadeInUp animate__animated">
            <span className="maintenance-management-text001">M</span>
            <span>
              aintenance
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="maintenance-management-text003">M</span>
            <span>ANAGEMENT</span>
          </h1>
          <span className="maintenance-management-text005 animate__fadeIn animate__animated">
            <span className="maintenance-management-text006">
              A goal without a plan is just a wish. We in IEES put the operation
              of your business on top of our priorities. We measure, plan, and
              execute, all for one goal which is a perfect workflow and a
              maximum uptime for your business or project.
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
          <div className="maintenance-management-btn-group">
            <a href="#section1" className="maintenance-management-link">
              <AppComponent
                rootClassName="app-component-root-class-name1"
                className="maintenance-management-get-started-button"
              ></AppComponent>
            </a>
            <button className="maintenance-management-button button animate__fadeInDown animate__animated">
              <span>
                <span className="maintenance-management-text012">
                  oTHER SERVICES
                </span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="section1"
        className="maintenance-management-section1 serv-section-full-section"
      >
        <div className="maintenance-management-container02">
          <h1 className="maintenance-management-text014">
            <span>1.</span>
            <br></br>
            <span>BENCHMARKING</span>
          </h1>
          <p className="maintenance-management-text018">
            <span>
              It&apos;s that simple. To know which way you will take,
              you&apos;ve got to know where you are. The benchmarking stage is
              an important step towards our goal. 
            </span>
            <span>
              Here are some of the common problems and how to manage to avoid
              and overcome them.
            </span>
          </p>
        </div>
        <div className="serv-section-container">
          <div className="maintenance-management-problems1">
            <div className="serv-section-problems">
              <div className="maintenance-management-container04">
                <h3 className="maintenance-management-text021">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="maintenance-management-text024">
                    Lack of details about equipment:
                  </span>
                  <ul className="maintenance-management-ul list serv-section-problems-list-Inside">
                    <li className="list-item">
                      <span className="maintenance-management-text025">
                        Its condition and availability.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text026">
                        <span>Inventory and quantities.</span>
                        <br></br>
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text029">
                        <span>Previous breakdowns.</span>
                        <br></br>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text032">
                    Inefficient maintenance activities:
                  </span>
                  <ul className="maintenance-management-ul01 list">
                    <li className="list-item">
                      <span className="maintenance-management-text033">
                        Lack of planning and Prioritization.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text034">
                        <span>Low performance from the maintenance team.</span>
                        <br></br>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="maintenance-management-solutions1">
            <div className="serv-section-solutions">
              <div className="maintenance-management-container06">
                <h3 className="maintenance-management-text037">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="maintenance-management-container07 list">
                <IconListItemDark
                  text="Full quantity survey for all equipment including their condition and efficiency ."
                  rootClassName="icon-list-item-dark-root-class-name19"
                ></IconListItemDark>
                <IconListItemDark
                  text="Analyze previous maintenance activities."
                  rootClassName="icon-list-item-dark-root-class-name22"
                ></IconListItemDark>
                <IconListItemDark
                  text="Record and analyze ongoing maintenance activities."
                  rootClassName="icon-list-item-dark-root-class-name20"
                ></IconListItemDark>
                <IconListItemDark
                  text="Evaluate and develop a maintenance plan based on data."
                  rootClassName="icon-list-item-dark-root-class-name21"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section2"
        className="maintenance-management-section2 serv-section-full-section"
      >
        <div className="maintenance-management-container09">
          <h1 className="maintenance-management-text040">
            <span>2.</span>
            <br></br>
            <span>MAINTENANCE PLAN</span>
          </h1>
          <p className="maintenance-management-text044">
            <span>
              The second and one the most important stages is the planning part.
              Based on your business category and operation we evaluate the
              gathered data and develop an action plan. 
            </span>
            <span>
              Here are some of the common problems and how to manage to avoid
              and overcome them.
            </span>
          </p>
        </div>
        <div className="serv-section-container">
          <div className="maintenance-management-problems11">
            <div className="serv-section-problems">
              <div className="maintenance-management-container11">
                <h3 className="maintenance-management-text047">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="maintenance-management-text050">
                    Sudden and unpredicted breakdowns that causes:
                  </span>
                  <ul className="maintenance-management-ul03 list serv-section-problems-list-Inside">
                    <li className="list-item">
                      <span className="maintenance-management-text051">
                        Bad reputation about the service or the business.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text052">
                        <span>Data loss.</span>
                        <br></br>
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text055">
                        <span>Frequent downtime.</span>
                        <br></br>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text058">
                    <span>Absence of spare parts which means:</span>
                    <br></br>
                  </span>
                  <ul className="maintenance-management-ul04 list">
                    <li className="list-item">
                      <span className="maintenance-management-text061">
                        Even more down time.
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text062">
                        <span>
                          Failure of the emergency system due to their time
                          limitations.
                        </span>
                        <br></br>
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text065">
                        <span>Frequent downtime.</span>
                        <br></br>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="maintenance-management-solutions11">
            <div className="serv-section-solutions">
              <div className="maintenance-management-container13">
                <h3 className="maintenance-management-text068">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="maintenance-management-container14 list">
                <IconListItemDark
                  text="Minimize breakdown and downtime by:"
                  rootClassName="icon-list-item-dark-root-class-name24"
                ></IconListItemDark>
                <div className="maintenance-management-container15">
                  <div className="maintenance-management-container16">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text071">
                      Schedule maintenance activities outside of operation time.
                    </p>
                  </div>
                </div>
                <div className="maintenance-management-container17">
                  <div className="maintenance-management-container18">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon02"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text072">
                      Plan ahead and provide a 100% available inventory for all
                      spare parts needed.
                    </p>
                  </div>
                </div>
                <div className="maintenance-management-container19">
                  <div className="maintenance-management-container20">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon04"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text073">
                      Coordinate maintenance activities with operations.
                    </p>
                  </div>
                  <div className="maintenance-management-container21">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon06"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text074">
                      Plan the spare parts needs and estimate budget.
                    </p>
                  </div>
                  <div className="maintenance-management-container22">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon08"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text075">
                      Plan human resources of maintenance management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section3"
        className="maintenance-management-section3 serv-section-full-section"
      >
        <div className="maintenance-management-container24">
          <h1 className="maintenance-management-text076">
            <span>3.</span>
            <br></br>
            <span>TRAINING</span>
            <br></br>
          </h1>
          <p className="maintenance-management-text081">
            We rely on our set of trained and equipped engineers to form the big
            picture about the maintenance management through charts of the
            gathered data. Developing the plan continues. Here are some of the
            common problems and how to manage to avoid and overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="maintenance-management-problems12">
            <div className="serv-section-problems">
              <div className="maintenance-management-container26">
                <h3 className="maintenance-management-text082">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item maintenance-management-li15">
                  <span className="maintenance-management-text085">
                    <span>
                      Maintenance team has low level of experience in
                      prioritizing and planning.
                    </span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text088">
                    Lack of early preventive procedures. 
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text089">
                    Lack of a maintenance system that everyone one in it has a
                    part while working and communicating properly with others.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="maintenance-management-solutions12">
            <div className="serv-section-solutions">
              <div className="maintenance-management-container28">
                <h3 className="maintenance-management-text090">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="maintenance-management-container29 list">
                <IconListItemDark
                  text="Train the maintenance team on a disciplined but flexible system that guarantees good planning and smooth workflow."
                  rootClassName="icon-list-item-dark-root-class-name28"
                ></IconListItemDark>
                <IconListItemDark
                  text="Prioritize tasks and plan ahead to prevent any predictable breakdown and deal with sudden failures professionally to minimize the downtime as possible."
                  rootClassName="icon-list-item-dark-root-class-name29"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section4"
        className="maintenance-management-section4 serv-section-full-section"
      >
        <div className="maintenance-management-container31">
          <h1 className="maintenance-management-text093">
            <span>4.</span>
            <br></br>
            <span>MEASURING PERFORMANCE</span>
            <br></br>
          </h1>
          <p className="maintenance-management-text098">
            Our team of qualified engineers and employees will help you in this
            stage to get the best financial evaluation without compromising the
            technical standards. Here are some of the common problems and how to
            manage to avoid and overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="maintenance-management-problems13">
            <div className="serv-section-problems">
              <div className="maintenance-management-container33">
                <h3 className="maintenance-management-text099">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="maintenance-management-text102">
                    Lack of an evaluation about the current maintenance plans,
                    and how effective they are.
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text103">
                    Lack of an evaluation about the budget and resources
                    including human resources.
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text104">
                    Absence of any indication about the after-plan situation and
                    how well are we prepared. 
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="maintenance-management-solutions13">
            <div className="serv-section-solutions">
              <div className="maintenance-management-container35">
                <h3 className="maintenance-management-text105">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="maintenance-management-container36 list">
                <IconListItemDark
                  text="Define KPI's, Analyze on different measures and periods, and report with an up-to-date situation about the following:"
                  rootClassName="icon-list-item-dark-root-class-name32"
                ></IconListItemDark>
                <div className="maintenance-management-container37">
                  <div className="maintenance-management-container38">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon10"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text108">Budget</p>
                  </div>
                </div>
                <div className="maintenance-management-container39">
                  <div className="maintenance-management-container40">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon12"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text109">Operation</p>
                  </div>
                </div>
                <div className="maintenance-management-container41">
                  <div className="maintenance-management-container42">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon14"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text110">
                      Equipment Condition
                    </p>
                  </div>
                </div>
                <div className="maintenance-management-container43">
                  <div className="maintenance-management-container44">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="maintenance-management-icon16"
                    >
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="maintenance-management-text111">
                      Maintenance team activities.
                    </p>
                  </div>
                </div>
                <IconListItemDark
                  text="Summarize a list of needed actions in the meantime and in the future based on their priorities."
                  rootClassName="icon-list-item-dark-root-class-name37"
                ></IconListItemDark>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section5"
        className="maintenance-management-section5 serv-section-full-section"
      >
        <div className="maintenance-management-container45">
          <h1 className="maintenance-management-text112">
            <span>5.</span>
            <br></br>
            <span>FACILITY DEVELOPMENT</span>
            <br></br>
          </h1>
          <p className="maintenance-management-text117">
            What&apos;s next? If you are planning to scale you business or grow
            your project, you are definitely going to need your assets to expand
            proportionally. These assets include for example equipment and human
            resources. and that&apos;s where we come in providing suggestions
            ordered by the urgency and priority and based on actual data. Here
            are some of the common problems and how to manage to avoid and
            overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="maintenance-management-problems14">
            <div className="serv-section-problems">
              <div className="maintenance-management-container47">
                <h3 className="maintenance-management-text118">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item">
                  <span className="maintenance-management-text121">
                    Systems can&apos;t handle a higher scale usage due to:
                  </span>
                  <ul className="maintenance-management-ul08 list serv-section-problems-list-Inside">
                    <li className="list-item">
                      <span className="maintenance-management-text122">
                        <span>
                          Limited Capabilities and complicated maintenance
                          process especially for older equipment.
                        </span>
                        <br></br>
                      </span>
                    </li>
                    <li className="list-item">
                      <span className="maintenance-management-text125">
                        <span>
                          Lack of optimizations to the new added equipment.
                        </span>
                        <br></br>
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text128">
                    Lack of early preventive procedures. 
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text129">
                    Lack of a well-organized maintenance system that has a clear
                    role for everyone and focused on teamwork and collaboration.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="maintenance-management-solutions14">
            <div className="serv-section-solutions">
              <div className="maintenance-management-container49">
                <h3 className="maintenance-management-text130">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="maintenance-management-container50 list">
                <IconListItemDark
                  text="Train the maintenance team on a disciplined but flexible system that guarantees good planning and smooth workflow."
                  rootClassName="icon-list-item-dark-root-class-name33"
                ></IconListItemDark>
                <IconListItemDark
                  text="Prioritize tasks and plan ahead to prevent any predictable breakdown and deal with sudden failures professionally to minimize the downtime as possible."
                  rootClassName="icon-list-item-dark-root-class-name34"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section6"
        className="maintenance-management-section7 serv-section-full-section"
      >
        <div className="maintenance-management-container52">
          <h1 className="maintenance-management-text133">
            <span>6.</span>
            <br></br>
            <span>MAINTENANCE MANAGEMENT MANUAL</span>
            <br></br>
          </h1>
          <p className="maintenance-management-text138">
            Imagine a system with an ability to identify its malfunctions,
            provide the proper way to fix it and even predict and prevent it
            before it happens. That is what a maintenance management manual can
            do.  Here are some of the common problems and how to manage to avoid
            and overcome them.
          </p>
        </div>
        <div className="serv-section-container">
          <div className="maintenance-management-problems15">
            <div className="serv-section-problems">
              <div className="maintenance-management-container54">
                <h3 className="maintenance-management-text139">
                  <span>Common Problems</span>
                  <br></br>
                </h3>
              </div>
              <ul className="list serv-section-problems-list">
                <li className="list-item maintenance-management-li26">
                  <span className="maintenance-management-text142">
                    <span>
                      Unstable maintenance processes because of the staff
                      changes over the time.
                    </span>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text145">
                    Slower system development compared to the business scale
                    rate due to lack of accurate information about its
                    capabilities.
                  </span>
                </li>
                <li className="list-item">
                  <span className="maintenance-management-text146">
                    Lack of sustainability.
                  </span>
                </li>
              </ul>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
          <div className="maintenance-management-solutions15">
            <div className="serv-section-solutions">
              <div className="maintenance-management-container56">
                <h3 className="maintenance-management-text147">
                  <span>IEES Solutions</span>
                  <br></br>
                </h3>
              </div>
              <div className="maintenance-management-container57 list">
                <IconListItemDark
                  text="Define system standards to make it independent, self-maintained and predicted."
                  rootClassName="icon-list-item-dark-root-class-name35"
                ></IconListItemDark>
                <IconListItemDark
                  text="Define every possible procedure to keep the system under observation and control."
                  rootClassName="icon-list-item-dark-root-class-name36"
                ></IconListItemDark>
                <IconListItemDark
                  text="Providing the manual that contains all information about the system life cycle to ensure sustainability."
                  rootClassName="icon-list-item-dark-root-class-name38"
                ></IconListItemDark>
              </div>
              <div className="serv-section-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="maintenance-management-container59">
        <div className="maintenance-management-container60">
          <h4 className="maintenance-management-text150">Other Services</h4>
          <div className="maintenance-management-container61">
            <div className="maintenance-management-pricing-card Card">
              <h3 className="maintenance-management-text151 title transition">
                PROJECT MANAGEMENT
              </h3>
              <div className="folder">
                <div className="maintenance-management-container63">
                  <span className="maintenance-management-text152">
                    Providing the best scenario for managing MEP projects by
                    optimizing the dilemma between Scope, time, quality, and
                    budget. Using our experience in managing MEP projects and
                    through our specialization in MEP systems.
                  </span>
                </div>
                <div className="maintenance-management-container64">
                  <a
                    href="/project-management"
                    className="maintenance-management-link1 button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="maintenance-management-pricing-card1 Card">
              <h3 className="maintenance-management-text153 title transition">
                MAINTENANCE MANAGEMENT
              </h3>
              <div className="maintenance-management-container65 folder">
                <div className="maintenance-management-container66">
                  <span className="maintenance-management-text154">
                    We support clients to achieve the best lifetime for their
                    assets and equipment by proposing the optimum maintenance
                    scenario and following up on the implementation of this
                    scenario.
                  </span>
                </div>
                <div className="maintenance-management-container67">
                  <Link
                    to="/maintenance-management"
                    className="maintenance-management-navlink button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="maintenance-management-pricing-card2 Card">
              <h3 className="maintenance-management-text155 title transition">
                ENERGY MANAGEMENT
              </h3>
              <div className="maintenance-management-container68 folder">
                <div className="maintenance-management-container69">
                  <span className="maintenance-management-text156">
                    Developing optimized Mechanical, Electrical, and Plumbing
                    (MEP) designs as per client requirements. we design, select,
                    and optimize best-fit MEP systems that facilitate operations
                    and fulfill client requirements as per international
                    standards with considering the best life cycle cost.
                  </span>
                </div>
                <div className="maintenance-management-container70">
                  <Link
                    to="/energy-management"
                    className="maintenance-management-navlink1 button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maintenance-management-up">
        <svg
          viewBox="0 0 658.2857142857142 1024"
          className="maintenance-management-icon18"
        >
          <path d="M614.286 749.714c0 4.571-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8 5.714-13.143 5.714-4.571 0-9.714-2.286-13.143-5.714l-224.571-224.571-224.571 224.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-28.571-28.571c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l266.286 266.286c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 530.286c0 4.571-2.286 9.714-5.714 13.143l-28.571 28.571c-3.429 3.429-8 5.714-13.143 5.714-4.571 0-9.714-2.286-13.143-5.714l-224.571-224.571-224.571 224.571c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-28.571-28.571c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l266.286-266.286c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l266.286 266.286c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
        </svg>
      </div>
      <div className="maintenance-management-down">
        <svg
          viewBox="0 0 658.2857142857142 1024"
          className="maintenance-management-icon20"
        >
          <path d="M614.286 493.714c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 274.286c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
        </svg>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default MaintenanceManagement
