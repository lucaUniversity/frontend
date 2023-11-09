<template>
  <div>
    <OracleCloudModal v-if="modalActive === 1" @close="toggleModal" :modalActive="modalActive" />
    <GoogleCloudModal v-else-if="modalActive === 2" @close="toggleModal" :modalActive="modalActive" />

    <div class="container d-flex flex-wrap">
      <div class="box" @click="toggleModal('1')">
        <img src="@/assets/kisspng-oracle-cloud-cloud-computing-oracle-corporation-da-financial-sector-5ade40d295ef68.5673599215245150266141.png" style="height: 80%; width: 100%;" alt="Oracle Cloud">
      </div>

      <div class="box" @click="toggleModal('2')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Cloud_Platform_logo_(2020).svg/1200px-Google_Cloud_Platform_logo_(2020).svg.png" style="height: 80%; width: 100%;" alt="Google Cloud">
      </div>

      <div class="box">Box 3</div>
      <div class="box">Box 4</div>
      <div class="box">Box 5</div>
    </div>
  </div>
</template>

<script>
import GoogleCloudModal from "@/components/DataModal/GoogleCloudModal.vue";
import OracleCloudModal from "@/components/DataModal/OracleCloudModal.vue";

import { ref } from "vue";

export default {
  name: "DataContent",
  components: {
    OracleCloudModal,
    GoogleCloudModal,
    
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


<style>
.box {
  background-color: #f8f9fa; 
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
}

.box img {
  max-height: 90%;
  max-width: 90%; 
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
}
</style>