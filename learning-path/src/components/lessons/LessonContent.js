import "./LessonContent.css"
const LessonContent = (props) => {
  return (
    <>
      <h3 className="lesson-title">{props.title}</h3>
      <p className="lesson-description">{props.description}</p>
    </>
  );
};

export default LessonContent;
