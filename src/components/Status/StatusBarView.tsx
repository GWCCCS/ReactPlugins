import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';

const StatusBarView = ({hideStatusBar, changeColor, showStatusBar}: any) => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Status Bar</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonButton onClick={() => {hideStatusBar()}}>
                Hide Status Bar
            </IonButton>

            <IonButton onClick={() => {showStatusBar()}}>
                Hide Status Bar
            </IonButton>

            <IonButton onClick={() => {changeColor()}}>
                Change Color
            </IonButton>
        </IonContent>
    </IonPage>
    )
}
export default StatusBarView;