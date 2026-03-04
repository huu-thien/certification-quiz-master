import { useNavigate } from "react-router-dom";
import { CourseSelector } from "../components/CourseSelector";
import { getAllCourses } from "../data";

export default function HomePage() {
  const navigate = useNavigate();
  const courses = getAllCourses();

  return (
    <CourseSelector
      courses={courses}
      onSelectCourse={(course) => {
        navigate(`/quiz/${course.id}`);
      }}
    />
  );
}
