import Users from "./pages/users-page/users-page";

const routes = [
    {
        name: 'Users',
        path: '/',
        component: Users
    },
    {
        name: 'Result',
        path: '/users',
        component: Users,
    }
]

export default routes;