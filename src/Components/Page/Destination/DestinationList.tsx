// // DestinationList.js
// import  { useEffect, useState } from "react";
// import { DestinationModel } from "../../../Interfaces";
// import DestinationCard from "./DestinationCard";

// function DestinationList() {
//     const [destinationItems, setDestinationItems] = useState<DestinationModel[]>([]);

//     useEffect(() => {
//         fetch("https://localhost:7090/api/Destination")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data: DestinationModel[]) => {
//                 console.log(data);
//                 setDestinationItems(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching destination data:", error);
//             });
//     }, []);

//     return (
//         <div className="container row">
//             {destinationItems.map((destinationItem: DestinationModel, index: number) => (
//                 <DestinationCard destinationItem={destinationItem} key={index} />
//             ))}
//         </div>
        
//     );
// }

// export default DestinationList;


import { useGetDestinationItemsQuery } from "../../../Apis/destinationItemApi";
import DestinationCard from "./DestinationCard";
import { MainLoader } from "../Loader";
import {DestinationModel } from "../../../Interfaces";


function DestinationList() {
  const { data, isLoading, isError } = useGetDestinationItemsQuery(null);

  if (isLoading) {
    return <MainLoader />;
  }

  if (isError) {
    return <p>Error fetching destination items.</p>;
  }

  return (
    <div className="container row">
      {data &&
        data.map((destinationItem: DestinationModel) => (
          <DestinationCard
            destinationItem={destinationItem}
            key={destinationItem.code}
          />
        ))}
    </div>
  );
}

export default DestinationList;