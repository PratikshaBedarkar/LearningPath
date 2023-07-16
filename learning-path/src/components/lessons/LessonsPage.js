import { useLoaderData, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import LessonContent from "./LessonContent";
const LessonsPage = () => {
  const lessonsData = useLoaderData();
  const params = useParams();
  return (
    <>
      <Sidebar lessons={lessonsData} />
      <LessonContent
        title={lessonsData[params.lessonId].title}
        description={lessonsData[params.lessonId].description}
      />
    </>
  );
};

export default LessonsPage;

export async function loader({ request, params }) {
  const courseId = params.courseId;
  const response = await fetch(
    `https://react-http-4d312-default-rtdb.firebaseio.com/Lessons/cd${courseId}.json`
  );
  if (!response.ok) {
    console.log("could not fetch data");
    return null;
  }
  const data = await response.json();
  //console.log(data)
  return data;
}
