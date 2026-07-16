import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logout } from "../services/logout.api";

export function useLogout() {
  const router = useRouter();

  return useMutation({
    mutationFn: logout,

    onSuccess() {
      router.replace("/login");
    },
  });
}
