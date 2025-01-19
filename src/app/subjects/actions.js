import { subjectsData } from "@/data/constants";
export const createSubject = async (formData) => {
  try {
    const rawFormData = {
      name: formData.get("name"),
      code: formData.get("code"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const getSubjects = async () => {
  try {
    return subjectsData;
  } catch (error) {
    console.log("error ", error);
  }
};

export const getSubject = async (id) => {
  try {
    console.log(id);
    const subject = subjectsData.find((subject) => subject.id == id);
    console.log("subject ", subject);
    return subject;
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateSubject = async (formData) => {
  try {
    const rawFormData = {
      name: formData.get("name"),
      code: formData.get("code"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const deleteSubject = async (formData) => {
  try {
    const rawFormData = {
      name: formData.get("name"),
      code: formData.get("code"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};
