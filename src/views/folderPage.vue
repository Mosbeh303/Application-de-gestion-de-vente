<template>
  <ion-page>
    <ion-header :translucent="true" >
      <ion-toolbar color="custom" >
            
                <ion-buttons slot="start">
            <ion-menu-button autoHide="true"></ion-menu-button>
   
       <div class="ion-padding">
       <strong ><ion-label color="favorite">{{this.pageTitle}}</ion-label></strong>
       </div>
     
    
  </ion-buttons>
  <ion-row>
  
           
  
  
    <ion-col><div class="ion-text-end">
       <ion-button v-if="this.pageTitle==='Recettes'"  class="customButton" @click="() => router.push('/splineChart')"  color="favorite"><ion-icon :icon="home" color="secondary"></ion-icon
        ></ion-button>
          <ion-button v-if="this.pageTitle==='Bénefices'"  class="customButton" @click="() => router.push('/pieChart')"  color="favorite"><ion-icon :icon="home" color="secondary"></ion-icon
        ></ion-button>
       
       </div>
            
        </ion-col>

  </ion-row>
   
          
       
       
       

        
       
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">


       <ion-list>
               <ion-item  v-if="this.pageTitle==='Articles'">
        <ion-button  color="success" @click="openAlert()"><ion-icon :icon="addOutline"></ion-icon
        ></ion-button>
      
      </ion-item>
           
             <ion-item  v-if="this.pageTitle==='Livraisons' " >
               <ion-button  color="success"  id="trigger-button"   >
                 <ion-icon :icon="addOutline"></ion-icon></ion-button>
               
     
       
      </ion-item>


         <ion-item  v-if="this.pageTitle==='Dépences'">
        <ion-button color="success" @click="openAlert()"><ion-icon :icon="addOutline"></ion-icon
        ></ion-button>
      </ion-item>
      

       <ion-item  v-if="this.pageTitle==='Recettes'">
        <ion-button  @click="genererRecettes()"><ion-icon :icon="cloudDownloadOutline"></ion-icon
        ></ion-button>
      </ion-item>
       <ion-item  v-if="this.pageTitle==='Bénefices'">
        <ion-button  @click="genererBenefices()"><ion-icon :icon="cloudDownloadOutline"></ion-icon
        ></ion-button>
      </ion-item>
            </ion-list>





         <div >
    
      
      
      

    
      
  </div>
  
 <div v-if="this.pageTitle==='Articles'">
  
  <ion-item>
      <ion-label>Categorie article</ion-label>
      <ion-select v-model="selectedArticle"   placeholder="Choisir une categorie"  interface="popover">
        <ion-select-option v-for="(item, index) in distinctArticles" :key="index" 
           :value="item" >{{item}}</ion-select-option>
      </ion-select>
</ion-item>
         <div v-if="selectedArticle===''">
            <ion-grid  >

                <ion-row >
        <ion-col><strong>Label</strong> </ion-col>
        
        <ion-col><strong>Prix Achat</strong></ion-col>
        <ion-col><strong>Prix Vente</strong></ion-col>
<ion-col></ion-col><ion-col></ion-col>
        
        

      </ion-row>
            </ion-grid>
           
  
           
             <ion-grid v-for="article in articles" :key="article.id">
    
     
      
      <ion-row >
       <ion-col>{{article.category}}  {{article.type}}  </ion-col> 
   
        <ion-col>{{article.prix}} </ion-col>
                <ion-col>{{article.prix_vente}} 
                </ion-col>
<ion-col>
<ion-button  class="customButton" color="secondary"  @click="alertUpdateArticle(article.category , article.prix,article.prix_vente,article.type,article.id)">      <ion-label ><ion-icon :icon="create"></ion-icon
        ></ion-label>
      </ion-button>
  </ion-col>
     <ion-col >
      <ion-button  class="customButton" color="danger" @click="openConfirmAlert(article.id)">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
      
