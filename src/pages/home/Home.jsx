import React from "react";
import Discover from "./components/discover/Discover";
import Trending from "./components/trending/Trending";
import Popular from "./components/popular/Popular";
import SignUP from "./components/signUp/SignUp";
import Award from "./components/award/Award";

function Home() {
  return (
    <>
      <Discover />
      <Award />
      <Trending />
      <Popular />
      <SignUP />
    </>
  );
}

export default Home;
