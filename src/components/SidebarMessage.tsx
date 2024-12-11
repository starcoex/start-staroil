import React from "react";
import tangoMail from "../images/mail-icon.svg";

const SidebarMessage = () => {
  return (
    <>
      <div className="flex items-center">
        <img
          src={tangoMail}
          alt="starcoex-mail"
          className="w-5 h-5 flex-shrink-0"
        />
        <span className="ml-2 text-sm text-gray-900 uppercase">
          뉴스레터에 가입하세요
        </span>
      </div>
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full  border-t border-gray-300 " />
        </div>
      </div>
      <div className="flex">
        <p className="text-sm leading-6 text-gray-600">
          뉴스레터에 가입하시면 새로운 소식을 가장 먼저 알아보실 수 있습니다.
        </p>
      </div>
      <form className="mt-6 flex">
        <input
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          required
          type="email"
          aria-required="true"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            type="submit"
          >
            구독
          </button>
        </div>
      </form>
    </>
  );
};

export default SidebarMessage;
