import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import HttpComp from './HttpComp';



const HttpPageView: React.FC = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/home'/>
          </IonButtons>
          <IonTitle>React FC Page with embedded HTTP Functional Component</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
      <HttpComp purl='www.bing.com'/>

      </IonContent>
    </IonPage>
  );
};
export default HttpPageView;