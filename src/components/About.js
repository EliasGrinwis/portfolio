import CV from "../files/CV_Elias_Grinwis_Plaat_Stultjes.pdf";

export default function About() {
  function handleDownload() {
    // Maak een dummy anchor element aan
    const anchor = document.createElement("a");

    // Stel het href-attribuut in op de URL van het bestand dat je wilt downloaden
    anchor.href = CV;

    // Stel het download-attribuut in om de bestandsnaam op te geven om opgeslagen te worden
    anchor.download = "CV Elias Grinwis Plaat Stultjes";

    // Voeg de anchor toe aan de body
    document.body.appendChild(anchor);

    // Programmeer een klikgebeurtenis op de anchor
    anchor.click();

    // Verwijder de anchor uit de body
    document.body.removeChild(anchor);
  }

  return (
    <div
      id="about"
      className="h-screen bg-primary flex flex-col items-center justify-center p-3">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl text-center font-semibold text-white mb-4 ">
          Over<span className="text-red-500"> mij</span>
        </h2>
        <p className="text-md text-gray-300 mb-8">
          Ik ben een laatstejaars student aan Thomas More, waar ik informatica
          studeer. Ik ben gepassioneerd door softwareontwikkeling en zoek
          voortdurend naar kansen om te leren en te groeien op dit gebied.
          Buiten mijn studie geniet ik van wandelingen. Voel je vrij om mijn
          portfolio te verkennen om meer te weten te komen over mijn projecten
          en ervaringen.
        </p>

        <div className="flex items-center gap-3">
          <a href="mailto:eliasgrinwis27@gmail.com">
            <button className="px-8 py-2 bg-white text-primary rounded-md">
              Contact
            </button>
          </a>

          <button
            className="px-8 py-2 border border-white text-white rounded-md"
            onClick={handleDownload}>
            CV Downloaden
          </button>
        </div>
      </div>
    </div>
  );
}
