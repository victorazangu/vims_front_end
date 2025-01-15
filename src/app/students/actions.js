"use server";
import { tableData } from "@/data/constants";

export const createStudent = async (formData) => {
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

export const getStudents = async () => {
  try {
    return tableData;
  } catch (error) {
    console.log("error ", error);
  }
};

export const getStudent = async (id) => {
  try {
    console.log(id);
    const student = tableData.find((student) => student.id == id);
    console.log("student ", student);
    return student;
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateStudent = async (formData) => {
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

export const deleteStudent = async (formData) => {
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
