'use server';

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

//sign in function
export const signIn = async({email, password}: signInProps)=>{
    try {
        const { account } = await createAdminClient();

        const res = await account.createEmailPasswordSession(email, password)
        // console.log(res)
        return parseStringify(res)
    } catch (error) {
        console.log(error)
    }
}

//Sign up function 
export const signUp = async(userData: SignUpParams)=>{
    const {email, password, firstName, lastName} = userData;
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAccount)
    } catch (error) {
        console.log(error)
    }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user)
  } catch (error) {
    return null;
  }
}

export const logOutAccount = async() => {
    try {
        const { account } = await createSessionClient();

        cookies().delete('appwrite-session'); 
        await account.deleteSession('current')
    } catch (error) {
        return null;
    }
}