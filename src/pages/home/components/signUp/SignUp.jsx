import React from "react";
import "./sign_up.css";

function SignUp() {
  return (
    <section className="sign-up inner_content bg_image community">
      <div className="wrapper-column">
        <div className="column">
          <div className="column_header">
            <h2 className="signUP-title">Join Today</h2>
          </div>
          <div className="column_content flex">
            <div className="column left-side-column">
              <p>
                Get access to maintain your own <em>custom personal lists</em>,{" "}
                <em>track what you've seen</em> and search and filter for{" "}
                <em>what to watch next</em>—regardless if it's in theatres, on
                TV or available on popular streaming services like Netflix,
                Amazon Prime Video, Apple TV Plus, Crunchyroll, and Hotstar.
              </p>
              <p className="button">
                <a href="/signup" className="rounded-button">
                  Sign Up
                </a>
              </p>
            </div>
            <div className="column right-side-column ">
              <ul>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>
                  Filter by your subscribed streaming services and find
                  something to watch
                </li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
