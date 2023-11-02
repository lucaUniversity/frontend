<script setup>

import DashboardContent from './DashboardContent.vue'
import DataContent from './DataContent.vue'
import PortfolioContent from './PortfolioContent.vue'
import ProfileContent from './ProfileContent.vue'

</script>

<template>
  <div id="app">
    <nav class="sidebar" :class="{ collapsed: isCollapsed }">
      <ul>
        <li @click="showDashboardContent" v-if="!isCollapsed">
          <span class="material-icons">
            dashboard
          </span>
          Dashboard
        </li>
        <li @click="showDashboardContent" v-if="isCollapsed">
          <span class="material-icons">
            dashboard
          </span>
        </li>

        <li @click="showPortfolioContent" v-if="!isCollapsed">
          <span class="material-icons">
            leaderboard
          </span>
          Portfolio
        </li>
        <li @click="showPortfolioContent" v-if="isCollapsed">
          <span class="material-icons">
            leaderboard
          </span>
        </li>

        <li @click="showDataContent" v-if="!isCollapsed">
          <span class="material-icons">
          folder
          </span>
          Data
        </li>
        <li @click="showDataContent" v-if="isCollapsed">
          <span class="material-icons">
          folder
          </span>
        </li>

        <li @click="showProfileContent" v-if="!isCollapsed">
          <span class="material-icons">
            account_circle
          </span>
          Profile
        </li>
        <li @click="showProfileContent" v-if="isCollapsed">
          <span class="material-icons">
            account_circle
          </span>
        </li>

      </ul>
      <div>
        <button @click="toggleSidebar" class="chevron-icon" v-if="isCollapsed">»</button>
        <button @click="toggleSidebar" class="chevron-icon" v-if="!isCollapsed">«</button>
      </div>
      <div>
  </div>
    </nav>

    <div class="main-content">
      <main>
        <template v-if="selectedContent === 'DataContent'">
          <DataContent />
        </template>
        <template v-if="selectedContent === 'PortfolioContent'">
          <PortfolioContent />
        </template>   
        <template v-if="selectedContent === 'DashboardContent'">
          <DashboardContent />
        </template>
        <template v-if="selectedContent === 'ProfileContent'">
          <ProfileContent />
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
    ProfileContent,
    DashboardContent
  },
  data() {
    return {
      isCollapsed: false,
      selectedContent: null,
      selectedContentTitle: '',
    };
  },
  methods: {
    showDataContent() {
      this.selectedContent = 'DataContent';
      this.selectedContentTitle = 'Data Content';
    },
    showPortfolioContent() {
      this.selectedContent = 'PortfolioContent';
      this.selectedContentTitle = 'Portfolio Content';
    },
    showDashboardContent() {
      this.selectedContent = 'DashboardContent';
      this.selectedContentTitle = 'Dashboard Content';
    },
    showProfileContent() {
      this.selectedContent = 'ProfileContent';
      this.selectedContentTitle = 'Profile Content';
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
