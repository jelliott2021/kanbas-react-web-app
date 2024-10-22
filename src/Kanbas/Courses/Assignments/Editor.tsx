import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as db from "../../Database";
import { FaChevronDown } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const [assignment, setAssignment] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedAssignment = db.assignments.find(
      (a: any) => a.id === assignmentId
    );
    if (selectedAssignment) {
      setAssignment(selectedAssignment);
    }
  }, [assignmentId]);

  const handleSave = () => {
    navigate(`/Kanbas/Courses/${cid}/assignments`);
  };

  if (!assignment) {
    return <div>Could not find assignment</div>;
  }

  return (
    <div className="container">
      <h4 className="mb-4">Edit Assignment: {assignment.title}</h4>

      <label htmlFor="wd-name" className="col-sm-4 col-form-label">
        Assignment Name
      </label>
      <div className="col-sm-12">
        <input
          id="wd-name"
          className="form-control"
          defaultValue={assignment.title}
          readOnly
        />
      </div>

      <label htmlFor="wd-description" className="col-sm-2 col-form-label">
        Description
      </label>
      <div className="col-sm-12">
        <textarea
          id="wd-description"
          className="form-control"
          defaultValue={assignment.description}
        ></textarea>
      </div>
      <br />

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-4 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-8">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            defaultValue={assignment.points}
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-4 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-8">
          <div className="input-group">
            <select
              id="wd-group"
              className="form-control"
              defaultValue={assignment.group}
            >
              <option value="assignments">Assignments</option>
              <option value="quizzes">Quizzes</option>
              <option value="exams">Exams</option>
              <option value="project">Project</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-4 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-8">
          <div className="input-group">
            <select
              id="wd-display-grade-as"
              className="form-control"
              defaultValue={assignment.gradeDisplayType}
            >
              <option value="percentage">Percentage</option>
              <option value="letter">Letter</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <label className="col-sm-4 col-form-label text-end">Submission Type</label>
        <div className="col-sm-8">
          <div className="input-group">
            <select
              id="wd-submission-type"
              className="form-control"
              defaultValue={assignment.submissionType}
            >
              <option value="online">Online</option>
              <option value="in-person">In Person</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <label className="col-sm-4 col-form-label text-end">Assign</label>
        <div className="col-sm-8">
          <div className="card" style={{ width: '100%' }}>
            <div className="card-body">
              
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label">
                  Assign to
                </label>
                <input
                  id="wd-assign-to"
                  className="form-control"
                  defaultValue="Everyone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">
                  Due
                </label>
                <div className="input-group">
                  <input
                    id="wd-due-date"
                    type="datetime-local"
                    className="form-control"
                    defaultValue={assignment.due}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="wd-available-from" className="form-label">
                    Available from
                  </label>
                  <div className="input-group">
                    <input
                      id="wd-available-from"
                      type="datetime-local"
                      className="form-control"
                      defaultValue={assignment.availability}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until" className="form-label">
                    Until
                  </label>
                  <div className="input-group">
                    <input
                      id="wd-available-until"
                      type="datetime-local"
                      className="form-control"
                      defaultValue={assignment.until}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/assignments`}
          id="wd-cancel"
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <button id="wd-save" className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
