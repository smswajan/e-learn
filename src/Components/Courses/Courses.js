import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import { Container, Row, Col, Modal, Button, Toast } from "react-bootstrap";
import "./Courses.css";
import courseData from "../../Data";
import { useState } from "react";

const Courses = () => {
    const courses = courseData;
    const [cart, setCart] = useState([]);
    // Modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Toast
    const [showToast, setShowToast] = useState(false);
    const total = cart.reduce((total, course) => total + course.price, 0);
    const removeDuplicates = (data) => {
        return [...new Set(data)];
    };
    const enrollClickHandler = (course) => {
        if (cart.includes(course)) {
            setShowToast(true);
        }
        const newCart = [...cart, course];
        setCart([...new Set(newCart)]);
        console.log(cart);
    };
    const confirmOrder = () => {
        setCart([]);
        handleShow();
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
                        <div className="div text-center mt-5">
                            {cart.length > 0 ? (
                                <button
                                    onClick={confirmOrder}
                                    className="btn btn-success"
                                >
                                    Confirm Order
                                </button>
                            ) : (
                                <button className="btn btn-secondary" disabled>
                                    Confirm Order
                                </button>
                            )}
                        </div>
                        <Row className="mt-5">
                            <Col>
                                <Toast
                                    onClose={() => setShowToast(false)}
                                    show={showToast}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header>
                                        <strong className="mr-auto text-dark">
                                            Sorry from LEARN HERO
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        You have already added this course to
                                        cart.
                                    </Toast.Body>
                                </Toast>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* Confirmation modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hi there!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I'm really very sorry for the inconvenience. This site is
                    for a demo testing purpose. That's why no course is
                    available now. <br /> <br /> But{" "}
                    <strong>thank you so much</strong> for being here.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

const CartItem = (props) => {
    const item = props.course;
    console.log("courses", item);
    return (
        <Row
            style={{ borderBottom: "1px solid lightgray" }}
            className="py-3 no-gutters"
        >
            <div
                style={{ borderRadius: "4px" }}
                className="d-flex align-items-center py-3 bg-white"
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
            </div>
        </Row>
    );
};

export default Courses;
