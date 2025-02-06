import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Main Content Section */}
      <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

          {/* Type Section on the Left */}
          <div style={{ flex: 1, fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
            {/* Completed Type Section */}
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
            </div>

            {/* Capacity Section */}
            <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '20px' }}>C A P A C I T Y</div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 2 Person <span style={{ color: 'gray' }}>(10)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 4 Person <span style={{ color: 'gray' }}>(14)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 6 Person <span style={{ color: 'gray' }}>(12)</span>
            </div>
            <div style={{ fontSize: '18px', margin: '10px 0' }}>
              <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 8 or More <span style={{ color: 'gray' }}>(16)</span>
            </div>

            {/* Price Section */}
            <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '10px' }}>P R I C E</div>

            {/* Price Range Section */}
            <div style={{ width: '296px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px' }}>
              <input type="range" min="0" max="100" step="1" defaultValue="20" style={{ width: '100%', backgroundColor: '#e0e0e0' }} />
            </div>

            {/* Max. $100.00 Text */}
            <div style={{ fontSize: '20px', color: 'gray', marginTop: '5px', textAlign: 'left' }}>Max. $100.00</div>

          </div>

          {/* Pick-Up and Drop-Off Section - Positioned Horizontally next to the Type Section */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flex: 2 }}>

            {/* Pick-Up Container */}
            <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
              <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
              <div className="space-y-4">
                <div className="flex gap-x-4">
                  <div className="w-1/3">
                    <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
                    <select id="pickup-city" className="w-full p-3 border rounded-md">
                      <option value="">Select your city</option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </select>
                  </div>
                  <div className="w-1/3">
                    <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
                    <select id="pickup-date" className="w-full p-3 border rounded-md">
                      <option value="">Select your date</option>
                      <option value="2025-01-10">January 10, 2025</option>
                      <option value="2025-01-11">January 11, 2025</option>
                      <option value="2025-01-12">January 12, 2025</option>
                    </select>
                  </div>
                  <div className="w-1/3">
                    <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
                    <select id="pickup-time" className="w-full p-3 border rounded-md">
                      <option value="">Select your time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Box Divider */}
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
              <div className="flex items-center justify-center gap-0 w-full">
                <div className="text-white cursor-pointer">↑</div>
                <div className="text-white cursor-pointer">↓</div>
              </div>
            </div>

            {/* Drop-Off Container */}
            <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
              <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
              <div className="space-y-4">
                <div className="flex gap-x-4">
                  <div className="w-1/3">
                    <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
                    <select id="dropoff-city" className="w-full p-3 border rounded-md">
                      <option value="">Select your city</option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      <option value="city3">City 3</option>
                    </select>
                  </div>
                  <div className="w-1/3">
                    <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
                    <select id="dropoff-date" className="w-full p-3 border rounded-md">
                      <option value="">Select your date</option>
                      <option value="2025-01-10">January 10, 2025</option>
                      <option value="2025-01-11">January 11, 2025</option>
                      <option value="2025-01-12">January 12, 2025</option>
                    </select>
                  </div>
                  <div className="w-1/3">
                    <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
                    <select id="dropoff-time" className="w-full p-3 border rounded-md">
                      <option value="">Select your time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Car Image Grid Section under Pick-Up and Drop-Off */}
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Available Cars</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
              {/* Car Image 1 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-1.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Koenigsegg</p>
                <p style={{ color: 'gray' }}>Sport</p>
                <p style={{ fontWeight: 'bold' }}>$99.00 / day</p>
                
              </div>

              {/* Car Image 2 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-2.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>

                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Ferrari</p>
                <p style={{ color: 'gray' }}>Sport</p>
                <p style={{ fontWeight: 'bold' }}>$150.00 / day</p>
              </div>

              {/* Car Image 3 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-3.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Lamborghini</p>
                <p style={{ color: 'gray' }}>Luxury</p>
                <p style={{ fontWeight: 'bold' }}>$130.00 / day</p>
              </div>

              {/* Car Image 4 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-4.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Tesla</p>
                <p style={{ color: 'gray' }}>Electric</p>
                <p style={{ fontWeight: 'bold' }}>$90.00 / day</p>
              </div>

              {/* Car Image 5 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-5.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>BMW</p>
                <p style={{ color: 'gray' }}>SUV</p>
                <p style={{ fontWeight: 'bold' }}>$110.00 / day</p>
              </div>

              {/* Car Image 6 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-6.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Audi</p>
                <p style={{ color: 'gray' }}>SUV</p>
                <p style={{ fontWeight: 'bold' }}>$100.00 / day</p>
              </div>

              {/* Car Image 7 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-7.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Mercedes</p>
                <p style={{ color: 'gray' }}>Luxury</p>
                <p style={{ fontWeight: 'bold' }}>$120.00 / day</p>
              </div>

              {/* Car Image 8 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Image src="/e-8.png" alt="Car 8" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px', height:'2'}} />
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Porsche</p>
                <p style={{ color: 'gray' }}>Sport</p>
                <p style={{ fontWeight: 'bold' }}>$140.00 / day</p>
              </div>

              {/* Car Image 9 */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <Image 
  src="/e-9.png" 
  alt="Car 2" 
  width={500}  // Set an appropriate width
  height={300} // Set an appropriate height
  layout="intrinsic" // Preserve the image's natural aspect ratio
  objectFit="contain" // Ensure it fits within the container without distortion
  style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
/>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Jaguar</p>
                <p style={{ color: 'gray' }}>Luxury</p>
                <p style={{ fontWeight: 'bold' }}>$125.00 / day</p>
              </div>
            
<div>
      
      
      {/* Link Component wrapping the button */}
      <Link href="/morecar">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
          Show Car
        </button>
      </Link>
    </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

















































































































































// export default function Home() {
//   return (
//     <main>
//       {/* Main Content Section */}
//       <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

//         {/* Combined Section for Type, Capacity, and Price */}
//         <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

//           {/* Type Section */}
//           <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
//             <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//           </div>

//           {/* Capacity Section */}
//           <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '20px' }}>C A P A C I T Y</div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 2 Person <span style={{ color: 'gray' }}>(10)</span>
//           </div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 4 Person <span style={{ color: 'gray' }}>(14)</span>
//           </div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 6 Person <span style={{ color: 'gray' }}>(12)</span>
//           </div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 8 or More <span style={{ color: 'gray' }}>(16)</span>
//           </div>

//           {/* Price Section */}
//           <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '10px' }}>P R I C E</div>

//           {/* Price Range Section */}
//           <div style={{ width: '296px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px' }}>
//             <input type="range" min="0" max="100" step="1" defaultValue="20" style={{ width: '100%', backgroundColor: '#e0e0e0' }} />
//           </div>

//           {/* Max. $100.00 Text */}
//           <div style={{ fontSize: '20px', color: 'gray', marginTop: '5px', textAlign: 'left' }}>Max. $100.00</div>

//         </div> {/* End of combined container for Type, Capacity, and Price */}
        
//         {/* Images Section - Horizontal Row */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
//           <img 
//             src="https://via.placeholder.com/150"
//             alt="Image 1"
//             style={{ width: '32%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
//           />
//           <img 
//             src="https://via.placeholder.com/150"
//             alt="Image 2"
//             style={{ width: '32%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
//           />
//           <img 
//             src="https://via.placeholder.com/150"
//             alt="Image 3"
//             style={{ width: '32%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
//           />
//         </div>

//       </div>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main>
//       {/* Main Content Section */}
//       <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

//         {/* Combined Section for Type, Capacity, and Price */}
//         <div style={{ display: 'flex', flexDirection: 'column',  backgroundColor: 'white',width: '100%' }}>

//           {/* Type Section */}
//           <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
//             <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//           </div>

//           {/* Capacity Section */}
//           <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '20px' }}>C A P A C I T Y</div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 2 Person <span style={{ color: 'gray' }}>(10)</span>
//           </div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 4 Person <span style={{ color: 'gray' }}>(14)</span>
//           </div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 6 Person <span style={{ color: 'gray' }}>(12)</span>
//           </div>
//           <div style={{ fontSize: '18px', margin: '10px 0' }}>
//             <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 8 or More <span style={{ color: 'gray' }}>(16)</span>
//           </div>

//           {/* Price Section */}
//           <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '10px' }}>P R I C E</div>

//           {/* Price Range Section */}
//           <div style={{ width: '296px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px' }}>
//             <input type="range" min="0" max="100" step="1" defaultValue="20" style={{ width: '100%', backgroundColor: '#e0e0e0' }} />
//           </div>

//           {/* Max. $100.00 Text */}
//           <div style={{ fontSize: '20px', color: 'gray', marginTop: '5px', textAlign: 'left' }}>Max. $100.00</div>

//         </div> {/* End of combined container for Type, Capacity, and Price */}

//         {/* Pick-Up and Drop-Off Section - Positioned Horizontally */}
//         <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flex: 2 }}>

//           {/* Pick-Up Container */}
//           <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//             <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
//             <div className="space-y-4">
//               <div className="flex gap-x-4">
//                 <div className="w-1/3">
//                   <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
//                   <select id="pickup-city" className="w-full p-3 border rounded-md">
//                     <option value="">Select your city</option>
//                     <option value="city1">City 1</option>
//                     <option value="city2">City 2</option>
//                     <option value="city3">City 3</option>
//                   </select>
//                 </div>
//                 <div className="w-1/3">
//                   <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
//                   <select id="pickup-date" className="w-full p-3 border rounded-md">
//                     <option value="">Select your date</option>
//                     <option value="2025-01-10">January 10, 2025</option>
//                     <option value="2025-01-11">January 11, 2025</option>
//                     <option value="2025-01-12">January 12, 2025</option>
//                   </select>
//                 </div>
//                 <div className="w-1/3">
//                   <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
//                   <select id="pickup-time" className="w-full p-3 border rounded-md">
//                     <option value="">Select your time</option>
//                     <option value="09:00">09:00 AM</option>
//                     <option value="12:00">12:00 PM</option>
//                     <option value="15:00">03:00 PM</option>
//                     <option value="18:00">06:00 PM</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Swap Box Divider */}
//           <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
//             <div className="flex items-center justify-center gap-0 w-full">
//               <div className="text-white cursor-pointer">↑</div>
//               <div className="text-white cursor-pointer">↓</div>
//             </div>
//           </div>

//           {/* Drop-Off Container */}
//           <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//             <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
//             <div className="space-y-4">
//               <div className="flex gap-x-4">
//                 <div className="w-1/3">
//                   <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
//                   <select id="dropoff-city" className="w-full p-3 border rounded-md">
//                     <option value="">Select your city</option>
//                     <option value="city1">City 1</option>
//                     <option value="city2">City 2</option>
//                     <option value="city3">City 3</option>
//                   </select>
//                 </div>
//                 <div className="w-1/3">
//                   <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
//                   <select id="dropoff-date" className="w-full p-3 border rounded-md">
//                     <option value="">Select your date</option>
//                     <option value="2025-01-10">January 10, 2025</option>
//                     <option value="2025-01-11">January 11, 2025</option>
//                     <option value="2025-01-12">January 12, 2025</option>
//                   </select>
//                 </div>
//                 <div className="w-1/3">
//                   <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
//                   <select id="dropoff-time" className="w-full p-3 border rounded-md">
//                     <option value="">Select your time</option>
//                     <option value="09:00">09:00 AM</option>
//                     <option value="12:00">12:00 PM</option>
//                     <option value="15:00">03:00 PM</option>
//                     <option value="18:00">06:00 PM</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Images Section - Horizontal Row */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
//           <img 
//             src="https://via.placeholder.com/150"
//             alt="Image 1"
//             style={{ width: '32%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
//           />
//           <img 
//             src="https://via.placeholder.com/150"
//             alt="Image 2"
//             style={{ width: '32%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
//           />
//           <img 
//             src="https://via.placeholder.com/150"
//             alt="Image 3"
//             style={{ width: '32%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
//           />
//         </div>

//       </div>
//     </main>
//   );
// }



// import { FaGasPump } from "react-icons/fa";
// import { TbChartDonut3 } from "react-icons/tb";
// import { FaUserFriends } from "react-icons/fa";

// export default function Home() {
//   return (
//     <main>
//       {/* Main Content Section */}
//       <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

//         {/* Header Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

//           {/* Type Section on the Left */}
//           <div style={{ flex: 1, fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
//             {/* Completed Type Section */}
//             <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//           </div>

//           {/* Pick-Up and Drop-Off Section - Positioned Horizontally next to the Type Section */}
//           <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flex: 2 }}>

//             {/* Pick-Up Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
//                     <select id="pickup-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
//                     <select id="pickup-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
//                     <select id="pickup-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Swap Box Divider */}
//             <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
//               <div className="flex items-center justify-center gap-0 w-full">
//                 <div className="text-white cursor-pointer">↑</div>
//                 <div className="text-white cursor-pointer">↓</div>
//               </div>
//             </div>

//             {/* Drop-Off Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
//                     <select id="dropoff-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
//                     <select id="dropoff-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
//                     <select id="dropoff-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Car Images Section (Inserted Here) */}
//           <div className="mt-8 px-4">
//             {/* Car Images Section */}
//             <div className="flex gap-x-4 justify-center">
//               {/* Car 1 Image with Name and Type */}
//               <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
//                 <p className="font-semibold mb-2">Koenigsegg</p>
//                 <p className="text-gray-500 mb-2">Sport</p>
//                 <img
//                   src="/e-1.png" // Ensure the correct path to the image inside the public folder
//                   alt="Car 1"
//                   className="w-full h-auto rounded-lg mb-4"
//                 />
//                 {/* Icons under the first car */}
//                 <div className="flex justify-center gap-x-4 mt-2">
//                   <div className="flex items-center">
//                     <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">90 L</span> {/* Text next to the gas pump icon */}
//                   </div>
//                   <div className="flex items-center">
//                     <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
//                   </div>
//                   <div className="flex items-center">
//                     <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">2 People</span> {/* Text next to the people icon */}
//                   </div>
//                 </div>
//                 {/* Price and Rent Now Button */}
//                 <div className="flex justify-between items-center mt-4">
//                   <p className="text-lg font-semibold">$99.00 / day</p>
//                   <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
//                 </div>
//               </div>

//               {/* Car 2 Image with Name and Type */}
//               <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
//                 <p className="font-semibold mb-2">Nissan GT-R</p>
//                 <p className="text-gray-500 mb-2">Sport</p>
//                 <img
//                   src="/e-2.png" // Ensure the correct path to the image inside the public folder
//                   alt="Car 2"
//                   className="w-full h-auto rounded-lg mb-4"
//                 />
//                 {/* Icons under the second car */}
//                 <div className="flex justify-center gap-x-4 mt-2">
//                   <div className="flex items-center">
//                     <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
//                   </div>
//                   <div className="flex items-center">
//                     <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
//                   </div>
//                   <div className="flex items-center">
//                     <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
//                   </div>
//                 </div>
//                 {/* Price and Rent Now Button */}
//                 <div className="flex justify-between items-center mt-4">
//                   <p className="text-lg font-semibold">$99.00 / day</p>
//                   <p className="text-gray-400 line-through">$100.00</p> {/* Strikethrough price */}
//                   <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
//                 </div>
//               </div>

//               {/* Car 3 Image with Name and Type */}
//               <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
//                 <p className="font-semibold mb-2">Rolls-Royce</p>
//                 <p className="text-gray-500 mb-2">Sedan</p>
//                 <img
//                   src="/e-3.png" // Ensure the correct path to the image inside the public folder
//                   alt="Car 3"
//                   className="w-full h-auto rounded-lg mb-4"
//                 />
//                 {/* Icons under the third car */}
//                 <div className="flex justify-center gap-x-4 mt-2">
//                   <div className="flex items-center">
//                     <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">70 L</span> {/* Text next to the gas pump icon */}
//                   </div>
//                   <div className="flex items-center">
//                     <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
//                   </div>
//                   <div className="flex items-center">
//                     <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
//                     <span className="text-gray-400 ml-2">4 People</span> {/* Text next to the people icon */}
//                   </div>
//                 </div>
//                 {/* Price and Rent Now Button */}
//                 <div className="flex justify-between items-center mt-4">
//                   <p className="text-lg font-semibold">$99.00 / day</p>
//                   <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// import { FaGasPump } from "react-icons/fa";
// import { TbChartDonut3 } from "react-icons/tb";
// import { FaUserFriends } from "react-icons/fa";
// import { GiBlackBar } from "react-icons/gi";
// export default function Home() {
//   return (
//     <main>
//       Main Content Section
//       <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

//         {/* Header Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

//           {/* Type Section on the Left */}
//           <div style={{ flex: 1, fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
//             {/* Completed Type Section */}
//             <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//           </div>
         
//           {/* Pick-Up and Drop-Off Section - Positioned Horizontally next to the Type Section */}
//           <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flex: 2 }}>

//             {/* Pick-Up Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
//                     <select id="pickup-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
//                     <select id="pickup-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
//                     <select id="pickup-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Swap Box Divider */}
//             <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
//               <div className="flex items-center justify-center gap-0 w-full">
//                 <div className="text-white cursor-pointer">↑</div>
//                 <div className="text-white cursor-pointer">↓</div>
//               </div>
//             </div>

//             {/* Drop-Off Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
//                     <select id="dropoff-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
//                     <select id="dropoff-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
//                     <select id="dropoff-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Car Images Section */}
//         <div className="mt-8 px-4">
//           <div className="flex gap-x-4 justify-center">
//             {/* Car 1 Image with Name and Type */}
//             <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
//               <p className="font-semibold mb-2">Koenigsegg</p>
//               <p className="text-gray-500 mb-2">Sport</p>
//               <img
//                 src="/e-1.png" // Ensure the correct path to the image inside the public folder
//                 alt="Car 1"
//                 className="w-full h-auto rounded-lg mb-4"
//               />
//               {/* Icons under the first car */}
//               <div className="flex justify-center gap-x-4 mt-2">
//                 <div className="flex items-center">
//                   <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">90 L</span>
//                 </div>
//                 <div className="flex items-center">
//                   <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">Manual</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">2 People</span>
//                 </div>
//               </div>
//               {/* Price and Rent Now Button */}
//               <div className="flex justify-between items-center mt-4">
//                 <p className="text-lg font-semibold">$99.00 / day</p>
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
//               </div>
//             </div>

//             {/* Car 2 Image with Name and Type */}
//             <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
//               <p className="font-semibold mb-2">Nissan GT-R</p>
//               <p className="text-gray-500 mb-2">Sport</p>
//               <img
//                 src="/e-2.png"
//                 alt="Car 2"
//                 className="w-full h-auto rounded-lg mb-4"
//               />
//               {/* Icons under the second car */}
//               <div className="flex justify-center gap-x-4 mt-2">
//                 <div className="flex items-center">
//                   <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">80 L</span>
//                 </div>
//                 <div className="flex items-center">
//                   <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">Manual</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">6 People</span>
//                 </div>
//               </div>
//               {/* Price and Rent Now Button */}
//               <div className="flex justify-between items-center mt-4">
//                 <p className="text-lg font-semibold">$99.00 / day</p>
//                 <p className="text-gray-400 line-through">$100.00</p>
//                 <button className="bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
//               </div>
//             </div>

//             {/* Car 3 Image with Name and Type */}
//             <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
//               <p className="font-semibold mb-2">Rolls-Royce</p>
//               <p className="text-gray-500 mb-2">Sedan</p>
//               <img
//                 src="/e-3.png"
//                 alt="Car 3"
//                 className="w-full h-auto rounded-lg mb-4"
//               />
//               {/* Icons under the third car */}
//               <div className="flex justify-center gap-x-4 mt-2">
//                 <div className="flex items-center">
//                   <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">70 L</span>
//                 </div>
//                 <div className="flex items-center">
//                   <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">Manual</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
//                   <span className="text-gray-400 ml-2">4 People</span>
//                 </div>
//               </div>
//               {/* Price and Rent Now Button */}
//               <div className="flex justify-between items-center mt-4">
//                 <p className="text-lg font-semibold">$99.00 / day</p>
//                 <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// export default function Home() {
//   return (
//     <main>
//       {/* Main Content Section */}
//       <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

//         {/* Header Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

//           {/* Type Section on the Left */}
//           <div style={{ flex: 1, fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
//             {/* Completed Type Section */}
//             <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//           </div>

//           {/* Pick-Up and Drop-Off Section - Positioned Horizontally next to the Type Section */}
//           <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flex: 2 }}>

//             {/* Pick-Up Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
//                     <select id="pickup-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
//                     <select id="pickup-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
//                     <select id="pickup-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Swap Box Divider */}
//             <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
//               <div className="flex items-center justify-center gap-0 w-full">
//                 <div className="text-white cursor-pointer">↑</div>
//                 <div className="text-white cursor-pointer">↓</div>
//               </div>
//             </div>

//             {/* Drop-Off Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
//                     <select id="dropoff-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
//                     <select id="dropoff-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
//                     <select id="dropoff-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
        

//         {/* Capacity Section */}
//         <div style={{ marginTop: '30px', fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '10px' }}>C A P A C I T Y</div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 2 Person <span style={{ color: 'gray' }}>(10)</span>
//         </div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 4 Person <span style={{ color: 'gray' }}>(14)</span>
//         </div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 6 Person <span style={{ color: 'gray' }}>(12)</span>
//         </div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 8 orMore <span style={{ color: 'gray' }}>(16)</span>
//         </div>

//         {/* Price Range Section */}
//         <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '10px' }}>P R I C E</div>
//         <div style={{ width: '296px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px' }}>
//           <input type="range" min="0" max="100" step="1" defaultValue="20" style={{ width: '100%', backgroundColor: '#e0e0e0' }} />
//         </div>
//         <div style={{ fontSize: '20px', color: 'gray', marginTop: '5px', textAlign: 'left' }}>Max. $100.00</div>
//       </div>
      
//     </main>
//   );
// }


// export default function Home() {
//   return (
//     <main>
//       {/* Main Content Section */}
//       <div style={{ width: '100%', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', padding: '20px', fontFamily: 'Arial, sans-serif' }}>

//         {/* Header Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>

//           {/* Type Section on the Left */}
//           <div style={{ flex: 1, backgroundColor: 'pink',  fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '30px' }}>
//             {/* Completed Type Section */}
//             <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>T Y P E</div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> Sport <span style={{ color: 'gray' }}>(10)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> SUV <span style={{ color: 'gray' }}>(12)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> MPV <span style={{ color: 'gray' }}>(16)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Sedan <span style={{ color: 'gray' }}>(20)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Coupe <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//             <div style={{ fontSize: '18px', margin: '10px 0' }}>
//               <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '20px', borderRadius: '3px', marginRight: '10px' }}>☐</span> Hatchback <span style={{ color: 'gray' }}>(14)</span>
//             </div>
//           </div>

//           {/* Pick-Up and Drop-Off Section - Positioned Horizontally next to the Type Section */}
//           <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flex: 2 }}>

//             {/* Pick-Up Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
//                     <select id="pickup-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
//                     <select id="pickup-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
//                     <select id="pickup-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Swap Box Divider */}
//             <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
//               <div className="flex items-center justify-center gap-0 w-full">
//                 <div className="text-white cursor-pointer">↑</div>
//                 <div className="text-white cursor-pointer">↓</div>
//               </div>
//             </div>

//             {/* Drop-Off Container */}
//             <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg" style={{ flex: 1 }}>
//               <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
//               <div className="space-y-4">
//                 <div className="flex gap-x-4">
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
//                     <select id="dropoff-city" className="w-full p-3 border rounded-md">
//                       <option value="">Select your city</option>
//                       <option value="city1">City 1</option>
//                       <option value="city2">City 2</option>
//                       <option value="city3">City 3</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
//                     <select id="dropoff-date" className="w-full p-3 border rounded-md">
//                       <option value="">Select your date</option>
//                       <option value="2025-01-10">January 10, 2025</option>
//                       <option value="2025-01-11">January 11, 2025</option>
//                       <option value="2025-01-12">January 12, 2025</option>
//                     </select>
//                   </div>
//                   <div className="w-1/3">
//                     <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
//                     <select id="dropoff-time" className="w-full p-3 border rounded-md">
//                       <option value="">Select your time</option>
//                       <option value="09:00">09:00 AM</option>
//                       <option value="12:00">12:00 PM</option>
//                       <option value="15:00">03:00 PM</option>
//                       <option value="18:00">06:00 PM</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

        // Car Images Section
        {/* <div style={{ marginTop: '30px' }}>
          <h3 className="text-lg font-semibold mb-4">Choose Your Car</h3>
          <div style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
            <div className="w-1/3">
              <img src="/path/to/car1.jpg" alt="Car 1" className="w-full h-40 object-cover rounded-lg" />
              <div style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>Car Model 1</div>
            </div>
            <div className="w-1/3">
              <img src="/path/to/car2.jpg" alt="Car 2" className="w-full h-40 object-cover rounded-lg" />
              <div style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>Car Model 2</div>
            </div>
            <div className="w-1/3">
              <img src="/path/to/car3.jpg" alt="Car 3" className="w-full h-40 object-cover rounded-lg" />
              <div style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>Car Model 3</div>
            </div> */}
            {/* Add more cars as needed */}
          {/* </div> */}
        {/* </div> */}

        

//         {/* Capacity Section */}
//         <div style={{ marginTop: '30px', fontSize: '10px', fontWeight: 'normal', color: 'gray', marginBottom: '10px' }}>C A P A C I T Y</div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 2 Person <span style={{ color: 'gray' }}>(10)</span>
//         </div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 4 Person <span style={{ color: 'gray' }}>(14)</span>
//         </div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'white', color: 'black', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px' }}>☐</span> 6 Person <span style={{ color: 'gray' }}>(12)</span>
//         </div>
//         <div style={{ fontSize: '18px', margin: '10px 0' }}>
//           <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'blue', color: 'white', textAlign: 'center', lineHeight: '16px', borderRadius: '3px', marginRight: '10px', fontSize: '12px' }}>✔</span> 8 orMore <span style={{ color: 'gray' }}>(16)</span>
//         </div>

//         {/* Price Range Section */}
//         <div style={{ fontSize: '10px', fontWeight: 'normal', color: 'gray', marginTop: '30px', marginBottom: '10px' }}>P R I C E</div>
//         <div style={{ width: '296px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px' }}>
//           <input type="range" min="0" max="100" step="1" defaultValue="20" style={{ width: '100%', backgroundColor: '#e0e0e0' }} />
//         </div>
//         <div style={{ fontSize: '20px', color: 'gray', marginTop: '5px', textAlign: 'left' }}>Max. $100.00</div>
//       </div>
//     </main>
//   );
// }

