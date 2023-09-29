import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Latitude: {profile.address.lat}</p>
      <p>Longitude: {profile.address.lng}</p>
    </div>
  );
};

export default ProfileDetails;