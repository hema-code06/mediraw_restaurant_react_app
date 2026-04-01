import { useState, useRef } from "react";
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

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, phone, guests, date, time } = formData;

    if (!name || !phone || !guests || !date || !time) {
      toast.error("⚠ Please fill all fields");
      return false;
    }

    if (phone.length < 10) {
      toast.error("⚠ Enter valid phone number");
      return false;
    }

    if (guests > 15) {
      toast.error("⚠ Max 15 guests per reservation");
      return false;
    }

    const selectedDateTime = new Date(`${date}T${time}`);

    if (selectedDateTime < new Date()) {
      toast.error("⚠ Cannot book past time");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success(`Table booked successfully!!`);

      setFormData({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
      });

      onClose();
    }, 1000);
  };

  return (
    <div className="modal__overlay">
      <div
        className="modal__content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="modal__close-icon"
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
            placeholder="Guests (max 15)"
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
