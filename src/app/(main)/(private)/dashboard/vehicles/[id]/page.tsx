import { VehiclesService } from '@/app/infrastructure';
import VehicleCard from '@/ui/template/VehiclesById/VehiclesById';
import React from 'react'
const vehiclesService = new VehiclesService();

interface IProps {
    params: {id: number}
}

export default async function VehicleById({ params }: IProps){
    const data = await vehiclesService.getVehicleById(params.id)
    return (
        <VehicleCard vehicle={data}/>
    )
}