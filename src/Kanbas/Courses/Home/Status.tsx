export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <button>Unpublish</button> <button>Publish</button>
        <br></br>
        <br></br>
        <button>Import Existing Content</button>
        <div className="buttonBlock">
          <button id="Import from Commons">Import from Commons</button>
        </div>
        <div className="buttonBlock">
          <button id="Choose Home Page">Choose Home Page</button>
        </div>
        <div className="buttonBlock">
          <button id="View Course Stream">View Course Stream</button>
        </div>
        <div className="buttonBlock">
          <button id="New Announcement">New Announcement</button>
        </div>
        <div className="buttonBlock">
          <button id="New Analytics">New Analytics</button>
        </div>
        <div className="buttonBlock">
          <button id="View Course Notifications">View Course Notifications</button>
        </div>
      </div>
  );}
  