import { Component } from 'react'
import ClassView from './classView';

export class ClassCompTemp extends Component {

    state: { property1: string, property2: string, property3: string, image_source: string}
        constructor(props: any) {
        super(props)
        this.state = {
            property1: '',
            property2: '',
            property3: '',
            image_source: ''
        }
    }

    updateData() {
        this.getCompInfo();
    }
    
    async getCompInfo() {
        const data1 = "test1 - " + Math.random(); // await Device.getInfo();
        const data2 = "test2 - " + Math.random(); // await Device.getBatteryInfo();
        const data3 = "test3 - " + Math.random(); // await Device.getLanguageCode();
        let new_image = ''
        if(this.state.image_source !==  '/assets/dog.jpg')
            new_image = '/assets/dog.jpg';
        else
            new_image = '/assets/shapes.svg';


        this.setState({
            property1: JSON.stringify(data1),
            property2: JSON.stringify(data2),
            property3: JSON.stringify(data3),
            image_source: new_image
        });



    }

    componentDidMount() {
        this.getCompInfo();
    }
    render() {
        return (
            <ClassView
            property1 = {this.state.property1}
            property2 = {this.state.property2}
            property3 = {this.state.property3}
            updateData = {() => {this.updateData()}}
            image = {this.state.image_source}
            />

        )
    }
}

export default ClassCompTemp