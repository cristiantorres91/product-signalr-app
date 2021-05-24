<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-list-header lines="inset">
          <ion-label>Products</ion-label>
        </ion-list-header>
      <div v-for="item in dataApi" :key="item.id" >
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem, } from '@ionic/vue';
import { ref, onMounted } from "vue";
export default  {
  name: 'Tab1',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage,
   IonList,
  IonListHeader,
  IonLabel,
  IonItem,},

    setup() {
    const dataApi = ref([]);
    //metodo para obtener la data de la api
    const getData = async () => {
      try {
        const response = await fetch(
          "http://localhost:55802/api/Product"
        );
        dataApi.value = await response.json();
        console.log(dataApi.value);
      } catch (error) {
        console.log(error);
      }
    };
    //llamamos metodo para cargar la data
    onMounted(() => {
      getData();
    });
    return {
      dataApi,
      getData,
    };
    
  }
}
</script>