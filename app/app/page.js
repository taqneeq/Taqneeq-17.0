export default function App() {
  return (
    <div className="relative min-h-screen md:h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients - visible on all devices including mobile */}
      <img
        src="/gradient.svg"
        className="absolute -top-1/4 -left-1/4 w-150 h-150 max-w-none md:w-full md:h-full opacity-80"
        alt="Background gradient"
      />
      <img
        src="/gradient.svg"
        className="absolute -bottom-1/4 -right-1/4 w-150 h-150 max-w-none md:w-full md:h-full rotate-180 opacity-80"
        alt="Background gradient"
      />

      {/* Content container */}
      <div className="relative z-10 container p-10 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-[88rem] mx-auto">
        {/* App information on the left */}
        <div className="flex-1 text-center md:text-left space-y-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 font-BSD text-justify md:text-left">
            Taqneeq's Official App
          </h1>
          <p className=" mb-6 font-ibm text-white/70 text-justify">
            Dive into the heart of innovation with the official Taqneeq app!
            Your all-access pass to NMIMS' MPSTME's 17th annual technical
            festival, 'Cosmic Rewind', happening March 3rd-5th. Stay updated
            with event schedules, speaker lineups, and exclusive competitions.
            Plus, scan QR codes to earn points and redeem exciting rewards!
            Don't just attend Taqneeq, experience it."
          </p>
          <div className="flex flex-row items-center justify-center md:justify-start gap-4">
            <a href="https://apps.apple.com/in/app/taqneeq-fest/id6741360884">
              <img src="/app.svg" className="my-5 w-full"></img>
            </a>{" "}
            <a href="/app-release.apk" download={true}>
              <img src="/android.svg" className="my-5 w-full"></img>
            </a>
          </div>
        </div>

        {/* App screenshot/image on the right */}
        <div className="flex-1 flex justify-center md:justify-end bg-transparent order-first md:order-last">
          <div className="w-96 md:w-[46rem] h-auto relative">
            <img
              src="/app.png"
              alt="App Screenshot"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
