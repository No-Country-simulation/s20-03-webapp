"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Esquema de validación con Zod
const SignInSchema = z.object({
  username: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres."),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
});

export const FormSignIn = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    setErrorMessage(""); // Limpiar mensaje de error previo

    try {
      const response = await fetch("https://s20-03-webapp-production.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const result = await response.json();
      console.log("Token recibido:", result.token); // Puedes guardar el token en localStorage o contexto

      router.push("/dashboard"); // Redirigir después del login

    } catch (error: any) {
      setErrorMessage(error.message || "Error al iniciar sesión");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <FormControl>
                <Input placeholder="Tu usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
};

