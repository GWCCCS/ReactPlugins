import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const compttempView = ({ property1, property2, property3}: any) => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Template Component View</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div>
                <div>
                <p> Property 1: {property1}
                    </p>
                </div>
                <div>
                    Property 2: {property2}
                </div>
                <div>
                    Property 3: {property3}   
                </div>
            </div>
        </IonContent>
    </IonPage>
    )
}
export default compttempView;