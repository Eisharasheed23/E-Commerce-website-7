
'use client'
import Link from 'next/link';
import {useRouter} from "next/navigation"
import { FaGasPump } from "react-icons/fa";
import { TbChartDonut3 } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import React from 'react';
import Image from "next/image";

export default function PickUpDropOff() {
  const router = useRouter();
  return (
    <main>
      <div className="w-full mt-8 px-4">
        {/* Pick-Up and Drop-Off Containers */}
        <div className="flex gap-x-10 w-full">
          {/* Pick-Up Container */}
          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Pick-Up </h3>
            <div className="space-y-4">
              {/* Location, Date, and Time Fields in Horizontal Layout */}
              <div className="flex gap-x-4">
                {/* Location with Multiple Choices */}
                <div className="w-1/3">
                  <label htmlFor="pickup-city" className="block text-sm font-bold">Location:</label>
                  <select
                    id="pickup-city"
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="">Select your city</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                  </select>
                </div>
                {/* Date with Multiple Choices */}
                <div className="w-1/3">
                  <label htmlFor="pickup-date" className="block text-sm font-bold">Date:</label>
                  <select
                    id="pickup-date"
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="">Select your date</option>
                    <option value="2025-01-10">January 10, 2025</option>
                    <option value="2025-01-11">January 11, 2025</option>
                    <option value="2025-01-12">January 12, 2025</option>
                  </select>
                </div>
                {/* Time with Multiple Choices */}
                <div className="w-1/3">
                  <label htmlFor="pickup-time" className="block text-sm font-bold">Time:</label>
                  <select
                    id="pickup-time"
                    className="w-full p-3 border rounded-md"
                  >
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

          {/* Swap Box Divider with Arrows */}
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-blue-500 border-t-4 border-white mx-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all">
            {/* Up and Down Arrows, Close Together */}
            <div className="flex items-center justify-center gap-0 w-full">
              <div className="text-white cursor-pointer">↑</div>
              <div className="text-white cursor-pointer">↓</div>
            </div>
          </div>

          {/* Drop-Off Container */}
          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Drop-Off </h3>
            <div className="space-y-4">
              {/* Location, Date, and Time Fields in Horizontal Layout */}
              <div className="flex gap-x-4">
                {/* Location with Multiple Choices */}
                <div className="w-1/3">
                  <label htmlFor="dropoff-city" className="block text-sm font-bold">Location:</label>
                  <select
                    id="dropoff-city"
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="">Select your city</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                  </select>
                </div>
                {/* Date with Multiple Choices */}
                <div className="w-1/3">
                  <label htmlFor="dropoff-date" className="block text-sm font-bold">Date:</label>
                  <select
                    id="dropoff-date"
                    className="w-full p-3 border rounded-md"
                  >
                    <option value="">Select your date</option>
                    <option value="2025-01-10">January 10, 2025</option>
                    <option value="2025-01-11">January 11, 2025</option>
                    <option value="2025-01-12">January 12, 2025</option>
                  </select>
                </div>
                {/* Time with Multiple Choices */}
                <div className="w-1/3">
                  <label htmlFor="dropoff-time" className="block text-sm font-bold">Time:</label>
                  <select
                    id="dropoff-time"
                    className="w-full p-3 border rounded-md"
                  >
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
      </div>

      {/* Car Images Section (Inserted Here) */}
      <div className="mt-8 px-4">
        {/* Car Images Section */}
        <div className="flex gap-x-4 justify-center">
          {/* Car 1 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">Koenigsegg</p>
            <p className="text-gray-500 mb-2">Sport</p>
            <Image
              src="/e-1.png" // Ensure the correct path to the image inside the public folder
              alt="Car 1"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the first car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">90 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">2 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$99.00 / day</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 2 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">Nissan GT-R</p>
            <p className="text-gray-500 mb-2">Sport</p>
            <Image
  src="/e-2.png"
  alt="Car 2"
  width={1200}  // Set a fixed width for a large image
  height={800}  // Set a fixed height for the image
  className="w-full h-auto rounded-lg mb-4"
/>

            {/* Icons under the second car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$99.00 / day</p>
              <p className="text-gray-400 line-through">$100.00</p> {/* Strikethrough price */}
              <button className="bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 3 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">Rolls-Royce</p>
            <p className="text-gray-500 mb-2">Sedan</p>
            <Image
              src="/e-3.png" // Ensure the correct path to the image inside the public folder
              alt="Car 3"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
            
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the third car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">70 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">4 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$99.00 / day</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 4 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">Nissan GT-R</p>
            <p className="text-gray-500 mb-2">Sport</p>
            <Image
              src="/e-4.png" // Ensure the correct path to the image inside the public folder
              alt="Car 4"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the fourth car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">2 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$99.00 / day</p>
              <p className="text-gray-400 line-through">$100.00</p> {/* Strikethrough price */}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>
        </div>
      </div>

    
    
    
      {/* Car Images Section (Inserted Here) */}
      <div className="mt-8 px-4">
        {/* Car Images Section */}
        <div className="flex gap-x-4 justify-center">
          {/* Car 5 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">All New Rush</p>
            <p className="text-gray-500 mb-2">SUV</p>
            <Image
              src="/e-5.png" // Ensure the correct path to the image inside the public folder
              alt="Car 1"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the first car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">70 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$72.00 / day</p>
              <p className="text-gray-400 line-through">$80.00</p> {/* Strikethrough price */}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 6 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">New MG ZS</p>
            <p className="text-gray-500 mb-2">SUV</p>
            <Image
              src="/e-6.png" // Ensure the correct path to the image inside the public folder
              alt="Car 2"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the second car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$80.00 / day</p>
              
              <button className="bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 7 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">All New Terios</p>
            <p className="text-gray-500 mb-2">SUV</p>
            <Image
              src="/e-7.png" // Ensure the correct path to the image inside the public folder
              alt="Car 3"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the third car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">90 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$74.00 / day</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 8 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">CR - V</p>
            <p className="text-gray-500 mb-2">SUV</p>
            <Image
              src="/e-8.png" // Ensure the correct path to the image inside the public folder
              alt="Car 4"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the fourth car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$80.00 / day</p>
              
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>
        </div>
      </div>


      {/* Car Images Section (Inserted Here) */}
      <div className="mt-8 px-4">
        {/* Car Images Section */}
        <div className="flex gap-x-4 justify-center">
          {/* Car 9 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">MG ZX Exclusive</p>
            <p className="text-gray-500 mb-2">Hatchback</p>
            <Image
              src="/e-9.png" // Ensure the correct path to the image inside the public folder
              alt="Car 1"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the first car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">70 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">4 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$76.00 / day</p>
              <p className="text-gray-400 line-through">$80.00</p> {/* Strikethrough price */}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 10 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">New MG ZS</p>
            <p className="text-gray-500 mb-2">SUV</p>
            <Image
              src="/e-10.png" // Ensure the correct path to the image inside the public folder
              alt="Car 2"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the second car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$80.00 / day</p>
            
              <button className="bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 11 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">MG ZX Excite</p>
            <p className="text-gray-500 mb-2">Hatchback</p>
            <Image
              src="/e-11.png" // Ensure the correct path to the image inside the public folder
              alt="Car 3"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the third car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">90 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">4 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$74.00 / day</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>

          {/* Car 12 Image with Name and Type */}
          <div className="w-1/4 text-center bg-white p-4 rounded-lg shadow-lg">
            <p className="font-semibold mb-2">New MG ZS</p>
            <p className="text-gray-500 mb-2">SUV</p>
            <Image
              src="/e-12.png" // Ensure the correct path to the image inside the public folder
              alt="Car 4"
              width={1200}  // Set a fixed width for a large image
              height={800}  // Set a fixed height for the image
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* Icons under the fourth car */}
            <div className="flex justify-center gap-x-4 mt-2">
              <div className="flex items-center">
                <FaGasPump className="cursor-pointer hover:text-red-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">80 L</span> {/* Text next to the gas pump icon */}
              </div>
              <div className="flex items-center">
                <TbChartDonut3 className="cursor-pointer hover:text-blue-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">Manual</span> {/* Text next to the chart donut icon */}
              </div>
              <div className="flex items-center">
                <FaUserFriends className="cursor-pointer hover:text-green-500 transform hover:scale-110 transition-all duration-300" />
                <span className="text-gray-400 ml-2">6 People</span> {/* Text next to the people icon */}
              </div>
            </div>
            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">$80.00 / day</p>
              
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Rent Now</button>
            </div>
          </div>
        </div>
      </div>
        {/* {
          
      <div className="flex justify-center items-center mt-8">
      <button onClick={()=>router.push("/Show more car")} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
        Show more car
      </button>
    </div> } 
 */}
 <div className="flex justify-center items-center mt-8">
      <Link href="/product/id">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
          Show more car
        </button>
      </Link>
    </div>


    </main>
  );
}


