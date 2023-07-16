import "./CourseItem.css";
import { Link } from "react-router-dom";
const CourseItem = (props) => {
  const imgPath = "/images/" + props.title.toLowerCase() + ".jpg"
  return (
    <section className={`${props.className} mt-3`}>
      <Link to={`/coursesDetails/${props.id}`} className="courseitem text-black text-decoration-none">
        <img src={imgPath} alt={props.title} className="course-img"/>
        <p className="fw-bold">{props.title}</p>
        <p>{props.description}</p>
        <p>{props.rating}</p>
      </Link>
    </section>
  )
};

export default CourseItem;
