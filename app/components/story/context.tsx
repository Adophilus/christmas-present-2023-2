"use client"

import { FunctionComponent, createContext, useState } from "react";

const storyBackground = {
  dark: "bg-[#282c34]/75",
  blue: "bg-[#61dafb]/50",
  fuchsia: "bg-fuchsia-700/75",
  yellow: "bg-[#f4d03f]/50",
  christmas: "bg-[#e74c3c]/75",
  transparent: "bg-transparent",
} as const

export type StoryBackground = keyof typeof storyBackground

type Context = { background: string, setStoryBackground: (color: StoryBackground) => void }

export const Context = createContext({
  background: "bg-transparent",
  setStoryBackground (color: StoryBackground) {
    this.background = color
  },
} satisfies Context)

export const Provider: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<{ background: string }>({ background: "bg-transparent" })

  return (
    <Context.Provider value={{
      ...state,
      setStoryBackground: (color: StoryBackground) => {
        setState({ background: storyBackground[color] })
      }
    }}>
      {children}
    </Context.Provider>
  )
}
