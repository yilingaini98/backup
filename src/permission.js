import Router from 'vue-router'


const router = new Router({
    routes: [
        {
            path: '/',  // 默认进入路由
            redirect: '/home'   //重定向
        },
        {
            path: '/home',
            name: 'home',
        },
        {
            path: '**',   // 错误路由
            redirect: '/home'   //重定向
        },
    ]
});


router.beforeEach((to, from, next) => {
    next({
        path: '/'
    });
})


