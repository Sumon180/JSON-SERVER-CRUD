/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployList = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const loadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const removeData = (id) => {
    if (window.confirm("Do you want to remove user?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Remove Successfully!!");
          window.location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    }

  };
  const editData = (id) => {
    navigate("/employee/edit/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        console.log(error.msg);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employ Listing</h2>
        </div>
        <div className="card-body">
          <div style={{ marginBottom: "10px" }}>
            <Link to="/employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          editData(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          removeData(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>

                      <a
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployList;
