import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface ContainerProps {property1 : any, property2 : any, property3: any}

const FcCompTemp: React.FC<ContainerProps> = (props) => {
    const [property1, setProperty1] = React.useState(props.property1);
    const [property2, setProperty2] = React.useState(props.property2);
    const [property3, setProperty3] = React.useState(props.property3);

    const updateData = () => {
        setProperty1(property1 + 1);
        setProperty2(property2 + 1);
        setProperty3(property3 + 1);
    }
    
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Functional Component Template View</IonTitle>
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
        </IonContent>
    </IonPage>
    )
}

export default FcCompTemp