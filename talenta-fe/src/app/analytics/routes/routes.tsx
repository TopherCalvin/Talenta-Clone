
import ProtectedPage from "./protectedPage";

interface Route {
  path: string;
  component: React.FC;
  guestOnly?: boolean;
  userOnly?: boolean;
  staffOnly?: boolean;
}

const routes: Route[] = [
  {
    path: "/",
    component: ,
  },
];

export default function Routes() {
  return (
    <AppRouter>
      {routes.map((route) => (
        <ProtectedPage
          key={route.path}
          path={route.path}
          guestOnly={route.guestOnly}
          userOnly={route.userOnly}
          staffOnly={route.staffOnly}
        >
          {route.component}
        </ProtectedPage>
      ))}
    </AppRouter>
  );
}
