import styled from "styled-components";

export default function AD() {
  return (
    <Div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
        crossOrigin="anonymous"
      ></script>
      {/* <!-- contents/mobile-leaderboard --> */}
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "320px", height: "50px" }}
        data-ad-client="ca-pub-1919598055512436"
        data-ad-slot="1678485541"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </Div>
  );
}

export const Div = styled.div``;
