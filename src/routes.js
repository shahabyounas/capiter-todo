import Users from "./pages/users-page/users-page";
import User from "./pages/user-page/user-page"

const routes = [
    {
        name: 'Landing',
        path: '/',
        component: Users
    },
    {
        name: 'Users',
        path: '/users',
        component: Users,
    },

    {
        name: 'User',
        path: '/users/:slug',
        component: User,
    }
]

export default routes;