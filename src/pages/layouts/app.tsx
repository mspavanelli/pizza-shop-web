import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <header>App Layout</header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
