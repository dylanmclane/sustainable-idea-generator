const ideas = [
  {
    number: 1,
    text: "Switch to renewable energy sources like solar or wind power.",
  },
  {
    number: 2,
    text: "Install a rainwater harvesting system.",
  },
  {
    number: 3,
    text: "Utilize energy-efficient LED light bulbs.",
  },
  {
    number: 4,
    text: "Practice composting for kitchen scraps.",
  },
  {
    number: 5,
    text: "Support local farmers and buy organic produce.",
  },
  {
    number: 6,
    text: "Reduce meat consumption and opt for plant-based meals.",
  },
  {
    number: 7,
    text: "Use eco-friendly cleaning products.",
  },
  {
    number: 8,
    text: "Adopt a minimalistic lifestyle and consume less.",
  },
  {
    number: 9,
    text: "Walk, bike, or use public transport instead of driving alone.",
  },
  {
    number: 10,
    text: "Participate in community clean-up events.",
  },
  {
    number: 11,
    text: "Encourage tree planting initiatives in your area.",
  },
  {
    number: 12,
    text: "Invest in energy-efficient appliances.",
  },
  {
    number: 13,
    text: "Use a programmable thermostat to regulate heating and cooling.",
  },
  {
    number: 14,
    text: "Avoid single-use plastics; use reusable water bottles and shopping bags.",
  },
  {
    number: 15,
    text: "Choose products with minimal packaging.",
  },
  {
    number: 16,
    text: "Repair and refurbish items instead of buying new ones.",
  },
  {
    number: 17,
    text: "Support sustainable fashion brands.",
  },
  {
    number: 18,
    text: "Organize or participate in carpooling schemes.",
  },
  {
    number: 19,
    text: "Implement a paper recycling program at home or work.",
  },
  {
    number: 20,
    text: "Encourage electronic communication and reduce paper usage.",
  },
  {
    number: 21,
    text: "Install low-flow showerheads and faucets to save water.",
  },
  {
    number: 22,
    text: "Choose biodegradable and non-toxic personal care products.",
  },
  {
    number: 23,
    text: "Opt for energy-efficient windows and insulation for your home.",
  },
  {
    number: 24,
    text: "Reduce food waste by planning meals and storing food properly.",
  },
  {
    number: 25,
    text: "Invest in solar-powered outdoor lighting.",
  },
  {
    number: 26,
    text: "Utilize natural ventilation whenever possible.",
  },
  {
    number: 27,
    text: "Choose eco-friendly and sustainable furniture.",
  },
  {
    number: 28,
    text: "Volunteer for environmental organizations.",
  },
  {
    number: 29,
    text: "Participate in community gardens.",
  },
  {
    number: 30,
    text: "Implement a 'no idling' policy for vehicles.",
  },
  {
    number: 31,
    text: "Use reusable cloth diapers and wipes.",
  },
  {
    number: 32,
    text: "Educate yourself and others about sustainability.",
  },
  {
    number: 33,
    text: "Support renewable energy initiatives and policies.",
  },
  {
    number: 34,
    text: "Purchase products made from recycled materials.",
  },
  {
    number: 35,
    text: "Participate in electronic waste recycling programs.",
  },
  {
    number: 36,
    text: "Opt for virtual meetings to reduce travel.",
  },
  {
    number: 37,
    text: "Use rechargeable batteries.",
  },
  {
    number: 38,
    text: "Implement a 'green' workspace policy.",
  },
  {
    number: 39,
    text: "Support and promote wildlife conservation efforts.",
  },
  {
    number: 40,
    text: "Utilize eco-friendly, non-toxic pest control methods.",
  },
  {
    number: 41,
    text: "Implement energy-saving practices in the workplace.",
  },
  {
    number: 42,
    text: "Choose sustainable seafood options.",
  },
  {
    number: 43,
    text: "Create a home garden for growing vegetables and herbs.",
  },
  {
    number: 44,
    text: "Use natural, homemade cleaning solutions.",
  },
  {
    number: 45,
    text: "Invest in energy-efficient HVAC systems.",
  },
  {
    number: 46,
    text: "Participate in beach and waterway clean-ups.",
  },
  {
    number: 47,
    text: "Install motion sensor lights to conserve energy.",
  },
  {
    number: 48,
    text: "Use public recycling bins properly.",
  },
  {
    number: 49,
    text: "Implement telecommuting policies at work.",
  },
  {
    number: 50,
    text: "Practice responsible pet ownership.",
  },
  {
    number: 51,
    text: "Switch to electronic billing and payments.",
  },
  {
    number: 52,
    text: "Support businesses with sustainable practices.",
  },
  {
    number: 53,
    text: "Opt for eco-friendly party supplies and decorations.",
  },
  {
    number: 54,
    text: "Host clothing swaps with friends or colleagues.",
  },
  {
    number: 55,
    text: "Advocate for sustainable policies in your community.",
  },
  {
    number: 56,
    text: "Reduce shower time to conserve water.",
  },
  {
    number: 57,
    text: "Practice sustainable forestry by using certified wood products.",
  },
  {
    number: 58,
    text: "Support companies that prioritize ethical and sustainable sourcing.",
  },
  {
    number: 59,
    text: "Encourage schools and workplaces to go paperless.",
  },
  {
    number: 60,
    text: "Choose eco-friendly travel options whenever possible.",
  },
  {
    number: 61,
    text: "Use natural and eco-friendly insect repellents.",
  },
  {
    number: 62,
    text: "Opt for locally sourced and seasonal foods.",
  },
  {
    number: 63,
    text: "Start or participate in a community composting program.",
  },
  {
    number: 64,
    text: "Organize or participate in tree-planting events.",
  },
  {
    number: 65,
    text: "Support renewable energy initiatives in your area.",
  },
  {
    number: 66,
    text: "Choose eco-friendly and sustainable pet products.",
  },
  {
    number: 67,
    text: "Use public water fountains instead of buying bottled water.",
  },
  {
    number: 68,
    text: "Reduce water waste by fixing leaks promptly.",
  },
  {
    number: 69,
    text: "Implement a 'green purchasing' policy for businesses.",
  },
  {
    number: 70,
    text: "Advocate for sustainable agriculture and farming practices.",
  },
  {
    number: 71,
    text: "Participate in energy conservation challenges at home or work.",
  },
  {
    number: 72,
    text: "Support eco-tourism and responsible travel companies.",
  },
  {
    number: 73,
    text: "Implement a 'zero waste' policy in your household.",
  },
  {
    number: 74,
    text: "Participate in local environmental advocacy groups.",
  },
  {
    number: 75,
    text: "Host or join a community repair cafe for items in need of fixing.",
  },
  {
    number: 76,
    text: "Use eco-friendly wrapping options for gifts.",
  },
  {
    number: 77,
    text: "Support companies that prioritize carbon offsetting.",
  },
  {
    number: 78,
    text: "Choose sustainable and eco-friendly office supplies.",
  },
  {
    number: 79,
    text: "Implement a composting program at schools.",
  },
  {
    number: 80,
    text: "Advocate for green building practices and certifications.",
  },
  {
    number: 81,
    text: "Participate in bike-sharing or bike rental programs.",
  },
  {
    number: 82,
    text: "Support wildlife conservation and rehabilitation centers.",
  },
  {
    number: 83,
    text: "Choose reusable and washable cloth alternatives for disposable products.",
  },
  {
    number: 84,
    text: "Participate in community-supported agriculture (CSA) programs.",
  },
  {
    number: 85,
    text: "Promote sustainable waste management in your community.",
  },
  {
    number: 86,
    text: "Support renewable energy research and development.",
  },
  {
    number: 87,
    text: "Implement a green roof or rooftop garden.",
  },
  {
    number: 88,
    text: "Educate children and youth about sustainability.",
  },
  {
    number: 89,
    text: "Advocate for clean energy policies at the local and national levels.",
  },
  {
    number: 90,
    text: "Choose eco-friendly and non-toxic art supplies.",
  },
  {
    number: 91,
    text: "Implement a 'bring your own container' policy for take-out food.",
  },
  {
    number: 92,
    text: "Support and promote sustainable forestry practices.",
  },
  {
    number: 93,
    text: "Participate in or organize eco-friendly events and workshops.",
  },
  {
    number: 94,
    text: "Choose sustainable and fair-trade coffee and tea options.",
  },
  {
    number: 95,
    text: "Advocate for renewable energy tax incentives and subsidies.",
  },
  {
    number: 96,
    text: "Lead by example and inspire others to live sustainably.",
  },
];

