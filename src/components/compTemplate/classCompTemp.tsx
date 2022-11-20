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

    async resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 2000);
        });
      }
      
      async  asyncCall() {
        let current_time = new Date()
        const sec1 = current_time.getSeconds()
        console.log('calling @', current_time.getSeconds());
        const result = await this.resolveAfter2Seconds();
        console.log(result);
        current_time = new Date()
        const sec = current_time.getSeconds()
        console.log("end of async call @", sec)
        this.setState({
            property1: JSON.stringify("Entry Time:" + sec1),
            property2: JSON.stringify("Exit Time:" + sec)
        });
      }

    updateData() {
        this.getCompInfo();
    }
    
    async getCompInfo() {
        const data3 = "test3 - " + Math.random(); // await Device.getLanguageCode();
        let new_image = ''
        if(this.state.image_source !==  '/assets/dog.jpg')
            new_image = '/assets/dog.jpg';
        else
            new_image = '/assets/shapes.svg';

        this.setState({
            property3: JSON.stringify(data3),
            image_source: new_image
        });

        this.asyncCall()

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