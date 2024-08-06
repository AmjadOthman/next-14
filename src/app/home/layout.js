import Header from "@/Components/Header/header.jsx";

export const metadata = {
  title: "Social media",
  description: "social media",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body style={{ marginTop: 100 }}>{children}</body>
    </html>
  );
}
