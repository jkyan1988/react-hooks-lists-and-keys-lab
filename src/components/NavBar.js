import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const key = links.map((links) =>
    <a key={links} href={`#${links}`}>{links}</a>
  )
  return <nav>
    {key}
  </nav>;
}

export default NavBar;
