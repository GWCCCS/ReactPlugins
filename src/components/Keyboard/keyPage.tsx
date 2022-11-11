import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import KeyboardComp from './KeyboardCont';


const KeyPageView: React.FC = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/home'/>
          </IonButtons>
          <IonTitle>React FC Page with embedded Keyboard Functional Component</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      
      <KeyboardComp info={undefined}></KeyboardComp>
      
      </IonContent>
    </IonPage>
  );
};
export default KeyPageView;