import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navigation />
      <div className="page-container">{props.children}</div>
    </div>
  );
};

export default Layout;
