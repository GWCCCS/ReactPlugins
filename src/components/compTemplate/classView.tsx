import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ClassView = ({property1, property2, property3, updateData}: any) => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref='/home'/>
                </IonButtons>
                <IonTitle>Class Component Template View</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div>
                <div>
                    Property 1: {property1}
                </div>
                <div>
                    Property 2: {property2}
                </div>
                <div>
                    Property 3: {property3}   
                </div>
            </div>
            <IonButton onClick={() => {updateData()}}>
            Update data
        </IonButton>
        </IonContent>
    </IonPage>
    );
  };
  
  export default ClassView;