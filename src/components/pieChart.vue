<template>
  <ion-page>
    <ion-header :translucent="true" >
      <ion-toolbar color="custom" >
      <ion-buttons>
            <ion-back-button  default-href="/folder/Articles" >Back</ion-back-button>
            <ion-title>Acceuil</ion-title>
            </ion-buttons> 
    </ion-toolbar>
        </ion-header>
        <ion-content>
      
   <div >
    <vue3-chart-js v-bind="{ ...pieChart }" />
  </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import {  IonPage,IonContent,IonBackButton} from '@ionic/vue';

export default {
  name: "App",
  components: {
    Vue3ChartJs, IonPage,IonContent,IonBackButton
  },
  setup() {
    const pieChart = {
      type: "pie",
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
    };

    return {
      pieChart,
    };
  },
};
</script>
