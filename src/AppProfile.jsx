import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  return (
    <>
      <Profile image="" name="new Crew" title="front-end Developer" />

      <Profile
        image="https://images.unsplash.com/photo-1676318546569-aad7871d1353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        name="Source"
        title="토마토 소스"
        newCrew
      />
      <Profile
        image="https://images.unsplash.com/photo-1676053923757-9bbd80b47264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        name="cat"
        title="캐셔캣"
      />
      <Profile />
    </>
  );
}

export default AppProfile;
