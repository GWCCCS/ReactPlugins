import React, { Component } from 'react'
import compttempView from './ctView';

export class ctContainer extends Component {

    state: { property1: string, property2: string, property3: string }
    devicePlugin: any;
    constructor(props: any) {
        super(props)
        this.state = {
            property1: '',
            property2: '',
            property3: ''
        }
    }
    async getCompInfo() {
        const data1 = "test1"; // await Device.getInfo();
        const data2 = "test2"; // await Device.getBatteryInfo();
        const data3 = "test3"; // await Device.getLanguageCode();
        this.setState({
            property1: JSON.stringify(data1),
            property2: JSON.stringify(data2),
            property3: JSON.stringify(data3)
        });
    }

    componentDidMount() {
        this.getCompInfo();
    }
    render() {
        return (
            <compttempView
                property1 = {this.state.property1}
                property2 = {this.state.property2}
                property3 = {this.state.property3}
            />
        )
    }
}

export default ctContainer