</ion-col>
        
      
    
      </ion-row>
    </ion-grid>

         </div>           
         <div v-if="selectedArticle !==''">
            <ion-grid  >

                <ion-row >
        <ion-col><strong>Type</strong> </ion-col>
        <ion-col><strong>Prix Achat</strong></ion-col>
        <ion-col><strong>Prix Vente</strong></ion-col>

        
        <ion-col></ion-col>

      </ion-row>
            </ion-grid>
           
  
           
             <ion-grid v-for="article in articles" :key="article.id">
    
     
      
      <ion-row v-if="selectedArticle===article.category">
      <ion-col>{{article.type}} </ion-col>
   
        <ion-col>{{article.prix}} </ion-col>
                <ion-col>{{article.prix_vente}} </ion-col>

        
    
       
  <ion-col>

      <ion-button  class="customButton" color="secondary"  @click="alertUpdateArticle(article.category , article.prix,article.prix_vente,article.type,article.id)">      <ion-label ><ion-icon :icon="create"></ion-icon
        ></ion-label>
      </ion-button>
     
      <ion-button  class="customButton" color="danger" @click="openConfirmAlert(article.id)">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
 </ion-col>
       
    
      </ion-row>
    </ion-grid>

         </div>

 </div>
        


            

          
          
           
    
  
  <div v-if="this.pageTitle==='Livraisons' ">
  
  
    <ion-item>
      <ion-label>Categorie article</ion-label>
      <ion-select v-model="selectedDelivery"   placeholder="Choisir une categorie"  interface="popover">
      <div v-for="(item, index) in distinctCategories" :key="index">
       <ion-select-option  v-if="this.existedCategories.includes(item.label)"  
           :value="item.label" >{{item.label}}</ion-select-option>
      </div>
       
      </ion-select>
</ion-item>

    <div v-if="selectedDelivery ===''">
    <ion-grid >
       
        <ion-row >
    <ion-col><strong>Label</strong></ion-col>

     <ion-col><strong>Quantite</strong></ion-col>
   
     
     
              


    <ion-col><strong>Date</strong> </ion-col>
        <ion-col></ion-col><ion-col></ion-col><ion-col></ion-col><ion-col></ion-col>
  </ion-row>
    
    </ion-grid>
<ion-grid v-for="livraisonJournaliere in livraisonJournalieres" :key="livraisonJournaliere.id">
 
<ion-row >
        <ion-col >{{livraisonJournaliere.categoryArticle}}   {{livraisonJournaliere.typeArticle}}</ion-col> 

       <ion-col >{{livraisonJournaliere.qte}} </ion-col>   
  
   <ion-col > {{ livraisonJournaliere.created_at.substring(5, 10)  }}  </ion-col> 
       <ion-col>
        <router-link
            :to="{
              name: 'showDelivery',
              params: {
                id: livraisonJournaliere.id,
                date: livraisonJournaliere.created_at.substring(0, 10),
                heure: livraisonJournaliere.created_at.substring(11, 16),
                dateModification: livraisonJournaliere.updated_at.substring(0, 10),
                heureModification: livraisonJournaliere.updated_at.substring(11, 16),

              },
            }"
          >
            <ion-button    class="customButton" color="success" >
          <ion-label ><ion-icon :icon="eye"></ion-icon
        ></ion-label>
      </ion-button>
          </router-link>
       
      
       
      </ion-col>
 <ion-col>

      <ion-button  class="customButton" color="secondary" @click="alertUpdateDelivery(livraisonJournaliere.id,livraisonJournaliere.qte)">      <ion-label ><ion-icon :icon="create"></ion-icon
        ></ion-label>
      </ion-button>
    
    
 </ion-col>
 <ion-col>
        <ion-button @click="ajouterRetour(livraisonJournaliere.id)"  class="customButton"  >
          <ion-label ><ion-icon :icon="returnUpBackSharp"></ion-icon
        ></ion-label>
      </ion-button>
      </ion-col>
  <ion-col>
     <ion-button  class="customButton" color="danger" @click="openConfirmAlert(livraisonJournaliere.id)">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
      
     </ion-col>
      
  
       
      </ion-row>
</ion-grid>

    </div>
<div v-if="selectedDelivery !==''">
<ion-grid >
       
        <ion-row >
    <ion-col><strong>Type</strong></ion-col>

     <ion-col><strong>Quantite</strong></ion-col>
     
              


    <ion-col><strong>Date</strong> </ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
  </ion-row>
    
    </ion-grid>
