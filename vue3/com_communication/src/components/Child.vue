    <template>
        <div>
            <button @click="handlerClick">按钮</button>
        </div>
    </template>
    <script setup>
    const emit = defineEmits(["key","value"])
    
    // 用法
    const handlerClick = () => {
        // 内置的emit方法
        emit("update:key", "新的key")
        emit("update:value", "新的value")
    }
    </script>
