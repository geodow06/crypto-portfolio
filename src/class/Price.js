import React, {Component} from 'react';
import coinbase from '../service/coinbaseService';

class Price extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prices: ''
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updatePrices(),
            100000
        );
        this.updatePrices()
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    async updatePrices() {
        let prices = await this.props.service.getCoinPrices(this.props.ticker, 'USD')
        this.setState({prices:[prices]})
    }

    render() {
        const isLoaded = this.state.prices !== '';
        let text = `Loading ${this.props.ticker} price`
        if(isLoaded) {
            text = `$${this.state.prices[0].spot} USD`
        }
        return (
            <div className="container"> 
                <div>
                    {text}
                </div>
            </div>
        );
    }
}

export default Price;