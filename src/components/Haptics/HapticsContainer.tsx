import React, { Component } from 'react'
import HapticView from './HapticView';
import { Plugins, HapticsImpactStyle } from '@capacitor/core';
export class HapticContainer extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
             
        }
    }
    vibrateDevice() {
        const { Haptics } = Plugins;
        Haptics.vibrate();
    }
    selectionStart() {
        const { Haptics } = Plugins;
        Haptics.selectionStart();
    }

    selectionStop() {
        const { Haptics } = Plugins;
        Haptics.selectionEnd();
    }

    hapticsImpact(style = HapticsImpactStyle.Heavy) {
        const { Haptics } = Plugins;
        Haptics.impact({
            style: style
        });
    }

    changeHapticStyle(type: any) {
        if (type === 'Medium') {
            this.hapticsImpact(HapticsImpactStyle.Medium);
        } else {
            this.hapticsImpact(HapticsImpactStyle.Light);
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