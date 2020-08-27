import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Courses.css";
import courseData from "../../Data";

const Courses = () => {
    const courses = courseData;

    return (
        <section className="courses mt-5">
            <Container>
                <Row>
                    <Col md={9}>
                        <Row>
                            {courses.map((course) => (
                                <CourseCard courseInfo={course} />
                            ))}
                        </Row>
                    </Col>
                    <Col className="sticky-top" md={3}>
                        <h2 className="text-center">Pricing</h2>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const CartItem = () => {
    const item = courseData[0];
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
