"use client";
import { useState, useEffect } from "react";
import {
  Layout,
  Table,
  SimpleButton,
  MainModal,
  MainForm,
  Input,
  Submit,
  CustomSelect,
  DateRangePicker,
} from "@/components";
import { tableColumnsFees, tableActions } from "@/data/constants";
import { getFees, createFee, updateFee, deleteFee } from "./actions";

const Fees = () => {
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedFee, setSelectedFee] = useState(null);
  const [fees, setFees] = useState([]);
  const [feeAmount, setFeeAmount] = useState("");
  const [feeCategory, setFeeCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [pending, setPending] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fromDate, setFromDate] = useState(
    new Date(new Date().getFullYear(), 0, 2).toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(
    new Date(new Date().getFullYear(), 11, 32).toISOString().split("T")[0]
  );

  const handleModal = () => setShowModal(!showModal);
  const handleOpenModal = (actionType, rowData) => {
    setActionType(actionType);
    if (
      actionType === "edit" ||
      actionType === "delete" ||
      actionType === "view"
    ) {
      setSelectedFee(rowData);
      setFeeAmount(rowData.amount);
      setFeeCategory(rowData.category);
      setDueDate(rowData.dueDate);
    }
    setShowModal(true);
  };

  useEffect(() => {
    const fetchFees = async () => {
      try {
        setPending(true);
        const feesData = await getFees();
        setFees(feesData);
      } catch (error) {
        console.error("Error fetching fees: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchFees();
  }, []);

  const feeCategories = ["Tuition", "Hostel", "Exam", "Library"];

  const renderModalContent = () => {
    switch (actionType) {
      case "add":
        return (
          <>
            <div className="mb-4">
              <Input
                label="Fee Amount"
                name="amount"
                type="number"
                required={true}
                placeholder="Enter Fee Amount"
                value={feeAmount}
                onChange={(e) => setFeeAmount(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <CustomSelect
                label="Fee Category"
                options={feeCategories}
                selected={feeCategory}
                onChange={setFeeCategory}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Due Date"
                name="dueDate"
                type="date"
                required={true}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <Submit name="Add Fee" />
          </>
        );
      case "edit":
        return (
          <>
            <div className="mb-4">
              <Input
                label="Fee Amount"
                name="amount"
                type="number"
                required={true}
                value={feeAmount}
                onChange={(e) => setFeeAmount(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <CustomSelect
                label="Fee Category"
                options={feeCategories}
                selected={feeCategory}
                onChange={setFeeCategory}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Due Date"
                name="dueDate"
                type="date"
                required={true}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <Submit name="Update Fee" />
          </>
        );
      case "delete":
        return (
          <div className="text-center">
            <p className="mb-4">Are you sure you want to delete this fee?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
                onClick={handleModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
                onClick={() => deleteFee(selectedFee.id)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        );
      case "view":
        return (
          <>
            <div className="mb-2">
              <strong>Fee Amount:</strong> {feeAmount}
            </div>
            <div className="mb-2">
              <strong>Fee Category:</strong> {feeCategory}
            </div>
            <div className="mb-2">
              <strong>Due Date:</strong> {dueDate}
            </div>
            <button
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
              onClick={handleModal}
            >
              Close
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="sticky top-0 bg-white z-10 pr-3 p-1 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <DateRangePicker
                fromDate={fromDate}
                toDate={toDate}
                onFromDateChange={setFromDate}
                onToDateChange={setToDate}
              />
            </div>
            <div className="">
              <CustomSelect
                label=""
                options={feeCategories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>
          <div>
            <SimpleButton
              title={"Add Fee"}
              onClick={() => {
                setActionType("add");
                setFeeAmount("");
                setFeeCategory("");
                setDueDate("");
                handleModal();
              }}
            />
          </div>
        </div>
      </div>

      <div className="pr-3 mr-3 mt-4">
        <Table
          caption="Fees"
          description="List of all fee records."
          columns={tableColumnsFees}
          data={fees}
          actions={tableActions}
          onOpenModal={handleOpenModal}
        />
      </div>

      <MainModal
        isOpen={showModal}
        onClose={handleModal}
        title={
          actionType === "add"
            ? "Add Fee"
            : actionType === "edit"
            ? `Edit Fee - ${selectedFee?.category}`
            : actionType === "view"
            ? `View Fee - ${selectedFee?.category}`
            : `Delete Fee - ${selectedFee?.category}`
        }
      >
        <MainForm action={actionType === "add" ? createFee : updateFee}>
          {renderModalContent()}
        </MainForm>
      </MainModal>
    </Layout>
  );
};

export default Fees;
