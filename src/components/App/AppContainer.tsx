import React, { Component } from 'react'
import AppView from './AppView';
import { App } from '@capacitor/app';

export class AppContainer extends Component {
    state: { AppProperty1: string, AppProperty2: string, AppProperty3: string};
    constructor(props: any) {
        super(props)
        this.state = {
            AppProperty1: '',
            AppProperty2: '',
            AppProperty3: ''      
        }
    }
    exitApp() {
        App.exitApp();
    }

    setAppState(prop1 : string,prop2: string, prop3: string)
    {
        this.setState({
            AppProperty1: prop1,
            AppProperty2: prop2,
            AppProperty3: prop3      
        });
    }

    getAppState()
    {
        return [this.state.AppProperty1, this.state.AppProperty2, this.state.AppProperty3]

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