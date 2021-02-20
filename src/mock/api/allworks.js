
export default [
  // 列表
  {
    path: '/api/super/allworks-list',
    method: 'post',
    handle ({ body }) {
      console.log('body', body); // log
      const { pageSize, pageIndex } = body
      if (pageSize && pageIndex) {
        return {
          code: 0,
          msg: '获取成功',
          data: [
            {
              id: 1,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 2,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 3,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 4,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 5,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 6,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 7,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 8,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 9,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 10,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 11,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 12,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 13,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 14,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 15,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 16,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 17,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 18,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 19,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            },
            {
              id: 20,
              name: '[玄幻奇幻]',
              age: '我的亡灵小弟有点多',
              address: '第十三卷 第二章 于常夏降下的大雪',
              author: '西红柿吃鸡蛋',
              category: '梦幻温情',
              date: '2016-10-03'
            }
          ]
        }
      } else {
        return {
          code: 0,
          msg: '请输入参数',
          data: []
        }
      }
    }
  }

]
