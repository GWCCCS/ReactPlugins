import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const GeoView = ({coords, timestamp, update} : any) => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Geo</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            <div>
                <p>
                Longitude: {coords.latitude}
                </p>
                <p>
                Latitude: {coords.longitude}
                </p>
                <p>
                TimeStamp: {timestamp}
                </p>
            </div>
            <IonButton onClick={() => {update()}}>
            Update data
            </IonButton>
        </IonContent>
    </IonPage>
    );
  };
  
  export default GeoView;