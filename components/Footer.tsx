<<<<<<< HEAD
import { logOutAccount } from '@/lib/actions/user.actions';
=======
import { logOutAccount } from '@/lib/actions/user.action';
>>>>>>> origin/main
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function Footer({user, type = 'desktop'}: FooterProps) {
    const router = useRouter();
     
    const handleLogOut = async () => {
        const loggedOut = await logOutAccount();

        if(loggedOut) router.push('/sign-in')
    }
  return (
    <footer className="footer">
      <div className={type === 'mobile'? 'footer_name-mobile': 'footer_name'}>
<<<<<<< HEAD
        <p className="text-xl foont-bold text-gray-700">{user?.firstName[0]}</p>
      </div>
      
      <div className={type === 'mobile'? 'footer_email-mobile': 'footer_email'}>
            <h1 className="text-14 truncate font-nsemibold  text-blue-600">{`${user?.firstName} ${user?.lastName}`}</h1>
=======
        <p className="text-xl foont-bold text-gray-700">{user?.name[0]}</p>
      </div>
      
      <div className={type === 'mobile'? 'footer_email-mobile': 'footer_email'}>
            <h1 className="text-14 truncate font-nsemibold  text-blue-600">{user?.name}</h1>
>>>>>>> origin/main
            <p className="text-14 truncate font-normal text-gray-600">{user?.email}</p>
        </div> 

        <div className="footer_image" onClick={handleLogOut}>
            <Image src='icons/logout.svg' fill alt='user_logout' />
        </div>
    </footer>
  );
}

export default Footer;
