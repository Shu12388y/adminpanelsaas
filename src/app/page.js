'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedOut,
  useAuth
} from "@clerk/nextjs";

export default function Home() {
  const {isSignedIn} = useAuth()
  return (
    <div className="grid grid-rows-1 items-center justify-items-center h-screen p-8 pb-10 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Welcome Admin to Code Mart</h1>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        {isSignedIn ? <Link href="/create"><Button>Create Product</Button></Link> : null}
    </div>
  );
}
