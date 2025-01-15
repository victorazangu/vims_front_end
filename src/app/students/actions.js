"use server";

export const createStudent = async (formData) => {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
  const rawFormData = {
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
  };

  console.log("rawFormData ", rawFormData);
};
