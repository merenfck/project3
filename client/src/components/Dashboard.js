import React, { Component } from 'react';
// import './App.css';
import users from "../users.json";

 export default class App extends Component {
   state = {
     users: users,
     search: '',
     book: false,
     student: false,
     campus: ''
   }

   handleInputChange = event => {
     this.setState({
       search: event.target.value
     })
   };

   handleCheckbox = event => {
     this.setState({
      [event.target.name]: event.target.checked
     })
   }

   handleCampus = event => {
     this.setState({
       campus: event.target.value
     })
   }

   render() {

     //Search

     let filteredArr = users.filter(user => {
       return (
         user.firstName.toLowerCase()
         .startsWith(this.state.search.toString().toLowerCase()) 
         
       );
     });

     //Checkbox

     if (this.state.book && this.state.student) {
       //
     } else if (this.state.student) {
       filteredArr = filteredArr.filter(user => {
         return user.role === "student";
       });
     } else if (this.state.book) {
       filteredArr = filteredArr.filter(user => {
         return user.role === "book";
       });
     }

     //Campus

     let campusArr = [...new Set(users.map(user => user.campus))];

     if (this.state.campus === ''){
       //
     } else {
       filteredArr = filteredArr.filter(user => {
         return user.campus === this.state.campus
       })
     }

     return (
       <div>
         <h1>IronUniversityLibrary</h1>
         <div className="searchForm">
         <form>
           <input
             placeholder="Search for book or article"
             value={this.state.query}
             onChange={this.handleInputChange}
           />
           <label htmlFor="book">Book</label>
           <input
             type="checkbox"
             name="book"
             id="book"
             checked={this.state.book}
             onChange={this.handleCheckbox}
           />
            <label htmlFor="scientific article">Scientific Article</label>
           <input
             type="checkbox"
             name="Scientific Article"
             id="Scientific Article"
             checked={this.state.student}
             onChange={this.handleChebox}
           />


         <label htmlFor="campus">Available in IronLibrary:
           <select name="campus" id="campus" onChange={this.handleCampus}>
           {campusArr.map(campus => {
             return <option value={campus}>{campus}</option>
           })}
           </select>
         </label>


         </form>
         </div>
         <table>
          <tbody>
           <tr>
             <th> Name</th>
             <th> Author</th>
             <th>Campus</th>
             <th>Type</th>
             <th>Links</th>
           </tr>
           { filteredArr.map(user => {
                 return (
           <tr key={user.id}>
             <td>{user.firstName}</td>
             <td>{user.lastName}</td>
             <td>{user.campus}</td>
             <td>{user.role}</td>
             <td>{user.linkedin}</td>
           </tr>
                 )}
           )}
           </tbody>
         </table>
       </div>
     )
   }
 }