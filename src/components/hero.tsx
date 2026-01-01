import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <header className="min-h-dvh flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl">
        This is
        <br />
        <span className="font-bold">Loselen</span>
        <span className="font-kaushan text-orange-500">Labs</span>
      </h1>
      <p className="px-16 text-center">
        This website contains all of my learning documentation that you can
        follow.
      </p>
      <Link href="/blogs">
        <Button>See my blogs</Button>
      </Link>
    </header>
  );
}
