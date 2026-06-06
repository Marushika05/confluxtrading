"use client";

import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase-client";

export default function AdminLogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await supabaseClient.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="
        bg-red-600
        text-white
        px-4
        py-2
        rounded
      "
    >
      Logout
    </button>
  );
}