import React, { Component } from 'react';
import { Geolocation, Position } from '@capacitor/geolocation';
import GeoView from './GeoView';

class GeoContainer extends Component {

    state: { coordinates: Position}

    constructor(props :any) {
        super(props)
        this.state = {
            coordinates : 
            {
                timestamp : 0, 
                coords : 
                {
                    latitude: 0, 
                    longitude: 0,
                    accuracy: 0,
                    altitudeAccuracy: null,
                    altitude: null,
                    speed: null,
                    heading: null
                }
            }
        }
        
    }


    async getDeviceLocation() {
        const coordinates = await Geolocation.getCurrentPosition();
        this.setState({
            coordinates: coordinates
        });
        console.log('Current Position:', coordinates);
        console.log('current state', this.state.coordinates);
    }

    async componentDidMount() {
        this.getDeviceLocation();
    }

    render() {
        return (
            <GeoView
               coords = {this.state.coordinates.coords}
               timestamp = {this.state.coordinates.timestamp}
            />
        )
    }
}


export default GeoContainer;