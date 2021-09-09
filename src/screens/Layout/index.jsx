import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="Main" style={{ backgroundColor: "#edf7fa" }}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
