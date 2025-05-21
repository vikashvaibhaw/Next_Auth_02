// "use client";
// import { useSession, SessionProvider, signIn, signOut } from "next-auth/react";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <OtherHome />
//     </SessionProvider>
//   );
// }

// function OtherHome() {
//   const session = useSession();

//   return (
//     <div>
//       {session.status === "authenticated" && (
//         <button onClick={() => signOut()}>sign out</button>
//       )}
//       {session.status === "unauthenticated" && (
//         <button onClick={() => signIn()}>sign in</button>
//       )}
//     </div>
//   );
// }

import { getServerSession } from "next-auth";

export default async function Home(){
    const session=await getServerSession();
    // const userProfile=db.avatars.findOne({
    //     where:{
    //       email:session.email
    //     }
    // })

    return (
      <div>
        {JSON.stringify(session)};
      </div>
    )
  
}