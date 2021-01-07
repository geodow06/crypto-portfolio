import React, {Component} from 'react';
import AssetRow from '../functional/AssetRow';
import ExchangeOverviewHeading from '../functional/ExchangeOverviewHeading';
import { useParams } from 'react-router-dom';
class ExchangeOverview extends Component {

    constructor(props) {
        super(props)

        this.state = {
            info: '',
            loaded:false,
            service:''
            
        }
    }

    // service() {
       
    //     if (typeof this.props.service === 'undefined') {
    //         try {
    //             const { exchangeName } = this.props.match.params;
                
    //             console.log(exchangeName)
    //             return this.props.linkedServices[exchangeName]
    //         } catch(err) {
    //             console.log(err)
                
    //         }
            
    //     } 
    //     return this.props.service
    // }

    serviceFromPath() {
        try {
            const { exchangeName } = this.props.match.params;
            return this.props.linkedServices[exchangeName]
        } catch(err) {
            console.log(err)
        }
    }

    async componentDidMount() {
        let service = this.props.service ? this.props.service :this.serviceFromPath()
        try {
            await service.getAccounts().then(r => this.setState({info:r,loaded:true, service:service}))
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                {/* {this.props.linkedServices.map((service, key) => (
                        <div key={key}>
                            <ExchangeOverview serviceName={service.path} linkedServices={linkedServices}/>
                        </div>
                ))} */}
                {this.state.loaded && ExchangeOverviewHeading(this.state.service.exchangeInformation)}
                {this.state.loaded && this.state.info.map((data, key) =>
                    <div key={key}>
                        {AssetRow(data, this.state.service)}
                    </div>
                )
                }
            </div>
        );
    }
}

export default ExchangeOverview;