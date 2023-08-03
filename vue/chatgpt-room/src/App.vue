<script setup lang="ts">
// import type {ChatMessage} from './types';
import { ref, type Ref} from 'vue'
import { chat } from '@/libs/gpt'
const message : Ref<string> =ref("");
const doChat = async(message :string) => {
  const result = await chat([{
    role: "user",
    content: message
  }],'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');
  console.log(result);
  
}
</script>

<template>
  <input type="text" v-model="message" placeholder="chatroom"/>
  <button @click="">发送</button>
</template>

<style >

</style>
