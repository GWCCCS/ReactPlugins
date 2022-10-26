import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import NewItem from './pages/NewItem';
import NewItem2 from './pages/NewItem2';

/* Theme variables */
import './theme/variables.css';
import IconExample from './components/IconExample';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home}/>
        <Route path="/new" component={NewItem}/>
        <Route path="/secretpath" component={NewItem}/>
        <Route path='/new2' component={NewItem2}/>
        <Redirect exact from="/" to="/home" />
        <Route path="/balloon" component={IconExample}/>
        <Route component={NewItem}/>
      </IonRouterOutlet>
      <Route exact path="/2new2" render={(props) => {
          return <NewItem/>; } }/>

    </IonReactRouter>
  </IonApp>
);

export default App;
