//styles
import "./styles.css";
//icon
import LogoIcon from "../../assets/logo";
//components
import Button from "../../components/button";

const PageHome = () => {
  return (
    <div className="homePage">
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="p-5">
          <LogoIcon width="500" height="200" />
          <div className="mt-4 area-btn">
            <Button
              icon={<i className="bi bi-search"></i>}
              onClick={() => (window.location.href = "/products")}
            >
              Busca por produto
            </Button>
            <Button
              icon={<i className="bi bi-arrow-right"></i>}
              onClick={() => (window.location.href = "/contact")}
            >
              Fale com a gente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHome;
