import { Story, Provider } from '../components/story';

export default function HomePage() {
  return (
    <div>
      <Provider>
        <Story sections={[
          {
            text: "In every challenge, in each endeavor,",
            textColor: "text-white",
            background: "dark",
            footer: (
              <div className="flex flex-col items-center gap-4">
                <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 1.5,
                }}>
                  <path id="wheel" d="M123.359,79.775l0,72.843" style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeWidth: '20px',
                  }} />
                  <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeWidth: '20px',
                  }} />
                </svg>
                <p className="font-Montserrat font-bold text-xl text-white">Scroll down</p>
              </div>
            )
          },
          {
            text: "Your support is a treasure I'll cherish forever.",
            background: "blue"
          },
          {
            text: "Through highs and lows, your love shines through,",
            background: "yellow"
          },
          {
            text: "Thank you, Dad, for being you.",
            background: "yellow"
          },
          {
            background: "christmas",
            text: "In this season of joy and goodwill, I wish you and your family a Merry Christmas and a happy new year!",
            fontFamily: "font-Montserrat",
            fontSize: 'text-2xl',
            icon: "🎄",
            textColor: "text-white",
            footer: (
              <p className="text-lg font-semibold text-white font-Montserrat">
                Made with <span className="text-red-500">❤</span> by <a href="https://github.com/Adophilus" className="underline font-bold" rel="noreferrer noopener">Adophilus</a>
              </p>
            )
          }
        ]} />
      </Provider>
    </div>
  )
}
