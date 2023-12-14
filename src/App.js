import React, {Component} from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer"
import Main from "./Components/Main/main"
import Section from "./Components/Section/section"
import Box from "./Components/Box/box";
export default class App extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Main/>
            <Box/>
            <Section/>
            <Footer/>
            </div>
        )
    }
}