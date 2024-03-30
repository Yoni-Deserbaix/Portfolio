"use client";
import React from "react";
import { MovingBorderBtn } from "./moving-border";

export default function ResumeBtn() {
  return (
    <MovingBorderBtn
      borderRadius="0.5rem"
      className="p-3 font-semibold "
      onClick={() => {
        window.open("/assets/DESERBAIX_Yoni_CV_ENI.pdf", "_blank");
      }}
    >
      <p>📢 Disponible pour une alternance! </p>
    </MovingBorderBtn>
  );
}
