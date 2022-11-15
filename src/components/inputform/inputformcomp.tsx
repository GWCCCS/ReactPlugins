import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {control, useForm} from 'react-hook-form';

interface ContainerProps {property1 : any, property2 : any, property3: any}

const inputFormComp: React.FC<ContainerProps> = (props) => {
    const { control, handleSubmit } = useForm();

    const registerUser = (data) => {
        console.log('creating user account', data);
    }

    const [property1, setProperty1] = React.useState(props.property1);
    const [property2, setProperty2] = React.useState(props.property2);
    const [property3, setProperty3] = React.useState(props.property3);

    const updateData = () => {
        setProperty1("test1 - " + Math.random());
        setProperty2("test2 - " + Math.random());
        setProperty3("test3 - " + Math.random());
    }
    
    return (        
        <IonPage>
        <IonContent className="ion-padding">
          <IonText color="muted">
            <h2>Create Account</h2>
          </IonText>
          <form onSubmit={handleSubmit(registerUser)}>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <Controller
                as={<IonInput type="email" />}
                name="email"
                control={control}
                onChangeName="onIonChange"
              />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
              Register
            </IonButton>
          </form>
        </IonContent>
      </IonPage>

    )
}

export default inputFormComp