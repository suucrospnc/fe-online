<template>
  <div>
    <div class="header">
      <el-input v-model="searchName" style="width: 200px;" placeholder="搜索" :prefix-icon="Search" @input="seachInput" />
      <div style="margin-left: 20px;font-size: 14px;">{{ totalItems }}个成员</div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="50px" />
      <el-table-column prop="id" label="id" sortable />
      <el-table-column prop="name" label="姓名" sortable />
    </el-table>
    <el-pagination style="margin-top: 10px;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      v-model:current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize" background small
      layout="total, prev, pager, next, jumper" :total="totalItems"></el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { toRef, ref, watch, computed } from 'vue'
import { userApi } from '../../../api/user'
import type { User } from '../../../api/user'
import { Search } from '@element-plus/icons-vue'
import { debounce } from '../../../utils/debounce'

const props = defineProps({ id: String })
const id = toRef(props, 'id')

// 搜索
const searchName = ref('')
const seachInput = debounce(() => {
  getTableList()
}, 1000);

watch(id, () => {
  getTableList()
})

// 获取数据源
const responseData = ref([])
const getTableList = () => {
  userApi.query({
    orgId: id.value,
    name: searchName.value
  }).then((users: User[]) => {
    responseData.value = users
  })
}
// 分页
const currentPage = ref(1);
const pageSize = ref(10);

const totalItems = computed(() => responseData.value.length);

const tableData = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return responseData.value.slice(startIndex, endIndex);
});

const handleSizeChange = (val) => {
  pageSize.value = val;
};

const handleCurrentChange = (val) => {
  currentPage.value = val;
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}
</style>