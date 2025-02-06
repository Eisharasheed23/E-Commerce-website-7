import { FaBitcoin, FaPaypal, FaRegCreditCard, FaRegCheckCircle } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { FaStar } from "react-icons/fa"; // For stars
import Link from 'next/link';
import Image from 'next/image';

const RentIt = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg flex justify-between">
        
        {/* Left Side: Forms */}
        <div className="w-[852px] h-[2176px] ml-[32px] flex flex-col">
          {/* Billing Info Form */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Billing Info</h2>
            <p className="text-sm text-gray-600 mb-4">Please enter your billing info.</p>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Your Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Address</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Town / City</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>
          </div>

          {/* Rental Summary Form */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rental Info</h2>
            <p className="text-sm text-gray-600 mb-4">Please select your rental date.</p>
            <p className="text-normal text-black mb-4">Pick-Up</p>

            {/* Pickup */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Locations</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select your city</option>
                  {/* Add your cities */}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Date</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Time</label>
              <select className="w-full p-2 border border-gray-300 rounded">
              <option>Select your time</option>
              </select>
            </div>

            {/* Drop-off */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-normal text-black mb-4">Drop-Off</label>
                <label className="block text-sm text-gray-600 mb-2">Location</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select your city</option>
                  {/* Add your cities */}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Date</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Time</label>
              <input type="time" className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>

          {/* Payment Method Form */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
            <p className="text-sm text-gray-600 mb-4">Please enter your payment method.</p>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Card Number</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Expiration Date</label>
                <input type="month" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">Card Holder</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-2">CVC</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex items-center">
                <FaPaypal className="text-blue-500 mr-2" />
                <label className="text-sm text-gray-600">PayPal</label>
              </div>
              <div className="flex-1 flex items-center">
                <FaBitcoin className="text-yellow-500 mr-2" />
                <label className="text-sm text-gray-600">Bitcoin</label>
              </div>
            </div>
          </div>

          {/* Confirmation Form */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
            <p className="text-sm text-gray-600 mb-4">We are getting to the end. Just a few clicks and your rental is ready!</p>

            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex items-center">
                <input type="checkbox" id="marketing" className="mr-2" />
                <label htmlFor="marketing" className="text-sm text-gray-600">I agree with sending Marketing and newsletter emails. No spam, promised!</label>
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1 flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-sm text-gray-600">I agree with our terms and conditions and privacy policy.</label>
              </div>
            </div>

           
            <div className="flex justify-center mb-4">
    <Link href="/rentnow"> {/* Specify the link to rentnow page */}
      <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
        RENT NOW
      </button>
    </Link>
  </div>

            <div className="flex justify-center items-center mb-4">
              <IoMdLock className="text-xl text-gray-500 mr-2" />
              <p className="text-sm text-gray-500">All your data are safe. We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Rental Summary Section */}
        <div className="w-[492px] h-[560px] bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Rental Summary</h2>
          <p className="text-sm text-gray-600 mb-4">Prices may change depending on the length of the rental and the price of your rental car.</p>

         
<div className="flex mb-4">
  <div className="w-[132px] h-[108px] mr-4 bg-blue-500">
  <Image
  src="/new car.png" // Replace with your image URL
  alt="Nissan GT-R"
  width={132} // Set a fixed width for the image
  height={108} // Set a fixed height for the image
  className="w-full h-full object-cover rounded-md"
/>

  </div>
  <div>
    <h3 className="text-lg font-semibold">Nissan GT-R</h3>
    <p className="text-sm text-gray-600">440+ Reviewer</p>
  </div>
</div>


          {/* Star Rating */}
          <div className="flex mb-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm text-gray-800">$80.00</span>
          </div>

          {/* Apply Promo Code */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Apply promo code</span>
            <button className="text-sm text-blue-500">Apply now</button>
          </div>

          {/* Total Rental Price */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Overall price (includes rental discount)</span>
            <span className="text-sm text-gray-800">$80.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentIt;
