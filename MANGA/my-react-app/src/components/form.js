import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './form.css';


class Orderform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      bookName: '',
      authorName: '',
      
      price: '',
      publishedOn: ''
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   handleBookIdChange = (event) => {
//     this.setState({ bookId: event.target.value });
//   }
//   handleBookNameChange = (event) => {
//     this.setState({ bookName: event.target.value });
//   }
//   handleAuthorNameChange = (event) => {
//     this.setState({ authorName: event.target.value });
//   }
//   handleAvailableChange = (event) => {
//     this.setState({ available: event.target.value });
//   }
//   handlePriceChange = (event) => {
//     this.setState({ price: event.target.value });
//   }
//   handlePublishedOnChange = (event) => {
//     this.setState({ publishedOn: event.target.value });
//   }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const orderData = {
      bookId: parseInt(this.state.bookId),
      bookName: this.state.bookName,
      authorName: this.state.authorName,
     
      price: this.state.price,
     publishedOn:this.state.publishedOn
    };
    
    console.log(orderData)
    axios.post('http://127.0.0.1:8080/save',orderData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2>MANGA</h2>
      <input
      placeholder='Book_Id'
      type="text"
      name="bookId"
      
      onChange={this.handleChange}
      />
      <input
      placeholder='Book_Name'
      type="text"
          name="bookName"
          
          onChange={this.handleChange}
          />
          <input
          placeholder='Author_Name'
          type="text"
          name="authorName"
          
          onChange={this.handleChange}
          />
        
        
        
        <input
        placeholder='Price'
        type="text"
        name="price"
        
        onChange={this.handleChange}
        />
        <input
        placeholder='Published_On'
          type="text"
          name="publishedOn"
          
          onChange={this.handleChange}
          />
          
          
          <button>submit</button>
          <button>
          <Link to='/table'>view tables</Link>
          </button>
       

          
          </form>
          );
        }
      }
      export default Orderform;