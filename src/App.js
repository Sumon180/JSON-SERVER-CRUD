import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployList from "./pages/EmpListing";
import EmpCreate from "./pages/EmpCreate";
import EmpDetail from "./pages/EmpDetail";
import EmpEdit from "./pages/EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>ReactJS CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployList />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/detail/:id" element={<EmpDetail />}></Route>
          <Route path="/employee/edit/:id" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
