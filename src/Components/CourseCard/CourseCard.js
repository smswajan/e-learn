import React from "react";

const CourseCard = (props) => {
    const courseInfo = props.courseInfo;

    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
            <div className="course-item bg-white">
                <img
                    style={{ height: "220px", width: "100%" }}
                    src={courseInfo.img}
                    className="img-fluid"
                    alt="..."
                />
                <div className="course-content">
                    <h3 className="mb-0">
                        <a href="#">{courseInfo.name} </a>
                    </h3>
                    <p>
                        <>Instructor: {courseInfo.instructor.name} </>
                    </p>
                    <p>{courseInfo.description}</p>

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
