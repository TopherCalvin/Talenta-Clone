import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export default function ProtectedPage({
  children,
  guestOnly,
  userOnly,
  staffOnly,
}: {
  children: ReactNode;
  guestOnly?: boolean;
  userOnly?: boolean;
  staffOnly?: boolean;
}) {
  const session = useSession();
  useEffect(() => {
    const goHome =
      (guestOnly &&
        !(!session.data?.user || session.data?.user?.role === "USER")) ||
      !(
        !session.data?.user?.role ||
        ["USER", "ADMIN", "SUPERADMIN"].includes(session.data?.user?.role)
      );
    const loginFirst =
      (userOnly && !(session.data?.user?.role === "USER")) ||
      (staffOnly &&
        !(
          !session.data?.user?.role ||
          ["ADMIN", "SUPERADMIN"].includes(session.data?.user?.role)
        ));
    if (goHome) redirect("/");
    if (loginFirst) redirect("/login");
  }, [session, guestOnly, staffOnly, userOnly]);

  return children;
}
