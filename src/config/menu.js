const menuItem = [
  {
    title: '图标库',
    key: '1',
    router: null,
    subs: [
      { title: 'dashboard', router: '/components/dashboard', component: 'Dashboard' },
      { title: '柱状图', router: '/components/barEcharts', component: 'Bar' },
      { title: '条形图', router: '/components/rowBar', component: 'RowBar' },
      { title: '扇形图', router: '/components/radialPolar', component: 'RadialPolar' },
      { title: '数学函数', router: '/components/Sin', component: 'Sin' },
      { title: '散点图', router: '/components/ScatterChart', component: 'ScatterChart' },
    ],
  },
  {
    title: 'CSS',
    key: '2',
    router: null,
    subs: [
      { title: 'flex', router: '/components/flex', component: 'Flex' },
      { title: 'grid', router: '/components/grid', component: 'Grid' },
      { title: '动画', router: '/components/transition', component: 'Transition' },
    ],
  },
  {
    title: 'THREE',
    key: '3',
    router: null,
    subs: [
      { title: 'Three光源', router: '/components/Three', component: 'Three' },
      { title: 'Three场景', router: '/components/Scene', component: 'Scene' },
    ],
  },
  {
    title: '自定义组件',
    key: '-1',
    router: null,
    subs: [
      { title: '自定义Modal', router: '/components/modal', component: 'Modal' },
      { title: 'Tree拖拽排序', router: '/components/SortDrag', component: 'SortDrag' },
    ],
  },
];

export default menuItem;
