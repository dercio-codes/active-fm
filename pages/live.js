import Footer from "../component/Footer";
import { useState, useEffect } from "react";

export default function live() {
  return (
    <main>
      <div
        style={{
          height: "80vh",
          width: "95%",
          background: "black",
          margin:'0 auto',

        }}
      >
          <iframe src="https://www.youtube.com/embed/rjDXZO-Ek24" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{height: '100%', width: '100%'}}></iframe>
      </div>
      <Footer />
    </main>
  );
}
