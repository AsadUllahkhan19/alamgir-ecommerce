import AdminMenJeans from "../../pages/AdminMenJeans";
import LoginValidator from "../../components/loginValidataor";

const AdminMenJeansRoute = () =>{
    return(
        <div>
            <LoginValidator>
            <AdminMenJeans />
            </LoginValidator>
        </div>
    )
}

export default AdminMenJeansRoute;