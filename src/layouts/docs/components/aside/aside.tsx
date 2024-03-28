import Link from 'next/link';
import { useRouter } from 'next/router';

import { SIDEBAR } from '@/config';

function Aside() {
  let router = useRouter();

  return (
    <aside
      id="aside"
      className="
        hidden

        
        z-10

        fixed
        top-[64px]
        left-0
        lg:inset-0

        w-full
        h-full

        self-end
        bg-white

        md:pl-4
        backdrop-blur
        dark:supports-backdrop-blur:bg-[#02061B]

        lg:sticky
        lg:block
        lg:w-[280px]
        lg:h-auto
        lg:bg-transparent
        lg:dark:bg-[#02061B]
      "
    >
      <nav
        className="
          h-[calc(100%-64px)]

          px-4
          py-8

          overflow-auto

          lg:sticky
          lg:top-20
          lg:h-screen
          lg:block
          lg:pl-0
          lg:pr-6
          lg:py-8

          dark:bg-transparent
        "
        aria-label="Categories"
      >
        <ul className="space-y-6 pl-1">
          {SIDEBAR.map((item) => (
            <li key={item.title} className="mb-10  pb-5">
              <h5
                className="
                  block

                  ml-3
                  mb-2
            
                  font-medium
                  tracking-wide

                  text-sm
                  text-slate-900

                  dark:text-white
                "
              >
                {item.title}
              </h5>
              {Boolean(item.children?.length) && (
                <ul className="space-y-1">
                  {item.children?.map(({ title, slug }) => (
                    <li key={slug}>
                      <Link href={slug} passHref>
                        <a
                          href={slug}
                          // eslint don't detect ternary value?
                          // eslint-disable-next-line jsx-a11y/aria-proptypes
                          aria-current={`${
                            router.pathname === slug ? 'page' : 'false'
                          }`}
                          className="
                            flex
                            align-middle
                            justify-between

                            py-3
                            px-3

                            text-sm
                            text-slate-500
                            dark:text-slate-400
                            dark:hover:text-[#FF9814]

                            rounded

                            outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#FF9814]
                            dark:focus-visible:ring-[#FF9814]

                            hover:text-[#FF9814]

                            aria-current-page:bg-transparent
                            aria-current-page:text-text-[#FF9814]

                            dark:aria-current-page:text-[#FF9814]
                            dark:aria-current-page:bg-transparent
                          "
                        >
                          {title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
