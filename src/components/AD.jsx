import { useEffect } from "react";

export default function AD() {
  useEffect(() => {
    console.log(process.env.NODE_ENV);
    if (window.adsbygoogle && process.env.NODE_ENV !== "development") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: "320px", height: "50px" }}
      data-ad-client="ca-pub-1919598055512436"
      data-ad-slot="1678485541"
    ></ins>
  );
}
