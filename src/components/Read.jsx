import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://665842785c3617052647a63a.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      }).catch((err)=>{
        console.log(err)
    })
  }

  function handleDelete(id) {
    axios
      .delete(`https://665842785c3617052647a63a.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      }).catch((err)=>{
        console.log(err)
    })
  }

  function SetDataToStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="mb-2 mt-4">
          <Link to="/create">
            <button className="btn btn-success">Create New Data</button>
          </Link>
        </div>
        <div className="col-md-12">
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>

            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to={"/edit"}>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              SetDataToStorage(
                                item.id,
                                item.e_name,
                                item.e_age,
                                item.e_email
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (
                              window.confirm("Are you sure to delete data ?")
                            ) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
