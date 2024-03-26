import Link from "next/link";
import React from "react";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  const socialLinks = [
    {
      url: "https://linkedin.com/in/ahmad-munab",
      label: "LinkedIn",
      icon: <FaLinkedin className="w-full h-full" />,
    },
    {
      url: "https://github.com/ahmad-munab",
      label: "GitHub",
      icon: <FaGithub className="w-full h-full" />,
    },
    {
      url: "https://www.facebook.com/profile.php?id=100069734056848",
      label: "Facebook",
      icon: <FaFacebook className="w-full h-full" />,
    },
  ];

  return (
    <div className="flex sm:gap-4 gap-2">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          target="_blank"
          className="bg-white w-8 h-8 p-1 rounded-lg hover:scale-105 transition-all duration-150"
          href={link.url}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
