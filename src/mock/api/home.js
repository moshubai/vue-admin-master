import absie from '@/assets/images/base/absie.jpg'
import img from '@/assets/images/base/home.jpg'
import pageh from '@/assets/images/base/pageh.jpg'
export default [
  // 所有右侧栏推荐接口
  {
    path: '/api/super/home-aside-list',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '获取成功',
        data: {
          swipeAside: [
            {
              id: 1,
              title: '标题1',
              category: '都市言情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: true
            },
            {
              id: 2,
              title: '标题2',
              category: '都市言情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 3,
              title: '标题3',
              category: '都市言情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 4,
              title: '标题4',
              category: '都市言情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 5,
              title: '标题5',
              category: '都市言情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            }
          ],
          articleAside: [
            {
              id: 1,
              title: '标题1',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: true
            },
            {
              id: 2,
              title: '标题2',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 3,
              title: '标题3',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 4,
              title: '标题4',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 5,
              title: '标题5',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 6,
              title: '标题1',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 7,
              title: '标题2',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 8,
              title: '标题3',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 9,
              title: '标题4',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 10,
              title: '标题5',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            }
          ],
          articleAsideTwo: [
            {
              id: 1,
              title: '标题1',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: true
            },
            {
              id: 2,
              title: '标题2',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 3,
              title: '标题3',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 4,
              title: '标题4',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 5,
              title: '标题5',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 6,
              title: '标题1',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 7,
              title: '标题2',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 8,
              title: '标题3',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 9,
              title: '标题4',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 10,
              title: '标题5',
              category: '科技玄幻',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            }
          ],
          TableAside: [
            {
              id: 1,
              title: '标题1',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: true
            },
            {
              id: 2,
              title: '标题2',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 3,
              title: '标题3',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 4,
              title: '标题4',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 5,
              title: '标题5',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 6,
              title: '标题1',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 7,
              title: '标题2',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 8,
              title: '标题3',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 9,
              title: '标题4',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            },
            {
              id: 10,
              title: '标题5',
              category: '梦幻温情',
              content: '详情1详情1详情1详情1详情1详情1',
              img: absie,
              show: false
            }
          ]
        }
      }
    }
  },
  // 幻灯片数据接口
  {
    path: '/api/super/home-carousel',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '获取成功',
        data: [
          {
            img: img,
            title: '标题1',
            category: '都市言情',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '',
            id: 1
          },
          {
            img: img,
            title: '标题1',
            category: '都市言情',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          },
          {
            img: img,
            title: '标题1',
            category: '玄幻小说',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          },
          {
            img: img,
            title: '标题1',
            category: '玄幻小说',
            content:
              '详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情',
            author: 'Mister·Fang',
            subtitle: '副标题，有就显示',
            id: 1
          }
        ]
      }
    }
  },
  // 精品推荐
  {
    path: '/api/super/home-boutique-recommend',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '获取成功',
        data: [
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          }
        ]
      }
    }
  },
  // 热门推荐
  {
    path: '/api/super/home-hot-recommend',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '获取成功',
        data: [
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          },
          {
            id: 1,
            title: '标题1',
            author: '作者',
            category: '梦幻温情',
            content:
              '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            img: pageh
          }
        ]
      }
    }
  },
  // 最新更新
  {
    path: '/api/super/home-latest-update',
    method: 'get',
    handle ({ body }) {
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
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 2,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 3,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 4,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 5,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 6,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 7,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 8,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 9,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 10,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 11,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 12,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }, {
            id: 13,
            name: '[玄幻奇幻]',
            age: '我的亡灵小弟有点多',
            address: '第十三卷 第二章 于常夏降下的大雪',
            author: '西红柿吃鸡蛋',
            category: '玄幻奇幻',
            date: '2016-10-03'
          }
        ]
      }
    }
  }

]
