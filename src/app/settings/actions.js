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
