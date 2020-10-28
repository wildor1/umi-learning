export default {
  antd:{},
  routes: [
    {path: '/tree',component: './tree/Index'},
    {
      path: '/',
      component: '../layout',
      routes: [
        {path: '/hello',component: './Hello'},
        {path: '/layout', component: './layout',},
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        },
      ]
    }
  ],
}
