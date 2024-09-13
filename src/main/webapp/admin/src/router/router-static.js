import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import siji from '@/views/modules/siji/list'
    import guyongjinjiaona from '@/views/modules/guyongjinjiaona/list'
    import tousujilu from '@/views/modules/tousujilu/list'
    import qianyuexinxi from '@/views/modules/qianyuexinxi/list'
    import cheliangxinxi from '@/views/modules/cheliangxinxi/list'
    import yijianfankui from '@/views/modules/yijianfankui/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/siji',
        name: '司机',
        component: siji
      }
      ,{
	path: '/guyongjinjiaona',
        name: '雇佣金缴纳',
        component: guyongjinjiaona
      }
      ,{
	path: '/tousujilu',
        name: '投诉记录',
        component: tousujilu
      }
      ,{
	path: '/qianyuexinxi',
        name: '签约信息',
        component: qianyuexinxi
      }
      ,{
	path: '/cheliangxinxi',
        name: '车辆信息',
        component: cheliangxinxi
      }
      ,{
	path: '/yijianfankui',
        name: '意见反馈',
        component: yijianfankui
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
