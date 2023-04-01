/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div
              className="card row"
              style={{
                textAlign: "center",
                paddingTop: "10px",
                paddingBottom: "50px",
              }}
            >
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body"></div>

              {data && (
                <div>
                  <h2>
                    The Employee name is : <b>{data.name}</b>
                  </h2>
                  <h2>ID: {data.id}</h2>
                  <h3>Contact Details</h3>
                  <h5>Email is : {data.email}</h5>
                  <h5>Phone is : {data.phone}</h5>
                  <Link className="btn btn-danger" to="/">
                    Back to List
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
