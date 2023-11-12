<template>
   <div class="container mt-5" >
    <div class="row pt-3" >
      <div class="col">
        <div>
          <DataChooserModal v-if="modalActive === 1" @close="toggleModal" :modalActive="modalActive" />
          <ForecastModal v-else-if="modalActive === 2" @close="toggleModal" :modalActive="modalActive" />
          <h4 style="text-align: left; padding-left: 48px; padding-top: 10px; margin-bottom: -5px;">
            Conntected Data
          </h4>
          <div class="mt-2 ml-1 box-big col" @click="toggleModal('1')">
            Conntected Data
            <input class="row" type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label class="row" for="jack">Jack</label>

            <input class="row" type="checkbox" id="john" value="John" v-model="checkedNames">
            <label class="row" for="john">John</label>

            <input class="row" type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label class="row" for="mike">Mike</label>
          </div>
        </div>
      </div>
      <div class="col">
        <div>
          <h4 style="text-align: left; padding-left: 40px; padding-top: 10px; margin-bottom: -10px;">
            Forecast
          </h4>
          <div class="m-3 box-big" @click="toggleModal('2')">
          Forecast
         </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import ForecastModal from './Modal/ForecastModal.vue';
import DataChooserModal from '@/components/Modal/DataChooserModal.vue'
import { ref } from "vue";


export default {
  name: 'ProtfolioContent',
  components: {
    ForecastModal,
    DataChooserModal,
  },
  setup() {
    const modalActive = ref(false);

    const toggleModal = (modalType) => {
      if (modalType === '1') {
        modalActive.value = 1;
      } else if (modalType === '2') {
        modalActive.value = 2;
      } else {
        modalActive.value = false;
      }
    };

    return { modalActive, toggleModal };
  },
};
</script>

<style scoped>
@import '@/style/sites.css';
</style>
