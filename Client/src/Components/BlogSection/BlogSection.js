import React from "react";
import { blog } from "../../assets/Data/blogData";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <>
      <div class="container mx-auto py-16 px-10">
        <h2 class="text-3xl font-medium text-gray-800 uppercase text-center mb-6">
          Latest Blog
        </h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {blog.map((data) => (
            <div className="text-center">
              <div class="relative group rounded-sm overflow-hidden inner single-blog">
                <img src={data.img} class="w-full" alt="img" />
                <div class="single-blog-img-overlay"></div>
              </div>
              <div className=" bg-gradient-to-b from-blue-200 to-white-100 py-1 mt-3 mb-5 rounded-lg">
                <h1 className="text-xl bold text-gray-900 mt-3">
                  {data.title}
                </h1>
                <h4 className="text-black mt-1">{data.date}</h4>
                <p className="mt-2">{data.describe}</p>
              </div>
              <a
                href="/"
                class="bg-white transition duration-500 ease-in-out transform  mt-12 ml-60 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-1 border grid lg:grid-cols-1 border-gray-400 rounded shadow"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
