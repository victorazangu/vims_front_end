"use server";
import { teachersDataTwo } from "@/data/constants";

export const getTeachers = async() => {
  try {
    return teachersDataTwo;
  } catch (error) {
    console.log("error ", error);
  }
};

export const getTeacher = async (id) => {
  try {
    const teacher = teachersDataTwo.find((teacher) => teacher.emp_id === id);
    return teacher;
  } catch (error) {
    console.log("error ", error);
  }
};

export const createTeacher = async (formData) => {
  try {
    const rawFormData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateTeacher = async (formData) => {
  try {
    const rawFormData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const deleteTeacher = async (formData) => {
  try {
    const rawFormData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};
