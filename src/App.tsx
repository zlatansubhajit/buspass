import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, notificationsOutline, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/MenuPage';
import Tab3 from './pages/Tab3';

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

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

export const PassContext = React.createContext<any>({})

const App: React.FC = () => {
  const[ passData, setPassData ] = useState()
  return(
  <IonApp>
    
    <IonReactRouter>
    <PassContext.Provider value={{ passData: passData, setPassData: setPassData}}>
    <Tab2/>
        <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Digital Bus Pass</IonTitle>
          <IonButtons slot="end">
          <IonButton><IonIcon icon={notificationsOutline}></IonIcon></IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
        <IonSplitPane contentId='main' style={{marginTop: "56px"}}>
        
        <IonRouterOutlet id="main" >
          <Route exact path="/home" component={Tab1}/>
          <Route exact path="/applybuspass" component={Tab3} />
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        
        </IonSplitPane>
        {/* <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          
        </IonTabBar> */}
      </PassContext.Provider>
    </IonReactRouter>
    
  </IonApp>
  )
}

export default App;
