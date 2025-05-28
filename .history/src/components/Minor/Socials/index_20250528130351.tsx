import Link from "next/link";
import React from "react";
import { Facebook, Github, Twitter, YouTube } from "../SvgPack/AllSvgs";

const Socials = () => {
  return (
    <div>
      <div>
        <Link href="">
          <Github width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link href="">
          <Twitter width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link href="">
          <Facebook width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link href="">
          <Youtube width={30} height={25} fill="currentColor" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
