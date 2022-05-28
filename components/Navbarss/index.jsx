import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/auth/login");
  };
  return (
    <div>
      <Link href="/home">Hone</Link>
      <button onClick={handleLogout}> Logout</button>
    </div>
  );
}
