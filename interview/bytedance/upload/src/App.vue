<script setup>
import { reactive } from 'vue'
const SIZE = 10 * 1024 * 1024
const state = reactive({
  file: null,
  data: []
})
// 手写ajax options
const handleFileChange = (e) =>{
  // 如何拿到文件对象
  const [file] = e.target.files // 第一个文件
  if(!File) return
  state.file = file
}

const request = ({
  url,
  method = 'post',
  data,
  headers = [],
  // 显示进度条
  onProgress = e => e,
  // 切片
  requestList
}) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    // ajax 上传文件负责  上传进度
    xhr.upload.onprogress = onProgress
    xhr.open(method, url)
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    )
    xhr.send(data)
    xhr.onload = e => {
      resolve({
        data: e.target.response
      })
    }
  })
}

const createFileChunk = (file, size = SIZE) => {
  console.log(file)
  const fileChunkList = [];
  const cur = 0;
  while(cur < file.size) {
    fileChunkList.push({file: file.slice(cur, cur + size)})
    cur += size
  }
  console.log(fileChunkList);
  return fileChunkList
}

const handleChunks = async () => {
  // [{file}] -> [{chunk:file, hash}] -> formData ->[request()] -> Promise.All
  const requestList = state.data
  .map(({chunk, hash}) =>{
    // post 请求 js 方式组织表单数据
    const formData = new FormData()
    formData.append("chunk", chunk);
    formData.append("hash", hash);
    return { formData }
  })
  .map(({formData}) => request({
    url: "http://localhost:8888",
    data: formData
  }))
  await Promise.all(requestList)
}
const handleUpload = async () => {
  if(!state.file) return;
  const fileChunkList = createFileChunk(state.file)
  state.data = fileChunkList.map(({file}, index) => ({
    chunk: file,
    hash: state.file.name + '-' + index
  }))
  // console.log(state.data);
  await uploadChunks()
}
// request()
</script>

<template>
  <div>
    <input type="file" @change="handleFileChange" multiple>
    <el-button @click="handlUpload">upload</el-button>
  </div>
</template>

<style scoped>

</style>
