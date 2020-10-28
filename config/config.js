export default {
  antd:{},
  dva:{},
  routes: [
    {path: '/tree',component: './tree/Index'},
    {
      path: '/',
      component: '../layout',
      routes: [
        {path: '/hello',component: './Hello'},
        {path: '/page', component: './page',},
        {
          path: '/dashboard',
          routes: [
            //没有component，无法找到页面，没有path，会把所有路径都匹配到没有path的component下，正则通配大的效果
            // { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        },
      ]
    }
  ],
}
