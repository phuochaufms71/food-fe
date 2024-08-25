/* eslint-disable react/prop-types */
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";

const DefaultLayout = ({children}) => {

  const location = useLocation();
  return (
    <div>
      <Header />
      {location.pathname !== "/" ? <Breadcrumb /> : <></>}
        {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout;
