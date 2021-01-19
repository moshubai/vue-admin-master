
export default [
  {
    path: '/api/web/login',
    method: 'post',
    handle ({ body }) {
      return {
        code: 0,
        msg: '登录成功',
        data: {
          userName: '墨书白',
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTEwNTg5NTMsInVzZXJuYW1lIjoiYWRtaW4ifQ.47y4LjcbD7oAchMhwVi2V8VrMbmeaJHHKJGPJgp400A'
        }
      }
    }
  },
  {
    path: '/api/web/logout',
    method: 'post',
    handle ({ body }) {
      return {
        code: 0,
        msg: '登出成功',
        data: {}
      }
    }
  },

  {
    path: '/api/web/map/list',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '获取成功',
        data: [
          {
            'longitude': '121.430317',
            'latitude': '31.222771',
            'dwmc': '地点1',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.430317',
                'latitude': '31.222771',
                'state': 'normal',
                'nodeType': 2
              }
            ]
          },
          {
            'longitude': '121.425972',
            'latitude': '31.091658',
            'dwmc': '地点2',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.425972',
                'latitude': '31.091658',
                'nodeType': 2,
                'state': 'offline'
              }
            ]
          },
          {
            'longitude': '121.399477',
            'latitude': '31.368896',
            'dwmc': '地点3',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.399477',
                'latitude': '31.368896',
                'nodeType': 2,
                'state': 'offline'
              }
            ]
          },
          {
            'longitude': '121.250333',
            'latitude': '31.383524',
            'dwmc': '地点4',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.250333',
                'latitude': '31.383524',
                'nodeType': 2,
                'state': 'offline'
              }
            ]
          },
          {
            'longitude': '121.697706',
            'latitude': '31.12',
            'dwmc': '地点5',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.697706',
                'latitude': '31.12',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          },
          {
            'longitude': '121.280736',
            'latitude': '30.824697',
            'dwmc': '地点6',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.280736',
                'latitude': '30.824697',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          },
          {
            'longitude': '121.223543',
            'latitude': '31.03047',
            'dwmc': '地点7',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.223543',
                'latitude': '31.03047',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          },
          {
            'longitude': '121.113021',
            'latitude': '31.151209',
            'dwmc': '地点8',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.113021',
                'latitude': '31.151209',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          },
          {
            'longitude': '121.458472',
            'latitude': '30.912345',
            'dwmc': '地点9',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.458472',
                'latitude': '30.912345',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          },
          {
            'longitude': '121.397516',
            'latitude': '31.726946',
            'dwmc': '地点10',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.397516',
                'latitude': '31.726946',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          },
          {
            'longitude': '121.749934',
            'latitude': '31.358896',
            'dwmc': '地点11',
            'nodeType': 1,
            'children': [
              {
                'name': '地点1-1',
                'longitude': '121.749934',
                'latitude': '31.358896',
                'nodeType': 2,
                'state': 'normal'
              }
            ]
          }
        ]
      }
    }
  }
]
