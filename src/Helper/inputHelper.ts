// import React from "react";

// const inputHelper = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
//   data: Record<string, unknown>
// ): Record<string, unknown> => {
//   const updatedData: Record<string, unknown> = { ...data };
//   updatedData[e.target.name] = e.target.value;
//   return updatedData;
// };

// export default inputHelper;

import React from "react";
import  {UserInput}  from "../Components/Page/Register/Register";

const inputHelper = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  data: UserInput
): UserInput => {
  const updatedData: UserInput = { ...data };
  updatedData[e.target.name] = e.target.value;
  return updatedData;
};

export default inputHelper;


