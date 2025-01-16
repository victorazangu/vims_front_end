"use server";
import { classesData } from "@/data/constants";

export const getClasses = async () => {
  try {
    return classesData;
  } catch (error) {
    console.log("error ", error);
  }
};

export const getClass = async (id) => {
  try {
    const classData = classesData.find((classData) => classData.id === id);
    return classData;
  } catch (error) {
    console.log("error ", error);
  }
};

export const createClass = async (formData) => {
  try {
    const rawFormData = {
      class_name: formData.get("class_name"),
      class_code: formData.get("class_code"),
      class_description: formData.get("class_description"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateClass = async (formData) => {
  try {
    const rawFormData = {
      class_name: formData.get("class_name"),
      class_code: formData.get("class_code"),
      class_description: formData.get("class_description"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const deleteClass = async (formData) => {
  try {
    const rawFormData = {
      class_name: formData.get("class_name"),
      class_code: formData.get("class_code"),
      class_description: formData.get("class_description"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};
