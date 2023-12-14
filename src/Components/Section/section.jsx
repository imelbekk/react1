import React, {Component} from "react";
import './section.scss'
import park from '../../images/canada.png'
import hiroshima from '../../images/hiroshima.png'
import india from '../../images/india.png'
import pakistan from '../../images/pakistan.png'

export default class Section extends Component{
    render(){
        return(
            <div className="section">
                <div className="section_text">
                    <h6>From Blog & News</h6>

                    <p>Welcome to Community Conversations, a new interview series featuring Intepid travellrs, creatives and activists in our community.</p>
                </div>

                <div className="section_boxs">
                    <div className="left_s_box">
                        <img src={park} alt="picture" />
                        <div className="left_text">
                            <h6>Banff Nation Park</h6>

                            <p>Banff Nation Partk lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases  some of Canada's most beatiful scenery. Turquoiser-colored lakes, snow-capped peaks, and glaciers are all easily accessible. </p>

                            <h5>@thomasalva_adison</h5>
                        </div>
                    </div>

                    <div className="right_s_boxs">
                        <div className="right_s_box">
                            <img src={hiroshima} alt="picture"/>

                            <div className="s_text">
                                <h5>The Hiroshima Peace!</h5>
                                <p>It was formally opened to the public in August that year.</p>
                                <h6>@shova_bd88</h6>
                            </div>
                        </div>
                        <div className="right_s_box">
                            <img src={india} alt="picture"/>

                            <div className="s_text">
                                <h5>The Faithful Prayers!</h5>
                                <p>A major pilgrimage center for Hindus, the holy city.</p>
                                <h6>@adem/smith</h6>
                            </div>
                        </div>
                        <div className="right_s_box">
                            <img src={pakistan} alt="picture"/>

                            <div className="s_text">
                                <h5>Colorful Waters!</h5>
                                <p>Forest-driven water and energy cycles are poorly.</p>
                                <h6>@jhon7leew</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}