import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  return (
    <>
      <Avatar
        isNew={true}
        image="https://images.unsplash.com/photo-1676318546607-6d650dd97c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
      <Profile
        isNew={true}
        image="https://images.unsplash.com/photo-1676411726635-38b22f46616d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        name="new Crew"
        title="front-end Developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1676318546569-aad7871d1353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        name="Source"
        title="토마토 소스"
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
