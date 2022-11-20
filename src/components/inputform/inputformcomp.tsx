import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {Controller, Control, useForm} from 'react-hook-form';

interface ContainerProps {property1 : any, property2 : any, property3: any}

const inputFormComp: React.FC<ContainerProps> = (props) => {
    const { control, handleSubmit } = useForm();

    const registerUser = (data) => {
        console.log('creating user account', data);
    }

    // const [property1, setProperty1] = React.useState(props.property1);
    // const [property2, setProperty2] = React.useState(props.property2);
    // const [property3, setProperty3] = React.useState(props.property3);

    // const updateData = () => {
    //     setProperty1("test1 - " + Math.random());
    //     setProperty2("test2 - " + Math.random());
    //     setProperty3("test3 - " + Math.random());
    // }
    
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
                control={control}
                name="email"
                render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <IonCheckbox
                      onBlur={onBlur} // notify when input is touched
                      onChange={onChange} // send value to hook form
                      checked={value}
                    />
                  )}                
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