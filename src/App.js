import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/header";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/index";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Artical from "./pages/artical";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const posts = [
  {
    id: 1,
    title: "Getting Started with React.js",
    author: "John Smith",
    date: "May 26, 2023",
    content:
      "In this blog post, we will explore the basics of React.js and learn how to set up a new React project. We will cover topics such as component-based architecture, JSX syntax, and the virtual DOM. By the end of this post, you will have a solid foundation in React.js development.",
    image: "reactjs.jpeg",
  },
  {
    id: 2,
    title: "Mastering CSS for Frontend",
    author: "Sarah Johnson",
    date: "May 25, 2023",
    content:
      "CSS is an essential skill for frontend developers. In this post, we will dive deep into CSS techniques and best practices. From responsive design to CSS frameworks, we will cover everything. css is a great way to create user-friendly styles and user interface ",
    image: "css.webp",
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    author: "Michael Anderson",
    date: "May 24, 2023",
    content:
      "JavaScript is the backbone of modern web development. In this post, we will explore the fundamentals of JavaScript programming. From variables and data types to functions and control flow, this guide will help you build a solid understanding of JavaScript. Start your journey to becoming a JavaScript ninja!",
    image: "javascript.jpeg",
  },
  {
    id: 4,
    title: "Responsive Web Design: Mobile First Approach",
    author: "Emily Wilson",
    date: "May 23, 2023",
    content:
      "With the increasing use of mobile devices, responsive web design has become a critical skill for frontend developers. In this post, we will learn about the mobile-first approach and how to create responsive web layouts that adapt to different screen sizes. Enhance your websites with a responsive design!",
    image: "responsive.avif",
  },
  {
    id: 5,
    title: "Optimizing Web Performance for Speed",
    author: "Daniel Brown",
    date: "May 22, 2023",
    content:
      "Website speed is crucial for user experience and search engine optimization. In this post, we will explore techniques to optimize web performance and improve loading times. From image optimization to code minification, we will cover practical tips to make your websites lightning-fast. Supercharge your web performance!",
    image: "web-optimize.jpeg",
  },
];

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <React.Fragment>
      <div className="Sphere-White-Matte"></div>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          height: "100%",
          padding: {
            xs: 5, // Set padding to 0 for extra small screen sizes
            sm: 10, // Set padding to 10 for small and larger screen sizes
          },
        }}
      >
        <Box className="banner-box">
          <div className="gradient-Eclipse"></div>
          <Header colorMode={colorMode} theme={theme} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="blog" element={<Blog posts={posts} />} />
              <Route path="blog/:id" element={<Artical posts={posts} />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
      <div className="Pill-Blue-Glossy">
        <img
          width={150}
          src={process.env.PUBLIC_URL + "Pill-Blue-Glossy.png"}
          alt="aka"
        />
      </div>
      <div className="SuperToroid-Yellow-Glossy">
        <img
          width={120}
          src={process.env.PUBLIC_URL + "SuperToroid-Yellow-Glossy.png"}
          alt="aka"
        />
      </div>
      <div className="RoundCube-Orange-Glossy">
        <img
          width={100}
          src={process.env.PUBLIC_URL + "RoundCube-Orange-Glossy.png"}
          alt="aka"
        />
      </div>
    </React.Fragment>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
