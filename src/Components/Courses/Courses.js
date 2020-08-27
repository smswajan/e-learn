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
                        <h2 className="text-center mt-5">Pricing</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Courses;
