import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../services/favorites";

const Users = () => {
  const { users, error, status, loading } = useSelector(
    (state) => state.favoritesState
  );
  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="users">
      <div className="container">
        <div className="products-header">
          <h3>Users</h3>
          <Link to="/products">Browse all products</Link>
        </div>
        <div className="users-content">
          {loading
            ? "Loading..."
            : users.map((user, idx) => (
                <div>
                  <hr />
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <br />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
