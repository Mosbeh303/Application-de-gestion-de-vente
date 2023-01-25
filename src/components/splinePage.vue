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
    <vue3-chart-js v-bind="{ ...barChart }" />
  </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import {  IonPage,IonContent,IonBackButton} from '@ionic/vue';
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
     name: 'splinePage',
  components:  {
    IonPage,IonContent,IonBackButton,Vue3ChartJs
    
  },
  setup() {
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            min: -100,
            max: 100,
            ticks: {
              callback: function (value) {
                return `${value}%`;
              },
            },
          },
        },
      },
      data: {
        labels: ["VueJs",  "ReactJs", "AngularJs"],
        datasets: [
          {
            label: "My First Dataset",
            backgroundColor: [ "#1abc9c", "#1abc9c", "#1abc9c"],
            data: [40, 20, 50, 10],
          },
       
        ],
      },
    };

    return {
      barChart,
    };
  },
    
}
</script>