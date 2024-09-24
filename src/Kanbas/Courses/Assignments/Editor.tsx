export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select name="wd-group" id="wd-group"> 
              <option value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="exams">EXAMS</option>
              <option value="project">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select name="wd-display-grade-as" id="wd-display-grade-as"> 
              <option value="percentage">Percentage</option>
              <option value="letter">Letter</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="wd-submission-type" id="wd-submission-type"> 
              <option value="percentage">Online</option>
              <option value="letter">In Person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td align="left" valign="top">
            <label htmlFor="wd-submission-type">Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td align="right" valign="top">
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td> </td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>
            <input type ="date" id="wd-due-date" name="wd-due-date"/>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
         <td> </td>
          <td>
            <input type ="date" id="wd-available-from" name="wd-available-from"/>
          </td>
          <td>
            <input type ="date" id="wd-available-until" name="wd-available-until"/>
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <hr></hr>
          </td>
        </tr>
        <tr>
         <td> </td>
         <td> </td>
          <td>
            <button id="wd-cancel" type = "button"> Cancel </button>
            <button id="wd-save" type = "button"> Save </button>
          </td>
        </tr>
      </table>
    </div>
);}
