"use client"
import React, { useState } from 'react'

//actions
import UserInfoCreate from "@/actions/user-house"

//ui
import { Input } from "@/components/ui/input"

// icons

//validation
import * as z from "zod";
import { SendInfoCustomerSchema } from "@/schemas/index"
import { useTransition } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@/components/ui/button';

const LeadForm = () => {

    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    //Validation
    const form = useForm<z.infer<typeof SendInfoCustomerSchema>>({
        resolver: zodResolver(SendInfoCustomerSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '', // Ahora 'phone' es un string, coincidiendo con el tipo
            address: '',
        }
    });


    //On submit
    const onSubmit = (values: z.infer<typeof SendInfoCustomerSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            UserInfoCreate(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);


                    if (data.error === undefined) {
                        router.refresh();
                        form.reset()
                    }

                    toast.success(data.success)
                    toast.error(data.error)

                }).catch((error) => {
                    console.log(error)
                })
        });

    }
    return (
        <div>
            <Form {...form}>
                <form id='form_info' onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-2 gap-5'>
                    {/* Address */}
                    <FormField
                        control={form.control}
                        name='address'
                        render={({ field }) => {
                            return <FormItem className='col-span-2 lg:col-span-1'>
                                <div className='flex flex-col '>
                                    <FormControl>
                                        <Input className='placeholder:text-white text-white' placeholder='House address' type='text' {...field} disabled={isPending}></Input>
                                    </FormControl>
                                </div>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }}>
                    </FormField>

                    {/* Name */}
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => {
                            return <FormItem className='col-span-2 lg:col-span-1'>
                                <div className='flex flex-col'>
                                    <FormControl>
                                        <Input className=' placeholder:text-white text-white' placeholder='Name' type='text' {...field} disabled={isPending}></Input>
                                    </FormControl>
                                </div>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }}>
                    </FormField>

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => {
                            return <FormItem className='col-span-2 lg:col-span-1'>
                                <div className='flex flex-col'>
                                    <FormControl>
                                        <Input className='placeholder:text-white text-white' placeholder='Email' type='text' {...field} disabled={isPending}></Input>
                                    </FormControl>
                                </div>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }}>
                    </FormField>

                    {/* Phone */}
                    <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => {
                            return <FormItem className='col-span-2 lg:col-span-1'>
                                <div className='flex flex-col'>
                                    <FormControl>
                                        <Input className='placeholder:text-white text-white' placeholder='Phone' type='number' {...field} disabled={isPending}></Input>
                                    </FormControl>
                                </div>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }}>
                    </FormField>
                    <div className='flex w-full col-span-2'>
                        <Button className='flex w-full px-8 py-2 bg-blue-600 hover:bg-blue-800 cursor-pointer drop-shadow-2xl' type='submit' disabled={isPending}>

                            {isPending ?
                                <p className='block text-md tracking-wide'>Sending...</p>
                                :
                                <p className='block text-md tracking-wide'>Send</p>
                            }
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default LeadForm