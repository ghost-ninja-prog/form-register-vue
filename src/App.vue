<script setup lang="ts">
import { ref } from 'vue';
import FormComp from './components/FormComp.vue';
import { mockAPI } from './funstions/mockAPI';
import type { TDataRequest, TMockResponseNigative, TMockResponsePositive } from './funstions/types';
import ModalComp from './components/ModalComp.vue';

const isShowForm = ref<boolean>(true)
const isShowModal = ref<boolean>(false)
const responseObj = ref<TMockResponsePositive | TMockResponseNigative>({
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    password: '',
    ok: false,
    message: ''
  })


const showFormHandler = () => {
  isShowForm.value = true
  isShowModal.value = false
}

const sendRequest = (obj: TDataRequest) => {
  responseObj.value = mockAPI(obj)
  isShowForm.value = false
  isShowModal.value = true
}

</script>

<template>
  <div class="backgroundImage">
    <div class="app">
      <FormComp v-if="isShowForm" :send-form="sendRequest"/>
      <ModalComp v-if="isShowModal" :data="responseObj" :show-form="showFormHandler" />
    </div>
  </div>
</template>

<style scoped>
.backgroundImage {
  background: center / contain no-repeat url('./assets/logo.svg');
}
.app {
  height: 100vh;
  margin: 0 auto;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
