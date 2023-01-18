<template>
    <div class="top">
        <h1>测试 vueUse 的鼠标坐标</h1>
    </div>
    <h3>Mouse: {{ x }} x {{ y }}</h3>

    <div>
        <h1>测试 element plus的按需引入</h1>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>

    <el-date-picker
        v-model="value1"
        type="date"
        placeholder="请选择日期222"
        :disabled-date="disabledDate"
        :size="size"
    />
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core';
import { ref } from 'vue';

const { x, y } = useMouse();

const size = ref<'default' | 'large' | 'small'>('default');
const value1 = ref('');
const disabledDate = (time: Date) => {
    return time.getTime() > Date.now();
};
</script>

<style scoped lang="scss">
.top {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: pink;
    h1 {
        color: red;
    }
}
</style>
