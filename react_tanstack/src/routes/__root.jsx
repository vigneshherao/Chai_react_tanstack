import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <div className="">
        <Link to={"/about"}>About</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
