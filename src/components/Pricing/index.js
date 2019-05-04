import React, { Component } from 'react';
import MyButton from '../Utilities/MyButton';
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Main Floor', 'VIP'],
    desc:['Egestas tellus rutrum tellus pellentesque eu tincidunt. Libero enim sed faucibus turpis in eu mi bibendum. Aliquam nulla facilisi cras fermentum odio eu.', 
        'Consequat id  dolor magna eget est porta pellentesque eu tincidunt nibh venenatis cras sed felis eget velit. Posuere morbi leo urna molestie at.', 
         'Hendrerit dolor magna eget est lorem ipsum. Aliquam eleifend mi in nulla posuere. Odio aenean sed adipiscing diam donec adipiscing tristique.'],
    linkto:['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'], 
    delay:[500, 0, 500]
    
}

showBoxes = () => (
    this.state.prices.map((box,i)=>(
        <div className="pricing_item">
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                    <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text="Purchase"
                            bck="#ffa800"
                            alt="icon_button"
                            link={this.state.linkto[i]}
                        />
                    </div>

                </div>
            </Zoom>
        </div>
    ))
)

    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {this.showBoxes()}
                </div>

            </div>
                
            </div>
        );
    }
}

export default Pricing;