import CV from "../files/CV_Elias_Grinwis_Plaat_Stultjes.pdf";

export default function About() {
  function handleDownload() {
    // Create a dummy anchor element
    const anchor = document.createElement("a");

    // Set the href attribute to the URL of the file you want to download
    anchor.href = CV;

    // Set the download attribute to specify the filename to be saved as
    anchor.download = "resume.pdf";

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Programmatically trigger a click event on the anchor
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
  }

  return (
    <div
      id="about"
      className="h-screen bg-primary flex flex-col items-center justify-center p-3 lg:p-0">
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
          <button
            className="px-8 py-2 border border-white text-white rounded-md"
            onClick={handleDownload}>
            Download resume
          </button>
        </div>
      </div>
    </div>
  );
}
