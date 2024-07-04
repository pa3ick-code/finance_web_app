<<<<<<< HEAD
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
=======
import Image from "next/image";

export default function RootLayout({
>>>>>>> origin/main
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const isLoggedIn = await getLoggedInUser();
  // if(isLoggedIn) redirect('/');
  
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
        {children}
        <div className="auth-asset">
          <div>
            <Image
<<<<<<< HEAD
            src="/icons/auth-image.svg"
            alt=" auth image"
            width={500}
            height={500}
=======
            src="/images/auth-image.jpg"
            alt=" auth image"
            fill
            objectFit="cover"
            // width={500}
            // height={500}
>>>>>>> origin/main
            />
  
          </div>
        </div>
    </main>
  );
}
