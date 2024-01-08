<template>
    <div class="header">
        这是可移动的范围+缩小和关闭
    </div>
</template>
 
<script>
export default {
    name: 'closeWind',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
.header {
    width: 100%;
    height: 20px;
    background: red;
    /* 设置可移动 */
    -webkit-app-region: drag;
    /* 文字不可选取 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>