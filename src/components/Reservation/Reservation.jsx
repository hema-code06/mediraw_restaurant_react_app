import React, { useState, useRef, useEffect } from "react";
import "./Reservation.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from "react-icons/ai";

const Reservation = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(formData.date);
    const options = { month: "long", day: "numeric" };
    const formattedDate = selectedDate.toLocaleDateString(undefined, options);

    toast.success(
      <span>
        🍽️ Table booked on{" "}
        <span style={{ color: "orangered", fontWeight: "600" }}>
          {formattedDate}
        </span>{" "}
        successfully!
      </span>,
      {
        position: "top-right",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      },
    );

    console.log(formData);
    onClose();
  };

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <AiOutlineClose
          className="modal__close-icon"
          size={24}
          onClick={onClose}
        />
        <h2> Join the Feast</h2>

        <form onSubmit={handleSubmit} className="reservation__form">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <input
            name="guests"
            type="number"
            placeholder="Number of Guests"
            onChange={handleChange}
            required
          />
          <input name="date" type="date" onChange={handleChange} required />
          <input name="time" type="time" onChange={handleChange} required />

          <button type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
