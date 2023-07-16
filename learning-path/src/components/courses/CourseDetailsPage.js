import { useLoaderData } from "react-router-dom";
import styles from "./CourseDetailsPage.module.css"
import LessonItem from "../lessons/LessonItem"
const CourseDetailsPage = () => {
    const courseDetailData = useLoaderData()
    //console.log(courseDetailData.overview)
    //console.log(courseDetailData.lessons)
    const lessons = []
    for (let lesson in courseDetailData.lessons){
        lessons.push({
            lessonId: lesson,
            lessonDescription: courseDetailData.lessons[lesson]
        })
    }
    //console.log(lessons)

    const imgPath = "/images/" + courseDetailData.title.toLowerCase() + ".jpg"
    return(
        <>
        <img src={imgPath} alt={courseDetailData.title} className={styles["coursedetail-img"]}/>
        <h3>{courseDetailData.title}</h3>
        <p>{courseDetailData.overview}</p>
        {lessons.map((lesson)=><LessonItem lessonId={lesson.lessonId} lessonDescription={lesson.lessonDescription}/>)}
        </>
    )

};

export async function loader({request, params}){
    const id = params.courseId
    const response = await fetch(`https://react-http-4d312-default-rtdb.firebaseio.com/courseDetails/cd${id}.json`)
    if(!response.ok){
        console.log("could not fetch data")
        return null
    }
    const data = await response.json()
    //console.log(data)
    return(data)

}


export default CourseDetailsPage;