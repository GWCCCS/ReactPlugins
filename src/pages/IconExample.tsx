import React from 'react';
import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';

 const IconExample: React.FC = () => {
  return (<IonContent>
        <IonButton>
            <IonIcon icon={camera} />
            Take Picture
        </IonButton>
    </IonContent>);
};

export default IconExample;