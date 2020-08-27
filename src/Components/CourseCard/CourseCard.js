import React from "react";

const CourseCard = (props) => {
    const courseInfo = props.courseInfo;

    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
            <div className="course-item">
                <img src={courseInfo.img} className="img-fluid" alt="..." />
                <div className="course-content">
                    <h3>
                        <a href="#">{courseInfo.name} </a>
                    </h3>
                    <p>{courseInfo.description}</p>
                    {/* <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                            <img
                                src={courseInfo.instructor.img}
                                className="img-fluid"
                                alt=""
                            />
                            <span>{courseInfo.instructor.name} </span>
                        </div>
                    </div> */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="price">Price: ${courseInfo.price}</p>
                        <button
                            onClick={() => props.enrollHandler(courseInfo)}
                            className="btn btn-success"
                        >
                            Enroll Now
                        </button>
                        {/* <h4>{courseInfo.category} </h4> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
