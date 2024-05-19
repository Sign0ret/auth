import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { currentUser } from "@/lib/auth";
import { Main } from "@/components/main";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default async function MainPage() {
    const user = await currentUser();
  return (
    <div>
        <Main />
      {user ? (
        <div>

        </div>
      ) : (
        <div>

        </div>
      )}
    </div>
  );
}