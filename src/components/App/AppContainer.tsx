import React, { Component } from 'react'
import AppView from './AppView';
import { Plugins, AppState } from '@capacitor/core';

export class AppContainer extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
            
        }
    }
    exitApp() {
        const { App } = Plugins;
        App.exitApp();
    }
    async openUrl() {
        const { App } = Plugins;
        let ret = await App.openUrl({ url: 'com.whatsapp' });
        console.log('Open url response: ', ret);
        App.addListener('appUrlOpen', (data: any) => {
            console.log('App opened with URL: ' +  data.url);
        });
        App.addListener('appRestoredResult', (data: any) => {
            console.log('Restored state:', data);
        });
    }
    render() {
        return (
            <AppView
                exitApp = {() => {this.exitApp()}}
                openUrl = {() => {this.openUrl()}}
            />
        )
    }
}

export default AppContainer