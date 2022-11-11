import { Capacitor } from '@capacitor/core';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Keyboard} from '@capacitor/keyboard';


interface ContainerProps {info : any}

const KeyboardComp: React.FC<ContainerProps> = (props) => {
    const [keystate, setKeystate] = React.useState(false);
    Keyboard.addListener('keyboardWillShow', info => {
        console.log('keyboard will show with height:', info.keyboardHeight);
    });
      
    Keyboard.addListener('keyboardDidShow', info => {
        console.log('keyboard did show with height:', info.keyboardHeight);
    });
      
    Keyboard.addListener('keyboardWillHide', () => {
        console.log('keyboard will hide');
    });
      
    Keyboard.addListener('keyboardDidHide', () => {
        console.log('keyboard did hide');
    });
    
    const keyboardControl= () => {
        if(keystate)
            Keyboard.hide();
        else
            Keyboard.show();

        setKeystate(!keystate);
    };

    return (        
        <IonContent fullscreen>
            <IonButton onClick={() => {keyboardControl()}}></IonButton>
        </IonContent>

    )
}

export default KeyboardComp