import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import "../index.css";

const Parent = () => {
  const [profile, setProfile] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleData = async (username) => {
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    setProfile(profileJson);
    setRepositories(repoJson);
  };
  return (
    <div>
      {/* Parent Component */}
      <Header />
      <Input sendData={handleData} />
      <List profileData={profile} repoData={repositories} />
    </div>
  );
};

export default Parent;
