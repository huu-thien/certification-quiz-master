import type { Question } from "../../../types";

export const questionsPSM1: Question[] = [
  {
    id: "psm1-001",
    chapter: 1,
    question: "What is the primary purpose of Scrum?",
    options: [
      "To manage budgets and timelines",
      "To deliver complex products iteratively and incrementally",
      "To eliminate all risks in software development",
      "To ensure zero defects in the final product",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum is designed to deliver complex products iteratively and incrementally, allowing for flexibility and regular feedback.",
    explanationVN: "",
  },
  {
    id: "psm1-002",
    chapter: 1,
    question: "How long is a typical Sprint in Scrum?",
    options: [
      "1 week",
      "2-4 weeks",
      "1-3 months",
      "Until the project is complete",
    ],
    correctAnswer: 1,
    explanation:
      "A Sprint is typically 2-4 weeks long, ideally 2 weeks for most teams to maintain momentum and adaptability.",
    explanationVN: "",
  },
  {
    id: "psm1-003",
    chapter: 1,
    question: "What are the three pillars of Scrum?",
    options: [
      "Plan, Build, Test",
      "Transparency, Inspection, Adaptation",
      "Product, Team, Process",
      "Sprint, Release, Increment",
    ],
    correctAnswer: 1,
    explanation:
      "The three pillars of Scrum are Transparency, Inspection, and Adaptation, which support empirical process control.",
    explanationVN: "",
  },
  {
    id: "psm1-004",
    chapter: 2,
    question: "Who is responsible for maximizing product value?",
    options: [
      "The Scrum Master",
      "The Development Team",
      "The Product Owner",
      "The Stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Owner is responsible for maximizing the value of the product and managing the Product Backlog.",
    explanationVN: "",
  },
  {
    id: "psm1-005",
    chapter: 2,
    question: "What is the primary responsibility of the Scrum Master?",
    options: [
      "Write user stories and prioritize features",
      "Assign tasks to team members",
      "Serve the Scrum Team and facilitate their work",
      "Report status to executive management",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Master serves the Scrum Team and organization by facilitating Scrum processes and removing impediments.",
    explanationVN: "",
  },
  {
    id: "psm1-006",
    chapter: 2,
    question: "What is a characteristic of a self-organizing Development Team?",
    options: [
      "They report directly to the Product Owner",
      "They determine how to accomplish their work without being micromanaged",
      "They meet daily with the executive team",
      "They work on tasks assigned by the Scrum Master",
    ],
    correctAnswer: 1,
    explanation:
      "Self-organizing teams decide internally how to best accomplish their work rather than being directed by others.",
    explanationVN: "",
  },
  {
    id: "psm1-007",
    chapter: 3,
    question: "What is the purpose of the Sprint Planning event?",
    options: [
      "To discuss what went wrong in the previous Sprint",
      "To plan the work to be done in the upcoming Sprint",
      "To monitor team productivity",
      "To assign permanent roles to team members",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint Planning is held to define what can be done in the Sprint and plan the work needed to accomplish the Sprint Goal.",
    explanationVN: "",
  },
  {
    id: "psm1-008",
    chapter: 3,
    question: "Who attends the Sprint Planning meeting?",
    options: [
      "Only the Scrum Master and Product Owner",
      "The entire Scrum Team",
      "Only developers",
      "Management and executives",
    ],
    correctAnswer: 1,
    explanation:
      "The entire Scrum Team, including the Development Team, Scrum Master, and Product Owner, attends Sprint Planning.",
    explanationVN: "",
  },
  {
    id: "psm1-009",
    chapter: 3,
    question: "What is the Daily Standup primarily for?",
    options: [
      "To report status to the Scrum Master",
      "To inspect progress and identify impediments",
      "To assign new tasks",
      "To review code quality",
    ],
    correctAnswer: 1,
    explanation:
      "The Daily Standup allows the team to inspect their progress and identify any impediments that need removal.",
    explanationVN: "",
  },
  {
    id: "psm1-010",
    chapter: 3,
    question: "What is the time-box for the Daily Standup?",
    options: ["15 minutes", "30 minutes", "45 minutes", "1 hour"],
    correctAnswer: 0,
    explanation:
      "The Daily Standup is time-boxed to 15 minutes regardless of the team size.",
    explanationVN: "",
  },
  {
    id: "psm1-011",
    chapter: 3,
    question: "What is the purpose of Sprint Review?",
    options: [
      "To critique team members' performance",
      "To inspect the increment and gather feedback",
      "To plan the next release",
      "To celebrate completed tasks",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint Review is an inspection of the increment and a gathering of feedback to inform the next steps.",
    explanationVN: "",
  },
  {
    id: "psm1-012",
    chapter: 3,
    question: "Who should attend the Sprint Review?",
    options: [
      "Only the Development Team",
      "The Scrum Team and key stakeholders",
      "Management only",
      "The Product Owner and Scrum Master only",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Team and stakeholders attend Sprint Review to inspect the increment and provide feedback.",
    explanationVN: "",
  },
  {
    id: "psm1-013",
    chapter: 3,
    question: "What is the focus of Sprint Retrospective?",
    options: [
      "Reviewing completed features",
      "Inspecting the Product Backlog",
      "Identifying ways to improve team processes",
      "Planning the next Sprint's features",
    ],
    correctAnswer: 2,
    explanation:
      "Sprint Retrospective focuses on how the team can improve their processes and become more effective.",
    explanationVN: "",
  },
  {
    id: "psm1-014",
    chapter: 3,
    question:
      "What is the time-box for Sprint Review and Retrospective combined?",
    options: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: 2,
    explanation:
      "For a 2-week Sprint, Sprint Review and Retrospective are typically time-boxed to 3 hours combined (1.5 hours each).",
    explanationVN: "",
  },
  {
    id: "psm1-015",
    chapter: 4,
    question: "What is the Product Backlog?",
    options: [
      "A list of completed features",
      "An ordered list of features that may be built into the product",
      "A document describing team members",
      "A list of bugs found in testing",
    ],
    correctAnswer: 1,
    explanation:
      "The Product Backlog is an ordered list of everything that might be needed in the product, managed by the Product Owner.",
    explanationVN: "",
  },
  {
    id: "psm1-016",
    chapter: 4,
    question: "Who owns the Product Backlog?",
    options: [
      "The Development Team",
      "The Scrum Master",
      "The Product Owner",
      "The Stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Owner is responsible for the Product Backlog and its content, ordering, and availability.",
    explanationVN: "",
  },
  {
    id: "psm1-017",
    chapter: 4,
    question: "What is a Sprint Backlog?",
    options: [
      "All items in the Product Backlog",
      "Items selected for the Sprint plus the plan to achieve the Sprint Goal",
      "Items that failed in the previous Sprint",
      "Features planned for future releases",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint Backlog is the set of items selected for the Sprint plus the plan to deliver them to achieve the Sprint Goal.",
    explanationVN: "",
  },
  {
    id: "psm1-018",
    chapter: 4,
    question: "Who creates the Sprint Backlog?",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Development Team",
      "Management",
    ],
    correctAnswer: 2,
    explanation:
      "The Development Team creates the Sprint Backlog by selecting items from the Product Backlog and defining tasks.",
    explanationVN: "",
  },
  {
    id: "psm1-019",
    chapter: 4,
    question: "What is the Increment?",
    options: [
      "The total project cost",
      "The sum of all completed features in a Sprint",
      "The amount of time saved",
      "The number of bugs fixed",
    ],
    correctAnswer: 1,
    explanation:
      "The Increment is the sum of all Product Backlog items completed during the Sprint and all previous Sprints.",
    explanationVN: "",
  },
  {
    id: "psm1-020",
    chapter: 1,
    question: "What does 'Done' mean in Scrum?",
    options: [
      "The task is not yet reviewed",
      "The feature meets the Definition of Done and is ready for release",
      "The developer thinks the work is finished",
      "The code compiles without errors",
    ],
    correctAnswer: 1,
    explanation:
      "Done means that the Increment meets the team's Definition of Done and is releasable.",
    explanationVN: "",
  },
  {
    id: "psm1-021",
    chapter: 1,
    question: "What is a Sprint Goal?",
    options: [
      "To complete as many items as possible",
      "A concise statement of the objective for the Sprint",
      "To reduce team meetings",
      "To ensure all backlog items are completed",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint Goal is a concise statement of the purpose of the Sprint and what the team wants to achieve.",
    explanationVN: "",
  },
  {
    id: "psm1-022",
    chapter: 2,
    question: "What is the ideal size of a Scrum Team?",
    options: [
      "Individual contributor",
      "3-9 people",
      "15-20 people",
      "More than 20 people",
    ],
    correctAnswer: 1,
    explanation:
      "The ideal Scrum Team size is 3-9 people, small enough to remain nimble and large enough to complete significant work.",
    explanationVN: "",
  },
  {
    id: "psm1-023",
    chapter: 2,
    question:
      "Who is responsible for removing obstacles from the Development Team?",
    options: [
      "The Product Owner",
      "The Development Team itself",
      "The Scrum Master",
      "External stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Master is responsible for removing obstacles (impediments) that impede the Development Team's progress.",
    explanationVN: "",
  },
  {
    id: "psm1-024",
    chapter: 3,
    question: "When should the Sprint Backlog be updated?",
    options: [
      "Only at the end of the Sprint",
      "Only during Sprint Planning",
      "Continuously during the Sprint as work progresses",
      "Weekly by the Scrum Master",
    ],
    correctAnswer: 2,
    explanation:
      "Sprint Backlog should be updated continuously as the team discovers new work and completes tasks.",
    explanationVN: "",
  },
  {
    id: "psm1-025",
    chapter: 4,
    question: "What is backlog refinement?",
    options: [
      "Removing all backlog items older than 3 months",
      "Updating backlog items to ensure they are clear and ready for Sprint Planning",
      "Assigning Sprints to backlog items",
      "Deleting unimportant items",
    ],
    correctAnswer: 1,
    explanation:
      "Backlog refinement involves updating backlog items to ensure clarity, appropriateness, and readiness for selection.",
    explanationVN: "",
  },
  {
    id: "psm1-026",
    chapter: 1,
    question: "What is empiricism in Scrum?",
    options: [
      "Following a fixed plan exactly",
      "Making decisions based on observation and experimentation",
      "Relying on historical data only",
      "Avoiding any changes during development",
    ],
    correctAnswer: 1,
    explanation:
      "Empiricism means making decisions based on real observation and feedback rather than assumptions.",
    explanationVN: "",
  },
  {
    id: "psm1-027",
    chapter: 2,
    question:
      "What should a Development Team do if they disagree with Product Owner decisions?",
    options: [
      "Refuse to work on the items",
      "Share their concerns respectfully and work to find the best solution",
      "Ignore the decision and work independently",
      "Escalate to management immediately",
    ],
    correctAnswer: 1,
    explanation:
      "The team should communicate concerns professionally while respecting the Product Owner's authority over product decisions.",
    explanationVN: "",
  },
  {
    id: "psm1-028",
    chapter: 3,
    question: "Who can add items to the Sprint Backlog during a Sprint?",
    options: [
      "Only the Product Owner",
      "Only the Scrum Master",
      "The entire Scrum Team by consensus",
      "Any stakeholder",
    ],
    correctAnswer: 2,
    explanation:
      "The entire Scrum Team can identify and pull new work, but items should be added thoughtfully to protect the Sprint Goal.",
    explanationVN: "",
  },
  {
    id: "psm1-029",
    chapter: 4,
    question: "What does the Definition of Done protect?",
    options: [
      "The team's schedule",
      "The product quality and stakeholder expectations",
      "The budget",
      "The number of features released",
    ],
    correctAnswer: 1,
    explanation:
      "Definition of Done ensures quality standards and sets clear expectations for what 'complete' means.",
    explanationVN: "",
  },
  {
    id: "psm1-030",
    chapter: 1,
    question: "Can a Sprint be canceled?",
    options: [
      "Never, once started a Sprint cannot be canceled",
      "Yes, only by the Product Owner",
      "Yes, by the Scrum Master",
      "Yes, only if all team members agree",
    ],
    correctAnswer: 1,
    explanation:
      "Only the Product Owner can cancel a Sprint, typically if the Sprint Goal becomes obsolete.",
    explanationVN: "",
  },
  {
    id: "psm1-031",
    chapter: 1,
    question: "What happens to incomplete items at the end of a Sprint?",
    options: [
      "They are automatically completed in the next Sprint",
      "They are removed from the backlog",
      "They return to the Product Backlog to be re-evaluated",
      "They become priority items in the next Sprint",
    ],
    correctAnswer: 2,
    explanation:
      "Incomplete items return to the Product Backlog where they can be re-estimated and prioritized.",
    explanationVN: "",
  },
  {
    id: "psm1-032",
    chapter: 2,
    question:
      "How should a Scrum Master handle a team member who is consistently late?",
    options: [
      "Report the issue to the Product Owner",
      "Discuss it privately and work with the team to address it as a team issue",
      "Ignore it to avoid confrontation",
      "Document it for performance review",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum Masters facilitate resolution by helping the team address issues collectively and supportively.",
    explanationVN: "",
  },
  {
    id: "psm1-033",
    chapter: 3,
    question: "What is the recommended frequency for backlog refinement?",
    options: [
      "Once per release",
      "Once per month",
      "Ongoing activity throughout the Sprint",
      "Only during Sprint Planning",
    ],
    correctAnswer: 2,
    explanation:
      "Backlog refinement is an ongoing collaborative activity between the team and Product Owner.",
    explanationVN: "",
  },
  {
    id: "psm1-034",
    chapter: 4,
    question: "What is the purpose of velocity in Scrum?",
    options: [
      "To measure individual developer productivity",
      "To measure how much work the team completes and for forecasting",
      "To determine which team members are fastest",
      "To calculate the cost per feature",
    ],
    correctAnswer: 1,
    explanation:
      "Velocity measures the amount of work completed per Sprint and helps the team forecast future capacity.",
    explanationVN: "",
  },
  {
    id: "psm1-035",
    chapter: 1,
    question: "What is NOT a role in Scrum?",
    options: [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Project Manager",
    ],
    correctAnswer: 3,
    explanation:
      "Scrum defines three roles: Product Owner, Scrum Master, and Development Team. Project Manager is not a Scrum role.",
    explanationVN: "",
  },
  {
    id: "psm1-036",
    chapter: 2,
    question: "What is the Product Owner's relationship with stakeholders?",
    options: [
      "The Product Owner isolates the team from stakeholders",
      "The Product Owner represents the product to stakeholders and stakeholders to the team",
      "There is no relationship",
      "Stakeholders directly manage the team",
    ],
    correctAnswer: 1,
    explanation:
      "The Product Owner bridges communication between stakeholders and the Development Team.",
    explanationVN: "",
  },
  {
    id: "psm1-037",
    chapter: 3,
    question: "Should the Daily Standup be the only synchronization meeting?",
    options: [
      "Yes, it is sufficient for all communication",
      "No, other meetings may be needed as appropriate",
      "Yes, additional meetings waste time",
      "Only if approved by the Scrum Master",
    ],
    correctAnswer: 1,
    explanation:
      "While Daily Standup is essential, the team may have other meetings as needed for collaboration.",
    explanationVN: "",
  },
  {
    id: "psm1-038",
    chapter: 4,
    question: "What makes a good user story in Scrum?",
    options: [
      "As detailed as possible in technical terms",
      "Written with business language, independent, testable, and valuable",
      "Only requirements from management",
      "As large as possible to save time",
    ],
    correctAnswer: 1,
    explanation:
      "Good user stories are written in business language, are independent, small, testable, and provide clear value.",
    explanationVN: "",
  },
  {
    id: "psm1-039",
    chapter: 1,
    question: "What is meant by 'releasable' increment?",
    options: [
      "The code compiles",
      "All team members have reviewed it",
      "It meets the Definition of Done and could be released if the business decides",
      "The Product Owner has signed off on all details",
    ],
    correctAnswer: 2,
    explanation:
      "A releasable increment is potentially shippable and meets the established Definition of Done.",
    explanationVN: "",
  },
  {
    id: "psm1-040",
    chapter: 2,
    question:
      "How should a Scrum Master respond to a manager requesting individual task assignments?",
    options: [
      "Assign tasks as requested by the manager",
      "Explain that the team self-organizes and ask the manager to work through the Product Owner",
      "Create a detailed task list for each person",
      "Escalate to senior leadership immediately",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum Masters protect the team's self-organization while explaining Scrum principles to stakeholders.",
    explanationVN: "",
  },
  {
    id: "psm1-041",
    chapter: 3,
    question: "What should happen if a team member cannot finish their task?",
    options: [
      "The task is completed in the next Sprint automatically",
      "The task is marked as failed",
      "The team discusses it and updates the Sprint Backlog",
      "The team member works overtime",
    ],
    correctAnswer: 2,
    explanation:
      "The team discusses the situation and transparently updates the Sprint Backlog.",
    explanationVN: "",
  },
  {
    id: "psm1-042",
    chapter: 4,
    question: "Should the Product Backlog be sorted by any criteria?",
    options: [
      "No, random order is fine",
      "Yes, ordered by priority and value",
      "Yes, by effort estimate only",
      "Yes, by team member preference",
    ],
    correctAnswer: 1,
    explanation:
      "Product Backlog should be ordered by priority and value to ensure the most important work is visible and done first.",
    explanationVN: "",
  },
  {
    id: "psm1-043",
    chapter: 1,
    question: "Can Scrum work for non-software projects?",
    options: [
      "No, Scrum is only for software development",
      "Yes, Scrum principles apply to any complex work",
      "Only for large projects",
      "Only when combined with Waterfall",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum principles are applicable to any complex, innovative work, not just software.",
    explanationVN: "",
  },
  {
    id: "psm1-044",
    chapter: 2,
    question:
      "What is the primary difference between a traditional manager and a Scrum Master?",
    options: [
      "No difference, they are the same role",
      "Scrum Master facilitates and serves; manager directs and controls",
      "Scrum Master pays salaries",
      "Manager handles budgets only",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum Masters facilitate and serve the team; they don't have traditional command and control authority.",
    explanationVN: "",
  },
  {
    id: "psm1-045",
    chapter: 3,
    question: "Who decides what work will be done in the Sprint?",
    options: [
      "The Product Owner alone",
      "The Scrum Master alone",
      "The Development Team and Product Owner collaboratively",
      "Management",
    ],
    correctAnswer: 2,
    explanation:
      "The Development Team and Product Owner collaborate during Sprint Planning to decide what work will be done.",
    explanationVN: "",
  },
  {
    id: "psm1-046",
    chapter: 4,
    question: "What is technical debt?",
    options: [
      "Money borrowed by the company",
      "The cost of late deliveries",
      "Work accumulated from taking shortcuts, needing future effort to address",
      "Bugs found after release",
    ],
    correctAnswer: 2,
    explanation:
      "Technical debt represents work that was deferred or shortcuts taken that will require future effort to address.",
    explanationVN: "",
  },
  {
    id: "psm1-047",
    chapter: 1,
    question: "Does Scrum require written documentation?",
    options: [
      "Yes, extensive documentation is mandatory",
      "No, no documentation is allowed",
      "No more than necessary; working software is prioritized over comprehensive documentation",
      "Only for non-software projects",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum values working product over comprehensive documentation, but necessary documentation is not prohibited.",
    explanationVN: "",
  },
  {
    id: "psm1-048",
    chapter: 2,
    question: "Can the Development Team have part-time members?",
    options: [
      "Allowed, no restrictions",
      "Allowed, but can reduce effectiveness and focus",
      "Not allowed, all members must be full-time",
      "Only the Scrum Master can be part-time",
    ],
    correctAnswer: 1,
    explanation:
      "While part-time members are technically possible, full-time commitment enhances team effectiveness and focus.",
    explanationVN: "",
  },
  {
    id: "psm1-049",
    chapter: 3,
    question:
      "What should be done if the Sprint Goal becomes unachievable mid-Sprint?",
    options: [
      "Ignore it and continue work",
      "The team discusses it; the Product Owner may cancel the Sprint",
      "Always extend the Sprint",
      "The team should work weekends",
    ],
    correctAnswer: 1,
    explanation:
      "The team and Product Owner should discuss if the Sprint should continue or be canceled if the Goal becomes unachievable.",
    explanationVN: "",
  },
  {
    id: "psm1-050",
    chapter: 4,
    question: "How are items estimated in Scrum?",
    options: [
      "The Product Owner estimates all items",
      "The Development Team estimates items they will work on, considering complexity and effort",
      "Items are estimated by time (days/hours)",
      "Large items need not be estimated",
    ],
    correctAnswer: 1,
    explanation:
      "The Development Team estimates items using relative sizing (story points) to account for complexity.",
    explanationVN: "",
  },
  {
    id: "psm1-051",
    chapter: 1,
    question:
      "What is the relationship between transparency and trust in Scrum?",
    options: [
      "They are unrelated",
      "Transparency builds trust among team members and stakeholders",
      "Trust eliminates the need for transparency",
      "Only transparency matters",
    ],
    correctAnswer: 1,
    explanation:
      "Transparency (sharing information openly) builds the trust necessary for effective collaboration.",
    explanationVN: "",
  },
  {
    id: "psm1-052",
    chapter: 2,
    question: "How should a Scrum Master handle conflicts within the team?",
    options: [
      "Ignore them hoping they resolve",
      "Take sides with dominant personalities",
      "Facilitate discussion to help the team resolve conflicts constructively",
      "Implement rules to prevent all disagreement",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum Masters facilitate healthy conflict resolution while maintaining team harmony.",
    explanationVN: "",
  },
  {
    id: "psm1-053",
    chapter: 3,
    question: "What is the purpose of the Sprint Planning event time-boxing?",
    options: [
      "To save time and rush planning",
      "To limit discussion and force quick decisions",
      "To encourage focused, efficient planning within defined boundaries",
      "To prevent the team from discussing important items",
    ],
    correctAnswer: 2,
    explanation:
      "Time-boxing ensures planning is focused and efficient without allowing endless discussion.",
    explanationVN: "",
  },
  {
    id: "psm1-054",
    chapter: 4,
    question: "What should be included in the Definition of Done?",
    options: [
      "Only code compilation",
      "Code review, testing, documentation, and any other criteria the team agrees on",
      "Only testing",
      "Whatever the Product Owner decides that day",
    ],
    correctAnswer: 1,
    explanation:
      "Definition of Done should comprehensively define all work required for an item to be considered complete.",
    explanationVN: "",
  },
  {
    id: "psm1-055",
    chapter: 1,
    question: "How does Scrum handle uncertainty?",
    options: [
      "By planning everything in detail upfront",
      "By accepting uncertainty and using regular inspection and adaptation",
      "By avoiding risky projects",
      "By requiring all decisions from management",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum embraces uncertainty and responds to it through regular inspection and adaptation cycles.",
    explanationVN: "",
  },
  {
    id: "psm1-056",
    chapter: 2,
    question: "What should happen if a team member doesn't have enough work?",
    options: [
      "They wait for more work",
      "They help others or work with the Product Owner to refinement",
      "They are assigned other projects",
      "They take extended breaks",
    ],
    correctAnswer: 1,
    explanation:
      "Team members should help teammates or contribute to backlog refinement to maintain momentum.",
    explanationVN: "",
  },
  {
    id: "psm1-057",
    chapter: 3,
    question: "How often should progress be discussed in Scrum?",
    options: [
      "Once per Sprint",
      "Once per month",
      "Daily in standups and formally in Reviews",
      "Only at project end",
    ],
    correctAnswer: 2,
    explanation:
      "Progress is discussed daily in standups and formally reviewed with stakeholders in Sprint Review.",
    explanationVN: "",
  },
  {
    id: "psm1-058",
    chapter: 4,
    question: "What makes an item 'ready' for Sprint Planning?",
    options: [
      "It has a title",
      "The Product Owner has ordered it",
      "It is clear, estimated, and refined enough for team selection",
      "Only features can be ready",
    ],
    correctAnswer: 2,
    explanation:
      "Ready items are well-understood, appropriately sized, and have sufficient detail for the team to start work.",
    explanationVN: "",
  },
  {
    id: "psm1-059",
    chapter: 1,
    question: "Can Scrum exist without a Product Owner?",
    options: [
      "Yes, the Scrum Master can fill this role",
      "Yes, team votes on priorities",
      "No, Product Owner is an essential, distinct role",
      "Yes, if the team is small enough",
    ],
    correctAnswer: 2,
    explanation:
      "Product Owner is an essential role in Scrum and cannot be effectively combined with other roles.",
    explanationVN: "",
  },
  {
    id: "psm1-060",
    chapter: 2,
    question: "How should feedback from stakeholders be handled?",
    options: [
      "Ignored if it contradicts the plan",
      "Immediately implemented",
      "Given to the Product Owner who prioritizes it in the backlog",
      "Only accepted at the end of the project",
    ],
    correctAnswer: 2,
    explanation:
      "Stakeholder feedback goes to the Product Owner who determines its priority in the backlog.",
    explanationVN: "",
  },
  {
    id: "psm1-061",
    chapter: 3,
    question:
      "What should happen if the team realizes they can't complete all Sprint items?",
    options: [
      "Work extra hours to finish",
      "Inform the Product Owner and discuss what can be completed",
      "Remove quality checks to go faster",
      "Blame the Product Owner",
    ],
    correctAnswer: 1,
    explanation:
      "The team should transparently communicate with the Product Owner and focus on completing items fully rather than rushing.",
    explanationVN: "",
  },
  {
    id: "psm1-062",
    chapter: 4,
    question: "What is the purpose of Sprint metrics?",
    options: [
      "To evaluate individual performance",
      "To pressure the team to work faster",
      "To provide data for improvement and forecasting",
      "To justify budget",
    ],
    correctAnswer: 2,
    explanation:
      "Metrics help the team understand their performance and improve incrementally.",
    explanationVN: "",
  },
  {
    id: "psm1-063",
    chapter: 1,
    question: "What is the most important attribute of a Scrum Team?",
    options: [
      "Large budget",
      "Skilled individuals",
      "Self-organization and collaboration toward a common goal",
      "Advanced tools",
    ],
    correctAnswer: 2,
    explanation:
      "Self-organization and collaboration are more important than individual skill level in determining team success.",
    explanationVN: "",
  },
  {
    id: "psm1-064",
    chapter: 2,
    question: "What should a Scrum Master ensure about the team environment?",
    options: [
      "Everyone works in the same office",
      "Quiet and without distractions",
      "Safe, respectful, and conducive to productivity",
      "Using only specific tools",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum Masters should ensure a psychologically safe environment where people feel comfortable collaborating.",
    explanationVN: "",
  },
  {
    id: "psm1-065",
    chapter: 3,
    question: "How and when is the Sprint Goal created?",
    options: [
      "Created by the Scrum Master before Sprint Planning",
      "Created collaboratively by the team and Product Owner during Sprint Planning",
      "It's the same as the Product Backlog description",
      "Decided by the first person to arrive",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint Goal is created collaboratively during Sprint Planning as the team and Product Owner plan the Sprint.",
    explanationVN: "",
  },
  {
    id: "psm1-066",
    chapter: 4,
    question: "What happens to Product Backlog items that are never selected?",
    options: [
      "They are automatically deleted",
      "They remain prioritized in case needed",
      "The Product Owner should periodically review and remove obsolete items",
      "They are automatically moved to the Sprint Backlog",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Owner should regularly review the backlog and remove items that are no longer valuable.",
    explanationVN: "",
  },
  {
    id: "psm1-067",
    chapter: 1,
    question: "Is there a difference between Scrum and Agile?",
    options: [
      "They are the same thing",
      "Scrum is a framework; Agile is a broader set of values and principles",
      "Agile is more rigid than Scrum",
      "Scrum is for software, Agile is not",
    ],
    correctAnswer: 1,
    explanation:
      "Agile is a broader philosophy; Scrum is a specific framework that implements Agile principles.",
    explanationVN: "",
  },
  {
    id: "psm1-068",
    chapter: 2,
    question: "Should the Scrum Master write code?",
    options: [
      "Yes, this is part of their responsibility",
      "No, they should only manage",
      "Not typically; they focus on removing impediments, not technical work",
      "Only if there's an emergency",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum Masters focus on facilitating and removing impediments rather than technical contribution.",
    explanationVN: "",
  },
  {
    id: "psm1-069",
    chapter: 3,
    question: "What is the relationship between Daily Standup and Daily Scrum?",
    options: [
      "They are different concepts",
      "They are the same event",
      "Daily Scrum is the official term; Daily Standup is informal",
      "One is for developers, one for managers",
    ],
    correctAnswer: 1,
    explanation:
      "Daily Scrum (official term) and Daily Standup are names for the same 15-minute event.",
    explanationVN: "",
  },
  {
    id: "psm1-070",
    chapter: 4,
    question: "What should be visible on the Sprint Board?",
    options: [
      "Only completed items",
      "Sprint Backlog items with their status (To Do, In Progress, Done)",
      "All Product Backlog items",
      "Personal task assignments",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint Board should show all Sprint Backlog items and their current status for transparency.",
    explanationVN: "",
  },
  {
    id: "psm1-071",
    chapter: 1,
    question: "How does Scrum handle change requests?",
    options: [
      "All changes are immediately implemented",
      "Changes are never allowed",
      "Product Owner prioritizes new items into the Product Backlog",
      "Only technical changes are allowed",
    ],
    correctAnswer: 2,
    explanation:
      "Change requests are evaluated and added to the Product Backlog where they can be prioritized appropriately.",
    explanationVN: "",
  },
  {
    id: "psm1-072",
    chapter: 2,
    question: "Can someone hold multiple Scrum roles?",
    options: [
      "Not allowed; each role must be distinct",
      "Yes, someone can be both Product Owner and on the Development Team",
      "Yes, one person can fill all roles",
      "Only in small teams can roles overlap",
    ],
    correctAnswer: 1,
    explanation:
      "In small teams, non-Scrum Master roles can overlap, but the Scrum Master role should remain separate to maintain neutrality.",
    explanationVN: "",
  },
  {
    id: "psm1-073",
    chapter: 3,
    question: "What is the purpose of the Sprint Board or Burndown Chart?",
    options: [
      "To track individual productivity",
      "To show progress toward the Sprint Goal",
      "To assign blame for delays",
      "To report to external management",
    ],
    correctAnswer: 1,
    explanation:
      "Sprint progress tools help the team see if they're on track to complete the Sprint Goal.",
    explanationVN: "",
  },
  {
    id: "psm1-074",
    chapter: 4,
    question: "How should the Product Owner prioritize items?",
    options: [
      "Based on team requests",
      "Based on effort estimate",
      "Based on business value, risk, dependencies, and stakeholder feedback",
      "Randomly",
    ],
    correctAnswer: 2,
    explanation:
      "Product Owner should consider business value, dependencies, risk, and stakeholder input when prioritizing.",
    explanationVN: "",
  },
  {
    id: "psm1-075",
    chapter: 1,
    question: "What is continuous improvement in Scrum context?",
    options: [
      "Never changing the process",
      "Only improving product features",
      "Regularly improving team processes through retrospectives",
      "Improving only when things break",
    ],
    correctAnswer: 2,
    explanation:
      "Continuous improvement occurs through Sprint Retrospectives where the team identifies and implements process improvements.",
    explanationVN: "",
  },
  {
    id: "psm1-076",
    chapter: 2,
    question: "What is the Scrum Master's stance toward rules and process?",
    options: [
      "Enforce rules rigidly",
      "Ignore Scrum rules as outdated",
      "Teach and guard Scrum practices while being open to team-driven improvements",
      "Let teams decide all rules",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum Masters teach Scrum while enabling teams to adapt practices that work for them.",
    explanationVN: "",
  },
  {
    id: "psm1-077",
    chapter: 3,
    question: "Should external stakeholders attend Daily Standup?",
    options: [
      "Yes, they should always attend",
      "No, never allowed",
      "Generally no; it's a team synchronization meeting",
      "Only management may attend",
    ],
    correctAnswer: 2,
    explanation:
      "Daily Standup is primarily for the team; stakeholders may be invited to Sprint Review instead.",
    explanationVN: "",
  },
  {
    id: "psm1-078",
    chapter: 4,
    question: "What is backlog grooming?",
    options: [
      "Deleting old items",
      "Same as backlog refinement: updating items for clarity and readiness",
      "Only for small teams",
      "A one-time activity",
    ],
    correctAnswer: 1,
    explanation:
      "Backlog grooming (or refinement) is an ongoing activity to ensure backlog items are clear and ready.",
    explanationVN: "",
  },
  {
    id: "psm1-079",
    chapter: 1,
    question: "What is the purpose of iteration in Scrum?",
    options: [
      "To extend the project timeline",
      "To repeat work unnecessarily",
      "To provide regular feedback opportunities and deliver incremental value",
      "To slow down development",
    ],
    correctAnswer: 2,
    explanation:
      "Iteration allows the team to deliver value incrementally and incorporate feedback regularly.",
    explanationVN: "",
  },
  {
    id: "psm1-080",
    chapter: 2,
    question: "How should a Product Owner be chosen?",
    options: [
      "Automatically the manager",
      "Someone with business knowledge, customer understanding, and decision-making authority",
      "The person with the most technical skills",
      "Rotated monthly",
    ],
    correctAnswer: 1,
    explanation:
      "Product Owner should have business acumen, customer insight, and the authority to make product decisions.",
    explanationVN: "",
  },
];
