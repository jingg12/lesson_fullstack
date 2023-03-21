// import { MemberEntity } from '../model/memberEntity'
// import { members } from './member'

import { MemberEntity } from "../model/memberEntity";

// const baseURL:string = 'https://api.github.com/orgs/lemoncode'
// // 函数约定返回值
// // Promise 类
// // 细化一下， 泛型约束 泛指内部的类型
// const fetchMembers = ():Promise<MemberEntity[]> => {
//     return Promise.resolve(members)
// }

// export const fetchMembersAsync = ():Promise<MemberEntity[]> => {
//     const membersURL = `${baseURL}/members`
//     return fetch(membersURL) // Promise<Response>
//         .then(response => response.json()) // Promise<{}>
//         .then(mapToMembers)
// }
// // any 不约束
// const mapToMembers = (githubMembers:any[]) => {
//     // 吧后端接口给我们的不和规范的数据，格式化
//     return githubMembers.map(mapToMember)
// }

// const mapToMember = (githubMember:any):MemberEntity => {
//     return {
//         id: githubMember.id,
//         login: githubMember.login,
//         avatar_url: githubMember.avatar_url
//     }
// }




const baseURL = 'https://api.github.com/orgs/lemoncode'
// typescript 在架构上nb 为前端项目引入模型层 
export const fetchMembersAsync = () :Promise<MemberEntity[]> => {
    const membersURL = `${baseURL}/members`;
    return fetch(membersURL) // Response  不满足页面需求
        .then(response => response.json()) //Any[] 不满足页面精确需要
        .then(mapToMembers) // Any[] Any  后端的接口数据 满足页面model 需要
}

const mapToMembers = (githubMembers:any[]) =>{ //githubMembers 有很多是我们不要的
    return githubMembers.map(mapToMember )//member =>({
        // id: member.id,
        // login: member.login,
        // avatar_url: member.avatar_url
    // }))
}
const mapToMember = (githubMember:any):MemberEntity =>{ 
    return {
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }
}