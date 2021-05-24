<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Information</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding ">
      <h3 class="ion-justify-content-center">Application Created by</h3>
        <ion-item target="blank" href="http://cristiantorresalfaro.blogspot.com/">
          <ion-label>
            Cristian Torres
          </ion-label>
        </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>