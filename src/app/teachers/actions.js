"use server";

export const createTeacher = async (formData) => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
  const rawFormData = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
  };

  console.log("rawFormData ", rawFormData);
};
