import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonNote, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { add } from 'ionicons/icons';


const Home: React.FC<RouteComponentProps> = (props) => {

  const [property1, setProperty1] = React.useState('');
  const [property2, setProperty2] = React.useState('');
  const [property3, setProperty3] = React.useState('');

  const updateAppData = (p1, p2, p3) => {
      setProperty1(p1);
      setProperty2(p2);
      setProperty3(p3);
  }

  function getAppData() {
      return [property1, property2, property3];
  }

  return (
    <IonPage>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
            <IonButton fill="clear" routerLink="/haptic">Haptic</IonButton>
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/device">Device</IonButton>
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/statusBar">Status</IonButton>
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/motion">Motion</IonButton>          
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/cct">classcompTemplate</IonButton>     
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/fcptv">funccompViewTemplate</IonButton> 
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/geo">Geo</IonButton> 
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/key">keyboard</IonButton>  
            </IonItem>
            <IonItem>
            <IonButton fill="clear" routerLink="/async">Async Example</IonButton>  
            </IonItem>
                        
            
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
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
          </IonCard>
          <IonFab vertical='bottom' horizontal='end' slot='fixed'>
            <IonFabButton onClick={() => props.history.push('/new2')}>
              <IonIcon icon={add}/>
            </IonFabButton>
          </IonFab>
          <ExploreContainer/>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default Home;
