import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams, useNavigate } from "react-router";
import * as db from "../../Database";
import { MdOutlineAssignment } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const navigate = useNavigate();

  const handleAssignmentClick = (assignmentId: string) => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}`);
  };

  function formatDatetimeToHumanReadable(datetimeLocal: string): string {
    const date = new Date(datetimeLocal);
    
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
  
    return date.toLocaleString('en-US', options);
  }
  
  function isPastAvailability(availability: string): boolean {
    const currentDate = new Date();
    const availabilityDate = new Date(availability);
    return currentDate > availabilityDate;
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="input-group me-2" style={{ maxWidth: "250px", height: "50px" }}>
          <span className="input-group-text bg-white">
            <FaSearch className="fs-5 text-muted" />
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>

        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-2">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>

        <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </button>
      </div>
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments{" "}
            <ModuleControlButtons />
          </div>
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li 
                className="wd-lesson list-group-item p-3 d-flex justify-content-between align-items-center"
                key={assignment.id}
                onClick={() => handleAssignmentClick(assignment._id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-2 text-success fs-3" />
                </div>
                <div className="flex-grow-1 text-start">
                  <h6 className="fw-bold mb-2 fs-5">{assignment.title}</h6>

                  <div className="d-flex align-items-center mb-2 fs-6">
                    {assignment.modules.length > 1 ? (
                      <span className="text-danger">Multiple Modules</span>
                    ) : assignment.modules.length === 1 ? (
                      <span className="text-danger">{assignment.modules[0]}</span>
                    ) : (
                      <span className="text-danger">No Modules</span>
                    )}
                    <span className="mx-2">|</span>
                    <span>
                      {isPastAvailability(assignment.availability) ? (
                        <>
                          <b>Available until </b>
                          {formatDatetimeToHumanReadable(assignment.until)}
                        </>
                      ) : (
                        <>
                          <b>Not available until </b>
                          {formatDatetimeToHumanReadable(assignment.availability)}
                        </>
                      )}
                      {" | "}
                    </span>
                  </div>
                  <div className="d-flex align-items-center fs-6">
                    <span>
                      <b>Due </b> {formatDatetimeToHumanReadable(assignment.due)}
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                      <b>Points:</b> {assignment.points} pts
                    </span>
                  </div>
                </div>
                <div>
                  <LessonControlButtons />
                </div>
              </li>
            ))}
        </li>
      </ul>
    </div>
  );
}
