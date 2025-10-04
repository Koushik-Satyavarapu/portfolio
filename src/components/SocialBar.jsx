import Github from '../assets/icons/github.svg?react';
import Linkedin from '../assets/icons/linkedin.svg?react';
import Linktree from '../assets/icons/linktree.svg?react';
import Leetcode from '../assets/icons/leetcode.svg?react'; // or PNG/SVG

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href="https://linktr.ee/koushikSatyavarapu" target="_blank" rel="noopener noreferrer"><Linktree /></a>
      <a href="https://github.com/Koushik-Satyavarapu" target="_blank" rel="noopener noreferrer"><Github /></a>
      <a href="https://www.linkedin.com/in/koushik-satyavarapu-1063332a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
      <a href="https://leetcode.com/koushikSatyavarapu" target="_blank" rel="noopener noreferrer"><Leetcode /></a>
    </div>
  );
}
