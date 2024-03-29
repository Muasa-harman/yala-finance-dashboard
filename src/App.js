import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Income from "./pages/income/Income"
import Expense from "./pages/expense/Expense"
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import SignUpSection from "./components/signup/Signup";
import SingleExpense from "./components/singleEpense/SingleExpense"

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/dash" element={<Home />} />
            <Route path="signup" element={<SignUpSection/>}/>
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="income">
              <Route index element={<Income />} />
              <Route
                path="single"
                element={<SingleExpense  title="Add New Income" />}  //inputs={productInputs}
              />
            </Route>
            <Route path="expense">
              <Route index element={<Expense />} />
              
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Expense" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
