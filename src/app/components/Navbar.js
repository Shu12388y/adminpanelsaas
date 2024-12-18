"use client";

import { SignedIn,UserButton } from "@clerk/nextjs";


function NavBar() {
  


  return (
    <div className="flex flex-row items-center justify-end p-4">
      {/* <Button onClick={userLogOut}>Log Out</Button> */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default NavBar;
