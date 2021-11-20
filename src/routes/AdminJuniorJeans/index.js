import AdminJuniorJeans from "../../pages/AdminJuniorJeans";
import LoginValidator from "../../components/loginValidataor";

const AdminJuniorJeansRoute = () =>{
    return(
        <div>
            <LoginValidator>
            <AdminJuniorJeans />
            </LoginValidator>
        </div>
    )
}

export default AdminJuniorJeansRoute;