import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import './NewItem2.css';

const NewItem2: React.FC = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/home'/>
          </IonButtons>
          <IonTitle>New Item 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>
        <p>Next Grid</p>
      <b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
      <IonGrid>
        <IonRow>
          <IonCol push-sm="6">1</IonCol>
          <IonCol pull-sm="6">2</IonCol>
        </IonRow>
      </IonGrid>

      <b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol push-md="3">2</IonCol>
          <IonCol push-md="3">3</IonCol>
          <IonCol pull-md="6">4</IonCol>
        </IonRow>
      </IonGrid>

      <b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
      <IonGrid>
        <IonRow>
          <IonCol push="6" push-lg="10">1</IonCol>
          <IonCol push="6" push-lg="6">2</IonCol>
          <IonCol push="6" push-lg="2">3</IonCol>
          <IonCol pull="6" pull-lg="2">4</IonCol>
          <IonCol pull="6" pull-lg="6">5</IonCol>
          <IonCol pull="6" pull-lg="10">6</IonCol>
        </IonRow>
      </IonGrid>      
      </IonContent>
    </IonPage>
  );
};
export default NewItem2;