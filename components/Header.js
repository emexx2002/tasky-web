/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
  return (
    <>
      <div className=" mt-3 mb-10 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="mt-4 flex items-center justify-between pb-4 pl-8">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            <span className="px-3 py-1 mr-2  px rounded-full bg-blue-700 text-center font-bold text-2xl text-white">T</span>
            Tasky
          </a>
        </div>
        <div className="hidden pl-14 items-center mx-auto mt-4 lg:flex">
          <a href="/" className="pr-12 hover:font-bold text-xl text-black">
            Pricing
          </a>
          <a href="/" className="pr-12 hover:font-bold text-xl text-black">
            About
          </a>
          <a href="/" className="pr-12 hover:font-bold text-xl text-black">
            Features
          </a>
          <a href="/" className="text-xl hover:font-bold text-black">
            Resources
          </a>
        </div>
        <div className="flex items-center">
          <div className="hidden text-right xl:inline-block">
            <a
              className="mt-2 inline-flex hover:font-bold items-center px-12 py-3 text-lg font-normal tracking-tighter text-black"
              href="/"
            >
              Log in
            </a>
            <a
              className="bg-blue-700 rounded-full mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Start Free Trial
            </a>
          </div>
          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
