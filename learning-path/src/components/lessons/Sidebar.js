import "./Sidebar.css";
import { NavLink, useParams } from "react-router-dom";
const Sidebar = (props) => {
  //console.log(props.lessons)
  //console.log(Object.keys(props.lessons))
  //Object.keys(props.lessons).map((id)=>console.log(props.lessons[id].title))
  const params = useParams();
  return (
    <ul className="sidebar">
      {Object.keys(props.lessons).map((id) => (
        <li key={props.lessons[id].id}>
          <NavLink to={`/lessons/${params.courseId}/${id}`} className={({isActive})=> isActive? 'active':''}>
            {props.lessons[id].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
