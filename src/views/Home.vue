<template>
  <div>
    <van-nav-bar title="智能旅游助手" left-arrow />
    <van-notice-bar
      left-icon="info-o"
      text="基于 AI 的智能景点介绍与行程规划系统"
      style="margin-bottom: 10px"
    />
    <div class="card">
      <van-field
        style="background: #f7f8fa; border-radius: 8px; margin-bottom: 10px"
        is-link
        v-model="formData.city"
        label="目的地"
        readonly
        placeholder="请选择目的地"
        @click="handleShowCityPicker"
      />
      <van-field
        :border="false"
        v-model="formData.budget"
        label="预算(元)"
        placeholder="请输入预算"
        style="background: #f7f8fa; border-radius: 8px; margin-bottom: 12px"
      />
      <van-field
        :border="false"
        v-model="formData.days"
        label="天数"
        type="digit"
        placeholder="请输入天数"
        style="background: #f7f8fa; border-radius: 8px; margin-bottom: 12px"
      />
      <van-button
        :loading="isLoading"
        round
        size="large"
        type="primary"
        @click="handleSubmit"
        >查询</van-button
      >
    </div>
    <div class="card quick-actions">
      
    </div>

    <van-popup v-model:show="showCityPicker" position="bottom" round>
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
const isLoading = ref(false);
const allCities = ref([
  "北京",
  "上海",
  "广州",
  "深圳",
  "成都",
  "西安",
  "重庆",
  "杭州",
  "南京",
  "天津",
]);
const cityColumns = allCities.value.map((item) => ({
  text: item,
  value: item,
}));
const handleShowCityPicker = () => {
  console.log("handleShowCityPicker called");
  showCityPicker.value = true;
  console.log("showCityPicker value:", showCityPicker.value);
};
const handleCityConfirm = ({ selectedValues }) => {
  console.log("value:", selectedValues);
  formData.city = selectedValues.join(",");
  showCityPicker.value = false;
};
const handleSubmit = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};
</script>
<style scoped>
.search-card {
  margin-bottom: 10px;
}
</style>

<style>
.city-picker {
  z-index: 9999 !important;
}
</style>
