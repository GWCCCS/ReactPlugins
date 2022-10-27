import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const GeoView = ({coordinates} : any) => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Geo</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div>
                Coordinates: {coordinates}
            </div>
        </IonContent>
    </IonPage>
    );
  };
  
  export default GeoView;