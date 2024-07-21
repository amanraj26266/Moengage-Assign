import List from "./Pages/List";
import SavedList from "./Pages/SavedList";
import Details from "./Pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/List" element={<List />} />
        <Route path="/saved" element={<SavedList />} />
        <Route path="*" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
