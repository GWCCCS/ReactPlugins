import React from 'react';
import { Geolocation } from '@capacitor/geolocation';
import GeoView from './GeoView';

class GeoContainer extends React.Component {
    coordinates: any;
    constructor(props :any) {
        super(props)
        console.log("instance created");
    }

    getCurrentPosition = async () => {
        let lclcoordinates = await Geolocation.getCurrentPosition();
        //this.setState({coordinates : lclcoordinates}); 
        console.log("position updated", lclcoordinates);
        return lclcoordinates;
      };

    async componentDidMount() {
        this.coordinates = this.getCurrentPosition(); 
    }

    render() {
        return (
            <GeoView 
                coordinates= {this.coordinates}
            />
        )
    }
}


export default GeoContainer;