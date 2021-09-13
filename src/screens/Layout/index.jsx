import Header from "./header";

const Layout = ({ children }) => (
  <div className="Main" style={{ backgroundColor: "#edf7fa" }}>
    <Header />
    {children}
  </div>
);

export default Layout;