// initialize variables
let currentIdeaIndex = 0;
let countdown;
let countdownInterval;

function displayIdea() {
  const ideaContainer = document.getElementById('idea');
  const ideaNumberContainer = document.getElementById('idea-number');
  const countdownTimer = document.getElementById('countdown-timer');

}

function updateCountdown() {
  const countdownTimer = document.getElementById('countdown-timer');

  countdown -= 1;
  countdownTimer.textContent = `New idea in: ${countdown}`  
  if (countdown === 0) {
    clearInterval(countdownInterval);
    displayIdea();
  }
}

const queueSize = 5;
let ideaQueue = [];

function getRandomIdea() {
  let randomIndex = Math.floor(Math.random() * ideas.length);
  let randomIdea = ideas[randomIndex];

  // Ensure the selected idea is not in the queue
  while (ideaQueue.includes(randomIdea)) {
    randomIndex = Math.floor(Math.random() * ideas.length);
    randomIdea = ideas[randomIndex];
  }

  // Add the new idea to the queue
  ideaQueue.push(randomIdea);

  // If the queue exceeds its size limit, remove the oldest idea
  if (ideaQueue.length > queueSize) {
    ideaQueue.shift();
  }

  return randomIdea;
}

function displayIdea() {
  const ideaContainer = document.getElementById('idea');
  const ideaNumberContainer = document.getElementById('idea-number');
  const countdownTimer = document.getElementById('countdown-timer');

  const randomIdea = getRandomIdea();

  ideaNumberContainer.textContent = `Idea #${randomIdea.number}:`;
  ideaContainer.textContent = randomIdea.text;

  countdown = 10;
  countdownTimer.textContent = `New idea in: ${countdown}`;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(updateCountdown, 1000);
}

// Start the app
displayIdea();
