import React, { useState, useRef, useEffect } from "react";
import "./Reservation.css";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";

const Reservation = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const modalRef = useRef();

  // 🔥 Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 Validation
  const validateForm = () => {
    const { name, phone, guests, date, time } = formData;

    if (!name || !phone || !guests || !date || !time) {
      toast.error("Please fill all fields");
      return false;
    }

    if (phone.length < 10) {
      toast.error("Enter valid phone number");
      return false;
    }

    if (guests > 10) {
      toast.error("Max 10 guests per reservation");
      return false;
    }

    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    if (selectedDateTime < now) {
      toast.error("Cannot book past time");
      return false;
    }

    return true;
  };

  // 🔥 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Fake API delay
    setTimeout(() => {
      setLoading(false);

      toast.success(`Table booked for ${formData.name} 🎉`);

      setFormData({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
      });

      onClose();
    }, 1500);
  };

  return (
    <div className="modal__overlay">
      <div className="modal__content" ref={modalRef}>
        <AiOutlineClose
          className="modal__close-icon"
          size={24}
          onClick={onClose}
        />

        <h2>Reserve Your Table</h2>

        <form onSubmit={handleSubmit} className="reservation__form">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            name="guests"
            type="number"
            placeholder="Guests (max 10)"
            value={formData.guests}
            onChange={handleChange}
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />

          <input
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Reserve"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;