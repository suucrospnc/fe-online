<template>
  <el-tree style="max-width: 200px;max-height: 500px;overflow-y: scroll;" :highlight-current="true" :accordion="true" :props="props"
    :load="loadNode" lazy @node-click="nodeClick" />
</template>

<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'
import orgApi from '../../../api/org'
import type { Org } from '../../../api/org.ts'

const emit = defineEmits(['change'])

const props = {
  label: 'name',
}

const loadNode = async (node: Node, resolve: (data: Org[]) => void) => {
  if (node.level === 0) {
    return resolve(await orgApi.query())
  } else {
    return resolve(await orgApi.query(node.data.id))
  }

}
const nodeClick = (node: Org) => {
  emit('change', node.id)
}
</script>
