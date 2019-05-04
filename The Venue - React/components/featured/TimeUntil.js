import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class TimeUntil extends Component {

    state = {
        deadline: 'June, 4, 2019',
        days:'0',
        hours:'0', 
        minutes:'0', 
        seconds:'0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            console.log("Date Passed")
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({
                days, 
                hours, 
                minutes, 
                seconds
            })
        }
    }

    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline), 1000)
    }

    render() {
        return (
            <div className="countdown_wrapper">
            <Fade left delay={1000}>
                <div className="countdown_top">
                    Event Starts In 
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                       <div className="countdown_time">
                           {this.state.days}
                       </div>
                       <div className="countdown_tag">
                            days
                       </div> 
                    </div>
                    <div className="countdown_item">
                       <div className="countdown_time">
                       {this.state.hours}
                       </div>
                       <div className="countdown_tag">
                            hours
                       </div> 
                    </div>
                    <div className="countdown_item">
                       <div className="countdown_time">
                       {this.state.minutes}
                       </div>
                       <div className="countdown_tag">
                            minutes
                       </div> 
                    </div>
                    <div className="countdown_item">
                       <div className="countdown_time">
                       {this.state.seconds}
                       </div>
                       <div className="countdown_tag">
                            seconds
                       </div> 
                    </div>



                </div>
                </Fade>
            </div>
        );
    }
}

export default TimeUntil;