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
      <div class="section-title">快捷入口</div>
      <van-grid :column-num="2" :gutter="12">
        <van-grid-item @click="goPagee('/chat')" icon="chat-o" text="A对话" />
        <van-grid-item @click="goPagee('/profile')" icon="user-o" text="我的" />
      </van-grid>
    </div>
    <div class="card popular-destinations">
      <div class="section-title">热门目的</div>
      <van-grid :column-num="4" :gutter="8">
        <van-grid-item
          @click="slectTagCity(item)"
          v-for="item in popularCities"
          :key="item"
        >
          <div :class="{ active: item === formData.city }" class="city-tag">
            {{ item }}
          </div>
        </van-grid-item>
      </van-grid>
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
import { useRouter } from "vue-router";
const router = useRouter();

// 跳转页面
const goPagee = (page) => {
  router.push(page);
};
// 表单数据
const showCityPicker = ref(false);
// 表单数据
const formData = reactive({
  city: "",
  budget: "",
  days: "",
});
const popularCities = [
  "北京",
  "上海",
  "广州",
  "深圳",
  "成都",
  "西安",
  "重庆",
  "杭州",
];
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
const slectTagCity = (item) => {
  formData.city = item;
};
</script>
<style scoped>
.search-card {
  margin-bottom: 10px;
}
.city-picker {
  z-index: 9999 !important;
}
.city-tag {
  padding: 8px 12px;
  border-radius: 16px;
  background: #f7f8fa;
  color: #333;
  transition: all 0.3s;
}
.city-tag:hover {
  background: #e8ebee;
}
.city-tag.active {
  background: #007aff;
  color: #fff;
}
</style>
