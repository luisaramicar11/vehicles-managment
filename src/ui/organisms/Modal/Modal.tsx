"use client";
import React from "react";
import { ModalOverlay, ModalContent, CloseButtonStyled } from "./ModalStyles";
import { FiX } from 'react-icons/fi';
import { Datum } from "@/app/core/application/dto";
import VehicleForm from "../Vehicles/FormVehicles/FormVehicles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Datum | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, vehicle }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButtonStyled onClick={onClose}><FiX size={24}/></CloseButtonStyled>
        <VehicleForm initialData = {vehicle} onClose={onClose}/>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;