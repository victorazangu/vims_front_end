import DefaultImage from "@/assets/images/default.png";
export const getAuthUser = async () => {
  const dummyAuthUser = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "teacher",
    image: DefaultImage,
    createdAt: "2021-01-01T00:00:00Z",
    updatedAt: "2021-01-01T00:00:00Z",
  };
  return dummyAuthUser;
};


export const initialSystemSettings = {
  userManagement: {
    id: "userManagement",
    name: "User Management",
    settings: {
      enableUserRegistration: true,
      defaultUserRole: "Student",
    },
  },
  schoolConfig: {
    id: "schoolConfig",
    name: "School Configuration",
    settings: {
      schoolName: "Sample School",
      academicYear: "2024-2025",
      currency: "$",
      timeZone: "UTC",
    },
  },
   emailSettings: {
    id: 'emailSettings',
    name: 'Email Settings',
      settings: {
        smtpHost: 'smtp.example.com',
        smtpPort: 587,
        smtpUser: 'user@example.com',
         useSsl: true,
      }
  },
  backupRestore: {
      id: 'backupRestore',
      name: "Backup and Restore",
     settings: {
         backupPath: "/var/backups"
     }
  }
};


export const fetchSystemActions = async () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(initialSystemSettings)
      },200)
  })
};