import React from "react";
import Footer from "@/Components/Footer/footer";
function RegisterLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default RegisterLayout;
