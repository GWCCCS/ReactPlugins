import React, { Component } from 'react'
import MotionView from './MotionView';
import { Plugins, Permissions, } from '@capacitor/core';

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
        const { Motion } = Plugins;
        Motion.addListener('accel', (event) => {
              this.setState({
                  result: event.acceleration,
                  rotationResult: event.rotationRate
              })
        })
    }
    componentWillUnmount() {
        const { Motion } = Plugins;
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