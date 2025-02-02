import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  // Get the current session
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect unauthenticated users to the login page
    redirect("/login");
  }

  // Redirect authenticated users to the dashboard
  redirect("/dashboard");
}
