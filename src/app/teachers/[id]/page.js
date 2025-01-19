
"use client";
import { Layout, TeacherMyProfileComponent } from "@/components";
import Image from "next/image";
import DefaultImage from "@/assets/images/default.png";
import Link from "next/link";
import { getTeacher } from "../actions";
import { useState, useEffect } from "react";

const SingleTeacher = ({ params }) => {
  const [teacher, setTeacher] = useState([]);
  const [pending, setPending] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setPending(true);
        const id = await params.id;
        const teacher = await getTeacher(id);
        setTeacher(teacher);
      } catch (error) {
        console.error("Error fetching teachers: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchTeachers();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <TeacherMyProfileComponent teacher={teacher} />;
      case "academics":
        return <p className="text-gray-800">Academics Details Placeholder</p>;
      case "communication":
        return (
          <p className="text-gray-800">Communication Details Placeholder</p>
        );
      case "administrative":
        return <p className="text-gray-800">Administrative Placeholder</p>;
      case "data-management":
        return <p className="text-gray-800"> Data Management Placeholder</p>;
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

  if (!teacher) {
    return (
      <Layout>
        <div className="flex bg-gray-50 min-h-screen items-center justify-center">
          <p className="text-gray-500">Teacher data not found.</p>
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
              { id: "communication", label: "Communication" },
              { id: "administrative", label: "Administrative" },
              { id: "data-management", label: "Data Management" },
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

export default SingleTeacher;
