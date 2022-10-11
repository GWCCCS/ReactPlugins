import { IonBadge, IonCheckbox, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add } from 'ionicons/icons';


const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar Title was Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start"/>
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Avery</IonNote>
              <IonBadge color="success" slot="end">5 Days</IonBadge>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add}/>
          </IonFabButton>
        </IonFab>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
