import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';

const MotionView = ({ result, rotationResult}: any) => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Motion Plugin</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            Acceleration Corrdinates
            <div>
                X: {result.x? result.x : "Not Available"}
                Y: {result.y? result.y : "Not Available"}
                Z: {result.z? result.z : "Not Available"}
            </div>
            Rotation Coordinates
            <div>
                alpha: {rotationResult.alpha? rotationResult.alpha : "Not Available"}
                beta: {rotationResult.beta? rotationResult.beta : "Not Available"}
                gamma: {rotationResult.gamma? rotationResult.gamma : "Not Available"}
            </div>
        </IonContent>
    </IonPage>
    )
}

export default MotionView;