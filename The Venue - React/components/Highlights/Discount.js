import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utilities/MyButton'

class Discount extends Component {

    state = {
        discountStart: 0, 
        discountEnd: 20
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },40)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                        onReveal={()=> this.percentage()}
                        left
                    >
                    <div className="discount_percentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before April 20th</h3>    
                        <p>Eget dolor morbi non arcu risus quis varius. Risus feugiat in ante metus dictum at tempor commodo. Dui id ornare arcu odio ut sem nulla pharetra diam. Sed velit dignissim sodales ut eu. Sapien faucibus et molestie ac. Blandit cursus risus at ultrices mi tempus. Platea dictumst vestibulum rhoncus est pellentesque. </p>                  

                        <MyButton 
                            text="Purchase tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        />

                    </div>

                    </Slide>
                    

                </div>               
            </div>
        );
    }
}

export default Discount;