import React from 'react';
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
    <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
            I have recently developed three innovative projects showcasing my expertise in React.js and Java.
            The Language Translator App, built with React.js, enables real-time translation across multiple
            languages using API integration, enhancing global communication. The Employee Management
            System, developed in Java, streamlines employee data handling with functionalities like CRUD
            operations, role management, and performance tracking. The Do It App, also created in Java, is a
            user-friendly To-Do application that allows task creation, categorization, and reminders for better
            productivity. These projects highlight my ability to build efficient, scalable, and user-centric
            applications in both frontend and backend development. 🚀
        </p>

        <div className="row" id="ads">
            <Spin>
            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Front - End</span>
                        <img 
                        src="https://cdn6.aptoide.com/imgs/3/5/d/35d1cee55157149c57baaf9b4bd2bdef_fgraphic.png"
                        alt="project1"
                        />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">HTML</span>
                        <span className="card-detail-badge">CSS</span>
                        <span className="card-detail-badge">React JS</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h6 className="text-uppercase">
                            Language Translator App
                            </h6>
                        </div>
                        <a 
                        className="ad-btn"
                        href="https://github.com/Vishal586/CodeClause./tree/main/Language%20Translator%20App"
                        >
                        View
                        </a>
                    </div>
                </div>
            </div>
        

            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Backend</span>
                        <img
                        src="https://pepperyourcontent.com/wp-content/uploads/2022/07/pasted-image-0-3.png"
                        alt="project2"
                        />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Java</span>
                        <span className="card-detail-badge">MySQL</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">Employee Management System</h5>
                        </div>
                        <a
                        className="ad-btn"
                        href="https://github.com/Vishal586/CodeClause/tree/main/Employee%20Management%20System"
                        >
                        View
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card rounded">
                    <div className="card-image">
                        <span className="card-notify-badge">Backend</span>
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5YyarlC_yQeAMDxv75nM75C4ASaYXxAarg&s"
                        alt="project3"
                        />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Java</span>
                        <span className="card-detail-badge">Spring Framework</span>
                        <span className="card-detail-badge">MySQL</span>
                    </div>
                    <div className="card-body text-center">
                        <div className="ad-title m-auto">
                            <h5 className="text-uppercase">Do It App</h5>
                        </div>
                        <a className="ad-btn" href="https://github.com/Vishal586/CodeClause/tree/main/DoIt/app">
                        View
                        </a>
                    </div>
                </div>
            </div>
            </Spin>
        </div>
    </div>
    </>
  )
}

export default Projects