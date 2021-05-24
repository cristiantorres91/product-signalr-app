<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Product</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-xs="12" size-sm="6" size-md="6" size-lg="6">
          <form @submit.prevent="onSubmit">
            <ion-item>
              <ion-label position="floating">Name</ion-label>
              <ion-input v-model="name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Category</ion-label>
              <ion-input v-model="category"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Price</ion-label>
              <ion-input type="number" v-model="price"></ion-input>
            </ion-item>
            <div class="ion-text-center ion-padding-top">
              <ion-button type="submit" color="success" shape="round"
                >Add
              </ion-button>
            </div>
          </form>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  loadingController,
} from "@ionic/vue";
import { ref } from "vue";
export default {
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },

  setup() {
    const name = ref("");
    const category = ref("");
    const price = ref("");
    const onSubmit = async () => {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
        message: "Add...",
      });
      await loading.present();

      console.log(name.value);


      await loading.dismiss();
    };
    return {
      name,
      category,
      price,
      onSubmit,
    };
  },
};
</script>
