import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Product/$pid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pid } = Route.useParams();
  console.log(pid);

  return <div>{`Hello /Product/${pid}`}</div>;
}
