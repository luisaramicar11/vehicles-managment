"use client";
import React from 'react'; 
import styles from "./ButtonsCard.module.scss"
import Button from '@/ui/atoms/Button';


interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
  onDetails: () => void;  
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete, onDetails }) => {
  
  
  return (
    <div className={styles.divButtonsContainer}>
      <Button onClick={onEdit} 
      className={styles.buttonEdit}>
      Editar
      </Button>
      <Button 
        onClick={onDelete} 
        className={styles.buttonDelete}
      >Eliminar</Button>
      <Button 
        onClick={onDetails} 
        className={styles.buttonDelete}
      >Detalles</Button>
    </div>
  );
};

export default ActionButtons;