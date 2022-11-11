import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface ContainerProps {purl : any}

const HttpComp: React.FC<ContainerProps> = (props) => {
    const [purl, seturl] = React.useState(props.purl);
    const [response, setresponse] = React.useState('');

    const updateData = () => {
        seturl('http');
        doGet();
    }
    
        // Example of a GET request
    const doGet = async () => {
        const options = {
            url: purl
        };
    
        console.log(options);
        const response: HttpResponse = await CapacitorHttp.get(options);
        console.log(response);
        setresponse(response.data);
        // or...
        // const response = await CapacitorHttp.request({ ...options, method: 'GET' })
    };

    return (        
        <IonContent fullscreen>
            <div>
                <div>
                    URL: {purl}
                </div>
                    response: {response}
            </div>
            <IonButton onClick={() => {updateData()}}>
            Update data
            </IonButton>
        </IonContent>

    )
}

export default HttpComp