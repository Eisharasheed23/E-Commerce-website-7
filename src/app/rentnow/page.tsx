import { FaTachometerAlt, FaCar, FaChartLine, FaFileInvoice, FaInbox, FaCalendar, FaCog, FaQuestionCircle, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
const RentNow = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-[286px] h-[900px] p-4 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Main Menu</h2>
        
        {/* Dashboard */}
        <div className="flex items-center mb-4">
          <FaTachometerAlt className="text-lg mr-3" />
          <span>Dashboard</span>
        </div>
        
        {/* Car Rent */}
        <div className="flex items-center mb-4">
          <FaCar className="text-lg mr-3" />
          <span>Car Rent</span>
        </div>

        {/* Insight */}
        <div className="flex items-center mb-4">
          <FaChartLine className="text-lg mr-3" />
          <span>Insight</span>
        </div>

        {/* Reimburse */}
        <div className="flex items-center mb-4">
          <FaFileInvoice className="text-lg mr-3" />
          <span>Reimburse</span>
        </div>

        {/* Inbox */}
        <div className="flex items-center mb-4">
          <FaInbox className="text-lg mr-3" />
          <span>Inbox</span>
        </div>

        {/* Calendar */}
        <div className="flex items-center mb-4">
          <FaCalendar className="text-lg mr-3" />
          <span>Calendar</span>
        </div>

        {/* Preferences */}
        <h2 className="text-xl font-semibold mt-8 mb-4">PREFERENCES</h2>
        
        {/* Settings */}
        <div className="flex items-center mb-4">
          <FaCog className="text-lg mr-3" />
          <span>Settings</span>
        </div>

        {/* Help & Center */}
        <div className="flex items-center mb-4">
          <FaQuestionCircle className="text-lg mr-3" />
          <span>Help & Center</span>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center mb-4">
          <FaMoon className="text-lg mr-3" />
          <span>Dark Mode</span>
        </div>

        {/* Logout */}
        <div className="flex items-center mb-4 mt-auto">
          <FaSignOutAlt className="text-lg mr-3" />
          <span>Logout</span>
        </div>
      </div>

      {/* Detail Rental Section */}
      <div className="flex-1 bg-white p-6" style={{ width: '534px', height: '836px' }}>
        <h2 className="text-2xl font-semibold mb-4">Detail Rental</h2>
        
        {/* Images */}
        <div className="mb-4">
        <Image
  src="/Maps (1).png" // Replace with your image URL
  alt="Car Image"
  width={486}  // Add the width property
  height={272} // Add the height property
  className="w-[486px] h-[272px] object-cover"
/>

        </div>

        <div className="flex items-center bg-blue- mb-4">
        <Image
  src="/new car.png" // Ensure this path is correct
  alt="Car Thumbnail"
  width={132}   // Add width property
  height={72}   // Add height property
  className="object-cover mr-4"
/>

          <div>
            <h3 className="text-lg font-semibold">Nissan GT-R</h3>
            <p className="text-sm text-gray-600">Sport Car</p>
          </div>
        </div>

        {/* Pick-Up Details */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Pick-Up</h4>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Locations</label>
              <input type="text" value="Kota Semarang" readOnly className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Date</label>
              <input type="text" value="20 July 2022" readOnly className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Time</label>
            <input type="text" value="07:00" readOnly className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        {/* Drop-Off Details */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Drop-Off</h4>
          <div className="flex gap-4 mb-2">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Locations</label>
              <input type="text" value="Kota Semarang" readOnly className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-2">Date</label>
              <input type="text" value="21 July 2022" readOnly className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Time</label>
            <input type="text" value="01:00" readOnly className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>

        {/* Total Rental Price */}
        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold">Overall price and includes rental discount</span>
          <span className="font-semibold text-xl">$80.00</span>
        </div>
        
        
      </div>
      
    </div>
    
    
  );
};

export default RentNow;
