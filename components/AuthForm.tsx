'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import PlaidLink from "./PlaidLink";
import { Loader2 } from "lucide-react";
import { authFormSchema } from "@/lib/utils";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

export default function AuthForm({type}: AuthFormProps) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type)

    //1. Define form
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async(data: z.infer<typeof formSchema>)=> {
    setIsLoading(true);
    try {
      const userData = {
        firstName: data.firstName!,
        lastName: data.lastName!,
        address1: data.address1!,
        city: data.city!,
        state: data.state!,
        postalCode: data.postalCode!,
        dateOfBirth: data.dateOfBirth!,
        ssn: data.ssn!,
        email: data.email,
        password: data.password,

      }
      if(type === 'sign-in'){
        const res = await signIn({
          email: data.email,
          password: data.password,
        });
        if(res) router.push('/');
      }

      if(type === 'sign-up'){
        const newUser = await signUp(userData);

        setUser(newUser)
      }
      
    }catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  
  return (
    <section className='auth-form'>
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href='/' className='cursor-pointer flex items-center gap-1'>
            <Image 
                src='icons/logo.svg'
                alt='Hybrid logo'
                width={34}
                height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Hybrid</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 text-gray-900 font-semibold">
                {
                user
                ?' Link Account'
                : type === 'sign-in'
                 ? 'Sign in'
                 : 'Sign up'
            }
            </h1>
            <p className="text-16 text-gray-600 font-normal">
                {user
                ? 'Link your account to get started'
                : 'Please enter your details'
                }
            </p>
        </div>

      </header>
      {user? (
        <div className="flex flex-col gap-4">
          {/* //Plaid */}
           <PlaidLink  user={user} variant="primary"/>
           <p>user: user_good | password: pass_goood</p>
        </div>
      ): ( 
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {type === 'sign-up' && (
                    <>
                      <div className="flex gap-4">
                        <CustomInput 
                          name="firstName"
                          label="Firstname"
                          placeholder="Firstname"
                          control={form.control}
                          disabled={isLoading}
                        />
                        <CustomInput 
                          name="lastName"
                          label="Lastname"
                          placeholder="Lastname"
                          control={form.control}
                          disabled={isLoading}
                        />
                      </div>

                      <CustomInput 
                        name="address1"
                        label="Address"
                        placeholder="Address"
                        control={form.control}
                        disabled={isLoading}
                      />

                      <CustomInput 
                        name="state"
                        label="State"
                        placeholder="Enter your state  "
                        control={form.control}
                        disabled={isLoading}
                      />

                      <div className="flex gap-4">
                        <CustomInput 
                          name="postalCode"
                          label="Postal Code"
                          placeholder="Postal code eg. 101-111"
                          control={form.control}
                          disabled={isLoading}
                        />
                        <CustomInput 
                          name="city"
                          label="City"
                          placeholder="Example: Lagos"
                          control={form.control}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="flex gap-4">
                        <CustomInput 
                          name="dateOfBirth"
                          label="Date of birth"
                          placeholder="Date of birth"
                          control={form.control}
                          disabled={isLoading}
                        />
                        <CustomInput 
                          name="ssn"
                          label="NIN"
                          placeholder="NIN"
                          control={form.control}
                      disabled={isLoading}
                        />
                      </div>
                    </>
                  )}
                   
                    <CustomInput 
                      name="email"
                      label="Email"
                      placeholder="email"
                      control={form.control}
                      disabled={isLoading}
                    />
                    <CustomInput 
                      name="password"
                      label="Password"
                      placeholder="password"
                      type="password"
                      control={form.control}
                      disabled={isLoading}
                    />

                    <div className="flex flex-col gap-4">
                      <Button type="submit" disabled={isLoading} className="form-btn">
                        {isLoading? (
                          <>
                          <Loader2 size={20} className="animate-spin"/> &nbsp;
                          Loading ...
                          </>
                        ): type === 'sign-in'
                          ? 'Sign In' : 'Sign up'}
                      </Button>
                    </div>
                </form>
            </Form>

            <footer className="flex justify-center gap-1">
              <p className="text-14 form-normal text-gray-600">
                {type === 'sign-in'?
                "Already have an account?"
                :"Don't have an account?"}
              </p>
              <Link 
                href={type === 'sign-in'?
                  '/sign-up' : '/sign-in'
                }
                className="form-link"
              >
                  {type === 'sign-in'?
                  'Sign up' : 'Sign in'}
              </Link>
            </footer>
        </>
      )}
    </section>
  );
}
