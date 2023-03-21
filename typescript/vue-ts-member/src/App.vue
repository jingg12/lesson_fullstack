<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue'
import './model/MemberEntity'
import MemberHeader from './MemberHeader.vue'
import { fetchMembersAsync } from './api/index'
// import { members } from './api/member'
import MemberRow from './MemberRow.vue'
import { MemberEntity } from './model/MemberEntity'

const membersRef:Ref<MemberEntity[]> = ref([])
onMounted(async () => {
  const data = await fetchMembersAsync()
  membersRef.value = data
    // .then(items => {
    //   membersRef.value = items
    // })
  // membersRef.value = members
})
</script>

<template>
<div class="row">
  <h2>Members Page</h2>
  <table class="table">
    <thead>
      <MemberHeader />
    </thead>
    <tbody>
      <MemberRow 
        v-for="member in membersRef" 
        :key="member.id"
        :member="member"
      />
      <!-- <tr v-for="member in membersRef" :key="member.id">
        <td>
          <img :src="member.avatar_url">
        </td>
        <td>
          {{member.id}}
        </td>
        <td>
          {{member.login}}
        </td>
      </tr> -->
    </tbody>
  </table>
</div>
</template>

<style>

</style>
