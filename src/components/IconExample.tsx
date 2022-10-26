import React, {useState} from 'react';
import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { balloon } from 'ionicons/icons';

 const IconExample: React.FC = () => {
 const [count, setCount] = useState([{initialvalue:0}]);
  return (
        <IonContent>
        <IonButton onClick={() => setCount(count)}>
            <IonIcon icon={balloon}></IonIcon>
    
        </IonButton>
        </IonContent>
        );
};

export default IconExample;