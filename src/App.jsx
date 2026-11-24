
import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
      <p>Welcome to Student Details Portal</p>
    </header>
  );
}

function StudentList() {
  const students = [
    { id: 1, name: "Amrutha", marks: 85 },
    { id: 2, name: "Rahul", marks: 35 },
    { id: 3, name: "Priya", marks: 75 },
    { id: 4, name: "Kiran", marks: 30 },
    { id: 5, name: "Sita", marks: 90 }
  ];

  return (
    <div className="container">
      <h2>Student Details</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
              <td className={s.marks >= 40 ? "pass" : "fail"}>
                {s.marks >= 40 ? "PASS" : "FAIL"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <h3>Total Students: {students.length}</h3>
        <p>
          Passed: {students.filter(s => s.marks >= 40).length}
        </p>
        <p>
          Failed: {students.filter(s => s.marks < 40).length}
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>End of Student Details</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  );
}

export default App;

