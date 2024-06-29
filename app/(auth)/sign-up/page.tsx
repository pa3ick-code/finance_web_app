import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function SignIn() {
  const loggedInUser = await getLoggedInUser();
  
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>
    </section>
  );
}
