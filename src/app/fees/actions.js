import { feeData } from "@/data/constants";
export const createFee = async (formData) => {
  try {
    const rawFormData = {
      amount: formData.get("amount"),
      category: formData.get("category"),
      dueDate: formData.get("dueDate"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const getFees = async () => {
  try {
    return feeData;
  } catch (error) {
    console.log("error ", error);
  }
};

export const getFee = async (id) => {
  try {
    console.log(id);
    const fee = feeData.find((fee) => fee.id == id);
    console.log("fee ", fee);
    return fee;
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateFee = async (formData) => {
  try {
    const rawFormData = {
      amount: formData.get("amount"),
      category: formData.get("category"),
      dueDate: formData.get("dueDate"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};

export const deleteFee = async (formData) => {
  try {
    const rawFormData = {
      amount: formData.get("amount"),
      category: formData.get("category"),
      dueDate: formData.get("dueDate"),
    };

    console.log("rawFormData ", rawFormData);
  } catch (error) {
    console.log("error ", error);
  }
};
