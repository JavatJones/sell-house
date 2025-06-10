"use client"
import React, { useState } from 'react'

//actions
import UserInfoCreate from "@/actions/user-house"

//ui
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"

// icons

//validation
import * as z from "zod";
import { SendInfoCustomerSchema } from "@/schemas/index"
import { useTransition } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';


const LeadForm = () => {

    const router = useRouter();
    const [, setError] = useState<string | undefined>("");
    const [, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    //Validation
    const form = useForm<z.infer<typeof SendInfoCustomerSchema>>({
        resolver: zodResolver(SendInfoCustomerSchema),
        defaultValues: {
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
                                        <Input className='placeholder:text-black/40 text-black' placeholder='Property address' type='text' {...field} disabled={isPending}></Input>
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
                                        <PhoneInput defaultCountry='US' international={false} placeholder='Phone: (xxx) xxx - xxxx' className=' placeholder:text-black/40 text-black no-arrow' {...field} disabled={isPending}></PhoneInput>
                                    </FormControl>
                                </div>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }}>
                    </FormField>

                    <div className='flex w-full col-span-2 '>
                        <Button className='flex w-full py-3 px-4 cursor-pointer bg-emerald-400 hover:bg-emerald-500 text-white font-bold rounded-lg drop-shadow-2xl drop-shadow-emerald-400/30 transition duration-300 ease-in-out transform hover:scale-105' type='submit' disabled={isPending}>

                            {isPending ?
                                <p className='block text-md lg:text-lg font-bold tracking-wide text-white'>Sending...</p>
                                :
                                <p className='block text-md lg:text-lg font-bold tracking-wide text-white'>Send</p>
                            }
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default LeadForm