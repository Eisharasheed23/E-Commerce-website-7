
import { FaGasPump } from "react-icons/fa";
import { TbChartDonut3 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex">

      {/* Sidebar (left side) */}
      <div className="w-[360px] h-screen bg-gray-100 p-4">

        {/* Type, Capacity, and Price Sections */}
        <div className="space-y-8">
          {/* Type Section */}
          <div className="text-xs font-normal text-gray-600">
            <div className="text-sm font-bold text-black mb-2">T Y P E</div>
            {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type, index) => (
              <div key={index} className="text-lg my-2">
                <span
                  className={`inline-block w-4 h-4 ${index < 2 ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center rounded-full mr-2 text-xs`}
                >
                  {index < 2 ? '✔' : '☐'}
                </span>
                {type} <span className="text-gray-400">({10 + index})</span>
              </div>
            ))}
          </div>

          {/* Capacity Section */}
          <div className="text-xs font-normal text-gray-600 mt-8 mb-4">C A P A C I T Y</div>
          {['2 Person', '4 Person', '6 Person', '8 or More'].map((capacity, index) => (
            <div key={index} className="text-lg my-2">
              <span
                className={`inline-block w-4 h-4 ${index === 0 || index === 3 ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center rounded-full mr-2 text-xs`}
              >
                {index === 0 || index === 3 ? '✔' : '☐'}
              </span>
              {capacity} <span className="text-gray-400">({10 + index})</span>
            </div>
          ))}

          {/* Price Section */}
          <div className="text-xs font-normal text-gray-600 mt-8 mb-2">P R I C E</div>
          
          {/* Price Range Section */}
          <div className="w-full h-5 flex items-center justify-center px-2">
            <input type="range" min="0" max="100" step="1" defaultValue="20" className="w-full bg-gray-300" />
          </div>

          {/* Max. $100.00 Text */}
          <div className="text-lg text-gray-600 mt-1">Max. $100.00</div>
        </div>
      </div>

      {/* Main Content (right side) */}
      <div className="flex-1 p-4 flex flex-col gap-8">

        {/* Header Image and Grid */}
        <div className="relative w-[492px] h-[360px] bg-blue-500">
          {/* <Image src="/images/new-car.png" alt="Sports Car" width={492} height={360} objectFit="cover" /> */}
          <div className="absolute top-4 left-4 text-white">
            <h1 className="text-xl font-semibold">Sports car with the best design and acceleration</h1>
            <p className="mt-2">Safety and comfort while driving a futuristic and elegant sports car.</p>
          </div>
        </div>


        {/* Nissan GT-R Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Nissan GT - R</h2>
            <p className="text-gray-600 mt-2">440+ Reviewer</p>
            <p className="mt-4 text-sm text-gray-700">NISMO has become the embodiment of Nissans outstanding performance inspired by the most unforgiving proving ground the race track.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <FaGasPump className="mr-2 text-gray-500" />
                <span className="text-gray-700">Gasoline: 70L</span>
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="mr-2 text-gray-500" />
                <span className="text-gray-700">Capacity: 2 Person</span>
              </div>
              <div className="flex items-center">
                <FaUserFriends className="mr-2 text-gray-500" />
                <span className="text-gray-700">Steering: Manual</span>
              </div>
            </div>
            <div className="mt-4 font-bold text-xl text-gray-900">$80.00/ day</div>
          </div>
          {/* <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">Rent Now</button>
          </div> */}
          

<div className="flex justify-center items-center">


<div className="flex justify-center items-center">
  <Link href="/rentit">
    <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
      Rent Now
    </button>
  </Link>
</div>

</div>

        </div>

        {/* Reviews Section */}
        <div className="w-full h-[452px] bg-white p-4 shadow-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="bg-blue-500 text-white w-11 h-7 flex items-center justify-center">13</div>
          </div>

          {[1, 2].map((review, index) => (
            <div key={index} className="flex mt-4">
              <div className="w-[56px] h-[56px] rounded-full overflow-hidden mr-4">
                {/* <Image
                  src={`/images/review.pic1${review}.jpg`} // Assuming the profile pictures are in /public/images
                  alt={`Reviewer ${review}`}
                  width={56}
                  height={56}
                  objectFit="cover"
                /> */}
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold">Alex Stanton</span>
                  <span>21 July 2022</span>
                </div>
                <div className="text-yellow-500">⭐⭐⭐⭐☆</div>
                <p className="text-gray-700">
                  We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities.
                </p>
              </div>
            </div>
          ))}

          {/* Show All Button */}
          <button className="bg-white border-2 border-gray-300 mt-4 py-2 px-6 rounded">Show All</button>
        </div>

        {/* Line Bar Section */}
        <div className="flex justify-between items-center mt-8 w-full h-[44px] bg-gray-200">
          <div className="text-blue-500 ml-4">View All</div>
          <div className="text-black mr-4">Recent Car</div>
        </div>

        {/* Recent Car Images */}
        <div className="flex gap-4 mt-4 w-full h-[388px] bg-white">
          {['e-1.png', 'e-2.png', 'e-3.png'].map((image, index) => (
            <div key={index} className="w-[317px] h-[388px] relative">
              {/* <Image
                src={`/images/${image}`}
                alt={`Recent Car ${index + 1}`}
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          ))}
        </div>

        {/* Recommendation Car Section */}
        <div className="flex justify-between items-center mt-8 w-full h-[44px] bg-gray-200">
          <div className="text-blue-500 ml-4">View All</div>
          <div className="text-black mr-4">Recommendation Car</div>
        </div>

        <div className="flex gap-4 mt-4 w-full h-[388px] bg-white">
          {['e-5.png', 'e-6.png', 'e-7.png'].map((image, index) => (
            <div key={index} className="w-[317px] h-[388px] relative">
              {/* <Image
                src={`/images/${image}`}
                alt={`Recommended Car ${index + 1}`}
                layout="fill"
                objectFit="cover"
              /> */}
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Home;
