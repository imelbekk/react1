import React, {Component} from "react";
import Navbar from "./Navbar/navbar";
import './header.scss'



export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <Navbar/>

                <div className="header_texts">
                    
                <h6 className="header_h6">Railtrips To Here, There And Everywhere!</h6>

                 <p className="header_p">We all wish to start our year the best way possible and also accorading to a common belief if you have a great strat to your.</p>

                 <button className="header_btn">Explore more</button>

                </div>
            </div>
        )
    }
}