<div v-for="livraisonJournaliere in livraisonJournalieres" :key="livraisonJournaliere.id">
<ion-grid v-if="filterDelivery() &&  delivredArticlesIds.includes(livraisonJournaliere.article_id) " >
 

  
<ion-row >
        <ion-col >{{livraisonJournaliere.categoryArticle}}   {{livraisonJournaliere.typeArticle}}</ion-col> 

       <ion-col >{{livraisonJournaliere.qte}} </ion-col>   
  
   <ion-col > {{ livraisonJournaliere.created_at.substring(5, 10)  }}  </ion-col> 
       <ion-col>
        <router-link
            :to="{
              name: 'showDelivery',
              params: {
                id: livraisonJournaliere.id,
              },
            }"
          >
            <ion-button    class="customButton" color="success" >
          <ion-label ><ion-icon :icon="eye"></ion-icon
        ></ion-label>
      </ion-button>
          </router-link>
       
      
       
      </ion-col>
 <ion-col>

      <ion-button  class="customButton" color="secondary" @click="alertUpdateDelivery(livraisonJournaliere.id,livraisonJournaliere.qte)">      <ion-label ><ion-icon :icon="create"></ion-icon
        ></ion-label>
      </ion-button>
    
    
 </ion-col>
 <ion-col>
        <ion-button @click="ajouterRetour(livraisonJournaliere.id)"  class="customButton"  >
          <ion-label ><ion-icon :icon="returnUpBackSharp"></ion-icon
        ></ion-label>
      </ion-button>
      </ion-col>
  <ion-col>
     <ion-button  class="customButton" color="danger" @click="openConfirmAlert(livraisonJournaliere.id)">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
      
     </ion-col>
      
  
       
      </ion-row>

</ion-grid>

</div>
</div>
  </div>
    
<ion-grid v-if="this.pageTitle==='Bénefices'">
 <ion-row>
     <ion-col><strong>Article</strong> </ion-col>

    <ion-col><strong>Montant</strong> </ion-col>
        <ion-col><strong>Date</strong> </ion-col>
        <ion-col></ion-col>


  </ion-row>      
</ion-grid>
<ion-grid v-for="benefice in benefices" :key="benefice.id">
 

      <ion-row v-if="this.pageTitle==='Bénefices'" >
       <ion-col >{{benefice.articleLabel}} </ion-col>   
       <ion-col >{{benefice.montant}} </ion-col>   
              <ion-col > {{ benefice.created_at.substring(5, 10)  }}  </ion-col> 
              <ion-col>
               
     
      <ion-button  class="customButton" color="danger" @click="openConfirmAlert(benefice.id)">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
              </ion-col>
          
      </ion-row>
    </ion-grid>
    <ion-grid v-if="this.pageTitle==='Dépences'">
<ion-row >
    <ion-col><strong>Nom</strong></ion-col>
    <ion-col><strong>Prix</strong></ion-col>
    <ion-col><strong>Date</strong></ion-col>
    <ion-col></ion-col><ion-col></ion-col>


  </ion-row> 
    </ion-grid>
<ion-grid v-for="depence in depences" :key="depence.id" >
       

      <ion-row  v-if="this.pageTitle==='Dépences'">
       <ion-col >{{depence.label}} </ion-col>    
          <ion-col >{{depence.prix}} </ion-col> 
  <ion-col > {{ depence.created_at.substring(5, 10)  }}  </ion-col> 
  <ion-col>
  <ion-button  class="customButton" color="secondary" @click="alertUpdateDepence(depence.label,depence.prix,depence.id)" >
        <ion-label ><ion-icon :icon="create"></ion-icon
        ></ion-label>
      </ion-button>
  </ion-col>
       <ion-col>
      
      <ion-button  class="customButton" color="danger" @click="openConfirmAlert(depence.id)">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
       </ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid v-if="this.pageTitle==='Recettes'">
        <ion-row >
    <ion-col><strong>Montant</strong></ion-col>
    <ion-col><strong>Date</strong></ion-col>
   <ion-col></ion-col>
   <ion-col></ion-col>


  </ion-row>    
    </ion-grid>
