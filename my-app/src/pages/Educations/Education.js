import React from 'react';
import { 
    VerticalTimeline,
    VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css";
import { MdSchool } from "react-icons/md";


const Education = () => {
  return (
    <>
    <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Education Details
        </h2>
        <hr />

        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">B.Tech ( CSE )</h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Bengal College of Engineering & Technology, Durgapur, West Bengal, IN
                </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
            >
            <h3 className="vertical-timeline-element-title">I.Sc.</h3>
            <h4 className="vertical-timeline-element-subtitle">
              M.S.Y. Inter College, Gaya, Bihar, IN
            </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
            >
            <h3 className="vertical-timeline-element-title">Secondary School</h3>
            <h4 className="vertical-timeline-element-subtitle">
                British English School, Gaya, Bihar, IN
            </h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    </>
  )
}

export default Education