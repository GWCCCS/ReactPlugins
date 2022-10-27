import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add } from 'ionicons/icons';


const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CSC 262 App Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start"/>
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Avery</IonNote>
              <IonBadge color="success" slot="end">10 Days</IonBadge>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonCard color = "warning">
          <IonCardHeader>
            <IonCardTitle>CSC 262 App Example 3</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            The quick brown fox...
          </IonCardContent>
          <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Item</IonLabel>
          </IonItem>
          </IonList>
          <IonButton fill="clear" routerLink="/geo">Page 1</IonButton>
          <IonButton fill="clear" routerLink="/device">Page 2</IonButton>
        </IonCard>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push('/new2')}>
            <IonIcon icon={add}/>
          </IonFabButton>
        </IonFab>
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
