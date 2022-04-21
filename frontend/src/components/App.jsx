import {Routes, Route} from "react-router-dom"
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Login from "./Login";



function App() {

  const user = localStorage.getItem("token")

  return (
    <div>
      <Header />
        <div>
        <Routes>
          {user && <Route path='/' exact element={<Main />}/>}   
          <Route path='/SignUp' exact element={<SignUp />}/>  
          <Route path='/Login' exact element={<Login />}/>  
          <Route path='/' exact element={<SignUp />}/> 
          <Route path='/Profile' exact element={<Profile />}/> 
        </Routes>
      </div> 
    </div>
  ) 
}

export default App;
