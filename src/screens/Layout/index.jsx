import Header from "./header";

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
  </div>
);

export default Layout;
