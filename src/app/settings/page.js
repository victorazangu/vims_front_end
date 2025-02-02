"use client";
import {
  Layout,
  SystemActionItem,
  ProfileForm,
  SecurityForm,
} from "@/components";
import { useState, useEffect } from "react";
import { fetchSystemActions } from "./actions";

const SettingsPage = () => {
  const [systemSettings, setSystemSettings] = useState({});
  const [pending, setPending] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({});
  const [securityData, setSecurityData] = useState({});
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setPending(true);
        const data = await fetchSystemActions();
        setSystemSettings(data);
        setProfileData({
          firstName: "Victor",
          lastName: "Azangu",
          email: "victor@example.com",
          phone: "(213) 555-1234",
          bio: "Software Engineer",
          address: {
            country: "United States of America",
            state: "CALIFORNIA, USA",
            postalCode: "ERT 62574",
            taxId: "AS56478969",
          },
        });
        setSecurityData({
          currentPassword: "password",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching system settings: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleUpdateSettings = (actionId, updatedSettings) => {
    setSystemSettings((prevSettings) => {
      return {
        ...prevSettings,
        [actionId]: {
          ...prevSettings[actionId],
          settings: updatedSettings,
        },
      };
    });
    console.log("Updated settings:", actionId, updatedSettings);
  };
  const handleProfileSubmit = (updatedData) => {
    setProfileData(updatedData);
    console.log("Updated profile:", updatedData);
  };
  const handleSecuritySubmit = (updatedData) => {
    setSecurityData(updatedData);
    console.log("Updated security:", updatedData);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <ProfileForm
            initialProfileData={profileData}
            onSubmit={handleProfileSubmit}
          />
        );
      case "system-actions":
        return (
          <div>
            {Object.values(systemSettings).map((action) => (
              <SystemActionItem
                key={action.id}
                action={action}
                onUpdateSettings={handleUpdateSettings}
              />
            ))}
          </div>
        );
      case "security":
        return (
          <SecurityForm
            initialSecurityData={securityData}
            onSubmit={handleSecuritySubmit}
          />
        );
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
