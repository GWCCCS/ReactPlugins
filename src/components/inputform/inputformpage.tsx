import { IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';



const inputFormPageView: React.FC = (props) => {
  return (
      <form className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" />
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Remember me</IonLabel>
          <IonCheckbox defaultChecked={true} slot="start" />
        </IonItem>
        <IonButton className="ion-margin-top" type="submit" expand="block">
          Login
        </IonButton>
      </form>
  );
};
export default inputFormPageView;