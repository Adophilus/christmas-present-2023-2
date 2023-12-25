"use client"

import { FunctionComponent, ReactNode, useContext, useEffect } from 'react';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { StoryBackground, Context } from './context';
import { twMerge } from 'tailwind-merge';

export type Section = {
  icon?: string
  text: string
  textColor?: string
  fontFamily?: string
  fontSize?: string
  background: StoryBackground
  footer?: ReactNode
}

const Section: FunctionComponent<{
  sections: Section[]
}> = ({ sections }) => {
  const { background, setStoryBackground } = useContext(Context)

  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const onscroll = () => {
      const y = window.scrollY / document.documentElement.scrollHeight

      for (let i = 0; i < sections.length; i++) {
        if (y < (i + 1) / sections.length && y >= i / sections.length) {
          setActiveSection(i)
          setStoryBackground(sections[i].background)
          break
        }
      }
    }

    onscroll()

    window.addEventListener('scroll', onscroll)

    return () => window.removeEventListener('scroll', onscroll)
  }, [])

  return (
    <div className={twMerge("w-full transition-colors duration-500ms", background)}>
      {sections.map(({ text, icon, footer, ...options }, index) => (
        <div
          className="h-[3000px]"
          key={text}
        >
          <Transition
            show={activeSection === index}
            enter="transition-all duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-[4rem]"
            >
              <Transition.Child
                enter="transition-all duration-500"
                enterFrom="opacity-0 translate-y-[100px]"
                enterTo="opacity-100 translate-y-0"
                leave="transition-all duration-500"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-[100px]"
              >
                <header className={twMerge("text-5xl font-bold tracking-widest font-Rubik", options.textColor)}>
                  {icon ? (
                    <h2 className="text-8xl mb-6 animate-bounce">
                      {icon}
                    </h2>
                  ) : null}
                  <h2 className={twMerge(options.fontFamily, options.fontSize)}>
                    {text}
                  </h2>
                </header>
              </Transition.Child>
            </div>
            <div
              className="fixed bottom-[20px] left-1/2 -translate-x-1/2 -translate-y-[20px] text-center leading-[4rem]"
            >
              {footer ? (
                <Transition.Child
                  enter="transition-all duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all duration-500"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-[100px]"
                >
                  {footer}
                </Transition.Child>
              ) : null}
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default Section;
