"use client";
import { Layout, StudentMyProfileComponent } from "@/components";
import Image from "next/image";
import DefaultImage from "@/assets/images/default.png";
import { getStudent } from "../actions";
import { useState, useEffect } from "react";

const SingleStudent = ({ params }) => {
  const [student, setStudent] = useState([]);
  const [pending, setPending] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setPending(true);
        const id = await params.id;
        const student = await getStudent(id);
        setStudent(student);
      } catch (error) {
        console.error("Error fetching student: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchStudent();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <StudentMyProfileComponent student={student} />;
      case "academics":
        return <p className="text-gray-800">Academics Details Placeholder</p>;
      case "progress":
        return <p className="text-gray-800">Progress Details Placeholder</p>;
      case "communication":
        return (
          <p className="text-gray-800">Communication Details Placeholder</p>
        );
      case "fee":
        return <p className="text-gray-800">Fee Details Placeholder</p>;
      case "resources":
        return <p className="text-gray-800">Resources Details Placeholder</p>;
      case "community":
        return <p className="text-gray-800">Community Details Placeholder</p>;
      case "system-actions":
        return <p className="text-gray-800">System Actions Placeholder</p>;
      default:
        return <p className="text-gray-800">Select a tab to view details.</p>;
    }
  };

  if (pending) {
    return (
      <Layout>
        <div className="flex bg-gray-50 min-h-screen items-center justify-center">
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </Layout>
    );
  }

  if (!student) {
    return (
      <Layout>
        <div className="flex bg-gray-50 min-h-screen items-center justify-center">
          <p className="text-gray-500">Student data not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex bg-gray-50 min-h-screen">
        <section className="flex-1 p-8">
          <div className="flex space-x-4 border-b mb-6">
            {[
              { id: "profile", label: "My Profile" },
              { id: "academics", label: "Academics" },
              { id: "progress", label: "Progress" },
              { id: "communication", label: "Communication" },
              { id: "fee", label: "Fee" },
              { id: "resources", label: "Resources" },
              { id: "community", label: "Community" },
              { id: "system-actions", label: "System Actions" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-medium ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {renderContent()}
        </section>
      </div>
    </Layout>
  );
};

export default SingleStudent;
