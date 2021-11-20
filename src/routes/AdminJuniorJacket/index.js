import AdminJuniorJacket from "../../pages/AdminJuniorJacket";
import LoginValidator from "../../components/loginValidataor";

const AdminJuniorJacketPageRoute = () =>{
    return(
        <div>
            <LoginValidator>
            <AdminJuniorJacket />
            </LoginValidator>
        </div>
    )
}

export default AdminJuniorJacketPageRoute;