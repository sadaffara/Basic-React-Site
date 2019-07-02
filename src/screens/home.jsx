import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import NavBar from '../components/header/navBar';
import Product from '../components/product';


export default class Home extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <Product/>
            </div>
        )
    }

}