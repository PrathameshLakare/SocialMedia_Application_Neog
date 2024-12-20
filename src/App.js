import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostView from "./features/post/PostView";
import CreatePost from "./pages/CreatePost";
import MyProfile from "./features/user/MyProfile";
import UsersProfile from "./pages/UsersProfile";
import Users from "./features/user/Users";
import ExplorePage from "./pages/ExplorePage";
import Bookmark from "./pages/Bookmark";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container ">
              <a className="navbar-brand text-danger fw-bold fs-2" href="/">
                So<span className="text-primary">Media</span>
              </a>
            </div>
          </nav>
          <div className="container py-3">
            <div className="row">
              <div className="col-md-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-3">
                    <Link
                      to="/"
                      className="link-dark link-underline link-underline-opacity-0"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link
                      to="/explore"
                      className="link-dark link-underline link-underline-opacity-0"
                    >
                      Explore
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link
                      to="/myProfile"
                      className="link-dark link-underline link-underline-opacity-0"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link
                      to="/bookmark"
                      className="link-dark link-underline link-underline-opacity-0"
                    >
                      Bookmark
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link className="btn text-bg-danger" to={"/createPost"}>
                      Create New Post
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 py-3">
                <Routes>
                  <Route path="/" element={<PostView />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="/myProfile" element={<MyProfile />} />
                  <Route path="/profile/:userId" element={<UsersProfile />} />
                  <Route path="/createPost" element={<CreatePost />} />
                  <Route path="/bookmark" element={<Bookmark />} />
                </Routes>
              </div>
              <div className="col-md-3">
                <Users />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
