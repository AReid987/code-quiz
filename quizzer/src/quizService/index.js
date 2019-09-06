const qBank = [
  {
    question:
      "Virgian Trains, Virgian Atlantic and Virgian Racing, are all companies owned by which famous entrepreneur?",
    answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionID: "099099"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
