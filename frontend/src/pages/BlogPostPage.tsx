
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => String(b.id) === id);
  const navigate = useNavigate();

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col">
        <p className="text-lg text-red-500 mb-4">Blog post not found.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => navigate("/blog")}
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <article className="py-12 min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6 flex items-center gap-2">
          <button
            className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
          style={{ maxHeight: 300 }}
        />
        <h1 className="text-3xl font-bold font-display mb-2 text-foreground">{blog.title}</h1>
        <div className="flex items-center text-muted-foreground text-sm mb-6">
          <span>{blog.author}</span>
          <span className="mx-2">•</span>
          <span>{blog.date}</span>
        </div>
        <div
          className="prose prose-blue dark:prose-invert text-foreground"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </article>
  );
};

export default BlogPostPage;