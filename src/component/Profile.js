import React, { useState, Fragment } from "react";
import Form from "./Form";
import Table from "./Table";
function Profile() {
   const [tableData, setTableData] = useState([]);
   const [formObject, setFormObject] = useState({
      name: "",
      email: "",
      city: "",
      password: ""
   });



   const onValChange = (event) => {
      const value = (res) => ({
         ...res,
         [event.target.name]: event.target.value,
      });
      setFormObject(value);
   };
   const onFormSubmit = (event) => {
      event.preventDefault();
      const checkVal = !Object.values(formObject).every((res) => res === "");
      if (checkVal) {
         const dataObj = (data) => [...data, formObject];
         setTableData(dataObj);
         const isEmpty = { name: "", email: "", city: "", password: "" };
         setFormObject(isEmpty);
      }
   };


   return (
      <Fragment>
         <section className="over-y-hide">
            <div className="container">
               <div className="row ">
                  <div className="col-sm-12 col-md-7 col-lg-8 mx-auto mt50">
                     <div className="card card-signin mb-3">
                        <h1 className="big-banner-2 my-3">Welcome</h1>
                        <div className="card-body"    >         <Form
                           onValChange={onValChange}
                           formObject={formObject}
                           onFormSubmit={onFormSubmit}
                        />
                           <Table tableData={tableData} />
                        </div>



                     </div>
                  </div>
               </div>
            </div>
         </section>

      </Fragment>
   );
}
export default Profile;