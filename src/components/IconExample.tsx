import React, {useState} from 'react';
import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { balloon } from 'ionicons/icons';

interface ContainerProps {value1: number}

 const IconExample: React.FC<ContainerProps> = (props) => {
    const [count, setCount] = useState(props.value1);

    const IncCount = () => {
        const newcount = count+1;
        setCount(newcount);
    }

  return (
        <IonContent>
        <IonButton onClick={() => IncCount()}>
            {count}
            <IonIcon icon={balloon}></IonIcon>
    
        </IonButton>
        </IonContent>
        );
};

export default IconExample;