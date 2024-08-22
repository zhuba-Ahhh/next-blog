export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 我的博客. 保留所有权利。</p>
        <div className="mt-4">
          <a href="#" className="text-secondary hover:underline mx-2">
            隐私政策
          </a>
          <a href="#" className="text-secondary hover:underline mx-2">
            使用条款
          </a>
          <a href="#" className="text-secondary hover:underline mx-2">
            联系我们
          </a>
        </div>
      </div>
    </footer>
  );
}
