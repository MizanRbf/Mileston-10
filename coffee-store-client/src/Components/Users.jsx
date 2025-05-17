import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();

  const [users, setUsers] = useState(initialUsers);

  // Handle Delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);
        fetch(`http://localhost:3000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log(data);
              const remainingUsers = users.filter((user) => user._id !== _id);
              setUsers(remainingUsers);
            }
          });

        // TODO Delete User from firebase

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-[calc(100vh-568px)] my-20 mx-auto max-w-[1200px] px-4 ">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <p>No.</p>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <div className="flex gap-2">
                      {/* Details Button */}
                      <Link to="">
                        <button className="bg-primary p-2 rounded-sm text-white">
                          <FaEye />
                        </button>
                      </Link>

                      {/* Edit Button */}
                      <Link to="">
                        <button className="bg-black p-2 rounded-sm text-white">
                          <MdEdit />
                        </button>
                      </Link>
                      {/* Delete Button */}
                      <Link>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="bg-base-200 p-2 rounded-sm text-white"
                        >
                          <MdDelete />
                        </button>
                      </Link>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Users;
