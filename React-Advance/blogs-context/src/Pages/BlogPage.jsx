import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";
import BlogDetails from "../Components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div  className="mt-[100px]">
      <Header />
      <div className="max-w-[500px] mx-auto flex items-center space-x-2 w-11/12 ">
        <button className="border-2 border-gray-300 py-1 px-4 rounded-md mb-6"
         onClick={() => navigate(-1)}>🔙</button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className="text-2xl font-bold my-5 px-5 ">Related Blogs </h2>
            <div className="flex flex-col gap-y-8">
              {relatedblog.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
            ))}
            </div>
            
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;