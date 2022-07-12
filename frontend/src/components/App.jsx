import {Routes, Route} from "react-router-dom"
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Login from "./Login";
import Question from "./Question";
import Details from "./Details"
import Center from "./Center";


function App() {
  const user = localStorage.getItem("token")
  return (
    <div>
      {user==='201' && <Header />}
        <div>
        <Routes>
          {console.log("token",user)}
          {user==='201' && <Route path='/' exact element={<Main />}/>}    
          <Route path='/SignUp' exact element={<SignUp />}/>  
          <Route path='/Login' exact element={<Login />}/>  
          <Route path='/' exact element={<SignUp />}/> 
          <Route path='/Profile' exact element={<Profile />}/> 
          <Route path='/Question' exact element={<Question />}/> 
          <Route path='/Details' exact element={<Details />}/>
        </Routes>
      </div> 
    </div>
  ) 
}

export default App;
