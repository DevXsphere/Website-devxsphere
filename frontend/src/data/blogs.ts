
export type Blog = {
    id: number;
    title: string;
    author: string;
    date: string;
    summary: string;
    content: string;
    img: string;
    readUrl?: string;
  };
  
  export const blogs: Blog[] = [
    {
      id: 1,
      title: "Getting Started with Open Source",
      author: "Utkarsh Upadhyay",
      date: "May 20, 2024",
      summary:
        "An introduction to contributing to open source projects, understanding the ecosystem, and how to make your first contribution effortless.",
      content: `
        <h2>Why Open Source?</h2>
        <p>
          Open source is the backbone of most technologies we use today. It encourages collaboration, learning, and growth.
        </p>
        <h2>How to Get Started</h2>
        <ol class="list-decimal list-inside mb-2">
          <li>Find a project you're interested in.</li>
          <li>Read the documentation and issues.</li>
          <li>Start with small contributions (typos, docs, etc.).</li>
          <li>Ask questions and engage with the community.</li>
        </ol>
        <p>
          For more resources, <a href="https://opensource.guide/how-to-contribute/" target="_blank" class="text-blue-500 underline">read this guide</a>.
        </p>
      `,
      img: "/image/event.JPG",
    },
    {
      id: 2,
      title: "5 JavaScript Tricks for Efficient Coding",
      author: "Abhishek Sharma",
      date: "June 1, 2024",
      summary:
        "Enhance your JavaScript codebase with these handpicked tips and tricks that every developer should know.",
      content: `
        <ol class="list-decimal list-inside mb-2">
          <li><b>Destructuring:</b> <code>const {foo, bar} = obj;</code></li>
          <li><b>Spread and Rest:</b> <code>function(...args) {}</code></li>
          <li><b>Optional Chaining:</b> <code>obj?.property?.subprop</code></li>
          <li><b>Array methods:</b> <code>map, filter, reduce, etc.</code></li>
          <li><b>Template Literals:</b> <code>\`Hello, ${'{name}'}!\`</code></li>
        </ol>
        <p>
          For more: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="text-blue-500 underline">MDN JavaScript Docs</a>
        </p>
      `,
      img: "/image/event.JPG",
    },
    {
      id: 3,
      title: "UI/UX Principles for Developers",
      author: "Ashika Gupta",
      date: "June 15, 2024",
      summary:
        "Learn the essential UI/UX principles to build interfaces that are both functional and delightful.",
      content: `
        <ul class="list-disc list-inside mb-2">
          <li>Consistency in design</li>
          <li>Focus on usability</li>
          <li>Accessibility matters</li>
          <li>Visual hierarchy guides users</li>
          <li>Responsive and mobile-friendly UI</li>
        </ul>
        <p>
          Recommended read: <a href="https://uxdesign.cc/" target="_blank" class="text-blue-500 underline">UX Design Blog</a>
        </p>
      `,
      img: "/image/event.JPG",
    },
  ];