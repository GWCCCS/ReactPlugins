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

import StatusBarContainer from './components/Status/StatusBarContainer';
import DeviceContainer from './components/Device/DeviceContainer';
import AppContainer from './components/App/AppContainer';
import HapticContainer from './components/Haptics/HapticsContainer';
import MotionContainer from './components/Motion/MotionContainer';
import NetworkContainer from './components/Network/NetworkContainer';

import fcPageView from './components/compTemplate/fcPage'


/* Theme variables */
import './theme/variables.css';
import IconExample from './components/IconExample';
import KeyPageView from './components/Keyboard/keyPage';
import GeoContainer from './components/geo/GeoContainer';
import ClassCompTemp from './components/compTemplate/classCompTemp';
import asyncExampleComp from './components/asyncExample/asyncExampleComp';
import FormView from './components/inputform/inputform';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home}/>
        <Redirect exact from="/" to="/home" />
        <Route path="/statusBar" component={StatusBarContainer} exact={true} />
        <Route path="/network" component={NetworkContainer} exact={true} />
        <Route path="/motion" component={MotionContainer} exact={true} />
        <Route path="/haptic" component={HapticContainer} exact={true} />
        <Route path="/device" component={DeviceContainer} exact={true} />
        <Route path="/appApi" component={AppContainer} exact={true} />
        <Route path="/cct" component={ClassCompTemp} exact={true} />
        <Route path="/fcptv" component={fcPageView} exact={true} />        
        <Route path="/geo" component={GeoContainer} exact={true} />
        <Route path="/async" component={asyncExampleComp} exact={true} />
        <Route path="/key" component={KeyPageView} exact={true} />
        <Route path="/new" component={NewItem}/>
        <Route path="/secretpath" component={NewItem}/>
        <Route path='/new2' component={NewItem2}/>
        <Route path="/balloon" component={IconExample}/>
        <Route path="/form" component={FormView}/>
        <Route component={NewItem}/>
      </IonRouterOutlet>
      <Route exact path="/2new2" render={(props) => {
          return <NewItem/>; } }/>

    </IonReactRouter>
  </IonApp>
);

export default App;
