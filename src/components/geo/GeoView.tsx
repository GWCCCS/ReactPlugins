import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Position} from '@capacitor/geolocation';
import React from 'react';
import { time } from 'console';

const GeoView = ({coords, timestamp} : Position) => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Geo</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            <div>
                <>
                Coordinates: {coords}
                TimeStamp: {timestamp}
                </>
            </div>

        </IonContent>
    </IonPage>
    );
  };
  
  export default GeoView;