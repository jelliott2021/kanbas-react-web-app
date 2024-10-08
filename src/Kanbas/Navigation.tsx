import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./styles.css";
export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
        rel="noreferrer"
      >
        <img src="/images/NEULogo2.png" width="75px" alt="NEU Logo" />
      </a>
      <NavLink
        to="/Kanbas/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <FaRegCircleUser
              className={`fs-1 ${isActive ? "text-danger" : "text-white"}`}
            />
            <span>Account</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        Dashboard{" "}
      </NavLink>
      <NavLink
        to="/Kanbas/Dashboard"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </NavLink>

      <NavLink
        to="/Kanbas/Calendar"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        Calendar{" "}
      </NavLink>
      <NavLink
        to="/Kanbas/Inbox"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <span className="d-block">Inbox</span>
      </NavLink>
      <NavLink
        to="/Labs"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "bg-white text-danger" : "bg-black text-white"
          }`
        }
      >
        <IoSettingsOutline className="fs-1 text-danger" />
        <span className="d-block">Labs</span>
      </NavLink>
    </div>
  );
}
