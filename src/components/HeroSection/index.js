import styles from "./style.module.css"
import { Link } from "react-router-dom";


const HeroSection = () =>{
    return(
        <div className={styles.heroSection}>
            <div className={styles.heroBox}>
                <span className={styles.heroHeading}>Al Ummat Clothing <br />Your One Stop Shop.</span><br/>
                <div className={styles.btnBox}>
                <Link to="/Men-Jeans" style={{textDecoration:"none"}}>
                <span className={styles.btnSignUp}>View Products</span>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;