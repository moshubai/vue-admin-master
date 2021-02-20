<template>
  <div class="allworks_container">
    <ul class="list">
      <li v-for="(item, i) in filterLists" :key="i">
        <div class="left">{{ item.label }}：</div>
        <div class="right">
          <span
            :class="{ active: child.active }"
            v-for="(child, i) in item.children"
            :key="i"
            @click="chooseItem(item, child)"
            >{{ child.title }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { filterList, filterSearchList } from '../json/filterlist'
  export default {
    props: {
      isFromSearch: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    data () {
      return {
        filterLists: this.isFromSearch ? filterSearchList : filterList,
        params: {}
      }
    },
    methods: {
      chooseItem (item, child) {
        let _this = this
        _this.filterLists.map(v => {
          if (v.id === item.id) {
            v.children.map(val => {
              val.active = false
              if (val.title === child.title) {
                val.active = true
              }
            })
          }
        })

        _this.getParams(_this.filterLists)
        _this.$emit('filter-search', _this.params)
      },
      getParams (lists) {
        let _this = this
        lists.forEach(list => {
          if (list.children) {
            this.getParams(list.children)
          } else {
            const { active } = list
            if (active) {
              Object.assign(_this.params, list)
            }
          }
        })
      }
    },
    mounted () {},
    computed: {

    }
  }
</script>

<style lang="less" scoped>
.allworks_container {
  width: 100%;
  padding: 20px 15px;
  background: #fff;
  display: flex;
  display: -webkit-flex;
  border-radius: 6px;
  .list {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      display: -webkit-flex;
      padding: 0 0 24px;
      &:last-child {
        padding: 0;
      }
      .left {
        width: 90px;
        color: #999;
      }
      .right {
        flex: 1;
        span {
          cursor: pointer;
          color: #333;
          padding: 0px 10px;
          &.active {
            color: #f70;
          }
        }
      }
    }
  }
}
</style>
