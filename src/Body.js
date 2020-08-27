import React, { useState } from "react";
import "./Body.css";
import User from "./user.svg";

export default function Body() {
   const overAllProgress = 70;
   const CourseCompletion = 47;
   const [inHover, setHover] = useState(false);
   const [inHover2, setHover2] = useState(false);
   const [inHover3, setHover3] = useState(false);
   const [inHover4, setHover4] = useState(false);

   return (
      <>
         <div className="body_div">
            <div className="sub_div">
               <h2 className="Hi">Hi DeSaint, your analytics are set.</h2>
               <div className="analytics_div">
                  <p className="analytics_p">
                     Over-all Progress
                     <p className="analytics_p2">{`${overAllProgress}`}%</p>
                  </p>

                  <div className="progress_container1">
                     <div
                        className={
                           overAllProgress > 0 && overAllProgress <= 30
                              ? "progressIndicator_red"
                              : overAllProgress > 30 && overAllProgress <= 69
                              ? "progressIndicator_yellow"
                              : overAllProgress > 69 && overAllProgress <= 100
                              ? "progressIndicator_green"
                              : null
                        }
                        style={{
                           width: `${overAllProgress}%`,
                           height: "10px",
                           borderRadius: "10px",
                        }}
                     ></div>
                  </div>
               </div>
               <div className="course_div">
                  <p className="analytics_p">
                     Course Completion
                     <p className="analytics_p2">{`${CourseCompletion}`}%</p>
                  </p>
                  <div className="progress_container2">
                     <div
                        className={
                           CourseCompletion > 0 && CourseCompletion <= 30
                              ? "progressIndicator_red"
                              : CourseCompletion > 30 && CourseCompletion <= 60
                              ? "progressIndicator_yellow"
                              : CourseCompletion > 60 && CourseCompletion <= 100
                              ? "progressIndicator_green"
                              : null
                        }
                        style={{
                           width: `${CourseCompletion}%`,
                           height: "10px",
                           borderRadius: "10px",
                        }}
                     ></div>
                  </div>
               </div>
            </div>
            <div className="body_table">
               <div className="table_sub">
                  <p className="body_">NAME</p>
                  <p className="body_">COURSE</p>
               </div>
               <div
                  className="table_sub"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
               >
                  {inHover && (
                     <div className="hover_main">
                        <div className="border"></div>
                        <div className="hover_sub">
                           <img className="hover_img" src={User} alt="User" />
                           <p style={{ marginRight: "60px" }}>Peter McMan</p>
                           <p style={{ marginRight: "60px" }}>HTML & CSS</p>
                        </div>
                     </div>
                  )}
                  <p>Peter McMan</p>
                  <p>HTML & CSS</p>
               </div>
               <div
                  className="table_sub"
                  onMouseEnter={() => setHover2(true)}
                  onMouseLeave={() => setHover2(false)}
               >
                  {inHover2 && (
                     <div className="hover_main">
                        <div className="border"></div>
                        <div className="hover_sub">
                           <img className="hover_img" src={User} alt="User" />
                           <p style={{ marginRight: "60px" }}>Jane Doe</p>
                           <p style={{ marginRight: "60px" }}>Photoshop</p>
                        </div>
                     </div>
                  )}

                  <p>Jane Doe</p>
                  <p>Photoshop</p>
               </div>
               <div
                  className="table_sub"
                  onMouseEnter={() => setHover3(true)}
                  onMouseLeave={() => setHover3(false)}
               >
                  {inHover3 && (
                     <div className="hover_main">
                        <div className="border"></div>
                        <div className="hover_sub">
                           <img className="hover_img" src={User} alt="User" />
                           <p style={{ marginRight: "60px" }}>Derrick Lin</p>
                           <p style={{ marginRight: "60px" }}>JavaScript</p>
                        </div>
                     </div>
                  )}
                  <p>Derrick Lin</p>
                  <p>JavaScript</p>
               </div>
               <div
                  className="table_sub"
                  onMouseEnter={() => setHover4(true)}
                  onMouseLeave={() => setHover4(false)}
               >
                  {inHover4 && (
                     <div className="hover_main">
                        <div className="border"></div>
                        <div className="hover_sub">
                           <img className="hover_img" src={User} alt="User" />
                           <p style={{ marginRight: "40px" }}>
                              Joseph Peterson
                           </p>
                           <p style={{ marginRight: "40px" }}>FreeLancing</p>
                        </div>
                     </div>
                  )}
                  <p>Joseph Peterson</p>
                  <p>FreeLancing</p>
               </div>
            </div>
         </div>
      </>
   );
}
