import React, { lazy, Suspense } from "react";
import { Route, Switch,BrowserRouter as Router } from "react-router-dom";
import Loading from "../pages/Loader"

const LandingPage = lazy(() => import("./LandingPage"));
const DescriptionPage = lazy(() => import("./Description"));
const MenJeansPage = lazy(() => import("./Mens-Jeans"));
const AdminLogin = lazy(() => import("./AdminLogin"))
const CreateProductLogin = lazy(() => import("./CreateProduct"))
const AdminMenJeans = lazy(() => import("./AdminMenJeans"))
const AdminWomenJeans = lazy(() => import("./AdminWomenJeans"))
const AdminJuniorJeans = lazy(() => import("./AdminJuniorJeans"))
const AdminMenJacket = lazy(() => import("./AdminMenJacket"))
const AdminWomenJacket = lazy(() => import("./AdminWomenJacket"))
const AdminJuniorJacket = lazy(() => import("./AdminJuniorJacket"))
const AdminMenShorts = lazy(() => import("./AdminMenShorts"))
const AdminWomenShorts = lazy(() => import("./AdminWomenShorts"))
const AdminJuniorShorts = lazy(() => import("./AdminJuniorShorts"))
const WomenJeans = lazy(() => import("./Women-jeans"))
const JuniorJeans = lazy(() => import("./Junior-Jeans"))
const MenShort = lazy(() => import("./Men-short"))
const WomenShorts = lazy(() => import("./Women-Shorts"))
const JuniorShorts = lazy(() => import("./Junior-Shorts"))
const MenJacket = lazy(() => import("./Men-Jacket"))
const WomenJacket = lazy(() => import("./Women-Jacket"))
const JuniorJacket = lazy(() => import("./Junior-Jacket"))
const UserLogin = lazy(() => import("./User-Login"))
const SignUp = lazy(() => import("./SignUp"))
const MenJeans = lazy(() => import("./Mens-Jeans"))
const Cart = lazy(() => import("./Cart"))
const Order = lazy(() => import("./Orders"))

export const Routes = () =>{
    return(
        <Suspense fallback={<Loading />}>
            <Router>
            <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/description-page' component={DescriptionPage} />
            <Route exact path='/menjeans-page' component={MenJeansPage} />
            <Route exact path='/AdminLogin-page' component={AdminLogin} />
            <Route exact path='/CreateProductLogin-page' component={CreateProductLogin} />
            <Route exact path='/AdminMenJeans' component={AdminMenJeans} />
            <Route exact path='/AdminWomenJeans' component={AdminWomenJeans} />
            <Route exact path='/AdminJuniorJeans' component={AdminJuniorJeans} />
            <Route exact path='/AdminMenJacket' component={AdminMenJacket} />
            <Route exact path='/AdminWomenJacket' component={AdminWomenJacket} />
            <Route exact path='/AdminJuniorJacket' component={AdminJuniorJacket} />
            <Route exact path='/AdminMenShorts' component={AdminMenShorts} />
            <Route exact path='/AdminWomenShorts' component={AdminWomenShorts} />
            <Route exact path='/AdminJuniorShorts' component={AdminJuniorShorts} />
            <Route exact path='/Women-jeans' component={WomenJeans} />
            <Route exact path='/Junior-Jeans' component={JuniorJeans} />
            <Route exact path='/Men-short' component={MenShort} />
            <Route exact path='/Women-Shorts' component={WomenShorts} />
            <Route exact path='/Junior-Shorts' component={JuniorShorts} />
            <Route exact path='/Men-Jacket' component={MenJacket} />
            <Route exact path='/Women-Jacket' component={WomenJacket} />
            <Route exact path='/Junior-Jacket' component={JuniorJacket} />
            <Route exact path='/Men-Jeans' component={MenJeans} />
            <Route exact path='/User-Login' component={UserLogin} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/order' component={Order} />
            </Switch>
            </Router>
        </Suspense>
    )
}