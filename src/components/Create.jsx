import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate= useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post("https://665842785c3617052647a63a.mockapi.io/crud",{
        e_name: name,
        e_age:age,
       e_email:email,
    }).then(()=>{
        navigate('/')
    }).catch((err)=>{
        console.log(err)
    })

 
}
  return (
    <>
      <div className="row">
        <div className="col-md-4">
        <div className="mb-2 mt-4">
          <Link to="/">
            <button className="btn btn-success">Read Data</button>
          </Link >
        </div>
          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                placeholder="enter Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Age</label>
              <input
                type="text"
                placeholder="Enter Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
