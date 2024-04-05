// interface userModel {
//     id:string;
//     firstName?: string;
//     userName: string;
//     email: string;
//     lastName?: string;
//     location?: string;
//     phoneNumber ?: string;
//     role?:string;
//   }
  
//   export default userModel;
  

export default interface userModel {
  fullName?: string;
  id: string;
  email: string;
  role?: string;
}