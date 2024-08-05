import Home from "../pages/layouts/Home/Home";
import Menu from "../pages/layouts/Menu/Menu";
import Blog from "../pages/layouts/Blog/Blog";
import Contact from "../pages/layouts/Contact/Contact";

import Login from "../pages/user/Login/Login";
import Register from "../pages/user/Register/Register";
import ResetPassword from "../pages/user/ResetPassword/ResetPassword";
import Logout from "../pages/user/Logout/Logout";

import AdminGetListFood from "../pages/admin/AdminGetListFood/AdminGetListFood";
import AdminCreateFood from "../pages/admin/AdminCreateFood/AdminCreateFood";
import AdminGetListBlog from "../pages/admin/AdminGetListBlog/AdminGetListBlog";
import AdminCreateBlog from "../pages/admin/AdminCreateBlog/AdminCreateBlog";

export const routePublic = [
    { path: "/", component: Home },
    { path: "/menu", component: Menu },
    { path: "/blog", component: Blog },
    { path: "/contact", component: Contact }
];

export const routeAuthorization = [
    { path: "/login", component: Login},
    { path: "/register", component: Register},
    { path: "/reset-password", component: ResetPassword},
    { path: "/logout", component: Logout},
];

export const routeAdmin = [
    { path: "/admin-food/lists", component: AdminGetListFood },
    { path: "/admin-food/create", component: AdminCreateFood },
    { path: "/admin-blog/lists", component: AdminGetListBlog },
    { path: "/admin-blog/create", component: AdminCreateBlog },
]
