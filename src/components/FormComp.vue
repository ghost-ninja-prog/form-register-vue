<script setup lang="ts">
import { ref } from 'vue';
import ButtonComp from './ButtonComp.vue';
import type { TDataRequest } from '@/funstions/types';

const props = defineProps<{
  sendForm: (obj: TDataRequest) => void
}>()

  const firstName = ref<string>('')
  const lastName = ref<string>('')
  const phone = ref<number | null>(null)
  const email = ref<string>('')
  const password = ref<string | number>('')
  const dubblePassword = ref<string | number>('')

  function submitHandler() {
    if(password.value.toString() !== dubblePassword.value.toString()) {
      alert('Пароли не совпадают')
      return
    }
    const obj: TDataRequest = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value,
      password: password.value
    }
    props.sendForm(obj)
    console.log(obj)
  }
</script>

<template>
  <form class="form" @:submit.prevent="submitHandler">
    <label class="label">
      FirstName
      <input type="text" v-model="firstName" required>
    </label>
    <label>
      LastName
      <input type="text" v-model="lastName" required>
    </label>
    <label>
      Phone
      <input type="tel" title="89997772345" pattern="\d{11}" v-model="phone" required>
    </label>
    <label>
      Email
      <input type="email" v-model="email" title="example@mail.com" pattern="\w+@\w+\.\w+" required>
    </label>
    <label>
      Password
      <input type="password" v-model="password" required>
    </label>
    <label>
      RepeatPassword
      <input type="password" v-model="dubblePassword" required>
    </label>
    <ButtonComp msg="send" />
  </form>
</template>

<style scoped>
  .form {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #2c4e6fa8;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 400px;
    padding: 20px 30px;
    border-radius: 7px;
    color: #fff;
  }

  input{
    background-color: #f4f7f957;
    border: none;
    padding: 5px 15px;
    border-radius: 25px;
    width: 100%;
  }
  input:focus-visible {
    outline: none;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 8px;
  }
</style>
