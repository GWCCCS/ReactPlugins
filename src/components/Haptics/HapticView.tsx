import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';

const HapticView = ({vibrateDevice, selectionStart, selectionStop, changeHapticStyle}: any) => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Haptic Plugin</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <div>
                Select the text to check the Hapic Selection feature an know when then Selection is started and ended
            </div>
            <IonButton onClick={() => {vibrateDevice()}}>
                Vibrate Device
            </IonButton>

            <IonButton onClick={() => {selectionStart()}}>
                Selection Start
            </IonButton>

            <IonButton onClick={() => {selectionStop()}}>
                Selection Stop
            </IonButton>

            <IonButton onClick={() => {changeHapticStyle('Medium')}}>
                Change Haptic Inpact Style to Medium
            </IonButton>

            <IonButton onClick={() => {changeHapticStyle('Light')}}>
                Change Haptic Inpact Style to Light
            </IonButton>

        </IonContent>
    </IonPage>
    )
}
export default HapticView;