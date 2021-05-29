<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-list-header lines="inset">
          <ion-label>Products</ion-label>
        </ion-list-header>
        <div v-for="item in dataApi" :key="item.id">
          <ion-item>
            <ion-label>
              <h2>{{ item.name }}</h2>
              <h3>{{ item.category }}</h3>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>
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
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  alertController 
} from "@ionic/vue";
import { ref, onMounted } from "vue";
import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import api from "../api-endpoint";
export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
  },

  setup() {
    const dataApi = ref([]);
    //method get data from api
    const getData = async () => {
      try {
        const response = await fetch(`${api}/api/product`);
        dataApi.value = await response.json();
        console.log(dataApi.value);
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(async() => {
      getData();

      //connection hub backend
      const connection = new HubConnectionBuilder()
        .withUrl(`${api}/product-hub`)
        .build();

      //show alert add product
      connection.on("NewProduct",async(product: {name: string; category: string; price: number}) => {
          const alert = await alertController
            .create({
              cssClass: 'my-custom-class',
              header: 'New Product',
              subHeader: product.name,
              message: JSON.stringify(product,null,'\t'),
              buttons: ['OK'],
            });
          await alert.present();

          getData();
      });
      connection.start();
    });
    return {
      dataApi,
      getData,
    };
  },
};
</script>
