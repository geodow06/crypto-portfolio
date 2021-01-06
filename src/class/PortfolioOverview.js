import React, {Component} from 'react';
import '../App.css'
import ExchangeOverview from './ExchangeOverview';
import coinbaseService from '../service/coinbaseService';
import cryptoService from '../service/cryptoService';
import Test from './Test';
import LinkExchange from '../functional/LinkExchangeOption';
// import 'bootstrap/dist/css/bootstrap.min.css';
const supportedServices = [coinbaseService, cryptoService];
class PortfolioOverview extends Component {

    // Return true if user has linked service
    linked(service) {
        if(this.props.linkedServices[service.exchangeInformation.path]) {
            return true
        }
    }
    render(){
        return(
            <div className="container">
                <div className="row align-self-center">
                    <div className="col align-self-center">
                        <div className="row">
                            Portfolio Overview
                        </div>
                        {supportedServices.map((service, key) => (
                            <div key={key}>
                                {!this.linked(service) && LinkExchange(service.exchangeInformation.path)}
                                {this.linked(service) && <ExchangeOverview serviceName={service.exchangeInformation.path} service={service}/>}
                            </div>
                        ))}
                        {/* <Test service={cryptoService}/> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default PortfolioOverview;