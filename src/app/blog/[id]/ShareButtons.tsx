import { Link } from "next-view-transitions";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  return (
    <div className="flex space-x-4 mt-6">
      <Link
        href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500"
        aria-label="在Twitter上分享"
      >
        <FaTwitter size={24} />
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700"
        aria-label="在Facebook上分享"
      >
        <FaFacebook size={24} />
      </Link>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-800"
        aria-label="在LinkedIn上分享"
      >
        <FaLinkedin size={24} />
      </Link>
    </div>
  );
}
