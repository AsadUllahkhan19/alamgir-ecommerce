import JuniorMenShorts from "../../pages/AdminJuniorShorts";
import LoginValidator from "../../components/loginValidataor";

const JuniorMenShortsPageRoute = () => {
  return (
    <div>
      <LoginValidator>
        <JuniorMenShorts />
      </LoginValidator>
    </div>
  );
};

export default JuniorMenShortsPageRoute;
