"use client";
import { Layout, TeacherMyProfileComponent } from "@/components";
import { useState, useEffect } from "react";
import { getAuthUser } from "./actions";

const SettingsPage = () => {
  const [authUser, setAuthUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        setPending(true);
        const user = await getAuthUser();
        setAuthUser(user);
      } catch (error) {
        console.error("Error fetching authenticated user: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchAuthUser();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <TeacherMyProfileComponent user={authUser} />;
      case "system-actions":
        return <p className="text-gray-800">System Actions Placeholder</p>;
      case "security":
        return <p className="text-gray-800">Security</p>;
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

  if (!authUser) {
    return (
      <Layout>
        <div className="flex bg-gray-50 min-h-screen items-center justify-center">
          <p className="text-gray-500">User data not found.</p>
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
              { id: "system-actions", label: "System Actions" },
              { id: "security", label: "Security" },
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

export default SettingsPage;
