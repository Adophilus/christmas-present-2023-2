"use client"

import { useContext } from 'react';
import Section from './section';
import { Context } from './context';
import { twMerge } from 'tailwind-merge';
import type { Section as TSection } from './section';

export default function Story({ sections }: { sections: TSection[] }) {
  const { background } = useContext(Context)

  return (
    <div className={twMerge(background)} style={{
      backgroundImage: "url('/imgs/background.svg')"
    }}>
      <Section
        sections={sections}>
      </Section>
    </div>
  )
}
