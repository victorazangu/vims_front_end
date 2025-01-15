"use client";
import { Layout } from "@/components";
import Image from "next/image";
import DefaultImage from "@/assets/images/default.png";
import Link from "next/link";
import { getStudent } from "../actions";
import { useState, useEffect } from "react";

const SingleStudent = ({ params }) => {
  const [student, setStudent] = useState([]);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setPending(true);
        const id = await params.id;
        const student = await getStudent(id);
        setStudent(student);
      } catch (error) {
        console.error("Error fetching student: ", error);
      } finally {
        setPending(false);
      }
    };

    fetchStudent();
  }, []);
  console.log("students ", student);
  if (pending) {
    return (
      <Layout>
        <div className="flex bg-gray-50 min-h-screen items-center justify-center">
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </Layout>
    );
  }
  if (!student) {
    return (
      <Layout>
        <div className="flex bg-gray-50 min-h-screen items-center justify-center">
          <p className="text-gray-500">Student data not found.</p>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="flex bg-gray-50 min-h-screen">
        <aside className="w-64 bg-white shadow-lg p-6">
          <nav className="space-y-4">
            <Link href="#" className="block text-blue-600 font-medium">
              My Profile
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              Academics
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              Progress
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              Communication
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              Resources
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              Community
            </Link>
            <Link href="#" className="block text-gray-600 hover:text-blue-600">
              System Actions
            </Link>
          </nav>
        </aside>

        <section className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4">
              <Image
                src={student.image || DefaultImage}
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {student.first_name} {student.last_name}
                </h2>
                <p className="text-gray-600">{student.address}</p>
                <p className="text-gray-600">{student.dob}</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">
                Personal Information
              </h2>
              <button className="text-blue-600 hover:underline">Edit</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">First Name</p>
                <p className="text-gray-800 font-medium">Jack</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Last Name</p>
                <p className="text-gray-800 font-medium">Adams</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-gray-800 font-medium">jackadams@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-gray-800 font-medium">(213) 555-1234</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500 text-sm">Bio</p>
                <p className="text-gray-800 font-medium">Product Designer</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-800">Address</h2>
              <button className="text-blue-600 hover:underline">Edit</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Country</p>
                <p className="text-gray-800 font-medium">
                  United States of America
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">City/State</p>
                <p className="text-gray-800 font-medium">California, USA</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Postal Code</p>
                <p className="text-gray-800 font-medium">ERT 62574</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">TAX ID</p>
                <p className="text-gray-800 font-medium">AS564178969</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SingleStudent;
