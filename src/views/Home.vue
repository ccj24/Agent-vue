<template>
  <div class="page-container">
    <div class="page-header">
      <van-nav-bar title="智能旅游助手" left-arrow />
    </div>
    <div class="page-content">
      <van-notice-bar
        left-icon="info-o"
        text="基于 AI 的智能景点介绍与行程规划系统"
        class="margin-bottom: 10px;"
      />
      <div class="card search-card">
        <div class="section-title">规划你的行程</div>
        <van-field
          style="background: #f7f8fa; border-radius: 8px; margin-bottom: 2px"
          is-link
          v-model="formData.city"
          label="目的地"
          readonly
          placeholder="请选择目的地"
          @click="showCityPicker=true"
        />
        <van-field
          v-model="formData.budget"
          label="预算"
          placeholder="请输入预算"
        />
        <van-field
          v-model="formData.days"
          label="天数"
          placeholder="请输入天数"
        />
      </div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    <van-popup
      v-model="showCityPicker"
      class="city-picker"
      position="bottom"
      round
    >
      <van-picker
      title="请选择目的地"
        :columns="cityColumns"
        @confirm="handleCityConfirm"
        @cancel="showCityPicker = false"
      />
    </van-popup>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
// 表单数据
const showCityPicker = ref(false);
// 表单数据
const formData = reactive({
  city: "",
  budget: "",
  days: "",
});
const allCities = ref([
    '北京',
    '上海',
    '广州',
    '深圳',
    '成都',
    '西安',
    '重庆',
    '杭州',
    '南京',
    '天津',
]);
const cityColumns = allCities.value.map(item => ({
    label: item,
    value: item,
}));
const handleCityConfirm = (value) => {
    formData.city = value;
    showCityPicker.value = false;
}
</script>
<style scoped>
.search-card {
  margin-bottom: 10px;
}
</style>
