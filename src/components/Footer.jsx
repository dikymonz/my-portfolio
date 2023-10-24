
import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();


  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />
<div><br />
        <p>
          <span>▷</span> Dikymonz &copy; {currentYear}
        </p>
        <p>All views and work are my own</p>
        </div>
    </footer>
  );
};

export default Footer;
