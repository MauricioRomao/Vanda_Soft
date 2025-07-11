import React, { useState } from "react";
import "./styles.css";

const contacts = [{ name: "Contact 1" }, { name: "Contact 2" }];

const documents = [{ name: "Document 1" }, { name: "Document 2" }];

const Index = () => {
  const [currentData, setCurrentData] = useState(contacts);

  const changeData = () => {
    if (currentData === documents) {
      setCurrentData(contacts);
    } else {
      setCurrentData(documents);
    }
  };

  return (
    <main className="main">
      <aside className="sidebar">
        <div className="sidebar-content">
          <div>
            <h1 className="logo">EPL</h1>
          </div>

          <div style={{ padding: "20px" }}>
            <button className="upload-button">Upload document</button>
          </div>

          <nav className="menu-list">
            <li
              className={`menu-item ${
                currentData == documents ? "active" : ""
              }`}
              onClick={changeData}
            >
              Overview
            </li>
            <li
              className={`menu-item ${
                currentData != documents ? "active" : ""
              }`}
              onClick={changeData}
            >
              Contact EPL
            </li>
            <li className="menu-item">Notifications</li>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "30px",
              width: "50px",
              height: "50px",
              marginRight: "20px",
            }}
          ></div>

          <div>
            <h4>Janne Cooper</h4>
            <p>Provider</p>
          </div>
        </div>
      </aside>

      <div className="container">
        <h1>Overview</h1>

        <div className="list-cards">
          <div className="card">
            <div class="circle-progress"></div>

            <h3>16 %</h3>
            <p>Unassigned</p>

            <button className="button">View all</button>
          </div>

          <div className="card">
            <div class="circle-progress"></div>

            <h3>16 %</h3>
            <p>Unassigned</p>

            <button className="button">View all</button>
          </div>

          <div className="card">
            <div class="circle-progress"></div>

            <h3>16 %</h3>
            <p>Unassigned</p>

            <button className="button">View all</button>
          </div>

          <div className="card">
            <div class="circle-progress"></div>

            <h3>16 %</h3>
            <p>Unassigned</p>

            <button className="button">View all</button>
          </div>
        </div>

        <div className="section-documents">
          <div className="header-documents">
            <h2>{currentData[0].name}</h2>

            <div className="side-documents">
              <div className="status">
                <button className="active">Progress</button>
                <button>Completed</button>
              </div>

              <select name="" id="">
                <option value="">August</option>
                <option value="">July</option>
                <option value="">September</option>
              </select>

              <input type="search" placeholder="Search" />
              <button>Baixar</button>
            </div>
          </div>

          <table class="styled-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Patient name</th>
                <th>Date of birth</th>
                <th>MRN</th>
                <th>Date of service</th>
                <th>Assigned date</th>
                <th>document ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Alfreds Futterkiste</td>
                <td>07/11/2005</td>
                <td>521</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>8kjhkjhk</td>
                <td>see</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Alfreds Futterkiste</td>
                <td>07/11/2005</td>
                <td>521</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>8kjhkjhk</td>
                <td>see</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Index;
