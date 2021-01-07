import React, {Component} from 'react';

class Test extends Component {

    // constructor(props) {
    //     super(props) 

    // }

    async componentDidMount() {
        let response = await this.props.service.getTicker()
        console.log(response)
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Test;