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
            src="/images/auth-image.jpg"
            alt=" auth image"
            fill
            />
  
          </div>
        </div>
    </main>
  );
}
