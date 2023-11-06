<template>
  <div>
    <div class="info">
      <div class="content">
        Dashboard is working fine total
      </div>
      <i class="fa fa-check"></i> This is a check icon.
    </div>
    <button class="box" >
      <div>
        Oracle Cloud
      </div>
    </button>
    <button v-for="box in boxes" :key="box.id" class="box" >
      <div>
        {{ box.content }}
      </div>
    </button>
    
  </div>
</template>

<script>

export default {
  name: 'DataContent',
  components: {
  },
  data() {
    return {
      boxes: [
        { id: 1, content: 'AWS' },
        { id: 2, content: 'Google Cloud' },
        { id: 3, content: 'Microsoft Azure' },
        { id: 4, content: 'SAP Cloud' },
        { id: 5, content: 'Cisco' },
      ],
      modalContent: '', 
    };
  },
  
};
</script>

