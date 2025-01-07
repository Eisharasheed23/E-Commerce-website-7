

import Image from "next/image";

export default function Hero() {
  return (
    <main className="w-full mt-16 flex gap-x-10">
      {/* First Section - Left Text and Button with Car Image */}
      <div className="w-1/2 h-[500px] bg-[#54A6FF] flex flex-col justify-between items-start p-4 space-y-4 relative rounded-lg">
        <div className="flex flex-col justify-start items-start space-y-4 z-10"> {/* Added z-10 to bring content above the image */}
          <h1 className="text-8xl md:text-4xl text-white font-bold">
            The Best Platform
          </h1>
          <h1 className="text-6xl md:text-4xl text-white font-bold">
            for Car Rental
          </h1>
          <p className="text-white">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
            Rental Car
          </button>
        </div>

        {/* Car Image for First Section - Centered inside the blue container */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <Image
            src="/BG (4).png"
            width={700}
            height={700}  
            alt="Car"
            className="rounded-lg object-contain"  
          />
        </div>
      </div>

      {/* Second Section - Text and Button with Car Image */}
      <div className="w-1/2 h-[500px] bg-[#1a239b] flex flex-col justify-between items-start p-4 space-y-4 relative rounded-lg">
        <div className="flex flex-col justify-start items-start space-y-4 z-10"> {/* Added z-10 to bring content above the image */}
          <h1 className="text-8xl md:text-4xl text-white font-bold">
            Easy way to rent a 
          </h1>
          <h1 className="text-6xl md:text-4xl text-white font-bold">
            car at a low price
          </h1>
          <p className="text-white">Providing cheap car rental services and safe and comfortable facilities.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
            Rental car
          </button>
        </div>

        {/* Car Image for Second Section - Centered inside the blue container */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <Image
            src="/image 8.png"
            width={400}
            height={400}  
            alt="Car"
            className="rounded-lg object-contain"  
          />
        </div>





      </div>
    </main>
  );
}
// 'use client';
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <main className="w-full mt-16 flex gap-x-10">
//       {/* First Section - Left Text and Button with Car Image */}
//       <div className="w-1/2 h-[500px] bg-[#54A6FF] flex flex-col justify-between items-start p-4 space-y-4 relative rounded-lg">
//         <div className="flex flex-col justify-start items-start space-y-4 z-10"> {/* Added z-10 to bring content above the image */}
//           <h1 className="text-8xl md:text-4xl text-white font-bold">
//             The Best Platform
//           </h1>
//           <h1 className="text-6xl md:text-4xl text-white font-bold">
//             for Car Rental
//           </h1>
//           <p className="text-white">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
//             Rental Car
//           </button>
//         </div>

//         {/* Car Image for First Section - Centered inside the blue container */}
//         <div className="absolute inset-0 flex justify-center items-center z-0">
//           <Image
//             src="/BG (4).png"
//             width={700}
//             height={700}  
//             alt="Car"
//             className="rounded-lg object-contain"  
//           />
//         </div>
//       </div>

//       {/* Second Section - Text and Button with Car Image */}
//       <div className="w-1/2 h-[500px] bg-[#1a239b] flex flex-col justify-between items-start p-4 space-y-4 relative rounded-lg">
//         <div className="flex flex-col justify-start items-start space-y-4 z-10"> {/* Added z-10 to bring content above the image */}
//           <h1 className="text-8xl md:text-4xl text-white font-bold">
//             Easy way to rent a 
//           </h1>
//           <h1 className="text-6xl md:text-4xl text-white font-bold">
//             car at a low price
//           </h1>
//           <p className="text-white">Providing cheap car rental services and safe and comfortable facilities.</p>
//           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300">
//             Rental car
//           </button>
//         </div>

//         {/* Car Image for Second Section - Centered inside the blue container */}
//         <div className="absolute inset-0 flex justify-center items-center z-0">
//           <Image
//             src="/image 8.png"
//             width={400}
//             height={400}  
//             alt="Car"
//             className="rounded-lg object-contain"  
//           />
//         </div>

//         {/* Additional image */}
//         <div>
//           <Image 
//             src="/mark.png" 
//             alt="Description of the image" 
//             width={200} 
//             height={300} 
//           />
//         </div>
//       </div>

//       {/* Add gap below the images and ensure the new section is properly spaced */}
//       <div className="w-full mt-8 px-4">
//         {/* Pick-Up and Drop-Off Containers */}
//         <div className="flex gap-x-10 w-full">
//           {/* Pick-Up Container */}
//           <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Pick-Up 🏙️</h3>
//             <div className="space-y-4">
//               <label htmlFor="pickup-city" className="block text-sm">Pick-Up City:</label>
//               <input
//                 type="text"
//                 id="pickup-city"
//                 placeholder="Enter City"
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div className="space-y-4">
//               <label htmlFor="pickup-date" className="block text-sm">Pick-Up Date:</label>
//               <input
//                 type="date"
//                 id="pickup-date"
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div className="space-y-4">
//               <label htmlFor="pickup-time" className="block text-sm">Pick-Up Time:</label>
//               <input
//                 type="time"
//                 id="pickup-time"
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//           </div>

//           {/* Drop-Off Container */}
//           <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Drop-Off 🚗</h3>
//             <div className="space-y-4">
//               <label htmlFor="dropoff-city" className="block text-sm">Drop-Off City:</label>
//               <input
//                 type="text"
//                 id="dropoff-city"
//                 placeholder="Enter City"
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div className="space-y-4">
//               <label htmlFor="dropoff-date" className="block text-sm">Drop-Off Date:</label>
//               <input
//                 type="date"
//                 id="dropoff-date"
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//             <div className="space-y-4">
//               <label htmlFor="dropoff-time" className="block text-sm">Drop-Off Time:</label>
//               <input
//                 type="time"
//                 id="dropoff-time"
//                 className="w-full p-3 border rounded-md"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



