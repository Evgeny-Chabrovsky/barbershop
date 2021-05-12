import React, { Component } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

class Form extends Component {
  state = {
    user: { name: "", phone: "", email: "" },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { user } = this.state;
    if (user.name.trim() === "") errors.name = "Name is required.";
    if (/[0-9]/.test(user.name.trim()) === true)
      errors.name = "Should contain only letters";
    if (user.phone.trim() === "") errors.phone = "Phone is required.";
    if (
      /[A-Za-z]/.test(user.phone.trim()) === true ||
      user.phone.trim().length !== 9
    )
      errors.phone = "Should contain only 9 digits";
    if (user.email.trim() === "") errors.email = "Email is required.";
    if (
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(user.email.trim()) === false
    )
      errors.email = "Should contain valid email";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
    this.props.setActive(true);
  };

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Name is required";
    }
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required";
    }
    if (name === "email") {
      if (value.trim() === "") return "Email is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else {
      delete errors[input.name];
    }
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user, errors });
  };

  render() {
    const { user, errors } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          autoFocus
          name="name"
          value={user.name}
          onChange={this.handleChange}
          className={errors.name ? styles.input_error : styles.input}
          type="text"
          placeholder="Name"
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
        <input
          value={user.phone}
          name="phone"
          onChange={this.handleChange}
          className={errors.phone ? styles.input_error : styles.input}
          type="phone"
          placeholder="Phone"
        />
        {errors.phone && <div className={styles.error}>{errors.phone}</div>}
        <input
          value={user.email}
          className={errors.email ? styles.input_error : styles.input}
          name="email"
          onChange={this.handleChange}
          type="text"
          placeholder="Email"
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}

        <Button
          value="Booking"
          setActive={this.props.setActive}
          isRoute={false}
        />
      </form>
    );
  }
}

export default Form;
