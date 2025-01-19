"use client";
import { useState } from "react";

const LoginSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    setError("");
  };

  return (
    <div className="login-settings">
      <h3 className="text-xl font-semibold mb-4">Login Settings</h3>

      <div className="form-group">
        <label>Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="input"
        />
      </div>

      <div className="form-group">
        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input"
        />
      </div>

      <div className="form-group">
        <label>Confirm New Password</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="input"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        onClick={handleChangePassword}
        className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Change Password
      </button>
    </div>
  );
};

export default LoginSettings;
