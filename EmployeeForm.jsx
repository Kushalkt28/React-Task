import React, { useState } from "react";
import styles from "./styles.module.css";
const EmpDetail = () => {
  const [empID, setEmpID] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDepartment, setEmpDepartment] = useState("");
  const [empAddress, setEmpAddress] = useState("");

  const [submitData, setSubmitData] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [edit, setEdit] = useState(false);

  function handleClick() {
    const data = {
      EmpID: empID,
      EmpName: empName,
      EmpDepartment: empDepartment,
      EmpAddress: empAddress
      
    };
    setSubmitData(data);
    setShowDetails(true);
  }
  function handleEdit() {
    setEdit(true);
  }
  function handleSave() {
    setEdit(false);
    alert("Data Successfully Saved")
  }

  return (
    <div style={{display:"flex", justifyContent:"center"}} >
    <div  >
      <input
        type="number"
        placeholder="Emp ID"
        value={empID}
        onChange={(e) => setEmpID(e.target.value)}
      />
      <input
        type="text"
        placeholder="Emp Name"
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Emp Department"
        value={empDepartment}
        onChange={(e) => setEmpDepartment(e.target.value)}
      />
       <input
        type="text"
        placeholder="Emp Address"
        value={empAddress}
        onChange={(e) => setEmpAddress(e.target.value)}
      />
      <button onClick={handleClick}>Submit Now</button>

      {showDetails && (
        <>
          <table
            style={{
              borderCollapse: "collapse",
              margin: "20px auto",
              border: "1px solid black",
            }}
          >
            <tbody>
              <tr >
                <th style={{ padding: "8px", border: "1px solid black" }}>
                  EmployeeID
                </th>
                <th style={{ padding: "8px", border: "1px solid black" }}>
                  Employee Name
                </th>
                <th style={{ padding: "8px", border: "1px solid black" }}>
                  Employee Department
                </th>
                <th style={{ padding: "8px", border: "1px solid black" }}>
                  Employee Address
                </th>
                <th style={{ padding: "8px", border: "1px solid black" }}>
                  Action
                </th>
              </tr>

              <tr>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  {edit ? (
                    <input
                      type="number"
                      value={submitData.EmpID}
                      onChange={(e) =>
                        setSubmitData({ ...submitData, EmpID: e.target.value })
                      }
                    />
                  ) : (
                    submitData.EmpID
                  )}
                </td>

                <td style={{ padding: "8px", border: "1px solid black" }}>
                  {edit ? (
                    <input
                      type="text"
                      value={submitData.EmpName}
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          EmpName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    submitData.EmpName
                  )}
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  {edit ? (
                    <input
                      type="text"
                      value={submitData.EmpDepartment}
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          EmpDepartment: e.target.value,
                        })
                      }
                    />
                  ) : (
                    submitData.EmpDepartment
                  )}
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  {edit ? (
                    <input
                      type="text"
                      value={submitData.EmpAddress}
                      onChange={(e) =>
                        setSubmitData({
                          ...submitData,
                          EmpAddress: e.target.value,
                        })
                      }
                    />
                  ) : (
                    submitData.EmpAddress
                  )}
                </td>
              

              <td style={{ padding: "8px", border: "1px solid black" }}>
                {edit ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={handleEdit}>Edit</button>
                )}
              </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
    </div>
  );
};

export default EmpDetail;
