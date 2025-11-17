const sessions = {
  "session-123": {
    title: "Productivity Apps Comparison",
    history: [
      {
        type: "user",
        text: "Compare top productivity apps.",
      },
      {
        type: "bot",
        text: "Here is a comparison of some of the top productivity applications available today:",
        table: {
          headers: ["App Name", "Primary Use", "Key Feature", "Pricing Model"],
          rows: [
            [
              "Notion",
              "All-in-one workspace",
              "Databases & Templates",
              "Freemium",
            ],
            [
              "Trello",
              "Kanban-style project management",
              "Visual Boards",
              "Freemium",
            ],
            [
              "Asana",
              "Team project management",
              "Timelines & Workflows",
              "Premium",
            ],
            [
              "Evernote",
              "Note-taking and organization",
              "Web Clipper",
              "Freemium",
            ],
          ],
        },
      },
    ],
  },
  "session-456": {
    title: "Healthy Meal Plan",
    history: [
      {
        type: "user",
        text: "Generate a healthy meal plan for a week.",
      },
      {
        type: "bot",
        text: "Of course! Here is a sample 3-day healthy meal plan to get you started:",
        table: {
          headers: ["Day", "Breakfast", "Lunch", "Dinner"],
          rows: [
            [
              "Monday",
              "Oatmeal with Berries",
              "Quinoa Salad",
              "Grilled Chicken & Veggies",
            ],
            [
              "Tuesday",
              "Greek Yogurt & Nuts",
              "Lentil Soup",
              "Salmon with Asparagus",
            ],
            [
              "Wednesday",
              "Scrambled Eggs",
              "Chicken Wrap",
              "Stir-fry with Tofu",
            ],
          ],
        },
      },
    ],
  },
};

module.exports = {
  sessions,
};
