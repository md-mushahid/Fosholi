"use client";

import { useState } from 'react';
import { useTheme } from "next-themes";

const WriteBlog = () => {
  const { theme } = useTheme();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-6 rounded-sm bg-white px-8 py-8 shadow-three dark:bg-gray-dark sm:p-[45px] lg:mb-4 lg:px-8 xl:p-[45px]" // Adjusted mb-12 to mb-6 and padding values
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Create Your Blog
              </h2>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6"> {/* Adjusted mb-8 to mb-6 */}
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your title"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6"> {/* Adjusted mb-8 to mb-6 */}
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Blog Description
                      </label>
                      <textarea
                        name="message"
                        rows={15} // Increased number of rows for greater height
                        placeholder="Enter your blog..."
                        className="border-stroke w-full min-h-[300px] resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
              <div className="mb-8">
                <label
                  htmlFor="short-description"
                  className="block text-sm font-medium text-dark dark:text-white mb-3"
                >
                  Short Description
                </label>
                <textarea
                  id="short-description"
                  name="short-description"
                  rows={6}
                  placeholder="Enter a short description..."
                  className="border-stroke w-full min-h-[100px] resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="blog-image"
                  className="block text-sm font-medium text-dark dark:text-white mb-3"
                >
                  Select Your Blog Image
                </label>
                <div className="relative w-full h-[200px] bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden">
                  {image ? (
                    <>
                      <img src={image} alt="Selected" className="object-cover w-full h-full" />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <p className="text-center text-gray-500">Click to select an image</p>
                  )}
                  <input
                    type="file"
                    id="blog-image"
                    name="blog-image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 mt-8 flex justify-center mt-19"> {/* Added flex and justify-center */}
              <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                Create Blog
              </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default WriteBlog;
