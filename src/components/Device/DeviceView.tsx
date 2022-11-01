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
                <p> Mobile Info: {mobileInfo}
                    </p>
                </div>
                <div>
                    Battery Info: {batteryInfo}
                </div>
                <div>
                    <p>
                        Language Info: {languageInfo}
                        </p>
                </div>
            </div>
        </IonContent>
    </IonPage>
    )
}
export default DeviceView;