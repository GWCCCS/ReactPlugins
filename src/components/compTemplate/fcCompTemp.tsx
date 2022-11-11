import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface ContainerProps {property1 : any, property2 : any, property3: any}

const FcCompTemp: React.FC<ContainerProps> = (props) => {
    const [property1, setProperty1] = React.useState(props.property1);
    const [property2, setProperty2] = React.useState(props.property2);
    const [property3, setProperty3] = React.useState(props.property3);

    const updateData = () => {
        setProperty1("test1 - " + Math.random());
        setProperty2("test2 - " + Math.random());
        setProperty3("test3 - " + Math.random());
    }
    
    return (        
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

    )
}

export default FcCompTemp