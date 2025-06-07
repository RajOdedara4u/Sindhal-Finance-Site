import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // send token also if your backend requires it
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://sindhal-web-server.onrender.com/api/auth/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(res.data);
      } catch (err) {
        toast.error("Failed to fetch users. Are you admin?");
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Registered Users
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-white">No users found or loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white border">
            <thead className="text-xs text-white uppercase bg- border-b">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover:bg-blue-600">
                  <td className="px-6 py-4 font-medium ">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
