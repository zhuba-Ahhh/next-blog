import { Link } from "next-view-transitions";
import { Badge } from "../../components/ui/badge";

export default function Footer() {
  const links = [
    { href: "/privacy", label: "隐私政策" },
    { href: "/terms", label: "使用条款" },
    { href: "/contact", label: "联系我们" },
  ];

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2024 我的博客. 保留所有权利。
          </p>
        </div>
        <nav className="flex items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground"
            >
              <Badge>{link.label}</Badge>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
