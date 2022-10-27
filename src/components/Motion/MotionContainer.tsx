import React, { Component } from 'react'
import MotionView from './MotionView';
import { Motion } from '@capacitor/motion';

export class MotionContainer extends Component {
    state: {result : any, rotationResult: any};
    constructor(props :any) {
        super(props)
        this.state = {
            result: '',
            rotationResult: ''
        }
    }
    componentDidMount() {
        Motion.addListener('accel', (event) => {
              this.setState({
                  result: event.acceleration,
                  rotationResult: event.rotationRate
              })
        })
    }
    componentWillUnmount() {
        Motion.removeAllListeners();
    }
    render() {
        return (
            <MotionView
                result = {this.state.result}
                rotationResult = {this.state.rotationResult}
            />
        )
    }
}

export default MotionContainer