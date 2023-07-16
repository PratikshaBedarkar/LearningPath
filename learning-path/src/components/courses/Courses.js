import { useLoaderData } from "react-router-dom";
import CourseItem from "./CourseItem";
import "./Courses.css";
// const COURSES = [
//   {
//     courseId: 1,
//     courseTitle: "Reactjs",
//     courseDescription: "Reactjs",
//     rating: 3.5,
//   },
//   {
//     courseId: 2,
//     courseTitle: "Javascript",
//     courseDescription: "Javascript",
//     rating: 4.5,
//   },
//   { courseId: 3, courseTitle: "HTML", courseDescription: "HTML", rating: 3.9 },
//   { courseId: 4, courseTitle: "CSS", courseDescription: "CSS", rating: 4.2 },
// ];
const Courses = () => {
  const courses = useLoaderData()
  // console.log(courses)
  return (
    <>
      <h1 className="text-success">Courses</h1>
      <section className="container">
        <section className="row">
            {courses.map((course)=><CourseItem className="col-lg-3 col-md-6 col-sm-12" id={course.id} title={course.title} description={course.description} rating={course.rating}/>)}
        </section>
      </section>
    </>
  );
};


export async function loader(){
  const response = await fetch('https://react-http-4d312-default-rtdb.firebaseio.com/courses.json')
  if(!response.ok){
    console.log("could not fetch data")
    return null
  }
  const data = await response.json()
  // console.log(data)
  const loadedData = []
  for (let course in data){
    // console.log(course)
    loadedData.push({
      id: data[course].id,
      title: data[course].title,
      description: data[course].description,
      rating: data[course].rating
    })
  }
  return loadedData;
}

export default Courses;
