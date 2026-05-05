const menu = {
  id: "badazzeling-site",
  title: "Competitive Badazzeling",
  author: "Sydney Reiter",
  description: "A competitive platform for creative badazzeling challenges.",
  license: "by-sa",
  metadata: {},
  items: [
    {
      id: "home",
      title: "Home",
      slug: "home",
      location: "home.html",
      parent: null,
      order: 0,
      indent: 1,
      metadata: {}
    },
    {
      id: "about",
      title: "About",
      slug: "about",
      location: "about.html",
      parent: null,
      order: 1,
      indent: 1,
      metadata: {}
    },
    {
      id: "what-is-badazzeling",
      title: "What is Badazzeling",
      slug: "what-is-badazzeling",
      location: "what-is-badazzeling.html",
      parent: "about",
      order: 0,
      indent: 2,
      metadata: {}
    },
    {
      id: "scoring",
      title: "Scoring",
      slug: "scoring",
      location: "scoring.html",
      parent: "about",
      order: 1,
      indent: 2,
      metadata: {}
    },
    {
      id: "teams",
      title: "Teams",
      slug: "teams",
      location: "teams.html",
      parent: null,
      order: 2,
      indent: 1,
      metadata: {}
    },
    {
      id: "team-sparkle",
      title: "Team Sparkle",
      slug: "team-sparkle",
      location: "team-sparkle.html",
      parent: "teams",
      order: 0,
      indent: 2,
      metadata: {}
    },
    {
      id: "gem-rush",
      title: "Gem Rush",
      slug: "gem-rush",
      location: "gem-rush.html",
      parent: "teams",
      order: 1,
      indent: 2,
      metadata: {}
    },
    {
      id: "rhinestone-rebels",
      title: "Rhinestone Rebels",
      slug: "rhinestone-rebels",
      location: "rhinestone-rebels.html",
      parent: "teams",
      order: 2,
      indent: 2,
      metadata: {}
    },
    {
      id: "calendar",
      title: "Calendar",
      slug: "calendar",
      location: "calendar.html",
      parent: null,
      order: 3,
      indent: 1,
      metadata: {}
    },
    {
      id: "schedule",
      title: "Schedule",
      slug: "schedule",
      location: "schedule.html",
      parent: "calendar",
      order: 0,
      indent: 2,
      metadata: {}
    },
    {
      id: "upcoming-events",
      title: "Upcoming Events",
      slug: "upcoming-events",
      location: "upcoming-events.html",
      parent: "calendar",
      order: 1,
      indent: 2,
      metadata: {}
    },
    {
      id: "important-dates",
      title: "Important Dates",
      slug: "important-dates",
      location: "important-dates.html",
      parent: "calendar",
      order: 2,
      indent: 2,
      metadata: {}
    },
    {
      id: "join",
      title: "Join",
      slug: "join",
      location: "join.html",
      parent: null,
      order: 4,
      indent: 1,
      metadata: {}
    },
    {
      id: "faq",
      title: "FAQ",
      slug: "faq",
      location: "faq.html",
      parent: "join",
      order: 0,
      indent: 2,
      metadata: {}
    }
  ]
};

export default function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  return response.status(200).json(menu);
}