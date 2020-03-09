<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">
        Reload
      </a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{`Selected ${selectedRowKeys.length} items`}}
        </template>
      </span>
    </div>
    <div v-for="item in transData" :key="item.venderId">
      <a-table
        rowKey="uniqueKey"
        :rowSelection="rowSelection"
        :columns="columns"
        :dataSource="item.data"
      >
        <a slot="name" slot-scope="text" href="javascript:;">{{text + 'sdddd'}}</a>
      </a-table>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import {getDataList} from '../utils/consts'
console.log(getDataList())
const serverData = getDataList()
const transData = serverData.map((item)=>{
  const _tempData = _.cloneDeep(item.data)
  _tempData.map((info)=>{
    info.uniqueKey = item.venderId + '-' + info.id
  })
  item.data = _tempData
  return item
})
  const columns = [
    {
      title: 'Name',
      dataIndex: 'productNamber',
      scopedSlots: { customRender: 'name' },
    },
    {
      title: 'Age',
      dataIndex: 'spec',
    },
    {
      title: 'Address',
      dataIndex: 'warp',
    },
  ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  export default {
    data() {
      return {
        data,
        columns,
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        transData,
      };
    },
    computed: {
      hasSelected() {
        return this.selectedRowKeys.length > 0;
      },
      rowSelection() {
        const { selectedRowKeys } = this;
        return  {
          selectedRowKeys:selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => {
            const _checkedTable  =  selectedRowKeys.length ?  selectedRowKeys[0].split('-')[0] : null
            if(!_checkedTable){
              this.selectedRowKeys = selectedRowKeys
            }else{
              let _tempSelectRows = []
              let hasOtherTable = false
              selectedRowKeys.map((item)=>{
                if(item.split('-')[0] == _checkedTable){
                  _tempSelectRows.push(item)
                }else{
                  hasOtherTable = true
                }
              })
              if(hasOtherTable){
                console.log('每次智能选择一个table')
              }
              this.selectedRowKeys = _tempSelectRows;
            }
          },
        };
      },
    },
    methods: {
      start() {
        this.loading = true;
        // ajax request after empty completing
        setTimeout(() => {
          this.loading = false;
          this.selectedRowKeys = [];
        }, 1000);
      },
      onSelectChange(selectedRowKeys) {
       
      },
      checkProps(record){
        console.log(record)
        return {
          
        }
      }
    },
  };
</script>