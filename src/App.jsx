import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getLoggedInUser } from "./redux/auth/authSlice.js";
import { useSelector } from "react-redux";
import { routeAdmin, routePublic } from "./routes/index.js";
import { routeAuthorization } from "./routes/index.js";
import DefaultLayout from "./pages/layouts/DefaultLayout/DefaultLayout.jsx";
import PrivatePage from "./pages/admin/PrivatePage/PrivatePage";
import PageNotFound from "./pages/layouts/PageNotFound/PageNotFound";
import Admin from "./pages/admin/Admin";
import DefaultAdmin from "./pages/layouts/DefaultAdmin/DefaultAdmin";

const App = () => {
  const user = useSelector(getLoggedInUser);
  return (
    <div>
      <BrowserRouter>
          <Routes>
            {/* Layouts */}
            {
              routePublic.map((routeLayout, index) => {
                const Page = routeLayout.component;
                const Layout = DefaultLayout;
                return (
                  <Route key={index}>
                    <Route index element={<PrivatePage element={user.role === "admin" ? <DefaultAdmin><Admin /></DefaultAdmin> : <Layout>
                      <Page />
                    </Layout>} />} />
                    <Route path={routeLayout.path} element={<Layout>
                      <Page />
                    </Layout>}/>
                  </Route>
                )
              })
            }

            {/* Authorization */}
            {
              routeAuthorization.map((routeAuth, index) => {
                const PageAuth = routeAuth.component;
                return (
                  <Route key={index} path={routeAuth.path} element={<PageAuth/>} />
                )
              })
            }

            {/* Admin */}
            {
              routeAdmin.map((routeAd, index) => {
                const AdminLayout = DefaultAdmin;
                const PageAd = routeAd.component;
                return (
                  <Route key={index} path={routeAd.path} element={
                    <AdminLayout>
                      <PageAd />
                    </AdminLayout>} />
                )
              })
            }

            {/* Page not found */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;




