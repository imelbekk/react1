import React, {Component} from "react";
import './box.scss'
import usa from '../../images/img1.png'
import china from '../../images/img2.png'
import iran from '../../images/img3.png'
import bangladesh from '../../images/img4.png'
import japan from '../../images/img5.png'

export default class Box extends Component{
    render(){
        return(
            <div className='box'>
                <div className="box_text">
                    <h6>Special Offers</h6>

                    <p>With the New Year comes a refreshing sense of wenderlust, a longing in our souls to escape to warmer climates</p>
                </div>

                <div className="boxs">


                    <div className="m_box">
                    <img src={usa} alt="picture"/>

                        <h5 className='b_text1'>Statue of Liberty</h5>

                        <p className='b_text2'><span>New York </span> 4.8</p>

                        <p className='b_text3'>4 Day 5 Nigths</p>

                        <h6 className='b_text4'>$450 <span>/person</span></h6>
                    </div>

                    <div className="m_box">
                    <img src={china} alt="picture"/>

                        <h5 className='b_text1'>The Great Wall</h5>

                        <p className='b_text2'><span>China</span> 4.9</p>

                        <p className='b_text3'>7 Day 8 Nigths</p>

                        <h6 className='b_text4'>$850 <span>/person</span></h6>
                    </div>

                    <div className="m_box">
                    <img src={iran} alt="picture"/>

                        <h5 className='b_text1'>Dijin</h5>

                        <p className='b_text2'><span>Iran</span> 4.6</p>

                        <p className='b_text3'>5 Day 6 Nigths</p>

                        <h6 className='b_text4'>$550 <span>/person</span></h6>
                    </div>

                    <div className="m_box">
                    <img src={bangladesh} alt="picture"/>

                        <h5 className='b_text1'>Sajek Valley</h5>

                        <p className='b_text2'><span>Bangladesh </span> 4.7</p>

                        <p className='b_text3'>3 Day 4 Nigths</p>

                        <h6 className='b_text4'>$400 <span>/person</span></h6>
                    </div>

                    <div className="m_box">
                    <img src={japan} alt="picture"/>

                        <h5 className='b_text1'>Osaka Castle</h5>

                        <p className='b_text2'><span>Japan </span> 4.7</p>

                        <p className='b_text3'>4 Day 5 Nigths</p>

                        <h6 className='b_text4'>$700 <span>/person</span></h6>
                    </div>

                </div>

            </div>
        )
    }
}