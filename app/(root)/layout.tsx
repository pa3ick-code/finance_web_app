import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = await getLoggedInUser();
  if(!isLoggedIn) redirect('/sign-in')
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
