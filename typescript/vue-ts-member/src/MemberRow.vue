<template>
    <tr>
        <td><img :src="member.avatar_url" ></td>
        <td>{{ member.id }}</td>
        <td>{{ member.login }}</td>
    </tr>
</template>

<script setup lang="ts">
import { MemberEntity } from './model/MemberEntity'
interface Props {
    member: MemberEntity
}
defineProps<Props>()
// const props = defineProps<props>(['member'])
//     number: {
//         type:  Object,
//         default: {} as MemberEntity
//     }
// })
</script>

<style scoped>

</style>