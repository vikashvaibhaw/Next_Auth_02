"use client";
import { useSession ,SessionProvider,signIn,signOut} from "next-auth/react";
import Image from "next/image";

export default function Home() {
 
  return (
    <div> 
       <SessionProvider>
          <OtherHome/>
       </SessionProvider>
    </div>
  );
}

function OtherHome(){
   const session=useSession();
  
   return <div>
      {session.status=="authenticated" && <button onClick={()=>signOut()}>sign out</button>}
      {session.status=="unauthenticated" && <button onClick={()=>signIn()}>sign in</button>}
   </div>
  
}
