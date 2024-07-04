import AuthForm from "@/components/AuthForm";
<<<<<<< HEAD
import { getLoggedInUser } from "@/lib/actions/user.actions";
=======
import { getLoggedInUser } from "@/lib/actions/user.action";
>>>>>>> origin/main

export default async function SignIn() {
  const loggedInUser = await getLoggedInUser();
  
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>
    </section>
  );
}
