import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const DeviceView = ({ mobileInfo, batteryInfo, languageInfo}: any) => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Device Info</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div>
                <div>
                    Mobile Info: {mobileInfo}
                </div>
                <div>
                    Battery Info: {batteryInfo}
                </div>
                <div>
                    Language Info: {languageInfo}
                </div>
            </div>
        </IonContent>
    </IonPage>
    )
}
export default DeviceView;