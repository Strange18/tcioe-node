"use client";

import { RenderTeamCards } from "@/components/RenderTeamCards";
import React, { useEffect, useState } from "react";

const fetchData = async (token) => {
  const res = await fetch(
    "https://notices.tcioe.edu.np/api/department/staffmembers/",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data;
};

const Page = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [keyOfficials, setKeyOfficials] = useState([]);

  useEffect(() => {
    const authenticate = async () => {
      const res = await fetch("https://notices.tcioe.edu.np/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "admin",
          password: "suman",
        }),
      });
      const { access, refresh } = await res.json();
      setAccessToken(access);
    };
    authenticate();
  }, []);

  useEffect(() => {
    if (accessToken) {
      const getData = async () => {
        const data = await fetchData(accessToken);
        setKeyOfficials(data);
      };
      getData();
    }
  }, [accessToken]);

  let campusChief = keyOfficials.slice(0, 1);
  let members = keyOfficials.slice(1, -1);
  return (
    <>
      <RenderTeamCards title="Campus Officials" Members={campusChief} />
      <RenderTeamCards title="" Members={members} />
    </>
  );
};

export default Page;
