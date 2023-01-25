<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons >
          <ion-back-button  default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" v-if="livraisonJournaliere">
      <ion-item>
        <ion-icon :icon="basket" color="primary"></ion-icon>
        <ion-label class="ion-text-wrap">
          
            <strong>
              {{ livraisonJournaliere.categoryArticle }} {{ livraisonJournaliere.typeArticle}}
            </strong>
            <span class="date">
              <ion-note>Livré le {{ date}} à {{heure}}</ion-note>
            </span>
          
         
        </ion-label>
      </ion-item>
   <div class="ion-padding">
     
         <ion-item>
         <ion-label> Quantite : <strong>{{livraisonJournaliere.qte}}</strong></ion-label>
        </ion-item>
         <ion-item>
         <ion-label> Prix Achat : <strong>{{livraisonJournaliere.totalAchat}}</strong></ion-label>
        </ion-item>
        <ion-item>
         <ion-label> Prix Vente : <strong>{{livraisonJournaliere.totalVente}}</strong></ion-label>
        </ion-item>
          <ion-item>
         <ion-label> Retour : <strong>{{livraisonJournaliere.retour}}</strong></ion-label>
        </ion-item>
        <ion-item>
         <ion-label> Bénefice : <strong>{{livraisonJournaliere.benefice}}</strong></ion-label>
        </ion-item>
       
        
   </div>
     
      <ion-item>
       <ion-label class="ion-text-wrap">
          
           
            <span class="date">
              <ion-note>Modifié le {{ date}} à {{heure}}</ion-note>
            </span>
          
         
        </ion-label>
      
      </ion-item>
    </ion-content>
  </ion-page>
</template>
<script >
import {  IonPage,IonContent,IonBackButton} from '@ionic/vue';
import axios from 'axios';
import{basket}from "ionicons/icons";

export default {
     name: 'showDelivery',
  components:  {
    IonPage,IonContent,IonBackButton
    
  },
  created() {
     axios.get("http://127.0.0.1:8000/api/livraisonJournaliere/"+this.id).then((response) => {
  
      this.livraisonJournaliere = response.data;
  
      
    });
  },
  data() {
    return {
      id : this.$route.params.id,livraisonJournaliere:[],basket,
      date:this.$route.params.date,heure:this.$route.params.heure,
      heureModification:this.$route.params.heureModification,
      dateModification:this.$route.params.dateModification,

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