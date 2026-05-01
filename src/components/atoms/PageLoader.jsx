const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-light-background dark:bg-dark-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-light-secondary border-t-light-accent dark:border-dark-secondary dark:border-t-dark-accent" />
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
