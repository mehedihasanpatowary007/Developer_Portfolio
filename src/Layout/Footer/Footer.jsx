
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import BrandLogo from '../../assets/Images/logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#200c14] text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Brand Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={BrandLogo}
              alt="Brand Logo"
              className="h-10"
            />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-12">
            <a
              href="#about"
              className="text-lg hover:text-yellow-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-lg hover:text-yellow-500 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contacts"
              className="text-lg hover:text-yellow-500 transition duration-300"
            >
              Contact
            </a>
            <a
              href="#blog"
              className="text-lg hover:text-yellow-500 transition duration-300"
            >
              Blog
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-start mt-6 md:mt-0">
            {/* React Icons for social media */}
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaTwitter className="h-8 w-8" />
            </a>
            <a
              href="https://medium.com/@your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              <FaMedium className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section (Copyright) */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
