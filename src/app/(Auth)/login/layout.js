import React from "react";
import Footer from "@/Components/Footer/footer";
function LoginLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default LoginLayout;
