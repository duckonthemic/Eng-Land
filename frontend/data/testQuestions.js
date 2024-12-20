const testQuestions = [
  {
    id: 1,
    category: "Ngữ pháp",
    question:
      "Choose the correct form of the verb: She ___ to the market yesterday.",
    options: ["go", "went", "gone", "going"],
    answer: "went",
  },
  {
    id: 2,
    category: "Từ vựng",
    question: "What is a synonym for 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answer: "Joyful",
  },
  {
    id: 3,
    category: "Ngữ pháp",
    question: "Which sentence is in the passive voice?",
    options: [
      "The chef cooks the meal.",
      "The meal is cooked by the chef.",
      "The chef will cook the meal.",
      "The chef has cooked the meal.",
    ],
    answer: "The meal is cooked by the chef.",
  },
  {
    id: 4,
    category: "Từ vựng",
    question: "What does the word 'benevolent' mean?",
    options: ["Hostile", "Generous", "Indifferent", "Curious"],
    answer: "Generous",
  },
  {
    id: 5,
    category: "Ngữ pháp",
    question: "Fill in the blank: If I ___ rich, I would travel the world.",
    options: ["am", "was", "were", "be"],
    answer: "were",
  },
  {
    id: 6,
    category: "Từ vựng",
    question: "What is the antonym of 'increase'?",
    options: ["Rise", "Grow", "Expand", "Decrease"],
    answer: "Decrease",
  },
  {
    id: 7,
    category: "Ngữ pháp",
    question:
      "Choose the correct conditional form: If she ___ harder, she would have passed the exam.",
    options: ["studied", "has studied", "had studied", "studies"],
    answer: "had studied",
  },
  {
    id: 8,
    category: "Từ vựng",
    question: "What does 'ubiquitous' mean?",
    options: ["Rare", "Everywhere", "Obsolete", "Unique"],
    answer: "Everywhere",
  },
  {
    id: 9,
    category: "Ngữ pháp",
    question: "Identify the correct use of the past perfect tense.",
    options: [
      "She has eaten already.",
      "She eats breakfast every day.",
      "She had finished her work before the meeting.",
      "She will eat after the movie.",
    ],
    answer: "She had finished her work before the meeting.",
  },
  {
    id: 10,
    category: "Từ vựng",
    question:
      "Choose the word that best completes the sentence: The artist's work was truly ____.",
    options: ["mundane", "innovative", "boring", "ordinary"],
    answer: "innovative",
  },

  {
    id: 11,
    category: "Ngữ pháp",
    question:
      "Choose the correct form of the verb: They ___ to the concert last night.",
    options: ["go", "went", "gone", "going"],
    answer: "went",
  },
  {
    id: 12,
    category: "Từ vựng",
    question: "What is a synonym for 'quick'?",
    options: ["Slow", "Rapid", "Lazy", "Calm"],
    answer: "Rapid",
  },
  {
    id: 13,
    category: "Ngữ pháp",
    question: "Fill in the blank: She ___ finished her homework before dinner.",
    options: ["has", "have", "had", "having"],
    answer: "had",
  },
  {
    id: 14,
    category: "Từ vựng",
    question: "What does the word 'meticulous' mean?",
    options: ["Careless", "Precise", "Lazy", "Rude"],
    answer: "Precise",
  },
  {
    id: 15,
    category: "Ngữ pháp",
    question:
      "Choose the correct conditional form: If it ___ tomorrow, we will cancel the trip.",
    options: ["rains", "rained", "will rain", "rain"],
    answer: "rains",
  },
  {
    id: 16,
    category: "Từ vựng",
    question: "What is the antonym of 'scarce'?",
    options: ["Rare", "Plentiful", "Sparse", "Limited"],
    answer: "Plentiful",
  },
  {
    id: 17,
    category: "Ngữ pháp",
    question: "Identify the correct use of the future perfect tense.",
    options: [
      "She will have finished the project by next week.",
      "She finishes the project every week.",
      "She finished the project yesterday.",
      "She is finishing the project now.",
    ],
    answer: "She will have finished the project by next week.",
  },
  {
    id: 18,
    category: "Từ vựng",
    question: "What does 'candid' mean?",
    options: ["Dishonest", "Honest", "Shy", "Arrogant"],
    answer: "Honest",
  },
  {
    id: 19,
    category: "Ngữ pháp",
    question: "Choose the correct form: He ___ never been to Japan.",
    options: ["has", "have", "had", "having"],
    answer: "has",
  },
  {
    id: 20,
    category: "Từ vựng",
    question: "What is a synonym for 'bright'?",
    options: ["Dull", "Intelligent", "Heavy", "Dark"],
    answer: "Intelligent",
  },
  {
    id: 21,
    category: "Ngữ pháp",
    question: "Fill in the blank: They ___ dinner when the guests arrived.",
    options: ["were having", "have", "had", "having"],
    answer: "were having",
  },
  {
    id: 22,
    category: "Từ vựng",
    question: "What does 'ephemeral' mean?",
    options: ["Permanent", "Short-lived", "Ancient", "Expensive"],
    answer: "Short-lived",
  },
  {
    id: 23,
    category: "Ngữ pháp",
    question: "Choose the correct passive form: The cake ___ by my sister.",
    options: ["is baked", "bakes", "baked", "will bake"],
    answer: "is baked",
  },
  {
    id: 24,
    category: "Từ vựng",
    question: "What is the antonym of 'generous'?",
    options: ["Greedy", "Kind", "Charitable", "Selfless"],
    answer: "Greedy",
  },
  {
    id: 25,
    category: "Ngữ pháp",
    question: "Identify the correct use of the present perfect tense.",
    options: [
      "She is reading a book.",
      "She has read five books this month.",
      "She will read a book tomorrow.",
      "She reads a book every day.",
    ],
    answer: "She has read five books this month.",
  },
  {
    id: 26,
    category: "Từ vựng",
    question: "What does 'innovative' mean?",
    options: ["Traditional", "Creative", "Old-fashioned", "Simple"],
    answer: "Creative",
  },
  {
    id: 27,
    category: "Ngữ pháp",
    question:
      "Choose the correct form: If he ___ earlier, he wouldn't have missed the bus.",
    options: ["leaves", "left", "had left", "leaving"],
    answer: "had left",
  },
  {
    id: 28,
    category: "Từ vựng",
    question: "What is a synonym for 'fragile'?",
    options: ["Sturdy", "Delicate", "Strong", "Tough"],
    answer: "Delicate",
  },
  {
    id: 29,
    category: "Ngữ pháp",
    question: "Fill in the blank: By the time you arrive, we ___ our work.",
    options: ["will finish", "will have finished", "finish", "finished"],
    answer: "will have finished",
  },
  {
    id: 30,
    category: "Từ vựng",
    question: "What does 'lucid' mean?",
    options: ["Confusing", "Clear", "Dark", "Complex"],
    answer: "Clear",
  },
  {
    id: 31,
    category: "Ngữ pháp",
    question:
      "Choose the correct conditional form: If they ___ harder, they could win the match.",
    options: ["train", "trained", "have trained", "will train"],
    answer: "trained",
  },
  {
    id: 32,
    category: "Từ vựng",
    question: "What is the antonym of 'expand'?",
    options: ["Increase", "Contract", "Extend", "Develop"],
    answer: "Contract",
  },
  {
    id: 33,
    category: "Ngữ pháp",
    question: "Identify the correct use of the past continuous tense.",
    options: [
      "She was reading a book when I called.",
      "She reads books regularly.",
      "She read a book yesterday.",
      "She will read a book tomorrow.",
    ],
    answer: "She was reading a book when I called.",
  },
  {
    id: 34,
    category: "Từ vựng",
    question: "What does 'transparent' mean?",
    options: ["Opaque", "Clear", "Thick", "Colored"],
    answer: "Clear",
  },
  {
    id: 35,
    category: "Ngữ pháp",
    question:
      "Choose the correct form: They ___ dinner by the time we arrived.",
    options: ["finish", "finished", "had finished", "finishing"],
    answer: "had finished",
  },
  {
    id: 36,
    category: "Từ vựng",
    question: "What is a synonym for 'ancient'?",
    options: ["Modern", "Old", "New", "Recent"],
    answer: "Old",
  },
  {
    id: 37,
    category: "Ngữ pháp",
    question: "Fill in the blank: She ___ to the gym every morning.",
    options: ["goes", "go", "gone", "going"],
    answer: "goes",
  },
  {
    id: 38,
    category: "Từ vựng",
    question: "What does 'benevolent' mean?",
    options: ["Malevolent", "Kind", "Harsh", "Strict"],
    answer: "Kind",
  },
  {
    id: 39,
    category: "Ngữ pháp",
    question:
      "Choose the correct conditional form: If I ___ you, I would take the job.",
    options: ["am", "were", "was", "are"],
    answer: "were",
  },
  {
    id: 40,
    category: "Từ vựng",
    question: "What is the antonym of 'scarce'?",
    options: ["Rare", "Abundant", "Limited", "Sparse"],
    answer: "Abundant",
  },
];

export default testQuestions;
