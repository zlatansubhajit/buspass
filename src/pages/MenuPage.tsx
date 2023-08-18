import React, { useContext } from 'react';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonPage, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MenuPage.css';
import { bus, busSharp, ellipse, home, homeSharp, square, triangle } from 'ionicons/icons';
import { PassContext } from '../App';

const Tab2: React.FC = () => {
  const {passData, setPassData } = useContext(PassContext)
  return (
    <IonMenu contentId="main" type="overlay">
      <div style={{backgroundColor:'var(--ion-color-secondary-shade)', padding: '10px', color: 'white'}} >
        <h5>Hi, {passData?.fullName? passData.fullName : "Animesh Gupta"}</h5>
      </div>
      <IonContent>
      <IonList id="inbox-list">
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink={'/home'} routerDirection="root" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={home} md={homeSharp} />
                  <IonLabel>Home</IonLabel>
                </IonItem>
              </IonMenuToggle>
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink={'/applybuspass'} routerDirection="forward" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={bus} md={busSharp} />
                  <IonLabel>Apply For Bus</IonLabel>
                </IonItem>
              </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Tab2;
