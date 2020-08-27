import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Courses.css";
import courseData from "../../Data";
import { useState } from "react";

const Courses = () => {
    const courses = courseData;
    const [cart, setCart] = useState([]);
    const total = cart.reduce((total, course) => total + course.price, 0);
    const removeDuplicates = (data) => {
        return [...new Set(data)];
    };
    const enrollClickHandler = (course) => {
        console.log("enroll clicked", course);
        const newCart = [...cart, course];
        setCart([...new Set(newCart)]);
        console.log(cart);
    };

    return (
        <section className="courses mt-5">
            <Container>
                <Row>
                    <Col md={9}>
                        <Row>
                            {courses.map((course) => (
                                <CourseCard
                                    enrollHandler={enrollClickHandler}
                                    courseInfo={course}
                                />
                            ))}
                        </Row>
                    </Col>
                    <Col className="sticky-top" md={3}>
                        <div className="d-flex justify-content-between">
                            <p>Total Courses: </p>
                            <h4>{cart.length} </h4>
                        </div>
                        <div
                            style={{ borderBottom: "1px solid lightgray" }}
                            className="d-flex justify-content-between"
                        >
                            <p>Total Price: </p>
                            <h4>$ {total} </h4>
                        </div>

                        {cart.length > 0 &&
                            cart.map((course) => <CartItem course={course} />)}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const CartItem = (props) => {
    const item = props.course;
    console.log("courses", item);
    return (
        <Row
            style={{ borderBottom: "1px solid lightgray" }}
            className="py-3 d-flex align-items-center no-gutters"
        >
            <div className="col-4">
                <img src={item.img} alt="" className="img-fluid" />{" "}
            </div>
            <div className="col-8 pl-3">
                <h6 className="mb-0">{item.name}</h6>
                <p className="mb-0">
                    by {item.instructor.name} <br />
                    <strong>${item.price} </strong>
                </p>
            </div>
        </Row>
    );
};

export default Courses;
