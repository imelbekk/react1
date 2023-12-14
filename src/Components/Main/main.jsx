import React, {Component} from "react";
import './main.scss'
import turkey from '../../images/turkey.png'
import malaysia from '../../images/malaysia.png'
import korea from '../../images/korea.png'

export default class Main extends Component{
    render(){
        return(
            <main>

                <div className="main_texts">
                    <h6>Popular Location</h6>

                    <p>For every one of us, travel came first. We've spent years living as nomands, pioneers, and  voyagers- from island hopping in the</p>
                </div>

                <div className="main_big_box">

                    <div className="main_box"> 

                    <img src={turkey} alt="picture"/>

                    <div className="m_texts">
                        
                    <h6>Istanbul, Turkey</h6>

                    <p>Istanbul is a major city in Turkey that straddles Europe.</p>
                    
                    </div>

                    </div>

                    <div className="main_box2"> 

                    <img src={malaysia} alt="picture"/>

                    <div className="m_texts">
                        
                    <h6>Kuala Lumpur, Malaysia</h6>

                    <p>A 272-step long trek leads you to this century</p>

                    </div>

                    </div>

                    <div className="main_box"> 

                    <img src={korea} alt="picture"/>

                    <div className="m_texts">
                        
                    <h6>Seoul, South Korea</h6>

                    <p>South Korea officailly th Respublic of Korea is a country in East Asia.</p>

                    </div>

                    </div>
                    
                </div>

            </main>
        )
    }
}