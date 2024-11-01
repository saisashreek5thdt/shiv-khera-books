import "./globals.css";

export const metadata = {
  title: "Shiv Khera Books",
  description: "Reading Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
