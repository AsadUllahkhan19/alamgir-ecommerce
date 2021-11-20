import CreateProduct from "../../pages/Create-Product";
import LoginValidator from "../../components/loginValidataor";

const CreateProductPageRoute = () => {
  return (
    <LoginValidator>
      <CreateProduct />
    </LoginValidator>
  );
};

export default CreateProductPageRoute;
