import React, { useContext, useEffect } from 'react';
import { PassContext } from '../App';
import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import transactionIcon from '../noun-transaction-2382019.svg';
import tcslogo from '../Tata_Consultancy_Services_Logo.png';
import './Tab1.css';
import { formData } from './Tab3';

const Tab1: React.FC = () => {
  const {passData, setPassData } = useContext(PassContext)
  useEffect(()=> {
    //console.log("bus pass page rendered")
    
    if(passData == undefined){
      setPassData({
        routeFrom: "Tollygunge Metro",
        routeTo: "Gitanjali Park",
        boardingFrom: "Garia More",
        dropTime: "19:30",
        employeeId: "1594200",
        fullName: "Animesh Gupta",
        endDate: "31st Aug, 2023",
        pickupTime: "11:30",
        route: "Tollygunge Metro to Gitanjali Park and Return Via-Patuli More",
        startDate: "3rd Aug, 2023"})
    }
    
  },[])
  return (
    <IonPage>
    <IonContent>
      <IonCard style={{borderRadius: '8px'}} className='gradientCard'>
        <IonCardContent style={{'color':'white'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h5 className='cardText'>{passData?.routeFrom? passData.routeFrom : "Tollygunge Metro"}</h5>
            <IonIcon icon={transactionIcon} style={{fontSize:'40px', transform: "scaleY(-1)"}}></IonIcon>
            <h5 className='cardText'>{passData?.routeTo? passData.routeTo : "Gitanjali Park"}</h5>
          </div>
        </IonCardContent>
        <IonCardContent style={{'color':'white'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <h5 className='cardText'>Pick Up - {passData?.pickupTime? passData.pickupTime : "11:30"}</h5>
            <h5 className='cardText'>Drop - {passData?.dropTime? passData.dropTime : "19:30"}</h5>
          </div>
        </IonCardContent>
    </IonCard>
    <IonCard style={{borderRadius: '8px'}}>
        <IonCardContent >
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding:'10px'}}>
            <h5 className='cardTextGray'>Name</h5>
            <h5 className='cardTextGray'>Employee ID</h5>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding:'10px'}}>
            <h5 className='cardTextBlack'>{passData?.fullName? passData.fullName : "SUBHAJIT PAUL"}</h5>
            <h5 className='cardTextBlack'>{passData?.employeeId? passData.employeeId : "1594206"}</h5>
          </div>
        </IonCardContent>
        <IonCardContent >
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding:'10px'}}>
            <h5 className='cardTextGray'>Bus Stop Name</h5>
            <h5 className='cardTextGray'>Route Type</h5>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding:'10px'}}>
            <h5 className='cardTextBlack'> {passData?.boardingFrom? passData.boardingFrom : "Garia More"}</h5>
            <h5 className='cardTextBlack'>Both</h5>
          </div>
        </IonCardContent>
        <IonCardContent >
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding:'10px'}}>
            <h5 className='cardTextGray'>Start Date</h5>
            <h5 className='cardTextGray'>End Date</h5>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding:'10px'}}>
            <h5 className='cardTextBlack'>{passData?.startDate? passData.startDate : "1st Aug, 2023"}</h5>
            <h5 className='cardTextBlack'>{passData?.endDate? passData.endDate : "31st Aug, 2023"}</h5>
          </div>
        </IonCardContent>
        <IonCardContent>
          <div style={{padding:'20px', textAlign:'center'}}>
          <h5 className='cardTextBlack'>Route: {passData?.route? passData.route : "Tollygunge Metro To Gitanjali Park And Return Via-Patuli More"}</h5>
          </div>
        </IonCardContent>
    </IonCard>
    </IonContent>
    <IonFooter style={{transform: "translateY(18px)"}}>
      <IonImg src={tcslogo} alt='Company Logo' style={{height: '100px'}}></IonImg>
    </IonFooter>
  </IonPage>
  );
};

export default Tab1;
