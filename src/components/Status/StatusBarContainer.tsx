import React, { Component } from 'react'
import StatusBarView from './StatusBarView';
import { Plugins, StatusBarStyle } from '@capacitor/core';
export class StatusBarContainer extends Component {
    statusBar: any;
    state: { isStatusBarLight: boolean }
    isStatusBarLight = true

    constructor(props: any) {
        super(props)
        this.state = {
            isStatusBarLight: true
        }
    }
    changeStatusBar() {
        this.statusBar.setStyle({
          style: this.state.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
        });
        this.setState({
            isStatusBarLight : !this.state.isStatusBarLight
        })
    
        // Display content under transparent status bar (Android only)
        this.statusBar.setOverlaysWebView({
          overlay: true
        });
      }
    async componentDidMount() {
        const { StatusBar } = Plugins;
        this.statusBar = StatusBar;
        this.statusBar.show();
    }
    hideStatusBar() {
        const { StatusBar } = Plugins;
        StatusBar.hide();
    }
    changeColor() {
        const { StatusBar } = Plugins;
        StatusBar.setStyle({
            style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
        });
        this.isStatusBarLight = !this.isStatusBarLight;
        StatusBar.setOverlaysWebView({
            overlay: true
        });
    }
    showStatusBar() {
        const { StatusBar } = Plugins;
        StatusBar.show();
    }
    render() {
        return (
            <StatusBarView
                hideStatusBar = {() => {this.hideStatusBar()}}
                changeColor = {() => {this.changeColor()}}
                showStatusBar = {() => {this.showStatusBar()}}
            />
        )
    }
}

export default StatusBarContainer