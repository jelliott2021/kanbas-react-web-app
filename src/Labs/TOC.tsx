import { Link } from "react-router-dom";

export default function TOC() {
    return (
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Labs 1</Link></li>
        <li><Link to="/Labs/Lab2">Labs 2</Link></li>
        <li><Link to="/Labs/Lab3">Labs 3</Link></li>
        <li><Link to="/Labs/Lab4">Labs 4</Link></li>
        <li><Link to="/Labs/Lab5">Labs 5</Link></li>
        <li><Link to="/Labs/Lab6">Labs 6</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
        <li><a href="https://github.com/jelliott2021/kanbas-react-web-app/tree/assignment1" id="wd-repo-link" target="_blank" rel="noreferrer">Repository</a><br/></li>
      </ul>
    );
  }
  