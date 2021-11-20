import AdminMenShorts from "../../pages/AdminMenShorts";
import LoginValidator from "../../components/loginValidataor";

const AdminMenShortsPageRoute = () =>{
    return(
        <div>
            <LoginValidator>
            <AdminMenShorts />
            </LoginValidator>
        </div>
    )
}

export default AdminMenShortsPageRoute;