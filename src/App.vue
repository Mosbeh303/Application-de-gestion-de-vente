<template>

  <ion-app>
    <ion-page>
      <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
  
            <ion-menu-toggle   auto-hide="false" v-for="(p, i) in appPages" :key="i" >
              
           
              <ion-item @click="selectedIndex =
               i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated"
                :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}  </ion-label>
              </ion-item>
            
            </ion-menu-toggle>
          
  
          
        </ion-content>
                      
  <ion-toolbar  color="favorite">
    
<ion-button  color="favorite"><ion-icon :icon="logoAndroid" color="secondary"></ion-icon
        >
        
        </ion-button>
        <ion-button  color="favorite"><ion-icon :icon="logoApple" color="secondary"></ion-icon
        >
        
        </ion-button>
          <ion-button  color="favorite"><ion-icon :icon="logoGoogle" color="secondary"></ion-icon
        >
        
        </ion-button>
          
        
        
  </ion-toolbar>
  

      </ion-menu>
      <ion-router-outlet id="main-content">

      </ion-router-outlet>

    </ion-split-pane>

    </ion-page>
  </ion-app>
  
</template>

<script lang="ts">
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { archiveOutline,logoAndroid,logoApple,logoGoogle,listCircleSharp,cash, logoUsd,home,archiveSharp,cashOutline, bookmarkOutline, bookmarkSharp,basket, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    IonContent, 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonMenu, 
    IonMenuToggle, 
    IonRouterOutlet, 
    IonSplitPane,
  },
 
  setup() {
    const selectedIndex = ref(0);
     const appPages = [
       
      {
        title: 'Articles',
        url: '/folder/Articles',
        iosIcon: listCircleSharp,
        mdIcon: listCircleSharp
      },
      {
        title: 'Livraisons',
        url: '/folder/Livraisons',
        iosIcon: basket,
        mdIcon: basket
      },
      {
        title: 'D??pences',
        url: '/folder/D??pences',
        iosIcon: cashOutline,
        mdIcon: cashOutline
      },
       {
        title: 'B??nefices',
        url: '/folder/B??nefices',
        iosIcon: cash,
        mdIcon: cash
      },
      {
        title: 'Recettes',
        url: '/folder/Recettes',
        iosIcon: logoUsd,
        mdIcon: logoUsd
      }
     
      
    ];
    
    const path = window.location.pathname.split('fold??er/')[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    
    const route = useRoute();
    
    return { 
      selectedIndex,
      appPages, 
      archiveOutline,listCircleSharp,cash,
      archiveSharp, home,
      bookmarkOutline, 
      bookmarkSharp, 
      basket,
      paperPlaneOutline, 
      paperPlaneSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp,cashOutline,logoUsd,logoAndroid,logoApple,logoGoogle,
    }
  }
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}


ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}


ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}


ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

</style>
