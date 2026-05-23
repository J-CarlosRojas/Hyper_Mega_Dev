import splashImage from "../assets/images/IMG_Intro_Splash.png";

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/40 via-transparent to-purple-500/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Logo */}
        <img
          src={splashImage} 
          alt="Hyper Mega Dev"
          className="mb-8 w-32 md:w-40"
        />

        {/* Title */}
        <h1 className="mb-4 text-5xl font-black tracking-tight md:text-7xl">
          Hyper Mega Dev
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Independent XR and interactive experiences.
        </p>

        {/* Current Project */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Current Project
          </p>

          <h2 className="mt-2 text-2xl font-bold">The Beginning</h2>

          <p className="mt-2 text-gray-400">
            A contemplative VR experience for Meta Quest.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">


          <a
            href="mailto:j.carlosrojas@outlook.com"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;