// import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
// import { redirect } from "next/navigation";

export default async function RootLayout({
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
            src="/icons/auth-image.svg"
            alt=" auth image"
            width={500}
            height={500}
            />
  
          </div>
        </div>
    </main>
  );
}
