'use client'

import Button from "@/ui/atoms/Button";
import Text from "@/ui/atoms/Parragraph";
import { FormField, FormFileField, FormSelectField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss"
import * as yup from "yup";
import { toast } from "react-toastify";
import { IVehiclesRequest } from "@/app/core/application/dto";

const vehiclesSchema = yup.object().shape({
    make: yup
        .string()
        .required('La marca es requerida'),
    model: yup
        .string()
        .required('El modelo es requerido'),
    year: yup
        .string()
        .required('El año es requerido'),
    licensePlate: yup
        .string()
        .required('El número de la placa es requerido'),
    file: yup
        .mixed<File>()
        .nullable()
        .notRequired()
});

const VehicleForm = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<IVehiclesRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(vehiclesSchema)
    });

    const handleVehicle = async (data: IVehiclesRequest) => {
        try {
            const formData = new FormData();

            formData.append("make", data.make);
            formData.append("model", data.model);
            formData.append("year", data.year);
            formData.append("licensePlate", data.licensePlate);

            if (data.file instanceof File) {
                formData.append("file", data.file);
            }else{
                console.log("La imagen no es un archivo válido")
            }

            const response = await fetch("/api/vehicles/create-vehicle", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Error al crear un vehiculo");
            }
            toast.success("Vehiculo creado exitosamente");
            return await response.json();

        } catch (error) {
            console.error("Error en el POST:", error);
            throw error;
        }
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit(handleVehicle)}>
           <Text classname={styles.h1}>Agregar nuevo vehículo</Text>

            <FormField<IVehiclesRequest>
                control={control}
                type="text"
                name="make"
                label="Make"
                error={errors.make}
                placeholder="Ingrese la marca"
            />

            <FormField<IVehiclesRequest>
                control={control}
                type="password"
                name="password"
                label="Contraseña"
                error={errors.password}
                placeholder="Ingrese Contraseña"
            />

            <FormField<IRegisterRequest>
                control={control}
                type="text"
                name="name"
                label="Nombre"
                error={errors.name}
                placeholder="Ingrese Nombre"
            />

            <div>
                <FormSelectField<IRegisterRequest>
                    control={control}
                    options={[
                        { value: "organizer", label: "Organizador" },
                        { value: "user", label: "Usuario" }
                    ]}
                    name="role"
                    label="Rol"
                    error={errors.role}
                    placeholder="Ingrese Rol"
                />

                <FormFileField<IRegisterRequest>
                    control={control}
                    name="photo"
                    label="Foto de Perfil"
                    error={errors.photo}
                />
            </div>
            <Button
        type="submit"
        className={styles.button}
      >
        Registrarse
      </Button>
        </form>
    );
};

export default RegisterForm;