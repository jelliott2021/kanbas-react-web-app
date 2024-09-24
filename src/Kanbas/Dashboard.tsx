import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS1234/Home">
            <img src="/images/course1.jpg" width={200} alt="React JS course" />
            <div>
              <h5>
                 CS1234 React JS
                 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS4700/Home">
            <img src="/images/course2.jpg" width={200} alt="React JS course" />
            <div>
              <h5>
                 CS4700 Networking
                 </h5>
              <p className="wd-dashboard-course-title">
                Computer Networking
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS4530/Home">
            <img src="/images/course3.jpg" width={200} height={100} alt="React JS course" />
            <div>
              <h5>
                 CS4530 Javascript
                 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Software Engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS4400/Home">
            <img src="/images/course4.jpg" width={200} alt="React JS course" />
            <div>
              <h5>
                 CS4400 Racket
                 </h5>
              <p className="wd-dashboard-course-title">
                Programing Languages
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS3600/Home">
            <img src="/images/course5.jpg" width={200} alt="React JS course" />
            <div>
              <h5>
                 CS3600 SQL
                 </h5>
              <p className="wd-dashboard-course-title">
                Database Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS3200/Home">
            <img src="/images/course6.jpg" width={200} alt="React JS course" />
            <div>
              <h5>
                 CS3200 Java
                 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/CS1100/Home">
            <img src="/images/course7.jpg" width={200} alt="React JS course" />
            <div>
              <h5>
                 CS1100 Java
                 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 1
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


