import { IVehiclesResponse } from '@/app/core/application/dto';
import React from 'react';

interface IVehiclesProps {
    vehicle: IVehiclesResponse
  }
const VehicleCard = ({ vehicle }: IVehiclesProps) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
      <div>
        <p>Year: {vehicle.data.year}</p>
        <p>Make: {vehicle.data.make}</p>
        <p>Model: {vehicle.data.model}</p>
        <p>License Plate: {vehicle.data.licensePlate}</p>
      </div>
      <div>
        {vehicle.data.photo ? (
          <img src={vehicle.data.photo} alt={`${vehicle.data.photo} ${vehicle.data.model}`} className="w-32 h-32 object-cover rounded-lg" />
        ) : (
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleCard;