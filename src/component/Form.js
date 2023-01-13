function Form({ onValChange, formObject, onFormSubmit }) {
   return (
      <div className='mt-4'>


         <div className="form-signin" >
            <div className="row mb-4">
               <div className="mb-3">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Name"
                     onChange={onValChange}
                     value={formObject.name}
                     name="name"
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="email"
                     className="form-control"
                     placeholder="Email"
                     onChange={onValChange}
                     value={formObject.email}
                     name="email"
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="City"
                     onChange={onValChange}
                     value={formObject.city}
                     name="city"
                  />
               </div>

               <div className="mb-3">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Password"
                     onChange={onValChange}
                     value={formObject.password}
                     name="password"
                  />
               </div>
               <div className="d-grid">
                  <input
                     type="submit"
                     onClick={onFormSubmit}
                     className="btn btn-success"
                  />
               </div>
            </div>
         </div>
      </div>

   );
}
export default Form;