"use client";

import { newsletterSchema, TNewsletterSchema } from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const Newsletter = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TNewsletterSchema>({
        resolver: zodResolver(newsletterSchema),
    });

    const onSubmit = async (data: TNewsletterSchema) => {

        const response = await fetch("/api/newsletter", {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log("Newsletter form failed");
            return;
        }

        if (responseData.errors) {
            const errors = responseData.errors;
            if (errors.email) {
                setError("email", {
                    type: "server",
                    message: errors.email,
                });
            }
        }

        //reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex space-x-3">
                    <input 
                        { ...register("email")}
                        type="email"
                        placeholder="Updates in your inbox..."
                        className={`flex-1 px-4 rounded-full focus:outline-none ${ errors.email && ' border-red-500 border-solid border-2' }`}
                    />
                    <button 
                        disabled={isSubmitting}
                        className="px-6 py-2 text-white rounded-full bg-brightRed hover:opacity-80 focus:outline-none"
                    >
                        Go
                    </button>
                </div>
                { errors.email && (
                    <p className="mt-2 text-red-500">{`${errors.email.message}`}</p>
                )}
            </form>
        </>
    )
};

export default Newsletter;