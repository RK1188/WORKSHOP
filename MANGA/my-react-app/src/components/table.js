import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Table1() {
  const [data, setData] = useState([]);

  function init() {
    axios.get("http://localhost:8080/findall")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteData = (bookId) => {
    axios.delete(`http://localhost:8080/delete${bookId}`)
      .then((response) => {
        const newdata = data.filter((item) => item.bookId !== bookId);
        setData(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = (bookId, newData) => {
    axios.put(`http://localhost:8080/updatedata`, newData)
      .then((response) => {
        const newdata = data.map((item) => {
          if (item.bookId === bookId) {
            return { ...item, ...newData };
          }
          return item;
        });
        setData(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>bookId</th>
          <th>bookName</th>
          <th>authorName</th>
          
          <th>price</th>
          <th>publishedOn</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.bookId}>
            <td>{user.bookId}</td>
            <td>{user.bookName}</td>
            <td>{user.authorName}</td>
           
            <td>{user.price}</td>
            <td>{user.publishedOn}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => deleteData(user.bookId)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const newData = prompt("Enter new data:");
                  if (newData) {
                    updateData(user.bookId, { authorName: newData });
                  }
                }}
              >
                Update
              </button>
              
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
}
