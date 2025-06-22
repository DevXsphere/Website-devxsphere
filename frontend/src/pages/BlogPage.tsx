import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";

const BlogPage = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-display flex items-center justify-center gap-2">
            <Book className="inline-block text-blue-600 dark:text-blue-400" />
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest technical blog posts curated by our team and community!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Card key={blog.id} className="transition-shadow hover:shadow-xl bg-card flex flex-col h-full">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover rounded-t-lg"
                style={{ maxHeight: 208, objectFit: "cover" }}
              />
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-xl mb-2 text-card-foreground font-display">{blog.title}</h3>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>
                <p className="text-muted-foreground mb-5">{blog.summary}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors mt-auto text-center"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;