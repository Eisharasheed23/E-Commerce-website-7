
"use client";  

import { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import Image from "next/image"; // Make sure to import Image for optimization

export default function Header() {
  const [hasNotification] = useState(true); // Example state for notification

  return (
    <header className="w-full h-[50px] bg-white flex justify-between items-center px-4 mb-4">
      {/* Left Section */}
      <div>
        <h1 className="text-xl sm:text-3xl text-blue-600 font-bold">MORENT</h1>
      </div>

      {/* Search Input with Black Outline */}
      <div className="flex items-center w-full sm:w-[400px] lg:w-[500px] bg-white rounded-full border-2 border-gray px-4 py-1">
        <TfiSearch className="text-gray-500 mr-2" />
        <input
          placeholder="Search something here"
          className="w-full rounded-full outline-none px-4 py-2"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaHeart className="w-6 h-6 cursor-pointer hover:text-[red] hover:scale-110 transition-all" /> {/* Heart Icon - Dark Red */}
        
        {/* Notification Icon with Dot */}
        <div className="relative">
          <IoIosNotifications className="w-6 h-6 cursor-pointer hover:text-yellow-500 hover:scale-110 transition-all" />
          {hasNotification && (
            <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
          )}
        </div>

        {/* Settings Icon */}
        <IoIosSettings className="w-6 h-6 cursor-pointer hover:text-gray-500 hover:scale-110 transition-all" /> {/* Settings Icon - Grey */}

        {/* Profile Picture */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-purple-500">
          {/* You can use an Image tag from Next.js for optimized loading */}
          <Image 
            src="/profil (1).png"  // Replace this with the path to your profile image
            alt="Profile Picture"
            width={32}  // Adjust size as needed
            height={32}  // Adjust size as needed
            className="object-cover"
          />
        


        </div>


      </div>
    </header>
  );
}
