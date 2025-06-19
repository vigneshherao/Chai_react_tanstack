import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chai")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/chai"!</div>;
}
