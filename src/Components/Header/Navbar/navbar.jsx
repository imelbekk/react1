import React, {Component} from "react";
import './navbar.scss'
import logo from '../../../images/logo.svg'

export default class Navbar extends Component{
    state={
        places:[
            {name: 'Home', link:'#'},
            {name: 'Location', link:'#'},
            {name: 'Blog', link:'#'},
            {name: 'About', link:'#'},
            {name: 'Contact', link:'#'}
        ]
    }
    render(){
        const {places} = this.state
        return(
            <nav>
                <img src={logo} alt="" className="img"/>

                <ul>
                    {
                        places.map((item,index)=>{
                            return <li>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        })
                    }
                </ul>

                <button className='nav_btn'>Booking now</button>
            </nav>
        )
    }
}