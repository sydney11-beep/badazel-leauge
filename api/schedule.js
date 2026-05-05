const schedule = {
  events: [
    {
      id: "sparkle-practice",
      title: "Team Sparkle Practice",
      date: "2026-05-04",
      time: "6:00 PM - 7:00 PM",
      type: "practice"
    },
    {
      id: "water-bottle",
      title: "Water Bottle Challenge",
      date: "2026-05-06",
      time: "7:00 PM",
      type: "competition"
    },
    {
      id: "gem-rush-practice",
      title: "Gem Rush Practice",
      date: "2026-05-09",
      time: "5:30 PM",
      type: "practice"
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

  return response.status(200).json(schedule);
}