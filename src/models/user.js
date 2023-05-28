import React, { useState } from "react";

export default function User() {
  const [user, setUser] = useState({});

  return {
    user,
    setUser,
  };
}
