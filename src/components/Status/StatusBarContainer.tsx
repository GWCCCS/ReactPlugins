import React, { Component } from 'react'
import StatusBarView from './StatusBarView';
import { StatusBar, Style } from '@capacitor/status-bar';

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
          style: this.state.isStatusBarLight ? Style.Dark : Style.Light
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
        this.statusBar = StatusBar;
        this.statusBar.show();
    }
    hideStatusBar() {
        StatusBar.hide();
    }
    changeColor() {
        StatusBar.setStyle({
            style: this.isStatusBarLight ? Style.Dark : Style.Light
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