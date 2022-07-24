
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card  from "react-bootstrap/Card";
import {Row,Col,Container} from "react-bootstrap";
import { useState } from 'react';

import AllUsers from "./Components/AddUsers"
import AllUserDetails from './Components/AllUserDetails';


function App() {
  const [users, setUsers] = useState([
    // {name: "Nicholas" , email:"baniicofori@gmail.com" , gen:"22"},
    // {name: "Herbert" , email:"herberto@gmail.com" , gen:"2"},
    // {name: "Humphrey" , email:"humphrey@gmail.com" , gen:"40"},
  ]);
  const AddNewUser = (user)=>{
    setUsers([...users,{name:user.name,email:user.email,gen:user.gen}]);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <AllUsers newUser={AddNewUser} />
          </Col>
          <Col md ={6}>
           <AllUserDetails  userData={users} />
          </Col>
        </Row>
      </Container>
     
    </>

  );
}

export default App;
