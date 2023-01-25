<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="custom">
       <ion-buttons slot="start">
            <ion-menu-button autoHide="true"></ion-menu-button>
  </ion-buttons>
       <ion-title color="favorite">Bussiness Controll</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" >
      <ion-item>
        <ion-icon :icon="home" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap">
          
            <strong>
            Bienvenue a Bussiness Controll manager app
            </strong>
           
          
         
        </ion-label>
      </ion-item>
   <div class="ion-padding">
     
         <ion-item>
         <p>
         pour plus d'informations contacter nous via <ion-label >b_c_m@outlook.fr</ion-label>
         </p>
        </ion-item>
       
       
        
   </div>
     
    
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {  IonPage,IonContent} from '@ionic/vue';
import{home}from "ionicons/icons";

export default {
     name: 'showDelivery',
  components:  {
    IonPage,IonContent
    
  },
 
  data() {
    return {
      home,
     
    }
  },
  
    
}
</script>
<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>