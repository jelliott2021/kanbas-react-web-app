import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import Lab6 from "./Lab6";
import { Route, Routes, Navigate } from "react-router";
export default function Pages() {
  return (
    <div id="wd-pages">
      <h1>John Elliott</h1>
      <h3>Section 1</h3>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
        <Route path="Lab5" element={<Lab5 />} />
        <Route path="Lab6" element={<Lab6 />} />
      </Routes>
    </div>
);}
