"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

export function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: any) => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);

        try {
            const response = await fetch("https://p45c4l.ngcomputers.com.ar/auth/login", {
                method: "POST",
                body: formData,
                credentials: "include", 
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }

            const result = await response.json();
            console.log("Success:", result);

            alert("Login successful!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to login. Please check your username and password.");
        }
    };

    return (
        <div className="p-6 w-96 rounded-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border-2 border-[#C0C0C0]"
                                        placeholder="Username"
                                        {...field}
                                    />
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...field}
                                        className="border-2 border-[#C0C0C0]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
}
