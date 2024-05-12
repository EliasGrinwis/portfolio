export type ProjectProps = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  youtubeVideo?: string;
  image: string;
  conclusion: string;
  available: boolean;
  type: string;
};

export const projects = [
  {
    id: 0,
    name: "Barometer",
    shortDescription:
      "De barometer is een app die je helpt bij het zien hoe druk het is op kantoor.  Zo kun je snel zien of je het beste naar kantoor komt of thuis blijft werken.",
    longDescription: [
      "Dit project was een groepsproject waar we gedurende meerdere maanden aan gewerkt hebben. Onze opdracht was om een handige app te ontwikkelen voor het bedrijf Axxes met betrekking tot de bezetting van hun kantoor in Antwerpen. De bezetting in het kantoor varieerde sterk, soms was het overvol en andere dagen bijna leeg.",
      "Met ons team, bestaande uit drie ontwikkelaars, twee experts in cloud- en cybersecurity, en één AI-specialist, hebben we ons gericht op het ontwikkelen van een voorspellende tool. Deze tool heeft de mogelijkheid om binnen een periode van 1 maand te voorspellen hoe druk het op kantoor zal zijn.",
      "We zijn begonnen met het opstellen van een grondig plan van aanpak, zodat we duidelijk wisten wat onze doelstellingen waren en hoe we ze zouden bereiken. Vervolgens zijn we aan de slag gegaan met het bouwen van de app. Gezien de tijdsdruk van slechts drie weken moesten we efficiënt doorwerken.",
      "Ondanks de strakke deadline hebben we goed samengewerkt en hebben we optimaal gebruik gemaakt van onze diverse vaardigheden. Stap voor stap hebben we gewerkt aan de ontwikkeling van de app, waarbij we constant verbeteringen hebben aangebracht daar waar nodig en de functionaliteiten hebben geoptimaliseerd.",
      "Uiteindelijk hebben we een handige en betrouwbare app opgeleverd aan Axxes. Met deze app kan Axxes nu beter anticiperen op de bezettingsgraad van hun kantoor, wat hun werkplek aanzienlijk efficiënter maakt.",
    ],
    technologies: ["React", "Tailwind CSS", "ASP.NET"],
    image: "/projects/barometer.webp",
    conclusion:
      "Ik vond dit project zeer leerzaam. Het bood niet alleen inzicht in de technologieën die we hebben toegepast, maar ook in het samenwerken in een team. Het was een waardevolle ervaring en ik ben trots op wat we hebben bereikt.",
    available: true,
    type: "Groeps Project",
  },
  {
    id: 1,
    name: "TripPlanner",
    shortDescription:
      "TripPlanner is een handige app waarmee je snel je volgende reis met vrienden kunt plannen. Het helpt je samen activiteiten te organiseren.",
    longDescription: [
      "Dit project was mijn eerste kennismaking met Angular. Met aantal developers hebben we een reisplanningsapplicatie ontwikkeld die het plannen van reizen vereenvoudigt en personaliseert. Het was een boeiende uitdaging om samen te werken in een team en tegelijkertijd nieuwe technologieën te leren en toe te passen.",
      "Ik ben enorm tevreden met het eindresultaat van de TripPlanner. Het was een waardevolle ervaring om vanaf het allereerste begin een applicatie te bouwen en deze vervolgens te zien groeien en evolueren.",
      "Daarnaast ben ik trots om te vermelden dat ons team de derde plaats heeft behaald, wat een extra erkenning was voor onze inspanningen en prestaties. Ik was persoonlijk verantwoordelijk voor de front-endontwikkeling, wat me waardevolle inzichten en ervaring heeft opgeleverd.",
    ],
    technologies: ["Angular", "Tailwind CSS", "ASP.NET"],
    demo: "https://trip-planner-46730.web.app/",
    image: "/projects/tripplanner.webp",
    conclusion:
      "Het werken aan TripPlanner heeft mijn samenwerkingsvaardigheden, kennis van Angular en algemene softwareontwikkeling enorm versterkt. Ik kijk met veel voldoening terug op dit project en ben enthousiast om mijn leertraject voort te zetten in toekomstige projecten.",
    available: true,
    type: "Groeps Project",
  },
  {
    id: 2,
    name: "Spotify Clone",
    shortDescription:
      "De Spotify Clone is een eigen project waarbij ik een app heb gebouwd die sterk lijkt op de echte Spotify-app. Hiermee kun je je favoriete muziek ontdekken, afspeellijsten maken en beluisteren.",
    longDescription: [
      "Het Spotify Clone-project is mijn persoonlijke poging om de geliefde muziekstreamingdienst na te bootsen. Met dit project heb ik een applicatie ontwikkeld waarmee gebruikers kunnen inloggen en toegang krijgen tot hun favoriete nummers en afspeellijsten.",
      "De applicatie maakt gebruik van Auth0 voor veilige gebruikersauthenticatie, waardoor gebruikers een gepersonaliseerde luisterervaring kunnen hebben. Door het gebruik van React, MySQL, Tailwind CSS, ASP.NET, Firebase en Azure heb ik diverse functionaliteiten geïmplementeerd, zoals het afspelen van nummers, het maken van afspeellijsten en het ontdekken van nieuwe muziek.",
    ],
    technologies: ["React", "Tailwind CSS", "Azure"],
    github: "https://github.com/EliasGrinwis/spotify-clone",
    demo: "",
    image: "/projects/spotify.webp",
    conclusion:
      "Het ontwikkelen van het Spotify Clone-project was een leerzaam avontuur dat mijn vaardigheden in webontwikkeling aanzienlijk heeft verbeterd. Het heeft me niet alleen geholpen om meer inzicht te krijgen in de implementatie van complexe functies, maar ook om mijn creativiteit en probleemoplossend vermogen te stimuleren. Ik ben trots op wat ik heb bereikt met deze applicatie en kijk ernaar uit om mijn vaardigheden verder te ontwikkelen in toekomstige projecten.",
    available: false,
    type: "Persoonlijk Project",
  },
  {
    id: 3,
    name: "Kinepolis-app",
    shortDescription:
      "De Kinepolis-app is een project waarbij ik een app heb gebouwd die de Kinepolis-website nabootst. Hiermee kun je snel en eenvoudig de nieuwste films ontdekken.",
    longDescription: [
      "Als een liefhebber van de bioscoop besloot ik om mijn passie voor films te combineren met mijn vaardigheden in webontwikkeling door de Kinepolis-app te maken. Ik was ervan overtuigd dat ik kon bijdragen aan het verbeteren van hun online ervaring.",
      "Door gebruik te maken van React Vite, Tailwind CSS, Auth0 en hosting op Netlify heb ik deze eenvoudige Kinepolis-app ontwikkeld. Verken je favoriete films nu zelf!",
    ],
    technologies: ["React Vite", "Tailwind CSS", "Auth0"],
    github: "https://github.com/EliasGrinwis/kinepolis-app",
    demo: "https://kinepolis.netlify.app/",
    image: "/projects/kinepolis.webp",
    conclusion:
      "Dit project heeft mijn kennis van Auth0 en Tailwind CSS verrijkt en heeft me de kans geboden om te experimenteren met React Vite. Ik ben trots op wat ik met deze app heb bereikt en kijk ernaar uit om mijn vaardigheden te blijven ontwikkelen in mijn toekomstige projecten",
    available: true,
    type: "Persoonlijk Project",
  },
];
