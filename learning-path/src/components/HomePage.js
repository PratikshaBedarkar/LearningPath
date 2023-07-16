import { Link } from "react-router-dom";
const HomePage = () => {
    return(
        <>
        <h1>Welcome!</h1>
        <p>View all <Link to="/courses">Courses</Link></p>
        </>
    )
}

export default HomePage;