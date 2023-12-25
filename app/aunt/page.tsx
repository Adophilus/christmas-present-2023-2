import Story from '@/components/story/story.tsx';
import { StoryProvider } from '@/components/story/context.tsx';
import type { Section } from '@/components/story/story-section.tsx';

export default function HomePage({ sections }: { sections: Section[] }) {
  return (
    <div>
      <StoryProvider>
        <Story sections={sections} />
      </StoryProvider>
    </div>
  )
}
