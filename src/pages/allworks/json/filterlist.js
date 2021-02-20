export const filterList = [
  {
    label: '作品频道',
    id: 1,
    children: [
      {
        title: '男频',
        active: true,
        gender: 1
      }, {
        title: '女频',
        active: false,
        gender: 2
      }
    ]
  }, {
    label: '作品分类',
    id: 2,
    children: [
      {
        title: '不限',
        active: true,
        type: 0
      }, {
        title: '玄幻奇幻',
        active: false,
        type: 1
      }, {
        title: '武侠仙侠',
        active: false,
        type: 2
      }, {
        title: '都市言情',
        active: false,
        type: 3
      }, {
        title: '历史军事',
        active: false,
        type: 4
      }, {
        title: '科幻灵异',
        active: false,
        type: 5
      }, {
        title: '网游竞技',
        active: false,
        type: 6
      }
    ]
  }, {
    label: '是否完结',
    id: 3,
    children: [
      {
        title: '不限',
        active: true,
        isEnd: 0
      }, {
        title: '连载中',
        active: false,
        type: 1
      }, {
        title: '已完结',
        active: false,
        type: 2
      }
    ]
  }, {
    label: '作品字数',
    id: 4,
    children: [
      {
        title: '不限',
        active: true,
        num: 0
      }, {
        title: '30万字以下',
        active: false,
        num: 1
      }, {
        title: '30-50万字',
        active: false,
        num: 2
      }, {
        title: '50-100万字',
        active: false,
        num: 3
      }, {
        title: '100万字以上',
        active: false,
        num: 4
      }
    ]
  }, {
    label: '更新时间',
    id: 5,
    children: [
      {
        title: '不限',
        active: true,
        date: 0
      }, {
        title: '三日内',
        active: false,
        date: 1
      }, {
        title: '七日内',
        active: false,
        date: 2
      }, {
        title: '半月内',
        active: false,
        date: 3
      }, {
        title: '一月内',
        active: false,
        date: 4
      }
    ]
  }, {
    label: '排序方式',
    id: 6,
    children: [
      {
        title: '不限',
        active: true,
        solr: 0
      }, {
        title: '更新时间',
        active: false,
        solr: 1
      }, {
        title: '总字数',
        active: false,
        solr: 2
      }, {
        title: '点击量',
        active: false,
        solr: 3
      }
    ]
  }
]

export const filterSearchList = [
  {
    label: '是否完结',
    id: 1,
    children: [
      {
        title: '不限',
        active: true,
        isEnd: 0
      }, {
        title: '连载中',
        active: false,
        type: 1
      }, {
        title: '已完结',
        active: false,
        type: 2
      }
    ]
  }, {
    label: '作品字数',
    id: 2,
    children: [
      {
        title: '不限',
        active: true,
        num: 0
      }, {
        title: '30万字以下',
        active: false,
        num: 1
      }, {
        title: '30-50万字',
        active: false,
        num: 2
      }, {
        title: '50-100万字',
        active: false,
        num: 3
      }, {
        title: '100万字以上',
        active: false,
        num: 4
      }
    ]
  }, {
    label: '更新时间',
    id: 3,
    children: [
      {
        title: '不限',
        active: true,
        date: 0
      }, {
        title: '三日内',
        active: false,
        date: 1
      }, {
        title: '七日内',
        active: false,
        date: 2
      }, {
        title: '半月内',
        active: false,
        date: 3
      }, {
        title: '一月内',
        active: false,
        date: 4
      }
    ]
  }, {
    label: '排序方式',
    id: 4,
    children: [
      {
        title: '不限',
        active: true,
        solr: 0
      }, {
        title: '更新时间',
        active: false,
        solr: 1
      }, {
        title: '总字数',
        active: false,
        solr: 2
      }, {
        title: '点击量',
        active: false,
        solr: 3
      }
    ]
  }
]
