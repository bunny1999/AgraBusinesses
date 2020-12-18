import React from 'react'
import '../App.css';
import { Row,Col } from 'reactstrap';

export const BigContainer= (props)=>{
    return (
        <Row className="container-flex full-height">
            {props.children}
        </Row>
    )
}

export const TextContainer= (props)=>{
    return (
        <Col className="container-equal-division container-flex vert-center horz-center flex-column">
            {props.children}
        </Col>
    )
}

export const PictureContainer= (props)=>{
    return (
        <Col className="container-equal-division container-flex vert-center horz-center">
            {props.children}
        </Col>
    )
}
