import React from "react";
import Header from '../Header';

export default function Navbar() {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar color-white animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
      <Header />
    </div>
  );
}