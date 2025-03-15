<script setup lang="ts">
import ButtonComp from './ButtonComp.vue';



const props = defineProps<{
  showForm: () => void,
  data: {
    firstName?: string,
    lastName?: string,
    phone?: number | null,
    email?: string,
    password?: string | number,
    ok: boolean,
    message: string
  }
}>()


const btnHandler = () => {
  props.showForm()
}
</script>

<template>
  <div class="modal">
    <div class="content">
      <template v-if="props.data.ok">
        <h2 class="title">Dear {{ props.data.firstName }} {{ props.data.lastName }} you have successfully completed your registration.</h2>
        <p>I wish you all the best</p>
        <ButtonComp msg="back to form" @:click="btnHandler" />
      </template>
      <template v-else>
        <h2 class="title">Attention! Registration error!</h2>
        <p>try again</p>
        <ButtonComp msg="try again"  @:click="btnHandler"/>
      </template>
    </div>
  </div>
</template>

<style>
.modal{
  width: 800px;
  height: 30vh;
  background-color: #1775049a;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
.title {
  margin-bottom: 15px;
}
</style>