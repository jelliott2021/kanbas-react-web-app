export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a><br/>
            <p className="wd-assignment-available">
              Available until this date
            </p>
            <p className="wd-assignment-due">
              <b>Due</b> May 20 at 11:59pm
            </p>
            <p className="wd-assignment-points">
              100 pts
            </p>
            
          </li>
          <li className="wd-assignment-list-item">
          {"add more assignments"}
          </li>
        </ul>
      </div>
  );}
  