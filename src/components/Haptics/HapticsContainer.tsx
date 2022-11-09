import React, { Component } from 'react'
import HapticView from './HapticView';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
export class HapticContainer extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
             
        }
    }
    vibrateDevice() {
        Haptics.vibrate();
    }
    selectionStart() {
        Haptics.selectionStart();
    }

    selectionStop() {
        Haptics.selectionEnd();
    }

    hapticsImpact(style = ImpactStyle.Heavy) {
        Haptics.impact({
            style: style
        });
    }

    changeHapticStyle(type: any) {
        if (type === 'Medium') {
            this.hapticsImpact(ImpactStyle.Medium);
        } else {
            this.hapticsImpact(ImpactStyle.Light);
        }
    }
    render() {
        return (
            <HapticView
                vibrateDevice = {() => {this.vibrateDevice()}}
                selectionStart = {() => {this.selectionStart()}}
                changeHapticStyle = {(type: any) => {this.changeHapticStyle(type)}}
                selectionStop = {() => {this.selectionStop()}}
            />
        )
    }
}

export default HapticContainer