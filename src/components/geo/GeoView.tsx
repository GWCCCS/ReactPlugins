import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const GeoView = ({coordinates, updateposition} : any) => {
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
            <IonButton onClick={() => {updateposition()}}>
                Update
            </IonButton>
        </IonContent>
    </IonPage>
    );
  };
  
  export default GeoView;