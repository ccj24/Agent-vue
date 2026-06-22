<template>
  <div class="app-container">
    <router-view />
    <van-tabbar route v-model="active">
      <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/Chat" icon="comment-o">对话</van-tabbar-item>
      <van-tabbar-item to="/Profile" name="setting" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
</script>