<ion-grid  v-for="recette in recettes" :key="recette.id" >
   

      <ion-row v-if="this.pageTitle==='Recettes'">
       <ion-col >{{recette.montant}} </ion-col>   
         <ion-col > {{ recette.created_at.substring(5, 10)  }}  </ion-col> 
         
 <ion-col>
   
      <ion-button  class="customButton" color="secondary" @click="alertUpdateRecette(recette.montant,recette.id)">
        <ion-label ><ion-icon :icon="create"></ion-icon
        ></ion-label>
      </ion-button>
     

 </ion-col>
 <ion-col>
  <ion-button  color="danger" @click="openConfirmAlert(recette.id)"  class="customButton">
          <ion-label ><ion-icon :icon="trash"></ion-icon
        ></ion-label>
      </ion-button>
 </ion-col>
      </ion-row>
   
</ion-grid>











<ion-modal  trigger="trigger-button"   >
  <ion-page>
    <ion-header>
   
      <ion-toolbar  >
        <ion-row>
          <ion-col>
            <div class="ion-text-start">
        <h3>Nouvelle livraison</h3></div>
          </ion-col>
                    <ion-col>
                       <div class="ion-text-end">
         
<ion-button    color="light"  @click="closeModal()" style="text-align: left" >
                 <ion-icon color="danger"  :icon="closeCircle"></ion-icon></ion-button>
      </div>
                    </ion-col>

        </ion-row>
 
       
     

      </ion-toolbar>
     
  

    </ion-header>
<ion-content>
  <div>
    <ion-grid >
                <ion-row >
        <ion-col>
          <ion-list>

  <ion-radio-group  v-model="articleToDeliver" >
    
      <ion-col v-for="(da, i) in distinctArticles" :key="i">
        <ion-item  >
          <ion-label >
            {{ da }}
          </ion-label>
          <ion-radio slot="start" :value="da"></ion-radio>
        </ion-item>
      </ion-col>
       
    
  </ion-radio-group>
</ion-list>
           </ion-col>
   
           
 <ion-col >
            
<div v-for="(article, index) in articles" :key="index" >
<ion-item   v-if="this.articleToDeliver===article.category">
          <ion-label >{{article.type}}</ion-label>
          <ion-input   v-model="ArticletypeQTE[index]" >

          </ion-input>
        </ion-item>
       
</div>

     <ion-button @click="livrer()" v-if="articleToDeliver!=''">livrer</ion-button>

      </ion-col>
 

         
      </ion-row>
     </ion-grid>
     
  </div>
 
    
  </ion-content>
    


    
  </ion-page>
    
               
   
</ion-modal>
    
    </ion-content>
   

  </ion-page>
  
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { IonModal, IonButton,IonInput,IonRadio,IonList,IonRadioGroup,toastController ,IonButtons,IonSelect,IonSelectOption,IonItem, IonContent,IonHeader, IonPage, IonToolbar,alertController,modalController,IonRow,IonCol } from '@ionic/vue';
 import { useRouter } from 'vue-router';
