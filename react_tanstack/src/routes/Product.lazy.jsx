import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/Product")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/Product/Lazy"!
      <Link to={"/Product/1"}>product</Link>
    </div>
  );
}
