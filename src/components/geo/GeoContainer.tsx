import React from 'react';
import { Geolocation } from '@capacitor/geolocation';
import GeoView from './GeoView';

class GeoContainer extends React.Component {
    state: { coordinates: any }
    constructor(props :any) {
        super(props)
        this.state = {
            coordinates: '',
        }
    }

    updateCurrentPosition = async () => {
        let lclcoordinates = await Geolocation.getCurrentPosition();
        this.setState({coordinates : lclcoordinates}); 
      };
    async componentDidMount() {
        this.updateCurrentPosition();
    }

    render() {
        return (
            <GeoView 
                coordinates= {this.state.coordinates}
                updateposition = {() => {this.updateCurrentPosition()}}
            />
        )
    }
}


export default GeoContainer;