'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserButton, SignedIn} from "@clerk/nextjs"


function SideBar() {
  return (
    <div className="relative flex flex-col h-full w-[18rem] shadow-lg">
      <h2 className="font-semibold text-center text-3xl py-6">
        Welcome Admin
      </h2>
      <div className="flex flex-col  h-full justify-start items-center ">
        <div className="w-full  text-center py-[1rem] my-[1rem]">
          <Link href="/analysis">
            <Button className="w-full h-[5rem] bg-white text-black hover:text-white rounded-none shadow-none">
              Analysis
            </Button>
          </Link>
        </div>
        <div className="w-full  text-center py-[1rem] my-[1rem]">
          <Link href="/product">
            <Button className="w-full h-[5rem] bg-white text-black hover:text-white rounded-none shadow-none">
              All Products
            </Button>
          </Link>
        </div>
        <div className="w-full text-center py-[1rem] my-[1rem]">
          <Link href="/create">
            <Button className="w-full h-[5rem] bg-white text-black hover:text-white rounded-none shadow-none">
              Create
            </Button>
          </Link>
        </div>
        <div className="w-full text-center py-[1rem] my-[1rem]">
          <Link href="/orders">
            <Button className="w-full h-[5rem] bg-white text-black hover:text-white rounded-none shadow-none">
              Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
