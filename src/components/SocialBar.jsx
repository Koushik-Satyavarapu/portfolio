import Github from '../assets/icons/github.svg?react';
import Linkedin from '../assets/icons/linkedin.svg?react';
import Leetcode from '../assets/icons/leetcode.svg?react'; // or PNG/SVG

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><Github /></a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
      <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer"><Leetcode /></a>
    </div>
  );
}
