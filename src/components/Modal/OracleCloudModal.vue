<template>
    <transition name="modal-animation">
      <div v-show="modalActive" class="modal">
        <transition name="modal-animation-inner" style="border-radius: 7px;">
          
          <div v-show="modalActive" class="modal-inner">
            <h2 style="display: flex; text-align: left; margin-top: -50px; margin-bottom: 30px;">Oracle Cloud Data Connection</h2>
            <i @click="close" class="fa fa-close"></i>
            <div class="modal-content" style="border: none;">
              <div class="form-container">
                <form @submit.prevent="connect">
                  <div class="form-group">
                    <label style="display: flex; text-align: left;" for="projectId">Project ID:</label>
                    <input type="text" id="projectId" v-model="projectId" required>
                  </div>
                  <div class="form-group">
                    <label style="display: flex; text-align: left;" for="serviceAccountEmail">Service Account Email:</label>
                    <input type="email" id="serviceAccountEmail" v-model="serviceAccountEmail" required>
                  </div>
                  <div class="form-group">
                    <label style="display: flex; text-align: left;" for="privateKey">Private Key:</label>
                    <textarea id="privateKey" v-model="privateKey" rows="10" required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Connect</button>
                </form>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: ["modalActive"],
    setup(props, { emit }) {
      const close = () => {
        emit("close");
      };
  
      return { close };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
  
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(69, 69, 69, 0.7);
  
    .modal-inner {
      position: relative;
      max-width: 840px;
      width: 80%;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background-color: #fff;
      padding: 64px 16px;
  
      i {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 20px;
        cursor: pointer;
  
        &:hover {
          color: rgb(161, 161, 161);
        }
      }
  

    }
  }
  .form-container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  outline: none;
}

textarea {
  height: 100px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;

}

  </style>