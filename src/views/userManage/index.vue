<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="成员管理" name="first">
      <el-row>
        <el-col :span="6">
          <TheOrgTree @change="treeChange" />
        </el-col>
        <el-col :span="18">
          <TheUserTable :id="orgId" />
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="团队管理" name="second">团队管理</el-tab-pane>
    <el-tab-pane label="职位维护" name="third">职位维护</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheOrgTree from './components/TheOrgTree.vue';
import TheUserTable from './components/TheUserTable.vue';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const orgId = ref('')
const treeChange = (id: string) => {
  orgId.value = id
}
</script>

<style>
.demo-tabs {
  width: 1000px;
  height: 600px;
}
</style>
