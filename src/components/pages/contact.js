import React from 'react';
import Footer from '../footer.js';
//import './styles/style.css';
//import 'bootstrap/dist/css/bootstrap.css';


function Contact() {
  return (
    <div className="contact">
    <h2>&#9900;  Contact Me  &#9900;</h2>
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
         <label>
           <p>Email</p>
           <input email="email" />
         </label>
         <label>
           <p>A Message</p>
           <textarea message="message" />
         </label>
       
       <button type="submit">Send</button>
       </fieldset>
      </form>
      <div><Footer /></div>
    </div>
    // <section className="contact">
    //   <h2>&#9900;  Contact Me  &#9900;</h2>
    //     <p>will be here</p>

    // <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    // <div className="form-group">
    //     <label htmlFor="name">Name</label>
    //     <input type="text" className="form-control" />
    // </div>
    // <div className="form-group">
    //     <label htmlFor="exampleInputEmail1">Email address</label>
    //     <input type="email" className="form-control" aria-describedby="emailHelp" />
    // </div>
    // <div className="form-group">
    //     <label htmlFor="message">Message</label>
    //     <textarea className="form-control" rows="5"></textarea>
    // </div>
    // <button type="submit" className="btn btn-primary">Submit</button>
    // </form>

    // </section>
  );
}

export default Contact;
