<script setup>

import DashboardContent from './DashboardContent.vue'
import DataContent from './DataContent.vue'
import PortfolioContent from './PortfolioContent.vue'

</script>

<template>
  <div id="app" class="w-100 h-100">
    <nav class="sidebar" :class="{ collapsed: isCollapsed }">
      <ul class="mt-5">
        <li class="pb-3" @click="showDashboardContent" v-if="!isCollapsed">
          <span class="material-icons">
            dashboard
          </span>
          Dashboard
        </li>
        <li class="pb-3" @click="showDashboardContent" v-if="isCollapsed" >
          <span class="material-icons">
            dashboard
          </span>
        </li>

        <li class="pb-3" @click="showPortfolioContent" v-if="!isCollapsed">
          <span class="material-icons">
            leaderboard
          </span>
          Portfolio
        </li>
        <li class="pb-3" @click="showPortfolioContent" v-if="isCollapsed">
          <span class="material-icons">
            leaderboard
          </span>
        </li>

        <li class="pb-3" @click="showDataContent" v-if="!isCollapsed">
          <span class="material-icons">
          folder
          </span>
          Data
        </li>
        <li class="pb-3" @click="showDataContent" v-if="isCollapsed">
          <span class="material-icons">
          folder
          </span>
        </li>

      </ul>
      <div>
        <button @click="toggleSidebar" class="chevron-icon" v-if="isCollapsed">»</button>
        <button @click="toggleSidebar" class="chevron-icon" v-if="!isCollapsed">«</button>
      </div>
    </nav>
   
    <div class="main-content p-5">
      <header class="page-header mb-2 info">
        <h1>{{ selectedContentTitle }}</h1>
      </header>

      <main>

          <DataContent v-if="selectedContent === 'DataContent'"/>
        <template v-if="selectedContent === 'PortfolioContent'">
          <PortfolioContent />
        </template>   
        <template v-if="selectedContent === 'DashboardContent'">
          <DashboardContent />
        </template>
 
     </main>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MenuBar',
  components: {
    DataContent,
    PortfolioContent,
    DashboardContent
  },
  data() {
    return {
      isCollapsed: true,
      selectedContent: 'DashboardContent',
      selectedContentTitle: 'Dashboard',
    };
  },
  methods: {
    showDataContent() {
      this.selectedContent = 'DataContent';
      this.selectedContentTitle = 'Data';
    },
    showPortfolioContent() {
      this.selectedContent = 'PortfolioContent';
      this.selectedContentTitle = 'Portfolio';
    },
    showDashboardContent() {
      this.selectedContent = 'DashboardContent';
      this.selectedContentTitle = 'Dashboard';
    },

    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    selectMenuItem(item) {
      this.selectedMenuItem = item;
    },
  },
};

</script>


<style scoped>
@import '@/style/main.css';
</style>
