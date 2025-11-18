export default function MobileShell({ children }) {
  return (
    <div className="rounded-[24px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/70">
      {children}
    </div>
  )
}
