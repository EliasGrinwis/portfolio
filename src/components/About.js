export default function About() {
  return (
    <div className=" h-screen bg-primary  flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl text-center font-semibold text-white mb-4 ">
          About
          <span className="text-red-500"> me</span>
        </h2>
        <p className="text-md text-gray-300 mb-8">
          I'm a last year student at Thomas More, studying computer science. I'm
          passionate about Software development and constantly seek
          opportunities to learn and grow in this field. Outside of academics, I
          enjoy going for a walk. Feel free to explore my portfolio to learn
          more about my projects and experiences.
        </p>

        <div className="flex items-center gap-3">
          <button className="px-8 py-2 bg-white text-primary rounded-md">
            Contact
          </button>
          <button className="px-8 py-2 border border-white text-white rounded-md">
            Download resume
          </button>
        </div>
      </div>
    </div>
  );
}
