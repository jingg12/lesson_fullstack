import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: '一一一',
        isAdmin: true
    })
})