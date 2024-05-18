"use client"
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavigationTest = () => {
    
    
    //CLIENT SIDE COMPONENTS
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handelClick = ()=>{
        console.log("CLicked")
        // router.push("/")     "push to the home page and client side navigation"
        // router.replace("/")   "Not add new entry to browser history stack "
        router.refresh()  //refresh page
    }
    return (
        <div>
            <Link href="/" prefetch={false}> Click here</Link>
            <button onClick={handelClick}>Write and Redirect</button>
        </div>
    );
}

export default NavigationTest;