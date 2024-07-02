import { useState } from "react";
import { ProfileContext } from "../context";

const ProfileProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState({});

  // Loading State
  const [loading, setLoading] = useState(false)

  return (
    <>
      <ProfileContext.Provider value={{ user, setUser, loading, setLoading }}>
        {children}
      </ProfileContext.Provider>
    </>
  );
};

export default ProfileProvider;
