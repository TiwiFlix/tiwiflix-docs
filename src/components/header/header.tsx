import Link from 'next/link';
import dynamic from 'next/dynamic';

import { SelectTheme } from './select-theme';
import Image from 'next/image';

const Burger = dynamic(() => import('./burger'));

function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-20

        flex

        dark:bg-[#02061B]
        w-full
        h-[4rem]
        py-3

        mx-auto

        border-b
        border-gray-200

        backdrop-blur
        supports-backdrop-blur:bg-[#fff]

        dark:border-gray-800
        dark:supports-backdrop-blur:bg-[#02061B]
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-4

          w-full
          h-full
          mx-auto
          max-w-full

          lg:max-w-8xl
        "
      >
        <div className="flex items-center">
          <Burger />
          <Image
            src="/tiwi.png"
            width={30}
            height={25}
            alt="Picture of the author"
          />
          <span className="hidden md:flex text-md ml-2">TIWIFLIX DOCS</span>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={() => window.open('https://test.tiwiflix.io/', '_blank')}
            className="bg-orange-gradient p-2 px-5 rounded-xl text-sm dark:text-[#000000] font-[600]"
          >
            Launch App
          </button>
          <SelectTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
