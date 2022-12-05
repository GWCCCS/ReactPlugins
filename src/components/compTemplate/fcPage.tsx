import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react';
import FcCompTemp from './fcCompTemp'

import { AppContext } from '../../state/state';

const FcPageView: React.FC = (props) => {
 // const { state, dispatch } = useContext(AppContext);
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
      
      <FcCompTemp property1="/assets/dog.jpg" property2="2" property3="3"/>

      {/* <IonButton onClick={() => dispatch({
        type: 'setCount',
        count: state.count + 1
      })}>
        Add to Order
      </IonButton>
      <h2>You have {state.count} in your cart</h2> */}

      </IonContent>
    </IonPage>
  );
};
export default FcPageView;