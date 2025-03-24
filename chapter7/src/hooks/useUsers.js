import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [hasUsersError, setHasUsersError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsUsersLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch {
        setHasUsersError(true);
      } finally {
        setIsUsersLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return {
    users,
    isUsersLoading,
    hasUsersError,
  };
};

export default useUsers;
