import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';

const AppView = ({exitApp, openUrl}: any) => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>APP API</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonButton onClick={() => {exitApp()}}>
                Exit App
            </IonButton>

            <IonButton onClick={() => {openUrl()}}>
                Open WhatsApp
            </IonButton>

        </IonContent>
    </IonPage>
    )
}
export default AppView;