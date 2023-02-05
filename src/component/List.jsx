import React from "react";
import "../index.css";
import { SiKnowledgebase } from "react-icons/si";

const List = ({ profileData, repoData }) => {
  console.log(profileData, "profile data in child");
  console.log(repoData, "repo data in child");
  const repolength = repoData.length;
  return (
    <div className="ListContainer">
      {profileData && (
        <>
          <div className="UserProfileCard">
            <div className="image">
              <img src={profileData.avatar_url} alt="user_profile_picture" />
            </div>
            <div className="detail">
              {profileData.name && (
                <div className="element"> {profileData.name}</div>
              )}
              {profileData.email && (
                <div className="element">Email: {profileData.email}</div>
              )}
              {profileData.blog && (
                <div className="element">
                  <a href={profileData.blog}>
                    <SiKnowledgebase />
                  </a>
                </div>
              )}
              <div className="element">{profileData.followers} Follower</div>
              <div className="element">{profileData.following} Following</div>
            </div>
          </div>
        </>
      )}
      {repolength > 0 && <h1>Projects</h1>}

      {repoData && (
        <div className="UserRepositories">
          {repoData.map((elem) => {
            return (
              <div key={elem.id} className="RepoCard">
                <h3>{elem.name}</h3>
                {elem.language}
                <a href={elem.clone_url} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
