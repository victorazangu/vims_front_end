"use client";
import {
  Layout,
  SimpleButton,
  CalendarComponent,
  DropdownFilter,
  DateRangePicker,
  CustomSelect,
} from "@/components";
import { useState, useEffect } from "react";
import { getClasses } from "./actions";

const Class = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);
  const [classes, setClasses] = useState([]);
  const [pending, setPending] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [fromDate, setFromDate] = useState(
    new Date(new Date().getFullYear(), 0, 2).toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(
    new Date(new Date().getFullYear(), 11, 32).toISOString().split("T")[0]
  );
  const [selectedUser, setSelectedUser] = useState("");

  const users = [
    "Wade Cooper",
    "Arlene Mccoy",
    "Devon Webb",
    "Tom Cook",
    "Tanya Fox",
    "Hellen Schmidt",
    "Caroline Schultz",
  ];
  const dropdownOptions = ["Form 1", "Form 2", "Form 3", "Form 4"];

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  const handleFromDateChange = (value) => {
    setFromDate(value);
    console.log("From Date:", value);
  };

  const handleToDateChange = (value) => {
    setToDate(value);
    console.log("To Date:", value);
  };

  const logFilters = () => {
    console.log("Filters:");
    console.log("Class:", selectedOption);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
    console.log("Assigned to:", selectedUser);
  };

  useEffect(() => {
    logFilters();
  }, [selectedOption, fromDate, toDate, selectedUser]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setPending(true);
        const classes = await getClasses();
        setClasses(classes);
      } catch (error) {
        console.error("Error fetching teachers: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchClasses();
  }, []);
  return (
    <Layout>
      <div className="sticky top-0 bg-white z-10 pr-3 p-1 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div>
              <DropdownFilter
                options={dropdownOptions}
                selected={selectedOption}
                onChange={setSelectedOption}
                placeholder="Class"
              />
            </div>
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
                options={users}
                selected={selectedUser}
                onChange={setSelectedUser}
              />
            </div>
          </div>
          <div>
            <SimpleButton title={"Add Class"} onClick={handleModal} />
          </div>
        </div>
      </div>
      <div className="pr-3 mr-3">
        <CalendarComponent events={classes} />
      </div>
    </Layout>
  );
};

export default Class;
