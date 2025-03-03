import * as React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";

/**
 * Social link props
 */
interface SocialLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  label: string;
}

/**
 * Social link component
 * @param props - Social link props
 * @returns Social link component
 */
const SocialLink = ({
  href,
  icon,
  label,
  className,
  ...props
}: SocialLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 ${className || ""}`}
      aria-label={label}
      {...props}
    >
      {icon}
    </Link>
  );
};

/**
 * Social links component
 * @returns Social links component
 */
export function SocialLinks() {
  const socialLinks = [
    {
      href: "https://x.com/morganic_io",
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/morgantschofield/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: "mailto:mschofield89@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
    },
    {
      href: "https://github.com/MorganOnCode",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
    },
  ];

  return (
    <div className="flex space-x-2">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.href}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
} 