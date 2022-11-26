
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import FormView from '../inputform/inputform';

const ClassView = ({property1, property2, property3, updateData, image}: any) => {
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
            <IonList>
                <IonItem>
                <IonThumbnail slot="start">
                    <img alt=" " src={image} />
                    </IonThumbnail>
                    <IonLabel>{image}</IonLabel>
                </IonItem>
           </IonList>            
            <FormView></FormView>
        </IonContent>
    </IonPage>
    );
  };
  
  export default ClassView;