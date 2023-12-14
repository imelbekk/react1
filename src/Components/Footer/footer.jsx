import React, {Component} from "react";
import './footer.scss'
import logos from '../../images/social-img.svg'

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="first_footer">
                   <h6>Trevland</h6>
                   <p>Contact us</p>
                   <span>@shovasatkhira88.com</span>
                   <img src={logos} alt="logo" />
                </div>
                <div className="second_footer">
                    <p>Services</p>
                    <p>About</p>
                    <p>Our story</p>
                    <p>Benefits</p>
                    <p>Branding</p>
                </div>
                <div className="second_footer">
                    <p>Legal</p>
                    <p>Terms & Conditions</p>
                    <p>Privecy Pilicy</p>
                    <p>Terms of use</p>
                </div>
                <div className="three_footer">
                    <h6>SUBSCRIBE NOW</h6>
                    <div className="buttons">
                        <input type="email" placeholder="Email"/>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}