interface ActivityCardProps {
  children?: React.ReactNode;
}

export function ActivityCard({ children }: ActivityCardProps) {
  return <div className="rounded-xl border bg-card p-4">{children}</div>;
}
