<script setup lang="ts">
const props = defineProps<{
  msg: string
}>()
</script>

<template>
  <button class="btn">{{ props.msg }}</button>
</template>

<style>
.btn {
    align-self: center;
    padding: 10px 20px;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    letter-spacing: 0.3rem;
    background-color: #3e7ff8;
    border-radius: 22px;
    border: 1px solid #689dff;
    cursor: pointer;
    transition: border .2s ease-in-out,
                backgroun-color .2s ease-in-out;
  }
  .btn:hover {
      border: 1px solid #92b7fc;
      background-color: #6197fa;
    }
</style>