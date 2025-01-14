"use client";
import { useState } from "react";
import { Layout, Table, SimpleButton } from "@/components";
import { tableColumns, tableData, tableActions } from "@/data/constants";
const Student = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!showModal);

  return (
    <Layout>
      <div className="p-2 m-2 ">
        <div className="flex justify-end">
          <SimpleButton title={"Add Student"} onClick={handleModal} />
        </div>
      </div>
      <div className="pr-3 mr-3">
        <Table
          caption="Students"
          description="list of students and more."
          columns={tableColumns}
          data={tableData}
          actions={tableActions}
        />
      </div>
    </Layout>
  );
};

export default Student;
