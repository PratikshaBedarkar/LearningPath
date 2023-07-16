import classes from "./LessonItem.module.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const LessonItem = (props) => {
    const params = useParams()
    return(
        <li key={props.lessonId} className={classes["lesson-item"]}><Link to={`/lessons/${params.courseId}/${props.lessonId}`}>{props.lessonDescription}</Link></li>
    )

}

export default LessonItem;