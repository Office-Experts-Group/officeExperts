import Image from "next/image";
import React from "react";

import integration from "../../../public/integration.webp";

const DeskImage = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(242, 243, 245)",
        marginTop: "3rem",
        "@media (maxWidth: 768px)": { display: "none" },
      }}
    >
      <Image src={integration} alt="Integration" width={1200} height={300} />
    </section>
  );
};

export default DeskImage;
