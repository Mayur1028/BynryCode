import React, { useState } from "react";
import profiles from "./data/profiles";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import Map from "./components/Map";

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const onSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="App">
      <h1>Profile Explorer</h1>
      <div className="container">
        <div className="profile-list">
          <ProfileList profiles={profiles} onSelectProfile={onSelectProfile} />
        </div>
        <div className="profile-details">
          {selectedProfile ? (
            <>
              <ProfileDetails profile={selectedProfile} />
              <Map profile={selectedProfile} />
            </>
          ) : (
            <p>Select a profile to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
