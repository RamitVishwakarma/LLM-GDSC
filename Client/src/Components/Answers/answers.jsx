import { QuestionContext } from "../Context/answersContext";
import { useState, useContext } from "react";
import parse from "html-react-parser";

import profile from "../../assets/profile.svg";
const AllAnswers = () => {
  const { Answers } = useContext(QuestionContext);
  return (
    <>
      <div className="hidden md:flex md:w-[100%] px-40 py-8 ">
        <div className="md:max-h-[400px] overflow-y-auto p-3">
          <div className="flex justify-center   items-center">
            <div className="flex flex-col gap-4">
              {Answers.question.map((elem, i) => {
                return (
                  <div className="text-[#BDC1C5] flex flex-col gap-3">
                    <div className="flex gap-2">
                      {" "}
                      <div>
                        <img
                          src={profile}
                          className="w-[44px] h-[44px] rounded-full"
                        />
                      </div>
                      <div className="text-lg">{elem.question}</div>
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <div>
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="44" height="44" rx="22" fill="#131314" />
                          <rect
                            x="3.97852"
                            y="24.0176"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(-30 3.97852 24.0176)"
                            fill="#DB4437"
                          />
                          <rect
                            x="5.9082"
                            y="22.0771"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(29.5587 5.9082 22.0771)"
                            fill="#4285F4"
                          />
                          <rect
                            x="30.0605"
                            y="25.3242"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(150 30.0605 25.3242)"
                            fill="#F4B400"
                          />
                          <rect
                            x="28.1309"
                            y="27.2646"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(-150.441 28.1309 27.2646)"
                            fill="#0F9D58"
                          />
                          <path
                            d="M32.9 9L33.2202 11.5197C33.6243 14.6988 36.0808 17.2281 39.2467 17.7249L41 18L39.2467 18.2751C36.0808 18.7719 33.6243 21.3012 33.2202 24.4803L32.9 27L32.5798 24.4803C32.1757 21.3012 29.7192 18.7719 26.5533 18.2751L24.8 18L26.5533 17.7249C29.7192 17.2281 32.1757 14.6988 32.5798 11.5197L32.9 9Z"
                            fill="url(#paint0_linear_151_302)"
                          />
                          <path
                            d="M25.7 9L25.7671 9.40758C25.9552 10.5496 26.8504 11.4448 27.9924 11.6329L28.4 11.7L27.9924 11.7671C26.8504 11.9552 25.9552 12.8504 25.7671 13.9924L25.7 14.4L25.6329 13.9924C25.4448 12.8504 24.5496 11.9552 23.4076 11.7671L23 11.7L23.4076 11.6329C24.5496 11.4448 25.4448 10.5496 25.6329 9.40758L25.7 9Z"
                            fill="url(#paint1_linear_151_302)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_151_302"
                              x1="23"
                              y1="18.1111"
                              x2="41"
                              y2="18.1111"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#A071C4" />
                              <stop offset="0.5" stop-color="#CB6885" />
                              <stop offset="1" stop-color="#D76471" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_151_302"
                              x1="23"
                              y1="18.1111"
                              x2="41"
                              y2="18.1111"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#A071C4" />
                              <stop offset="0.5" stop-color="#CB6885" />
                              <stop offset="1" stop-color="#D76471" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-lg">{parse(elem.answer)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex md:hidden w-[100%] px-4 py-2 ">
        <div className="max-h-[450px] overflow-y-auto p-2">
          <div className="flex justify-center   items-center">
            <div className="flex flex-col gap-4">
              {Answers.question.map((elem, i) => {
                return (
                  <div className="text-[#BDC1C5] flex flex-col gap-3">
                    <div className="flex gap-2">
                      {" "}
                      <div>
                        <img
                          src={profile}
                          className="w-[24px] h-[24px] rounded-full"
                        />
                      </div>
                      <div className="md:text-lg text-sm">{elem.question}</div>
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="44" height="44" rx="22" fill="#131314" />
                          <rect
                            x="3.97852"
                            y="24.0176"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(-30 3.97852 24.0176)"
                            fill="#DB4437"
                          />
                          <rect
                            x="5.9082"
                            y="22.0771"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(29.5587 5.9082 22.0771)"
                            fill="#4285F4"
                          />
                          <rect
                            x="30.0605"
                            y="25.3242"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(150 30.0605 25.3242)"
                            fill="#F4B400"
                          />
                          <rect
                            x="28.1309"
                            y="27.2646"
                            width="11.8889"
                            height="3.89463"
                            rx="1.94731"
                            transform="rotate(-150.441 28.1309 27.2646)"
                            fill="#0F9D58"
                          />
                          <path
                            d="M32.9 9L33.2202 11.5197C33.6243 14.6988 36.0808 17.2281 39.2467 17.7249L41 18L39.2467 18.2751C36.0808 18.7719 33.6243 21.3012 33.2202 24.4803L32.9 27L32.5798 24.4803C32.1757 21.3012 29.7192 18.7719 26.5533 18.2751L24.8 18L26.5533 17.7249C29.7192 17.2281 32.1757 14.6988 32.5798 11.5197L32.9 9Z"
                            fill="url(#paint0_linear_151_302)"
                          />
                          <path
                            d="M25.7 9L25.7671 9.40758C25.9552 10.5496 26.8504 11.4448 27.9924 11.6329L28.4 11.7L27.9924 11.7671C26.8504 11.9552 25.9552 12.8504 25.7671 13.9924L25.7 14.4L25.6329 13.9924C25.4448 12.8504 24.5496 11.9552 23.4076 11.7671L23 11.7L23.4076 11.6329C24.5496 11.4448 25.4448 10.5496 25.6329 9.40758L25.7 9Z"
                            fill="url(#paint1_linear_151_302)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_151_302"
                              x1="23"
                              y1="18.1111"
                              x2="41"
                              y2="18.1111"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#A071C4" />
                              <stop offset="0.5" stop-color="#CB6885" />
                              <stop offset="1" stop-color="#D76471" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_151_302"
                              x1="23"
                              y1="18.1111"
                              x2="41"
                              y2="18.1111"
                              gradientUnits="userSpaceOnUse">
                              <stop stop-color="#A071C4" />
                              <stop offset="0.5" stop-color="#CB6885" />
                              <stop offset="1" stop-color="#D76471" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="md:text-lg text-sm">
                        {parse(elem.answer)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAnswers;
