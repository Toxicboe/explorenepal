// import React from 'react'
// import { Footer, ResponsiveNavbar } from '../../Layout';



// // interface User {
// //     id: number;
// //     username: string;
// //     email: string;
// //     bio: string;
// //     avatarUrl: string;
// //   }

// type Props = {}

// const UserProfile = () => {
//   return (
//     <div>
//     <ResponsiveNavbar/>
//     <h1>ahdg</h1>
//     <Footer/>
//     </div>
//   )
// }

// export default UserProfile


import React from 'react'
import { Footer, ResponsiveNavbar } from '../../Layout';


type Props = {}

const UserProfile = (props: Props) => {
  return (
    <div>
        <ResponsiveNavbar/>
        UserProfile
        <Footer/>
        </div>
  )
}

export default UserProfile