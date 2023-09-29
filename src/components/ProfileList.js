import React from "react";


const ProfileList = ({ profiles, onSelectProfile }) => {
  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id}>
          <button onClick={() => onSelectProfile(profile)}>
            {profile.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
