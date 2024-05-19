import { LoginButton } from "@/components/auth/login-button";
import { MultiStep } from "@/components/multi-step";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})
export default function Home() {
  return (
    <div>
      <LoginButton>
        hola -ElMike
      </LoginButton>
    </div>
  );
}
