import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Kira Aziz",
  description: "Discover the exceptional full-stack development skills of Kira Aziz, a divine creator of masterpieces in Type AI, Light AI updates, Neoflow, Manga Hook, and more. Specializing in Vue, React, Node.js, Go, MongoDB, and React Native. Contact Kira Aziz for your next project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
        <link rel="icon" href="/1.jpg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full w-full ">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
