import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Component } from 'react'

export class ctContainer extends Component {

    state: { property1: string, property2: string, property3: string }
        constructor(props: any) {
        super(props)
        this.state = {
            property1: '',
            property2: '',
            property3: ''
        }
    }

    updateData() {
        this.getCompInfo();
    }
    
    async getCompInfo() {
        const data1 = "test1 - " + Math.random(); // await Device.getInfo();
        const data2 = "test2 - " + Math.random(); // await Device.getBatteryInfo();
        const data3 = "test3 - " + Math.random(); // await Device.getLanguageCode();
        this.setState({
            property1: JSON.stringify(data1),
            property2: JSON.stringify(data2),
            property3: JSON.stringify(data3)
        });
    }

    componentDidMount() {
        this.getCompInfo();
    }
    render() {
        return (
            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Template Component View</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div>
                    <div>
                        Property 1: {this.state.property1}
                    </div>
                    <div>
                        Property 2: {this.state.property2}
                    </div>
                    <div>
                        Property 3: {this.state.property3}   
                    </div>
                </div>
                <IonButton onClick={() => {this.updateData()}}>
                Update data
            </IonButton>
            </IonContent>
        </IonPage>
        )
    }
}

export default ctContainer