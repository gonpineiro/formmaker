import "./footer.scss";

const Footer = () => {
  return (
    <header>
      <div className="footer py-3">
        <div className="container">
          <span className="text-white">
            Municipalidad de Neuquén © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Footer;
