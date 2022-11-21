import { Component } from 'react'
import AsyncView from './asyncView'

export class asyncExampleComp extends Component {

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
      
      async  asyncCallAwait() {
        let current_time = new Date()
        const sec1 = current_time.getSeconds()
        console.log('calling @', current_time.getSeconds());
        const result = await this.resolveAfter2Seconds();
        console.log(result);
        current_time = new Date()
        const sec = current_time.getSeconds()
        console.log("end of async call @", sec)
        this.setState({
            property1: JSON.stringify("Entry Time: " + sec1 + "--- Exit Time: " + sec + "  " + result)
        });
      }

       asyncCallnoAwait() {
        let current_time = new Date()
        const sec1 = current_time.getSeconds()
        console.log('calling @', current_time.getSeconds());
        const result = this.resolveAfter2Seconds();
        console.log(result);
        current_time = new Date()
        const sec = current_time.getSeconds()
        console.log("end of async call @", sec)
        this.setState({
            property2: JSON.stringify("Entry Time: " + sec1 + "--- Exit Time: " + sec + "  " + result)
        });
      }

      async  asyncCallCallback() {
        let current_time = new Date()
        const sec1 = current_time.getSeconds()
        console.log('calling @', current_time.getSeconds());
        const result = this.resolveAfter2Seconds();
        result.then((value) => this.reportCallback(value, sec1) )

      }

      reportCallback = (value : any, sec1: any) => {
        console.log();
        let current_time = new Date()
        const sec = current_time.getSeconds()
        console.log("end of async call @", sec)
        this.setState({
            property3: JSON.stringify("Entry Time: " + sec1 + "--- Exit Time: " + sec + "  " + value)
        });
      }

    updateData() {
        this.getCompInfo();
    }
    
    getCompInfo() {
        let new_image = ''
        if(this.state.image_source !==  '/assets/dog.jpg')
            new_image = '/assets/dog.jpg';
        else
            new_image = '/assets/shapes.svg';

        this.setState({
            image_source: new_image
        });


        this.asyncCallAwait()
        this.asyncCallnoAwait()
        this.asyncCallCallback()

    }

    componentDidMount() {
       // this.getCompInfo();
    }
    render() {
        return (
            <AsyncView
            property1 = {this.state.property1}
            property2 = {this.state.property2}
            property3 = {this.state.property3}
            updateData = {() => {this.updateData()}}
            image = {this.state.image_source}
            />

        )
    }
}

export default asyncExampleComp