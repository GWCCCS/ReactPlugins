import React, { Component } from 'react'
import AppView from './AppView';
import { App } from '@capacitor/app';

export class AppContainer extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
            
        }
    }
    exitApp() {
        App.exitApp();
    }
    async openUrl() {
        //let ret = await App.openUrl({ url: 'com.whatsapp' });
        //console.log('Open url response: ', ret);
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