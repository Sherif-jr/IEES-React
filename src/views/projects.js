import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>Projects - IEES</title>
        <meta property="og:title" content="Projects - IEES" />
      </Helmet>
      <Header></Header>
      <div className="projects-hero">
        <div className="projects-container01">
          <p className="projects-text">Your vision will become a reality </p>
        </div>
      </div>
      <div id="projects-section" className="projects-projects-section">
        <div className="projects-container02">
          <h2 className="projects-text01 HeadingOne animate-gradient">
            <span>PROJECTS</span>
            <br></br>
          </h2>
          <div className="projects-container03">
            <div className="projects-card animate__fadeInUp animate__animated">
              <h1 className="projects-text04">UNIVERSITIES OF CANADA</h1>
              <h1 className="projects-text05">                    </h1>
              <div className="projects-container04">
                <div className="projects-container05">
                  <div className="projects-container06">
                    <svg viewBox="0 0 1024 1024" className="projects-icon">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text06">
                      MEP design, Execution, operating and management for
                      building &apos;c&apos;.
                    </p>
                  </div>
                </div>
                <div className="projects-container07">
                  <div className="projects-container08">
                    <svg viewBox="0 0 1024 1024" className="projects-icon02">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text07">
                      Electrical network for the university.
                    </p>
                  </div>
                </div>
              </div>
              <div className="projects-container09">
                <div className="projects-container10">
                  <button
                    id="button1"
                    type="button"
                    className="projects-button details-button"
                  >
                    Show DETAILS
                  </button>
                </div>
              </div>
            </div>
            <div
              id="project-details1"
              className="projects-project-details animate__faster animate__fadeInDown animate__animated custom-hide"
            >
              <div className="projects-container11">
                <div className="projects-details">
                  <div className="projects-code-embed">
                    <DangerousHTML
                      html={`<style>
  .accordion-button:not(.collapsed){
    color: #82bb27;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
  @media(max-width: 991px) {
    .carousel-control-next-icon, .carousel-control-prev-icon{
      width: 1rem;
      height: 1rem;
    }
    .carousel-indicators{
      margin-bottom: .3rem;
    }
    .carousel-indicators [data-bs-target]{
      width: 15px;
      height: 2px;
    }
  }
</style>
<div class="accordion" id="accordion-p1">
  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne-p1">
      <button
        class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne-p1"
        aria-expanded="true"
        aria-controls="collapseOne-p1"
      >
        Description
      </button>
    </h2>
    <div
      id="collapseOne-p1"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne-p1"
      data-bs-parent="#accordion-p1"
    >
      <div class="accordion-body py-4 px-5" style="color: black;">
        IEES participates in managing the installation and commissioning
        projects of the MEP disciplines.
      </div>
    </div>
  </div>

  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo-p1">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo-p1"
        aria-expanded="false"
        aria-controls="collapseTwo-p1"
      >
        Details
      </button>
    </h2>
    <div
      id="collapseTwo-p1"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo-p1"
      data-bs-parent="accordion-p1"
    >
      <div class="accordion-body py-4 px-5">
        <!-- List 1 View start-->
        <div class="flex justify-center">
          <ul class="rounded-lg text-gray-900 w-full">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              Budget: 55M EGP
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              Duration: 1 year
            </li>
            <li class="px-6 py-2 w-full rounded-b-lg">
              Services Provided:
              <!-- List 2 View start-->
              <div class="flex justify-center">
                <ul class="rounded-lg text-gray-900 w-full list-disc">
                  <li
                    class="px-6 py-2 w-full rounded-t-lg"
                    style="list-style-position: inside;"
                  >
                    Managing the installation and commissioning projects of the
                    MEP disciplines that include:
                    <!-- List 3 View start-->
                    <div class="flex justify-center">
                      <ul class="rounded-lg text-gray-900 w-full">
                        <li class="px-6 py-2 w-full rounded-t-lg">
                          1. Electrical distribution systems.
                        </li>
                        <li class="px-6 py-2 w-full">2. Lighting systems.</li>
                        <li class="px-6 py-2 w-full">
                          3. Light current and Smart systems.
                        </li>
                        <li class="px-6 py-2 w-full">
                          4. Building Management Systems.
                        </li>
                        <li class="px-6 py-2 w-full">5. Fire Fighting.</li>
                        <li class="px-6 py-2 w-full">6. Fire Alarm.</li>
                        <li class="px-6 py-2 w-full">7. HVAC system.</li>
                        <li class="px-6 py-2 w-full rounded-b-lg">
                          8. Plumbing and pumping systems.
                        </li>
                      </ul>
                    </div>
                    <!-- List 3 View end-->
                  </li>
                </ul>
              </div>
              <!-- List 2 View end-->
            </li>
          </ul>
        </div>
        <!-- List 2 View end-->
      </div>
    </div>
  </div>

  <div class="accordion-item border border-gray-200">
    <h4 class="accordion-header mb-0" id="headingThree-p1">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree-p1"
        aria-expanded="false"
        aria-controls="collapseThree-p1"
      >
        Gallery
      </button>
    </h4>
    <div
      id="collapseThree-p1"
      class="accordion-collapse collapse overflow-hidden"
      aria-labelledby="headingThree-p1"
      data-bs-parent="accordion-p1"
    >
      <div class="accordion-body">
        <div style="margin: auto;">
          <!-- Carousel -->
          <div
            id="carouselExampleIndicators"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div
              class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC02_zavocq.jpg"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671216386/IEES/Img/projects/1.UofCanada/UoC11-2_c156bv.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186830/IEES/Img/projects/1.UofCanada/UoC05_tkwqcq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC03_qjxbmq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186834/IEES/Img/projects/1.UofCanada/UoC07_sq8awb.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- end carousel -->
        </div>
      </div>
    </div>
  </div>
</div>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-container12">
            <div className="projects-card1 animate__fadeInUp animate__animated">
              <h1 className="projects-text08">
                Egyptian Language School, Shorouk Project
              </h1>
              <p className="projects-text09">
                EGYGAB for Education Development
              </p>
              <div className="projects-container13">
                <div className="projects-container14">
                  <div className="projects-container15">
                    <svg viewBox="0 0 1024 1024" className="projects-icon04">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text10">
                      MEP design, Execution, operating.
                    </p>
                  </div>
                </div>
                <div className="projects-container16">
                  <div className="projects-container17">
                    <svg viewBox="0 0 1024 1024" className="projects-icon06">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text11">Project Management</p>
                  </div>
                </div>
              </div>
              <div className="projects-container18">
                <div className="projects-container19">
                  <button
                    id="button2"
                    type="button"
                    className="projects-button1 details-button"
                  >
                    Show DETAILS
                  </button>
                </div>
              </div>
            </div>
            <div
              id="project-details2"
              className="projects-project-details1 animate__faster animate__fadeInDown animate__animated custom-hide"
            >
              <div className="projects-container20">
                <div className="projects-details1">
                  <div className="projects-div">
                    <DangerousHTML
                      html={`<style>
  .accordion-button:not(.collapsed){
    color: #82bb27;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
  @media(max-width: 991px) {
    .carousel-control-next-icon, .carousel-control-prev-icon{
      width: 1rem;
      height: 1rem;
    }
    .carousel-indicators{
      margin-bottom: .3rem;
    }
    .carousel-indicators [data-bs-target]{
      width: 15px;
      height: 2px;
    }
  }
</style>
<div class="accordion" id="accordion-p2">
  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne-p2">
      <button
        class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne-p2"
        aria-expanded="true"
        aria-controls="collapseOne-p2"
      >
        Description
      </button>
    </h2>
    <div
      id="collapseOne-p2"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne-p2"
      data-bs-parent="#accordion-p2"
    >
      <div class="accordion-body py-4 px-5" style="color: black;">
        IEES is Providing full project management services for MEP design and
        construction for a Compound of Four international Schools starting from
        main utilities to the final touches of smart projectors to guarantee an
        effective educational process.
      </div>
    </div>
  </div>
  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingTwo-p2">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo-p2"
        aria-expanded="false"
        aria-controls="collapseTwo-p2"
      >
        Details
      </button>
    </h2>
    <div
      id="collapseTwo-p2"
      class="accordion-collapse collapse"
      aria-labelledby="headingTwo-p2"
      data-bs-parent="#accordion-p2"
    >
      <div class="accordion-body py-4 px-5">
        <!-- List 1 View start-->
        <div class="flex justify-center">
          <ul class="rounded-lg text-gray-900 w-full">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              Budget: 100M EGP
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              Duration: 2 year
            </li>
          </ul>
        </div>
        <!-- List 2 View end-->
      </div>
    </div>
  </div>
  <div class="accordion-item border border-gray-200">
    <h4 class="accordion-header mb-0" id="headingThree">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Gallery
      </button>
    </h4>
    <div
      id="collapseThree"
      class="accordion-collapse collapse overflow-hidden"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <div style="margin: auto;">
          <!-- Carousel -->
          <div
            id="carouselExampleIndicators"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC02_zavocq.jpg"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671216386/IEES/Img/projects/1.UofCanada/UoC11-2_c156bv.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186830/IEES/Img/projects/1.UofCanada/UoC05_tkwqcq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC03_qjxbmq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186834/IEES/Img/projects/1.UofCanada/UoC07_sq8awb.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- end carousel -->
        </div>
      </div>
    </div>
  </div>
</div>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-container21">
            <div className="projects-card2 animate__fadeInUp animate__animated">
              <h1 className="projects-text12">
                Egyptian Language School New Cairo
              </h1>
              <h1 className="projects-text13">
                Katameya Company for developing Education
              </h1>
              <div className="projects-container22">
                <div className="projects-container23">
                  <div className="projects-container24">
                    <svg viewBox="0 0 1024 1024" className="projects-icon08">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text14">Maintenance Management</p>
                  </div>
                </div>
                <div className="projects-container25">
                  <div className="projects-container26">
                    <svg viewBox="0 0 1024 1024" className="projects-icon10">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text15">Maintenance Supervision</p>
                  </div>
                </div>
              </div>
              <div className="projects-container27">
                <div className="projects-container28">
                  <button
                    id="button3"
                    type="button"
                    className="projects-button2 details-button"
                  >
                    Show DETAILS
                  </button>
                </div>
              </div>
            </div>
            <div
              id="project-details3"
              className="projects-project-details2 animate__faster animate__fadeInDown animate__animated custom-hide"
            >
              <div className="projects-container29">
                <div className="projects-details2">
                  <div className="projects-div1">
                    <DangerousHTML
                      html={`<style>
  .accordion-button:not(.collapsed){
    color: #82bb27;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
  @media(max-width: 991px) {
    .carousel-control-next-icon, .carousel-control-prev-icon{
      width: 1rem;
      height: 1rem;
    }
    .carousel-indicators{
      margin-bottom: .3rem;
    }
    .carousel-indicators [data-bs-target]{
      width: 15px;
      height: 2px;
    }
  }
</style>
<div class="accordion" id="accordion-p3">
  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne-p3">
      <button
        class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne-p3"
        aria-expanded="true"
        aria-controls="collapseOne-p3"
      >
        Description
      </button>
    </h2>
    <div
      id="collapseOne-p3"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne-p3"
      data-bs-parent="#accordion-p3"
    >
      <div class="accordion-body py-4 px-5" style="color: black;">
        IEES provides maintenance management services to support clients'
        maintenance teams to improve their performance with the best
        optimization of time and spare parts in addition to supervision of
        maintenance activities.
      </div>
    </div>
  </div>
  <div class="accordion-item border border-gray-200">
    <h4 class="accordion-header mb-0" id="headingThree-p3">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree-p3"
        aria-expanded="false"
        aria-controls="collapseThree-p3"
      >
        Gallery
      </button>
    </h4>
    <div
      id="collapseThree-p3"
      class="accordion-collapse collapse overflow-hidden"
      aria-labelledby="headingThree-p3"
      data-bs-parent="#accordion-p3"
    >
      <div class="accordion-body">
        <div style="margin: auto;">
          <!-- Carousel -->
          <div
            id="carouselExampleIndicators"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC02_zavocq.jpg"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671216386/IEES/Img/projects/1.UofCanada/UoC11-2_c156bv.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186830/IEES/Img/projects/1.UofCanada/UoC05_tkwqcq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC03_qjxbmq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186834/IEES/Img/projects/1.UofCanada/UoC07_sq8awb.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- end carousel -->
        </div>
      </div>
    </div>
  </div>
</div>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-container30">
            <div className="projects-card3 animate__fadeInUp animate__animated">
              <h1 className="projects-text16">UNIVERSITIES OF CANADA</h1>
              <h1 className="projects-text17">
                6th October Company for developing Education
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <div className="projects-container31">
                <div className="projects-container32">
                  <div className="projects-container33">
                    <svg viewBox="0 0 1024 1024" className="projects-icon12">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text18">
                      MEP design, Execution, operating and management for
                      building &apos;c&apos;.
                    </p>
                  </div>
                </div>
                <div className="projects-container34">
                  <div className="projects-container35">
                    <svg viewBox="0 0 1024 1024" className="projects-icon14">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text19">
                      Electrical network for the university.
                    </p>
                  </div>
                </div>
              </div>
              <div className="projects-container36">
                <div className="projects-container37">
                  <button
                    id="button4"
                    type="button"
                    className="projects-button3 details-button"
                  >
                    Show DETAILS
                  </button>
                </div>
              </div>
            </div>
            <div
              id="project-details4"
              className="projects-project-details3 animate__faster animate__fadeInDown animate__animated custom-hide"
            >
              <div className="projects-container38">
                <div className="projects-details3">
                  <div className="projects-div2">
                    <DangerousHTML
                      html={`<style>
  .accordion-button:not(.collapsed){
    color: #82bb27;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
  @media(max-width: 991px) {
    .carousel-control-next-icon, .carousel-control-prev-icon{
      width: 1rem;
      height: 1rem;
    }
    .carousel-indicators{
      margin-bottom: .3rem;
    }
    .carousel-indicators [data-bs-target]{
      width: 15px;
      height: 2px;
    }
  }
</style>
<div class="accordion" id="accordion-p4">
  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne-p4">
      <button
        class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne-p4"
        aria-expanded="true"
        aria-controls="collapseOne-p4"
      >
        Description
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordion-p4"
    >
      <div class="accordion-body py-4 px-5" style="color: black;">
        IEES participates in managing the installation and commissioning
        projects of the MEP disciplines.
      </div>
    </div>
  </div>

  <div class="accordion-item border border-gray-200">
    <h4 class="accordion-header mb-0" id="headingThree-p4">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree-p4"
        aria-expanded="false"
        aria-controls="collapseThree-p4"
      >
        Gallery
      </button>
    </h4>
    <div
      id="collapseThree-p4"
      class="accordion-collapse collapse overflow-hidden"
      aria-labelledby="headingThree-p4"
      data-bs-parent="#accordion-p4"
    >
      <div class="accordion-body">
        <div style="margin: auto;">
          <!-- Carousel -->
          <div
            id="carouselExampleIndicators"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div
              class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC02_zavocq.jpg"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671216386/IEES/Img/projects/1.UofCanada/UoC11-2_c156bv.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186830/IEES/Img/projects/1.UofCanada/UoC05_tkwqcq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC03_qjxbmq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186834/IEES/Img/projects/1.UofCanada/UoC07_sq8awb.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- end carousel -->
        </div>
      </div>
    </div>
  </div>
</div>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-container39">
            <div className="projects-card4 animate__fadeInUp animate__animated">
              <h1 className="projects-text20">UNIVERSITIES OF CANADA</h1>
              <h1 className="projects-text21">
                Alexandria Company for developing Education
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h1>
              <div className="projects-container40">
                <div className="projects-container41">
                  <div className="projects-container42">
                    <svg viewBox="0 0 1024 1024" className="projects-icon16">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text22">
                      MEP design, Execution, operating and management for
                      building &apos;c&apos;.
                    </p>
                  </div>
                </div>
                <div className="projects-container43">
                  <div className="projects-container44">
                    <svg viewBox="0 0 1024 1024" className="projects-icon18">
                      <path d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"></path>
                    </svg>
                    <p className="projects-text23">
                      Electrical network for the university.
                    </p>
                  </div>
                </div>
              </div>
              <div className="projects-container45">
                <div className="projects-container46">
                  <button
                    id="button5"
                    type="button"
                    className="projects-button4 details-button"
                  >
                    Show DETAILS
                  </button>
                </div>
              </div>
            </div>
            <div
              id="project-details5"
              className="projects-project-details4 animate__faster animate__fadeInDown animate__animated custom-hide"
            >
              <div className="projects-container47">
                <div className="projects-details4">
                  <div className="projects-div3">
                    <DangerousHTML
                      html={`<style>
  .accordion-button:not(.collapsed){
    color: #82bb27;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 #e5e7eb;
  }
  @media(max-width: 991px) {
    .carousel-control-next-icon, .carousel-control-prev-icon{
      width: 1rem;
      height: 1rem;
    }
    .carousel-indicators{
      margin-bottom: .3rem;
    }
    .carousel-indicators [data-bs-target]{
      width: 15px;
      height: 2px;
    }
  }
</style>
<div class="accordion" id="accordion-p5">
  <div class="accordion-item border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingOne-p5">
      <button
        class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne-p5"
        aria-expanded="true"
        aria-controls="collapseOne-p5"
      >
        Description
      </button>
    </h2>
    <div
      id="collapseOne-p5"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne-p5"
      data-bs-parent="#aaccordion-p4"
    >
      <div class="accordion-body py-4 px-5" style="color: black;">
        IEES provides maintenance management services to support clients'
        maintenance teams to improve their performance with the best
        optimization of time and spare parts in addition to supervision of
        maintenance activities.
      </div>
    </div>
  </div>
  <div class="accordion-item border border-gray-200">
    <h4 class="accordion-header mb-0" id="headingThree-p5">
      <button
        class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-none transition focus:outline-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree-p5"
        aria-expanded="false"
        aria-controls="collapseThree-p5"
      >
        Gallery
      </button>
    </h4>
    <div
      id="collapseThree-p5"
      class="accordion-collapse collapse overflow-hidden"
      aria-labelledby="headingThree-p5"
      data-bs-parent="#accordion-p4"
    >
      <div class="accordion-body">
        <div style="margin: auto;">
          <!-- Carousel -->
          <div
            id="carouselExampleIndicators"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg"
                  class="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC02_zavocq.jpg"
                  class="block w-full"
                  alt="Camera"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671216386/IEES/Img/projects/1.UofCanada/UoC11-2_c156bv.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186830/IEES/Img/projects/1.UofCanada/UoC05_tkwqcq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186827/IEES/Img/projects/1.UofCanada/UoC03_qjxbmq.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
              <div class="carousel-item float-left w-full">
                <img
                  src="https://res.cloudinary.com/dhdonsil5/image/upload/v1671186834/IEES/Img/projects/1.UofCanada/UoC07_sq8awb.jpg"
                  class="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- end carousel -->
        </div>
      </div>
    </div>
  </div>
</div>
`}
                    ></DangerousHTML>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Projects
