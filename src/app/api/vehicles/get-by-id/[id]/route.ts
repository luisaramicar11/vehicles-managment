
import { VehiclesService } from "@/app/infrastructure";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const idNumber = parseInt(id, 10);

  const vehiclesService = new VehiclesService();
  try {
    const vehicleResponse = await vehiclesService.getVehicleById(idNumber);
    return NextResponse.json(vehicleResponse);
  } catch (error) {
    console.error("Error al obtener el vehículo:", error);
    return NextResponse.json({ status: 500, error: "Error al obtener el vehículo" });
  }
}