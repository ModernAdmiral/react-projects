import React, { Component } from 'react';
import LotteryBall from './LotteryBall'
import Lottery from './Lottery';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Lottery />
                <Lottery title="Mini Daily" maxNum={10} maxBalls={4}/>
            </div>
        );
    }
}

export default App;