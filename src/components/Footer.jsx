export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 w-full bg-surface/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
          <span className="font-display font-medium text-white tracking-wider">
            JORAWAR SINGH
          </span>
          <span className="hidden md:block w-1 h-1 bg-border rounded-full"></span>
          <span className="text-text-muted">
            AI/ML Student · Web Developer
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-text-secondary">
          <a href="https://github.com/JORAWAR128" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/s-jorawar-singh-72a465301/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:joravarsingh2546@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>

        <div className="text-xs text-text-muted font-mono">
          © {new Date().getFullYear()} Jorawar Singh
        </div>

      </div>
    </footer>
  );
}
