// 用户相关的共享状态
// 贡献状态到了中央 仍然是响应式的， views地方 store中央
import { reactive } from 'vue'
import { defineStore } from 'pinia'// 定义store模型

export const useUserStore = defineStore('user', () => {
    const profile = reactive({
        loginUserName: '',
        adminUserId: '',
        nickName: ''
    })
    const setProfile = (data) => {
        profile.loginUserName = data.loginUserName
        profile.adminUserId = data.adminUserId
        profile.nickName = data.nickName
    }
    return {
        profile,
        setProfile
    }
})