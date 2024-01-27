import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Notify = () => {
  useEffect(() => {
    toast.info(" Disponible pour une alternance en septembre !", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Notify;
