import React, { useContext, useEffect, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { PassContext } from '../App';

export interface formData {
  fullName?: string | undefined,
  employeeId?: string | undefined,
  boardingFrom?: string | undefined,
  startDate?: string | undefined,
  endDate?: string | undefined,
  pickupTime?: string | undefined,
  dropTime?:string|undefined,
  routeFrom?: string | undefined,
  routeTo?: string | undefined,
  route?: string | undefined
}

const Tab3: React.FC = () => {
  let testdata = {"key": "value"};
  const [ formData, setFormData ] =  useState<formData>({})
  const {passData, setPassData } = useContext(PassContext)

  useEffect(()=> {
    if(passData!= undefined){
      testdata = passData
      //console.log(testdata)
    }
  },)

    function handleChange(event: any) {
        const { name, value } = event.target;
        //console.log(name)
        //console.log(value)
        setFormData({...formData, [name]: value})
        
    }
    function handleInputChange(event: any){
      const { name, value } = event.target;
      testdata[name as keyof typeof testdata] = value
    }

    function handleSubmit(){
        //console.log(testdata)
        setPassData(testdata)
    }
  return (
    <IonPage>
      <IonContent>
        <form>
    <IonList>
    <IonItem>
        <IonInput label="Route From" name="routeFrom" placeholder="Enter Route Starting point" value={passData?.routeFrom?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Route To" name="routeTo" placeholder="Enter Enter Route Destination" value={passData?.routeTo?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Full Name" name="fullName" placeholder="Enter Full Name" value={passData?.fullName?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>

      <IonItem>
      <IonInput label="Employee Id" name="employeeId" placeholder="Employee Id" value={passData?.employeeId?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="Boarding From" name="boardingFrom" placeholder="Enter the Bus stop you board from" value={passData?.boardingFrom?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>

      <IonItem>
      <IonInput label="Start Date" name="startDate" placeholder="Enter Pass start date" value={passData?.startDate?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>

      <IonItem>
      <IonInput label="End Date" name="endDate" placeholder="Enter Pass End date" value={passData?.endDate?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>

      <IonItem>
      <IonInput label="Pick up" name="pickupTime" placeholder="Enter pick up time" value={passData?.pickupTime?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem>

      <IonItem>
      <IonInput label="Drop" name="dropTime" placeholder="Enter Drop time" value={passData?.dropTime?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem> 
      <IonItem>
      <IonInput label="Route" name="route" placeholder="Enter Route full Text" value={passData?.route?? ""} onIonInput={handleInputChange}></IonInput>
      </IonItem> 
        <IonButton type="button" onClick={handleSubmit}>Submit</IonButton>
    </IonList>
    </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