import{addOutline,create,eye,trash,home,logoAndroid,logoApple,logoGoogle,informationCircle ,closeCircle, checkbox,returnUpBackSharp,cloudDownloadOutline}from "ionicons/icons";
import axios from 'axios';
export default defineComponent ({
   name: 'folderPage',
  components:  {
    IonSelect,IonSelectOption,IonModal, IonButton,
    IonContent,IonItem,
    IonHeader,IonInput,IonRadio,IonList,IonRadioGroup ,
    IonPage,
    IonToolbar,IonRow,IonCol
  }
  ,
     setup() {
      const router = useRouter();
      return { router };
    }
    ,
  created() { 

    


   if (this.pageTitle==='Livraisons') {
 axios.get("http://127.0.0.1:8000/api/distinctArticles").then((response) => {
  
      this.distinctArticles = response.data;

   
      
    });


       axios.get("http://127.0.0.1:8000/api/distinctCategories").then((response) => {
  
      this.distinctCategories = response.data;
      
    });
         axios.get("http://127.0.0.1:8000/api/livraisonJournalieres").then((response) => {
  
      this.livraisonJournalieres = response.data;
      this.livraisonJournalieres.forEach(LVJ => {
  if (!this.existedCategories.includes(LVJ['categoryArticle'])) {
     this.existedCategories.push(LVJ['categoryArticle']); 
  }
 
});
      
    });
   
       axios.get("http://127.0.0.1:8000/api/articles").then((response) => {
  
      this.articles = response.data;

   
      
    });
   }
      
    
    
   
    if (this.pageTitle==="Articles") {
      axios.get("http://127.0.0.1:8000/api/articles").then((response) => {
  
      this.articles = response.data;

   
      
    });
        axios.get("http://127.0.0.1:8000/api/distinctArticles").then((response) => {
  
      this.distinctArticles = response.data;

   
      
    });
    }
     
    
    if (this.pageTitle==="Dépences") {
        axios.get("http://127.0.0.1:8000/api/depences").then((response) => {
  
      this.depences = response.data;
      
    });
    }
    if (this.pageTitle==="Recettes") {
        axios.get("http://127.0.0.1:8000/api/recettes").then((response) => {
  
      this.recettes = response.data;
      
    });
    }
    
     if (this.pageTitle==="Bénefices" && this.benefices.length ===0 ) {
        axios.get("http://127.0.0.1:8000/api/benefices").then((response) => {
  
      this.benefices = response.data;
      
    });
    }
  }
  ,
  data() {
    return {
     returnUpBackSharp,cloudDownloadOutline, addOutline,create,trash,home,logoAndroid,logoApple,logoGoogle,closeCircle,informationCircle,eye,
      labelArticle:'',prixArticle:0,labelDepence:'',prixDepence:0,
      articles:[],depences:[],livraisonJournalieres:[],benefices:[],recettes:[],montantRecette:0,
      pageTitle:this.$route.params.id,articleToUpdateLabel:[],selectedDelivery:'',distinctCategories:[]
      ,delivredArticles:[],delivredArticlesIds:[], articleToDeliver : '',ArticletypeQTE:[],
     qte:0,array:[],datesRecettes:[],selectedArticle:'',distinctArticles:[],existedCategories:[],
     articleLabels:[''],DeliveryToShow:[],retour:0,quantite :0,
    
   }
  },
 
  methods: {
async genererBenefices(){
 axios.post("http://127.0.0.1:8000/api/generateDailyEarnings/").then((resp) => {
        axios.get("http://127.0.0.1:8000/api/benefices").then((response) => {
  
      this.benefices = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 


},


async genererRecettes(){
    axios.post("http://127.0.0.1:8000/api/generateDailyEarning/").then(() => {
        axios.get("http://127.0.0.1:8000/api/recettes").then((response) => {
  
      this.recettes = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 

}
,


async showAlert(id:any) {
          this.DeliveryToShow = this.livraisonJournalieres.filter((liv: any) => liv.id === id);

const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modifier !',
      message :'jji'+':'+'kkkk',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
        
      ]
    });

    await alert.present();

},
async openToastDelivery() {
      const toast = await toastController
        .create({
          message: 'Le retour doit pas être superieur à la quantite livré',
          duration: 2500,
          position: 'top',
          color: 'danger',
        
        })
      
      return toast.present();
    },
async openToastDuplicatedArticle() {
      const toast = await toastController
        .create({
          header: 'Article existe',
          duration: 2500,
          position: 'top',
          color: 'danger',
         
          
        
        })
      
      return toast.present();
    },
async openToast() {
      const toast = await toastController
        .create({
          message: 'Livraison ajoutée avec succès',
          duration: 500,
          position: 'top',
          color: 'success',
        
        })
      
      return toast.present();
    },
    async openToastArticle() {
      const toast = await toastController
        .create({
          message: 'Article ajoutée avec succès',
          duration: 500,
          position: 'top',
          color: 'success',
        
        })
      
      return toast.present();
    },
   
    closeModal(){
    modalController.dismiss();
    },
  
    async livrer(){
       
    
            this.array= this.ArticletypeQTE.filter((qte: any) => qte!= "");

      axios.post("http://127.0.0.1:8000/api/livraisonJournaliereCreate", {

         
           ArticletypeQTE : this.array,
           ArticleCategory : this.articleToDeliver,
           
           
          
        }).then(() => {
            this.openToast();
         
         this.ArticletypeQTE.splice(0,this.ArticletypeQTE.length);
         axios.get("http://127.0.0.1:8000/api/livraisonJournalieres").then((response) => {
          
      this.livraisonJournalieres = response.data;
      this.livraisonJournalieres.forEach(LVJ => {
  if (!this.existedCategories.includes(LVJ['categoryArticle'])) {
     this.existedCategories.push(LVJ['categoryArticle']); 
  }
 
});
      })
        });
           
    },
   
 
 async  alertUpdateDelivery(id : any , qte : any ) {
   
 const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modifier Quantite ',
      inputs: [
        
       
         {
          type: 'text',
          value:qte ,
          name:'qte'
          
        }
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            

    axios.put("http://127.0.0.1:8000/api/livraisonJournaliereUpdate/"+id,
      {
        
       qte :data.qte,
      
     }).then(() => {
        axios.get("http://127.0.0.1:8000/api/livraisonJournalieres").then((response) => {
  
      this.livraisonJournalieres = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 
            }
          }
        
      ]
    });

    await alert.present();

 },
     async filterDelivery(){
       
   this.delivredArticles = this.livraisonJournalieres.filter((lv: any) =>lv.categoryArticle===this.selectedDelivery);
this.delivredArticlesIds.splice(0,this.delivredArticlesIds.length)
this.delivredArticles.forEach(lv => {
  this.delivredArticlesIds.push(lv['article_id']); 
});
 
return true;
},
   
 

async alertUpdateArticle(category:any , prix:any ,prix_vente,type:any, id:any) {
 
 const alert = await alertController.create({
      cssClass: 'my-custom-class',
      message: 'Modifier Article',





      inputs: [
        { 
          type: 'text',
          value:category ,
          name:'category',
          
         


          
          
        },
         {
          type: 'text',
          value: type,
          name:'type'
        },
        {
          type: 'text',
          value: prix,
          name:'prix'
        },
        {
          type: 'text',
          value: prix_vente,
          name:'prix_vente'
        }
       
       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {

    axios.put("http://127.0.0.1:8000/api/articleUpdate/"+id,
      {
        id,
       category :data.category,
       prix : data.prix , 
       prix_vente : data.prix_vente,  
       type:data.type,    
      
      
     }).then(() => {
        axios.get("http://127.0.0.1:8000/api/articles").then((response) => {
  
      this.articles = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 
               
      






            }
          }
        
      ]
    });

    await alert.present();
}

,

async alertUpdateRecette(montant:any ,  id:any) {
 
 const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modifier !',
      inputs: [
        {
          type: 'text',
          value:montant ,
          name:'montant'
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.montantRecette = data.montant;

    axios.put("http://127.0.0.1:8000/api/recetteUpdate/"+id,
      {
        id,
       montant :this.montantRecette,
      
     }).then(() => {
        axios.get("http://127.0.0.1:8000/api/recettes").then((response) => {
  
      this.recettes = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 
               
      






            }
          }
        
      ]
    });

    await alert.present();
}



,

async alertUpdateDepence(label:any ,  prix:any, id:any) {
 
 const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modifier !',
      inputs: [
        {
          type: 'text',
          value:label ,
          name:'label'
          
        },
         {
          type: 'text',
          value:prix ,
          name:'prix'
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.labelDepence = data.label;
            this.prixDepence = data.prix;

    axios.put("http://127.0.0.1:8000/api/depenceUpdate/"+id,
      {
        id,
       label :this.labelDepence,
       prix :this.prixDepence,

      
     }).then(() => {
        axios.get("http://127.0.0.1:8000/api/depences").then((response) => {
  
      this.depences = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 
         
            }
          }
        
      ]
    });

    await alert.present();
}



,

   
   async openConfirmAlert(id:any) {

 if (this.pageTitle==='Dépences') {
     



let alert = await alertController.create({
    message: 'vous-etes sur ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
       
      },
      {
        text: 'Confirmer',
        handler: () => {
           axios.delete(`http://127.0.0.1:8000/api/depence/${id}/delete`).then(() => {
                     this.depences= this.depences.filter((depence: any) => depence.id != id);

      });

      
      
        }
      }
    ]
  });
  await alert.present();











     }


     if (this.pageTitle==='Articles') {
       
  let alert = await alertController.create({
    message: 'vous-etes sur ?',
    inputs :[
       {
         name:'checkbox1',
         type : 'checkbox',
         label:'Détruire livraisons ',
         
         
         
         
       },
    ],
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
       
      },
      {
        text: 'Confirmer',
        handler: (data) => {

        if (data.length===0) {
                axios.delete(`http://127.0.0.1:8000/api/article/${id}/delete`).then(() => {
        this.articles= this.articles.filter((article: any) => article.id != id);
        
            axios.get("http://127.0.0.1:8000/api/distinctArticles").then((response) => {
  
      this.distinctArticles = response.data;

   
      
    });
        
      });

          
   
         
        } else {
                    

              axios.delete(`http://127.0.0.1:8000/api/livraisonJournaliere/${id}/deleteByAI`).then(() => {

        this.livraisonJournalieres= this.livraisonJournalieres.filter((liv: any) => liv.id != id);
        this.existedCategories.splice(0,this.existedCategories.length)
this.livraisonJournalieres.forEach(LVJ => {
  if (!this.existedCategories.includes(LVJ['categoryArticle'])) {
     this.existedCategories.push(LVJ['categoryArticle']); 
  }
 
});

 axios.delete(`http://127.0.0.1:8000/api/article/${id}/delete`).then(() => {
        this.articles= this.articles.filter((article: any) => article.id != id);
        
            axios.get("http://127.0.0.1:8000/api/distinctArticles").then((response) => {
  
      this.distinctArticles = response.data;

   
      
    });
        
      });
      });
      
      
   
         
        }
      
      
        }
      }
    ]
  });
  await alert.present();
  
     }

     if (this.pageTitle==='Livraisons') {
        let alert = await alertController.create({
    message: 'vous-etes sur ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
       
      },
      {
        text: 'Confirmer',
        handler: () => {
           axios.delete(`http://127.0.0.1:8000/api/livraisonJournaliere/${id}/delete`).then(() => {
        this.livraisonJournalieres= this.livraisonJournalieres.filter((liv: any) => liv.id != id);
        this.existedCategories.splice(0,this.existedCategories.length)
this.livraisonJournalieres.forEach(LVJ => {
  if (!this.existedCategories.includes(LVJ['categoryArticle'])) {
     this.existedCategories.push(LVJ['categoryArticle']); 
  }
 
});

      });

      
      
        }
      }
    ]
  });
  await alert.present();
  
     }
     if (this.pageTitle==='Recettes') {
       let alert = await alertController.create({
    message: 'vous-etes sur ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
       
      },
      {
        text: 'Confirmer',
        handler: () => {
           axios.delete(`http://127.0.0.1:8000/api/recette/${id}/delete`).then(() => {
        this.recettes= this.recettes.filter((recette: any) => recette.id != id);
        
      });

      
      
        }
      }
    ]
  });
  await alert.present();
  
     }
     if (this.pageTitle==='Bénefices') {
        let alert = await alertController.create({
    message: 'vous-etes sur ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
       
      },
      {
        text: 'Confirmer',
        handler: () => {
           axios.delete(`http://127.0.0.1:8000/api/benefice/${id}/delete`).then(() => {
        this.benefices= this.benefices.filter((benefice: any) => benefice.id != id);
        
      });

      
      
        }
      }
    ]
  });
  await alert.present();
  
     }
}
,
   



async ajouterRetour(id:any){



  axios.get("http://127.0.0.1:8000/api/livraisonJournaliere/"+id).then(async (rsp) => {
              this.retour= rsp.data.retour;

       if (this.retour===0) {
     const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Ajouter retour ' ,
          inputs: [
        { 
          name: 'retour',
          placeholder :'retour'
         
          
        }
      ],
          buttons: [
              {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
              }
            ,
            {
               text: 'ajouter',
               handler:(data) => { 
               this.retour = data.retour ;

this.livraisonJournalieres.forEach(lv => {
  if ( lv['id'] === id ) {
    this.quantite = lv['qte'];
  } 
});
 if (this.retour <= this.quantite) {
  
                    axios.put("http://127.0.0.1:8000/api/ajouterRetour/"+id,
      {
        id,
       retour :data.retour,
      
     }).then(() => {
              console.log(data.retour);

       
    
}).catch(error => {
    console.log(error);
}); 

  
 } else {
  this.openToastDelivery();
  
 }

             
                   }
              
            },
          ] ,

        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
 
  
   }
   else
   {
 const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Modifier retour ' ,
          inputs: [
        { 
          name: 'retour',
          value :this.retour,
         
          
        }
      ],
          buttons: [
              {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
              }
            ,
            {
               text: 'ajouter',
               handler:(data) => { 
                  this.retour = data.retour ;
                  this.livraisonJournalieres.forEach(lv => {
  if ( lv['id'] === id ) {
    this.quantite = lv['qte'];
  } 
});
if (this.retour <= this.quantite) {

                    axios.put("http://127.0.0.1:8000/api/ajouterRetour/"+id,
      {
        id,
       retour :data.retour,
      
     }).then(() => {
             console.log(data.retour);

       
    
}).catch(error => {
    console.log(error);
}); 
             
}
else {
this.openToastDelivery();
}

                   }
              
            },
          ] ,

        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
 
  
   }
    
}).catch(error => {
    console.log(error);
}); 
   
},






 async openAlert(): Promise<void> {





  if (this.pageTitle==='Dépences') {
     const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          message: 'Nouvelle Dépence' ,
          inputs: [
        { 
          name: 'labelDepence',
          placeholder: 'label',
         
          
        },
        { 
          name: 'prixDepence',
          placeholder: 'prix ',
         
          
        }
      ],
          buttons: [
              {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
              }
            ,
            {
               text: 'ajouter',
               handler:(data) => { 
                  this.labelDepence = data.labelDepence;
                  this.prixDepence = data.prixDepence;

                 
                  axios.post("http://127.0.0.1:8000/api/depenceCreate",
      {
      labelDepence:this.labelDepence,
      prixDepence:this.prixDepence,

      
     }).then(resp => {
        axios.get("http://127.0.0.1:8000/api/depences").then((response) => {
  
      this.depences = response.data;})
       
    
}).catch(error => {
    console.log(error);
}); 
               
            
          }
              
            },
          ] ,

        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
 
  }



  if (this.pageTitle==='Articles') {
     const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          message: 'Nouveau Article' ,
          inputs: [
        { 
          name: 'category',
          placeholder: 'categorie',
         
          
        },
        { 
          name: 'type',
          placeholder: 'type ',
         
          
        },
        { 
          name: 'prix',
          placeholder: 'prix achat',
         
          
        },
        { 
          name: 'prix_vente',
          placeholder: 'prix vente ',
         
          
        }
         
      ],
          buttons: [
            
                {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
              }
            ,
            {
               text: 'ajouter',
               handler:(data) => { 
               this.articleLabels.splice(0,this.articleLabels.length)
this.articles.forEach(article => {
  this.articleLabels.push(article['category']+' '+article['type']); 
});

if ( this.articleLabels.includes(data.category+' '+data.type)
) {
  
  this.openToastDuplicatedArticle();
} else {
                    axios.post("http://127.0.0.1:8000/api/articleCreate",
      {
      category:data.category,
      prix:data.prix,
      type:data.type,
      prix_vente:data.prix_vente,
      

      
     }).then(resp => {

this.openToastArticle();
       
     axios.get("http://127.0.0.1:8000/api/articles").then((response) => {
  
      this.articles = response.data;

      
    });
}).catch(error => {
    console.log(error);
}); 
   
}




            
            
          }
              
            },
          ] ,

        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
 
  }
      
    }
  










  },
}
) 
</script>

<style scoped>
 .customButton {
--padding-start: 10px;
  --padding-end: 10px;
  height: 27px;
 }
 
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}



</style>