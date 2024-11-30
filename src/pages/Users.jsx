import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuserdata } from '../Redux/Actions';
import Edit from '../components/Edit';

const Users = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch();
  const { users } = userReducer;

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteuserdata(id)); // Dispatch the delete action with the user's id
  };
  const handleEdit = (id) => {
    console.log(id);
    setIsEdit(prev => !prev) // Dispatch the delete action with the user's id
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Users Table</h2>
      {isEdit && <Edit/> }
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">S.No.</th>
            <th className="px-4 py-2 text-left">Avatar</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Password</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt="User"
                      className="img-thumbnail"
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                      }}
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.password}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800  p-2"
                  >
                    x
                  </button>
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
