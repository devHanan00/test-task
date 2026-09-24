type BotanicalDividerProps = {
  className?: string;
};

export function BotanicalDivider({ className = "" }: BotanicalDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-sand" />
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-sage/60">
        <path
          d="M12 1C12 1 8 4 4 6C8 5 10 8 12 11C14 8 16 5 20 6C16 4 12 1 12 1Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <path d="M12 11V1" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <span className="h-px flex-1 bg-sand" />
    </div>
  );
}
