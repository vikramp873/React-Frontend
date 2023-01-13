import React, { useState } from "react";

function Table({ tableData }) {

   const [searchedVal, setSearchedVal] = useState("");


   return (
      <>

         <b htmlFor="search">
            Search Name:
            <div className="my-3">
               <input id="search" type="text" onChange={(e) => setSearchedVal(e.target.value)} />
            </div>
         </b>
         <table className="table">
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Password</th>
               </tr>
            </thead>
            <tbody>
               {tableData.filter((row) =>
                  !searchedVal.length || row.name
                     .toString()
                     .toLowerCase()
                     .includes(searchedVal.toString().toLowerCase())
               ).map((data, index) => {
                  return (
                     <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.city}</td>
                        <td>{data.password}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </>
   );
}
export default Table;