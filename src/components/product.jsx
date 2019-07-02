import React, { Component } from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux';
import {add} from '../redux/actions/countAction'

class Product extends Component {

    constructor(props)
    {
        super(props)
    }


    trigger(e){
        e.preventDefault();
        this.props.dispatch(add(1))
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title>محصول یک</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">درباره محصول </Card.Subtitle>
                                <Card.Text>
                                    اطلاعاتی در مورد محصول
                                </Card.Text>
                                <Card.Link href="#" onClick={(e)=>{this.trigger(e)}}>افزایش</Card.Link> --
                                <Card.Link href="#">کاهش</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title>محصول اول</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">درباره محصول </Card.Subtitle>
                                <Card.Text>
                                    اطلاعاتی در مورد محصول
                                </Card.Text>
                                <Card.Link href="#">افزایش</Card.Link> --
                                <Card.Link href="#">کاهش</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title>محصول اول</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">درباره محصول </Card.Subtitle>
                                <Card.Text>
                                    اطلاعاتی در مورد محصول
                                </Card.Text>
                                <Card.Link href="#">افزایش</Card.Link> --
                                <Card.Link href="#">کاهش</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(state=>{
    return state;
})(Product)