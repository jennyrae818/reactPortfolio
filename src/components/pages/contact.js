import React from 'react';
//import './styles/style.css';
//import 'bootstrap/dist/css/bootstrap.css';


function Contact() {
  return (
    <section className="contact">

    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </section>
  );
}

export default Contact;
