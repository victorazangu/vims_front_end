"use client";
import { useState, useEffect, useMemo } from "react";
import styles from "./grades.module.css";
import { fetchMockedGradesData } from "./actions";
import { Layout } from "@/components";

const Page = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState({});
  const [classData, setClassData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchMockedGradesData();
      setStudents(data.students);
      setGrades(data.grades);
      setClassData(data.classData);
    };

    fetchInitialData();
  }, []);
  const subjects = useMemo(() => {
    if (students.length > 0 && grades[students[0]?.id]) {
      return Object.keys(grades[students[0]?.id]);
    }
    return [];
  }, [students, grades]);
  const filteredStudents = useMemo(() => {
    if (!searchTerm) return students;
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);
  const studentsWithAveragesAndPositions = useMemo(() => {
    return filteredStudents
      .map((student) => {
        const studentGrades = grades[student.id];
        if (!studentGrades) {
          return { ...student, average: "N/A", position: "N/A" };
        }

        const total = Object.values(studentGrades).reduce(
          (acc, curr) => acc + curr,
          0
        );
        const average = (total / Object.keys(studentGrades).length).toFixed(2);
        return { ...student, average: parseFloat(average) };
      })
      .sort((a, b) => {
        if (a.average === "N/A") return 1;
        if (b.average === "N/A") return -1;
        return sortOrder === "asc"
          ? a.average - b.average
          : b.average - a.average;
      })
      .map((student, index, sortedStudents) => {
        if (student.average !== "N/A") {
          const position =
            sortedStudents.findIndex((s) => s.id === student.id) + 1;
          return { ...student, position };
        }
        return { ...student };
      });
  }, [grades, filteredStudents, sortOrder]);
  const handleSort = (subject) => {
    if (sortBy === subject) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(subject);
      setSortOrder("asc");
    }
  };

  return (
    <Layout>
      <div className={styles.gradesPage}>
        <h1>
          Grades for {classData?.className} ({classData?.teacher})
        </h1>
        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search student"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <table className={styles.gradesTable}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Student Name</th>
              {subjects.map((subject) => (
                <th
                  key={subject}
                  onClick={() => handleSort(subject)}
                  className={styles.sortableHeader}
                >
                  {subject}
                  {sortBy === subject && (sortOrder === "asc" ? " ▲" : " ▼")}
                </th>
              ))}
              <th
                onClick={() => handleSort("average")}
                className={styles.sortableHeader}
              >
                Average{" "}
                {sortBy === "average" && (sortOrder === "asc" ? " ▲" : " ▼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {studentsWithAveragesAndPositions.map((student) => (
              <tr key={student.id}>
                <td>{student.position}</td>
                <td>{student.name}</td>
                {subjects.map((subject) => (
                  <td key={subject}>
                    {grades[student.id]?.[subject] || "N/A"}
                  </td>
                ))}
                <td>{student.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Page;
