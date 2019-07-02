import React, { Component } from 'react'
import { Col, Row, Button, Nav, Navbar, Badge, FormControl, Container, DropdownButton, Dropdown } from 'react-bootstrap'
import './header.css'
import {connect} from 'react-redux'

class NavBar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            proCount: this.props.countReducer.count
        }
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({
            proCount: nextProps.countReducer.count
        })
    }

    render() {
        return (
            <Row>
                <Col lg={10}>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">صفحه نخست</Navbar.Brand>
                        <Nav style={{ marginRight: '50px' }}>
                            <Nav.Link href="#home">درباره ما</Nav.Link>
                            <Nav.Link href="#features">گالری</Nav.Link>
                            <Nav.Link href="#pricing">محصولات</Nav.Link>
                            <Nav.Link href="#pricing">گارانتی</Nav.Link>
                            <Nav.Link href="#pricing">دانلود</Nav.Link>
                            <Nav.Link href="#pricing">بانک مقالات</Nav.Link>
                            <Nav.Link href="#pricing">ارتباط با ما</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Col lg={2}>
                    <Button variant="primary">
                        تعداد : <Badge variant="light">{this.state.proCount}</Badge>
                    </Button>
                </Col>
            </Row>
        )
    }

}

export default connect(state=>{
    return state
})(NavBar)