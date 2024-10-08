import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {
      id: 'CS1234',
      title: 'CS1234 React JS',
      description: 'Full Stack software developer',
      image: '/images/course1.jpg',
    },
    {
      id: 'CS4700',
      title: 'CS4700 Networking',
      description: 'Computer Networking',
      image: '/images/course2.jpg',
    },
    {
      id: 'CS4530',
      title: 'CS4530 Javascript',
      description: 'Fundamentals of Software Engineering',
      image: '/images/course3.jpg',
    },
    {
      id: 'CS4400',
      title: 'CS4400 Racket',
      description: 'Programming Languages',
      image: '/images/course4.jpg',
    },
    {
      id: 'CS4600',
      title: 'CS4600 SQL',
      description: 'Database Design',
      image: '/images/course5.jpg',
    },
    {
      id: 'CS3200',
      title: 'CS3200 Java',
      description: 'Fundamentals of Computer Science 2',
      image: '/images/course6.jpg',
    },
    {
      id: 'CS1100',
      title: 'CS1100 Java',
      description: 'Fundamentals of Computer Science 1',
      image: '/images/course7.jpg',
    },
  ];

  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1><hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
      style={{ gap: "30px" }}>
        {courses.map(course => (
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course.id}/Home`}>
              <img src={course.image} width="100%" height={160} alt={course.title}/>
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                   {course.title}
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    {course.description}
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
