import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import FcCompTemp from './fcCompTemp'


const fcPageView: React.FC = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/home'/>
          </IonButtons>
          <IonTitle>React FC Page with embedded Functional Component</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
      <FcCompTemp property1="1" property2="2" property3="3"/>

      </IonContent>
    </IonPage>
  );
};
export default fcPageView;