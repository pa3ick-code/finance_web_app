import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
<<<<<<< HEAD
import { getLoggedInUser } from "@/lib/actions/user.actions";
=======
import { getLoggedInUser } from "@/lib/actions/user.action";
>>>>>>> origin/main
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = await getLoggedInUser();
<<<<<<< HEAD
  if(!isLoggedIn) redirect('/sign-in');
  
=======
  if(!isLoggedIn) redirect('/sign-in')
>>>>>>> origin/main
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={isLoggedIn}/>
        <div className="flex flex-col size-full">
          <div className="root-layout">
            <Image src='icons/logo.svg' width={30} height={30} alt="menu logo"/>
            <div>
              <MobileNav user={isLoggedIn}/>
            </div>
          </div>
        {children}
        </div>
    </main>
  );
}
