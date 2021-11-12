import Users from "./pages/user-page/user-page"

const routes = [
    {
        name: 'Users',
        path: '/',
        component: Users
    },
    {
        name: 'Result',
        path: '/result',
        component: Users,
    }
]

export default routes;