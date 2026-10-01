// A thin horizontal line with a node dot — used between sections.
// Stands in for a generic section rule, but ties into the networking
// visual language (a link between two points) rather than decorating blindly.
export default function SignalDivider() {
  return (
    <div className="flex items-center gap-3 px-6 md:px-16" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-signal-dim" />
      <span className="h-px flex-1 bg-line" />
      <span className="h-1.5 w-1.5 rounded-full bg-signal-dim" />
    </div>
  );
}
