// Auto-generated - PSM1 Questions from Udemy
// Course: Professional Scrum Master (PSM) Certification Preparation
// Date: 2026-03-04T16:19:37.363Z
// Total: 1002 unique questions across 6 Practice Tests

export interface QuestionPSM1 {
  id: string;
  chapter: number; // practice test number (1-6)
  question: string;
  options?: string[];
  correctAnswer?: number; // 0-based index
  correctAnswers?: number[]; // for multi-select
  isMultiSelect?: boolean;
  explanation?: string;
  explanationVN?: string;
}

// alias to keep backwards compatibility if anyone imported `Question` directly
export type Question = QuestionPSM1;

// Practice Test #1 — 180 questions
export const questionsPracticeTest1: Question[] = [
  {
    id: "75ad1782-2662-4af5-9de5-03a23183b2ee",
    chapter: 1,
    question:
      "Who is responsible for sizing the Product Backlog Items?\n(choose the best answer)",
    options: [
      "The Product Owner, through discussions with the Project Manager.",
      "The Scrum Master.",
      "The Developers, independently.",
      "The Developers, after having the Product Backlog items clarified by the Product Owner.",
      "The project manager.",
    ],
    correctAnswer: 3,
    explanation:
      "The responsibility for sizing the Product Backlog Items lies with the Developers. They should engage in discussions with the Product Owner to clarify the items and gain a shared understanding. Based on their technical expertise and understanding of the work, the Developers can then determine the effort or size required for each Product Backlog Item. This helps in planning and prioritizing the work during Sprint Planning and facilitates the team's commitment to delivering the selected items within the Sprint.",
  },
  {
    id: "9efe5b20-3b1f-4a70-8939-dc733368de3c",
    chapter: 1,
    question:
      "What is the purpose of having a Sprint Goal for the Developers?\n(choose the best answer)",
    options: [
      "A Sprint Goal is only relevant for the first Sprint.",
      "The Sprint Goal is not needed. Having a clear and well-defined Product Goal is enough.",
      "A Sprint Goal guarantees that all Product Backlog items selected for the Sprint are completed.",
      "The Developers can work more effectively with a specific and common objective.",
    ],
    correctAnswer: 3,
    explanation:
      "Having a Sprint Goal provides the Developers with a clear focus and direction for their work during the Sprint. It helps them align their efforts and prioritize their tasks to achieve the defined objective. By having a Sprint Goal, the Developers can work more collaboratively and efficiently, making informed decisions about how to best deliver value and meet the goal. The Sprint Goal also serves as a guiding principle for the team's decision-making and provides a sense of purpose and coherence to their work throughout the Sprint.",
  },
  {
    id: "f2944a53-4fff-4c18-b38e-8f20f5d117c0",
    chapter: 1,
    question:
      "What is the accountability of management in relation to a Scrum Team?\n(choose the best answer)",
    options: [
      "To identify and dismiss team members who are not performing well.",
      "Management is responsible for creating an environment that supports the self-managing and empowerment of the Scrum Team, such as providing resources and insights to help them improve.",
      "To assign tasks to the Developers.",
      "To constantly monitor the staffing levels of the Scrum Team.",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, the accountability of management in relation to a Scrum Team is to create an environment that enables the team to self-manage and be empowered. This means that management should provide the necessary resources, support, and insights to help the team succeed. Instead of assigning tasks to the Developers or tracking their productivity, management focuses on enabling the team to take ownership of their work and make decisions collectively. By fostering a culture of trust and collaboration, management facilitates the team's ability to deliver value and continuously improve. Monitoring staffing levels is not the primary accountability of management in Scrum, as the team is responsible for self-managing and determining the most effective way to accomplish their work.",
  },
  {
    id: "caf36681-9c1d-4b80-8624-cc0e5add9d59",
    chapter: 1,
    question:
      "True or False: When several Scrum Teams are working on the same product, they all choose their work from a common Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, if multiple Scrum Teams are working on the same product, they must have a shared Product Backlog. This ensures that all teams are aligned and working towards the same goal.",
  },
  {
    id: "806294d6-4514-426e-b3a0-cec35c31a8fc",
    chapter: 1,
    question:
      "What is an important consideration when determining the length of a Sprint?\n(choose the best answer)",
    options: [
      "The organization's policy on Sprint length.",
      "The team's ability to learn from their work and its outcomes.",
      "The availability of the team members.",
      "The schedule for releasing products within the organization.",
    ],
    correctAnswer: 1,
    explanation:
      "When determining the length of a Sprint, it is important to consider the team's ability to learn from their work and its outcomes. The length of the Sprint should allow for a meaningful cycle of work, where the team can complete, review, and reflect on their work to gather feedback and make improvements. By having a suitable Sprint duration, the team can maximize their learning, adapt their approach, and continuously improve their processes and outcomes. While factors such as the organization's policy, team member availability, and release schedules may influence the Sprint length to some extent, the primary focus should be on creating a time frame that enables effective learning and iterative development.",
  },
  {
    id: "9d0125e0-1872-4d83-9878-20759a7b023b",
    chapter: 1,
    question:
      "True or False: When several Scrum Teams are working on the same product, each team should have its own Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, if multiple Scrum Teams are working on the same product, they must have a shared Product Backlog. This ensures that all teams are aligned and working towards the same goal.",
  },
  {
    id: "72459f88-3502-4ecc-a34e-df6a5ecd5d83",
    chapter: 1,
    question:
      "During a Sprint Retrospective, the Developers suggest holding the Daily Scrum only on Mondays and Wednesdays. What are the two most appropriate actions for the Scrum Master to take?\n(choose the best two answers)",
    options: [
      "Guide the team on the significance of the Daily Scrum as a chance to revise their plan.",
      "Evaluate the proposal and determine which days the Daily Scrum should occur.",
      "Understand why the Developers want this change and collaborate with them to enhance the results of the Daily Scrum.",
      "Respect and support the decision made by the self-managing team.",
      "Ask the Developers to discuss and make a decision backed by the majority.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "The Scrum Master plays a crucial role in facilitating effective communication and collaboration within the team. By guiding the team's understanding of the Daily Scrum's significance and actively engaging with them to improve its outcomes, the Scrum Master helps foster transparency, alignment, and continuous improvement in the Scrum process.",
  },
  {
    id: "c9f97a6d-5d27-4328-8ad8-2ccbbd177d34",
    chapter: 1,
    question:
      "Several Developers on one of the eighth new Scrum Teams working on a single product ask the Scrum Master how to coordinate their efforts with the other teams. What should the Scrum Master do?\n(choose the best answer)",
    options: [
      "Gather the Sprint tasks from each team after their Sprint Planning and combine them into a single plan for the entire Sprint.",
      "Make sure the teams have their Sprint Backlogs synced daily.",
      "Coach the lead Developers to work closely with the Product Owner to minimize dependencies between teams during the Sprints.",
      "Coach them that it is their responsibility to work with the other teams to produce an Integrated Increment that includes the work of all eight teams every Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, it is the responsibility of the Developers to coordinate their work with other teams to create an Integrated Increment. The Scrum Master should teach the Developers about this responsibility and help them to collaborate effectively with the other teams.",
  },
  {
    id: "05991ae1-9743-4541-9db7-0b4c41aba401",
    chapter: 1,
    question:
      "What are suitable subjects for discussion during a Sprint Retrospective?\n(choose the best three answers)",
    options: [
      "Organizing the Sprint Backlog for the upcoming Sprint.",
      "Refining the Product Backlog.",
      "The Definition of Done.",
      "Relationships between the team members.",
      "The Sprint length.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3, 4],
    isMultiSelect: true,
    explanation:
      "During a Sprint Retrospective, suitable subjects for discussion include the Definition of Done, relationships between team members, and the Sprint length. This retrospective meeting provides an opportunity to evaluate and refine the criteria for completeness, reflect on collaboration and communication within the team, and assess the duration of the Sprint and its impact.",
  },
  {
    id: "79fe03a1-73bf-4976-ba2c-22d1a9e43523",
    chapter: 1,
    question:
      "What are two responsibilities of the Scrum Master during a Sprint?\n(choose the best two answers)",
    options: [
      "Facilitate opportunities for inspection and adaptation as needed or requested.",
      "Guide team members in self-management.",
      "Ensure that the Product Owner is present at all Scrum events.",
      "Report team conflicts to functional managers.",
      "Track the progress of the Developers.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "The two responsibilities of the Scrum Master during a Sprint are to facilitate opportunities for inspection and adaptation as needed or requested and to guide team members in self-management. The Scrum Master's role is to support the Scrum Team in effectively applying Scrum principles and practices, enabling them to collaborate, identify areas of improvement, and make necessary adjustments. Reporting team conflicts to functional managers and tracking the progress of the Developers are not primary responsibilities of the Scrum Master.",
  },
  {
    id: "4c12f14b-0e50-46f7-9d40-894989b6320d",
    chapter: 1,
    question:
      "What is the primary purpose of the Scrum Master's presence at the Daily Scrum?\n\n(choose the best answer)",
    options: [
      "To gather information for updating the burn-down chart.",
      "To monitor the team’s progress and report to management.",
      "To ensure that each team member answers the three questions.",
      "They do not need to attend; their only responsibility is to ensure that the Developers hold the Daily Scrums.",
    ],
    correctAnswer: 3,
    explanation:
      "The Daily Scrum is primarily for the Developers to discuss their progress, plan their work for the day, and identify any potential obstacles. The Scrum Master's role is to ensure that the Daily Scrum is being held and that the Developers understand the purpose and benefits of the event. However, their attendance is not mandatory, as the Daily Scrum is primarily for the Developers to collaborate and self-manage.",
  },
  {
    id: "4d0c3317-ce80-4576-928d-19522faef6ca",
    chapter: 1,
    question:
      "What are three functions of the Definition of Done?\n(choose the best three answers)",
    options: [
      "Assist the Developers in determining how many Product Backlog items to include in the Sprint.",
      "Specify the work that must be mostly completed before the Sprint can end.",
      "Ensure that the Increment is of high quality and meets the stakeholders' expectations.",
      "Define the criteria a Product Backlog item must fulfill to be deemed ready for selection during Sprint Planning events.",
      "Establish a shared understanding of when a Product Backlog item is complete.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 4],
    isMultiSelect: true,
    explanation:
      "The Definition of Done serves several purposes. It guides the Developers on how many Product Backlog items to select for the Sprint, increases transparency, and creates a shared understanding of when work is complete. The Definition of Done helps the Scrum Team to ensure that the Increment is of high quality and meets the expectations of the stakeholders.",
  },
  {
    id: "f5977221-4b32-49d0-8580-c4eac691d3b0",
    chapter: 1,
    question:
      "Which statement is true regarding the duration of a Sprint?\n(choose the best answer)",
    options: [
      "The length of the Sprint is decided during Sprint Planning and should be sufficient to ensure that the Scrum Team can deliver what is planned for the upcoming Sprint.",
      "It should be sufficient to ensure that the Scrum Team can deliver what is planned for the upcoming Sprint.",
      "All Sprints must last no longer than one month.",
      "The Product Owner decides the length of the Sprint considering all the development work, except for specialized testing.",
    ],
    correctAnswer: 2,
    explanation:
      "A Sprint must last at most one month. The Sprint length is a predefined timebox that typically remains consistent for all Sprints. Once the Sprint length is established, the Scrum Team plans their work and sets the Sprint Goal within that predefined timeframe. During Sprint Planning, the team selects the Product Backlog items to be worked on during the Sprint based on their capacity and the Sprint length. The goal is to ensure that the team can deliver a useful, valuable Increment by the end of the Sprint, considering the duration of the Sprint.",
  },
  {
    id: "cd94e46c-a541-4beb-85b1-a4349d435cef",
    chapter: 1,
    question:
      "Which Scrum Value is compromised by working on Product Backlog items with low business value?\n(choose the best answer)",
    options: [
      "Courage.",
      "Focus.",
      "Respect.",
      "Economic Value Added.",
      "Earned Value.",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Values are Courage, Focus, Commitment, Respect, and Openness. Building Product Backlog items that have low business value violates the value of Focus, as the Scrum Team should be focused on delivering the most valuable items first.",
  },
  {
    id: "1e2cb7af-addb-4dc4-bab7-65be78b2a0f4",
    chapter: 1,
    question:
      "What are two methods of forming Scrum Teams that align with Scrum's values?\n(choose the best two answers)",
    options: [
      "Gather all individuals and allow them to organize themselves into Scrum Teams.",
      "Existing teams suggest how they would like to organize themselves within the new structure.",
      "Managers work together to assign individuals to specific teams.",
      "The Scrum Masters decide on the new team structures and assignments.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "Scrum values self-management and empowerment of the team. Allowing the people to organize into Scrum Teams themselves or having existing teams propose how they would like to organize into the new structure are both consistent with Scrum's values.",
  },
  {
    id: "31a4c029-95c3-4512-a80a-75cdf665ee82",
    chapter: 1,
    question:
      "What is the best description of the Sprint Review?\n(choose the best answer)",
    options: [
      "A demonstration at the end of the Sprint for everyone in the organization to see the work that was completed.",
      "An opportunity to praise or reprimand the Developers based on whether they completed their forecast.",
      "A way to monitor the activities of the Developers during a Sprint.",
      "A period for the Scrum Team and stakeholders to review the results of a Sprint and decide on the next steps.",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Review is an event at the end of the Sprint where the Scrum Team and stakeholders inspect the outcome of the Sprint and determine what to do next. It is an opportunity for the Scrum Team to demonstrate the work done during the Sprint and to receive feedback from the stakeholders.",
  },
  {
    id: "2f6bac62-9b17-4729-a9b8-2508961ad324",
    chapter: 1,
    question:
      "When does a Developer assume accountability for an item in the Sprint Backlog?\n(choose the best answer)",
    options: [
      "During the Daily Scrum.",
      "Never. All Developers on the Scrum Team are jointly accountable for items in the Sprint Backlog.",
      "As soon as a Developer on the Scrum Team is able to take on additional work.",
      "At Sprint Planning, when the Sprint Backlog items are divided equally among the Developers.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, all Developers on the Scrum Team share accountability for items in the Sprint Backlog. The Developers work together as a team to complete the work in the Sprint Backlog and to achieve the Sprint Goal.",
  },
  {
    id: "21f5971a-486a-42f2-ac3f-760781281074",
    chapter: 1,
    question:
      "Which of the following are timeboxed events in Scrum?\n(choose the best three answers)",
    options: [
      "Sprint Planning.",
      "Daily Scrum.",
      "Sprint Retrospective.",
      "Sprint Testing.",
      "Release Planning.",
      "Release Retrospective.",
      "Sprint 0.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2],
    isMultiSelect: true,
    explanation:
      "In Scrum, there are 5 timeboxed events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. These events have a maximum duration and are designed to provide structure and regularity to the Scrum Team's work.",
  },
  {
    id: "613c51eb-f5a8-4399-b9d0-782122c80abb",
    chapter: 1,
    question:
      "The Developers and Product Owner are unable to agree on the top priority Product Backlog items during Sprint Planning, making it difficult for the Developers to forecast the number of Product Backlog items for the upcoming Sprint. However, they are able to agree on a Sprint Goal. What actions should the Scrum Master support? \n(choose the best two answers)",
    options: [
      "Take as much time as necessary to review the Product Backlog before scheduling another Sprint Planning event.",
      "Forecast the Product Backlog items that align with the Sprint Goal, create the Sprint Backlog, conclude Sprint Planning, and begin development work. Continue to analyze and create additional functionality during the Sprint.",
      "Extend the Sprint Planning event until enough Product Backlog items are understood for the Developers to make a complete forecast.",
      "During the next Sprint Retrospective, discuss why this issue occurred and what changes can be made to prevent it from happening again.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "When there is difficulty in understanding or agreeing on Product Backlog items during Sprint Planning, it is important for the Scrum Master to support the team in finding a solution that allows them to move forward with their work. In this case, options “Forecast the Product Backlog … ” and “During the next Sprint Retrospective … ” provide a way for the team to continue working towards their Sprint Goal while also addressing and preventing similar issues in future Sprints.",
  },
  {
    id: "e8e66a18-c92d-4353-a904-2968f1e7698c",
    chapter: 1,
    question:
      "A new Developer is experiencing ongoing conflicts with other members of the Scrum Team, which is affecting the delivery of the Increment. If it becomes necessary, who is responsible for removing the Developer from the Scrum Team?\n(choose the best answer)",
    options: [
      "The Scrum Master.",
      "The Product Owner.",
      "The hiring manager.",
      "The Scrum Team.",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Team, as a self-managing and cross-functional unit, is collectively responsible for managing the composition and dynamics of the team. If a Developer is causing ongoing conflicts that negatively impact the team's collaboration and the delivery of the Increment, it is the responsibility of the Scrum Team to address the issue and take appropriate actions. While the Scrum Master may play a supportive role in facilitating conflict resolution and providing guidance, it is ultimately the responsibility of the Scrum Team, as a whole, to determine the best course of action, which may include addressing the conflicts, providing feedback, or even considering the removal of a team member if necessary.",
  },
  {
    id: "357f748f-0af7-45e8-bcd2-754a46923d17",
    chapter: 1,
    question:
      "Who has the authority to cancel a Sprint? \n(choose the best answer)",
    options: [
      "The Product Owner.",
      "The Scrum Team.",
      "The Stakeholders.",
      "The Scrum Master.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Product Owner is the only person with the authority to cancel a Sprint. This may occur if the Sprint Goal becomes obsolete or if external circumstances change, making it no longer makes sense to continue with the current Sprint. While other members of the Scrum Team and stakeholders may provide input and feedback, ultimately, it is up to the Product Owner to make this decision.",
  },
  {
    id: "c0f43062-408f-4dae-ad41-1b427d6d4bf3",
    chapter: 1,
    question:
      "At what point does a Developer become responsible for the value of a Product Backlog item selected for the Sprint? \n(choose the best answer)",
    options: [
      "Never, as the entire Scrum Team is responsible for creating value every Sprint.",
      "During the Daily Scrum.",
      "Whenever the item is assigned to him/her.",
      "At the Sprint Planning event.",
    ],
    correctAnswer: 0,
    explanation:
      'According to the Scrum Guide, the entire Scrum Team is collectively accountable for creating value in every Sprint. This includes the Developers, who are responsible for delivering a "Done" Increment that meets the Definition of Done and achieves the Sprint Goal. While individual Developers may take on specific tasks or Product Backlog items, ultimately, it is the entire team that is responsible for delivering value to stakeholders.',
  },
  {
    id: "e506899a-4518-479b-aa10-ed350230bcc2",
    chapter: 1,
    question:
      "Which statement best describes the nature of the Product Backlog?\n(choose the best answer)",
    options: [
      "It is dynamic and can evolve as more information is learned about the product and its customers.",
      "It contains all the product’s requirements and features and is used to create a project plan.",
      "Is managed by the Scrum Master",
      "Any changes to it must be approved by a change control board.",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Backlog in Scrum is dynamic and can evolve as the project progresses. It is not a comprehensive list of all requirements but rather an ordered list of desired product features. The Product Owner is responsible for managing the Product Backlog, and changes do not require approval from a change control board. The Backlog is flexible and allows for adaptation based on customer feedback and market changes.",
  },
  {
    id: "a484472a-7e4b-4af6-bf67-dc8d61cac730",
    chapter: 1,
    question:
      "As self-managing professionals, which of the following do Developers manage? \n(choose the best answer)",
    options: [
      "The release plan.",
      "The stakeholders invited to the Sprint Review.",
      "The Sprint Backlog.",
      "The Product Backlog.",
    ],
    correctAnswer: 2,
    explanation:
      "Developers in a Scrum Team are responsible for managing the Sprint Backlog. They collaborate to select and plan the work items from the Product Backlog for the upcoming Sprint. Once the Sprint begins, they self-manage to determine how to accomplish the work and create a plan to achieve the Sprint Goal. The Developers are accountable for tracking the work progress during the Sprint and making necessary adjustments to ensure timely completion. They work together to ensure transparency and collaboration in managing and delivering the Sprint Backlog. Ultimately, the Developers have the autonomy and authority to make decisions related to the Sprint Backlog and the implementation of the work.",
  },
  {
    id: "07c0e357-e224-403e-8a9e-8baf9c601a90",
    chapter: 1,
    question:
      "Under what circumstances is the Product Owner required to attend the Daily Scrum? \n(choose the best answer)",
    options: [
      "When they need to represent the stakeholders' perspective to the Developers.",
      "When they are actively working on items in the Sprint Backlog, in which case they participate as a Developer.",
      "When they need to update the Developers regarding the marketplace.",
      "When the scope of the Sprint needs to be changed.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers to inspect their progress toward the Sprint Goal and adapt their plan for the remainder of the Sprint. While the Product Owner and Scrum Master may attend, they do so as observers unless they are actively working on items in the Sprint Backlog, in which case they participate as Developers. The Product Owner is not required to attend the Daily Scrum unless they are contributing to the development work.",
  },
  {
    id: "71c87e57-c166-4f37-8ade-97c02aebe671",
    chapter: 1,
    question:
      "Who is accountable for tracking the progress towards the Sprint Goal? \n(choose the best answer)",
    options: [
      "The Scrum Master.",
      "The Developers.",
      "The Project Manager.",
      "The Product Owner.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for tracking their progress towards the Sprint Goal. This includes managing the Sprint Backlog and updating it daily to reflect the remaining work. While the Scrum Master, Product Owner, and other stakeholders may provide support and guidance, ultimately, it is up to the Developers to manage their own work and ensure that they are on track to achieve the Sprint Goal.",
  },
  {
    id: "af9d2c57-0cde-420b-8676-395fe1900194",
    chapter: 1,
    question:
      "If the frequency of the Daily Scrum were reduced to every two or three days, what would be three key concerns? \n(choose the best three answers)",
    options: [
      "The team would have fewer opportunities to inspect and adapt the Sprint Backlog.",
      "The Scrum Master would have difficulty updating the burn-down chart.",
      "The Product Owner would have difficulty reporting progress to stakeholders.",
      "The Sprint Backlog may become outdated.",
      "Impediments would be identified and resolved more slowly.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3, 4],
    isMultiSelect: true,
    explanation:
      'According to the Scrum Guide, the Daily Scrum is an important event for the Developers to inspect their progress toward the Sprint Goal and adapt their plan for the remainder of the Sprint. Reducing the frequency of this event could result in several negative consequences, including fewer opportunities to inspect and adapt the Sprint Backlog, an outdated Sprint Backlog, and slower identification and resolution of impediments. These issues could impact the team\'s ability to deliver a "Done" Increment that meets the Definition of Done and achieves the Sprint Goal.',
  },
  {
    id: "25307c7b-bb1b-4ae9-b7a0-9f59d8397207",
    chapter: 1,
    question:
      "A Product Owner seeks advice from the Scrum Master on estimating the size of the work in Scrum. What guidance should the Scrum Master provide? \n(choose the best answer)",
    options: [
      "Estimates should be made by the Product Owner and verified by the Developers.",
      "Estimating size goes against Scrum principles.",
      "Estimates should be made by those doing the work.",
      "Estimates must be expressed in Story Points.",
      "Product Backlog items must be estimated using Planning Poker.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, estimates in Scrum are made by those doing the work, which in this case would be the Developers. The Developers have the best understanding of the effort and complexity involved in completing a Product Backlog item and are, therefore, best positioned to provide accurate estimates. While the Product Owner may provide input and guidance, ultimately, it is up to the Developers to estimate the work. The Scrum Master can support this process by facilitating discussions and helping the team to reach a shared understanding of the work involved.",
  },
  {
    id: "e74007d0-95ee-4c87-8854-1acac5bce3ef",
    chapter: 1,
    question:
      "When can a Product Backlog item be considered done? \n(choose the best answer)",
    options: [
      "When it meets all acceptance criteria.",
      "When it receives approval from the Product Owner.",
      "At the end of the Sprint.",
      "When it meets the Definition of Done.",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, a Product Backlog item is considered complete when it meets the Definition of Done. The Definition of Done is a shared understanding of what it means for work to be complete and is used to assess whether an Increment is ready for release. While acceptance criteria may be part of the Definition of Done, ultimately, it is up to the Scrum Team to determine what constitutes "Done" for their product.',
  },
  {
    id: "0adf5ed1-9367-4c90-859c-ef067ccc54b5",
    chapter: 1,
    question:
      "Is it true or false that every Scrum Team must have a Product Owner and Scrum Master? \n(choose the best answer)",
    options: [
      "False; a Scrum Master is only necessary if requested by the Scrum Team.",
      "True, both accountabilities must be fully dedicated to the Scrum Team.",
      "False, a subject matter expert on the Scrum Team can replace the Product Owner.",
      "True, their participation and availability impact the team's outcomes.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, every Scrum Team must have a Product Owner and a Scrum Master. The Product Owner is responsible for maximizing the product's value and managing the Product Backlog, while the Scrum Master is responsible for promoting and supporting Scrum by helping everyone understand Scrum theory, practices, rules, and values. Both accountabilities are essential for the success of the Scrum Team, and their participation and availability can significantly impact the team's outcomes.",
  },
  {
    id: "874018b9-a1e0-48ec-ac5f-0ffc105d9a73",
    chapter: 1,
    question:
      "An IT manager requests a status report from a Scrum Team detailing their progress during the Sprint. The Scrum Team seeks advice from the Scrum Master, who should: \n(choose the best answer)",
    options: [
      "Tell the Scrum Team that they must self-manage and handle the request.",
      "Tell them you will create the report on a weekly basis.",
      "Request that the Product Owner send the report to the manager.",
      "Explain to the IT manager that progress in Scrum is demonstrated by inspecting an Increment at the Sprint Review.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, progress in Scrum is demonstrated by delivering a \"Done\" Increment at the end of each Sprint. The Sprint Review provides an opportunity for stakeholders, including managers, to inspect this Increment and provide feedback to the Scrum Team. In this situation, the Scrum Master should explain this to the IT manage. Further, the Scrum Master should discuss with the Product Owner about having the IT manager as a key stakeholder to be managed and invited to attend the Sprint Review to see the team's progress. This approach promotes transparency and collaboration and helps ensure everyone has a shared understanding of the team's progress.",
  },
  {
    id: "e479afa7-a38b-4061-bd4d-5b6148a6a474",
    chapter: 1,
    question:
      "What is the main topic of discussion during the Sprint Review? \n(choose the best answer)",
    options: [
      "The Scrum process and its implementation during the Sprint.",
      "The team's coding and engineering practices.",
      "The product Increment.",
      "All of the above.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the main purpose of the Sprint Review is to inspect the Increment and adapt the Product Backlog if needed. During this event, the Scrum Team and stakeholders collaborate to review what was accomplished during the Sprint and discuss what could be done in the next Sprint. While other topics, such as the Scrum process and engineering practices, may be discussed, the primary focus is on the product Increment and how it meets the needs of stakeholders.",
  },
  {
    id: "2f374f5e-5d75-476d-9305-97c078365501",
    chapter: 1,
    question:
      "A new Product Owner joins a Scrum Team that has been working on a product for nine Sprints. She understands that she is responsible for the Product Backlog, but is unsure about her other responsibilities. Which of the following are part of the Product Owner's accountability on a Scrum Team? \n(choose the best two answers)",
    options: [
      "Engaging with stakeholders.",
      "Writing the acceptance tests using Behavior-Driven Development tools.",
      "Providing detailed specifications to the Developers.",
      "Describing features using Use Cases.",
      "Ensuring that the most valuable functionality is delivered first.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Product Owner is responsible for maximizing the value of the product and managing the Product Backlog. This includes engaging with stakeholders to understand their needs and priorities and ensuring that the most valuable functionality is delivered first.",
  },
  {
    id: "5ced0154-bc72-4eb1-9691-3b4b699882ed",
    chapter: 1,
    question:
      "What are two key ways in which a Scrum Master helps a Scrum Team achieve its highest level of productivity? \n(choose the best two answers)",
    options: [
      "By ensuring that high-value features remain at the top of the Product Backlog.",
      "By facilitating decision-making within the Scrum Team.",
      "By ensuring that meetings start and end on time.",
      "By removing impediments that hinder the Scrum Team's progress.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Scrum Master is responsible for promoting and supporting Scrum by helping everyone understand Scrum theory, practices, rules, and values. This includes facilitating decision-making within the Scrum Team and causing the removal of impediments that hinder their progress. By doing so, the Scrum Master helps the team to work more effectively and efficiently, enabling them to achieve their highest level of productivity.",
  },
  {
    id: "3ece03fc-01aa-4bc9-b73a-f67f7b85f0fe",
    chapter: 1,
    question:
      "Which of the following best describes the primary responsibility of a Product Owner? \n(choose the best answer)",
    options: [
      "Directing the work of the Developers.",
      "Maximizing the value of the work done by the Scrum Team.",
      "Ensuring that the team meets its commitments to stakeholders.",
      "Protecting the Developers from distractions from stakeholders.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the primary responsibility of the Product Owner is to maximize the product's value and manage the Product Backlog. This includes working closely with stakeholders to understand their needs and priorities and collaborating with the Developers to ensure that the most valuable functionality is delivered first. While the Product Owner may provide guidance and direction to the team, their primary focus is on optimizing the value of the work done by the Scrum Team.",
  },
  {
    id: "933660d1-8542-41b4-a3d6-73f5873ebb92",
    chapter: 1,
    question:
      'True or false: The Scrum includes an accountability called "Project Manager"? \n(choose the best answer)',
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'According to the Scrum Guide, Scrum does not include an accountability called "Project Manager." Scrum defines three accountabilities: the Product Owner, the Scrum Master, and the Developers. These accountabilities work together as a self-managing team to deliver a "Done" Increment at the end of each Sprint. While some organizations may choose to have a project manager work with a Scrum Team, this accountability is not defined within the Scrum framework.',
  },
  {
    id: "0a916370-5b7f-4ba9-b35f-dfdcd8a729fc",
    chapter: 1,
    question:
      "Sara is the Product Owner of a Scrum Team responsible for a software product that aimed to revolutionize online shopping. Sarah had been working closely with the Scrum Team for several Sprints, and her expertise and market knowledge were highly valued. What are Sarah's primary responsibilities?\n(Select the best two answers)",
    options: [
      "Collaborating with stakeholders to gather requirements and feedback.",
      "Defining the technical implementation details for the Developers.",
      "Ordering the Product Backlog based on value and business objectives.",
      "Conducting daily code reviews and providing feedback to the Developers.",
      "Attending team meetings and coordinating the Scrum events.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      'The Product Owner plays a critical role in a Scrum Team. Their primary responsibilities include collaborating with stakeholders to gather requirements and feedback. By actively engaging with customers, users, and business representatives, the Product Owner ensures a deep understanding of their needs and expectations. They prioritize the Product Backlog based on value and business objectives, ensuring that the most valuable functionality is delivered first. This helps maximize the return on investment and aligns the team\'s efforts with the overall vision of the product. The Product Owner\'s focus is on defining the "what" and "why" of the product, while leaving the technical implementation details to the Developers. While they attend team meetings and Scrum events, their primary accountability lies in understanding stakeholder requirements and guiding the team in delivering a valuable and successful product.',
  },
  {
    id: "ba43bfb8-3c42-4b09-b44b-87b19eead1ef",
    chapter: 1,
    question:
      "Who is responsible for managing the Sprint Backlog? \n(choose the best answer)",
    options: [
      "The Scrum Master.",
      "The Scrum Team.",
      "The Product Owner.",
      "The Developers.",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, the Sprint Backlog is owned and managed by the Developers. It is a plan for how the team will achieve the Sprint Goal and deliver a "Done" Increment. The Developers are responsible for updating the Sprint Backlog daily to reflect the remaining work and for ensuring that it provides a clear picture of their progress towards the Sprint Goal. While other members of the Scrum Team, such as the Product Owner and Scrum Master, may provide input and guidance, ultimately, it is up to the Developers to manage their own work within the Sprints.',
  },
  {
    id: "0da08541-dd1f-4a0d-b9a1-c2db12114e6e",
    chapter: 1,
    question:
      "In Scrum, what are two ways that regulatory compliance issues can be addressed? \n(choose the best two answers)",
    options: [
      "They are discussed, determined, and documented before development Sprints begin.",
      "They are addressed alongside the functional development of the product.",
      "They are added to the Product Backlog and addressed in early Sprints, always including some business functionality, even if minimal.",
      "They are handled by a separate team responsible for compliance.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "In Scrum, regulatory compliance issues can be addressed in several ways. One approach is to address them alongside the functional development of the product, ensuring that compliance requirements are integrated into the development process. Another approach is to add compliance-related items to the Product Backlog and address them in early Sprints, always including some business functionality, even if minimal. This allows the team to incrementally build and demonstrate compliance as they deliver new functionality.",
  },
  {
    id: "42b6ca07-074e-4de8-a478-8abf23a949a7",
    chapter: 1,
    question:
      "True or False: An Increment must be released to customers or users at the end of each Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, an Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together. In order to provide value, the Increment must be usable. Multiple Increments may be created within a Sprint. The sum of the Increments is presented at the Sprint Review, thus supporting empiricism. However, Scrum has no rules or recommendations regarding when to release an Increment. It can be released multiple times during a Sprint or not at all.",
  },
  {
    id: "5e454a22-e503-4e92-8ef8-9667cd9beb0f",
    chapter: 1,
    question:
      "What is the most important characteristic of a Scrum Team?\n\n(choose the best answer)",
    options: [
      "A Scrum Master who is also a Project Manager.",
      "A Product Owner who is also a Business Analyst.",
      "The ability to deliver an Increment each Sprint.",
      "Having a lead Developer who works closely with the Scrum Master.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, a Scrum Team should have all the competencies and skills needed to deliver an Increment in a Sprint. This means that the team should have all the necessary skills and knowledge to complete the work planned for the Sprint and useful, valuable Increment each Sprint.",
  },
  {
    id: "bfb49de5-8b18-4af0-9c7c-80bf4321d996",
    chapter: 1,
    question:
      "When can new work be added to the Sprint Backlog?\n(choose the best answer)",
    options: [
      "Only during Sprint Planning.",
      "Whenever it is identified by the Developers.",
      "Only when approved by the Product Owner.",
      "Only when there is room in the Sprint Backlog.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, during a Sprint, new work or further decomposition of work is added to the Sprint Backlog as soon as possible after it is identified. The Sprint Backlog is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint in order to achieve the Sprint Goal.",
  },
  {
    id: "74d0f5a6-63fa-41fd-b203-a90b9c412249",
    chapter: 1,
    question:
      "What is the maximum length of a Sprint?\n(choose the best answer)",
    options: [
      "Two weeks.",
      "Six weeks.",
      "One calendar month.",
      "Three months.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the length of a Sprint should be no more than one calendar month. It should also be short enough to keep the business risk acceptable to the Product Owner and to synchronize the development work with other business events. This allows for regular inspection and adaptation of the product and process while minimizing risk.",
  },
  {
    id: "4ecb07a6-a9c5-4455-98cd-8340457f43c8",
    chapter: 1,
    question:
      "When multiple Scrum Teams are working on one product, which of the following conditions should be met?\n(choose the best two answers)",
    options: [
      "Each Scrum Team should have its own Product Owner.",
      "There should be a Chief Product Owner overseeing all the Product Owners.",
      "There should be only one Product Backlog for the product.",
      "Each Scrum Team should have its own Product Backlog.",
      "There should be only one Product Owner for the product.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, when multiple Scrum Teams work on one product, there should be only one Product Owner and one Product Backlog. The Product Owner is responsible for maximizing the value of the product and the work of the Scrum Teams. The Product Backlog is an ordered list of everything that is known to be needed in the product.",
  },
  {
    id: "74cbcee9-16c5-4eec-8ba7-764d0b4b1d9c",
    chapter: 1,
    question: "Who must participate in Daily Scrums?\n(choose the best answer)",
    options: [
      "The Scrum Master.",
      "The Product Owner.",
      "The Developers.",
      "The entire Scrum Team.",
      "The Stakeholders.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers. It is a 15-minute time-boxed event for the Developers to synchronize activities and create a plan for the next 24 hours. The Scrum Master ensures that the Developers have the meeting, but the Developers are responsible for conducting the Daily Scrum.",
  },
  {
    id: "f65ad0a1-2126-4988-8dfa-b89744b568e0",
    chapter: 1,
    question:
      "What is the purpose of having a timebox for an event in Scrum?\n(choose the best answer)",
    options: [
      "To ensure that the rooms of the organization are used properly.",
      "To ensure that the event takes at least a minimum amount of time.",
      "To ensure that the event is focused and efficient.",
      "To ensure that the event happens by a given time.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, when an event has a timebox, it means that the event can take no more than a maximum amount of time. This ensures that the event is focused and efficient, and that the Scrum Team can effectively manage its time.",
  },
  {
    id: "26d05092-1499-437b-bdb4-84cebe09902b",
    chapter: 1,
    question:
      "How long is the timebox for the Sprint Review for a one-month Sprint?\n(choose the best answer)",
    options: ["1 day.", "4 hours.", "As long as needed.", "2 hours."],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the timebox for the Sprint Review is 4 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The Sprint Review is an event where the Scrum Team and stakeholders collaborate on what was done in the Sprint and to plan what to do next.",
  },
  {
    id: "fbecd4cf-05f1-4628-a566-c7aa75bdf6a8",
    chapter: 1,
    question:
      "How can the Scrum Team ensure that non-functional requirements are visible and transparent?\n(choose the best two answers)",
    options: [
      "By adding them to a separate list on the Scrum board.",
      "By working on them during a separate Sprint.",
      "By adding them to the Definition of Done.",
      "By adding them to the Product Backlog.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "By incorporating non-functional requirements into the Definition of Done and the Product Backlog, the Scrum Team can ensure that these requirements are treated with the same level of importance and visibility as functional requirements. This helps to foster transparency, collaboration, and a shared understanding within the team.",
  },
  {
    id: "4b96da12-0af8-4acc-8088-3a1c194f3958",
    chapter: 1,
    question:
      "True or False: To start using Scrum, it is only required to have a Product Owner with a vision of what needs to be built and enough work for the first Sprint, a Scrum Master, and the Developers to turn the ideas into Increments.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The statement is true. To start using Scrum, you need three key accountabilities: a Product Owner, a Scrum Master, and the Developers. The Product Owner is responsible for having a vision of what needs to be built and ensuring there is enough work for the first Sprint. The Scrum Master facilitates the Scrum process and supports the team in adopting Scrum principles. The Developers are responsible for turning the ideas into Increments. With these three accountabilities in place, you have the foundation to start using Scrum and deliver value incrementally.",
  },
  {
    id: "e72c254b-2db1-4436-a1f2-44eeab3a4c2c",
    chapter: 1,
    question:
      "What is an appropriate service for a Scrum Master in regard to the Daily Scrum?\n(choose the best answer)",
    options: [
      "Controlling the period in which each Developer can talk to ensure everybody has an equal opportunity to speak.",
      "Ensuring that all 3 questions have been answered by each Developer.",
      "Assigning turns.",
      "Teaching the Developers to keep the Daily Scrum within 15 minutes.",
      "All of the above.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, one of the appropriate services for a Scrum Master in regard to the Daily Scrum is to teach the Developers to keep the Daily Scrum within 15 minutes. The Daily Scrum is an event for the Developers to synchronize activities and create a plan for the next 24 hours. The Scrum Master ensures that the Developers have the meeting, but the Developers are responsible for formatting and conducting the Daily Scrum.",
  },
  {
    id: "ec8037cf-d83b-4fca-8ce2-46c72b396855",
    chapter: 1,
    question:
      "Which group primarily benefits from the inspect and adapt opportunity provided by the Sprint Review?\n(choose the best answer)",
    options: [
      "Management and the Developers.",
      "The Developers and the Product Owner.",
      "Stakeholders and the Scrum Team.",
      "Stakeholders and the Developers.",
      "Stakeholders and Management.",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Review is an event in the Scrum framework where the Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed. The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next.",
  },
  {
    id: "b2645fc2-728e-43db-b099-793b86ee3726",
    chapter: 1,
    question:
      "A Developer expresses concerns about data privacy issues to the Scrum Master. What is the most appropriate action for the Scrum Master to take?\n\n(choose the best answer)",
    options: [
      "Create a new criterion on the Definition of Done regarding data privacy.",
      "Create a Product Backlog item for handling data privacy issues.",
      "Consult with the subject matter experts.",
      "Encourage the Developer to discuss their concerns with the team as soon as possible.",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory, practices, rules, and values. In this situation, the Scrum Master should encourage the Developer to share their concerns with the team as soon as possible so that the team can work together to address the issue.",
  },
  {
    id: "8596cdf3-567a-4d30-a8dd-92aad975bf34",
    chapter: 1,
    question:
      "What is the best technique for the Scrum Master to ensure effective communication between the Developers and the Product Owner?\n(choose the best answer)",
    options: [
      "Instruct the Developers to communicate using business needs and objectives.",
      "Act as an intermediary between them.",
      "Observe their communication and facilitate direct collaboration.",
      "Send the Product Owner for training on the technologies by the Scrum Team.",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Master encourages open and effective communication by removing any obstacles or misunderstandings that may arise. By promoting direct interaction and collaboration, the Scrum Master helps ensure that the Developers and the Product Owner have a clear understanding of each other's perspectives and can work together effectively to deliver value. Note that instructing the Developers to communicate using only business needs and objectives may limit the scope of their communication. Effective communication in Scrum goes beyond just conveying business needs and objectives. It involves a collaborative and iterative approach where the Developers and the Product Owner can discuss requirements, clarify doubts, provide feedback, and align their understanding of the product. By focusing solely on business needs and objectives, other important aspects of communication, such as technical considerations and implementation details, may be overlooked.",
  },
  {
    id: "130d541c-5093-4ec3-bfa8-171b018f84eb",
    chapter: 1,
    question: "When is the Sprint Backlog created?\n(choose the best answer)",
    options: [
      "During the Sprint Retrospective.",
      "Prior to Sprint Planning.",
      "During refinement.",
      "During Sprint Planning.",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Backlog is created during the Sprint Planning event. During Sprint Planning, the Scrum Team collaborates to determine which Product Backlog items they will work on during the upcoming Sprint and creates a plan for delivering them, resulting in the Sprint Backlog.",
  },
  {
    id: "dd7bb971-a285-48a9-9853-2a8d75ae9470",
    chapter: 1,
    question:
      "Who is responsible for ensuring that everyone on the Scrum Team completes their tasks for the Sprint?\n(choose the best answer)",
    options: [
      "The Project Manager.",
      "The Product Owner.",
      "The Scrum Master.",
      "The Scrum Team.",
      "All of the above.",
    ],
    correctAnswer: 3,
    explanation:
      'In Scrum, the entire Scrum Team is responsible for ensuring that the tasks for the Sprint are completed. The Scrum Team consists of the Developers, the Product Owner, and the Scrum Master. Each member of the team has their own responsibilities, but they all work together to deliver a potentially releasable Increment of "Done" product at the end of every Sprint.',
  },
  {
    id: "f4f0d961-90e5-47af-9c17-2cd1bffefd75",
    chapter: 1,
    question: "How is the Product Backlog order?\n(choose the best answer)",
    options: [
      "By size, with larger items at the top and smaller items at the bottom.",
      "By risk, with safer items at the top and riskier items at the bottom.",
      "By value, with items of higher value at the top.",
      "By return on investment, with the items with higher ROI at the bottom.",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product. The Product Owner is responsible for the Product Backlog, including its content, availability, and ordering. The Product Backlog is ordered by the Product Owner to best achieve goals and missions, with the most valuable items placed at the top.",
  },
  {
    id: "dc653e33-db41-4825-ba60-c88283b839c3",
    chapter: 1,
    question:
      "What methods can a Scrum Master use when there is a disagreement within the Scrum Team about which agile practices to implement?\n(choose the best two answers)",
    options: [
      "Consult with an external agile coach for their recommendation.",
      "Refer the issue to the company's Human Resources department.",
      "Encourage the entire Scrum Team to participate in the decision-making process.",
      "Utilize coaching techniques such as asking open-ended questions and actively listening.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Master's role is to promote and support Scrum, as outlined in the Scrum Guide. They ensure everyone understands Scrum theory, practices, rules, and values. In cases of internal disagreements, the Scrum Master can involve the entire team in decision-making and utilize coaching techniques like open questions and active listening.",
  },
  {
    id: "ef5e55aa-b3a5-4815-9376-bc0f8fc4d3a5",
    chapter: 1,
    question:
      "When using burndown charts to monitor progress, what aspect do they measure? \n(choose the best answer)",
    options: [
      "Total business value delivered to the client.",
      "Total expenses incurred.",
      "Remaining work over time.",
      "Productivity of each team member.",
    ],
    correctAnswer: 2,
    explanation:
      "A burndown chart shows the amount of work that is thought to remain in a backlog. Time is shown on the horizontal axis and the remaining work on the vertical axis. As time progresses and items are drawn from the backlog and completed, a plot line showing work remaining may be expected to fall. The amount of work may be assessed in any of several ways such as user story points or task hours. Work remaining in Sprint Backlogs and Product Backlogs may be communicated by means of a burn-down chart. The purpose of a burndown chart is to make the work and progress visible, so that the Developers can inspect and adapt their plan for completing the remaining work in the Sprint.",
  },
  {
    id: "b8ef08ac-2364-4989-901a-679f329d169e",
    chapter: 1,
    question:
      "During the Sprint, who is responsible for deciding how work is carried out? \n(choose the best answer)",
    options: [
      "The Developers",
      "The entire Scrum Team",
      "The Scrum Master.",
      "The team's manager",
      "Experts in the subject matter",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for organizing and managing their own work during the Sprint. They are self-managing, which means they have the autonomy to decide how to best accomplish their work, rather than being directed by others outside the team.",
  },
  {
    id: "0d58f374-cdbd-4822-8cd1-47f45fc33005",
    chapter: 1,
    question:
      "What are the characteristics of the Daily Scrum? \n(choose the best two answers)",
    options: [
      "It is led by the Lead Developer",
      "Its time and location are consistent",
      "The Scrum Master uses it to monitor the team’s status",
      "Its purpose is to review progress toward the Sprint Goal and adjust the Sprint Backlog",
      "It takes place right after lunch",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is a 15-minute time-boxed event for the Development Team to synchronize activities and create a plan for the next 24 hours. The location and time of the Daily Scrum should remain constant to reduce complexity. The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.",
  },
  {
    id: "7015a6b4-43a5-443c-adac-5ec3598caf7d",
    chapter: 1,
    question:
      "What is the definition of a cross-functional Scrum Team?\n(choose the best answer)",
    options: [
      "The Scrum Team comprises developers, business analysts, architects, and testers.",
      "The Scrum Team has all the necessary skills to deliver value each Sprint.",
      "The Scrum Team works with business analysts, architects, developers, and testers who are not part of the team.",
      "The Scrum Team is a virtual team composed of separate teams of business analysts, architects, developers, and testers.",
    ],
    correctAnswer: 1,
    explanation:
      "A cross-functional Scrum Team is one where the team members collectively possess all the skills necessary to create value each Sprint. This means that the team is self-sufficient and does not rely on individuals outside the team to complete their work.",
  },
  {
    id: "55899523-4aa4-487a-a98b-89ce7b2dad66",
    chapter: 1,
    question:
      "When should a Sprint Retrospective take place?\n(choose the best answer)",
    options: [
      "It concludes the Sprint.",
      "After the final Sprint of a project or release.",
      "After every Sprint.",
      "Only when the Scrum Master decides it is necessary.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective concludes the Sprint.",
  },
  {
    id: "8f414a31-3169-49d4-8bd3-0c2bd0fe680a",
    chapter: 1,
    question:
      "What is the output of Sprint Planning that gives the Scrum Team a target and direction for the Sprint?\n(choose the best answer)",
    options: [
      "The list of tasks in the Sprint Backlog.",
      "The Sprint Goal.",
      "The Release Plan.",
      "The notes from the previous Sprint Review.",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Goal is an objective set for the Sprint that can be met through the implementation of Product Backlog items. It provides guidance to the Developers on why it is building the Increment and gives the Scrum Team a target and overarching direction for the Sprint.",
  },
  {
    id: "cc542c02-f83d-4efa-ae50-19f88e15beed",
    chapter: 1,
    question:
      "Ideally, how should a large group of people be organized into Scrum Teams according to Scrum theory?\n(choose the best answer)",
    options: [
      "Consult with HR to see who has worked together before and form teams based on that.",
      "The individuals should self-manage into teams based on their understanding of the product, vision, and Scrum framework.",
      "Rotate team members every Sprint to spread knowledge.",
      "Use a matrix of skills, experience, and seniority to assign individuals to teams.",
    ],
    correctAnswer: 1,
    explanation:
      "According to Scrum theory, the best way to divide a large group of people into multiple Scrum Teams is for the people to divide themselves into teams based on their understanding of the product, the product vision, and the rules of the Scrum framework. This allows for self-management and empowers individuals to take ownership of their work.",
  },
  {
    id: "7f997ac7-eee6-4686-909f-2ba7237ccf77",
    chapter: 1,
    question:
      "How can the transparency of an Increment be improved?\n(choose the best answer)",
    options: [
      "Sending daily progress reports to the stakeholder.",
      "Completing all work required to meet the Definition of Done.",
      "Properly updating the Scrum Board",
      "By having Hardening Sprints.",
    ],
    correctAnswer: 1,
    explanation:
      "By ensuring that all the work for an Increment is fully completed according to the Definition of Done, the transparency of the Increment is improved. The Definition of Done serves as a shared understanding of the quality criteria that must be met for the Increment to be considered complete. When all the work is done and meets the defined criteria, it provides a clear and transparent view of the progress and quality of the Increment. This allows stakeholders to have a reliable and accurate understanding of the product's state and helps in making informed decisions based on the transparency provided by the completed work.",
  },
  {
    id: "594ea3bb-a12f-4531-935f-ac96f7490e26",
    chapter: 1,
    question:
      "How does Scrum encourage self-management within the Scrum Team?\n(choose the best three answers)",
    options: [
      "The Scrum Team decides what work to do during a Sprint.",
      "The Scrum Master protects the team from outside interference.",
      "Titles are removed for members of the Scrum Team.",
      "Scrum is a lightweight framework that allows for self-management.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      "Scrum promotes self-management in several ways. One way is by allowing the Scrum Team to decide what work to do in a Sprint. Another way is by removing titles for Scrum Team members, which encourages collaboration and shared responsibility. Finally, Scrum is a lightweight framework that provides just enough structure for teams to self-organize and manage their own work.",
  },
  {
    id: "9ae37d30-f4e9-4102-a6b1-fbc24bc2f803",
    chapter: 1,
    question:
      "True or False: The Product Owner and the Scrum Master cannot be a part of Developers",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum does not prohibit the Product Owner or the Scrum Master do development work. However, it is not the best practice because it could create a conflict of interest.",
  },
  {
    id: "234fb60c-3468-42ac-80c4-69333fcdfc1e",
    chapter: 1,
    question:
      "Which statement is correct about the Sprint Backlog?\n(choose the best answer)",
    options: [
      "It has all the details.",
      "It has just enough detail.",
      "O It has no detail.",
    ],
    correctAnswer: 1,
    explanation:
      "Both Sprint Backlog and Product Backlog evolve during their lives, and the amount of information grows as time passes. So, at each point in time, they don't have as much detail as they will probably have in the future. On the other hand, we never add all the details there.",
  },
  {
    id: "ce9c91e0-6abe-4df9-aa17-b4e900e583a8",
    chapter: 1,
    question:
      "In which Scrum event do key stakeholders collaborate with the Scrum Team about the outcome of the Sprint and future adaptations?\n(choose the best answer)",
    options: [
      "The Sprint Retrospective",
      "The Daily Scrum",
      "The Sprint Planning",
      "The Sprint Review",
    ],
    correctAnswer: 3,
    explanation:
      "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities. The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation.",
  },
  {
    id: "9ccf568c-0072-486e-8f8a-678845bc571c",
    chapter: 1,
    question:
      "Which of the following ways of forming Scrum Teams meet Scrum´s values?\n(choose the best two answers)",
    options: [
      "The Scrum Masters form the teams",
      "Bring all the candidate members together and let them organize into Scrum Teams",
      "Existing teams propose the new Scrum Teams",
      "Management collaborates to form the teams",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "The people from the Scrum Teams should be respected as capable of self-organizing. Management’s job is to give them the support and environment necessary for being efficient. This is the bottom-up intelligence mindset expected for Scrum to succeed.",
  },
  {
    id: "4df8e9ff-9990-41a7-85a8-4ab261339c14",
    chapter: 1,
    question:
      "Who is accountable for managing the Product Backlog?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Scrum Master",
      "The Key Stakeholders",
      "The Product Owner",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Owner is accountable for effective Product Backlog management.",
  },
  {
    id: "74ce6779-24f0-45ea-96db-759d7a13136c",
    chapter: 1,
    question:
      "The Scrum Team is cross-functional. What does this mean in practice?\n(choose the best answer)",
    options: [
      "They are capable of transforming Product Backlog items into a valuable and usable Increment.",
      "They are capable of finishing the project within the time and budget set by the Product Owner.",
      "They can perform all development work except for specialized testing that requires additional tools and environments.",
      "They decide who does what, when, and how.",
    ],
    correctAnswer: 0,
    explanation:
      "Being cross-functional means that the members of the Scrum Team possess a diverse set of skills and competencies necessary to accomplish the work required for delivering a potentially releasable Increment. They have the ability to collaborate and collectively contribute their expertise to analyze, design, develop, test, and deliver product Increments. This cross-functionality enables the team to work autonomously and self-manage, ensuring that the necessary skills are available within the team to deliver value.",
  },
  {
    id: "fdb9c9ef-6542-4e01-a8aa-f462af4ee76f",
    chapter: 1,
    question:
      "What should a Scrum Master do when working with a Scrum Team that has Developers in different locations and logistical challenges before the Daily Scrum?\n(choose the best answer)",
    options: [
      "Escalate the issue to management.",
      "Set up the meeting and tell the team how it will be done.",
      "Let the Developers self-manage and decide what to do.",
      "Ask the Developers to take turns setting up the meeting.",
    ],
    correctAnswer: 2,
    explanation:
      "In this situation, the Scrum Master should allow the Developers to self-manage and determine for themselves what to do. Scrum promotes self-management and empowers the team to take ownership of their work. The Scrum Master's role is to facilitate the process and help the team become self-managing, not to dictate how things should be done.",
  },
  {
    id: "5080d561-998e-4ce4-a244-761e22614658",
    chapter: 1,
    question:
      "Which accountability makes up a Scrum Team?\n(choose the best three answers)",
    options: [
      "End users.",
      "A single Scrum Master.",
      "A group of Developers.",
      "Customers.",
      "A single Product Owner.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 4],
    isMultiSelect: true,
    explanation:
      "A Scrum Team is a cohesive unit of professionals that consists of one Scrum Master, Developers, and one Product Owner. The Scrum Master is responsible for promoting and supporting Scrum, the Developers are committed to creating any aspect of a usable Increment each Sprint., and the Product Owner is responsible for maximizing the value of the product resulting from the work of the Developers.",
  },
  {
    id: "fc67e6cd-0e30-4822-9067-b37c80abe7c6",
    chapter: 1,
    question:
      "What is likely to happen if an organization adopts Scrum but changes the terminology to fit with existing terminology?\n(choose the best answer)",
    options: [
      "There may be little actual change without a new vocabulary to remind people of the change.",
      "The organization may not fully understand the changes and benefits of Scrum.",
      "Management may feel less anxious about the change.",
      "All of the above.",
    ],
    correctAnswer: 3,
    explanation:
      "If an organization decides to adopt Scrum but changes the terminology to fit with existing terminology, several things may happen. Without a new vocabulary as a reminder of the change, very little change may actually happen. The organization may not understand what has changed within Scrum, and the benefits of Scrum may be lost. Management may feel less anxious, but this could come at the cost of losing the benefits of Scrum.",
  },
  {
    id: "34dc0962-2c8e-441d-823b-a9c259581b93",
    chapter: 1,
    question: "When does a Sprint officially end?\n(choose the best answer)",
    options: [
      "When all tasks have been completed by the Developers.",
      "After the Sprint Retrospective has been completed.",
      "When all Product Backlog items have met their Definition of Done.",
      "When the Product Owner decides that enough has been delivered to meet the Sprint Goal.",
    ],
    correctAnswer: 1,
    explanation:
      "A Sprint concludes when the Sprint Retrospective is complete. The Sprint Retrospective is the final event of the Sprint and is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. Once the Sprint Retrospective is complete, the next Sprint begins.",
  },
  {
    id: "ca09da8a-6c7a-497f-af56-72765792dfbc",
    chapter: 1,
    question:
      "What should happen if a Product Backlog item worked on during a Sprint does not meet the Definition of Done?\n(choose the best two answers)",
    options: [
      "Review the item, add the completed work to the velocity, and create a new story for the remaining work.",
      "If stakeholders agree, the Product Owner can accept it and release it to users.",
      "The item should not be included in the Increment for that Sprint.",
      "The item should be placed back on the Product Backlog for the Product Owner to decide what to do with it.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "If a Product Backlog item worked on during a Sprint does not meet the Definition of Done, two things should happen. First, the item should not be included in the Increment for that Sprint. Second, the item should be placed back on the Product Backlog for the Product Owner to decide what to do with it. The Product Owner may choose to prioritize it for the next Sprint or may decide to deprioritize it.",
  },
  {
    id: "31bc1917-72cc-4df2-b410-f094b7111990",
    chapter: 1,
    question:
      "How much work must the Developers do to complete a Product Backlog item selected during Sprint Planning?\n(choose the best answer)",
    options: [
      "A proportional amount of time is spent on analysis, design, development, and testing.",
      "All development work and some testing.",
      "As much as can be completed during the Sprint, with the remaining work deferred to the next Sprint.",
      "Enough to meet the Definition of Done.",
    ],
    correctAnswer: 3,
    explanation:
      "The amount of work required of the Developers to complete a Product Backlog item selected during Sprint Planning is as much as is required to meet the Scrum Team's Definition of Done. The Definition of Done is a shared understanding of what it means for work to be complete and ensures that the Increment is of high quality and meets the team's standards.",
  },
  {
    id: "a1d1756a-d00c-4604-b60b-cc2a704854ae",
    chapter: 1,
    question:
      "What should the Developers do if the CEO asks them to add an important item to a Sprint that is already underway?\n(choose the best answer)",
    options: [
      "Tell the Product Owner so they can discuss it with the CEO.",
      "Add the item to the current Sprint and remove an item of equal size.",
      "Add the item to the next Sprint.",
      "Add the item to the current Sprint without making any changes.",
    ],
    correctAnswer: 0,
    explanation:
      'If the CEO asks the Developers to add a "very important" item to a Sprint that is already in progress, the Developers should inform the Product Owner so they can work with the CEO. The Product Owner is responsible for managing the Product Backlog and deciding what items should be included in the Sprint. The Developers should not add the item to the current Sprint without consulting with the Product Owner.',
  },
  {
    id: "8264f37f-4ce1-4b4b-bcc7-3cdb54d2e54c",
    chapter: 1,
    question: "When does a new Sprint start?\n(choose the best answer)",
    options: [
      "On the Monday after the Sprint Review.",
      "Right after the previous Sprint ends.",
      "After the next Sprint Planning is completed.",
      "When the Product Owner is ready to start.",
    ],
    correctAnswer: 1,
    explanation:
      "The next Sprint begins immediately after the conclusion of the previous Sprint. Sprints are time-boxed events, which means that they have a fixed duration and do not overlap. Once one Sprint ends, the next one begins without any gaps in between.",
  },
  {
    id: "e5cedc3f-ca9c-4e63-9776-9ca3aaf86474",
    chapter: 1,
    question:
      "What is the main goal of conducting a Sprint Review?\n(choose the best answer)",
    options: [
      "To evaluate the Scrum Team's activities and processes during the Sprint.",
      "To review the product Increment with stakeholders and gather feedback for future work.",
      "To improve team morale.",
      "To assess the validity of the project.",
    ],
    correctAnswer: 1,
    explanation:
      "The purpose of a Sprint Review is to inspect the product Increment with the stakeholders and collect feedback on the next steps. During the Sprint Review, the Scrum Team and stakeholders collaborate to review what was accomplished during the Sprint and discuss what could be done in the next Sprint. This allows for transparency and helps ensure that the product is meeting the needs of the stakeholders.",
  },
  {
    id: "994e9887-1e21-42af-981b-cf691e35b885",
    chapter: 1,
    question:
      "Who is responsible for starting the Daily Scrum?\n(choose the best answer)",
    options: [
      "The Scrum Master, to make sure the event happens and stays within the timebox.",
      "The person who arrives last to encourage punctuality and keep the event within the timebox.",
      "Whoever the Developers choose to start.",
      "The person holding the talking stick.",
    ],
    correctAnswer: 2,
    explanation:
      "The Daily Scrum is started by whoever the Developers decide should start. The Daily Scrum is an event for the Developers, and they are responsible for conducting it. The Scrum Master's role is to ensure that the event takes place and stays within the timebox, but it is up to the Developers to decide how to conduct the event.",
  },
  {
    id: "6e387ea6-298a-435b-815e-21440ed6fd61",
    chapter: 1,
    question:
      "How can a Scrum Team ensure that performance concerns are addressed?\n(choose the best two answers)",
    options: [
      "Assign the work to the experts in the organization regarding performance.",
      "Create Product Backlog items for each performance concern.",
      "Include performance concerns in the Definition of Done.",
      "Wait until a specialist can perform a performance audit and create a list of performance-related Product Backlog items.",
      "Add an extra Sprint specifically to address all performance concerns.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "Two effective ways for a Scrum Team to ensure that performance concerns are satisfied are to create Product Backlog items for each concern and to add performance concerns to the Definition of Done. By creating Product Backlog items for performance concerns, the team can prioritize and plan for addressing these concerns during Sprint Planning. By adding performance concerns to the Definition of Done, the team ensures that all work meets the necessary performance standards before being considered complete.",
  },
  {
    id: "fe9cc05d-68e7-4367-8c12-00ae63c4ac43",
    chapter: 1,
    question:
      "What should a Scrum Team do if user documentation is part of their Definition of Done, but there are not enough technical writers available?\n(choose the best answer)",
    options: [
      "Create a separate team of technical writers to work on demand for different Product Owners, using a first-in, first-out system.",
      "Leave the user documentation undone until after the last development Sprint, then have it completed by any available technical writers.",
      "The Developers on the Scrum Team should write the user documentation themselves.",
      "Wait until a technical writer is available to join the Scrum Team and take care of the documentation.",
    ],
    correctAnswer: 2,
    explanation:
      "If user documentation is part of the Definition of Done, the Developers on the Scrum Team should write the user documentation. The Scrum Team is responsible for delivering a useful, valuable Increment every Sprint, and this includes meeting all the criteria in the Definition of Done.",
  },
  {
    id: "037b70a8-1fcb-44f1-9d80-04f1f82a0fa2",
    chapter: 1,
    question:
      "Which of the following is required in Scrum?\n(choose the best answer)",
    options: [
      "The Sprint Retrospective.",
      "Standing up during the Daily Scrum.",
      "Creating a Sprint Burndown Chart.",
      "Conducting Release Planning.",
      "All of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Retrospective is the only thing listed that is required by Scrum. The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. It is held after the Sprint Review and prior to the next Sprint Planning.",
  },
  {
    id: "477399fb-705d-4c44-8f23-3927ac3d2f87",
    chapter: 1,
    question:
      "During a Sprint, the CEO asks the Developers to add an urgent item to the Sprint Backlog. What should the Developers do?\n\n(choose the best answer)",
    options: [
      "Inform the Product Owner so that the matter can be worked with the CEO",
      "Add the item to the current Sprint and remove an item from the Sprint Backlog of equal size",
      "The Scrum Master must not allow the CEO to talk to the Developers",
      "Add the item to the current Sprint without any adjustments",
      "Add the item to the Product Backlog",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Backlog is the single source of work undertaken by the Scrum Team. Thus, a request from the CEO can not be fulfilled by the Scrum Team, if it is not a Product Backlog item. Those wanting to change the Product Backlog, including the CEO, can do so by trying to convince the Product Owner. Notice that, during the Sprint, the scope may be clarified and renegotiated with the Product Owner as more is learned. Thus, there are several possible scenarios here:\n\n- The request might be rejected and not added to the Product Backlog\n- The request might be accepted and added to the Product Backlog by the Product Owner, and considered in future Sprint Planning events by the Scrum Team\n- If the request is important and in line with the current Sprint Goal, the request might be accepted and added to the Product Backlog by the Product Owner and transferred to the current Sprint through discussion between the Product Owner and the Developers.\n- If the request is urgent and makes the Sprint Goal obsolete, the Product Owner might cancel the Sprint.",
  },
  {
    id: "2229db57-c382-4bf7-842c-de9f8a2aa07f",
    chapter: 1,
    question:
      "Which of the following are commitments of Scrum Artifacts.\n(choose all that apply)",
    options: [
      "Product Vision",
      "Project Goal",
      "Definition of Ready",
      "Product Goal",
      "Sprint Goal",
      "Definition of Done",
    ],
    correctAnswer: 3,
    correctAnswers: [3, 4, 5],
    isMultiSelect: true,
    explanation:
      "Each artifact contains a commitment to ensure it provides information that enhances transparency and focus against which progress can be measured:\n- For the Product Backlog it is the Product Goal.\n- For the Sprint Backlog it is the Sprint Goal.\n- For the Increment it is the Definition of Done.",
  },
  {
    id: "ec108e3f-56b5-41b9-b4f6-b8d80847aeb1",
    chapter: 1,
    question:
      "Which of the following is NOT correct about the Developers?\n(choose the best answer)",
    options: [
      "Write the test cases",
      "Decide the number of items for the upcoming Sprint",
      "As a whole, are cross-functional",
      "Explain the Product Backlog items",
    ],
    correctAnswer: 3,
    explanation:
      "- Writing test cases is a technical task, therefore, the Developers do it. (correct)\n- It's up to the Developers to see how many items they can develop during the Sprint, and no one can force them to pick more (or fewer) items. (correct)\n- The Scrum Team is cross-functional, thus, the Developers are cross-functional. (correct\n- Explaining the Product Backlog items is the Product Owner's responsibility (incorrect)",
  },
  {
    id: "ee93ae13-7a68-45a6-a2bd-cc71850d28e9",
    chapter: 1,
    question: "What is Scrum?\n(choose the best answer)",
    options: [
      "Scrum is a lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.",
      "A complete process to deliver complex products.",
      "A software development cookbook including the best agile practices.",
    ],
    correctAnswer: 0,
    explanation:
      "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
  },
  {
    id: "f331a47c-b561-4442-9859-7a2b6369ff10",
    chapter: 1,
    question:
      "What should the Scrum Team do when during the Sprint Retrospective meeting, they identified some improvements that can be done?\n(choose the best answer)",
    options: [
      "Assign responsible team members for every improvement. Check the progress at the next Retrospective.",
      "They should not talk about improvements because it could harm the company.",
      "Assign a responsible team member for at least one improvement. Check the progress at the next Retrospective.",
      "The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.",
      "Make sure the Sprint Backlog for the next Sprint includes all the improvements.",
    ],
    correctAnswer: 3,
    explanation:
      "During Sprint Retrospective, the Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.",
  },
  {
    id: "3874724c-4623-478e-a8d3-f26e22153d46",
    chapter: 1,
    question:
      "How does the Scrum Master serve the Organization?\n(choose the best answer)",
    options: [
      "Helping employees and stakeholders understand and enact an empirical approach for complex work.",
      "Inviting key stakeholders are invited to all Scrum Reviews within the organization.",
      "Updating the Burndown charts.",
      "Forming Scrum Teams.",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum Master serves the organization in several ways, including:\n\n- Leading, training, and coaching the organization in its Scrum adoption;\n- Planning and advising Scrum implementations within the organization;\n- Helping employees and stakeholders understand and enact an empirical approach for complex work; \n- Removing barriers between stakeholders and Scrum Teams.",
  },
  {
    id: "c5c40cf1-07e0-470a-a323-d67155440adb",
    chapter: 1,
    question: "Who participates in Sprint Planning?\n(choose all that apply)",
    options: [
      "The Developers",
      "The Scrum Master",
      "The Product Owner",
      "Invited people",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Team may also invite other people to attend Sprint Planning to provide advice.",
  },
  {
    id: "adcd6712-0f5f-4d81-9d96-b3d9e4ae7e5c",
    chapter: 1,
    question:
      "How does the Definition of Done (DoD) help the Scrum Team?\n(choose the best three answers)",
    options: [
      "DoD guides the Developers in knowing how many Product Backlog items it can select during Sprint Planning.",
      "DoD helps to calculate the velocity of the Scrum Team.",
      "DoD is used to assess when work is complete.",
      "DoD ensures artifact transparency.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product.  The Definition of Done creates transparency by providing everyone a shared understanding of what work was completed as part of the Increment.",
  },
  {
    id: "9abb72da-51b3-415e-9bc1-5d39cb9cfd0c",
    chapter: 1,
    question:
      "Which of the following are valid ways of dealing with regulatory compliance issues in Scrum?\n(choose the best two answers)",
    options: [
      "They are dealt with specialized Sprints before developing business functionality.",
      "They are handled by a Compliance team.",
      "They are treated as regular Product Backlog items and addressed in early Sprints. However, independent of the situation, every Sprint must have at least some business functionality, no matter how small.",
      "Throughout the product development.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "During a Sprint, the Scrum Team turns a selection of the work into an Increment of value. In other words, for each Sprint, the Scrum Teams must deliver business functionality. Further, Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value for each Sprint.",
  },
  {
    id: "c9389c62-5e17-40f9-80e3-073f8ef58830",
    chapter: 1,
    question:
      "Which of the following are characteristics of the Product Backlog?\n(choose all that apply)",
    options: [
      "It is continuously refined.",
      "As long as a product exists, its Product Backlog also exists.",
      "A Product Backlog could be closed when it contains no items to include in the next Sprint.",
      "It is emergent.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      "A Product Backlog is emergent. The earliest development of it only lays out the initially known and best-understood requirements. Further, it is refined as the product and the environment in which it will be used evolves. Finally, it is refined to identify what the product needs to be appropriate, competitive, and useful. As long as a product exists, its Product Backlog also exists since it is the single source of work undertaken by the Scrum Team.",
  },
  {
    id: "e211e669-3ca2-4096-a232-6d5683f4d120",
    chapter: 1,
    question:
      "If any aspects of a process deviate outside acceptable limits so that the resulting product will be unacceptable, when must an adjustment be made?\n(choose the best answer)",
    options: [
      "During the next Sprint Review.",
      "During the next Daily Scrum.",
      "Whenever the Product Owner approves it.",
      "As soon as possible to minimize further deviation.",
      "Whenever the Scrum Master approves it.",
    ],
    correctAnswer: 3,
    explanation:
      "If any aspects of a process deviate outside acceptable limits or if the resulting product is unacceptable, the process being applied or the materials being produced must be adjusted. The adjustment must be made as soon as possible to minimize further deviation.",
  },
  {
    id: "f3af9243-555d-4283-9721-c41eda27ec1e",
    chapter: 1,
    question:
      "True or False: During Sprint Retrospective the definition of Done can not be reviewed and adapted.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done.",
  },
  {
    id: "ca902740-bf69-46cd-99f1-ef2919680d13",
    chapter: 1,
    question:
      "Which of the following are topics to be discussed during Sprint Retrospective?\n(choose the best two answers)",
    options: [
      "The Products Backlog order",
      "The team's collaboration",
      "Refine the Product Backlog",
      "Identify the most helpful changes to improve its effectiveness",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.",
  },
  {
    id: "b28bc15d-b110-48c7-838d-a21e09d88321",
    chapter: 1,
    question:
      "What's the timeboxed duration of Sprint Review events?\n(choose the best answer)",
    options: [
      "Maximum 3 hours",
      "3 hours in a one-month Sprint",
      "Maximum 4 hours in a one-month Sprint, and usually shorter for shorter Sprints.",
      "3 hours",
    ],
    correctAnswer: 2,
    explanation:
      "The timeboxed duration of events is as follows:\n\nSprint - Maximum 1 month\n\nDaily Scrum - 15 minutes\n\nSprint Planning - 8 hours in a one-month Sprint, and normally shorter proportionally for shorter Sprints\n\nSprint Review - 4 hours in a one-month Sprint, and normally shorter proportionally for shorter Sprints\n\nSprint Retrospective - 3 hours in a one-month Sprint, and normally shorter proportionally for shorter Sprints\n\nNote 1: if you have a shorter Sprint, it's not mandatory to shorten the timeboxed durations proportionally, but it's the normal thing to do. Otherwise, for example, in a project with one-week Sprints (i.e., 5 working days), you will spend 2 days, equal to 40% of the time, on meetings instead of creating the product.\n\nNote 2: Yes, being shorter \"proportionally\" is not mentioned in the Scrum Guide, but not everything you will see in the exam comes from the Scrum Guide.",
  },
  {
    id: "08e16197-a582-4356-8513-83ac83914e0c",
    chapter: 1,
    question:
      "Who is accountable for maximizing the value of the product resulting from the work of the Scrum Team?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Developers",
      "The Product Owner and The Developers",
      "The Scrum Master",
      "The Product Owner",
      "The Scrum Master and The Developers",
    ],
    correctAnswer: 4,
    explanation:
      "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team.",
  },
  {
    id: "58403d43-c9a8-4b00-ba76-45339b7295ed",
    chapter: 1,
    question:
      "What does a Sprint Burn-down Chart show?\n(choose the best answer)",
    options: [
      "How much work remains till the end of the Sprint",
      "The evolution of the amount of uncertainty during a project",
      "Dependencies, start times and stop times for project tasks",
      "Hierarchy of tasks that comprise a project",
    ],
    correctAnswer: 0,
    explanation:
      "Burn-down chart shows the evolution of remaining effort against time.",
  },
  {
    id: "247a8f18-958e-4d56-9eb4-3581e3650344",
    chapter: 1,
    question:
      "Select the three most applicable items that Product Backlog management includes:\n(choose the best three answers)",
    options: [
      "Moving Product Backlog items into the Sprint Backlog",
      "Presenting Product Backlog items to the Key Stakeholders",
      "Ensuring that the Product Backlog is transparent, visible, and understood",
      "Ordering Product Backlog items",
      "Developing and explicitly communicating the Product Goal",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3, 4],
    isMultiSelect: true,
    explanation:
      "Product Backlog management includes:\n\n- Developing and explicitly communicating the Product Goal;\n- Creating and clearly communicating Product Backlog items;\n- Ordering Product Backlog items; and,\n- Ensuring that the Product Backlog is transparent, visible, and understood.",
  },
  {
    id: "51a60380-eae3-484a-a70c-c82c31900537",
    chapter: 1,
    question:
      "What happens when a Sprint is canceled?\n(choose the best three answers)",
    options: [
      "All incomplete Product Backlog Items are re-estimated and put back on the Product Backlog",
      "If part of the work is potentially releasable, the Product Owner typically accepts it",
      "At the Sprint Retrospective, the Scrum Master determines who from the Developers is responsible for canceling the Sprint",
      'Any completed and "Done" Product Backlog items are reviewed',
      "Several top Product Backlog Items are taken into the Sprint Backlog to replace the obsolete items",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Guide is not explicit anymore about what happens. However, these are the best options following Scrum's mindset. Independent of the case, if a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.",
  },
  {
    id: "ac83e050-ff17-4cd4-a92d-0f87e216d8d8",
    chapter: 1,
    question:
      "What does the Cone of Uncertainty show?\n(choose the best answer)",
    options: [
      "A graphical representation of the Sprint's work left to do versus time.",
      "A visual view of tasks scheduled over time.",
      "How much is known about the Product over time.",
      "Defines all the things a project needs to accomplish, organized into multiple levels, and displayed graphically.",
    ],
    correctAnswer: 2,
    explanation:
      "The “Cone of Uncertainty” describes the reduction of the uncertainty about scope after each iteration. At the uncertainty is eliminated and the exact amount of scope is known. (with a cone graph).",
  },
  {
    id: "e251761a-09cf-4315-955d-dc4e70f522de",
    chapter: 1,
    question:
      "You are the Scrum Master of a Scrum Team that does not have the tools and environment to completely finish each of the selected Product Backlog items. Which of the following are appropriate for you to do?\n(choose the best two answers)",
    options: [
      "Cancel the Sprint",
      "Coach the Scrum Team on defining a Definition of Done that is achievable given current circumstances",
      "Tell them that, in this case, it is acceptable to have the partially Done Increment accepted during Sprint Reviews",
      "Facilitate the process of having the Scrum Team improve its skills, tools, and environment over time and adjust the Definition of Done (Correto) as needed",
      "Declare that the Scrum Team is not mature enough to adopt Scrum",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. However, as with any goal, it must be attainable. Thus, to keep the team motivated, but aware that the Definition of Done must be met, the best solution is to work with the Definition of Done. Notice that, in this case, the Scrum Team must recognize that, whenever the Definition of Done becomes more stringent in the future, technical debt will need to be paid off.",
  },
  {
    id: "529beacd-4942-46ca-9de4-a20303cfdad1",
    chapter: 1,
    question:
      "Who is allowed to update the Product Backlog?\n(choose the best two answers)",
    options: [
      "The Developers.",
      "The Product Owner.",
      "The Product Discovery team.",
      "The key stakeholders.",
      "The Developers, but the Product Owner remains accountable.",
      "The Scrum Master.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      "The Product Owner may perform activities related to Product Backlog management or may delegate the responsibility to others. Regardless, the Product Owner remains accountable.",
  },
  {
    id: "882cc0a1-e56e-4e01-b17b-4e8901aee4d2",
    chapter: 1,
    question:
      "True or False: All Scrum Teams working on the same Product must use a single Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner.",
  },
  {
    id: "236be464-6444-40f2-854e-1dac61b5e92d",
    chapter: 1,
    question:
      "Who is accountable for establishing Scrum?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Scrum Team",
      "The Scrum Master and the Product Owner",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice, both within the Scrum Team and the organization.",
  },
  {
    id: "792fd243-21f9-40ce-8689-a1e00c73adc0",
    chapter: 1,
    question:
      "Select three of the following actions that Scrum Master may take in starting up a Scrum implementation:\n(choose the best three answers)",
    options: [
      "Ask the Product Owner to explain the product, its business needs, history, goals, and context.",
      "Ask the Developers to introduce themselves to each other and tell about their skills and background.",
      "Ensure that a bonus system is in place for the top performance of individuals.",
      "Ask the Developers to discuss and identify the way they are going to develop the product.",
      "Ask the development managers to introduce their departments and capabilities.",
      "Ask the Scrum Team to work together and prepare a complete Product Backlog.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      "Product Backlog is never complete.  It has to be about the project and people internal to it, not the external departments. Remember that the team is cross-functional and does everything needed for the project, without outside help. Having a reward system is harmful to the unity of the team.",
  },
  {
    id: "9c201286-eba8-4b1e-885b-8520a3190519",
    chapter: 1,
    question: "What are the Scrum Artifacts?\n(choose all that apply)",
    options: [
      "Definition of Done.",
      "The Sprint Goal.",
      "Sprint Backlog.",
      "Product Backlog.",
      "Increment",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3, 4],
    isMultiSelect: true,
    explanation:
      "Scrum artifacts are the Product Backlog, Sprint Backlog, and Increment. The remaining options are commitments associated with the artifacts.",
  },
  {
    id: "899e9001-baee-47c6-9ed4-88b2268d1624",
    chapter: 1,
    question:
      "True or False: Scrum recommends having a “hardening” Sprint to remove all technical debt and prepare the Product for the upcoming release.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "It is not recommended. The Scrum Team delivers Done, usable Increment Sprint.",
  },
  {
    id: "57f4360c-e59c-4b28-8754-a2a1a4540a44",
    chapter: 1,
    question:
      "What is the single source of requirements for any changes to be made to the product?\n(choose the best answer)",
    options: [
      "The Key Stakeholders",
      "Team administrator",
      "The CEO of the Organization",
      "The Product Backlog",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product.",
  },
  {
    id: "3c5b944d-c4ce-440a-9e0d-9ccda0dcffd8",
    chapter: 1,
    question:
      "True or False: Only people of the Scrum Team can participate in the Sprint Planning.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Team may also invite other people to attend Sprint Planning to provide advice.",
  },
  {
    id: "22a3e8f4-3b7e-4ddf-8d5e-d113f5ca4cf0",
    chapter: 1,
    question:
      "What is a possible result of the Sprint Review?\n(choose the best answer)",
    options: [
      "A list of improvements that the Scrum Team will implement in the next Sprint",
      "A common understanding of what can be delivered in the Increment and how will the work needed to deliver the Increment be achieved",
      "A common understanding of progress toward the Sprint Goal and how progress is trending toward completing the work in the Sprint Backlog",
      "A revised Product Backlog that defines the probable Product Backlog items for the next Sprint",
    ],
    correctAnswer: 3,
    explanation:
      "During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities.",
  },
  {
    id: "0b2d2603-8202-4d12-b7ec-d24055bc6996",
    chapter: 1,
    question:
      "What does the word “development” mean in the context of Scrum?\n(choose the best answer)",
    options: [
      "Product development, its releasing and sustaining",
      "Development of an operational environment for the Product",
      "Software and hardware development",
      "Complex work that can include all the suggested options and even more",
      "Research and identifying of viable markets, technologies, and Product capabilities",
    ],
    correctAnswer: 3,
    explanation:
      "When the words “develop” and “development” are used in the Scrum Guide, they refer to complex work including software and hardware development, development and releasing of products and enhancements, development and sustaining product operational environments, research and identifying of viable markets and technologies, and even more.",
  },
  {
    id: "40f0bb94-265d-4d92-aa70-f14b01c2a724",
    chapter: 1,
    question:
      "Which of the following are applicable characteristics of the Product Owner?\n(choose the best four answers)",
    options: [
      "Product Value Maximizer",
      "Product Marketplace Expert",
      "Lead Facilitator of Key Stakeholder Involvement",
      "Product Visionary",
      "Facilitator of Scrum events",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      'About "Lead Facilitator of Key Stakeholder Involvement," this is a tricky one because of the changes in the latest version of the Scrum Guide where "stakeholder management" officially moved from the Product Owner\'s accountability to the Scrum Team\'s. In this question, it is a correct answer because I asked for the "best four answers." And, in practice, the Product Owner needs to stay in constant communication with them to help him direct the product. However, in general, it is better to say that there is no "lead facilitator of key stakeholder involvement," since this accountability is shared by the whole Scrum Team. If I had asked for the "three best answers," you shouldn\'t select this one.',
  },
  {
    id: "e795e5ba-c5f0-4d37-bf55-f7547133dd6b",
    chapter: 1,
    question:
      "Select the two essential features of a Scrum Team:\n(choose the best two answers)",
    options: [
      "It must only use tools, processes and techniques approved by the Organization",
      "It should choose how best to accomplish their work, rather than being directed by others outside the team",
      "It should be flexible enough to complete all the work planned for the Sprint even if some team members are on vacation",
      "It should have all the skills necessary to create value each Sprint",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value for each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how.",
  },
  {
    id: "cdfba081-2cd2-4d23-bae7-ca2ba98a1522",
    chapter: 1,
    question:
      "True or False: The Product Owner is the only person responsible for engaging the stakeholders",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The Scrum Guide reads: "The Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required".\n\nThe point here is to avoid behavior such as having the Developers pointing to the Product Owner if the customers are not satisfied with WHAT is being delivered and to encourage the Developers (and Scrum Master) to work with the Product Owner and help him/her defining the Product.\n\nHowever, in practice, if you would have to choose between the PO, Scrum Master, or Developers, who would be responsible for engaging the stakeholders? The PO, of course, because he/she is accountable for maximizing the value of the product and the Developers are busy developing the Increment.\n\nJust as an example, the Developers could proactively make "mini-reviews" with stakeholders during the Sprint to gather feedback on the Increments being built. This is "stakeholder engagement".',
  },
  {
    id: "5f7a3f87-bc60-4b5c-89e5-53cf818b264f",
    chapter: 1,
    question:
      "Which of the following is false with regards to what happens during the Sprint?\n(choose the best two answers)",
    options: [
      "No changes are made that would endanger the Sprint Goal",
      "Scope may be clarified and renegotiated with the Product Owner as more is learned",
      "Quality goals do not decrease",
      "Sprint scope is defined at the Sprint Planning and cannot be changed",
      "The Sprint Goal is changed frequently to reflect the status of the remaining work",
    ],
    correctAnswer: 3,
    correctAnswers: [3, 4],
    isMultiSelect: true,
    explanation:
      "During the Sprint:\n\n- No changes are made that would endanger the Sprint Goal;\n\n- Quality does not decrease;\n\n- The Product Backlog is refined as needed; and,\n\n- Scope may be clarified and renegotiated with the Product Owner as more is learned.",
  },
  {
    id: "b1694ff1-b73c-44dd-9bd7-076cff2deb75",
    chapter: 1,
    question:
      "What is the fundamental unit of Scrum?\n(choose the best answer)",
    options: [
      "The Scrum Guide's rules.",
      "The Developers.",
      "A small team of people.",
      "The Scrum Master.",
      "The Learning process.",
    ],
    correctAnswer: 2,
    explanation:
      "The fundamental unit of Scrum is a small team of people, a Scrum Team.",
  },
  {
    id: "f253bb95-d15c-4dce-865b-41002d8f5b0e",
    chapter: 1,
    question:
      "How does the Scrum Master help the Product Owner?\n(choose the best three answers)",
    options: [
      "Helping find techniques for effective Sprint Goal definition",
      "Facilitating stakeholder collaboration as requested or needed",
      "Helping find techniques for effective Product Backlog management",
      "Helping the Scrum Team understand the need for clear and concise Product Backlog items",
      "Helping establish the project plan",
      "Leading and coaching the organization in its Scrum adoption.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Master serves the Product Owner in several ways, including:\n\n- Helping find techniques for effective Product Goal definition and Product Backlog management;\n\n- Helping the Scrum Team understand the need for clear and concise Product Backlog items;\n\n- Helping establish empirical product planning for a complex environment; and,\n\n- Facilitating stakeholder collaboration as requested or needed.",
  },
  {
    id: "2b1f1386-fe42-4c60-a699-55a8a2dfb7a1",
    chapter: 1,
    question:
      "Who is responsible for defining the Sprint Goal during Sprint Planning?\n(choose the best answer)",
    options: [
      "The Development Team",
      "The Product Owner",
      "The Scrum Master",
      "The Key Stakeholders",
      "The Scrum Team",
    ],
    correctAnswer: 4,
    explanation:
      "The whole Scrum Team then collaborates to define a Sprint Goal that communicates why the Sprint is valuable to stakeholders.",
  },
  {
    id: "d675ef57-479c-4ece-9b8e-dbc19645128b",
    chapter: 1,
    question:
      "Who is accountable for creating a valuable, useful Increment every Sprint.\n(choose the best answer)",
    options: [
      "The Scrum Master.",
      "The team leaders.",
      "The Developers.",
      "The Scrum Team.",
      "The Product Owner.",
    ],
    correctAnswer: 3,
    explanation:
      "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",
  },
  {
    id: "91f11993-e0f6-4963-9688-647a800c6192",
    chapter: 1,
    question:
      "Which of the following is Scrum founded upon?\n(choose the best two answers)",
    options: [
      "PDCA",
      "Extreme Management",
      "Lean Thinking",
      "Rapid Application Development",
      "Empiricism",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation: "Scrum is founded on empiricism and lean thinking.",
  },
  {
    id: "dc8295c2-8c56-438c-8a6c-72ffa9397d4c",
    chapter: 1,
    question:
      "True or False: The Sprint Backlog is created at Sprint Planning. It is prohibited to add new work into the Sprint Backlog later by the Developers.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint in order to achieve the Sprint Goal. Consequently, the Sprint Backlog is updated throughout the Sprint as more is learned. It should have enough detail that they can inspect their progress in the Daily Scrum.",
  },
  {
    id: "ed8b18f8-74ac-46e1-9f56-5e87753c56e6",
    chapter: 1,
    question: "Select the five Scrum Values.\n(choose all that apply)",
    options: [
      "Lean",
      "Agility",
      "Respect",
      "Rapid development",
      "Openness",
      "Courage",
      "Commitment",
      "Focus",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4, 5, 6, 7],
    isMultiSelect: true,
    explanation:
      "When the values of commitment, courage, focus, openness and respect are embodied and lived by the Scrum Team, the Scrum pillars of transparency, inspection, and adaptation come to life and build trust for everyone.",
  },
  {
    id: "66a60c09-d2a0-4fb4-a258-2d0caa7a0fec",
    chapter: 1,
    question: "What is the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "It is an opportunity for the Scrum Team to plan ways to increase quality and effectiveness.",
      "It is the meeting that occurs at the end of the project to identify its lessons learned.",
      "It is a meeting to inspect the Increment and adapt the Product Backlog if needed.",
      "It is a meeting where the Development Team plans work for the next 24 hours.",
    ],
    correctAnswer: 0,
    explanation:
      "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness.",
  },
  {
    id: "60e1c7e0-0a7b-4d81-8046-b2f859c187be",
    chapter: 1,
    question:
      "Refinement usually consumes how much of part of the capacity of the Scrum Team?\n(choose the best answer)",
    options: [
      "Not more than 10%",
      "Not more than 20%",
      "It is up to the Scrum Team.",
      "Not more than 5%",
    ],
    correctAnswer: 2,
    explanation: "During the Sprint, the Product Backlog is refined as needed;",
  },
  {
    id: "3fb34b8e-f2d6-4d37-90db-6ccc00fe0a84",
    chapter: 1,
    question:
      "True or False: The Scrum Master does not help those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren’t.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum Masters are true leaders who serve the Scrum Team and the larger organization. The Scrum Master helps those outside the Scrum Team understand which of their interactions with the Scrum Team are helpful and which aren’t. The Scrum Master helps everyone change these interactions to maximize the value created by the Scrum Team.",
  },
  {
    id: "92b6853c-9354-4e16-8626-1234b30da3c0",
    chapter: 1,
    question:
      "Ordinarily, items on the Sprint Backlog tend to be...\n(choose the best answer)",
    options: [
      "The same size as those on the Product Backlog",
      "Larger than those on the Product Backlog",
      "Smaller than those on the Product Backlog",
    ],
    correctAnswer: 2,
    explanation:
      "The items on the Sprint Backlog come from the top of the Product Backlog, therefore, we can say that the items on the Sprint Backlog are, on average, smaller than items on the entire Product Backlog.",
  },
  {
    id: "73bb5099-b207-4b78-b2e5-0cd7392a86c1",
    chapter: 1,
    question:
      "You are the Scrum Master of a Scrum Team. What are the two primary ways that you can help it to become more productive?\n(choose the best two answers)",
    options: [
      "By updating the issue tracker",
      "By facilitating Scrum decisions",
      "By causing the removal of impediments to the Scrum Team's progress",
      "By scheduling rooms for the Scrum Events",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "Updating the issue tracker or scheduling rooms are not a priority since the Scrum Master is not a secretary. Further, the Scrum Master, respecting the Scrum Team’s self-management characteristic, causes the removal impediments that the Scrum Team members can’t deal with or facilitates decision-making.",
  },
  {
    id: "af287aa8-a2ae-4565-9b34-cb566abe43d8",
    chapter: 1,
    question: "The Scrum framework consists of what?\n(choose all that apply)",
    options: ["Events", "Artifacts", "Accountabilities", "Rules"],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum framework contains Accountabilities (i.e., Scrum Master, Product Owner, Developers), Artifacts (i.e., Product Backlog, Sprint Backlog, Increment), Events (i.e., Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective), and rules.\n\nHere go a few of Scrum rules:\n\n- Having timeboxed events is a rule.\n- Having a single Product Owner is another rule.\n- Self-managed Scrum Team.\n- Sprints timeboxed to at most one month.\n- Scrum Team containing one Product Owner, one Scrum Master, and Developers.\n- The Increment is only Done when in conformance with the Definition of Done.\n- and many others discussed in this course.",
  },
  {
    id: "f22822e9-e400-4897-98f4-5d38cc153dec",
    chapter: 1,
    question:
      "Who is responsible for creating the Definition of Done?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
    ],
    correctAnswer: 0,
    explanation:
      "If the Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product.\n\nThe Developers are required to conform to the Definition of Done. If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done.",
  },
  {
    id: "e52f79e8-a41c-482d-8724-e4ade35a4360",
    chapter: 1,
    question: "Who attends the Sprint Review?\n(choose all that apply)",
    options: [
      "Key Stakeholders.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Developers.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      "During the Sprint Review, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment.",
  },
  {
    id: "b18710a6-021d-4409-b268-c630c0ee67ae",
    chapter: 1,
    question:
      "Your Scrum Team’s impediment list is growing. Which techniques would be most helpful in this situation?\n(choose the best two answers)",
    options: [
      "The Scrum Master removes the impediments as soon as possible",
      "The Product Owner adds the impediments to the Product Backlog",
      "The Scrum Team prioritizes the list and works on them in order",
      "The Scrum Master discusses the impediments with the Scrum Team",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Team is self-managed and must figure out how to remove the impediments. However, the Scrum Master is accountable for causing the removal of impediments, which might include discussing them with the Scrum Team when needed.",
  },
  {
    id: "9abe4eec-a80f-489e-a66c-cb2684c6d183",
    chapter: 1,
    question:
      "What are the characteristics of a Scrum Team?\n(choose the best three answers)",
    options: [
      "Accountability belongs to the Scrum Team as a whole",
      "Cross-functional",
      "Scrum recognizes no sub-teams or hierarchies, within a Scrum Team",
      "Having at least one test engineer as a Developer",
      "Everybody must be full-time",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2],
    isMultiSelect: true,
    explanation:
      "The fundamental unit of Scrum is a small team of people, a Scrum Team. The Scrum Team consists of one Scrum Master, one Product Owner, and Developers. Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal.\n\nScrum Teams are cross-functional, meaning the members have all the skills necessary to create value for each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how.\n\nThe Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required. They are structured and empowered by the organization to manage their own work. Working in Sprints at a sustainable pace improves the Scrum Team’s focus and consistency.\n\nThe entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint. Scrum defines three specific accountabilities within the Scrum Team: the Developers, the Product Owner, and the Scrum Master.",
  },
  {
    id: "10b68b5f-ca0b-4368-93c2-971408c0569d",
    chapter: 1,
    question:
      "How regularly should Scrum users examine Scrum artifacts and progress approaching a Sprint Goal?\n(choose the best answer)",
    options: [
      "At the Sprint Review",
      "Frequently, but it should not get in the way of the work",
      "After the Daily Scrum",
      "As frequently as possible",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum artifacts and the progress toward agreed goals must be inspected frequently and diligently to detect potentially undesirable variances or problems. Their inspection should not be so frequent that inspection gets in the way of the work. Inspections are most beneficial when diligently performed by skilled inspectors at the point of work.",
  },
  {
    id: "5cf06015-fc8d-493e-b7fa-9c08c89b688b",
    chapter: 1,
    question:
      "Who has the authority to cancel the Sprint?\n(choose the best answer)",
    options: [
      "The Key Stakeholders",
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Product Owner and the Scrum Master",
    ],
    correctAnswer: 3,
    explanation:
      "Only the Product Owner has the authority to cancel the Sprint, although he or she may do so under influence from the stakeholders, the Developers, or the Scrum Master.",
  },
  {
    id: "9677b191-918d-4931-95bd-128211c5c9a6",
    chapter: 1,
    question:
      "Which of the following are correct regarding the Product Goal?\n(choose the best four answers)",
    options: [
      "If there are multiple Scrum Teams working on the same product, they should share the same Product Goal.",
      "The Scrum Team must only pursue one Product Goal at a time.",
      "In the case of existing multiple Product Goals, they must be organized into a Product Roadmap.",
      "An Increment is a concrete stepping stone toward the Product Goal.",
      "During the Sprint Review, progress toward the Product Goal is discussed.",
      "The Product Goal must consist of a vision statement, the main features, a deadline, and target measures.",
      "Once a product reaches the Product Goal, it must be released.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3, 4],
    isMultiSelect: true,
    explanation:
      "The Scrum Guide does not prescribe the use of a Product Roadmap, the components of the Product Goal, neither when to release the product.",
  },
  {
    id: "33efc6f2-9815-4805-bcf7-10ed9923158b",
    chapter: 1,
    question: "The Sprint Backlog consists of what?\n(choose the best answer)",
    options: [
      "The tasks for delivering the Product Backlog items selected for the Sprint, including their relationships and owners.",
      "The plan for delivering the selected Product Backlog items.",
      "The Product Backlog items selected for the Sprint.",
      "The Sprint Goal, the set of Product Backlog items selected for the Sprint, plus an actionable plan for delivering the product Increment.",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).",
  },
  {
    id: "41d095bf-6038-49f8-95f8-4d861d724426",
    chapter: 1,
    question:
      "True or False: The Scrum Team can only pursue one Product Goal at a time.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Product Goal is the long-term objective of the Scrum Team. They must fulfill (or abandon) one objective before taking on the next.",
  },
  {
    id: "664a632b-3b7a-49b7-aa20-7352b6bbeee3",
    chapter: 1,
    question:
      "Select the two most suited items that should be taken into the reckoning for the Definition of Done?\n(choose the best two answers)",
    options: [
      "Advice of the Scrum Master",
      "The standards of the Organization",
      "Definition of Done of other Scrum Teams working on the same Product",
      "Experience of the Product Owner",
      "Definition of Done of other Scrum Teams working on other products",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "If the Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product.\n\nThe Developers are required to conform to the Definition of Done. If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done.",
  },
  {
    id: "3c04ca08-ca75-4269-bab4-a39b9774cef9",
    chapter: 1,
    question:
      "When is an item in the Sprint Backlog considered complete?\n(choose the best answer)",
    options: [
      "The item has all the quality requirements defined by the Product Owner.",
      "When the customer approves its completeness",
      "When the Sprint is over",
      "When it meets the Definition of Done.",
    ],
    correctAnswer: 3,
    explanation:
      "- Maybe you may not even start working on the item before the Sprint was over, then you can't call it complete.\n\n- They can still miss something. On the other hand, if the test is focused on the unit, what about testing the integrated solution? It may break something.\n\n- It doesn't guarantee that we're absolutely Done with the item and that it satisfies the customer and user.\n\n- Product Backlog item that you have in the Sprint Backlog is Done when it satisfies the Definition of Done.",
  },
  {
    id: "f3b5ef01-d762-436b-bcba-2e66d9cdfd0a",
    chapter: 1,
    question:
      "What should be the length of a Sprint?\n(choose the best two answers)",
    options: [
      "At least, one week",
      "Whatever works best for management",
      "Short enough to keep the business risks acceptable",
      "At most, one month",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "The Sprints are fixed length events of one month or less to create consistency. When a Sprint’s horizon is too long the Sprint Goal may become invalid, complexity may rise, and risk may increase. Shorter Sprints can be employed to generate more learning cycles and limit the risk of cost and effort to a smaller time frame.",
  },
  {
    id: "7e2fb3fa-b119-4c66-a368-0564555f1c68",
    chapter: 1,
    question:
      "Which of the following are actions that The Scrum Master must do regarding the Daily Scrum?\n(choose the two best answers)",
    options: [
      "The Scrum Master ensures that the Developers has the meeting",
      "The Scrum Master must manage all events because he or she is the team lead.",
      "The Scrum Master is responsible for conducting the Daily Scrum",
      "The Scrum Master teaches the Developers to keep the Daily Scrum within the 15-minute time-box",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Master ensures that all Scrum events take place and are positive, productive, and kept within the timebox.",
  },
  {
    id: "feca9503-a1ac-4a41-8e9a-838d7d92f2f1",
    chapter: 1,
    question:
      "Select which are not part of the pillars that uphold Scrum?\n(choose all that apply)",
    options: [
      "Transparency",
      "Adaptation",
      "Self-organization",
      "Inspection",
      "Agility",
      "Teamwork",
      "Cross-functionality",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4, 5, 6],
    isMultiSelect: true,
    explanation:
      "Scrum is founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience and making decisions based on what is observed. Lean thinking reduces waste and focuses on the essentials.\n\nScrum employs an iterative, incremental approach to optimize predictability and to control risk. Scrum engages groups of people who collectively have all the skills and expertise to do the work and share or acquire such skills as needed.\n\nScrum combines four formal events for inspection and adaptation within a containing event, the Sprint. These events work because they implement the empirical Scrum pillars of transparency, inspection, and adaptation.",
  },
  {
    id: "50887461-5bdc-4400-81f4-0f3bd83dd996",
    chapter: 1,
    question:
      "During Sprint Planning, the Developers must plan the work for all days of the Sprint. It is decomposed by the end of this meeting, often to units of one day or less.\n(choose the best answer)",
    options: [
      "No, because who estimates the work to be done at Sprint is the Scrum Master",
      "No, this is not a rule and it is up to the Developers to plan the work necessary to create an Increment that meets the Definition of Done.",
      "Yes, Sprint Backlog is decomposed down into user stories, and the delivery time and effort are estimated considering the Sprint duration.",
      "Yes, all items in the Sprint Backlog should be decomposed to units of one day or less by the end of the Sprint Planning.",
    ],
    correctAnswer: 1,
    explanation:
      "For each selected Product Backlog item, the Developers plan the work necessary to create an Increment that meets the Definition of Done. This is often done by decomposing Product Backlog items into smaller work items of one day or less. How this is done is at the sole discretion of the Developers. No one else tells them how to turn Product Backlog items into Increments of value.\n\nFurther, the Sprint Backlog is updated throughout the Sprint as more is learned. It should have enough detail that they can inspect their progress in the Daily Scrum.. Thus, it is not recommended to attempt to plan the work for all days of the Sprint during Sprint Planning.",
  },
  {
    id: "e6da09ff-3bbf-4cfd-8463-673f5e7b8ac4",
    chapter: 1,
    question: "The Increment is:\n(choose the best answer)",
    options: [
      "Additive to all prior Increments and thoroughly verified, ensuring that all Increments work together.",
      "The sum of all the Product Backlog items completed during the Sprint\nAll items in the Sprint Backlog that could be released regardless of whether the Product Owner decides to actually do it",
      'All "Done" items in the Sprint Backlog',
      "The sum of all the Product Backlog items completed during the Sprint, excluding the value of the increments of all previous Sprints",
    ],
    correctAnswer: 0,
    explanation:
      "Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together.",
  },
  {
    id: "213873e5-533a-46cf-aadf-5c69dbc9b2d2",
    chapter: 1,
    question:
      "True or False: According to the Scrum framework, the Scrum components and rules for the project are chosen depending on the project's specific characteristics.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "While implementing only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.",
  },
  {
    id: "88d264bd-f810-41d5-b5a7-f1fabde638db",
    chapter: 1,
    question:
      "Who is allowed to change the actionable plan for delivering the Increment?\n(choose the best answer)",
    options: [
      "The Developers and the Product Owner",
      "The Product Owner",
      "The Developers",
      "The Scrum Master",
      "The Scrum Team",
      "Upper management",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint in order to achieve the Sprint Goal.\n\nNo one else tells them how to turn Product Backlog items into Increments of value.",
  },
  {
    id: "d34bd74c-3e92-4d5a-a714-3196aef581e5",
    chapter: 1,
    question:
      "True or False: The Definition of Done is created during the first Sprint and remains unchanged until the end of the project.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "During the Sprint Retrospective, the Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done. Thus, the Definition of Done can be adapted.",
  },
  {
    id: "b63260c8-6366-48dc-b2ae-b1cfed999089",
    chapter: 1,
    question:
      "At some point during the product development cycle, a key stakeholder started using the product and was unhappy with its quality. Thus, he made his concern very clear to the Product Owner. According to the key stakeholder, the product’s performance was below what he expected. Thus, the Product Owner went to talk to you, the Scrum Master, about this issue. What should you tell her?\n(choose the best two answers)",
    options: [
      "Tell the Product Owner that she should bring this up only on the Sprint Retrospective",
      "Coach the Product Owner on how to address the Developers about this issue",
      "Encourage the Product Owner to add Product Backlog items focusing on the given quality concerts and express the stakeholder's concern to the Developers",
      "Tell the Product Owner that, in Scrum, the technical expertise is expected from the Developers and they are the ones responsible for defining acceptable quality standards, not the stakeholder",
      "Tell the Product Owner that she should talk to the testers, because, such an issue should not leak to the users and they must improve their quality control procedures",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "In Scrum,  the team is encouraged to adapt as soon as they receive new insights. Hence, the Product Owner should be informed promptly about the key stakeholder's concerns, without waiting for the Sprint Retrospective. Next, it's crucial that the Developers are apprised of the feedback. It might be necessary to guide the Product Owner on how to communicate this issue effectively to them to avoid any negative impact. Remember, Scrum does not identify a specific \"testers\" role. All members of the Scrum Team collaboratively work towards solving problems, including quality issues. In relation to quality concerns, these can be addressed in two ways. They can be treated as individual items on the Product Backlog, or incorporated within the Definition of Done. Lastly, it's essential to note that in Scrum, no single member is assumed to have complete knowledge to solve a complex problem. Scrum operates on a continuous process of inspection and adaptation to respond to arising issues.",
  },
  {
    id: "a025c9ec-0d29-4cb8-91c4-97ec95533897",
    chapter: 1,
    question:
      "At some point, several of the Developers from a Scrum Team come to you, the Scrum Master, complaining that the work identified for the upcoming Sprint will require a full-time commitment from a specialist who is external to the teams. What should you consider in this situation?\n(choose the best two answers)",
    options: [
      "The need for the team to keep delivering value fast",
      "The need for the Developers to keep a sustainable pace",
      "The ability of the Scrum Teams to produce Increments",
      "The benefits of having the Developers figure out a solution for themselves",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "Scrum Teams are self-managed and cross-functional. Thus, the Scrum Master should coach the team to be autonomous whenever possible. However, it is also important for the Scrum Master to consider the cases in which specialists are really needed and that problem at hand is too complex for the Developers to figure out on their own. In these cases, the Scrum Master can work with the Developers with the possibility of having specialized training or even having the specialist join the Scrum Team for the period in which his/her expertise is needed. Whatever the case, keep in mind that the Scrum Master has to respect the Scrum Team's self-management, but fulfill his/her accountability for the Scrum Team’s effectiveness.",
  },
  {
    id: "74fce680-d763-49e3-b783-04512b7b965e",
    chapter: 1,
    question:
      "What two things should happen with undone Product Backlog items at the end of the Sprint?\n(choose the best two answers)",
    options: [
      "The items should be demonstrated during the Sprint Review, the Sprint's velocity should consider the part of the items that were Done during the Sprint, and the remaining work should be considered as a new Product Backlog item",
      "They must not be included as part of the Increment",
      "They should be placed on the Product Backlog",
      "If the Product Owner is satisfied with the work, he can accept them and release them",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "The Definition of Done creates transparency by providing everyone a shared understanding of what work was completed as part of the Increment. If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.",
  },
  {
    id: "62051951-6122-41f8-94e7-01aeb06dde6a",
    chapter: 1,
    question:
      "Which of the following is true about Artifact's commitments?\n(choose the best answer)",
    options: [
      "They are optional",
      "The Increment commits to the Definition of Ready",
      "They are mandatory",
      "The Product Backlog commits to the Product Vision",
    ],
    correctAnswer: 2,
    explanation:
      "Each artifact contains a commitment to ensure it provides information that enhances transparency and focus against which progress can be measured:\n\n- For the Product Backlog it is the Product Goal.\n\n- For the Sprint Backlog it is the Sprint Goal.\n\n- For the Increment it is the Definition of Done.\n\nThese commitments exist to reinforce empiricism and the Scrum values for the Scrum Team and their stakeholders.",
  },
  {
    id: "f58be3f0-85a1-47f6-9eeb-288d07f5bf10",
    chapter: 1,
    question:
      "Which of the following is false about the Product Goal.\n(choose the best answer)",
    options: [
      "When reaching the Product Goal, the Scrum Team chooses to release or not the Increment.",
      "The Product Goal is the long-term objective of the Scrum Team.",
      "The Product Goal is in the Product Backlog.",
      "The Product Owner is also accountable for developing and explicitly communicating the Product Goal.",
      "The Scrum Team must fulfill (or abandon) one Product Goal before taking on the next.",
      "For the Product Goal to be fulfilled, the entire Product Backlog must be Done.",
    ],
    correctAnswer: 5,
    explanation:
      "The Product Goal describes a future state of the product which can serve as a target for the Scrum Team to plan against. The Product Goal is in the Product Backlog. The rest of the Product Backlog emerges to define “what” will fulfill the Product Goal.\nThe Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next.",
  },
  {
    id: "95cfd53f-6614-4f35-a488-09a5aedaf43f",
    chapter: 1,
    question: "What can Scrum be used for?\n(choose all that apply)",
    options: [
      "Develop products and enhancements.",
      "Release products and enhancements, as frequently as many times per day.",
      "Develop and sustain Cloud (online, secure, on-demand) and other operational environments for product use",
      "Research and identify viable markets, technologies, and product capabilities.",
      "Sustain and renew products.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3, 4],
    isMultiSelect: true,
    explanation:
      "Scrum was initially developed for managing and developing products. Starting in the early 1990s, Scrum has been used extensively, worldwide, to:\n\n1. Research and identify viable markets, technologies, and product capabilities;\n\n2. Develop products and enhancements;\n\n3. Release products and enhancements, as frequently as many times per day;\n\n4. Develop and sustain Cloud (online, secure, on-demand) and other operational environments for product use; and,\n\n5. Sustain and renew products.\n\nScrum has been used to develop software, hardware, embedded software, networks of interacting function, autonomous vehicles, schools, government, marketing, managing the operation of organizations and almost everything we use in our daily lives, as individuals and societies.",
  },
  {
    id: "f50a6d55-cf34-4ccc-bcb5-cbb3db8445d5",
    chapter: 1,
    question:
      "True or False: The Sprint for all the Scrum Teams working on the same product must start and end on the same date.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum does not require having aligned Sprints for multiple teams. The Scrum Teams self-manage and define the best option for them.",
  },
  {
    id: "95c8a8b9-d927-4c30-ba55-7f2730d13faa",
    chapter: 1,
    question:
      "You are a Scrum Master and about to begin working with five new Scrum Teams; all working on the same product. Which of the following should you strive for?\n(choose the best two answers)",
    options: [
      "There should be five Product Owners, one for each Scrum Team",
      "There should be five Product Owners, reporting to a Chief Product Owner",
      "There should be only a single Product Backlog",
      "There should be five Product Backlogs, one for each Scrum Team",
      "There should be only a single Product Owner",
      "There should be five Project Backlogs, inheriting from a single Product Backlog",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation:
      "The group of five Scrum Teams working together to deliver a single product is called a Nexus. A Nexus has a single Product Owner who manages a single Product Backlog from which the Scrum Teams work.",
  },
  {
    id: "b54fe49a-29ef-4222-a046-f296f6a5d7be",
    chapter: 1,
    question:
      "How does the Scrum Master serve the Scrum Team?\n(choose the best three answers)",
    options: [
      "Coaching the team members in self-management and cross- functionality",
      "Managing the Developers",
      "Helping the Scrum Team focus on creating high-value Increments that meet the Definition of Done",
      "Causing the removal of impediments to the Scrum Team's progress",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Master serves the Scrum Team in several ways, including:\n\n- Coaching the team members in self-management and cross-functionality;\n- Helping the Scrum Team focus on creating high-value Increments that meet the Definition of Done;\n- Causing the removal of impediments to the Scrum Team’s progress; and,\n- Ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.",
  },
  {
    id: "2315cbfb-b531-4f05-8b0a-d3c3f47312c0",
    chapter: 1,
    question:
      "In Scrum, what does a cross-functional team consist of?\n(choose the best answer)",
    options: [
      "Project manager",
      "Architect",
      "Individuals with the skills necessary to accomplish the work",
      "Scrum Master",
    ],
    correctAnswer: 2,
    explanation:
      "A cross-functional team in Scrum consists of individuals who collectively possess the skills required to develop a valuable, useful Increment.",
  },
  {
    id: "a5c9e6df-2095-4c7e-a21c-b6d3d77cb10c",
    chapter: 1,
    question:
      "Which statements about the Sprint Review are true?\n(choose the best two answers)",
    options: [
      "It is the first event of the Sprint",
      "The Product Owner is not required to attend",
      "The Scrum Master might facilitate the event",
      "Stakeholders are invited to attend and provide feedback",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "The Sprint Review is an important event held at the end of a Sprint. It is an opportunity for the Scrum Team to present and inspect the Increment they have developed. The purpose of the Sprint Review is to gather feedback from stakeholders and collaborate on future product development.",
  },
  {
    id: "251b11f8-4c3d-43a0-9065-c750f225def2",
    chapter: 1,
    question:
      "What is considered the optimal size (although not mandatory) for a Scrum Team?\n(choose the best answer)",
    options: [
      "4 to 6 members",
      "10 or fewer members",
      "5 to 20 members",
      "2 to 11 members",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the optimal size of a Scrum Team is small enough to remain nimble and large enough to complete significant work. Although there is no fixed rule, the Scrum Team typically consists of 10 or fewer members to promote effective communication, collaboration, and self-organization.",
  },
  {
    id: "a08119d8-35cf-4024-a906-3bba8d57aa75",
    chapter: 1,
    question:
      "Which artifact serves as a plan for realizing the Sprint Goal?\n(choose the best answer)",
    options: [
      "Release Plan",
      "Burnup Chart",
      "Sprint Backlog",
      "Product Roadmap",
      "Product vision",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Backlog is the artifact that contains the plan for realizing the Sprint Goal. It is a highly visible, real-time representation of the work selected from the Product Backlog for the current Sprint. The Sprint Backlog is created collaboratively by the Developers during the Sprint Planning event and is updated throughout the Sprint as work is completed or new work is added.",
  },
  {
    id: "3c90bfa8-3a91-410d-af0f-cb9f0f6d940f",
    chapter: 1,
    question:
      "What does Scrum increase transparency around after several Sprints?\n(choose the best answer)",
    options: [
      "The color of the office walls",
      "The preferred programming language",
      "Both the ability of the Scrum Team to create Increments and information on real progress",
      "The number of coffee breaks",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum increases transparency around both the ability of the Scrum Team to create Increments and information on real progress. Transparency is one of the three pillars of Scrum and is essential for effective inspection and adaptation. By making the work and progress visible, Scrum enables better collaboration, accountability, and decision-making.",
  },
  {
    id: "1ffe57b1-a1af-4c01-905d-75f5cce059a8",
    chapter: 1,
    question:
      "During the Sprint Review, stakeholders express their concern about the lack of visibility into the Scrum Team's future work. They are unable to understand what the team may work on in the future. Who is accountable for addressing this concern?\n(choose the best answer)",
    options: [
      "Scrum Master",
      "Business Analysts",
      "Developers",
      "Product Owner",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team, which includes resolving the issue of upcoming work not being visible to stakeholders. It is the Product Owner's responsibility to manage the Product Backlog and ensure that it is transparent, ordered, and understood by all stakeholders. The Product Owner should collaborate with stakeholders to provide visibility into the upcoming work and communicate the product vision, roadmap, and upcoming priorities.",
  },
  {
    id: "c312aaaa-100f-4816-a894-552a99f79cd3",
    chapter: 1,
    question:
      "True or False: In Scrum, it is mandatory to assign specific Product Backlog items to individual Developers during the Sprint Planning event.\n(choose the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The statement "Developers must be assigned to own Product Backlog items at the Sprint Planning event" is false. In Scrum, Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint. The ownership of the work is collective, and there is no requirement for assigning specific items to individual Developers. Instead, the Developers self-manage and collaborate to determine how to best accomplish the work throughout the Sprint.',
  },
  {
    id: "8f1c1780-8c55-4884-bc5a-03930876280d",
    chapter: 1,
    question:
      "During the Sprint Review, what is the main objective for the Scrum Team and stakeholders?\n(choose the best answer)",
    options: [
      "Assess the progress of the Developers",
      "Evaluate the performance of the Scrum Master",
      "Inspect the outcome of the Sprint and determine future adaptations.",
      "Assign new tasks to the Product Owner",
    ],
    correctAnswer: 2,
    explanation:
      "During the Sprint Review, the Scrum Team and stakeholders come together to inspect what has been accomplished during the Sprint and adapt the Product Backlog as needed. The primary purpose of the Sprint Review is to collaborate on what to do next. The Scrum Team and stakeholders provide feedback, discuss potential adaptations, and determine the next steps to maximize the value of the product.",
  },
  {
    id: "8c06146b-8f24-42ba-81e5-4c79bb091fc0",
    chapter: 1,
    question:
      "During the Sprint, if the Developers have available capacity for additional work, who should be involved in deciding which additional work to select?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Business Analyst",
      "The Developers",
      "The Product Owner",
    ],
    correctAnswer: 2,
    explanation:
      "During the Sprint, the Developers may renegotiate the scope with the Product Owner as more is learned. However, keep in mind that the Sprint Backlog is a plan by and for the Developers. Therefore, the Developers have the final say regarding such decision and, for this reason, for this tricky question, it is the best answer. If you still have doubts about this question, recall that during Sprint Planning the Developers select items from the Product Backlog to include in the current Sprint.",
  },
  {
    id: "3536436a-c43d-41ca-9d85-5238f8109136",
    chapter: 1,
    question:
      "Which statements align with the guidance provided in the Scrum Guide regarding changes during the Sprint? Select all that apply.\n(choose the best three answers)",
    options: [
      "Quality is a priority and must not decrease",
      "No changes are made that would endanger the Sprint Goal",
      "The Sprint Goal is frequently modified to reflect the status of the remaining work",
      "The Developers can renegotiate the scope with the Product Owner",
      "The Sprint scope is defined at Sprint Planning and remains fixed throughout the Sprint",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, during the Sprint, During the Sprint: No changes are made that would endanger the Sprint Goal; Quality does not decrease; The Product Backlog is refined as needed; and, Scope may be clarified and renegotiated with the Product Owner as more is learned.",
  },
  {
    id: "51626b06-9b8e-4817-8215-0f3977f2f3db",
    chapter: 1,
    question:
      "True or False: Is it true that each Sprint can be regarded as a short project?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, each Sprint is a time-boxed event that serves as a container for the work to be done. It has a defined goal, a set of deliverables, and a time frame, making it similar to a short project. The Scrum Team collaboratively works on delivering a potentially releasable Increment of the product by the end of each Sprint. Therefore, the statement that each Sprint may be considered a short project is true.",
  },
  {
    id: "20563aef-a352-45b6-8ea2-7048bf326db0",
    chapter: 1,
    question:
      "Which option provides the most accurate description of the Definition of Done?\n(choose the best answer)",
    options: [
      "A set of criteria agreed upon by the Scrum Team to determine when work is complete and meets quality standards",
      "Whatever the Scrum Master deems necessary for the Increment to be considered done",
      "Whatever the Product Owner deems necessary for the Increment to be considered done",
      "Whatever the Developers deem necessary for the Increment to be considered done",
    ],
    correctAnswer: 0,
    explanation:
      'According to the Scrum Guide, the Definition of Done is a shared understanding within the Scrum Team of the criteria that a product increment must meet to be considered "done" and potentially releasable. It represents the quality standards that apply to the product increment. The Definition of Done encompasses all the activities and work necessary to ensure that the product increment is usable, meets the expectations of stakeholders, and achieves the desired level of quality. Therefore, answer A is correct. Answers B, C, and D are incorrect because the Definition of Done is not determined solely by the Scrum Master, Product Owner, or Developers but by the entire Scrum Team.',
  },
  {
    id: "0ca57257-bca9-4e66-9f50-ead68fdcfe4a",
    chapter: 1,
    question:
      "At what level of refinement should a Product Backlog item be when it is positioned near the top of the Product Backlog?\n(choose the best answer)",
    options: [
      "The responsible developer should be identified.",
      "It should be small enough to be completed within one Sprint.",
      "All the information about it must be known.",
      "The tasks required for completing it should be fully enumerated.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Product Backlog is an ordered list of items that represents the work to be done. The items located at the top of the Product Backlog should be refined to a level where they are small enough to be completed within one Sprint. However, note that this is not a rule but a good practice since it ensures that the items are well understood, have clear acceptance criteria, and are feasible for the Developers to complete. Answer B is correct. Answers “The responsible developer …”, “All the information … ”, and “The tasks required … ” are incorrect because the level of refinement required for a Product Backlog item is not about identifying the responsible developer, having all the information known, or identifying all the tasks. It is primarily about ensuring that the item is small enough to be completed within a single Sprint.",
  },
  {
    id: "302c1661-58bd-498d-87ae-fd33ad0d3f23",
    chapter: 1,
    question:
      "What level of completeness should the Sprint Backlog have by the end of Sprint Planning?\n(choose the best answer)",
    options: [
      "There should be a minimum of 5 tasks.",
      "Each task should be clearly defined.",
      "It should be complete enough to provide work for the Developers during the initial days of the Sprint.",
      "The Scrum Master will determine the level of completeness.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is a plan by and for the Developers. It should contain enough detail that Developers can inspect their progress in the Daily Scrum and begin meaningful work immediately. While it does not need to be fully complete at the end of Sprint Planning, it should provide enough clarity and structure for the initial days of the Sprint. The Sprint Backlog is a living artifact that is continuously updated throughout the Sprint as more is learned.",
  },
  {
    id: "0ac338b5-ba54-43fe-a347-f1bfdf37357e",
    chapter: 1,
    question:
      "How does the Product Backlog respond to changes in the environment in which the product will be used?\n(choose the best answer)",
    options: [
      "The Product Backlog should be frozen and no changes should be made.",
      "The Product Backlog evolves to incorporate the changes.",
      "separate Product Backlog is created to handle the changes, while the original backlog remains unchanged.",
      "The Product Backlog is discarded, and a new one is created from scratch.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Product Backlog is dynamic and constantly evolving. It serves as an ordered list of all the work needed to develop and sustain the product. As the environment in which the product will be used changes, the Product Backlog must also adapt to reflect these changes. This ensures that the most valuable and relevant items are prioritized and worked on by the Scrum Team.",
  },
  {
    id: "4093dc5c-8069-447b-8327-e04309438126",
    chapter: 1,
    question:
      "What distinguishes the product burn-down chart from the Sprint burn-down chart?\n(choose the best answer)",
    options: [
      "The product burn-down chart displays the number of Sprints on the y-axis, while the Sprint burn-down chart shows the number of tasks on the y-axis.",
      "The product burn-down chart represents the Sprints on the y-axis, while the Sprint burn-down chart represents the Sprint on the y-axis.",
      "The product burn-down chart illustrates the Sprints on the x-axis, whereas the Sprint burn-down chart represents the days of the Sprint on the x-axis.",
      "The product burn-down chart shows the remaining effort in story points, while the Sprint burn-down chart shows the remaining time in hours.",
    ],
    correctAnswer: 2,
    explanation:
      "The product burn-down chart shows the amount of work remaining in the Product Backlog over time, usually represented by the number of Product Backlog Items (PBIs) on the y-axis and the Sprints on the x-axis. On the other hand, the Sprint burn-down chart shows the amount of work remaining in the Sprint Backlog over time, typically represented by the remaining tasks on the y-axis and the days of the Sprint on the x-axis.",
  },
  {
    id: "b6fa7254-7b98-4589-8604-f1e67ec372d7",
    chapter: 1,
    question:
      "During a Sprint, the Developers encounter a situation where they lack understanding of the requirements to deliver the Increment. What should they do?\n(choose the best answer)",
    options: [
      "Seek assistance from a specialist to resolve the issue within the remaining time of the Sprint.",
      "Postpone the work to a future Sprint.",
      "Collaborate closely with the Product Owner to gain a clear understanding of what needs to be accomplished.",
      "Do nothing.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for understanding the requirements and delivering the Increment. If the Developers realize in the middle of the Sprint that they don't understand the requirements, the best course of action is to collaborate with the Product Owner to gain clarity and understanding. By actively engaging in communication and collaboration with the Product Owner, the Developers can work together to address the issue and ensure that the Sprint goal can still be achieved.",
  },
  {
    id: "76237ee5-1fdf-4f1d-a29b-f8dd440e7e2b",
    chapter: 1,
    question:
      "When is the optimal time to make adaptations after identifying a problem during an inspection in Scrum?\n(choose the best answer)",
    options: [
      "During the next Scrum event following the inspection.",
      "As quickly as possible after the problem is identified.",
      "After obtaining approval from the Product Owner.",
      "Only during the Sprint Retrospective.",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, inspection is one of the three pillars, along with transparency and adaptation. When a problem is identified during an inspection, the best time to adapt is as soon as possible. Scrum emphasizes a continuous improvement mindset, and prompt action is essential to address issues and make necessary adjustments. Waiting until the next Scrum event or the Sprint Review might result in prolonged inefficiencies or missed opportunities for improvement. Therefore, the most appropriate response is to adapt as soon as the problem is discovered.",
  },
  {
    id: "07705f35-a8a7-405f-a1f5-addb0b86c7ce",
    chapter: 1,
    question:
      "Is it the responsibility of the Scrum Team to determine which Scrum events are necessary during the Sprint?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'According to the Scrum Guide, the events in Scrum are time-boxed opportunities for the Scrum Team to inspect and adapt. The guide clearly defines the mandatory Scrum events: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. These events provide transparency, inspection, and adaptation. The Scrum Team does not have the authority to add, remove, or change these events, as they are essential for the proper implementation of Scrum. Therefore, the statement "It is up to the Scrum Team to decide which events are needed during the Sprint" is false. However, keep in mind that they can add other events such as “Product Backlog refinement sessions” as needed.',
  },
  {
    id: "06b6f20c-80ef-4da0-ae85-2abd2abb4258",
    chapter: 1,
    question:
      "True or False: The Scrum Team must handle non-functional requirements in the Definition of Done?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Non-functional or system requirements, such as performance, security, maintainability, and usability, are important aspects that need to be addressed to ensure the overall quality of the product. The Scrum Team might include them as Product Backlog items or capture them in the Definition of Done, as needed. In other words, if the question replaced the word “must” by “could”, the sentence would be True.",
  },
];

// Practice Test #2 — 181 questions
export const questionsPracticeTest2: Question[] = [
  {
    id: "2205e07f-c785-4ad4-852e-7a190005dfc6",
    chapter: 2,
    question:
      "It's up to the self-managing team to decide which Scrum artifacts are needed in the project.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Self-managing is not unlimited; e.g., you should follow the Scrum framework. While implementing only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.",
  },
  {
    id: "5b2d3113-594f-405a-9bd7-a2b3a238238d",
    chapter: 2,
    question:
      "At least one high-priority process improvement item exists in each Sprint Backlog.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'False. This is an old rule from Scrum Guide 2017 and removed in Scrum Guide 2020.\n"The Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.", Scrum Guide 2020.',
  },
  {
    id: "e621581f-dd5b-42f7-9c73-0cab87954833",
    chapter: 2,
    question: "When is the Sprint over?\n(Select the best answer)",
    options: [
      "When the timeboxed duration is over",
      "When the Product Owner announces the end of the Sprint",
      "When the Scrum Master announces the end of the Sprint",
      "When the Sprint Backlog tasks are done",
    ],
    correctAnswer: 0,
    explanation:
      "It's a simple question: you need to know what timeboxing means, and that Sprints are timeboxed. Other than the normal ends of Sprints, the Product Owner also has the authority to cancel a Sprint.",
  },
  {
    id: "b8323bbe-f67f-4355-a370-69f119abe429",
    chapter: 2,
    question:
      "Scrum is a technique for developing complex products.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'Scrum is "considered" a framework, not a methodology, process, techniques, etc. It can be used to develop new products or maintain/sustain existing ones.',
  },
  {
    id: "099e78e9-2f5a-4cc5-b2d7-1bed3ab0e680",
    chapter: 2,
    question:
      "On average, items on the Product Backlog tend to be _____\n(Select the best answer)",
    options: [
      "Smaller than those on the Sprint Backlog",
      "The same size as those on the Sprint Backlog",
      "Larger than those on the Sprint Backlog",
    ],
    correctAnswer: 2,
    explanation:
      "This is how it works: When you first add the items to the Product Backlog, you don't have to break them down into very small and clear items, because it's a form of upfront planning. Some of them may be very large. When you order the items, if they are on the top of the list, you have to make them clear, and make sure they can fit into one Sprint; therefore, you will break them down into smaller items. Some of those child items may remain on the top, and some may go down. As a result, items on the top of the Product Backlog are on average smaller than those on the bottom. On the other hand, items on the Sprint Backlog come from the top of the Product Backlog, therefore, we can say that the items on the Sprint Backlog are, on average, smaller than items on the Product Backlog.",
  },
  {
    id: "ed7310c3-b05d-4ef0-8bcd-9e8d3fef70de",
    chapter: 2,
    question:
      "A Sprint initiates with a Sprint Planning.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Sprint Planning initiates the Sprint by laying out the work to be performed for the Sprint.",
  },
  {
    id: "d48a3199-2b4f-4d92-b5f0-092543c1652e",
    chapter: 2,
    question:
      "How much time does the Product Owner spend on Product Backlog Refinement?\n(Select the best answer)",
    options: [
      "As much as needed",
      "Usually not more than 5% of their time",
      "Not more than 30% of their time",
      "Usually not more than 20% of their time",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Owner spends as much time as needed on Product Backlog Refinement.",
  },
  {
    id: "77be37cb-5bf7-4860-99a6-c7c92e5a771b",
    chapter: 2,
    question:
      "How often should the composition of the team change?\n(Select the best answer)",
    options: [
      "Every Sprint, to encourage creativity and openness",
      "Never, because it reduces productivity",
      "As needed, without need to be concerned about changes in productivity",
      "As needed, considering that it will have a short-term reduction in productivity",
    ],
    correctAnswer: 3,
    explanation:
      "Sometimes you will see questions like this in the exam. You may know that the composition of the team should not change during the Sprint, yet, the correct choice here may imply that. Well, it is up to you to interpret it in a way that it doesn't mean such a thing!\nSo, the precise statement would be \"As needed, so long as it's not in the middle of the Sprint, and we consider that it may have a short-term reduction in productivity\".",
  },
  {
    id: "a8b78750-222b-4dee-a0ee-fa8ccd9f490c",
    chapter: 2,
    question:
      "Which three of the following are pillars of Scrum?\n(Select the best three answers)",
    options: [
      "Collaboration",
      "Inspection",
      "Adaptation",
      "Sustainable ace",
      "Value optimization",
      "Transparency",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 5],
    isMultiSelect: true,
    explanation:
      "Pillars are transparency, inspection, and adaptation.\nMake sure you're not confusing these pillars with the Scrum values (commitment, courage, focus, openness, and respect).",
  },
  {
    id: "a0a52391-9061-4c28-92b4-d7a053318200",
    chapter: 2,
    question:
      "When does a Scrum Master cancel a Sprint?\n(Select the best answer)",
    options: [
      "When there's an unsolved technical dependency",
      "When the Sprint Goal becomes obsolete",
      "When not enough resources are available for the project",
      "The Scrum Master doesn't have the authority to cancel the Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, only the Product Owner has the authority to cancel a Sprint if the Sprint Goal becomes obsolete.",
  },
  {
    id: "59bdcf08-08ac-40fd-bd5a-36bc060c4751",
    chapter: 2,
    question: "What does a burn-down chart measure?\n(Select the best answer)",
    options: [
      "The amount of business value delivered to the customer",
      "Work that is done based on the Definition of Done",
      "Cost of the project across time",
      "Work remaining across time",
    ],
    correctAnswer: 3,
    explanation:
      "A burn-down chart shows the amount of work which is thought to remain in a backlog. Time is shown on the horizontal axis and work remaining on the vertical axis. As time progresses and items are drawn from the backlog and completed, a plot line showing work remaining may be expected to fall. The amount of work may be assessed in any of several ways such as user story points or task hours. Work remaining in Sprint Backlogs and Product Backlogs may be communicated by means of a burn-down chart.",
  },
  {
    id: "7b5d5988-6abf-4b64-9992-ed4be5cf5a9f",
    chapter: 2,
    question:
      "What do we do with Done items when the Sprint is canceled?\n(Select the best answer)",
    options: [
      "They should be moved to the next Sprint Backlog.",
      "They should be moved back to the Product Backlog, and will be taken care of in future Sprints.",
      "They will be reviewed and added to the Increment.",
    ],
    correctAnswer: 2,
    explanation:
      "- Items in the Sprint Backlog come from the Product Backlog. So, if it's supposed to be done, we will move them back to the Product Backlog, and if they are still on the top of the Product Backlog, they will be picked for the next Sprint. However, this question is about items that are Done, and there's no reason to move them back.\n- But they are Done, why should we move them back to the Product Backlog.",
  },
  {
    id: "394eb4de-a01b-4dcf-a6c4-be2915b02ae5",
    chapter: 2,
    question:
      "Which two statements describe what happens when organizations change the Scrum terminology while implementing it?\n(Select the best two answers)",
    options: [
      "They will get better results adopting Scrum this way.",
      "Management may feel less enthusiastic about the change.",
      "It's necessary to tailor Scrum to suit the project.",
      "The change might not be obvious to everyone, and therefore very little change actually happens.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "Scrum is a simple framework rather than a comprehensive methodology, and it contains only the necessary minimums that you need in every project. So, instead of normal tailoring (adjusting the existing elements), you will follow everything that is described in Scrum, and suit it to your project by the practices and techniques that you add; e.g. Planning Poker, Pair-Programming, and Test-Driven Development.\nWhen it comes to the terminology, Scrum.org believes that it's better if you don't change it.",
  },
  {
    id: "68b30aca-cc06-453c-9ac5-72bc590cfb13",
    chapter: 2,
    question:
      "Which two of the following are required by Scrum?\n(Select the best two answers)",
    options: [
      "Answering the three standard questions during Daily Scrums",
      "Definition of Done",
      "Having full-time developers",
      "User Stories",
      "Sprint Retrospectives",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      'The Definition of Done is a required component in Scrum as it ensures that the Increment meets the quality standards and criteria agreed upon by the Scrum Team. It defines the necessary conditions that must be met for a Product Backlog item to be considered "done."\n\nSprint Retrospectives are also a required Scrum event where the Scrum Team reflects on their work during the Sprint and identifies areas for improvement. It provides an opportunity to inspect and adapt their processes, identify strengths and weaknesses, and make adjustments to enhance their effectiveness.\n\nWhile answering the three standard questions during Daily Scrums, having full-time developers, and using user stories are common practices in Scrum, they are not explicitly required by the Scrum framework.',
  },
  {
    id: "65d6b413-99db-439d-9f43-9fc151e1b3f3",
    chapter: 2,
    question:
      "Which three of the following are timeboxed?\n(Select the best three answers)",
    options: [
      "Release Retrospective",
      "Daily Scrum",
      "Sprint testing",
      "Sprint Retrospective",
      "Sprint Zero",
      "Sprint",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3, 5],
    isMultiSelect: true,
    explanation:
      "Scrum has 5 timeboxed events: Sprint, Sprint Planning, Daily Scrum, Sprint Review and Sprint Retrospective.",
  },
  {
    id: "9bb7d1e6-c6a3-4289-8773-b094e81f4661",
    chapter: 2,
    question:
      "Which two statements explain when a Product Backlog item is considered complete?\n(Select the best two answers)",
    options: [
      "When the customer approves its completeness",
      "When no work is left based on the Definition of Done",
      "When user acceptance tests are passed",
      "When it's usable",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "- They can still miss something. On the other hand, if the test is focused on the unit, what about testing the integrated solution? It may break something.\n- They can still miss something. For instance, usually, they won't cover non-functional requirements.\n- Product Backlog item that you have in the Sprint Backlog is Done, when it satisfies the Definition of Done.\nNote: usable for end-users = potentially shippable = potentially releasable = Done based on the Definition of Done.",
  },
  {
    id: "f4d41c7c-c3d0-4ade-b05e-254f7fcad946",
    chapter: 2,
    question:
      "Which two statements are correct about Daily Scrums?\n(Select the best two answers)",
    options: [
      "Developers must answer the 3 standard questions during the meeting.",
      "It's timeboxed for 2 minutes per developer.",
      "Only the Developers participate in the meeting.",
      "It's held at the same time and place every day.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "Scrum Event that is a 15-minute time-boxed event held each day for the Developers. The Daily Scrum is held every day of the Sprint. At it, the Developers plans work for the next 24 hours. This optimizes team collaboration and performance by inspecting the work since the last Daily Scrum and forecasting upcoming Sprint work. The Daily Scrum is held at the same time and place each day to reduce complexity.",
  },
  {
    id: "33bb0ab6-3bea-41e9-adbe-95439c6280ae",
    chapter: 2,
    question:
      "The Product Owner should have a complete Product Backlog before the first Sprint can start.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Backlog is never complete. It's always evolving in adaptive development.",
  },
  {
    id: "cae10ade-6316-4b07-adc7-b10975c88974",
    chapter: 2,
    question:
      "Which of the following has the most to do with capturing and using lessons learned?\n(Select the best answer)",
    options: [
      "Sprint Planning",
      "Product Backlog Refinement",
      "Sprint Retrospective",
      "Sprint Review",
    ],
    correctAnswer: 2,
    explanation:
      "Sprint Retrospective is about discussing the way work was done and finding ways to improve it next time; this is mainly about lessons learned.",
  },
  {
    id: "5ebc1412-0854-49bd-86ff-08c7073cab86",
    chapter: 2,
    question:
      "Which of the following is required by Scrum?\n(Select the best answer)",
    options: [
      "Burn-down charts",
      "Sprint Retrospectives",
      "User Stories",
      "Story Points",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Retrospective is a mandatory Scrum event. Conversely, although burn-down charts, user stories, and story points are commonly used in Scrum, they are not explicitly required by the Scrum framework.",
  },
  {
    id: "d4e8e5d9-c537-4c0c-948d-e3466d36644e",
    chapter: 2,
    question:
      "Scrum Teams are allowed to use burn-up charts instead of burn-down charts.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Scrum Team can adopt practices to forecast progress, like burn-downs, burn-ups, or cumulative flows. However, these do not replace the importance of empiricism.",
  },
  {
    id: "08f120ba-dbcb-41a0-8d64-3403a3c65f97",
    chapter: 2,
    question:
      "How many people are there in a Scrum Team with optimal size?\n(Select the best answer)",
    options: ["10 or less.", "4 to 12", "3 to 11", "3 to 10"],
    correctAnswer: 0,
    explanation:
      "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people. In general, we have found that smaller teams communicate better and are more productive. If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product.",
  },
  {
    id: "fa036d84-4966-4b5f-afe2-8c9a6c3b1ae2",
    chapter: 2,
    question: "Who's responsible for quality?\n(Select the best answer)",
    options: ["Team leaders", "The Developers", "Testers", "The Scrum Team"],
    correctAnswer: 3,
    explanation:
      "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",
  },
  {
    id: "e0562a43-39ff-4f2d-9e5f-3e27acaa22ae",
    chapter: 2,
    question:
      "Who is responsible for setting the timeboxed duration of Sprints?\n(Select the best answer)",
    options: [
      "Stakeholders",
      "The Scrum Team",
      "The Project Manager",
      "The Business Analyst",
      "The Developers",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, the timeboxed duration of Sprints is set by the whole Scrum Team, which includes the Product Owner, Scrum Master, and Developers. The team collaboratively decides on the length of Sprints based on factors such as the complexity of the work, predictability, and the ability to deliver a potentially releasable Increment at the end of each Sprint.",
  },
  {
    id: "014ae2a0-5dc4-497a-b8ee-2db097f80e3c",
    chapter: 2,
    question:
      "The Product Owner can also be a Developer\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Scrum does not prescribe that each accountability must be a full-time job or that a person cannot have multiple accountabilities. What matters most is that the Product Owner effectively performs their responsibilities, collaborates with the Scrum Team and stakeholders, and maximizes the value of the product.",
  },
  {
    id: "0265a683-c42a-4ad6-90a7-855e061f44b2",
    chapter: 2,
    question:
      "A 2x increase in the number of Developers will double productivity.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "When more developers are added to the team, there's usually a short-term decrease in productivity because other members have to spend time and effort familiarizing the new members with the solution and the environment of the project. After a while, the existence of new members may increase productivity, but even if it does, it's usually not a linear increase because, for example, having more people increases communication channels, which consumes some of the capacity.\n\nRegardless, adding more people to the project sometimes doesn't have any positive result. This is known as Brooks's Law: adding human resources to a late software project makes it later. In other words, \"nine women can't make a baby in one month\"!\nIt can increase productivity in the long-term, but probably not linearly.",
  },
  {
    id: "ea0d3831-9c93-407b-b43d-3e8468c4a9d1",
    chapter: 2,
    question:
      "Scrum is a methodology for developing complex products.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'Scrum is "considered" a framework, not a methodology, process, techniques, etc. It can be used to develop new products or maintain/sustain existing ones.',
  },
  {
    id: "d18b07b7-cd94-409a-a6cc-adcd002d97ec",
    chapter: 2,
    question:
      "Which three Scrum values are demonstrated by focusing on the most valuable items first?\n(Select the best three answers)",
    options: [
      "Cross-functionality",
      "Courage",
      "Earned Value",
      "Focus",
      "Respect",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3, 4],
    isMultiSelect: true,
    explanation:
      "Scrum values are commitment, courage, focus, openness, and respect.",
  },
  {
    id: "f5c9b29f-bf54-4ecd-8053-f92027d140d8",
    chapter: 2,
    question:
      "Which of the following is true about the Sprint Events?\n(Select the best answer)",
    options: [
      "The Sprint Retrospective concludes the Sprint.",
      "The Sprint Review concludes the Sprint.",
      "A Sprint may initiate with a Sprint Planning.",
      "All events must be held at the same time and place to reduce complexity.",
    ],
    correctAnswer: 0,
    explanation:
      "- The Sprint Review is the second to last event of the Sprint. This is a rule.\n- Sprint Planning initiates the Sprint by laying out the work to be performed for the Sprint. This is a rule.\n- Optimally, all events are held at the same time and place to reduce complexity. Not a rule.",
  },
  {
    id: "0797db58-e749-4562-b162-685f2fd08d25",
    chapter: 2,
    question:
      "Which two statements are correct about the number of Product Owners when there are three products being developed using Scrum?\n(Select the best two answers)",
    options: [
      "There can be a single Product Owner for all products.",
      "There can be a different Product Owner for each product.",
      "There should be only one Product Owner.",
      "Each product should have a separate Product Owner.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "In the case of three products being developed using Scrum, it is possible to have both a single Product Owner for all products or a different Product Owner for each product. The decision is based on the specific needs and circumstances of the organization, and there is no strict rule or requirement that dictates the number of Product Owners for multiple products in Scrum.",
  },
  {
    id: "00cbff84-f7c8-407e-90b3-332ea23f84cb",
    chapter: 2,
    question:
      "Which two of the following can be reasons for the Scrum Master to attend the Daily Scrum?\n(Select the best two answers)",
    options: [
      "Coach the Developers on keeping it within 15 minutes.",
      "To tell Developers what to do.",
      "It's not necessary for he/she to be in the meeting.",
      "To make sure that every Developer answers the three questions.",
      "To get a report on progress of the Sprint.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "The Scrum Master serves the Scrum Team ensuring that all Scrum events take place and are positive, productive, and kept within the timebox. The Daily Scrum is a 15-minute event for the Developers of the Scrum Team.",
  },
  {
    id: "2e2d28b5-cc40-42fc-9ea2-b40231e5da8d",
    chapter: 2,
    question:
      "Which element should NOT be an attribute of Product Backlog items?\n(Select the best answer)",
    options: ["Description", "Size", "Order", "Owner"],
    correctAnswer: 3,
    explanation: "The whole Scrum Team is accountable for all the work.",
  },
  {
    id: "1865dc6b-b567-4c91-b983-9e5e1e403d7d",
    chapter: 2,
    question:
      "How does the Product Owner determine the number of items for the Sprint Backlog?\n(Select the best answer)",
    options: [
      "Based on velocity",
      "He or she doesn't do it!",
      "Based on a combination of velocity and team capacity",
      "Based on what is needed for the next release",
    ],
    correctAnswer: 1,
    explanation:
      "Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint.",
  },
  {
    id: "0dc15b55-5c86-4795-9129-a81354211ff6",
    chapter: 2,
    question:
      "What's the role of a Product Owner during Sprint Retrospectives?\n(Select the best answer)",
    options: [
      "They should not participate in this meeting",
      "Participating as a Scrum Team member",
      "Capturing requirements for the Product Backlog",
      "Summarizing and report the results of the meeting to stakeholders",
    ],
    correctAnswer: 1,
    explanation:
      "During Sprint Retrospectives, the Product Owner participates as a Scrum Team member. He/she collaborates with the rest of the Scrum Team to reflect on the previous Sprint and identify opportunities for improvement. The Product Owner's input is valuable in shaping the retrospective discussion and contributing to the team's learning and continuous improvement efforts.",
  },
  {
    id: "52879c78-d5d0-4648-9790-99d5cbac1508",
    chapter: 2,
    question:
      "Sprint Planning is not a place for refining Product Backlog items.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "During Sprint Planning, through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint. The Scrum Team may refine these items during this process, which increases understanding and confidence.",
  },
  {
    id: "422ce8f2-c680-47c0-9210-2f7c65d4ff95",
    chapter: 2,
    question:
      "In scaled Scrum, each Scrum Team demonstrates their individual Increment.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Increment must be a result of the collectible effort of the Scrum Teams.",
  },
  {
    id: "cfe85156-0ca4-418f-9a08-4f32ff69e331",
    chapter: 2,
    question:
      "All of the following are possible inputs to Sprint Planning, EXCEPT:\n(Select the best answer)",
    options: [
      "Sprint Goal",
      "Product Backlog",
      "Velocity",
      "Increment",
      "Definition of Done",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Goal is defined during Sprint Planning by the whole Scrum Team.",
  },
  {
    id: "4c6c2cb4-cc94-4f38-9d0b-63485a17051e",
    chapter: 2,
    question:
      "Which of the following is NOT mandatory in Scrum?\n(Select the best answer)",
    options: [
      "Planning Poker",
      "Timeboxing the Events",
      "Definition of Done",
      "Sprint Planning",
    ],
    correctAnswer: 0,
    explanation:
      "While Planning Poker is a popular technique used in Scrum for estimating the effort or relative size of Product Backlog items, it is not mandatory in Scrum. Scrum does not prescribe any specific technique for estimation, and teams can choose other methods that work best for them. The other options are mandatory in Scrum. Timeboxing the events, having a Definition of Done, and conducting Sprint Planning are all essential elements of the Scrum framework.",
  },
  {
    id: "92bb588a-69c7-404d-b8c6-d1df505beee5",
    chapter: 2,
    question:
      "Which two of the following are correct about the whole Scrum Team role?\n(Select the best two answers)",
    options: [
      "Owns the Product Backlog",
      "Is responsible for setting the timeboxed duration of Sprints",
      "May add new work to the Sprint Backlog during the Sprint",
      "Is responsible for composing the Sprint Goal",
      "Prioritizes tasks in the Sprint Backlog",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Team is responsible for setting the timeboxed duration of Sprints. They collaboratively define the Sprint Goal to guide their work and focus on delivering value. The Product Owner owns the Product Backlog and can add new work, while the Development Team prioritizes tasks in the Sprint Backlog.",
  },
  {
    id: "3f0e1fc5-b11f-4b43-9885-9308d8d972fd",
    chapter: 2,
    question:
      "Which two of the following should be considered in setting the timeboxed duration of Sprints?\n(Select the best two answers)",
    options: [
      "It cannot be longer than one month.",
      "It's better to have shorter Sprints when the project is riskier.",
      "It should be shorter when there are more Developers.",
      "It shouldn't be longer than 6 weeks.",
      "It should be longer in bigger projects.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "Sprints should have a maximum duration of one month to maintain a regular cadence and enable frequent inspection and adaptation. Additionally, when the project carries higher risks, it is beneficial to have shorter Sprints to ensure quicker feedback and the ability to address any emerging challenges promptly.",
  },
  {
    id: "1fc6c235-f0d4-407b-b1c2-810962789ccc",
    chapter: 2,
    question:
      "Product Backlog refinement is the act of breaking down and further defining Sprint Backlog items into smaller more precise items.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller more precise items.",
  },
  {
    id: "ddbb7951-cb12-4704-8fb4-1f3451f58741",
    chapter: 2,
    question:
      "Which of the following is NOT correct about the Scrum Master?\n(Select the best answer)",
    options: [
      "Manages the Product Backlog",
      "Helps the organization to implement Scrum",
      "Is a true leader who serves the Scrum Team and the larger organization",
      "Causes the removal of impediments",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum Master is accountable for facilitating the Scrum process and helping the organization to implement Scrum effectively. They act as a leader who serve the Scrum Team and the larger organization by fostering collaboration, causing the removal of impediments, and promoting continuous improvement. However, managing the Product Backlog is the responsibility of the Product Owner, who prioritizes and refines the items in the backlog.",
  },
  {
    id: "02806dd7-3a5d-4322-bc9d-f01252f105f7",
    chapter: 2,
    question:
      "Which two of the following are pillars of Scrum?\n(Select the best two answers)",
    options: [
      "Value optimization",
      "Adaptation",
      "Creativity",
      "Sustainable pace",
      "Transparency",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      "The pillars of Scrum are transparency, inspection, and adaptation. They emphasize the importance of clear communication, regular evaluation, and the ability to adapt and improve throughout the project. These pillars serve as guiding principles for the Scrum Team to achieve successful outcomes.",
  },
  {
    id: "43ca4701-bb63-485d-9693-a32019af07ac",
    chapter: 2,
    question:
      "Who is responsible for engaging the stakeholders?\n(Select the best answer)",
    options: [
      "The Project Manager",
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The Scrum Team",
    ],
    correctAnswer: 4,
    explanation:
      "The Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required.",
  },
  {
    id: "601220a3-8c26-49fc-b953-c5c1da8ab6e1",
    chapter: 2,
    question: "When is the Sprint over?\n(Select the best two answers)",
    options: [
      "When the Product Owner cancels the Sprint",
      "When the Sprint Backlog tasks are done",
      "When all Sprint Backlog items are done",
      "When the Scrum Master announces the end of the Sprint",
      "When the timeboxed duration is over",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 4],
    isMultiSelect: true,
    explanation:
      "The Sprint can be considered over in two situations: when the Product Owner decides to cancel or when the predefined timebox for the Sprint duration expires. If the work on the Sprint Backlog is completed before the scheduled end of the Sprint, the Developers can collaborate with the Product Owner to identify additional work from the Product Backlog to fill the remaining time.",
  },
  {
    id: "bd2380c3-207c-428c-b9e4-83fac3bd1977",
    chapter: 2,
    question:
      "What are the three classical questions of Daily Scrums, if you decide to go through them?\n(Select the best three answers)",
    options: [
      "Are we able to deliver all Sprint Backlog items by the end of the Sprint?",
      "What problems did I have yesterday?",
      "What impediments are in my way or in the way of the team?",
      "What is the progress of the Sprint?",
      "What work did I do yesterday to help the team achieve its goal?",
      "What work am I going to do today to help the team achieve its goal?",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4, 5],
    isMultiSelect: true,
    explanation:
      "It's not mandatory to use these questions, but very common.\nThey don't appear anymore on Scrum Guide 2020, but might be good to know.",
  },
  {
    id: "7765f662-5dfd-4837-9531-2ce3d42ceab8",
    chapter: 2,
    question:
      "When multiple teams are working on the same product, one person can be a Developer on more than one Scrum Team.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "None of the Scrum accountabilities are necessarily full-time, and a single person can occupy more than one role or the same role in more than one team; e.g., there may be a special expertise that is needed in multiple teams, but it's not needed in a full-time basis. So, one person can provide that special type of expertise to multiple teams.",
  },
  {
    id: "de763d1f-9e02-4292-8e27-a2f787cab94b",
    chapter: 2,
    question:
      "Which two of the following may be done in the Sprint Retrospective event?\n(Select the best two answers)",
    options: [
      "Discuss the next Sprint goal",
      "Refine the Product Backlog",
      "Discuss the composition of the team",
      "Calculate Velocity",
      "Discuss the Definition of Done",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation:
      "In the Sprint Retrospective event, the Scrum Team discusses the composition of the team, including aspects like team dynamics, collaboration, and roles. They also have the opportunity to discuss and review the Definition of Done, ensuring a shared understanding and continuous improvement.",
  },
  {
    id: "f613aae5-e3d6-4543-85de-4f66686c0ae1",
    chapter: 2,
    question:
      "Which two statements are correct about a Product Backlog item that is undone at the end of the Sprint?\n(Select the best two answers)",
    options: [
      "Demonstrate it in the Sprint Review meeting, if the item is presentable in its current state.",
      "The Sprint will be extended until we complete the item.",
      "Do not include it in the Increment.",
      "Move it back to the Product Backlog.",
      "Consider the complete part of the item in velocity calculation and then create a new item in the Product Backlog for the remaining work.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "If a Product Backlog item is undone at the end of the Sprint, it should not be included in the Increment. Instead, it should be moved back to the Product Backlog for future consideration and prioritization. The undone work should not be considered part of the velocity calculation.",
  },
  {
    id: "5af2d911-1c00-4e1d-9678-b0b2d4ee85a7",
    chapter: 2,
    question:
      "What happens if we forecast that some of the work defined in the Sprint Backlog won't be done by the end of the Sprint?\n(Select the best answer)",
    options: [
      "Extend the duration of the Sprint, to be able to deliver everything.",
      "Continue to the next Sprint without a Sprint Review meeting and finish those items in the next Sprint.",
      "Review the work with the Product Owner to see if any adjustments are required, and keep working.",
      "Work overtime and try to complete all items.",
    ],
    correctAnswer: 2,
    explanation:
      '"Extend the duration..."\n- Sprints are timeboxed.\n\n"Continue to the next Sprint without ..."\n- Unfinished items return to the Product Backlog; events remain unchanged.\n\n"Review the work with the Product Owner ..."\n- Consult the Product Owner if Sprint items may not be completed; adjust priorities or simplify existing items.\n\n"Work overtime and try to ..."\n- Maintain a constant pace. Completing all Sprint Backlog items doesn\'t equate to success; selecting a conservative number may reduce productivity. Unfinished items are acceptable; the Sprint Backlog is an estimate.',
  },
  {
    id: "4af0fae2-3d04-412a-8191-032db98caa72",
    chapter: 2,
    question:
      "Which of the following are true?\n(Select the best three answers)",
    options: [
      "The Developers are always accountable for instilling quality by adhering to a Definition of Done",
      "The fundamental unit of Scrum is a small team of people, a Scrum Team.",
      "The Product Owner is responsible for the sizing Product Backlog items.",
      "Sprints are the heartbeat of Scrum, where ideas are turned into value.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      "The Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs.",
  },
  {
    id: "01bbe390-4557-4f53-ad61-02baaffe5823",
    chapter: 2,
    question:
      "Which two statements are correct about Product Backlog Refinement?\n(Select the best two answers)",
    options: [
      "Multiple teams may participate in it.",
      "It can take as much time as needed.",
      "Normally, it shouldn't take more than 10% of the Scrum Team's time.",
      "Normally, it doesn't take more than 10% of the Development Team's time.",
      "The Scrum Master should facilitate it.",
      "Normally, it doesn't take more than 10% of the Product Owner's time.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "During the Sprint, the Product Backlog is refined as needed. Further, there are no restrictions on how many teams can participate in refinement activities.",
  },
  {
    id: "de3197c7-5e41-4f42-a05e-1e9113dc01ac",
    chapter: 2,
    question:
      "Which three statements are correct when four teams are working on a product?\n(Select the best three answers)",
    options: [
      "There can be multiple Scrum Masters.",
      "There can be multiple Definitions of Done.",
      "There can be multiple Product Backlogs.",
      "Each Scrum Team maintains its individual Sprint Backlog.",
      "There is only one Sprint Backlog each Sprint.",
      "There is only one Definition of Done.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      '"There can be multiple Scrum Masters"\n- If you have four Scrum Teams working on a product you might have one Scrum Master per Scrum Team, for instance; which implies that you might have multiple Scrum Masters.\n\n"There can be multiple Definitions of Done".\n"There is only one Definition of Done".\n- The product must have one Definition of Done. However, each Scrum Team might have its own Definition of Done containing stringent criteria, compared to the product\'s Definition of Done. The combination of the work of all Scrum Teams must adhere to the product\'s Definition of Done.\n\n"There can be multiple Product Backlogs".\n- A Single Product Backlog exists for a Product.\n\n"Each Scrum Team maintains its individual Sprint Backlog".\n"There is only one Sprint Backlog each Sprint".\n- Each Scrum Team has its own Sprint Backlog.',
  },
  {
    id: "7472f4cd-8db0-427f-b98e-3dc682081254",
    chapter: 2,
    question:
      "When the Scrum Team becomes mature enough in using Scrum, they won't need a Scrum Master anymore.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation: "A Scrum Master is always needed.",
  },
  {
    id: "6702938e-acc4-433c-be16-40be24ddf701",
    chapter: 2,
    question:
      "The Product Backlog is baselined before the first Sprint\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      '"Baseline" has a specific meaning in project management that may apply to some elements in Scrum. However, Scrum.org interprets it as keeping the subject fixed, and therefore, believes that there are no baselines in Scrum.',
  },
  {
    id: "d307854c-13f0-43a9-9163-f8833a8fb890",
    chapter: 2,
    question:
      "How much time does the Scrum Team spend on Product Backlog Refinement?\n(Select the best answer)",
    options: [
      "Usually not more than 5% of their time",
      "Usually not more than 10% of their time",
      "Usually not more than 20% of their time",
      "As much as needed",
    ],
    correctAnswer: 3,
    explanation: "The Product Backlog is refined as needed, during the Sprint.",
  },
  {
    id: "718af68e-52fd-4f6b-9e86-f019dde46afa",
    chapter: 2,
    question:
      "What's the main responsibility of a tester in Scrum?\n(Select the best answer)",
    options: [
      "Tracking quality metrics",
      "Finding bugs",
      "Writing the test scripts as soon as the programmers start working on the code",
      "There are no testers in Scrum",
    ],
    correctAnswer: 3,
    explanation:
      'There are no people "titled" as testers, because we don\'t have extra roles and titles in Scrum. However, there can be "developers" who are expert in testing. There are only Developers.\n\nWhen you see a statement like this in your real exam, it usually means "tester" as a role or title, rather than a person who\'s expert in testing.',
  },
  {
    id: "b1a37649-e537-4113-81ea-481384839a8d",
    chapter: 2,
    question:
      "It's generally better to have shorter Sprints when the project is riskier.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Shorter Sprints provide more opportunities for adaptation and thus reduce risks.",
  },
  {
    id: "adf38288-3cfc-4882-a464-65b604b9228f",
    chapter: 2,
    question:
      "What's the timeboxed duration of Daily Scrums when there are 6 developers in the team and Sprints are two weeks long?\n(Select the best answer)",
    options: [
      "2 minutes per Developer + 2 minutes",
      "2 minutes per Developer",
      "As much as needed to answer the three standard questions",
      "15 minutes",
    ],
    correctAnswer: 3,
    explanation:
      "The timeboxed duration of Daily Scrums is 15 minutes, regardless of the number of Developers in the team or the length of the Sprint.",
  },
  {
    id: "699b698a-eb5c-4a36-a962-2360f3a4e17a",
    chapter: 2,
    question:
      "Which two statements best describe the Product Backlog?\n(Select the best two answers)",
    options: [
      "It changes as we learn more about the product.",
      "Contains all tasks identified by the Developers.",
      "It's used to create the project plan.",
      "The Product Owner is accountable for it.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3],
    isMultiSelect: true,
    explanation:
      '"Contains all tasks identified by the Developers".\n- Tasks are identified in the Sprint Planning meeting or during the Sprint, and are captured only in the Sprint Backlog.\n\n"It\'s used to create the project plan".\n- There\'s no "project plan" in Scrum. Product Backlog is the closest thing to a project plan that we have in Scrum.',
  },
  {
    id: "c3ba3b06-fb05-4f92-b5d7-8d46c81bb85b",
    chapter: 2,
    question:
      "Which two of the following are NOT allowed in Scrum?\n(Select the best two answers)",
    options: [
      "Using Story Points",
      "Sprint 0",
      "Refactoring",
      "Integration Sprints",
      "Using User Stories",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "Sprint 0 and Integration Sprints are not aligned with the core principles of Scrum, which emphasize the delivery of a valuable, useful Increment each Sprint. They can introduce inefficiencies, delays, and a deviation from the iterative and incremental nature of Scrum.",
  },
  {
    id: "050efe1d-2f41-4098-bae8-47a5bc5d5bec",
    chapter: 2,
    question:
      "Which Scrum value is demonstrated when we continuously show the correct performance on a burn-down chart that everyone can see?\n(Select the best answer)",
    options: ["Openness", "Self-management", "Adaptation", "Trust"],
    correctAnswer: 0,
    explanation:
      "Demonstrating the correct performance on a burn-down chart that everyone can see reflects the value of openness in Scrum. The burn-down chart provides transparency and visibility into the progress of the Sprint, allowing the Scrum Team and stakeholders to openly assess the work completed and the remaining work. This promotes a culture of transparency and encourages open communication and collaboration among team members.",
  },
  {
    id: "70fdbf95-cb95-4d72-ab8c-16306ec0a767",
    chapter: 2,
    question:
      "The first Sprint can start as soon as the Product Backlog is complete.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Backlog is never complete. It's always evolving in adaptive methods.",
  },
  {
    id: "883ea21b-5b36-4e1f-9493-f21870ae06b1",
    chapter: 2,
    question:
      "Which of the following is mandatory in Scrum?\n(Select the best answer)",
    options: [
      "Story Points",
      "Pair-Programming",
      "Product Goal",
      "User Stories",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Guide emphasizes the importance of having a Product Goal as a mandatory element in Scrum. The Product Goal provides a clear objective for the Scrum Team to work towards and serves as a guiding focus for the Product Owner and the Development Team. It aligns the efforts of the team and helps them make decisions regarding the Product Backlog and the Increment. While practices like Story Points, Pair-Programming, and User Stories are commonly used in Scrum, they are not mandatory according to the Scrum framework.",
  },
  {
    id: "b187d423-e3ac-4af9-b265-6acad408b4e4",
    chapter: 2,
    question:
      "What's the timeboxed duration of Sprint Retrospective events?\n(Select the best answer)",
    options: [
      "3 hours in a one-month Sprint, usually shorter for shorter Sprints.",
      "8 hours in a one-month Sprint",
      "Maximum 8 hours",
      "3 hours",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Retrospective concludes the Sprint. It is timeboxed to a maximum of three hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "ef7acc55-4e9f-484c-ad1d-1fcf62c06e48",
    chapter: 2,
    question:
      "Which two of the following actions may a Scrum Master take in starting up an initiative to develop a new product?\n(Select the best two answers)",
    options: [
      "Ask the Developers to introduce themselves to each other and tell about their skills and background.",
      "Ensure that a bonus system is in place for the top performance of individuals.",
      "Ask the Product Owner to explain the product, its business need, history, goals, and context.",
      "Ask the team to work together and prepare a complete Product Backlog.",
      "Ensure that there's a clear understanding of the whole scope of the project.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "When starting a new product initiative, the Scrum Master plays a crucial role in facilitating team introductions and establishing a clear understanding of the product, its business need, history, goals, and context. These actions help foster collaboration and ensure a shared understanding within the Scrum Team.",
  },
  {
    id: "f55b3e75-580e-4fb2-87d2-df53b3455c27",
    chapter: 2,
    question:
      "How do changes in the product environment impact the Product Backlog?\n(Select the best answer)",
    options: [
      "The old baselined Product Backlog would be saved, and a new one would be created for the rest of the product.",
      "There's no effect on the Product Backlog.",
      "It evolves to reflect the changes",
      "The Product Backlog should be kept high-level enough to tolerate such changes.",
    ],
    correctAnswer: 2,
    explanation:
      "Changes in the product environment can have an impact on the Product Backlog. As the product and its environment evolve, new information, insights, and requirements may emerge, necessitating adjustments to the Product Backlog. The Product Backlog is a dynamic artifact that reflects the evolving understanding of the product and its stakeholders' needs. The Product Owner, in collaboration with the stakeholders, continuously refines and updates the Product Backlog to ensure it remains relevant, valuable, and aligned with the product's vision and goals. Therefore, the Product Backlog evolves to incorporate changes and maintain its effectiveness as a tool for product development.",
  },
  {
    id: "c4cf39b3-8832-47e0-95f8-f0d6f95aee7d",
    chapter: 2,
    question:
      "Which two of the following may happen when the team becomes mature enough during the product development?",
    options: [
      "They may improve their Definition of Done.",
      "They may not need a Scrum Master anymore.",
      "They may not need Sprint Retrospectives anymore.",
      "Their velocity may increase.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3],
    isMultiSelect: true,
    explanation:
      "As a Scrum Team matures during the product development, they may experience improvements in their Definition of Done, refining and enhancing the criteria for what constitutes a completed increment. Additionally, their velocity may increase as they become more efficient and effective in delivering value. However, it is important to note that the Scrum Master and Sprint Retrospectives are part of the Scrum framework and cannot be removed. Further, they remain valuable throughout the product development journey, as they support continuous improvement and facilitate the team's success.",
  },
  {
    id: "37550f32-4f75-486f-bf02-8fc7ef46d415",
    chapter: 2,
    question:
      "When is it time to integrate the resulting work of the Developers?\n(Select the best answer)",
    options: [
      "At the end of each Sprint",
      "Frequently, during the Sprint",
      "At the end of the project",
      "Before each release",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, the integration of the work done by the Developers should happen frequently during the Sprint. Continuous integration is encouraged to ensure that the Increment is continually built and remains in a releasable state throughout the Sprint. This helps to identify and address any integration issues early on and enables the team to deliver a potentially shippable product increment at the end of each Sprint.",
  },
  {
    id: "d28a12b9-5c14-4434-8d72-4078af6e6246",
    chapter: 2,
    question:
      "The Developers are ready to start the first Sprint, but the Product Backlog is not ready yet. What should the Product Owner do?\n(Select the best answer)",
    options: [
      "Ask the Developers to help you refine the Product Backlog instead of starting the first Sprint.",
      "Let the Sprint begin, but only with the goal of completing the Product Backlog.",
      "Let the team start the first Sprint, and continue refining the Product Backlog.",
      "Postpone the Sprint.",
    ],
    correctAnswer: 2,
    explanation:
      "If the Product Backlog is not fully ready, the Product Owner should still allow the team to start the first Sprint and continue refining the Product Backlog during the Sprint. In Scrum, the Product Backlog is a living artifact that can evolve and be refined throughout the project. It is not necessary for the Product Backlog to be fully complete or perfect before starting the first Sprint. The Developers can collaborate with the Product Owner during the Sprint to gain more clarity and understanding of the work to be done. This approach allows for flexibility and responsiveness as the team progresses and learns more about the product and its requirements.",
  },
  {
    id: "0b2a2e3e-1446-4375-8b2a-41ee9663de8c",
    chapter: 2,
    question:
      "Which two of the following may change during the Sprint?\n(Select the best two answers)",
    options: [
      "Sprint Backlog",
      "Product Backlog",
      "Minimum level of quality",
      "Sprint Goal",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      '"Sprint Backlog"\n- The tasks in the Sprint Backlog are always changing. Also, Scrum.org is not entirely against changing the "items" in the Sprint Backlog either.\n\n"Product Backlog"\n- Product Backlog may change at any time.\n\n"Minimum level of quality"\n- The level of expected quality shouldn\'t decrease during the Sprint.\n\n"Sprint Goal"\n- If a Sprint Goal becomes obsolete, the Sprint should be canceled.',
  },
  {
    id: "3feb1b77-be4c-44f7-9cfe-bcf17cd9e2a7",
    chapter: 2,
    question:
      "You are the Scrum Master for a Scrum Team that got caught in an internal disagreement about which agile practices to apply. Which of the following techniques could you use to serve the team?\n(choose the best two answers)",
    options: [
      "Consult with an external agile coach",
      "Facilitate involving the whole Scrum team in making a decision",
      "Use coaching techniques, such as conflict resolution and active listening",
      "Consult with the organization's Human Resources department",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "First of all, the Scrum Master is a member of the Scrum Team, which is self-managed and cross-functional, which means that it should have the capabilities to solve such disagreements without the need to consult external sources. Further, the Scrum Team having internal disagreement can be seen as an impediment. The Scrum Master serves the Scrum Team by coaching them to self-manage, which includes having the Scrum Team capable of removing their impediments. He/she does this by, for instance, using coaching, mentoring, and facilitating decision making. Notice that the Scrum Master should step in and solve impediments that exceed the self-managing capabilities of the Scrum Team, which depends on the context.",
  },
  {
    id: "2bb26762-a3da-4104-93be-d247479f30e5",
    chapter: 2,
    question:
      "Which of the following are time-boxed Scrum events?\n(choose the best three answers)",
    options: [
      "Hardening Sprint",
      "Sprint 0",
      "Sprint Planning",
      "Release Planning",
      "Product Backlog Refinement session",
      "Daily Scrum",
      "Sprint Retrospective",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 5, 6],
    isMultiSelect: true,
    explanation:
      '"Hardening Sprint"\n- Not a valid Sprint. \n\n"Sprint 0"\n- Not a valid Sprint. \n\n"Sprint Planning"\n- Yes, Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. \n\n"Release Planning"\n- Not a Scrum Event. \n\n"Product Backlog Refinement session"\n- Not a Scrum Event. \n\n"Daily Scrum"\n- Yes, the Daily Scrum is timeboxed to 15-minutes. \n\n"Sprint Retrospective"\n- Yes, Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.',
  },
  {
    id: "43bc0e3f-a701-4a9c-a75f-47fcc14e213f",
    chapter: 2,
    question:
      "You are the Scrum Master of a Scrum Team and management suggested having a tester on your Scrum Team. What are the two things that you would tell management?\n(choose the best two answers)",
    options: [
      'Scrum has no "tester" role',
      "Configuring quality tools and tracking quality metrics",
      "Performing exploratory testing to detect defects",
      "Performing quality assurance activities such as process assessments",
      "The Developers perform testing activities.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 4],
    isMultiSelect: true,
    explanation:
      "Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. Within a Scrum Team, there are no sub-teams or hierarchies. Thus, there is no such thing as a “tester” role; the Developers are accountable for instilling quality by adhering to the Definition of Done, which usually includes testing activities.",
  },
  {
    id: "a92e7cd9-dd7a-4dfd-98a0-70c83ff7103d",
    chapter: 2,
    question:
      "Which three of the following are true about the Scrum Master?\n(choose the best three answers)",
    options: [
      "The Scrum Master assigns tasks to Developers",
      "The Scrum Master is responsible for updating the Sprint Burndown",
      "The Scrum Master helps those outside the team interact with the Scrum Team",
      "The Scrum Master teaches the Scrum Team to use timeboxes",
      "Helps the Product Owner to establish empirical product planning for a complex environment",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3, 4],
    isMultiSelect: true,
    explanation:
      '"The Scrum Master assigns tasks to Developers"\n- The Developers self-manage to define who works on what. \n\n"The Scrum Master is responsible for updating the Sprint Burndown"\n- The Scrum Master is not a secretary. \n\n"The Scrum Master helps those outside the team interact with the Scrum Team"\n- The Scrum Master deads, trains, and coaches the organization in its Scrum adoption. \n\n"The Scrum Master teaches the Scrum Team to use timeboxes"\n- The Scrum Master ensures that all Scrum events take place and are positive, productive, and kept within the timebox. \n\n"Helps the Product Owner to establish empirical product planning for a complex environment"\n- The Scrum Master helps the Product Owner to establish empirical product planning for a complex environment',
  },
  {
    id: "9ce976bb-c05b-4b43-89d1-8d37bc99d9ae",
    chapter: 2,
    question:
      "Which three following are true about Scrum?\n(choose the best three answers)",
    options: [
      "The Scrum Master is Scrum's way of having a project manager for a self- managed context",
      "Scrum is founded on empiricism and lean thinking.",
      "Scrum is a lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.",
      "Scrum is a methodology and you can adapt to your needs as you wish.",
      "Each element of the framework serves a specific purpose that is essential to the overall value and results realized with Scrum.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 4],
    isMultiSelect: true,
    explanation:
      "Each element of the Scrum framework serves a specific purpose that is essential to the overall value and results realized with Scrum. Changing the core design or ideas of Scrum, leaving out elements, or not following the rules of Scrum, covers up problems and limits the benefits of Scrum, potentially even rendering it useless. It is founded on empiricism and lean thinking.",
  },
  {
    id: "1860d0fe-ea48-4592-8886-8b6179e11b94",
    chapter: 2,
    question:
      "Which of the following are true regarding the Definition of Done?\n(choose the best three answers)",
    options: [
      "Each Product Backlog item contains a Definition of Done containing the criteria it needs to meet to be accepted",
      "Guides the Developers on how many Product Backlog items to select for the Sprint",
      "Is committed to by the Increment",
      "Defines the criteria for a Sprint to be Done",
      "Increases transparency",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 4],
    isMultiSelect: true,
    explanation:
      '"Each Product Backlog item contains ..."\n- The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. \n\n"Guides the Developers on how ..."\n- It is one of the factors used by the Developers during Sprint Planning to define what can be Done during the given Sprint. \n\n"Is committed to by the Increment"\n- The Increment commits to the Definition of Done. \n\n"Defines the criteria for a Sprint to be Done"\n- It defines when a Product Backlog item becomes an Increment. \n\n"Increases transparency"\n- The Definition of Done creates transparency by providing everyone a shared understanding of what work was completed as part of the Increment.',
  },
  {
    id: "3b6dacb2-8a56-4850-8a28-cbe91298886b",
    chapter: 2,
    question:
      "Which of the following may change during the Sprint?\n(Select the best answer)",
    options: ["Sprint Goal", "Sprint Backlog", "Minimum level of quality"],
    correctAnswer: 1,
    explanation:
      '"Sprint Goal"\n- The Sprint Goal doesn\'t change after the Sprint Planning meeting\n\n"Sprint Backlog"\n- The tasks in the Sprint Backlog are always changing. Also, Scrum.org is not entirely against changing the "items" in the Sprint Backlog either.\n\n"Minimum level of quality"\n- The level of expected quality shouldn\'t decrease during the Sprint.',
  },
  {
    id: "1c576ab6-4942-4b85-8614-f3873e08b17b",
    chapter: 2,
    question:
      "Which of the following are the responsibilities of the Developers of a Scrum Team?\n(choose the best three answers)",
    options: [
      "Report their progress to management",
      "Estimate the size of Product Backlog items",
      "Do the work planned in the Sprint Backlog",
      "Select Product Backlog items for the Sprint",
      "Order the Product Backlog",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 3],
    isMultiSelect: true,
    explanation:
      '"Report their progress to management"\n- False, the Scrum Team is self-managed and doesn’t report progress to management. \n\n"Estimate the size of Product Backlog items"\n- True, The Developers who will be doing the work are responsible for the sizing. \n\n"Do the work planned in the Sprint Backlog"\n- True, Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint in light of the Sprint Backlog. \n\n"Select Product Backlog items for the Sprint"\n- True, during Sprint Planning, the Developers select items from the Product Backlog to include in the current Sprint. \n\n"Order the Product Backlog"\n- False, the Product Owner is accountable for ordering the Product Backlog. This one can be tricky because it is possible for the Product Owner to delegate the task of ordering the Product Backlog to Developers. However, since the question is asking for the three best answers, this one shouldn’t be considered correct.',
  },
  {
    id: "3d102b1a-90f1-4dca-ac2c-84351760c22e",
    chapter: 2,
    question:
      "Which of the following are aspects of Scrum that promote self-management?\n(choose the best three answers)",
    options: [
      "By being a lightweight framework",
      "By the Developers selecting items from the Product Backlog to include in the current Sprint.",
      "By removing title for Scrum Team members",
      "By having the Scrum Master protect the Scrum Team from interruptions.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2],
    isMultiSelect: true,
    explanation:
      '"By being a lightweight framework"\n- This gives room for the Scrum Team to make decisions about its ways of working. \n\n"By the Developers selecting items ..."\n- This gives the people that will do the work autonomy. \n\n"By removing title for Scrum Team members"\n- This ensures that the accountabilities are shared. \n\n"By having the Scrum Master protect ..."\n- It is not part of the Scrum Master’s job to protect the Scrum Team from interruptions. The Scrum Master’s job is to teach the Scrum Team to be self-sufficient. By protecting them, the Scrum Master loses the opportunity of having the Scrum Team learn how to keep their autonomy. The Scrum Team should not be treated like kids by the Scrum Master.',
  },
  {
    id: "59410202-a8db-4a74-a941-c6fa507d5a79",
    chapter: 2,
    question:
      "Which of the following are appropriate topics for the Scrum Team to discuss during a Sprint Retrospective?\n(choose the best three answers)",
    options: [
      "Team collaboration",
      "Refine the Product Backlog items",
      "The Scrum Team's processes and tools",
      "Definition of Done",
      "Refine the top items of the Product Backlog to make sure that they are Ready for the next Sprint",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      'During a Sprint Retrospective, the Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done.\n\nThe option "Refine the Product Backlog items" is not marked as a correct answer here because even though the process of "Product Backlog Refinement" is a topic to be discussed during Sprint Retrospective, it is not the best place to refine the Product Backlog.',
  },
  {
    id: "60790e85-3571-44b6-8486-20416f856152",
    chapter: 2,
    question:
      "Which agile aspect refuses what is often considered a “necessary evil” in many industries – long work hours, overtime, or even working nights or weekends?\n(choose the best answer)",
    options: [
      "Continuous Delivery.",
      "Small releases.",
      "DevOps.",
      "Sustainable pace.",
    ],
    correctAnswer: 3,
    explanation:
      "The correct answer to your question is “Sustainable pace.” Sustainable pace is an agile aspect that refuses what is often considered a “necessary evil” in many industries – long work hours, overtime, or even working nights or weekends. The concept of sustainable pace is not specifically called out in the Scrum Guide, but it is reinforced through Sprint Planning. Only the Developers determine how many items can be taken from the Product Backlog and brought into the Sprint Backlog. This helps ensure that the team is working at a sustainable pace and not overcommitting themselves. Working in Sprints at a sustainable pace improves the Scrum Team’s focus and consistency.",
  },
  {
    id: "cadb62a6-aef8-4e08-8715-6a776a89a653",
    chapter: 2,
    question: "What is Scrum?\n(choose the best answer)",
    options: [
      "A framework for developing, delivering, and sustaining complex products.",
      "A process that includes the best industry practices for developing software.",
      "A prescriptive process following the principles of Lean Management.",
      "A cookbook for working within complex environments.",
    ],
    correctAnswer: 0,
    explanation:
      "Scrum is a framework within which people can address complex adaptive problems while productively and creatively delivering products of the highest possible value. It is not a process or a technique for building products; rather, it is a framework within which you can employ various processes and techniques. Scrum clarifies the relative efficacy of your product management and work techniques so that you can continuously improve the product, the team, and the working environment.",
  },
  {
    id: "2952920b-55a5-4f17-a84a-38756bcdabb3",
    chapter: 2,
    question:
      "What does the Cone of Uncertainty present?\n(choose the best answer)",
    options: [
      "The dependencies, resources, and estimated effort for a project’s tasks and budget.",
      "How the product's knowledge evolves.",
      "The project schedule.",
      "The remaining work for a project.",
    ],
    correctAnswer: 1,
    explanation:
      "The Cone of Uncertainty is a term often used in project management to describe the phenomenon by which project unknowns decrease with time. At the start of a project, comparatively little is known about the product or work results, so estimates are subject to large uncertainty. As more research and development is done, more information is learned about the project, and the uncertainty tends to decrease, reaching 0% when all residual risk has been terminated or transferred.",
  },
  {
    id: "3e384b77-4e8f-4fbb-910a-d54ddc4d3f10",
    chapter: 2,
    question:
      "True or False: Scrum is both an incremental and iterative agile way of delivering work.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The answer is true. Scrum is an agile framework that is incremental and iterative. Incremental means work is delivered in small, usable chunks, allowing for feedback and tweaks along the way. Iterative means that the work is continually improved, with each iteration building on the previous one. This approach allows for flexibility and adaptability, as the team can respond to changes and new information as it becomes available.",
  },
  {
    id: "e9bf1a57-1921-4a4d-be8b-498ca10cb83d",
    chapter: 2,
    question: "What is Scrum founded on?\n(choose the best answer)",
    options: [
      "Lean Thinking and Scientific Management",
      "Just In Time Principles and Rapid Application Development",
      "Empiricism and Lean Thinking",
      "Extreme Management and Lean Canvas",
      "Adaptive Learning and Agility",
    ],
    correctAnswer: 2,
    explanation:
      "Empiricism is a process control theory that asserts that knowledge comes from experience and making decisions based on what is known. Scrum employs an iterative, incremental approach to optimize predictability and control risk. Lean Thinking, on the other hand, is a way of thinking about how to deliver more value to customers with fewer resources. It focuses on eliminating waste and improving efficiency. Scrum incorporates many of the principles of Lean Thinking, such as delivering value early and often and continuously improving the process.",
  },
  {
    id: "c0fdac25-2dce-49d7-9b80-2b422233c954",
    chapter: 2,
    question: "What are the pillars of empiricism?\n(choose the best answer)",
    options: [
      "Manage flow, Visualize workflow, Eliminate Waste",
      "Continuous Delivery, Whole Team, Kaizen",
      "Inspection, Planning, Transparency",
      "Eliminate Waste, Quickly Respond to Changes, Transparency",
      "Inspection, Adaptation, Transparency",
    ],
    correctAnswer: 4,
    explanation:
      "Empiricism is a theory that knowledge comes from experience and is used in Scrum to optimize predictability and control risk through its three pillars: Inspection, Adaptation, and Transparency.",
  },
  {
    id: "995ecadd-5f58-4efa-82c8-79067caa0aef",
    chapter: 2,
    question:
      "Which Scrum value is manifested when an information radiator such as a burndown, burnup, or cumulative flow chart is made available so that everyone can see it?\n(choose the best answer)",
    options: [
      "Adaptation",
      "Simplicity",
      "Openness",
      "Transparency",
      "Communication",
    ],
    correctAnswer: 2,
    explanation:
      'The correct answer is "Openness". Openness is one of the five Scrum values, along with Courage, Focus, Commitment, and Respect. Openness means that the team and the stakeholders agree to be transparent about all the work and the challenges with performing the work. An information radiator such as a burndown, burnup, or cumulative flow chart is an example of openness in action. By making this information available for everyone to see, the team is being open about their progress and any challenges they may be facing.',
  },
  {
    id: "9fe82c40-04d3-4b1d-a051-bb4d6ca5fd21",
    chapter: 2,
    question:
      "What statement best describes the Product Owner's accountability?\n(choose the best answer)",
    options: [
      "Defining the work to be performed by the Developers.",
      "Maximizing the value of the product resulting from the work of the Scrum Team.",
      "Estimating the effort of each Product Backlog item.",
      "Describing each Product Backlog item following the Definition of Ready.",
    ],
    correctAnswer: 1,
    explanation:
      "The Product Owner is responsible for maximizing the value of the product resulting from the work of the Scrum Team. They do this by managing the Product Backlog, which is an ordered list of everything that is known to be needed in the product. The Product Owner is responsible for ensuring that the Product Backlog is transparent, visible, and clear to all and shows what the Scrum Team will work on next. They also ensure that the Developers understand items in the Product Backlog to the level needed.",
  },
  {
    id: "d275a58b-1612-4c92-84dc-a2a3a3dbc029",
    chapter: 2,
    question:
      "What is the role of Management in Scrum?\n(choose the best answer)",
    options: [
      "Procurement management, making sure that the Scrum Team follows the contract's terms.",
      "Make sure that the project's budget is being used as planned.",
      "Monitor the Scrum Team's productivity and deliverables' quality.",
      "Embrace bottom-up intelligence by providing information to the Scrum Team, supporting its empiricism, and trusting it to learn about the problem at hand.",
    ],
    correctAnswer: 3,
    explanation:
      "In Scrum, the role of Management is to support the Scrum Team by providing an environment in which the team can be successful. This includes providing information and resources, removing impediments, and trusting the team to self-organize and make decisions based on their experience and knowledge. Management should embrace bottom-up intelligence, allowing the team to learn about the problem at hand and make decisions based on their findings.",
  },
  {
    id: "8c0b4809-f00e-449e-bb16-f20e96031f98",
    chapter: 2,
    question:
      "Which of the below are accountabilities on a Scrum Team?\n(choose the best answer)",
    options: [
      "Product Manager, Scrum Master, Testers, Developers",
      "Project Manager, Product Manager, Development Team",
      "Product Owner, Scrum Master, Developer",
      "Product Owner, Project Manager, Scrum Master",
      "Chicken and Pigs",
    ],
    correctAnswer: 2,
    explanation:
      "The correct alternative is “Product Owner, Scrum Master, Developer.” A Scrum Team consists of a Product Owner, a Scrum Master, and Developers. The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice, both within the Scrum Team and the organization. The Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint.",
  },
  {
    id: "652771c6-f2ee-4667-bd80-0be4a7dd3307",
    chapter: 2,
    question:
      "What is the primary service that the Scrum Master provides to help the Developers maximize their productivity?\n(choose the best answer)",
    options: [
      "Update the burndown chart daily.",
      "Ensure that the meetings are executed during the planned schedule and time-box.",
      "Facilitate decisions of the Developers.",
      "Ensure the task management tools (such as Jira) are updated.",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Master is accountable for promoting and supporting Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory, practices, rules, and values. One of the primary services that the Scrum Master provides to help the Developers maximize their productivity is to facilitate their decision-making process. This can include helping the Developers to identify and remove impediments, facilitating discussions and decision-making within the team, and coaching the team on effective collaboration and self-management.",
  },
  {
    id: "d7fc8c57-0ff2-4d5d-b250-605e553488ff",
    chapter: 2,
    question:
      "The Developers should have all the skills needed to:\n(choose the best answer)",
    options: [
      "Create a product Increment.",
      "Deliver a product Increment, except for specialized quality control that requires specialized skills or resources.",
      "Deliver all the work committed to the Product Owner within the project plan's date and cost.",
    ],
    correctAnswer: 0,
    explanation:
      'According to the Scrum Guide, the Developers should have all the skills needed to create a product Increment. This means that the correct answer is "Create a product Increment". Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint. This requires they have all the necessary skills to complete the work, including any specialized skills or resources.',
  },
  {
    id: "7cb8b837-1fa9-406b-9113-f5382525e11b",
    chapter: 2,
    question:
      "Who has the final say on the Product Backlog ordering?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The CEO",
      "The Paying Customer",
    ],
    correctAnswer: 1,
    explanation:
      'According to the Scrum Guide, the Product Owner is accountable for ordering the work for a complex problem in a Product Backlog. This means the correct answer is "The Product Owner." The Product Owner is accountable for managing the Product Backlog effectively, which includes developing and communicating the Product Goal, creating and clearly communicating Product Backlog items, ordering the items in the Product Backlog, and ensuring that the Product Backlog is transparent and understood by the Scrum Team and stakeholders.',
  },
  {
    id: "a461bb19-b463-4bdf-9867-74aa10d410e6",
    chapter: 2,
    question: "True or False. The Scrum Master is a manager.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Scrum Master manages through the Scrum framework. Notice that, unlike traditional management, he/she does not manage people or have authority over them.",
  },
  {
    id: "6165e54e-e0fe-495d-9cd4-5de8abd4395e",
    chapter: 2,
    question:
      "True or False: The only Product Backlog items that the Scrum Team can select during Sprint Planning are the ones considered Ready (i.e., can be done within one Sprint).",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The correct answer is "False." According to the Scrum Guide, during Sprint Planning, the Developers select items from the Product Backlog to include in the Sprint Backlog. There is no requirement that these items be considered "Ready" or that they can be completed within one Sprint. Instead, the Developers forecast the functionality that will be developed during the Sprint and work with the Product Owner to understand the scope of the Sprint Goal.',
  },
  {
    id: "87f9e2ab-db16-41b9-b3e3-d17ab6545245",
    chapter: 2,
    question:
      'True or False: The Product Goal represents the desired end state whenever all the Product Backlog items must be "Done."',
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The answer is “False.” The Product Goal describes a long-term objective or future state of the product. It is a vital part of the Product Backlog, referred to as a commitment. The Scrum Team uses it to plan and maintain focus. The development of the Product Goal evolves with the definition of the Product Backlog. A Product Goal can be completed without all PBI being completed. As value is delivered through Sprints, the understanding of the Product Goal will be refined. This is complex work and full of surprises.",
  },
  {
    id: "0da45cf9-c222-4980-90bd-1e3b7743b530",
    chapter: 2,
    question:
      "Which statement best describes a Product Backlog?\n(choose the best answer)",
    options: [
      "Large Product Backlog items are described as Epics and smaller ones as User Stories.",
      'Product Backlog items include test descriptions that prove their completeness when "Done."',
      "An emergent ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team.",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Backlog is an emergent, ordered list of all work needed to complete a product. It is owned by the Product Owner and used to prioritize and track the Scrum Team’s work. It changes over time as the product and its requirements evolve, with the most important work done first. It is the single source of work for the Scrum Team.",
  },
  {
    id: "0efdcc62-2e1d-414f-9871-a7f329d05359",
    chapter: 2,
    question:
      "True or False: The Product Backlog might commit to a Product Goal.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The answer is “False.” The Product Backlog *must* commit to a Product Goal. The Product Goal is a commitment for the Product Backlog. It describes a future state of the product which can serve as a target for the Scrum Team to plan against. The Product Goal is in the Product Backlog, and the rest of the Product Backlog emerges to define “what” will fulfill the Product Goal. The Product Goal is a commitment to ensure transparency and focus against progress.",
  },
  {
    id: "6460c8e8-cdc4-4b1c-853f-d95d65c26f71",
    chapter: 2,
    question:
      "True or False: An Increment can only be released after a Sprint is over.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation: "Scrum does not prescribe when to release the Increment.",
  },
  {
    id: "adc80fdd-1826-48e9-8615-4bfcac77ceae",
    chapter: 2,
    question:
      "True or False: If the Definition of Done for an Increment is part of the organization's standards, all Scrum Teams must follow it as a minimum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The answer is True. If the Definition of Done for an Increment is part of the organization’s standards, all Scrum Teams must follow it as a minimum. The Definition of Done is a formal description of the state of the Increment when it meets the quality standards required for the product. It creates transparency by providing everyone a shared understanding of what work was completed and what standards were met as part of the Increment. If a Product Backlog Item does not meet the Definition of Done, it cannot be released yet.",
  },
  {
    id: "d161ebb8-f726-4792-96ff-54234386d482",
    chapter: 2,
    question:
      "True or False: Scrum requires the Increment to be released at the end of every Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation: "Scrum does not prescribe when to release the Increment.",
  },
  {
    id: "5e6c75f4-3b78-4197-9c0f-71af46bc7f64",
    chapter: 2,
    question:
      "Which of the following best describes the Increment?\n(choose the best answer)",
    options: [
      "The Increment cannot be released during the Sprints; the Product Owner must wait for the Sprint to be over to release it.",
      "The Increment is released at the end of every Sprint.",
      "The moment a Product Backlog item meets the Definition of Done, an Increment is born.",
    ],
    correctAnswer: 2,
    explanation:
      'The correct answer is "The moment a Product Backlog item meets the Definition of Done, an Increment is born." An Increment is a concrete step toward the Product Goal and a useful, valuable version of the product. It is produced every Sprint, and the moment a Product Backlog item meets the Definition of Done, it becomes part of the Increment. This means the Increment can be released or showcased at any time during the Sprint, providing valuable feedback to stakeholders and enabling frequent inspections and adaptations.',
  },
  {
    id: "c2f8d062-fb24-431f-8b6e-81610881ee20",
    chapter: 2,
    question: "Who creates the Definition of Done?\n(choose the best answer)",
    options: [
      "The Product Owner as he/she is responsible for the product's success",
      "The Scrum Team, in a collaborative effort where the result is the common denominator of all members' definitions",
      "The development organization (or Scrum Team if none is available from the development organization)",
      "The Scrum Master as he/she is accountable for the Scrum Team's effectiveness.",
    ],
    correctAnswer: 2,
    explanation:
      "The correct answer is “The development organization … ”. The Definition of Done (DoD) is established by the development organization, involving all Scrum Team members responsible for product development. It represents the agreed-upon quality criteria that an increment must meet to be considered complete. The DoD fosters transparency and a shared understanding of what constitutes a potentially releasable increment. Although the Product Owner can collaborate in its creation, defining and adhering to the DoD remains the responsibility of the development organization.",
  },
  {
    id: "5b5e5ce1-f517-4eb9-a59b-d9dc6ff26850",
    chapter: 2,
    question:
      "True or False: The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The correct answer is true. The Sprint Backlog is a plan created by the Scrum Team during the Sprint Planning event. It contains the work necessary to deliver the Increment and achieve the Sprint Goal. It consists of the selected Product Backlog items that the team commits to completing during the Sprint, as well as a plan or strategy for how the work will be accomplished. The Sprint Backlog serves as a guide for the Scrum Team throughout the Sprint, enabling transparency, coordination, and progress tracking toward the Sprint Goal.",
  },
  {
    id: "230e3fc7-0521-4029-8e79-2a3ea7808a42",
    chapter: 2,
    question:
      "True or False: The work planned during Sprint Planning must be decomposed into one day or fewer units.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation: "This is a recommendation, not a rule.",
  },
  {
    id: "7b984a6b-a00d-43c0-a17c-eeadc1d1b62a",
    chapter: 2,
    question:
      "True or False: The Scrum Master defines the Sprint Goal during Sprint Planning.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "During Sprint Planning, the whole Scrum Team collaborates to define a Sprint Goal that communicates why the Sprint is valuable to stakeholders.",
  },
  {
    id: "2cf0447b-9e52-49ce-ae12-e979d63e1b96",
    chapter: 2,
    question:
      "What is the time-box for the Sprint Planning for a two weeks Sprint?\n(choose the best answer)",
    options: ["4 hours.", "2 hours.", "8 hours or less.", "It depends."],
    correctAnswer: 2,
    explanation:
      "Sprint Planning is timeboxed to a maximum of eight hours for a one month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "5b74e91a-1f67-428a-88e2-eddccd825b04",
    chapter: 2,
    question:
      "During a Sprint, the CEO asks the Developers to add work on something critical not part of the Sprint Backlog. What should the Developer do?\n(choose the best answer)",
    options: [
      "Since it is critical, add the item to the current Sprint and drop a less important item of equal size.",
      "Add it to the Product Backlog.",
      "Start working on it.",
      "Let the Product Owner be aware so that he or she handles the requests of the CEO.",
    ],
    correctAnswer: 3,
    explanation:
      "The correct answer is “ Let the Product Owner be aware so … ”. If the CEO or any stakeholder asks the Developers to add work during a Sprint, they must inform the Product Owner immediately. The Product Owner manages the Product Backlog and decides the work's priority and order. The Scrum Team's Sprint work is based on items selected during Sprint Planning from the Product Backlog. Introducing new work during a Sprint could disrupt focus and commitment to the Sprint Goal. Thus, the Product Owner must handle such requests and decide if the new work should be added to the Product Backlog for future Sprints. Note that changing the Sprint scope is possible, but it would require discussions between the Product Owner and Developers and assessing if such change hinders the Sprint Goal.",
  },
  {
    id: "fb6cfd50-1faa-4e43-bcd1-fa90d548a25f",
    chapter: 2,
    question:
      "The Sprint Backlog is a plan by and for the Developers.\n\n(Which of the following statement is FALSE?)",
    options: [
      "An output of the Sprint Planning is the Sprint Backlog, which consists of all the tasks to be executed during the Sprint.",
      "The Developers may ask the Product Owner for clarifications during the Sprint.",
      "The Sprint Backlog is emergent.",
      "Work can be removed or added through the collaboration between the Developers and the Product Owner.",
    ],
    correctAnswer: 0,
    explanation:
      "The version of the Sprint Backlog immediately after the Sprint Planning is composed of a few of the tasks that will be executed during the Sprint, but not all of them! The Sprint Backlog emerges (is updated) during the Sprint as more is learned.",
  },
  {
    id: "0566ec9c-ed82-4c42-99e3-1cebfb513e20",
    chapter: 2,
    question:
      "When does a Developer become the owner of a work unit (i.e., work item, task, technical task, or task card)?\n(choose the best answer)",
    options: [
      "Whenever the Scrum Master allocates it to him/her.",
      "Never.",
      "During Sprint Planning.",
      "During Daily Scrums.",
    ],
    correctAnswer: 1,
    explanation:
      "The correct answer is “Never.” In Scrum, individual Developers do not become owners of specific work units like work items, tasks, technical tasks, or task cards. Scrum promotes a collaborative and self-managing environment where the Developers collectively owns the work and collaborate to complete the Sprint Backlog items. Each Developer should have the flexibility to take on tasks based on their skills, expertise, and capacity during the Sprint. Ownership of work should be shared, allowing for greater adaptability and collaboration within the team.",
  },
  {
    id: "db87c594-6933-4ff8-a540-861ae347cd98",
    chapter: 2,
    question:
      "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how).\n\n(Which of the following sentences is FALSE?)",
    options: [
      "The Sprint Backlog makes all of the work that the Developers identify as necessary to meet the Sprint Goal.",
      "The Developers modify the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint.",
      "The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum.",
      "The Developers commit to the Sprint Backlog.",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Backlog is a forecast. The Developers commit to the Sprint Goal.",
  },
  {
    id: "a6fa8dd1-9490-4794-a8c6-ff0892e97077",
    chapter: 2,
    question:
      "True or False: The only valid reason for having a Sprint be canceled is the Sprint Goal becoming obsolete, but only the Scrum Master can make such a decision.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The correct answer is “False.” Only the Product Owner has the authority to cancel the Sprint.",
  },
  {
    id: "6f69533a-cc25-45ce-a887-1caaf752cf36",
    chapter: 2,
    question: "When is a Sprint over?\n(choose the best answer)",
    options: [
      "When the time-box is over.",
      "Last day of the month.",
      "When the Product Owner accepts the work delivered by the Developers.",
      "When all the work planned for the Sprint is Done.",
    ],
    correctAnswer: 0,
    explanation:
      'The correct answer is "When the time-box is over." In Scrum, a Sprint is a fixed, time-boxed period (usually two to four weeks) where the Scrum Team works to create a useful, valuable Increment. The Sprint\'s duration remains consistent throughout the project. Regardless of completed work, the Sprint ends when the time-boxed period concludes, providing predictability for planning and inspection.',
  },
  {
    id: "fe93ca3a-e324-4f5f-8121-67ac018519a6",
    chapter: 2,
    question: "The length of a Sprint should be:\n(choose the best answer)",
    options: [
      "Short enough to handle business risks.",
      "Short enough to synchronize with other business events.",
      "All of these answers are correct.",
      "At most, one month.",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Guide recommends that the length of a Sprint should be short enough to achieve the objectives while being long enough to deliver significant value. It should consider handling business risks, synchronizing with other business events, and allowing for meaningful feedback and inspection. While the Scrum Guide does mention that a Sprint length should be at most one month, it also allows shorter Sprints if they are suitable for the team and the product's context. Therefore, all the given answers are correct as they highlight different aspects to be considered when determining the Sprint length.",
  },
  {
    id: "d957f6b2-69ce-4ecc-81b3-99d84b3399ca",
    chapter: 2,
    question:
      "Consider that the first Sprint has just ended. When does the second Sprint begin?\n(choose the best answer)",
    options: [
      "Next Monday.",
      "Immediately.",
      "When the Product Backlog Items are Ready.",
      "Next week.",
    ],
    correctAnswer: 1,
    explanation:
      "The correct answer is “Immediately.” In Scrum, Sprints follow each other in a continuous flow. As soon as one Sprint ends, the next one should begin immediately after the Sprint Review and Sprint Retrospective events of the previous Sprint. This continuous cycle ensures a consistent rhythm for the team and allows for frequent inspection and adaptation of the product and the team's processes. Starting the next Sprint immediately also helps maintain focus and productivity by minimizing unnecessary delays between Sprints.",
  },
  {
    id: "417236cc-c29e-4f29-9532-d1b582df73a2",
    chapter: 2,
    question:
      "Which of the following is a valid reason for the Scrum Master to be at the Daily Scrum?\n(choose the best answer)",
    options: [
      "To update the burndown.",
      "To conduct the meeting, making sure that everybody answers the three questions.",
      "To collect the status from the Developers and, if necessary, report to upper management.",
      "The Scrum Master does not have to be at the Daily Scrum; however, he or she must ensure that the Developers hold it.",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Master is not required to attend the Daily Scrum but must ensure that the Developers conduct it. The Daily Scrum is a time-boxed event for the Developers to synchronize and plan for the next 24 hours. It is a self-managing event where Developers inspect progress and adapt their plan. The Scrum Master's role is to support the team's understanding of the Daily Scrum's purpose and facilitate its effective conduct without managing or controlling it.",
  },
  {
    id: "6e306622-7cce-4e10-aebb-7f94e7a59492",
    chapter: 2,
    question:
      "The Scrum Guide says that Daily Scrum is held at the same time and place. Why?\n(choose the best answer)",
    options: [
      "Such consistency reduces complexity.",
      "To have it run in the team's War Room.",
      "To avoid having people arriving late.",
      "To ease the process of booking rooms since this might be challenging in large-scale organizations.",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum Guide advises having the Daily Scrum at the same time and place daily to reduce complexity. This consistency enables effective daily planning, establishes a predictable rhythm, and fosters punctuality and better time management among team members. Ultimately, a consistent Daily Scrum improves communication, collaboration, and productivity within the Scrum Team.",
  },
  {
    id: "c9fe1b35-de94-4c85-98ff-17cde5f38a2e",
    chapter: 2,
    question:
      "The timebox for a Daily Scrum for a two-week Sprint is?\n(choose the best answer)",
    options: [
      "Seven minutes.",
      "15 minutes.",
      "Four hours.",
      "Three minutes per person.",
      "As long as necessary to answer the three questions.",
    ],
    correctAnswer: 1,
    explanation:
      "The timebox for the Daily Scrum is 15 minutes regardless of the Sprint length Keeping it within 15 minutes helps maintain the event's purpose as a daily synchronization event and prevents it from becoming a lengthy status update or problem-solving session.",
  },
  {
    id: "fb362efd-067d-4945-8f81-b064636d7c50",
    chapter: 2,
    question: "Who must attend the Daily Scrum?\n(choose the best answer)",
    options: [
      "The Developers and the Product Owner.",
      "The Scrum Team.",
      "The Developers.",
      "The Developers and Scrum Master.",
    ],
    correctAnswer: 2,
    explanation:
      "The correct answer is “The Developers.” The Daily Scrum is an event for the Developers of the Scrum Team. The Scrum Guide states that the Developers must attend the Daily Scrum, as it is an opportunity for them to synchronize their work, plan the next 24 hours, and inspect progress towards the Sprint Goal. The Product Owner and Scrum Master can attend (but shouldn’t actively participate), but their presence is optional. The focus of the Daily Scrum is on the Developers and their collaboration in achieving the Sprint Goal.",
  },
  {
    id: "6c5f4e00-6977-4354-a14a-9d85bb2e875b",
    chapter: 2,
    question:
      "How much work must the Developers do to a Product Backlog item it selects for a Sprint?\n(choose the best answer)",
    options: [
      "All development work, except for specialized ones that require additional resources such as environments and tools.",
      "Analysis, specification, architecture, design, programming, testing, documentation, and deployment.",
      "As much as negotiated with the Product Owner and in conformance with the Definition of Done.",
      "As much as possible.",
    ],
    correctAnswer: 2,
    explanation:
      "The Developers collaborate with the Product Owner during Sprint Planning to select the Product Backlog items to be developed during the Sprint. They turn selected Product Backlog items into an Increment, ensuring it meets the Definition of Done (DoD). The DoD sets quality criteria for completeness. The amount of work done is based on mutual agreement and the Sprint's capacity.",
  },
  {
    id: "46e95a0e-4148-4e2e-8c7f-c52f247fb24f",
    chapter: 2,
    question:
      "True or False: The Sprint Review is a formal meeting for demonstrating the Increment.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The correct answer is “False”. The Sprint Review is not solely a formal demonstration of the Increment but a collaborative event involving the Scrum Team and stakeholders. Its purpose is to inspect the Increment, gather feedback, and adapt the Product Backlog as needed. The Scrum Guide highlights that it should be an informal discussion, not a presentation or status meeting. Stakeholders actively participate, providing feedback to shape the product's future. The Sprint Review promotes transparency, open communication, and collaboration between the Scrum Team and stakeholders.",
  },
  {
    id: "61ceec96-6b6d-4e8f-b465-120d0cfd8262",
    chapter: 2,
    question:
      "Which statement best describes the Sprint Review?\n(choose the best answer)",
    options: [
      "It is when management verifies the tasks performed by the Developers during a Sprint.",
      "It is when the Scrum Team demonstrates the work done for everyone in the organization.",
      "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Review aims to inspect the Sprint outcome and determine future adaptations. It involves collaboration between the Scrum Team and stakeholders to inspect the Increment and gather feedback. The team showcases completed work, and stakeholders offer input to shape the product's future. Emphasis is on inspecting functionality, seeking feedback, and making decisions for adaptations. The Sprint Review fosters transparency, gathers valuable feedback, and enables continuous product improvement by the Scrum Team.",
  },
  {
    id: "353d05d7-7216-4019-821b-aa884525b147",
    chapter: 2,
    question: "The Sprint Review is time-boxed to?\n(choose the best answer)",
    options: [
      "Four hours for a monthly Sprint; it is usually shorter for shorter Sprints.",
      "Four hours.",
      "Once a Sprint.",
      "As long as the Product Owner needs.",
      "Three hours for a monthly Sprint; it is usually shorter for shorter Sprints.",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Review is time-boxed to four hours for a monthly Sprint; it may be shorter for shorter Sprints.",
  },
  {
    id: "ef553546-1d58-415a-a5f7-0c0b70bad954",
    chapter: 2,
    question:
      "The Sprint Retrospective is time-boxed to:\n(choose the best answer)",
    options: [
      "Four hours and longer as needed.",
      "Three hours for a monthly Sprint. For shorter Sprints, it is usually shorter.",
      "As long as the Scrum Master defines.",
      "Four hours for a monthly Sprint. For shorter Sprints, it is usually shorter.",
      "One day.",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Retrospective is time-boxed to three hours for a monthly Sprint, and for shorter Sprints, it is usually shorter.",
  },
  {
    id: "6551f2c0-13a8-4883-a752-8cc5fbcede8e",
    chapter: 2,
    question:
      "True or False: The Scrum Team must choose at least one high-priority process improvement identified during the Sprint Retrospective and place it in the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The answer is “False.” While the Scrum Team should identify and discuss process improvements during the Sprint Retrospective, there is no explicit requirement to place them in the next Sprint Backlog.",
  },
  {
    id: "2ad0dcc3-29f5-49fb-ae33-ee406c1fb178",
    chapter: 2,
    question:
      "Which statement best describes the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "It is an opportunity for the Scrum Team to plan ways to increase quality and effectiveness",
      "It is when the Developers inspect the outcome of a Sprint and figure out what to do next.",
      "It is a mechanism for management to control tasks developed by the Developers during a Sprint.",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Retrospective is an opportunity for the Scrum Team to plan ways to increase quality and effectiveness. During this event, the team reflects on the past Sprint, inspects their processes, and identifies improvements to enhance their collaboration, product quality, and overall effectiveness. It is a self-managing and collaborative event focused on continuous improvement and making adaptations to work better in future Sprints.",
  },
  {
    id: "0f06ebf4-1f8d-481a-bdab-d0703f0f8530",
    chapter: 2,
    question:
      "Who must participate in Sprint Retrospectives?\n(choose the best answer)",
    options: [
      "The Scrum Master and The Developers.",
      "The Developers and The Product Owner.",
      "The Scrum Team.",
      "The Developers and The Project Manager.",
      "The Scrum Team and key stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Team. The Sprint Retrospective is a Scrum Team event. It involves the entire Scrum Team, including the Product Owner, Scrum Master, and Developers. The purpose is to reflect on the past Sprint, inspect their processes, and identify ways to improve collaboration, product quality, and effectiveness. The participation of the entire Scrum Team ensures that all perspectives are considered and enables collective ownership of the improvement process.",
  },
  {
    id: "5dd6ef82-df1d-4369-9dac-a38496fcc84e",
    chapter: 2,
    question:
      "True or False: When multiple teams work together on the same product, each team has its Product Owner. Therefore, it is possible to have multiple Product Owners for the same product.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The correct answer is “False.” According to the Scrum Guide, for a single product, there should be only one Product Owner who is responsible for maximizing the value of the product. Even if multiple teams work on the same product, they collaborate under one Product Owner to maintain a clear and unified vision for the product and avoid conflicting priorities. Having multiple Product Owners could lead to misalignment and hinder effective product development.",
  },
  {
    id: "1f931394-704c-42bc-8803-9aa20d6ea40e",
    chapter: 2,
    question:
      "True or False: When multiple teams work together on the same product, each team should maintain a separate Product Backlog to reduce complexity.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The correct answer is “False.” When multiple teams work together on the same product, they should collaborate and share a single Product Backlog. This promotes transparency, alignment, and effective coordination among teams. A shared Product Backlog helps maintain a clear and unified view of the product's priorities, avoiding duplication and reducing complexity in managing the product's development.",
  },
  {
    id: "0d29d7b4-e17f-4f8f-b1f8-871984bd0737",
    chapter: 2,
    question:
      "Who describes the Definition of Done in the case of multiple Scrum Teams working on a single product?\n(choose the best answer)",
    options: [
      "It depends on the type of product.",
      "Each Scrum Team defines its own.",
      "All the Scrum Teams must mutually define the Definition of Done.",
    ],
    correctAnswer: 2,
    explanation:
      'The correct answer is “All the Scrum Teams must mutually define the Definition of Done.” When multiple Scrum Teams collaborate on a single product, they need to work together to establish a shared and agreed-upon Definition of Done. This ensures that the Increment is consistently integrated and meets the required quality standards across all teams. Collaboratively defining the Definition of Done promotes alignment, transparency, and a unified understanding of what "Done" means for the product. However, note that they may choose to apply a more stringent Definition of Done within their own teams, but cannot apply less rigorous criteria than agreed for the Increment.',
  },
  {
    id: "8b33c721-29ca-4f52-b9a4-6f1d0830dda9",
    chapter: 2,
    question:
      "True or False: Sprint Planning is exclusively restricted to the Scrum Team, and no other stakeholders are allowed to attend.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Sprint Planning is a collaborative event where the Scrum Team (which includes the Product Owner, Scrum Master, and Developers) works together to create a plan for the upcoming Sprint. However, Sprint Planning is not limited to only the Scrum Team. The Scrum Team may also invite other people to attend Sprint Planning to provide advice.",
  },
  {
    id: "b72376b7-f838-4858-be2b-720b8088c9eb",
    chapter: 2,
    question:
      "Select the correct statement regarding expressing Product Backlog items:\n(choose the best answer)",
    options: [
      "Product Backlog items must always be expressed as user stories.",
      "Product Backlog items should never be expressed as user stories.",
      "Product Backlog items can be expressed in any format chosen by the Scrum Team.",
      "Product Backlog items should only be expressed as technical requirements.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, Product Backlog items can be expressed in any form that is deemed valuable by the Scrum Team. While user stories are a common way to express Product Backlog items, they are not the only option. The Scrum Team should use whatever format best suits their needs for effective collaboration and understanding.",
  },
  {
    id: "b1a3c266-804a-4c11-a5cd-00985b10990c",
    chapter: 2,
    question:
      "Two Scrum Teams, Team Alpha and Team Bravo, work on separate products. Team Alpha consists of 7 members and has a velocity of 60, while Team Bravo has 12 members and a velocity of 85. Which team can be considered more efficient?\n(choose the best answer)",
    options: [
      "Team Alpha",
      "Team Bravo",
      "The efficiency cannot be determined solely based on the given information.",
    ],
    correctAnswer: 2,
    explanation:
      "The performance of a Scrum Team cannot be determined solely based on the number of team members or velocity. Velocity is a measure of the amount of work completed by a team in a given Sprint (output), but it is not a direct indicator of performance or efficiency (outcome). Additionally, comparing the performance of different Scrum Teams working on different products can be challenging due to varying factors. Therefore, without more information or context, it is not possible to determine which team has a higher performance.",
  },
  {
    id: "fb023597-19fb-417d-b269-d227703b65e5",
    chapter: 2,
    question:
      "The effectiveness of decisions made by Scrum Teams based on Scrum artifacts depends on:\n(choose the best answer)",
    options: [
      "The adaptability of the artifacts.",
      "The transparency of the artifacts.",
      "The agility of the artifacts.",
      "The format of the artifacts.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Scrum Teams use the information present in the Scrum artifacts, such as the Product Backlog, Sprint Backlog, and Increment, to make informed decisions. The effectiveness of these decisions depends on the transparency of the artifacts. Transparency means that the artifacts are understood by everyone involved and provide a clear view of the work. It enables effective collaboration, inspection, and adaptation.",
  },
  {
    id: "22036f45-8578-44e6-976a-8489f566e21d",
    chapter: 2,
    question:
      "Which characteristics are most applicable to the accountability of the Product Owner in Scrum?\n(choose the best two answers)",
    options: [
      "Value maximizer.",
      "Tester within the Scrum Team.",
      "Product domain expert.",
      "Scrum Master role replacement.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Product Owner is responsible for maximizing the value of the product and is the sole individual accountable for managing the Product Backlog. This includes ensuring that the Product Backlog is transparent, prioritized, and reflects the needs of the stakeholders. The Product Owner should also be a domain expert, having a deep understanding of the product and its market. Additionally, the Product Owner collaborates with the Scrum Team but does not replace the Scrum Master by, for instance, facilitating events. Being a tester is not a characteristic of the Product Owner role.",
  },
  {
    id: "42cc621b-e0ac-4722-94ed-3fdc1d588447",
    chapter: 2,
    question:
      "What is the primary reason for stakeholders to attend the Sprint Review in Scrum?\n(choose the best answer)",
    options: [
      "To tell the Scrum team how to develop the product.",
      "To provide feedback on the Scrum Master's performance.",
      "To provide feedback on the Increment developed during the Sprint.",
      "To assess the individual performance of the Developers members.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, stakeholders' presence at the Sprint Review is important to provide feedback on the Increment. The Sprint Review is an opportunity for the Scrum Team to gather valuable input and insights from stakeholders regarding the Increment developed during the Sprint. This feedback helps validate assumptions, gather new requirements, and adapt the Product Backlog as needed. While stakeholders may provide feedback on the Scrum implementation and working style indirectly, the primary focus is on the feedback related to the product Increment.",
  },
  {
    id: "491e20e1-2a70-4345-b7a9-66e2e7d1a224",
    chapter: 2,
    question:
      "What is the purpose of the Definition of Done in Scrum?\n(choose the best two answers)",
    options: [
      "It ensures that all documentation is completed for the Product Increment.",
      "It sets the quality measures required for the Increment to be considered complete and potentially releasable.",
      "It increases the team's velocity by defining clear guidelines for work completion.",
      "It provides a shared understanding about the work that has been completed.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "The Definition of Done is a shared agreement within the Scrum Team that defines the criteria for a Product Increment to be considered complete and potentially releasable. It serves as a formal description of the quality measures required for the Increment, ensuring that all necessary work has been completed. This shared understanding creates transparency among the team members.",
  },
  {
    id: "00157561-a700-4241-bad8-b81ec213b68b",
    chapter: 2,
    question:
      "What should the Product Owner do if the Product Backlog is not complete when the Developers are ready to start the first Sprint?\n(choose the best answer)",
    options: [
      "Ask the Developers for assistance in refining the Product Backlog and postpone the Sprint.",
      "Proceed with starting the first Sprint, with the objective of completing the Product Backlog.",
      "Start the first Sprint and continue refining the Product Backlog during the Sprint.",
      "Cancel the Sprint until the Product Backlog is fully complete.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the first Sprint is preceded by Sprint Planning, during which the Scrum Team collaboratively creates a Sprint Goal and selects items from the Product Backlog to work on. If the Product Backlog is not complete yet, it is still acceptable to start the first Sprint. The Product Owner should continue refining the Product Backlog throughout the Sprint while the Developers focus on achieving the Sprint Goal.",
  },
  {
    id: "b668ef45-30c7-4d76-8f80-ec5fbf670528",
    chapter: 2,
    question:
      "What are some likely consequences when the Developers do not have a clear understanding of the Definition of Done?\n(choose the best answer)",
    options: [
      "Decrease transparency and confuse the stakeholders’ expectations.",
      "The Product Owner will have less clarity regarding how to order the Product Backlog.",
      "The team may struggle to estimate and plan their work accurately.",
      "The outcome of the Sprint might end up not developing a useful, valuable Increment.",
      "All of the above.",
    ],
    correctAnswer: 4,
    explanation:
      "If Developers lack a clear understanding of the Definition of Done, it can have wide-ranging implications across the entire Scrum team and process. It can disrupt the Product Owner's ability to effectively order the Product Backlog, decrease transparency, and hinder accurate work estimation and planning. Additionally, the outcome of the Sprint might be a useful , valuable Increment. In general, accountabilties and events within the Scrum framework are potentially affected when there's a lack of understanding of the Definition of Done, underscoring its critical role in maintaining effective Scrum processes.",
  },
  {
    id: "1a335e9d-d32c-4ba9-8aa5-ac1cac55e1be",
    chapter: 2,
    question: "What is the Increment in Scrum?\n(choose the best two answers)",
    options: [
      "A UML diagram illustrating the future functionalities of the software.",
      "Work that meets the Definition of Done.",
      "A prototype of the user interface for the software.",
      "The total of completed Product Backlog items from the current Sprint and all previous Sprints.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Increment is the sum of all the Product Backlog items completed during the Sprint and the increments from all previous Sprints. It represents the work that meets the Definition of Done, which is a shared agreement within the Scrum Team. The Increment is not a UML diagram (option “A UML diagram …”) or a user interface layout (option “A prototype of  … ”).",
  },
  {
    id: "57c4d343-5dd1-4029-bd9e-a563071e6284",
    chapter: 2,
    question:
      "True or False: The duration of a Sprint can exceed one month for large products.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, a Sprint is time-boxed to a maximum duration of one month or less. This time-boxed nature provides a consistent rhythm and ensures that the team can inspect and adapt frequently. Therefore, the statement that the maximum duration of a Sprint may be more than one month for large products is false.",
  },
  {
    id: "537160b6-7f33-4457-804f-e4e266d6516a",
    chapter: 2,
    question:
      "What is the term for the model of taking small steps, observing the results, and adjusting the next steps based on observation and experience?\n(choose the best answer)",
    options: ["Agile", "Six Sigma", "Traditional", "Empiricism"],
    correctAnswer: 3,
    explanation:
      "The concept described in the question is known as empiricism. It emphasizes making decisions based on observation, experience, and evidence. Scrum encourages teams to take small steps, inspect the outcomes, and adapt their approach based on the observed results. This iterative and empirical approach enables continuous improvement and allows teams to respond effectively to changing circumstances.",
  },
  {
    id: "f15a5aec-a70c-4210-9960-e3023ff45bd7",
    chapter: 2,
    question:
      "The number of Developers in a Scrum Team has increased from 5 to 15, and the Daily Scrum consistently takes more than 15 minutes. What is the best course of action?",
    options: [
      "Increase the timebox of Daily Scrums to accommodate the larger team.",
      "Split the Developers into smaller teams to maintain effective communication and collaboration.",
      "Continue with longer Daily Scrums, allowing all Developers to speak.",
      "Implement stricter timekeeping and aim to finish the Daily Scrums in 15 minutes, regardless of the team size.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is time-boxed to a maximum of 15 minutes regardless of the number of Developers. The purpose of the Daily Scrum is to provide a quick synchronization opportunity for the Developers to plan their work for the next 24 hours. If the number of Developers has increased to a point where the Daily Scrum consistently takes longer than 15 minutes, it indicates that the Developers may have grown too large to maintain effective communication and collaboration. The best response in this situation is to consider reforming into two or more smaller teams, as Scrum works best with small, self-managing teams. The Scrum Guide recommends Scrum teams to have 10 or fewer people.",
  },
  {
    id: "bc5a9167-f3a2-4e51-b8d8-be3915216430",
    chapter: 2,
    question:
      "During Product Backlog refinement, what should be done to make the items ready for Sprint Planning?\n(choose the best answer)",
    options: [
      "Assign specific Developers to each item.",
      "Gather all information about the item beforehand.",
      "Add details such as a description, order, and size.",
      "Identify all the tasks.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller more precise items. This is an ongoing activity to add details, such as a description, order, and size. Attributes often vary with the domain of work.",
  },
  {
    id: "6ad50b8d-aa91-489a-9a1b-6612b8131375",
    chapter: 2,
    question:
      "When can the Product Backlog be refined?\n(choose the best answer)",
    options: [
      "During the Daily Scrum.",
      "At the end of the Sprint Review.",
      "During the Sprint Retrospective.",
      "As needed during the Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Product Backlog may be refined as needed during the Sprint.",
  },
  {
    id: "a2658a29-892e-40c2-9f74-d9f5b4f15877",
    chapter: 2,
    question:
      "You are the Scrum Master of a newly formed Scrum Team and have observed that the Product Owner is not collaborating enough with the team. What should you do?\n(choose the best answer)",
    options: [
      "Ask upper management to hire an agile coach to train the Product Owner.",
      "Tell the Product Owner that he must spend at least 1 hour per day with the team.",
      "Invite the Product Owner for a conversation and teach him why finding the time to collaborate with the team is important.",
      "Hire an assistant to work with the Product Owner.",
    ],
    correctAnswer: 2,
    explanation:
      "As the Scrum Master, one of your responsibilities is to help everyone understand Scrum theory, practices, rules, and values. This includes the Product Owner. Rather than enforcing specific time requirements or bringing in additional help, it's more constructive to foster understanding and collaboration. Openly discussing the importance of the Product Owner's collaboration with the team can lead to improved behaviors and a stronger team dynamic. It's key that the Product Owner understands that their engagement is crucial for the success of the team and the product. This approach respects the self-managing nature of Scrum Teams and promotes the principles of communication and collaboration that Scrum emphasizes.",
  },
  {
    id: "6c115509-1876-4cba-850a-1e065f97c84c",
    chapter: 2,
    question:
      "True or false: The Product Owner is the only person responsible for managing the Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for managing the Product Backlog, but they are not necessarily the sole person responsible. The Product Owner collaborates with stakeholders, the Developers, and the Scrum Master to ensure the Product Backlog is properly managed. Further, the Product Owner may delegate responsibilities to others.",
  },
  {
    id: "012dbbbd-4585-4dcb-9ae2-4586171bd52b",
    chapter: 2,
    question:
      "True or false: The Product Owner is the only person accountable for managing the Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Product Owner is the only person accountable for managing the Product Backlog.",
  },
  {
    id: "1192b8b2-a104-421a-9275-effec93df961",
    chapter: 2,
    question:
      "True or false: Product Owner can delegate the responsibility of sizing the Product Backlog to the Scrum Master.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs.",
  },
  {
    id: "add93215-22f5-4174-8dd4-b0ba89fe6b1a",
    chapter: 2,
    question: "True or false: The Product Owner must attend every Daily Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers of the Scrum Team. Its purpose is to plan work for the next 24 hours and inspect progress toward the Sprint Goal. While the Product Owner, as part of the Scrum Team, might choose to attend these events, they are not required to do so. The key is that the Daily Scrum is a tool for the Developers to coordinate their work, and non-developer attendance should not impede this process.",
  },
  {
    id: "18a956a7-d1b0-4174-aa61-6a16da7048f2",
    chapter: 2,
    question:
      "What is the accountability of the project manager in Scrum?\n(choose the best answer)",
    options: [
      "Facilitate Sprint Planning events.",
      "Manage the budget.",
      "Create the Release Plan.",
      "Scrum does not have a project manager accountability.",
      "Handle the communication with stakeholders.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, there is no project manager accountability in Scrum. The Scrum Team is self-organizing and cross-functional, consisting of the Product Owner, Scrum Master, and Developers. However, keep in mind that using Scrum in projects is possible which would mean that the Scrum Team could interact with a project manager.",
  },
  {
    id: "29e7b5ec-092d-4395-b5b4-a9d8b36f8e3a",
    chapter: 2,
    question:
      "When does a Developer become the exclusive owner of a Product Backlog item in Scrum?\n(choose the best answer)",
    options: [
      "During Sprint Retrospective.",
      "At the beginning of each Sprint.",
      "During the Sprint Review.",
      "Never. All Product Backlog Items in a Sprint are shared by all the Developers.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, Product Backlog Items in a Sprint are not exclusively owned by individual Developers. All Developers share the responsibility for delivering the Sprint Goal, even though each item may be worked on by an individual Developer.",
  },
  {
    id: "1590d51d-9c6f-4264-ac7b-9907de08ceaa",
    chapter: 2,
    question:
      "True or False: The Scrum Master is responsible for managing the Developer's work and assigning tasks.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "In Scrum, the Developers are self-managing, meaning they determine the best way to accomplish their work and manage that work throughout the Sprint. The Scrum Master does not assign tasks or manage the Developers' work. Instead, the Scrum Master's role is to ensure that the team understands and follows the principles and practices of Scrum. The Scrum Master serves as a facilitator and coach for the Scrum Team, helping remove obstacles and promoting effective communication and collaboration, but they do not dictate the day-to-day tasks of the Developers.",
  },
  {
    id: "b2e6a5d6-731a-4525-956f-b5f3d3c7d3e5",
    chapter: 2,
    question:
      "What are the primary accountabilities of the Scrum Master in Scrum?\n(choose the best two answers)",
    options: [
      "Facilitating Scrum events and ceremonies.",
      "Assigning work to the Developer.",
      "Ensuring the Product Owner's satisfaction.",
      "Promoting self-organization within the Developer.",
      "Ensuring the Scrum Team size is limited to 10 or fewer members.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide, causing the removal of impediments that prevent the Scrum Team from achieving its goals, and helping everyone understand Scrum theory and practice. The Scrum Master is not responsible for assigning tasks to the Scrum Team or ensuring a specific team size.",
  },
  {
    id: "50dec9e5-96cc-4c09-8e7c-ac16f97722b0",
    chapter: 2,
    question:
      "What are the potential benefits of including specific types of testing in the Definition of Done?\n(choose the best four answers)",
    options: [
      "Increment would be closer to a release state.",
      "Reduced technical debt in the Increment.",
      "Increased transparency, trust and confidence in the quality of the Increment.",
      "Better alignment between the Developer and the Product Owner.",
      "Simplified reporting for the upper management.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      "When the Scrum Team decides to include specific types of testing in the Definition of Done, it brings several benefits. First, it helps make the Increments closer to being releasable, as the testing ensures that the Increment meets the required quality standards. Second, it increases transparency because the state of the Increment is more visible and understandable to all stakeholders. Third, by having proper testing, the Increments are more likely to be usable and deliver value to the users.",
  },
  {
    id: "3e55114d-b14e-4e4b-9a95-b57d678b1ccf",
    chapter: 2,
    question:
      "True or False: The Sprint Backlog is expected to remain unchanged and baselined at the end of each Sprint Planning event.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the statement is false. The Sprint Backlog is a dynamic document and is not required to be baselined at the end of each Sprint Planning event. It is expected to evolve and change throughout the Sprint as the Developers learns more. The Sprint Backlog is a forecast of the work that the Developers believes it can complete in the upcoming Sprint.",
  },
  {
    id: "d1dda121-2689-4cd4-bb6b-3d4c9d004c7a",
    chapter: 2,
    question:
      "In a situation where there are 3 Scrum Teams collaborating on the development of a shared product, what action should they take to establish a common understanding of when work is considered complete?\n(choose the best answer)",
    options: [
      "Each Scrum Team should work independently and define its own unique Definition of Done without sharing it.",
      "The Scrum Master should take charge of integrating changes made by each team on a daily basis.",
      "The teams should rely on the Product Owner to provide them with common quality guidance.",
      "The Scrum Teams should collaborate and mutually define their shared Definition of Done.",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, in a scenario where multiple Scrum Teams are working on the same product, it is crucial for them to have a shared understanding of when work is considered complete. This shared understanding is achieved by mutually defining the Definition of Done (DoD). The DoD represents the agreed-upon criteria that must be met for any work to be considered complete and potentially releasable. By collaborating and defining the DoD together, the Scrum Teams can align their understanding and expectations, ensuring a unified definition of "Done."',
  },
  {
    id: "c93d95fe-ac5c-4d8e-81e8-1d0ba3f9ae0d",
    chapter: 2,
    question:
      "The Developers have completed the Sprint Planning event, and the Product Owner realizes there is an important Product Backlog item she wants to add to the Sprint Backlog. What is the appropriate action in this situation?\n(choose the best answer)",
    options: [
      "The Scrum Master should facilitate a discussion between the Product Owner and the Developer to understand the impact of adding the item and assess the feasibility of including it in the current Sprint.",
      "The Scrum Master should inform the Product Owner that adding the item is not allowed once the Sprint Planning event is completed, and it should be considered for the next Sprint.",
      "The Product Owner should directly add the item to the Sprint Backlog, as she has the authority to make such decisions.",
      "The Developers should add the item to the Sprint Backlog, as they have full autonomy in managing the Sprint Backlog.",
    ],
    correctAnswer: 0,
    explanation:
      "In Scrum, during the Sprint Planning event, the Product Owner and the Developer collaborate to determine the Sprint Backlog. However, it is possible that after the event, the Product Owner identifies another Product Backlog item that she wants to add to the Sprint Backlog. In this situation, it is up to the Developers to decide whether to add the item to the Sprint Backlog or not. They can choose to add the item if it does not jeopardize the Sprint Goal and if they believe they have the capacity to complete it within the Sprint.",
  },
  {
    id: "54564b46-c133-4f13-beca-0296cc29d996",
    chapter: 2,
    question:
      "During the Sprint, the Scrum Team finds themselves in a challenging position. As they look at their work progress, they realize that the forecasted Product Backlog items may not all be completed within the Sprint's timeline. In this situation, who needs to discuss the issue?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Scrum Master",
      "The Stakeholders",
      "The Developers and the Product Owner",
    ],
    correctAnswer: 3,
    explanation:
      "The Developers and the Product Owner need to have a discussion if it becomes apparent that not all forecasted Product Backlog items can be completed in the Sprint. They need to collaborate to understand the situation better, inspect the current progress, and adapt the plan if necessary. This may involve negotiating the scope of the Sprint or reordering the Product Backlog. The Scrum Master can facilitate this discussion, but the key conversation needs to happen between the Developers, who are doing the work, and the Product Owner, who is managing the Product Backlog and is accountable for maximizing the value of the work the Developers do. The entire Scrum Team (which includes the Scrum Master) should be aware of this situation, but the primary conversation should involve the Developers and the Product Owner.",
  },
  {
    id: "f429a6b7-226e-4345-8673-406fea6d9324",
    chapter: 2,
    question:
      "True or False: It is required to demonstrate the Increment in the Sprint Review.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Review is an opportunity for the Scrum Team and stakeholders to inspect the Increment and adapt the Product Backlog if needed. While it is common for the Increment to be demonstrated during the Sprint Review, it is not a mandatory requirement. The purpose of the Sprint Review is to gather feedback and collaborate on the next steps, and it can take various formats depending on the needs of the team and stakeholders.",
  },
  {
    id: "def6579e-50b1-440e-9531-7ee1e4524ba1",
    chapter: 2,
    question:
      "What is a primary objective for the Scrum Team during the first Sprint?\n(choose the best answer)",
    options: [
      "Completing the project plan",
      "Creating the product vision",
      "Developing the product architecture",
      "Creating a valuable and useful Increment",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, during Sprints (including the first one), the Scrum Team focuses on creating a valuable and useful Increment. The Increment should be a valuable, usable version of the product that meets the Definition of Done. The other options listed are not specific to the tasks that must be done during the first Sprint.",
  },
  {
    id: "850f7ef1-0478-4b00-a4e9-f606c961a8ed",
    chapter: 2,
    question:
      "Which three accountabilities are present in a Scrum Team?\n(choose the best answer)",
    options: [
      "Project Owner, Developers, Scrum Master",
      "Product Owner, Scrum Master, Developers",
      "Scrum Manager, Project Manager, Tester",
      "Architect, Designer, Developers",
      "Scrum Master, Test Manager, Product Owner",
    ],
    correctAnswer: 1,
    explanation:
      "The three accountabilities in a Scrum Team, as defined in the Scrum Guide, are the Product Owner, Scrum Master, and Developers. The Product Owner is responsible for maximizing the value of the product, the Scrum Master is responsible for promoting and supporting Scrum within the team, and the Developers are committed to creating any aspect of a usable Increment each Sprint.",
  },
  {
    id: "02e129de-a9f2-48af-a453-63a3eb175ba8",
    chapter: 2,
    question:
      "True or False: Is it mandatory for a Scrum Team to completely eliminate all technical debt?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Technical debt refers to the incomplete work or suboptimal design that needs to be addressed in the future. While it is ideal for a Scrum Team to minimize technical debt, it is not realistic to expect a Scrum Team to have no technical debt. The Scrum Team should prioritize and address technical debt when it becomes necessary and impacts the ability to deliver value.",
  },
  {
    id: "5f583208-9415-44d5-a9eb-755b68b6f099",
    chapter: 2,
    question: "When does adaptation occur in Scrum?\n(choose the best answer)",
    options: [
      "Only during the Sprint Review",
      "Exclusively at the Daily Scrum",
      "Throughout the Sprint as needed and during the Scrum events",
      "Solely during Sprint Planning",
    ],
    correctAnswer: 2,
    explanation:
      "In Scrum, adaptation is an essential principle that promotes continuous improvement. It occurs throughout the Sprint as needed, not just limited to a specific Scrum event. The Scrum Team inspects and adapts its progress, product, and process to optimize value delivery. Adaptation can happen during Daily Scrums, Sprint Planning, Sprint Reviews, or any other time the team identifies opportunities for improvement.",
  },
  {
    id: "fb0b4f86-722b-4f40-9ef4-a3776f3b857c",
    chapter: 2,
    question:
      "During the Sprint Review, the Scrum Team discovers that a Product Backlog item does not meet their Definition of Done. What should the Scrum Team do with the undone item?\n(choose the best two answers)",
    options: [
      "Include the item in the Increment for this Sprint",
      "Remove it from the Increment",
      "Return it to the Product Backlog",
      "Seek approval from stakeholders to release it",
      "Demonstrate it during the Sprint Review",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "If a Product Backlog item does not meet the Definition of Done at the Sprint Review, the Scrum Team should not include it in the Increment for that Sprint or demonstrate it. Instead, they should return the item to the Product Backlog for future consideration. The purpose of the Sprint Review is to inspect the Increment, and only items meeting the Definition of Done should be included. Further, accepting it for release without meeting the Definition of Done would not align with Scrum principles.",
  },
  {
    id: "b9fb558a-bbc6-4925-a86e-21419ebeec26",
    chapter: 2,
    question: "In Scrum, who manages the Scrum Team?\n(choose the best answer)",
    options: [
      "Scrum Master",
      "Product Owner",
      "Stakeholders",
      "Project manager",
      "Scrum Team",
    ],
    correctAnswer: 4,
    explanation:
      "Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal. Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how.",
  },
  {
    id: "b30c1898-675a-4a70-81ec-f093db69796a",
    chapter: 2,
    question:
      "How should Developers handle non-functional or system requirements in Scrum?\n(choose the best answer)",
    options: [
      "Address them in a separate hardening Sprint",
      "Address them during the integration phase",
      "Address them before the release",
      "Address them in every Increment",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, Developers are responsible for delivering a potentially releasable Increment at the end of each Sprint. This means that they should incorporate non-functional or system requirements into every Increment they produce. By addressing these requirements continuously, the Increment becomes more robust and closer to being releasable.",
  },
  {
    id: "fa9fe123-c7d4-4f55-8d3b-5b604db1cb55",
    chapter: 2,
    question:
      "What is the accountability of the Product Owner during Sprint Zero in Scrum?\n(choose the best answer)",
    options: [
      "Prepare the Product Backlog for the entire project",
      "Gather and understand customer requirements",
      "Prepare the Product Backlog for the upcoming Sprints",
      "There is no Sprint Zero in Scrum",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, there is no "special" Sprint Zero in Scrum. All Sprints in Scrum are aimed at producing a potentially releasable Increment that meets the Sprint Goal. The concept of Sprint Zero, often used in traditional project management, is not a part of the Scrum framework.',
  },
  {
    id: "d7fbd65e-31e7-4d4b-afa2-2644e42ce71f",
    chapter: 2,
    question:
      "In Scrum, how are stakeholders typically involved in the Daily Scrum?\n(choose the best answer)",
    options: [
      "They lead the Daily Scrum meeting",
      "They provide updates on their tasks and progress",
      "They make decisions regarding the Sprint Backlog",
      "They observe the Daily Scrum without active participation",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, stakeholders are not directly involved in the Daily Scrum. The Daily Scrum is a time-boxed event for the Developers to synchronize their activities and plan their work for the next 24 hours. While stakeholders may be interested in the progress of the product development, their involvement and communication primarily happen through the Product Owner or other designated channels outside of the Daily Scrum.",
  },
  {
    id: "1550be85-08bf-490d-a5df-25df2c3dbcc5",
    chapter: 2,
    question:
      "When is the best time to integrate work in Scrum?\n(choose the best answer)",
    options: [
      "Continuously during the Sprint",
      "At the beginning of the Sprint",
      "During the Sprint Review",
      "After the Sprint Retrospective",
      "At the end of the Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, work should be integrated throughout the Sprint. By integrating work throughout the Sprint, any dependencies, conflicts, or issues can be identified and resolved early, ensuring a valuable, usable Increment at the end of the Sprint.",
  },
  {
    id: "ad2401a5-d43d-4e8c-aa8c-a831877b27b6",
    chapter: 2,
    question:
      "True or False: The Product Owner alone determines the amount of work to be selected for a Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint. The Scrum Team may refine these items during this process, which increases understanding and confidence. Selecting how much can be completed within a Sprint may be challenging. However, the more the Developers know about their past performance, their upcoming capacity, and their Definition of Done, the more confident they will be in their Sprint forecasts.",
  },
  {
    id: "253b0d4e-0028-48f6-b487-7b88f3321125",
    chapter: 2,
    question:
      "Which Scrum event provides an opportunity for the Developer to inspect and adapt their progress on a daily basis?\n(choose the best answer)",
    options: [
      "Sprint Retrospective",
      "Daily Scrum",
      "Sprint Planning",
      "Product Backlog Refinement",
    ],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum is the Scrum event that supports daily inspection and adaptation. During the Daily Scrum, the Developer inspects the progress toward the Sprint Goal, plans the work for the next 24 hours, and identifies any impediments. It provides an opportunity for the team to synchronize their work and make adjustments to the plan as needed.",
  },
  {
    id: "1d9cff7b-7d47-49b7-b85f-aaf3ac14558e",
    chapter: 2,
    question:
      "Which measures can help the Product Owner assess the value of the product?\n(choose the best three answers)",
    options: [
      "The number of tasks completed by the Scrum Team",
      "Total revenue generated by the product",
      "The number of meetings attended by the Product Owner",
      "User feedback and satisfaction",
      "The average number of defects reported per Sprint",
      "The size of the Increment",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3, 4],
    isMultiSelect: true,
    explanation:
      "Total revenue generated by the product directly indicates its economic value. User feedback and satisfaction are important indicators of the product's usability, fit for purpose, and overall quality, which contribute to its perceived value. A lower number of defects reported per Sprint could indicate a higher quality product, which would also contribute to its value. Other measures such as the number of tasks completed by the Scrum Team, the number of meetings attended by the Product Owner, or the size of the Increment do not necessarily reflect the value of the product. Value is ultimately determined by the stakeholders, customers, or users, and is often reflected in how much they are willing to pay for it or how much it helps them solve their problems or meet their needs.",
  },
  {
    id: "431568df-5d7d-4114-9ed0-d7daa5841bcc",
    chapter: 2,
    question:
      "What is the main responsibility of testers in Scrum?\n(choose the best answer)",
    options: [
      "Ensure user acceptance tests are conducted",
      "Verify the completeness of the Product Backlog",
      "Help the Scrum Team incorporate quality practices",
      "There are no testers in Scrum",
      "Identify and resolve defects in the product",
    ],
    correctAnswer: 3,
    explanation:
      "In Scrum, the work usually associated with a 'tester' in traditional project management models is shared among the Developers. Scrum recognizes three accountabilities: the Product Owner, the Developers, and the Scrum Master. The term 'Developers' is used not in the narrow sense of those who write code, but in the broad sense of those who develop the product. This could include activities such as design, coding, testing, etc. The Developers as a whole are responsible for creating a valuable, useful Increment every Sprint. Quality is built into the product, and practices such as testing are a shared responsibility, not the domain of a specific 'tester' role.",
  },
  {
    id: "f2970f8b-8615-4c97-8d40-fa4d93736c4b",
    chapter: 2,
    question:
      "What happens to unfinished Product Backlog items at the end of a Sprint?\n(choose the best two answers)",
    options: [
      "They will be automatically included in the next Sprint",
      "They will be placed on the Product Backlog for future consideration",
      "They will be inspected as part of the Increment for the Sprint Review",
      "They will not be included in the Increment",
      "The Sprint duration will be extended to complete the items",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "If any Product Backlog items remain unfinished at the end of a Sprint, they are not automatically included in the next Sprint. They return to the Product Backlog where the Product Owner will reassess their value and priority. Unfinished items do not meet the Definition of Done, and therefore, are not included in the Increment that is delivered at the end of the Sprint. Extending the duration of a Sprint to accommodate unfinished items is not aligned with Scrum principles, which advocate for fixed-length Sprints to maintain rhythm, predictability, and a consistent feedback loop.",
  },
  {
    id: "39679111-81b5-486b-96c0-a3a4c37ecda9",
    chapter: 2,
    question:
      "What should the Scrum Team do if the Product Backlog is not fully refined before the start of the first Sprint?\n(choose the best answer)",
    options: [
      "Delay the start of the Sprint until the Product Backlog is fully refined",
      "Start the Sprint with the available refined items and continue refining the remaining items during the Sprint",
      "Cancel the Sprint and focus on refining the Product Backlog",
      "Proceed with the Sprint, but exclude the items that are not fully refined",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Scrum Team should start the first Sprint even if the work on the Product Backlog is not fully refined. The Product Backlog is a living artifact that evolves over time, and refinement continues throughout the project. Starting the first Sprint allows the Scrum Team to begin delivering value incrementally and gain insights for future refinement.",
  },
  {
    id: "c45579c8-05b2-4fc7-a8d6-f47e194cdeff",
    chapter: 2,
    question:
      "Which accountabilities are part of a Scrum Team? \n(choose the best two answers)",
    options: [
      "A Scrum Engineer",
      "A Scrum Master",
      "A Product Owner",
      "Quality Assurance (QA) Analysts",
      "A project manager",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, a Scrum Team consists of three accountabilities: the Scrum Master, the Product Owner, and the Developers.",
  },
  {
    id: "9b568192-7669-4754-b358-43e5ca33d092",
    chapter: 2,
    question:
      "True or False: The Scrum Team is responsible for managing the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint in order to achieve the Sprint Goal.",
  },
  {
    id: "7e4f0626-f6c9-4477-a2e2-a73ceb1e73eb",
    chapter: 2,
    question:
      "True or False: The Product Owner is responsible for creating the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Sprint Backlog is created during the Sprint Planning event and is the responsibility of the Developers, not the Product Owner. The Developers select items from the Product Backlog, break them down as needed, and decide the plan to deliver them in the upcoming Sprint. This forms the Sprint Backlog. However, the Product Owner provides clarity on Product Backlog items and collaborates with the Developers to optimize value.",
  },
  {
    id: "ace717b8-daed-42e9-bf67-370a2313b474",
    chapter: 2,
    question:
      "How can a Scrum Team ensure that security requirements are addressed?\n(choose the best two answers)",
    options: [
      "Assign a security specialist to the team",
      "Use separate security Sprints to address security requirements",
      "Include security requirements in the Definition of Done",
      "Add them in the Product Backlog",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "To ensure security requirements are consistently addressed in a Scrum Team's work, such requirements should be included in the Definition of Done and added to the Product Backlog. This approach embeds security considerations in the routine operations of the team. The Definition of Done provides a standard for completion that includes security requirements, while the Product Backlog itemizes these requirements for prioritization and future action.",
  },
];

// Practice Test #3 — 180 questions
export const questionsPracticeTest3: Question[] = [
  {
    id: "45c0870b-d590-4608-b696-c24afe0ab1a4",
    chapter: 3,
    question:
      "True or False: On big projects, It is good to have at least two Product Owners.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner.",
  },
  {
    id: "2e7c83d7-74dd-4efa-93f0-8b9eb5ca6533",
    chapter: 3,
    question:
      "Which of the following is LEAST likely to be used by a Scrum Team?\n(Select the best answer)",
    options: [
      "WBS, Gantt Chart",
      "Digital camera, task board",
      "Large screen, Planning Poker cards",
      "Wiki, online forum",
    ],
    correctAnswer: 0,
    explanation:
      "WBS and Gantt Chart are mainly used in planning predictive (plan-based) projects rather than adaptive (Agile) ones.",
  },
  {
    id: "d3ac0295-6385-49be-9d1d-5725f0e3bd96",
    chapter: 3,
    question:
      "Who must participate in the Daily Scrum?\n(Select the best answer)",
    options: [
      "The Developers.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Scrum Team.",
    ],
    correctAnswer: 0,
    explanation:
      "All the Developers of the Scrum Team must be present at the Daily Scrum since it is an event for them to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work.",
  },
  {
    id: "6961eda5-4854-476f-a742-32ea429c3637",
    chapter: 3,
    question:
      "True or False: Scrum is not a definitive method or technique.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Scrum (n): A framework within which people can address complex adaptive problems while productively and creatively delivering products of the highest possible value. Scrum is not a process, technique, or definitive method. Rather, it is a framework to employ various processes and techniques.",
  },
  {
    id: "b8d359d0-333c-4da0-8d71-34afc3d254e8",
    chapter: 3,
    question:
      "True or False: The Daily Scrum is a 15-minute time-boxed event independent of the Scrum Team's size and Sprint's length.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Daily Scrum is a 15-minute time-boxed event for the Developers of the Scrum Team, independent of any other factor.",
  },
  {
    id: "650752d5-4f6a-41e3-ae1e-54a8448c143e",
    chapter: 3,
    question:
      "What provides guidance to the Developers on why it is building the Increment?\n(Select the best answer)",
    options: [
      "The Product Owner.",
      "The Sprint Goal",
      "The Scrum Master.",
      "The Sprint Backlog",
      "The Project Goal.",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). The Sprint Goal is a commitment by the Developers.",
  },
  {
    id: "1eabad41-d249-4129-b157-45ea0b244ae1",
    chapter: 3,
    question:
      "True or False: Scrum allows additional events that are not defined in Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Various processes, techniques, and methods can be employed within the framework, including additional events. However, they should adhere to Scrum foundations (empiricism and lean thinking)",
  },
  {
    id: "7596c4d9-20e7-48a6-86bf-a2229c0141e3",
    chapter: 3,
    question: "Scrum is founded on?\n(Select the best answer)",
    options: [
      "Empiricism and lean thinking",
      "Only Empiricism",
      "PDCA",
      "Scientific method",
      "Kanban",
    ],
    correctAnswer: 0,
    explanation: "Scrum is founded on empiricism and lean thinking.",
  },
  {
    id: "63833533-2b9a-4fb9-87db-f2a96cce182c",
    chapter: 3,
    question:
      "True or False: It is a good habit to have from time to time a special technical Sprint that consists only of tasks excluding the technical debt without implementing any new functionality.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "All Sprints must deliver at least some business functionality, no matter how small.",
  },
  {
    id: "c94034b2-3309-444f-bd94-c4569c5bd83c",
    chapter: 3,
    question: "How is the Product Backlog ordered?\n(Select the best answer)",
    options: [
      "The less defined items are at the top.",
      "Clear and more detailed items at the top.",
      "Smaller items on the bottom.",
      "The recently added items are at the bottom.",
    ],
    correctAnswer: 1,
    explanation:
      "Higher ordered Product Backlog items are usually clearer and more detailed than lower ordered ones. More precise estimates are made based on greater clarity and increased detail; the lower the order, the less detail.",
  },
  {
    id: "35e61acc-6640-4a87-a1a0-f8f0d93e66c8",
    chapter: 3,
    question:
      "What is a proper role of a PMO in a company that uses Scrum?\n(Select the best answer)",
    options: [
      "There's no place for a PMO in such an organization.",
      "Define a standard Definition of Done for the organization.",
      "The PMO will be responsible for making higher-level decisions in the project.",
    ],
    correctAnswer: 1,
    explanation:
      "One of the roles of the Project Management Office is to define and maintain organizational standards. If the Definition of Done for an increment is part of the organization's standards, all Scrum Teams must follow it as a minimum.",
  },
  {
    id: "bb19cb80-54e3-45ce-b02a-bd3ee9a824f6",
    chapter: 3,
    question:
      "The Product Backlog is the single source of work undertaken by the Scrum Team.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Product Backlog is the single source of work undertaken by the Scrum Team.",
  },
  {
    id: "970f1588-5b95-4ef3-8dda-6a628c42ddff",
    chapter: 3,
    question:
      "Which of the following may change during the Sprint?\n(Select the best answer)",
    options: ["Sprint Goal", "Sprint Backlog", "Minimum level of quality"],
    correctAnswer: 1,
    explanation:
      "During the Sprint, scope may be clarified and renegotiated with the Product Owner as more is learned. Further, the Sprint Backlog is a plan by and for the Developers.",
  },
  {
    id: "34590efa-bec1-448d-848c-6a6417dae0da",
    chapter: 3,
    question: "There are no testers in Scrum.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'There are no people "titled" as testers, because we don\'t have extra roles and titles in Scrum. However, there can be "developers" who are expert in testing. To make things clear. There are people that perform testing, if necessary, but they are Developers.',
  },
  {
    id: "7f4546de-e1fd-4155-ae1e-96444b76b8f0",
    chapter: 3,
    question:
      "Who is accountable for explaining the Product Backlog items?\n(choose the best option)",
    options: [
      "The Developers are self-managed and have to talk to anyone necessary and find out the meanings of items.",
      "The Business Analyst",
      "The Product Owner",
      "The Scrum Master",
      "The user's representative",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Owner is accountable for ensuring that the Product Backlog is transparent, visible, and understood.",
  },
  {
    id: "93093e4b-3379-48c4-90e1-282aa61e2fde",
    chapter: 3,
    question:
      "Who ensures that all Scrum events take place and are positive, productive, and kept within the timebox?\n(Select the best answer)",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Team Leader",
      "The Most Senior Developer",
      "The Scrum Team",
      "The Solution Architect",
      "The Project Manager",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Master is accountable for ensuring that all Scrum events take place and are positive, productive, and kept within the timebox. It is the Scrum Master's role to facilitate these events and ensure that they are conducted effectively, fostering collaboration and maximizing the value derived from each event. The Scrum Master helps the Scrum Team understand the purpose of the events and guides them in following the Scrum framework to achieve the intended outcomes.",
  },
  {
    id: "ac446004-1c0d-42cd-8738-51b85b5feb8d",
    chapter: 3,
    question:
      "The Developers should have a Team Leader to improve communications and collaboration.\n(Select the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'Explanation: It\'s not allowed to introduce new roles or titles such as "team leader" in Scrum.',
  },
  {
    id: "c848a133-4bca-4eb3-97be-613e3c86dd49",
    chapter: 3,
    question: "When should the product be released?\n(choose the best answer)",
    options: [
      "When needed",
      "When the Increment is usable",
      "When the increment is free of defects",
      "At the end of each Sprint",
    ],
    correctAnswer: 0,
    explanation: "It is up to the Scrum Team to decide when to release.",
  },
  {
    id: "ed7d7814-8f33-4c20-9cec-5539ff204da9",
    chapter: 3,
    question:
      "The Product Backlog is an emergent, ordered list of what is needed to improve the product. Which one of the following answers is TRUE?\n(choose the best answer)",
    options: [
      "Provides just enough information to enable the Developers to design the product.",
      "The Product Owner is accountable for it.",
      "Contains only small and clear items.",
      "It's used to create the project plan.",
    ],
    correctAnswer: 1,
    explanation:
      "The Product Owner is accountable for the Product Backlog. The PO is responsible for its content, ordering, and ensuring that it represents the needs and desires of the stakeholders. The Product Backlog is not just a list of requirements but a dynamic artifact that evolves over time. It contains items that can be small or large, depending on the needs of the product. Its purpose is to provide transparency and visibility into the work required to improve the product, and it serves as a valuable tool for collaboration and decision-making within the Scrum Team. It is not used to create the project plan, as Scrum focuses on iterative and incremental development rather than traditional project planning approaches.",
  },
  {
    id: "26a25e55-df72-47eb-8787-d9c1568a2113",
    chapter: 3,
    question:
      "True or False: The Daily Scrum should always take precisely 15 minutes. For example, if the team managed to do it in 5 minutes, the Scrum Master has to spend ten more minutes on useful team activities. Every Daily Scrum should last 15 minutes.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Spending more time than needed would be waste, which goes against lean thinking, one of the foundations of Scrum.",
  },
  {
    id: "21543fea-6739-46c5-b4ec-bed068dbeea9",
    chapter: 3,
    question:
      "How often should the members of the Scrum Team be modified?\n(choose the best answer)",
    options: [
      "Depends on the competencies needed for the selected Product Backlog items",
      "As needed",
      "Never",
      "As needed, but considering a short-term reduction in productivity",
    ],
    correctAnswer: 3,
    explanation:
      "Scrum has no restriction as to when to change the membership of the Scrum Team. Thus, it should be done as often as needed. According to Tuckman, teamwork is developed by following four stages: forming, storming, norming, and performing. Changing the Scrum Team membership might knock them back at least one stage, reducing its synergy, at least temporarily. For this reason, it is wise to consider a short-term reduction in productivity.",
  },
  {
    id: "a9bcc865-beb2-42d6-8ac9-1f5fa4765568",
    chapter: 3,
    question:
      "Consider that you are the Scrum Master for three Scrum Teams working on the same product. At some point, a Developer says that all the Scrum Teams must have the same Sprint start date. What should you do?\n(choose the best answer)",
    options: [
      "Agree with the Developer.",
      "Disagree with the Developer and say that the Scrum Teams can figure out the best way to synchronize their work and that not necessarily the Scrum Teams must have the same Sprint start date.",
    ],
    correctAnswer: 1,
    explanation:
      "The Nexus Guide does not contain a rule saying that the Scrum Teams working on the same Product must have the same Sprint start date.",
  },
  {
    id: "c97ed57b-4276-4ad6-9df6-beed52d48acd",
    chapter: 3,
    question:
      "Consider that you are the Product Owner for a Scrum Team. Which of the following activities would you engage in during a Sprint?\n(choose the best answer)",
    options: [
      "Answer questions from the Developers about the Sprint Backlog.",
      "Lead all the Scrum Events.",
      "Manage the Sprint Backlog.",
      "Produce progress reports to update management about Sprint's work.",
    ],
    correctAnswer: 0,
    explanation:
      '"Answer questions from the Developers about the Sprint Backlog"\n- During the Sprint, the Product Owner should be available to give the Developers Just-In-Time feedback. \n\n"Lead all the Scrum Events"\n- The Product Owner does not participate in Daily Scrums and does not necessarily lead Scrum events. \n\n"Manage the Sprint Backlog"\n- The Sprint Backlog is a plan by and for the Developers. \n\n"Produce progress reports to update management about Sprint\'s work"\n- In Scrum, you don’t need progress reports because the Scrum Team’s work is made transparent through its Artifacts. For instance, if management wants to know the current Sprint’s scope, it should check the Sprint Backlog.',
  },
  {
    id: "186af13b-c7a5-4cf6-9d87-2461419e4fad",
    chapter: 3,
    question:
      "What is the role of management, external to the Scrum Team, at the Daily Scrum?\n(choose the best answer)",
    options: [
      "Management is represented by the Product Owner",
      "The Scrum Master speaks on its behalf",
      "Presents project updates to the Scrum Team at the start of each Daily Scrum",
      "Management has no role at the Daily Scrum",
    ],
    correctAnswer: 3,
    explanation:
      "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team.",
  },
  {
    id: "582e588b-882e-429b-8b23-0decb7b8d284",
    chapter: 3,
    question:
      "You are the Scrum Master for a Scrum Team. The Scrum Team's Product Owner is new to Scrum and is about to participate in her first Sprint Retrospective. Thus, she came to ask you for advice about what should be her responsibility during the Event. What should you recommend to her?\n(choose the best answer)",
    options: [
      "Capture requirements for the product to update the Product backlog",
      "She shouldn't participate, because Product Owners should not take part in Sprint Retrospective",
      "Participate as a Scrum Team member",
      "Take notes, summarize and report the discussions to the stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "During Sprint Retrospective, the whole Scrum Team inspects how the Sprint went regarding individuals, interactions, processes, tools, and their Definition of Done.",
  },
  {
    id: "8fddfdb1-ca27-43c3-a379-e8520c6d8848",
    chapter: 3,
    question:
      "During a Sprint, who is responsible for ensuring that everyone on the Scrum Team does their job?\n(choose the best answer)",
    options: [
      "The Project Manager",
      "The Product Owner",
      "The Scrum Master",
      "The Scrum Team",
      "The Developers",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Team self-manages; hence, it is responsible for deciding who does what, when, and how; for monitoring its performance.",
  },
  {
    id: "e5eddc01-03e0-4932-90c8-89281a31bb5d",
    chapter: 3,
    question:
      "Considering the context in which there are multiple Scrum Teams working on the same product, which of the following is a key concern?\n(choose the best answer)",
    options: [
      "Making sure that the Product Backlogs for each Scrum Team are consistent",
      "Meeting the projected Release Burndown chart",
      "Removing waste by making sure that each member of each team is not idle",
      "Minimizing the dependencies between the Scrum Teams",
      "Having all Product Backlog items ready",
    ],
    correctAnswer: 3,
    explanation:
      '"Making sure that the Product Backlogs for each Scrum Team are consistent"\n- False, because there is a single Product Backlog. \n\n"Meeting the projected Release Burndown chart"\n- False, because in a complex environment it is impossible to have the perfect plan. \n\n"Removing waste by making sure that each member of each team is not idle"\n- Making sure everybody is busy is not the most important aspect here. \n\n"Minimizing the dependencies between the Scrum Teams"\n- True, dependencies are a risk in any scaled initiative. For this reason, the Nexus Guide contains several aspects for minimizing dependencies or making them transparent. \n\n"Having all Product Backlog items ready"\n-False, because it is not necessary to have all the Product Backlog items ready for the Scrum Teams to pull work into the Sprint Backlogs.',
  },
  {
    id: "fc7c47bd-8827-4571-b951-f576da478151",
    chapter: 3,
    question:
      "True or False: By the end of each Sprint, at least one Increment must have been released to customers or users.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum does not mandate when to release. The Scrum Team releases whenever it thinks that it is valuable.",
  },
  {
    id: "dd83f48c-f0ba-43ed-b50e-96a6d837d5a6",
    chapter: 3,
    question:
      "True or False: One of the Product Owner’s duties is to ensure that, during Sprint Planning, the Developers select enough Product Backlog items for the given Sprint to satisfy the stakeholders.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "During Sprint Planning, through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint.",
  },
  {
    id: "746e0fab-59e4-4165-b4e2-1b84ca5f5bf0",
    chapter: 3,
    question:
      "You are the Scrum Master for a Scrum Team and the Developers complained to you because they do not fully understand a Product Backlog item and are not being able to deliver an Increment. What should you advise them to do?\n(choose the best answer)",
    options: [
      "Look for a specialist to be added to the Scrum Team",
      "Leave the work for a later Sprint",
      "Complete whatever they can and discuss the remaining work at the Sprint Review",
      "Discuss with the Product Owner to clarify what needs to be delivered",
    ],
    correctAnswer: 3,
    explanation:
      "During the Sprint, scope may be clarified and renegotiated with the Product Owner as more is learned. For this purpose, the Product Owner should be available to collaborate with the Developers whenever necessary.",
  },
  {
    id: "acfce8c6-826a-483b-abe2-e38bf5773f4b",
    chapter: 3,
    question:
      "Who determines how many Product Backlog items the developers select for a Sprint?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Scrum Team",
      "The Developers",
      "The Product Owner",
    ],
    correctAnswer: 2,
    explanation:
      "The people that will do the work select the work. This is self-management.",
  },
  {
    id: "c18ef0d2-5799-4a7a-9e1b-2099090331be",
    chapter: 3,
    question:
      "Which of the following is a valid situation for the Developers to cancel a Sprint?\n(choose the best answer)",
    options: [
      "They cannot. Only the Product Owner has the authority to cancel Sprints",
      "When the Product Owners is unavailable",
      "When the Sprint's scope is not clear",
      "When the Sprint Goal becomes obsolete",
      "When they have technical impediments",
    ],
    correctAnswer: 0,
    explanation:
      "Only the Product Owner has the authority to cancel the Sprint.",
  },
  {
    id: "19e6ccc0-9a81-4e68-84b2-99535a2a598c",
    chapter: 3,
    question:
      "As the Scrum Team learns more about the problem at hand, the Definition of Done might change. When is the best moment for a Scrum Team to change it?\n(choose the best answer)",
    options: [
      "Before starting a new Sprint",
      "During a Sprint Review",
      "During a Sprint Retrospective",
      "During a Sprint Planning",
    ],
    correctAnswer: 2,
    explanation:
      "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team inspects how the last Sprint went regarding individuals, interactions, processes, tools, and their Definition of Done.",
  },
  {
    id: "a7ff5db7-66c2-464c-bff8-b45d460ed236",
    chapter: 3,
    question:
      "In Scrum, how much time is allowed after a Sprint to prepare for the next Sprint?\n(choose the best answer)",
    options: [
      "At most one week.",
      "Enough time for having the Product Backlog ready",
      "Enough time for the Developers to resolve any technical debt",
      "None. A new Sprint starts immediately after the conclusion of the previous Sprint",
      "All of the above are allowed depending on the situation",
    ],
    correctAnswer: 3,
    explanation:
      "A new Sprint starts immediately after the conclusion of the previous Sprint.",
  },
  {
    id: "c15f725d-ba89-4030-bdfa-0dc3d9bcdf53",
    chapter: 3,
    question: "True or False: Scrum has a role called “Product Manager”",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum accountabilities are Product Owner, Scrum Master, and Developers.",
  },
  {
    id: "c2acbbeb-bcc8-4e75-a48d-c9aed7461fcd",
    chapter: 3,
    question: "Who creates the Definition of Done?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Scrum Master",
      "The Product Owner",
      "The Developers",
    ],
    correctAnswer: 0,
    explanation:
      "If the Definition of Done is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product.",
  },
  {
    id: "d591fa67-c01d-4724-b45e-adec5afaf888",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team and noticed that they are not trusted by management. Which Scrum value is affected by such a lack of trust in the Scrum Team?\n(choose the best answer)",
    options: [
      "Focus",
      "Respect",
      "Openness",
      "Courage",
      "Commitment",
      "All of the above",
    ],
    correctAnswer: 1,
    explanation:
      "If people external to the Scrum Team don't trust them, it implies that they may not fully respect each of the Scrum Team's capabilities, reliability, or intentions.",
  },
  {
    id: "fe208ea8-ea7e-4018-841e-f098bdb77217",
    chapter: 3,
    question:
      "When is a Product backlog item considered complete?\n(choose the best answer)",
    options: [
      "Wherever the Sprint is over",
      "Whenever it has been approved by the product sponsor",
      "Whenever it passes all acceptance criteria",
      "Whenever it meets the Definition of Done",
    ],
    correctAnswer: 3,
    explanation:
      "A Product Backlog item is an idea. It is considered complete whenever it turns into value, in other words, whenever it becomes an Increment, which means that it can be presented at the Sprint Review or release. A Product Backlog item becomes an Increment whenever it meets the Definition of Done.",
  },
  {
    id: "d8dad0b1-c464-4b1e-96ac-d02a574fcaf7",
    chapter: 3,
    question: "Who owns the Sprint Backlog?\n(choose the best answer)",
    options: [
      "The Product Owner.",
      "The Scrum Master",
      "The Scrum Team",
      "The Developers",
    ],
    correctAnswer: 3,
    explanation: "The Sprint Backlog is a plan by and for the Developers.",
  },
  {
    id: "0dffffa5-4472-4300-bebc-986911d5a4e8",
    chapter: 3,
    question:
      "Which of the following is true about the Developers?\n(choose the best answer)",
    options: [
      "Make sure that the Product Backlog items conform to the Definition of Done",
      "Order the Product Backlog",
      "Lead, train, and coach the organization in its Scrum adoption",
      "Have the authority to cancel the Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint and instill quality by adhering to the Definition of Done defined by the Scrum Team.",
  },
  {
    id: "c5445024-6999-45bb-b457-5994d2524de1",
    chapter: 3,
    question: "When is a Sprint over?\n(choose the best answer)",
    options: [
      "Whenever the stakeholders decides that is done",
      "Whenever all the selected Product Backlog items meet the Definition of Done",
      "On the last Friday of the month",
      "Whenever the timebox expires",
    ],
    correctAnswer: 3,
    explanation:
      "A Sprint is timeboxed and is over whenever its timebox expires.",
  },
  {
    id: "7802bcb6-15fc-416f-b5b6-23c9e369a28a",
    chapter: 3,
    question:
      "When must the Sprint Retrospective be held:\n(choose the best answer)",
    options: [
      "At the end of the last Sprint in a release",
      "At the beginning of each Sprint, right before Sprint Planning",
      "Whenever there are enough issues that need to be discussed by the Scrum Team",
      "At the end of each Sprint",
    ],
    correctAnswer: 3,
    explanation: "The Sprint Retrospective concludes the Sprint.",
  },
  {
    id: "297ea12f-d37b-4f84-8523-e695e9a06ceb",
    chapter: 3,
    question:
      "What is the timebox for the Sprint Review of a one-month Sprint?\n(choose the best answer)",
    options: ["2 hours", "1 day", "4 hours", "As long as needed"],
    correctAnswer: 2,
    explanation:
      "The Sprint Review is the second to last event of the Sprint and is timeboxed to a maximum of four hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "d5a569f7-5d62-45f2-b4de-48758ebfc0e1",
    chapter: 3,
    question:
      "Who should be the first person to talk on Daily Scrum?\n(choose the best answer)",
    options: [
      "The person who has the token",
      "The Scrum Master",
      "The Product Owner",
      "The most Senior Developer",
      "Whoever the Developers decide",
    ],
    correctAnswer: 4,
    explanation:
      "The Developers can select whatever structure and techniques they want for the Daily Scrums, as long as they are focused on progress toward the Sprint Goal and produce an actionable plan for the next day of work. This creates focus and improves self-management.",
  },
  {
    id: "aa0cdfb4-d816-466f-ae0b-bd83bdc8a02f",
    chapter: 3,
    question:
      "Which of the following is a valid result of the Scrum Team at the end of a Sprint?\n(choose the best answer)",
    options: [
      "An Increment that meets the Definition of Done",
      "An Increment with minor known defects",
      "A workable product, only partially missing verification activities which can be performed next Sprint",
      "A report if that is what it was asked for",
    ],
    correctAnswer: 0,
    explanation:
      "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint. The resulting work must meet the Definition of Done, otherwise, by definition, it is not an Increment.",
  },
  {
    id: "0c2bf12c-74fb-43dc-aea8-be030856d9a6",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team and the Product Owner asked you for advice about estimating the size of the Product Backlog items. What should you tell her?\n(choose the best answer)",
    options: [
      "The Product Owner estimates the size of the Product Backlog items and then reviewed by the Developers",
      "For small Product Backlog items, the measurement unit to be used is story points. For large ones, t-shirt sizes should be used.",
      "The Developers who will be doing the work are responsible for the sizing.",
      'Scrum follows the "No Estimates" movement; thus, no estimates should be defined.',
      "Estimates must be given using a relative measurement unit",
    ],
    correctAnswer: 2,
    explanation:
      "In Scrum, the Developers who will be doing the work are responsible for the sizing of the Product Backlog items.",
  },
  {
    id: "f82c7453-3cc1-4acb-8a97-4f40527fd849",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team. Which of the following is your responsibility?\n(choose the best answer)",
    options: [
      "Conducting process conformance checks to make sure that the Scrum Team is following the Scrum Guide, regardless of the context.",
      "Deciding which of the Developers should be promoted.",
      "Removing all the impediments.",
      "Taking notes during Scrum Events.",
      "Properly adopting and using the Scrum framework.",
    ],
    correctAnswer: 4,
    explanation:
      "As the Scrum Master, your responsibility is to ensure that the Scrum framework is properly understood, implemented, and followed by the Scrum Team. This includes facilitating Scrum events, coaching the team on Scrum practices, and promoting a collaborative and self-organizing environment. While you may identify and help remove impediments, it is not solely your responsibility to remove all impediments. Decisions related to promotions are typically the responsibility of management and not the Scrum Master. Although taking notes during Scrum events can be helpful for tracking discussions, it is not a primary responsibility of the Scrum Master.",
  },
  {
    id: "5117aab9-4420-49ca-bcf6-cf7b4d370679",
    chapter: 3,
    question:
      "When there are multiple Scrum Teams working on the same product, should all of their increments be integrated every Sprint?\n(choose the best answer)",
    options: [
      "Yes, the Increment is done only when integrated, valuable, and usable",
      "Yes, but only for Scrum Teams who had the dependencies previously identified",
      "No, each Scrum Team only needs to worry about the part of the product that it has changed",
      "Not necessarily, because they can work on the integration on integration or hardening Sprints",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Nexus Guide, the Increment is done only when integrated, valuable, and usable.",
  },
  {
    id: "acc8d19d-9342-49cc-a85c-205a77c0c35d",
    chapter: 3,
    question:
      "Which of the following approaches is preferable for Scrum Teams to develop valuable Increments?\n(choose the best answer)",
    options: [
      "Each Scrum Team is responsible for a set of components",
      "Each Scrum Team works on the components that they have the most expertise",
      "Each Scrum Team develops a complete functionality",
    ],
    correctAnswer: 2,
    explanation:
      "One of the major concerns with Scaled Scrum is managing dependencies. By having the Scrum Teams developing complete functionalities, such dependencies are reduced. However, notice that this does not discard having Scrum Teams that focus on specific components, making them easier to be used by other Scrum Teams.",
  },
  {
    id: "ad0309df-4263-43c1-9646-9641f299ee66",
    chapter: 3,
    question:
      "In the scenario of having multiple Scrum Teams working on a single product, what best describes the Definition of Done?\n(choose the best answer)",
    options: [
      "They must mutually define and comply with the same Definition of Done",
      "Each Scrum Team defines and meets its own. Any potential technical debt is reconciled during hardening Sprints",
      "Each Scrum team uses its own, but they are transparent so that each team is aware of the differences",
      "A common Definition of Done is defined by the Scrum Team's Scrum Masters",
    ],
    correctAnswer: 0,
    explanation:
      "All Scrum Teams must define and adhere to a common Definition of Done. Individual Scrum Teams self-manage to achieve this state. They may choose to apply a more stringent Definition of Done within their own teams, but cannot apply less rigorous criteria than agreed for the Integrated Increment.",
  },
  {
    id: "457667ca-7110-4195-a0b9-a29cc66bec92",
    chapter: 3,
    question:
      "Which topics should be discussed in the Sprint Review?\n(choose the best answer)",
    options: [
      "The Definition of Done",
      "How the last Sprint went with regards to processes and tools",
      "The outcome of the Sprint and future adaptations",
      "All of the above",
    ],
    correctAnswer: 2,
    explanation:
      "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.",
  },
  {
    id: "6cdafa9c-a046-442b-91cd-b5a7e28b9588",
    chapter: 3,
    question:
      "Which of the following phrases best describes the Product Owner?\n(choose the best answer)",
    options: [
      "The bridge between Developers and the customers",
      "Value Optimizer",
      "Team Boss",
      "Requirements Engineer",
    ],
    correctAnswer: 1,
    explanation:
      "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required.",
  },
  {
    id: "de1d11d4-2a7c-45d3-aae6-edbcb365604b",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team. Which of the following is an appropriate service that you could provide the Developers for the Daily Scrum?\n(choose the best answer)",
    options: [
      "Manage turns",
      "Make sure that each Developer answers the 3 questions with enough details",
      "Update the Developers regarding management expectations",
      "Teach the Developers to finish the Daily Scrum within the 15 minutes timebox",
      "Update the Scrum Board",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. The Scrum Master ensures that the Daily Scrum takes place and is positive, productive, and kept within the timebox by teaching the Develop its intent.",
  },
  {
    id: "8ca67258-d70c-4fc7-8f07-863bb434bd70",
    chapter: 3,
    question:
      "Which of the following is an expected characteristic of a Scrum Team?\n(choose the best answer)",
    options: [
      "The members have all the skills necessary to create value each Sprint.",
      "Is composed of at least one representative from each of the organization's major departments, which might include Product Design, Product Development, and Quality Assurance.",
      "Contains between 3 and 9 members.",
    ],
    correctAnswer: 0,
    explanation:
      "Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how. The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people.",
  },
  {
    id: "4f159c7b-e590-4600-b4f6-a7d2de6aa389",
    chapter: 3,
    question:
      "You are the Scrum Master working with a Scrum Team that has Developers that are not collocated. Thus, the Developers have much to do logistically such as reserving meeting rooms or setting up conference calls for the Daily Scrum. What action should you do?\n(choose the best answer)",
    options: [
      "Allow the Developers to self-manage and deal with the issue",
      "To avoid overloading one Developer with such a responsibility, ask them to alternate who is responsible for setting up the Daily Scrum",
      "To avoid having the Developers waste time with such tasks, get it done form them",
      "Raise the issue to management",
    ],
    correctAnswer: 0,
    explanation:
      "The Developers are self-managed and have the authority to make decisions. As a Scrum Master, letting them make decisions is a way of enabling them to improve as a team. The Scrum Master manages the process and impediments that exceed the team's ability of self-organization.",
  },
  {
    id: "b262d6af-7138-4621-84e0-b8ffeb842804",
    chapter: 3,
    question:
      "When must the Product Owner participate at the Daily Scrum?\n(choose the best answer)",
    options: [
      "When there are business updates that the Developers must be aware of",
      "When she is invited by the Scrum Master",
      "When the Developers need to clarify the scope",
      "When the Product Owner is actively working on items in the Sprint Backlog, he/she participates as a Developer",
    ],
    correctAnswer: 3,
    explanation:
      "The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work. The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.",
  },
  {
    id: "926ff88e-cb29-4771-bf47-d7e3c6c12560",
    chapter: 3,
    question:
      "The Sprint Backlog is updated throughout the Sprint as more is learned. However, when should it be updated?\n(choose the best answer)",
    options: [
      "Whenever the Product Owner identifies new work to be added to the Sprint Backlog",
      "Whenever the Scrum Master is available to update the artifacts",
      "As soon as possible, after the update is identified",
      "During Daily Scrums",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Backlog is a plan by and for the Developers. A Scrum Team is expected to adapt the Sprint Backlog or anything else the moment it learns anything new through inspection.",
  },
  {
    id: "0e45986b-04a4-41a8-af9d-25feda104fe5",
    chapter: 3,
    question:
      "You are the Scrum Master of a new, to be developed Product. You know that the development is going to require 30 people. Which of the following is a good first question for you to suggest whenever it comes the time to form the teams?\n(choose the best answer)",
    options: [
      "Who are going to be the team leaders?",
      "How will we make sure all teams have the right amount of expertise?",
      "For each technology, who are the experts on each team?",
      "What is the right mixture of senior and junior people on each team?",
    ],
    correctAnswer: 1,
    explanation:
      "When forming the Scrum Teams, a requirement is that they are cross-functional and self-managed. From the above options, only option b focuses on the team these requirements.",
  },
  {
    id: "32211013-39f4-4cdb-a1af-c859338dd81b",
    chapter: 3,
    question:
      "Which statement best describes the Sprint Backlog resulting from the Sprint Planning?\n(choose the best answer)",
    options: [
      "Contains tasks lasting at most one day",
      "It contains Product Backlog items selected by the Product Owner",
      "It contains all the work to be delivered during the Sprint",
      "It is the Scrum Team's plan for the Sprint",
      "Every task has a designated owner",
    ],
    correctAnswer: 3,
    explanation:
      "The output of the Sprint Planning is the first version of the Sprint Backlog, created by the collaborative work of the entire Scrum Team.",
  },
  {
    id: "f6c56de4-384f-4e64-8859-4b07750851b4",
    chapter: 3,
    question:
      "During the Sprint Retrospective, the Scrum Team members identify the most helpful changes to improve their effectiveness. Where are the most impactful improvements registered?\n(choose the best answer)",
    options: [
      "Next Sprint Backlog",
      "Issue Tracker",
      "Product Backlog",
      "Process Improvement Backlog",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Backlog is the single source of work undertaken by the Scrum Team. Thus, given that any impactful improvements might require work from the Scrum Team, it must be stored on the Product Backlog.",
  },
  {
    id: "c0eceb84-2053-4e1f-9e39-dc9e00bcdbad",
    chapter: 3,
    question:
      "When should the Product Owner cancel a Sprint?\n(choose the best answer)",
    options: [
      "When the Developers determine that the Product Goal is unattainable",
      "When the Sprint Goal becomes obsolete",
      "When the CEO has a new business opportunity",
      "When it becomes clear that not all the Sprint Backlog can be Done by the end of the Sprint",
    ],
    correctAnswer: 1,
    explanation:
      "A Sprint could be canceled if the Sprint Goal becomes obsolete.",
  },
  {
    id: "16e5fac6-f69c-4046-abec-5acd3103f707",
    chapter: 3,
    question:
      "True or False: When there is a lot more work to do than was estimated for one item in the Sprint Backlog, and the item can not be finished by the end of the Sprint, the Sprint is canceled.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "A Sprint could be canceled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint. If some work could not be done, the Sprint Backlog should be re-negotiated with the Product Owner.",
  },
  {
    id: "37ebea45-3547-4fc6-a204-9e0239cd71bc",
    chapter: 3,
    question:
      "During Sprint Planning, the Developers select Product Backlog items for the Sprint. When does a single Developer become accountable for the value of a selected Product Backlog item?\n(choose the best answer)",
    options: [
      "Whenever he/she is able to pull more work",
      "During the Daily Scrum",
      "During Sprint Planning",
      "Never. The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",
  },
  {
    id: "b249f62f-9f77-48f0-8aed-294d0de9597c",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team. During Sprint Planning, the Developers were about to select the Product Backlog items for the Sprint, when a Developer asked you how much work was required of the Developers to complete for each of the Product Backlog items. How should you answer her?\n(choose the best answer)",
    options: [
      "It should be executable and have at least 80% of code coverage",
      "As much as it is required to meet the Scrum Team's Definition of Done",
      "Whatever you can do during the Sprint; the work left can be done in the interval between the current and the next Sprint, as long as it doesn't last more than 2 days of work",
      "A prototype is fine",
    ],
    correctAnswer: 1,
    explanation:
      "Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint. They do this by transforming ideas (Product Backlog items) into value (Increments). An Increment is only born when a Product Backlog item meets the Scrum Team’s Definition of Done.",
  },
  {
    id: "7d93fef0-d7a6-431a-bf93-9a4cd47e660b",
    chapter: 3,
    question: "When must an Increment be released?\n(choose the best answer)",
    options: [
      "Whenever the Scrum Team judges that a release is valuable",
      "Whenever it is created",
      "Whenever there are no identified defects",
      "At the end of each Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "Scrum doesn’t prescribe when to release. It is up to the Scrum Team to decide.",
  },
  {
    id: "9684ab42-4969-4b9e-afbe-8e4b27668a53",
    chapter: 3,
    question:
      "A Developer is having continuing conflicts with the other members of the Scrum Team, which is impacting its effectiveness. If necessary, who is responsible for removing the Developer from the Scrum Team?\n(choose the best answer)",
    options: [
      "The Human Resources department, because they hired the Developer.",
      "The Product Owner is responsible since she must maximize the value delivered by the Scrum Team",
      "The Scrum Team",
      "The Scrum Master is responsible since she removes impediments",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Team self-manages, hence, it is responsible for solving its issues. The Scrum Master can coach the team on how to go about removing the Developer. However, if the Scrum Team is not able to solve the issue as a team, the Scrum Master needs to step in and make the call.",
  },
  {
    id: "c9ccf2b1-0786-4db6-86dc-57cf59aa83e1",
    chapter: 3,
    question:
      "True or False: An indicator of having a high-performing Scrum Team is that each Increment is completed by running a release Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation: "There is no such thing as a “release Sprint”.",
  },
  {
    id: "bf7248f5-244c-4cad-9418-a9d59c702c7b",
    chapter: 3,
    question:
      "Who is responsible to inspect progress toward the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Developers",
      "The Scrum Master",
      "The Project Manager",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Goal is part of the Sprint Backlog, which is a plan by and for the Developers. Further, one of the purposes of the Daily Scrum, which is an event for the Developers, is to inspect progress toward the Sprint Goal.",
  },
  {
    id: "e3585088-b2a9-40c3-9c6e-9c5529084b5b",
    chapter: 3,
    question:
      "What is the role of management in Scrum?\n(choose the best answer)",
    options: [
      "To support the Scrum Team and give them resources that help them to be more efficient",
      "Make sure that each Developer is busy",
      "Monitor the Developers' productivity",
      "Make sure that each Developer maintains an acceptable level of efficiency (productivity) and efficacy (quality of the work delivered)",
    ],
    correctAnswer: 0,
    explanation:
      "Management supports bottom-up intelligence by providing the Scrum Team with insights and resources to support them to be more efficient.",
  },
  {
    id: "b24d8083-e59a-48c0-b2c1-c314df9f363d",
    chapter: 3,
    question:
      "Who decides the order of the Product Backlog?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Developers",
      "The Project Manager",
      "The Scrum Master",
      "The Product Owner",
    ],
    correctAnswer: 4,
    explanation:
      "A Product Owner orders the work for a complex problem into a Product Backlog",
  },
  {
    id: "32a19999-d82e-4c0a-bfe7-39090745d44a",
    chapter: 3,
    question:
      "Which best describes the Product Backlog?\n(choose the best answer)",
    options: [
      "It is a detailed list with all the work to be done by the Scrum Team",
      "It is baselined and subject to change control",
      "It is emergent",
    ],
    correctAnswer: 2,
    explanation:
      "It is expected that the Product Backlog changes as more is learned about the product and the market environment which includes users and customers.",
  },
  {
    id: "19698cca-3e99-42bf-832d-cc41e701c59e",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team. For a given Sprint, at some point, the Developers realize they have selected too much work to finish in the Sprint and come ask you for advice. What should you tell them?\n(choose the best answer)",
    options: [
      "Simplify the Definition of Done to ensure that all the planned Product Backlog items are delivered by the end of the Sprint",
      "Talk to other Scrum Teams and negotiate with them to send them the excess work",
      "To the best that they can and discuss the issue during the Sprint Retrospective",
      "As soon as possible, discuss with the Product Owner to remove some work, which might include complete Product Backlog items or part of them",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint’s scope is allowed to change as long as it is discussed by the Developers and the Product Owner and it doesn’t hinder the Sprint Goal. Further, a Scrum Team is expected to adapt the moment it learns anything new through inspection.",
  },
  {
    id: "c5f86535-0c23-4f19-a1bc-4a8821bac742",
    chapter: 3,
    question:
      "What happens to undone work at the end of the Sprint?\n(choose the best answer)",
    options: [
      "The Scrum Team has 2 days to get done with whatever is left.",
      "The Sprint length keeps as is and the Scrum Team uses the opportunity to learn and adapts",
      "The Sprint is extended and the issue is discussed in the Sprint Retrospective",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, a Sprint is only over when its timebox elapses. The only exception is if it gets canceled by the Product Owner (however, the Sprint wouldn’t be, technically, “over”, but “canceled”)",
  },
  {
    id: "0c9e59ea-b785-4f28-a999-36d4f157a8e4",
    chapter: 3,
    question:
      "Which of the following provides the Scrum Team with a target and overarching direction for the Sprint?\n(choose the best answer)",
    options: [
      "The Product Goal",
      "The Sprint Backlog",
      "The Sprint Goal",
      "The Release Plan",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Goal is the “why”; it is the single objective for the Sprint.",
  },
  {
    id: "f30e8487-8a88-4227-ac51-7704658cf296",
    chapter: 3,
    question:
      "Which of the following statements best describes Scrum?\n(choose the best answer)",
    options: [
      "A predictive process that conforms to the principles of Extreme Management",
      "A complete methodology for delivering products within a complex environment",
      "A framework that helps people, teams and organizations generate value through adaptive solutions for complex problems",
      "A cookbook that defines best practices for delivering products within a complex environment",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
  },
  {
    id: "825c4c6a-f3b3-4b0c-b6fd-7b488d449160",
    chapter: 3,
    question:
      "Why is the Sprint Goal useful for the Developers?\n(choose the best answer)",
    options: [
      "It sets a target for Sprint 0",
      "They are not as valuable as the Product Goal",
      "Gives them the drive they need to get done with all the Product Backlog items selected for the Sprint",
      "It gives them a shared and specific target",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Goal brings coherence and focus, encouraging the Scrum Team to work together rather than on separate initiatives.",
  },
  {
    id: "cfa9e0f4-e9d0-4820-950c-8c3a201fcebb",
    chapter: 3,
    question: "When should a Sprint Goal be created?\n(choose the best answer)",
    options: [
      "Having a Sprint Goal is not mandatory in Scrum",
      "It should have been created in the previous Sprint during Product backlog refinement",
      "During Sprint Planning",
      "It must be established before sprint planning in order to begin planning",
      "At any time during the Sprint",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Goal is created during the Sprint Planning event. It serves as a single objective that the Scrum Team works towards during the Sprint. The Sprint Goal provides focus and direction to the team, guiding their decisions and actions throughout the Sprint. It helps the team align their efforts and prioritize the Product Backlog items that contribute to achieving the goal.",
  },
  {
    id: "aba0d081-4ca6-4ddc-b4cd-ecd1a80ae91f",
    chapter: 3,
    question:
      "You are the Scrum Master of a Scrum Team that is about to start working. One of the things that you need to define the Sprints' length. Which of the following is a factor that should be considered for this purpose?\n(choose the best answer)",
    options: [
      "The release schedule of the organization",
      "The same length as all the other Scrum Teams in the organization",
      "The availability of the Scrum Team members",
      "The need for feedback to learn based on doing work and measuring results",
    ],
    correctAnswer: 3,
    explanation:
      "In Scrum, risk is minimized by having at most one month Sprints. The larger the uncertainty, the more the Scrum Team needs feedback on shorter cycles; hence, shorter Sprints. Another factor that might be useful is synchronizing the development cycle with other business events.",
  },
  {
    id: "0be277f1-bdc5-4720-96dd-586d2fe04ca4",
    chapter: 3,
    question:
      "If burn-down charts are used to visualize progress, what do they track?\n(choose the best answer)",
    options: [
      "Work remaining across time",
      "The productivity of each Scrum Team member",
      "How risk changes throughout time",
      "The accumulated value delivered",
    ],
    correctAnswer: 0,
    explanation:
      "Burn-down chart is a chart that shows the amount of work that is thought to remain in a backlog. Time is shown on the horizontal axis and work remaining on the vertical axis. As time progresses and items are drawn from the backlog and completed, a plotline showing work remaining may be expected to fall. The amount of work may be assessed in any of several ways such as user story points or task hours. Work remaining in Sprint Backlogs and Product Backlogs may be communicated by means of a burn-down chart.",
  },
  {
    id: "abe557fb-179e-4ec4-b047-b984bd7aa742",
    chapter: 3,
    question:
      "Which of the following is an indicator that a Scrum Team is cross-functional?\n(choose the best answer)",
    options: [
      "The Scrum Team has all the skills necessary to create value each Sprint",
      "Each member of the Scrum Team is T-shaped",
      "The Scrum Team members are good friends",
      "Each member of the Scrum Team has all the skills necessary to create value each Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value for each Sprint. Not necessarily, all team members must possess all the skills required for the Scrum Team.",
  },
  {
    id: "e8c458e3-2f20-4edb-8468-3bda0e8c601b",
    chapter: 3,
    question:
      "When is the most suitable time for the Scrum Team to review and adapt the Definition of Done?\n(choose the best answer)",
    options: [
      "During the Product Backlog Refinement",
      "During the Daily Scrum",
      "During the Scrum Master's meeting",
      "Sprint Retrospective",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Team is allowed to interact with stakeholders anytime it will help them deliver value. Scrum promotes transparency and collaboration, and stakeholders play a crucial role in providing feedback, clarifying requirements, and aligning the product with organizational goals. Interactions can occur throughout the Sprint, not limited to specific events.",
  },
  {
    id: "344406a7-a5b4-45e0-9bd6-fca5aee2947a",
    chapter: 3,
    question:
      "When should the Product Owner collaborate with stakeholders to gather feedback and refine the Product Backlog?",
    options: [
      "Sprint Retrospective",
      "Sprint Review",
      "Daily Scrum",
      "Sprint Planning",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Team is allowed to interact with stakeholders anytime it will help them deliver value. Scrum promotes transparency and collaboration, and stakeholders play a crucial role in providing feedback, clarifying requirements, and aligning the product with organizational goals. Interactions can occur throughout the Sprint, not limited to specific events.",
  },
  {
    id: "59826aa7-9787-41d4-b104-19b4ad74235a",
    chapter: 3,
    question:
      "Which of the following elements are not mandatory in Scrum?\n(choose the best two answers)",
    options: [
      "Daily Stand-up Meetings",
      "User Stories",
      "Sprint Goal",
      "Sprint Review",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      'While Scrum does prescribe a daily event for the Developers to plan work for the next 24 hours, known as the Daily Scrum, the term "stand-up" is not mandatory, and the format of this event can be tailored to meet the team\'s needs. User Stories are a popular way to express Product Backlog items, but they are not a mandatory part of Scrum. Scrum does not dictate any specific format for Product Backlog items; the nature and detail of these items can vary based on what the team finds most useful. In contrast, the Sprint Goal and the Sprint Review are mandatory elements in Scrum. The Sprint Goal provides direction to the Developers during a Sprint, and the Sprint Review is an event at the end of the Sprint for inspecting the outcome and adapting the Product Backlog if needed.',
  },
  {
    id: "fbfd1998-b5d2-4ede-b363-5041a346300c",
    chapter: 3,
    question: "Which are the five Scrum values?\n(choose the best answer)",
    options: [
      "Courage, Focus, Commitment, Respect & Openness",
      "Speed, Independence, Perfection, Predictability, Isolation",
      "Hierarchy, Rigidity, Inflexibility, Uncertainty, Isolation",
      "Inspection, Adaption, Transparency, Lean Thinking & Agility",
    ],
    correctAnswer: 0,
    explanation:
      "The 5 Scrum Values are Courage, Focus, Commitment, Respect, and Openness. These values are essential for the Scrum Team to uphold in order to foster a collaborative and effective working environment. Courage enables the team to take risks and address challenges. Focus ensures that the team works towards the Sprint Goal. Commitment emphasizes the dedication of the team to achieve the goals. Respect promotes a culture of mutual respect and appreciation. Openness encourages transparency and effective communication among team members.",
  },
  {
    id: "76ad2759-42ff-4840-8a11-c520d506f399",
    chapter: 3,
    question:
      "When should a new Increment be available in Scrum?\n(choose the best answer)",
    options: [
      "After each Daily Scrum",
      "At least, once per Sprint, before the Sprint Review",
      "When the team feels like it",
      "Only when the Product Owner approves",
      "Once a month during the Sprint Planning",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum requires a new Increment to be available at least once per Sprint, before the Sprint Review. This Increment must be in a usable condition regardless of whether the Scrum Team decides to release it.",
  },
  {
    id: "b87a8084-fbbc-4be7-be50-5154e7c00096",
    chapter: 3,
    question:
      "Who is responsible for setting and maintaining the Definition of Done?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Scrum Team",
      "The Stakeholders",
      "The Developers",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Team, which includes the Product Owner, Scrum Master, and Developers, is collectively responsible for setting and maintaining the Definition of Done. It is a collaborative effort to define the criteria that must be met for a Product Backlog item to be considered complete. The Scrum Team ensures that the Definition of Done is adhered to throughout the development process to maintain a consistent standard of quality for the product increment.",
  },
  {
    id: "21c20633-203f-421a-b1ee-bd6e5c7079be",
    chapter: 3,
    question:
      "During a Sprint, when should the Developers replan the remaining work?\n(choose the best answer)",
    options: [
      "Never, as the plan should remain fixed",
      "Every day",
      "Whenever the Product Owner requests",
      "Only during the Sprint Review",
    ],
    correctAnswer: 1,
    explanation:
      "During a Sprint, the Developers should replan the remaining work every day during the Daily Scrum. The purpose of the Daily Scrum is to enable the Developers to plan their work for the next 24 hours and adapt their plan based on progress, changes, and emerging information. By inspecting their progress daily, the Developers can adapt their plan to optimize their chances of meeting the Sprint Goal. This frequent replanning ensures that the team stays on track and can adjust their approach as needed throughout the Sprint.",
  },
  {
    id: "d57cf590-45d6-42b9-8868-80e2739e0174",
    chapter: 3,
    question:
      "You are the Scrum Master of 5 Scrum Teams working on a single product. A few Developers ask you who is responsible for defining the Definition of Done. What should you tell them?\n(choose the best answer)",
    options: [
      "Each Scrum Team independently create their own Definition of Done.",
      "The Scrum Master creates the Definition of Done.",
      "The Scrum Team is responsible for creating a shared Definition of Done. However, each Scrum Team may choose to apply a more stringent Definition of Done within their\nown teams.",
      "Tell them to ask the Product Owner.",
    ],
    correctAnswer: 2,
    explanation:
      "As the Scrum Master, you should explain to the Developers that it is the responsibility of the Scrum Team as a whole to define a shared Definition of Done. This shared Definition of Done ensures a consistent standard of quality for the product increment. However, it is also acceptable for each Scrum Team to choose to apply additional criteria or a more stringent Definition of Done specific to their team's context, as long as the shared Definition of Done is met.",
  },
  {
    id: "ff804212-0219-4161-911e-003e255cc8b4",
    chapter: 3,
    question:
      "Which accountability in Scrum is responsible for updating the Sprint Backlog during the Sprint?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Developers",
      "The Scrum Team",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for updating the Sprint Backlog during the Sprint. They collaborate to determine how the work is progressing and adjust the Sprint Backlog as needed. This ensures that the team has a clear understanding of the remaining work and can adapt their plan to achieve the Sprint Goal.",
  },
  {
    id: "c0f5b58e-50c5-4370-9306-31907ed0fbe0",
    chapter: 3,
    question:
      "True or False: Time can be allocated between Sprints for integration?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, a new Sprint starts immediately after the conclusion of the previous Sprint. Thus, integration must be performed during Sprints.",
  },
  {
    id: "d0d096de-09d4-4ed0-9550-7c4293b4ecb2",
    chapter: 3,
    question:
      "You are the Scrum Master of a newly formed Scrum Team. The Product Owner asks you how she should assess uncompleted work at the end of the Sprint. What should you tell her?\n(choose the best answer)",
    options: [
      "Ask the Developers.",
      "Tell the Developers to create a progress report",
      "Check if the tasks of the Sprint Backlog are completed",
      "Use the Definition of Done as a reference",
    ],
    correctAnswer: 3,
    explanation:
      "As the Scrum Master, you should inform the Product Owner to use the Definition of Done as a reference for assessing uncompleted work at the end of the Sprint. The Definition of Done outlines the criteria that must be met for a Product Backlog item to be considered complete. Any incomplete work does not meet the Definition of Done, indicating that it is not yet in a releasable state. By using the Definition of Done as a reference, the Product Owner can evaluate the level of completeness and quality of the work done during the Sprint.",
  },
  {
    id: "ea612926-9d47-46c9-a7b5-330c383b607e",
    chapter: 3,
    question:
      "Which of the following is true about what happens during a Sprint?\n(choose all that apply)",
    options: [
      "No changes are made that would endanger the Sprint Goal.",
      "The Sprint Goal is dynamic and evolves as more is learned.",
      "Quality does not decrease.",
      "The Product Backlog is refined as needed.",
      "Scope may be clarified and renegotiated with the Product Owner as more is learned.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3, 4],
    isMultiSelect: true,
    explanation:
      "During a Sprint, no changes are made that would endanger the Sprint Goal. The Sprint Goal serves as a guiding objective that remains stable throughout the Sprint. Quality should not decrease during the Sprint, and the Scrum Team continuously strives to maintain high standards. The Product Backlog is refined as needed to ensure it is ready for future Sprints. Additionally, scope clarification and renegotiation with the Product Owner can occur based on new learnings and insights gained during the Sprint.",
  },
  {
    id: "8d415dc9-6976-413e-bff2-44bee547b312",
    chapter: 3,
    question:
      "Why is it recommended to have only one Product Owner per product?\n(choose the best answer)",
    options: [
      "Each Scrum Team requires its own Product Owner, especially when multiple teams are working on the same product.",
      "It helps ensure clear accountability, unified decision-making, and streamlined communication, resulting in better focus, prioritization, and alignment with stakeholder needs.",
      "One person can efficiently handle all the work, regardless of the product's size.",
      "It simplifies the management of the Scrum Team when there is a single Product Owner.",
    ],
    correctAnswer: 1,
    explanation:
      "Having only one Product Owner per product helps avoid conflicts and ambiguity by establishing a single point of accountability for product-related decisions. This promotes effective decision-making, maintains consistency in prioritization, and facilitates efficient communication within the Scrum Team and with stakeholders, leading to improved focus, alignment, and value delivery.",
  },
  {
    id: "679c4293-175c-462c-804e-4657491eef6e",
    chapter: 3,
    question:
      "What is the primary purpose of the Daily Scrum?\n(choose the best answer)",
    options: [
      "To allow the Scrum Master to identify new impediments and present them at the event.",
      "To keep stakeholders informed of the progress made by the Scrum Team.",
      "To provide updates on progress to the Product Owner.",
      "To ensure the Developers are clear on the next steps towards the Sprint Goal.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the desirable common outcome of the Daily Scrum is for the Developers to be clear on the next steps towards the Sprint Goal. During the Daily Scrum, the Developers inspect the work completed, plan for the next 24 hours, and identify any obstacles. By sharing their progress and coordinating their efforts, they ensure alignment and focus on achieving the Sprint Goal.",
  },
  {
    id: "e8cd8c7f-8be1-43ba-9774-ef8d1c3760f2",
    chapter: 3,
    question: "True or False: Scrum mandates the use of timeboxed Sprints.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "A timebox is a predefined period allocated for an activity or event. Sprints in Scrum are timeboxed, meaning they have a fixed duration. The Scrum Guide emphasizes the importance of fixed-length Sprints to maintain a consistent rhythm, enable effective planning, and provide a framework for regular inspection and adaptation.",
  },
  {
    id: "b71acf4a-5ae6-4a90-b374-27abc3ad3343",
    chapter: 3,
    question:
      "True or False: The Product Owner has the authority to change the Sprint Goal during the Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Owner does not have the authority to unilaterally change the Sprint Goal during the Sprint. The Sprint Goal is set during the Sprint Planning event and provides a clear objective for the Scrum Team to work towards. It remains fixed for the duration of the Sprint to provide focus and direction. If the Sprint Goal becomes obsolete or no longer aligns with the product vision or business needs, the Product Owner, in consultation with the Scrum Team, has the authority to cancel the Sprint.",
  },
  {
    id: "ce2aff9d-1cfb-4967-a6ab-51c7088e01ce",
    chapter: 3,
    question:
      "What is the primary goal of the Sprint Review?\n(choose the best answer)",
    options: [
      "To inspect and adapt the Scrum framework",
      "To present the completed work to stakeholders and gather feedback",
      "To review the Definition of Done",
      "To plan the work for the next Sprint",
    ],
    correctAnswer: 1,
    explanation:
      "The primary goal of the Sprint Review in Scrum is to provide a platform for the Scrum Team and stakeholders to inspect the Increment produced during the Sprint, facilitating collaborative feedback. This event is key for adapting the Product Backlog based on insights gained, ensuring the product evolves according to stakeholder needs and market realities. Additionally, it serves as an opportunity to review the overall progress toward the Product Goal and maintain transparent communication about the product’s development trajectory, thereby aligning future Sprints with the most valuable and relevant work.",
  },
  {
    id: "027f7f4e-12d5-4505-a73e-b1b3c2062c7f",
    chapter: 3,
    question:
      "What is the recommended approach for the Product Owner in Scrum regarding Sprint zero?\n(choose the best answer)",
    options: [
      "Plan a separate Sprint Zero to kickstart the project.",
      "Prepare the Product Backlog for the entire project during Sprint Zero.",
      "Initiate communication with the customer and gather requirements during Sprint Zero.",
      "There is no such thing as Sprint Zero in Scrum.",
    ],
    correctAnswer: 3,
    explanation:
      "In Scrum, there is no official concept of Sprint Zero. Scrum emphasizes the importance of having a consistent, timeboxed cadence for Sprints throughout the product development. The focus is on delivering a potentially shippable product increment in each Sprint, starting from the very first Sprint.",
  },
  {
    id: "ad84469c-8e58-436e-baf4-05c44cf1bd0b",
    chapter: 3,
    question:
      "When is the recommended time for integrating the work in Scrum?\n(choose the best answer)",
    options: [
      "During the Sprint.",
      "Only at the end of the Sprint, right before the Sprint Review.",
      "Before the release of the product to stakeholders.",
      "At the end of the entire project when all work is completed.",
    ],
    correctAnswer: 0,
    explanation:
      "In Scrum, the recommended time for integrating the work is during the Sprint itself. Integration is an ongoing process that should be performed continuously throughout the development iterations. The Scrum Team collaborates and integrates their work incrementally, ensuring that the product evolves cohesively and remains in a potentially shippable state at all times. By integrating work during the Sprint, any issues or conflicts can be identified and addressed promptly, allowing for early feedback and opportunities to adapt the product as needed.",
  },
  {
    id: "424fd994-c027-4243-89f9-fa6c981c6962",
    chapter: 3,
    question:
      "What is one of the key accountabilities of a Scrum Master in helping multiple teams maintain alignment in a single product?\n(choose the best answer)",
    options: [
      "Take ownership of the Sprint Backlogs of all teams and synchronize their tasks.",
      "Instruct the Product Owner to coordinate efforts with Lead Developers.",
      "Attend the Daily Scrums of each team and ensure their activities are aligned.",
      "Guide the teams to understand their collective responsibility in creating aligned outputs and an Integrated Increment.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, a Scrum Master can help multiple teams keep their output aligned in a single product by teaching them that it is their responsibility to work together. The Scrum Master should encourage and facilitate collaboration among the teams to create aligned outputs and an integrated Increment. This involves promoting communication, fostering a shared understanding of goals and dependencies, and facilitating the identification and resolution of any impediments that may affect cross-team alignment. The Scrum Master supports the teams in self-managing and finding effective ways to collaborate, ensuring a cohesive and cohesive product.",
  },
  {
    id: "4f490097-c50b-4f06-a2ab-561a9d0e8935",
    chapter: 3,
    question:
      "Which statements accurately describe the Sprint Backlog in Scrum? \n(choose the best two answers)",
    options: [
      "The Sprint Backlog remains static throughout the Sprint.",
      "The Sprint Backlog consists of an ordered list of all product requirements.",
      "The Sprint Backlog enables the Scrum Team to inspect progress during the Daily Scrum.",
      "The Sprint Backlog represents the work identified by the Developers to achieve the Sprint Goal.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Guide clarifies two key aspects of the Sprint Backlog. Firstly, it should provide enough detail for Developers to track their progress during the Daily Scrum. This enables them to adapt their plan based on the remaining work. Secondly, the Sprint Backlog makes the selected work items visible, representing the necessary tasks to achieve the Sprint Goal. It promotes transparency and helps the team stay focused on the goal.",
  },
  {
    id: "8d33ab3c-270c-4891-8d37-bfabd97f69e5",
    chapter: 3,
    question:
      "When is it recommended to refine the Product Backlog in Scrum?\n(choose the best answer)",
    options: [
      "Before the project starts, during the planning phase.",
      "During each Sprint, as an ongoing activity.",
      "Only during designated refinement meetings between Sprints.",
      "Only during Sprint Planning.",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, it is recommended to refine the Product Backlog as an ongoing activity throughout each Sprint. Product Backlog refinement is a continuous process where the Product Owner and the Scrum Team collaborate to review, prioritize, and update the items in the Product Backlog. By refining the Product Backlog regularly during each Sprint, the team ensures that the backlog items are well understood, appropriately sized, and ready for implementation in future Sprints. This ongoing refinement helps maintain a healthy and adaptable Product Backlog, enabling the team to respond effectively to changing requirements and market dynamics. Note that refinement might also occur on dedicated events and Sprint Planning.",
  },
  {
    id: "13e4da2e-c5dc-4622-8ea0-479e99cf9b43",
    chapter: 3,
    question:
      "True or False: Developers in the Scrum Team are responsible for creating any aspect of a usable Increment each Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, Developers are the members of the Scrum Team responsible for delivering a usable Increment of the product. They are cross-functional individuals who possess all the necessary skills to collaboratively work on the product. Developers create the software, hardware, or other components required to deliver a potentially releasable Increment during each Sprint. Their commitment to creating the Increment is crucial for the success of the Scrum Team and achieving the Sprint Goal.",
  },
  {
    id: "8ce7f1e3-cb6a-4bbe-b1b9-c1127740506c",
    chapter: 3,
    question:
      "How is the Sprint Backlog best described in Scrum?\n(choose the best answer)",
    options: [
      "Solely managed and maintained by the Product Owner.",
      "A comprehensive list of all features, functions, requirements, enhancements, and fixes for future product releases.",
      "A plan created collaboratively by and for the Developers.",
      "Each item in the Sprint Backlog is assigned to a specific team member.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is a plan created by and for the Developers. It is a set of selected Product Backlog items that the Developers forecast they can complete during the Sprint to achieve the Sprint Goal. The Sprint Backlog is the Developers' plan for how they will deliver the Increment and is continuously updated throughout the Sprint. It evolves as new information emerges or when there are changes in the team's understanding of the work required.",
  },
  {
    id: "e63877e4-8cad-4015-a090-6356a4d87fc8",
    chapter: 3,
    question:
      "Which of the following are Scrum artifacts?\n(choose the best three answers)",
    options: [
      "Burn-down chart",
      "Increment",
      "Product Backlog",
      "Sprint Backlog",
      "Definition of Done",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum artifacts are the tangible and transparent elements that provide information and support the framework's implementation. There are 3 of them: Product Backlog, Sprint Backlog, and Increment. While a burn-down chart is a useful tool, it is not considered official artifacts according to the Scrum Guide. Further, the Definition of Done is what the Increment commits to.",
  },
  {
    id: "d685b2cc-3d9e-4450-8709-91e73e18c213",
    chapter: 3,
    question:
      "Which of the following is not a defined accountability in Scrum?\n(choose the best answer)",
    options: ["Scrum Master", "Product Owner", "Architects", "Developers"],
    correctAnswer: 2,
    explanation:
      "While Scrum recognizes the importance of technical expertise and collaboration within the Scrum Team, it does not explicitly define the role or accountability of Architects. The Scrum Team comprises the Scrum Master, Product Owner, and Developers who collectively work together to deliver the product increment. Although there may be individuals with architectural responsibilities within the Developers, Scrum does not prescribe a specific accountability for Architects as a separate role within the framework.",
  },
  {
    id: "042a60d5-8f46-45f8-9765-b60c0930b722",
    chapter: 3,
    question:
      "What is the recommended level of refinement for a Product Backlog item in Scrum?\n(choose the best answer)",
    options: [
      "As much as desired by the Product Owner and the stakeholders.",
      "As much as directed by the Scrum Master.",
      "They should be decomposed into a level in which they can be Done by the Scrum Team within one Sprint.",
      "The level of refinement for a Product Backlog item should be determined by the Developers.",
    ],
    correctAnswer: 2,
    explanation:
      "In Scrum, the Product Backlog items should be refined and decomposed to a level where the Scrum Team can confidently complete them within a single Sprint. This level of refinement ensures that the items are well-understood, appropriately sized, and ready for implementation. The Scrum Team, including the Product Owner and Developers, collaborates on the refinement process to ensure that the items are sufficiently refined for efficient Sprint Planning and execution. However, keep in mind that readiness is a principle, not a rule i.e., items that are “not ready” can be selected for a Sprint if the Scrum Team sees the need.",
  },
  {
    id: "bdb6e5ef-75a5-491c-ac86-7cf203009f77",
    chapter: 3,
    question:
      "If conflicts are creating problems withing a Scrum Team, who has the greater responsibility to step up and solve the conflicts?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Stakeholders",
      "The Scrum Master",
      "The Product Owner",
    ],
    correctAnswer: 2,
    explanation:
      "If conflicts are creating problems within a Scrum Team, the Scrum Master has the greater responsibility to step up and help resolve the conflicts. As a leader who serves and facilitator of the Scrum Team, the Scrum Master plays a crucial role in fostering a healthy and collaborative environment. He supports the team in addressing conflicts, promoting effective communication, and facilitating conflict resolution techniques.",
  },
  {
    id: "de9239f0-d764-4ea5-9bb8-5e73cc01ef4a",
    chapter: 3,
    question:
      "What is a typical task performed by the Product Owner during the Sprint?\n(choose the best answer)",
    options: [
      "Prepare performance reports for stakeholders",
      "Conduct quality assurance testing",
      "Assign development tasks to team members",
      "Collaborate with the Developers to refine the Product Backlog",
    ],
    correctAnswer: 3,
    explanation:
      "During the Sprint, a typical task performed by the Product Owner is to collaborate with the Developers to refine the Product Backlog. This includes reviewing and ordering items, clarifying requirements, and ensuring that the Product Backlog items are well-understood and ready for implementation. By actively engaging with the Developers, the Product Owner ensures that the team has a shared understanding of the product vision and can make informed decisions during Sprint Planning and execution.",
  },
  {
    id: "e6179570-b80e-4755-9191-c7aba81f82c7",
    chapter: 3,
    question:
      "What is the recommended action for Developers when a customer requests a new feature that would jeopardize the Sprint Goal?\n(choose the best answer)",
    options: [
      "Reject the request without further discussion",
      "Accept the request and add it to the current Sprint",
      "Prioritize the request over the existing Sprint Backlog items",
      "Ask the Product Owner to communicate with the customer and assess the impact",
    ],
    correctAnswer: 3,
    explanation:
      "When a customer wants a new feature to be added to the current Sprint, but it cannot be done without risking the Sprint Goal, the best response from the Developers is to ask the Product Owner to speak with the customer. The Product Owner is responsible for managing the Product Backlog and represents the interests of the stakeholders. They can engage in a conversation with the customer to understand the request, evaluate its impact on the Sprint Goal, and make informed decisions regarding its inclusion in the current Sprint or prioritization in the Product Backlog.",
  },
  {
    id: "69e1c6e0-b9b0-4747-975f-6f21d6a15d3f",
    chapter: 3,
    question:
      "What are the potential consequences of tailoring Scrum terminology to match an organization's current environment?\n(choose the best three answers)",
    options: [
      "The change will ensure better results",
      "The change will improve collaboration and transparency",
      "Some benefits of Scrum may be lost, as the change might not be obvious to everyone",
      "Very little change may happen if the tailored terminology is not understood by everyone",
      "People may misunderstand and miscommunicate important concepts, leading to increased complexity",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, Scrum uses specific terminology to define its accountabilities, events, artifacts, and rules. Tailoring this terminology to an organization's environment can have implications. If the change is not obvious to everyone, the benefits of Scrum may be lost. Scrum's terminology is meant to establish a common language and understanding among team members. Additionally, if the change is not obvious, there may be very little actual change in the organization. The terminology serves as a catalyst for understanding and effectively adopting Scrum practices. However, if the tailored terminology leads to misunderstanding and miscommunication of important concepts, it can cause confusion and increased complexity. Scrum relies on a clear and shared understanding of its concepts for successful implementation.",
  },
  {
    id: "41eddf22-f2e4-4887-b32d-e14e08be1580",
    chapter: 3,
    question:
      "What is the purpose of the Sprint Retrospective in Scrum?\n(choose the best answer)",
    options: [
      "To finalize the Increment and prepare it for release",
      "To review and approve the Product Backlog items for the next Sprint",
      "To provide an opportunity for the Scrum Team to inspect and adapt their process",
      "To discuss and prioritize new features and functionalities for future Sprints",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective is an event that occurs at the end of each Sprint. It provides the Scrum Team with an opportunity to inspect how the Sprint went and to adapt their process for improvement. During the Sprint Retrospective, the Scrum Team reflects on their collaboration, identifies what went well and areas for improvement, and creates a plan for implementing changes in the upcoming Sprints. The goal is to continuously improve the team's effectiveness and the quality of the product being developed.",
  },
  {
    id: "352a4e70-d994-49bd-ab8b-0800d04e182a",
    chapter: 3,
    question:
      "When the Developers have extra time during the Sprint, who should be involved in deciding which additional work should be selected?\n(choose the best two answers)",
    options: [
      "The Scrum Master",
      "The stakeholders",
      "The Developers",
      "The Product Owner",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "When the Developers have extra time during the Sprint, it is recommended that the decision-making for selecting additional work involves both the Developers and the Product Owner. The Developers have firsthand knowledge of the remaining capacity and technical feasibility, while the Product Owner holds the authority to prioritize and make decisions based on the value and importance of the work. By collaborating together, the Developers and the Product Owner can determine which additional items from the Product Backlog can be taken up and worked on during the current Sprint.",
  },
  {
    id: "91e7f993-177d-48c4-914d-2b34e1fd186f",
    chapter: 3,
    question:
      "What should the Product Owner do if he notices that the Developers are having difficulty understanding the Product Backlog items in the Sprint Backlog?\n(choose the best answer)",
    options: [
      "Delegate the responsibility to the Scrum Master",
      "Communicate through written documentation",
      "Attend Daily Scrums and clarify during the event",
      "Do nothing and wait for the Developers to figure it out",
    ],
    correctAnswer: 2,
    explanation:
      "Ideally, the Product Owner should communicate with the Developers once he is aware of the issue instead of waiting for the next Daily Scrum. However, given the available options, the best answer would be letter C. The Product Owner should actively participate in the Daily Scrums and utilize this forum to provide clarification and address any difficulties the Developers may have in understanding the Product Backlog items in the Sprint Backlog. This proactive engagement during the Daily Scrum allows for immediate clarification and fosters a collaborative environment for the Scrum Team to work together effectively.",
  },
  {
    id: "051085f6-ef3f-447b-9b16-754394762f74",
    chapter: 3,
    question: "What is the Product Backlog?\n(choose the best answer)",
    options: [
      "A static list of predefined tasks for the Sprint",
      "A fixed set of requirements to be implemented over a specific period",
      "An emergent, ordered list of what is needed to improve the product",
      "A formal document approved by stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Backlog is an emergent, ordered list of what is needed to improve the product. It represents the single source of requirements for any changes or additions to be made to the product. The Product Backlog is dynamic and constantly evolves based on feedback, learning, and changes in the business environment.",
  },
  {
    id: "28392a07-acb7-482f-a55a-7f8106300ae4",
    chapter: 3,
    question:
      "How does the Product Backlog respond to changes in the environment where the product will be used?\n(choose the best answer)",
    options: [
      "The Product Backlog remains unaffected by any changes",
      "It depends on the decision taken by the Change Control Board",
      "The Product Backlog evolves to reflect the changes",
      "The Product Owner is responsible for creating a new Product Backlog",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Backlog is expected to evolve throughout the project. It is influenced by changes in the business environment, market conditions, user feedback, and new insights gained during the development process. As the understanding of the product and its environment improves, the Product Backlog is refined and adjusted to reflect those changes, ensuring that it remains a valuable and up-to-date representation of the work to be done.",
  },
  {
    id: "77bde0b9-6993-4bbe-bbe1-c144a1368f53",
    chapter: 3,
    question:
      "Which chart represents the trend of remaining effort in the Sprint Backlog?\n(choose the best answer)",
    options: [
      "Velocity chart",
      "Sprint Burn-up chart",
      "Release Burn-down chart",
      "Sprint Burn-down chart",
    ],
    correctAnswer: 3,
    explanation:
      "In Scrum, the trend of remaining effort in the Sprint Backlog is represented by a Sprint Burn-down chart. A burn-down chart visually displays the remaining work over time, typically showing the amount of work remaining on the vertical axis and the time on the horizontal axis. As the Sprint progresses, the line on the chart should ideally trend downwards, indicating the decreasing amount of work remaining in the Sprint Backlog.",
  },
  {
    id: "e3381646-c608-40cc-a16d-e84a3caafede",
    chapter: 3,
    question:
      "When is the Sprint Retrospective held in Scrum?\n(choose the best answer)",
    options: [
      "At the beginning of each Sprint",
      "Throughout the duration of the Sprint",
      "At the end of each Sprint",
      "It is not a mandatory event in Scrum",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Retrospective is a mandatory event in Scrum and concludes the Sprint. It provides an opportunity for the Scrum Team to inspect and adapt their process, identify areas for improvement, and make adjustments for the next Sprint. The Sprint Retrospective focuses on the Scrum Team's interactions, the processes used, and the tools and techniques employed during the Sprint.",
  },
  {
    id: "e5b64362-c09d-415c-af21-5762355cf34e",
    chapter: 3,
    question:
      "According to Scrum, is it true that each Scrum Team member must be cross-functional and able to perform all types of work required to develop a Done Increment?\n(choose the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to Scrum, it is not required for each Scrum Team member to be cross-functional and able to perform all types of work required to develop a Done Increment. While cross-functionality is encouraged within the Scrum Team, it does not imply that every individual should possess expertise in all areas. Scrum promotes collaboration and collective responsibility, where team members contribute their specialized skills and knowledge to achieve the Sprint Goal and deliver a Done Increment. The team as a whole should possess the necessary skills and capabilities, but not every individual needs to be proficient in all aspects of the development process.",
  },
  {
    id: "547d295d-b4a4-40aa-921f-ce607fe1fcf8",
    chapter: 3,
    question:
      "What can happen to the scope of work during a Sprint in Scrum?\n(choose the best answer)",
    options: [
      "he scope may be re-negotiated as the team learns more",
      "All Product Backlog items will be replaced with new items",
      "The scope remains fixed and cannot be adjusted",
      "The Scrum Master manages the scope",
    ],
    correctAnswer: 0,
    explanation:
      "During a Sprint in Scrum, the scope of work may be re-negotiated as the Scrum Team learns more. As the team gains a deeper understanding of the work and uncovers new insights during the Sprint, there may be a need to refine or adjust the scope. The Scrum Team, including the Product Owner and Developers, collaborates to evaluate the current state of the Sprint and determine if any changes to the scope are necessary to optimize value delivery. This flexibility allows for adaptation and continuous improvement throughout the Sprint.",
  },
  {
    id: "4581cb09-50a5-41a9-be4a-4a1805e92275",
    chapter: 3,
    question:
      "In the past few Sprints, a Scrum Team has had to handle new urgent work during a Sprint. Such tasks cannot wait for the next Sprint because they are negatively impacting users and must be dealt with as soon as possible. And this scenario is expected to continue for the next Sprints. The problem is that this is causing lots of discussions to adapt the scope during a Sprint causing the removal of work planned during Sprint Planning to create capacity for handling the urgent work. During a Sprint Retrospective, one Developer suggested allocating capacity for unplanned work during Sprint Planning. For example, during Sprint Planning, the Scrum Team would plan a Sprint Backlog that only used 70% of their capacity, easing the process of handling new urgent work during the Sprint. What are the possible consequences of such action?\n(choose the best answer)",
    options: [
      "It helps maintain focus on the Sprint Goal and adapt to changes",
      "It introduces risks of failing to achieve the Sprint Goal",
      "It increases the risk of failing to deliver an Increment",
      "It undermines the transparency and accountability of the Scrum Team",
    ],
    correctAnswer: 0,
    explanation:
      "Allocating capacity for unplanned work during Sprint Planning, such as planning a Sprint Backlog that uses only 70% of the team's capacity, can indeed help the Scrum Team maintain focus on the Sprint Goal and adapt to changes. By reserving some capacity for handling urgent work, the team can better respond to unforeseen tasks without compromising the overall Sprint Goal. This approach allows for flexibility and the ability to adapt the scope during the Sprint while still striving to deliver a valuable Increment.",
  },
  {
    id: "fca962ae-a0e2-46d4-821a-01bf3c8c932b",
    chapter: 3,
    question:
      "True or False: The Scrum Master is responsible for facilitating the Daily Scrum and ensuring that all Developers provide detailed updates on their tasks.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Master is not responsible for facilitating the Daily Scrum and ensuring that all Developers provide detailed updates on their tasks. While the Scrum Master may choose to facilitate the Daily Scrum, her role primarily involves creating a safe environment for open communication and facilitating the Scrum events, rather than dictating the level of detail or specific updates expected from the Developers. The Daily Scrum is a self-managing event where the Developers collaborate and provide a brief update on their progress towards the Sprint Goal. It is the responsibility of the Developers themselves to conduct the Daily Scrum effectively. However, it is worth noting that in certain situations, particularly with novice teams, the Scrum Master may choose to facilitate the Daily Scrum as a way of coaching or teaching them how to conduct the event effectively. This can help the team develop a good understanding of the purpose and structure of the Daily Scrum, as well as foster collaboration and improve communication among team members.",
  },
  {
    id: "3739fbeb-4096-4a18-a51d-fa5a7da4f123",
    chapter: 3,
    question:
      "Which of the following are valid ways of expressing non-functional requirements?\n(choose the best two answers)",
    options: [
      "As user stories",
      "As Product Backlog items",
      "In the form of quality standards",
      "Using technical specifications",
      "As part of the Definition of Done",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      'Non-functional requirements can be expressed as Product Backlog items to ensure they are captured and prioritized along with functional requirements. Additionally, non-functional requirements are also commonly included as part of the Definition of Done, which serves as a shared understanding within the Scrum Team about the quality criteria that must be met for a product increment to be considered "Done."',
  },
  {
    id: "1d1e907b-0a03-411f-bef4-2312569ae1d9",
    chapter: 3,
    question:
      "The Scrum Team is planning a Sprint, but there are many uncertainties and the Product Backlog lacks clarity. In this situation, what should the Scrum Team do to address these challenges?\n(choose the best answer)",
    options: [
      "Extend the Sprint Planning to accommodate the uncertainties",
      "Shorten the Sprint duration to reduce the impact of uncertainties",
      "Seek additional guidance from the Product Owner before proceeding",
      "Schedule a separate session to refine the Product Backlog and address uncertainties",
      "Continue the Sprint Planning and finish it within the timebox.",
    ],
    correctAnswer: 4,
    explanation:
      "In situations where there are uncertainties and the Product Backlog lacks clarity during Sprint Planning, it is recommended for the Scrum Team to continue the Sprint Planning and work within the allocated timebox. The Scrum Team can collaborate, ask questions, and seek clarification from the Product Owner to address uncertainties and improve the understanding of the work. By adhering to the timebox, the team maintains focus and ensures that they can make the best decisions based on the available information. After the Sprint Planning, the team can continue to refine the Product Backlog during the Sprint as they gain more insights and understanding.",
  },
  {
    id: "e1c32108-f8a9-4196-8418-27bcce40f040",
    chapter: 3,
    question:
      "What can happen to the scope of work during the course of a Sprint in Scrum?\n(choose the best answer)",
    options: [
      "The scope may be re-negotiated as more is learned",
      "The Product Owner can add new items to the Sprint Backlog without consulting the Developers",
      "The Developers can remove items from the Sprint Backlog without any justification",
      "The scope remains fixed and cannot be adjusted once the Sprint has started",
    ],
    correctAnswer: 0,
    explanation:
      "In Scrum, the Sprint Goal is fixed but the scope of work is not fixed and can be re-negotiated during the course of a Sprint as the Scrum Team learns more, receives feedback, or encounters unexpected challenges. The Scrum Guide emphasizes the principle of continuous refinement, allowing the team to adapt and adjust the scope based on new insights and evolving requirements. This flexibility enables the team to maximize value and respond effectively to changes throughout the Sprint.",
  },
  {
    id: "a212f063-d828-404c-93a4-7b68d4b85f00",
    chapter: 3,
    question:
      "How long is the timebox for the Daily Scrum in Scrum?\n(choose the best answer)",
    options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is timeboxed to 15 minutes. This timebox is designed to keep the meeting short and focused. During the Daily Scrum, the Developers members synchronize their work, inspect the progress toward the Sprint Goal, and plan their activities for the next 24 hours. The timebox helps ensure that the meeting remains concise and efficient.",
  },
  {
    id: "38372d4e-4d44-496e-9727-66c560b8117e",
    chapter: 3,
    question:
      "True or False:The Product Owner must handle all the work alone to fulfill their accountability?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Owner is not expected to handle all the work alone to fulfill their accountability. While the Product Owner has the primary responsibility for managing the Product Backlog and maximizing the value of the product, they have the flexibility to delegate certain responsibilities to others within the Scrum Team or stakeholders. The Product Owner collaborates closely with the Developers and stakeholders to make informed decisions, refine the Product Backlog, order items, and provide clarity on requirements. It is a shared effort within the Scrum Team to deliver a valuable product, and the Product Owner's role involves effective collaboration, communication, and facilitation rather than taking on all the work alone.",
  },
  {
    id: "b58ddb4e-58b3-4364-990c-8ebb8d8b2ebf",
    chapter: 3,
    question: "True or False: The commitments are a mandatory aspect of Scrum?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, commitments are not optional but a crucial aspect of Scrum. Scrum defines three main commitments: the Sprint Goal, the Product Goal, and the Definition of Done. The Sprint Goal provides focus and direction to the Developers for the Sprint. The Product Goal guides the overall vision and direction of the product. The Definition of Done ensures transparency and shared understanding of what it means for a product increment to be potentially releasable. These commitments help align the Scrum Team and provide clarity on what needs to be achieved.",
  },
  {
    id: "18bead1b-8dab-4835-8731-e5bdc2459e05",
    chapter: 3,
    question:
      "True or False: Can the Scrum Master be described as a servant-leader?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Scrum Guide currently states that the Scrum Master is a leader that serves. However, describing them as a servant-leader is still valid. The Scrum Master is responsible for promoting and facilitating the adoption of Scrum principles and practices within the organization. They help the organization understand the benefits of Scrum, support the Scrum Team, and drive continuous improvement. As a change agent, the Scrum Master guides the organization through the process of change and helps overcome obstacles that may arise during the Scrum implementation.",
  },
  {
    id: "7b28a9d8-1091-4c46-bce6-f1b1e34d672c",
    chapter: 3,
    question:
      "What is the accountability of the Scrum Master during the Sprint?\n(choose the best two answers)",
    options: [
      "Assign tasks to individual team members",
      "Causing the removal of impediments to the Scrum Team’s progress",
      "Updating the Sprint burn-down chart",
      "Documenting the minutes of the events",
      "Ensuring that all Scrum events take place and are positive, productive, and kept within the timebox",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, during the Sprint, the Scrum Master serves the Scrum Team in two primary ways: enabling the Scrum Team to improve its practices and helping the Scrum Team to be effective. For example, they are responsible for identifying and removing any obstacles or impediments that hinder the team's productivity. Additionally, the Scrum Master plays a crucial role in ensuring that all Scrum events occur as scheduled, maintaining their effectiveness and adherence to the defined timebox. Assigning tasks to individual team members, updating the Sprint burn-down chart, and documenting event minutes are not the primary responsibilities of the Scrum Master during the Sprint.",
  },
  {
    id: "4107095f-d426-4576-87cf-3ffb1bcecbbf",
    chapter: 3,
    question:
      "What does it mean to say that the Sprint Backlog is transparent?\n(choose the best answer)",
    options: [
      "The Sprint Backlog is shared only with the Scrum Team.",
      "The Sprint Backlog is shared with the Product Owner and stakeholders.",
      "The Sprint Backlog is visible to everyone, including the stakeholders.",
      "The Sprint Backlog is only visible to the Scrum Master.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, transparency is one of the three pillars of Scrum. It means that significant aspects of the process must be visible to those responsible for the outcome. Transparency enables inspection and adaptation, as it allows everyone to have a shared understanding of the work being done and the progress being made. It helps identify issues, encourages collaboration, and supports trust and effective decision-making. While the whole process can be made visible, it is not necessary for all work to be visible to all stakeholders all of the time.",
  },
  {
    id: "13b46c20-0251-428e-a9b2-280a38b88d0f",
    chapter: 3,
    question:
      "Who is responsible for ordering the items in the Product Backlog?\n(choose the best answer)",
    options: ["Scrum Master", "Developers", "Stakeholders", "Product Owner"],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Product Owner is a single individual who is accountable for maximizing the value of the product and the work of the Developers. The Product Owner is the sole person responsible for managing the Product Backlog and making decisions about the product. Therefore, the statement is False. The Product Owner role cannot be filled by a committee or group of people.",
  },
  {
    id: "777db7c2-d0b5-4854-909c-b545f9690238",
    chapter: 3,
    question:
      "Which Scrum artifact represents the work to be done and is the sole source of requirements for any changes to be made to the product?\n(choose the best answer)",
    options: [
      "Product Backlog",
      "Sprint Backlog",
      "Increment",
      "Burndown Chart",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Backlog represents the work to be done and serves as the sole source of requirements for any changes to be made to the product. It is a dynamic and ordered list of items that captures the desired functionality, enhancements, and fixes needed for the product. The Product Backlog is owned and managed by the Product Owner, who collaborates with stakeholders to prioritize and refine the items based on their value and insights. The Product Backlog drives the planning, execution, and delivery of increments in Scrum. The Sprint Backlog represents the work selected from the Product Backlog for a specific Sprint, while the Increment is the sum of all the completed and integrated Product Backlog items at the end of a Sprint. The Burndown Chart is a visual representation of progress in completing the work over time, but it does not serve as the source of requirements for changes to the product.",
  },
  {
    id: "7becfc03-1cf4-4af6-922b-abea140ab9be",
    chapter: 3,
    question:
      "What is the purpose of the Sprint Review?\n(choose the best answer)",
    options: [
      "To inspect the progress towards the Sprint Goal and adapt the Product Backlog if needed.",
      "To collaborate and plan the work for the next Sprint.",
      "To retrospect on the previous Sprint and identify potential process improvements.",
      "To showcase the Increment and collect feedback from stakeholders.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, he purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed. During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities. The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation.",
  },
  {
    id: "0b20f66a-0290-438a-97a5-860b2dc5b414",
    chapter: 3,
    question:
      "Who is responsible for causing the removal of impediments that are blocking the progress of the Scrum Team?\n(choose the best answer)",
    options: ["Scrum Master", "Product Owner", "Developers", "Stakeholders"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Scrum Master serves the Scrum Team by causing the removal of impediments to the Scrum Team’s progress.",
  },
  {
    id: "3a5269ef-c43c-4e21-8144-daa0f86b1927",
    chapter: 3,
    question:
      "Who is accountable for ensuring that the Product Backlog is visible, transparent, and understood by the entire Scrum Team?\n(choose the best answer)",
    options: [
      "Scrum Master",
      "Product Owner",
      "Developers",
      "Scrum Team collectively",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for managing and maintaining the Product Backlog, which includes making sure it is bisible, transparent, and understood by the entire Scrum Team.",
  },
  {
    id: "afb1ebc7-f389-43a7-9200-7c0775a01048",
    chapter: 3,
    question:
      "Which Scrum event is specifically designed for the Scrum Team to inspect their work processes and identify opportunities for improvement?\n(choose the best answer)",
    options: [
      "Sprint Review",
      "Daily Scrum",
      "Sprint Planning",
      "Sprint Retrospective",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Retrospective is specifically designed for the Scrum Team to inspect their work processes and identify opportunities for improvement. It is a time-boxed event that occurs at the end of each Sprint, where the Scrum Team reflects on their performance and collaboratively discusses what went well, what could be improved, and potential adjustments to their processes, tools, and relationships. The Sprint Retrospective provides an opportunity to learn from their experiences and make continuous improvements to enhance their effectiveness and efficiency. The Sprint Review is focused on reviewing the increment and gathering feedback from stakeholders. The Daily Scrum is a short daily meeting for the Developers to synchronize their work. The Sprint Planning event is dedicated to planning the upcoming Sprint and selecting the work to be undertaken.",
  },
  {
    id: "a9f43466-919e-4ce5-bb4a-cc26a0d14f84",
    chapter: 3,
    question:
      "Who is responsible for creating and maintaining the Definition of Done in Scrum?\n(choose the best answer)",
    options: [
      "Scrum Master",
      "Product Owner",
      "Developers",
      "Stakeholders",
      "Scrum Team",
    ],
    correctAnswer: 4,
    explanation:
      "The Scrum Guide states that the Scrum Team is responsible for creating and maintaining the Definition of Done in Scrum. The Definition of Done represents the agreed-upon set of criteria that defines when a product increment is considered complete. While it is recommended for all Scrum Teams to follow a minimum organizational standard, if one exists, it is the Scrum Team's responsibility to establish a Definition of Done appropriate for the product they are working on.",
  },
  {
    id: "98331ea1-fd77-4c7f-93f2-6f488ecd0803",
    chapter: 3,
    question:
      "Can the Developers modify the Sprint Backlog during the Sprint?\n(choose the best answer)",
    options: [
      "No, the Sprint Backlog is fixed and cannot be changed.",
      "Yes, the Sprint Backlog can be modified based on the team's learning and progress.",
      "Only the Scrum Master can modify the Sprint Backlog.",
      "The Product Owner can modify the Sprint Backlog to reprioritize the work.",
    ],
    correctAnswer: 1,
    explanation:
      "Yes, the Sprint Backlog can be modified by the Developers based on the team's learning and progress during the Sprint. As new information emerges or circumstances change, the Developers may need to adjust the Sprint Backlog to optimize their work and achieve the Sprint Goal. However, any changes that impact the scope of the Sprint should be discussed and agreed upon with the Product Owner to ensure alignment and transparency. Collaboration between the Developers and the Product Owner is crucial to maintain a shared understanding and make informed decisions throughout the Sprint.",
  },
  {
    id: "766bb658-6115-447a-b530-06fc92143ce8",
    chapter: 3,
    question:
      "Can the Scrum Team decide to skip the Sprint Review?\n(choose the best answer)",
    options: [
      "Yes, the Scrum Team has the authority to skip the Sprint Review if they deem it unnecessary.",
      "No, the Sprint Review is a required event in Scrum and should not be skipped.",
      "Only the Product Owner can decide to skip the Sprint Review.",
      "The Scrum Master can decide to skip the Sprint Review if there are time constraints.",
    ],
    correctAnswer: 1,
    explanation:
      "No, the Sprint Review is a required event in Scrum and should not be skipped. The Sprint Review is an opportunity for the Scrum Team to showcase the Increment to stakeholders and gather feedback. It is a crucial part of the inspect and adapt cycle in Scrum, enabling transparency and collaboration. Skipping the Sprint Review would hinder the team's ability to gather valuable insights, make necessary adjustments, and ensure alignment with stakeholder expectations.",
  },
  {
    id: "4104626a-d9e1-4ff9-b33f-4141f8d4bc9b",
    chapter: 3,
    question:
      "True or False: The Scrum Master is primarily responsible for ensuring that enough Product Backlog items are selected at the Sprint Planning event in order to satisfy the stakeholders.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The primary responsibility for ensuring that enough Product Backlog items are selected at the Sprint Planning event lies with the entire Scrum Team, not just the Scrum Master. This selection process should be a collaborative effort involving the Product Owner, the Developers, and the Scrum Master. While the Scrum Master does have a role in facilitating Scrum events and helping the team understand Scrum practices, the selection of Product Backlog items is more directly related to the Product Owner's accountability of managing the Product Backlog, and the Developers' role of selecting the Product Backlog items during Sprint Planning. However, it is worth noting that all members of the Scrum Team should collaborate to ensure that the items selected align with the Product Goal and Sprint Goal, and are feasible for the upcoming Sprint.",
  },
  {
    id: "4324c327-8edb-4b9a-86d3-8e5e686d8fa7",
    chapter: 3,
    question:
      "As a Scrum Master, if the Product Owner decides to use a cumulative flow diagram instead of a burndown or burnup chart, what would be your response?\n(choose the best answer)",
    options: [
      "There's nothing wrong with it.",
      "Cumulative flow diagrams are not recommended in Scrum and should be replaced by burndown or burnup charts.",
      "Cumulative flow diagrams are only useful in Kanban, not Scrum.",
      "The Scrum Master should intervene and enforce the use of burndown or burnup charts instead of cumulative flow diagrams.",
    ],
    correctAnswer: 0,
    explanation:
      "“There's nothing wrong with it”. The Scrum Guide does not prescribe specific tools or techniques for tracking progress, so the choice between burn-up charts and burn-down charts is left to the discretion of the Scrum Team. The Scrum Master should support the Product Owner's decision and help them effectively use the chosen chart to provide transparency and insights into the product's progress.",
  },
  {
    id: "3fa7650e-7a13-48e0-a57c-9cf73de0b6a6",
    chapter: 3,
    question:
      "What is one of the main objectives of Product Backlog refinement in Scrum?\n(choose the best answer)",
    options: [
      "It should be clear which developer is responsible for a PBL.",
      "Everything should be known about the Product Backlog items.",
      "Product Backlog items should be decomposed to make them small enough to be completed during a Sprint.",
      "All the tasks required for completing a Product Backlog item should be identified.",
    ],
    correctAnswer: 2,
    explanation:
      "PBI's should be decomposed to make them small enough to be Done during a Sprint. Product Backlog refinement is an ongoing activity where the Scrum Team collaborates to add detail, estimates, and order the Product Backlog items. One of the objectives of refinement is to break down Product Backlog items into smaller, more manageable pieces to ensure they can be completed within a single Sprint. This helps the Developers to have a clear understanding of the work and facilitates transparency, adaptability, and effective Sprint Planning.",
  },
  {
    id: "be6c0435-d3fd-405e-8a65-2b1aef2a9aa6",
    chapter: 3,
    question:
      "True or False: The Product Backlog refinement is one of the 5 Scrum events.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Product Backlog refinement is not officially one of the five Scrum events. The five events specified in the Scrum Guide are: Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Product Backlog refinement is an ongoing process where the Product Owner and the Developers add detail, estimates, and order to items in the Product Backlog. While it's a recommended activity and a key part of Scrum, it is not formally recognized as one of the five Scrum events.",
  },
  {
    id: "7f05d4b2-2ac6-42dd-977f-210e3afe28df",
    chapter: 3,
    question:
      "What are the responsibilities of the Scrum Master at the Daily Scrum?\n(choose the best answer)",
    options: [
      "The Scrum Master must provide daily reports to the Product Owner.",
      "The Scrum Master must ensure the Developers answer the two required questions.",
      "The Scrum Master has to ensure the Daily Scrum occurs.",
      "The Scrum Master should facilitate the event and help the Developers identify and resolve any impediments.",
      "The Scrum Master should take over the role of the Scrum Team's spokesperson during the Daily Scrum.",
    ],
    correctAnswer: 2,
    explanation:
      "In the context of the Daily Scrum, the Scrum Master's key responsibility is to ensure that the event takes place and that the Developers understand its purpose. The Scrum Master is not required to facilitate the meeting, demand daily reports, or act as the team's spokesperson. Instead, they ensure that Developers are the focus of the meeting, keeping it within the 15-minute time-box, and aligning it towards inspecting progress and adapting the Sprint Backlog as necessary.",
  },
  {
    id: "0b04b6b0-6d82-4668-8a9f-1cecbe9c6e28",
    chapter: 3,
    question:
      "When the Scrum Team decides to change the Sprint length during the Sprint Retrospective, which of the following statements are correct?\n(choose the best answer)",
    options: [
      "Only the Product Owner may propose the length of the Sprint.",
      "It is best to have Sprints of varying lengths to keep the team adaptable.",
      "Sprints can have a maximum duration of one month.",
      "Sprint length can be extended indefinitely to ensure all work in the Sprint Backlog is completed.",
    ],
    correctAnswer: 2,
    explanation:
      "In Scrum, a Sprint's duration is determined by the Scrum Team and is capped at a maximum of one month. The team can reconsider the Sprint length during a Sprint Retrospective, but frequent changes are discouraged as they can disrupt the team's rhythm and predictability. Choices such as only the Product Owner deciding the Sprint length, having Sprints of varying lengths, and extending the Sprint indefinitely to complete all work, are not aligned with the principles set out in the Scrum Guide.",
  },
  {
    id: "5c8831ac-d122-4227-98b8-344258a307fd",
    chapter: 3,
    question:
      "Which of the following statements accurately describe technical debt?\n(choose the best two answers)",
    options: [
      "It creates certainty and enhances the development process.",
      "The Scrum Team must payoff technical debt at least every three Sprints.",
      "It may reduce transparency regarding the current state of the product.",
      "It may slow down the team’s velocity.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "Technical debt is essentially the trade-off made when choosing a quick, potentially suboptimal solution now instead of applying a better approach that would take longer. This can result in a less transparent view of the product's current state, as hidden issues or poor design may not be immediately apparent. Additionally, technical debt can hinder a team's productivity over time because resources may have to be diverted to address the suboptimal solutions or design choices made earlier. There's no fixed timeframe for addressing technical debt in Scrum—it's up to the team to decide when and how to tackle it, considering their goals and standards for the product. Lastly, contrary to enhancing the development process, technical debt often introduces uncertainty and can slow things down.",
  },
  {
    id: "ff962f4f-7c3e-4fe8-af77-dbd6f3b53f26",
    chapter: 3,
    question:
      "True or False: The ordering of Product Backlog items is not a part of Product Backlog refinement.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Product Backlog refinement is an ongoing process in Scrum where the Product Owner and the Developers collaborate to add detail, estimates, and order the Product Backlog items. Ordering Product Backlog items is indeed a key aspect of Product Backlog refinement, as it helps ensure that the most valuable and important items are prioritized and ready for inclusion in upcoming Sprints.",
  },
  {
    id: "e69d9af6-625c-4dab-ad07-45f863885dd3",
    chapter: 3,
    question:
      "True or False: It is recommended for all Product Backlog items to have the same level of detail, regardless of their priority.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide recommends that the Product Backlog items closer to the top (those of higher priority) have more detail than those further down. This is because high priority items are more likely to be included in upcoming Sprints, so they need to be well understood and ready for selection in the Sprint Planning. Items further down the Product Backlog will become clearer and more detailed as they move up and closer to implementation. This approach reduces unnecessary work on items that might not be implemented and focuses effort on the highest value items.",
  },
  {
    id: "8e1add2a-234c-4f8d-b9e6-afbb1e4d9848",
    chapter: 3,
    question:
      "True or False: The Scrum Master has the final say over the Definition of Done in Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "False. According to the Scrum Guide, the Definition of Done (DoD) is a shared understanding between the Scrum Team about what it means for work to be Done.",
  },
  {
    id: "0004ee6a-083b-4480-afc7-a86266f8a6b7",
    chapter: 3,
    question: "Who creates the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Scrum Team",
      "The Product Owner",
      "The Developers",
      "Stakeholders",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Team is responsible for defining the Sprint Goal during Sprint Planning. The Sprint Goal is a short, concise objective that provides guidance and focus for the Developers during the Sprint. It is determined collaboratively by the Scrum Team, which includes the Product Owner, the Scrum Master, and the Developers. The Sprint Goal reflects the purpose of the Sprint and serves as a unifying factor for the team to align their work and make decisions during the Sprint.",
  },
  {
    id: "4da30682-cb33-43bd-ba42-56c8e897403b",
    chapter: 3,
    question:
      "True or False: The Product Owner is solely responsible for creating the Sprint Goal before Sprint Planning.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Goal is created during the Sprint Planning event by the entire Scrum Team, which includes the Product Owner. The Product Owner collaborates with the Developers and the Scrum Master to define the goal based on the Product Backlog items selected for the Sprint. Therefore, it is incorrect to state that the Product Owner is solely responsible for creating the Sprint Goal.",
  },
  {
    id: "d8676265-d753-4944-b42f-ccde3ddf746f",
    chapter: 3,
    question:
      "Which statements about Scrum are true?\n(choose the best two answers)",
    options: [
      "The Scrum Team is responsible for formulating a Sprint Goal.",
      "Modifying existing Product Backlog items in the Sprint Backlog will always render the Sprint Goal invalid.",
      "All Product Backlog items in the Sprint must necessarily relate to the Sprint Goal.",
      "The Scrum Master is solely responsible for creating the Sprint Goal.",
      "For each product, there is a single Product Owner.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 4],
    isMultiSelect: true,
    explanation:
      "In Scrum, the entire team collaborates to set a Sprint Goal during Sprint Planning, guiding the work for that Sprint. Also, each product should have a single Product Owner who manages the Product Backlog and maximizes the value of the product and the team's work. Alterations in the Sprint Backlog don't automatically invalidate the Sprint Goal, not all items in the Sprint must directly align with the Sprint Goal, and the Scrum Master alone does not create the Sprint Goal.",
  },
  {
    id: "452b7129-6b21-4f58-ad20-afbedd7bebe3",
    chapter: 3,
    question:
      "True or False: Scrum solely encompasses all the techniques and practices required for product development.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum is a framework, not a technique or practice. It provides a set of rules, accountabilities, events, and artifacts that guide the iterative and incremental development of complex products. Scrum can be used in conjunction with various techniques and practices, such as user stories, burndown charts, and daily stand-up meetings, to enhance its effectiveness. Therefore, it is correct to say that Scrum serves as a container for other techniques and practices.",
  },
  {
    id: "4e465c43-360c-45ca-ac4d-e8f0025c5d76",
    chapter: 3,
    question:
      "True or False: The primary purpose of the Daily Scrum is for the Developers to synchronize their activities and make commitments to each other.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum is an event in Scrum where the Developers inspect their progress towards the Sprint Goal and adapt their plan for the next 24 hours.",
  },
  {
    id: "e2096fe3-cda4-4a5a-847f-77bdfc15aad1",
    chapter: 3,
    question:
      "Which Scrum event is the most appropriate for inspecting and adapting the Definition of Done?\n(choose the best answer)",
    options: [
      "Scrum of Scrums Meeting",
      "Sprint Retrospective",
      "Product Backlog Refinement",
      "Scrum of Scrums Meeting",
    ],
    correctAnswer: 1,
    explanation:
      "The most suitable event to inspect and adapt the Definition of Done is the Sprint Retrospective. The Sprint Retrospective is a dedicated opportunity for the Scrum Team to reflect on the previous Sprint and identify ways to improve. It provides a forum for inspecting the team's processes, practices, and tools, including the Definition of Done. By reviewing the Definition of Done during the Sprint Retrospective, the Scrum Team can identify any gaps or areas for enhancement and make adjustments to ensure a shared understanding and continuous improvement.",
  },
  {
    id: "e75bd6ce-6f53-4ace-966d-991a044075d9",
    chapter: 3,
    question:
      "Which of the following events require the participation of the entire Scrum Team?\n(choose the best three answers)",
    options: [
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Review",
      "Sprint Retrospective",
      "Release Planning",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      "The three Scrum events that necessitate the involvement of all members of the Scrum Team, including the Product Owner, Developers, and Scrum Master, are Sprint Planning, Sprint Review, and Sprint Retrospective. These meetings are designed for the team to plan the work for the upcoming Sprint, review the completed work, and retrospect on the process respectively. The Daily Scrum is primarily for the Developers, and Release Planning is not considered an official Scrum event.",
  },
  {
    id: "dd0bbf9d-69f6-4164-b40c-e05ca5df041c",
    chapter: 3,
    question:
      "Scrum is based on lean thinking. Which of the following is a lean principle?\n(choose the best answer)",
    options: [
      "Perform a comprehensive requirements analysis and release a complete product satisfying all of the elicited requirements.",
      "Release the product to the market at least once per month.",
      "Construct a minimum product version with just the essential features and use it to collect feedback from the market before incorporating additional capabilities.",
      "Start development without any specific features in mind, allowing the product to evolve naturally.",
    ],
    correctAnswer: 2,
    explanation:
      "This is closely related to the Lean principle of 'Build-Measure-Learn' or 'validated learning', which aims to minimize project risk and waste by getting quick market feedback and learning from it. It’s also aligned with the concept of Minimum Viable Product (MVP), which involves creating a product with enough features to attract early-adopter customers and validate a product idea early in the product development cycle. This principle promotes iterative development, where additional features and changes are driven by feedback from users of the product's earlier versions.",
  },
  {
    id: "9d9c0e59-5dcd-468f-b7d0-75e6d44a4e9b",
    chapter: 3,
    question:
      "True or False: Scrum emphasizes an iterative, incremental approach to product development.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Scrum is built upon an iterative, incremental approach. It focuses on delivering value in small increments through the use of Sprints, where work is divided into manageable iterations. Each Sprint produces a potentially releasable Increment, allowing for continuous feedback, inspection, and adaptation. By working iteratively and incrementally, Scrum enables flexibility, transparency, and the ability to respond to changing requirements effectively. Therefore, the statement is true.",
  },
  {
    id: "f3d9b5f2-e326-43a1-842b-ee283592cc3b",
    chapter: 3,
    question:
      "True or False: According to Scrum, individual Developers must take ownership of each Product Backlog item in the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the entire Scrum Team, including the Developers, is responsible for the Sprint Backlog. While the Developers collaborate to determine how to best accomplish the work, individual ownership of Product Backlog items is not prescribed. The Developers collectively own the Sprint Backlog and collaborate to deliver the items committed to in the Sprint. Therefore, the statement is false.",
  },
  {
    id: "2672661f-d9cb-4c66-8b5d-192436b79d94",
    chapter: 3,
    question:
      "What is the maximum duration of Sprint Planning for a two-week Sprint?\n(choose the best answer)",
    options: ["6 hours", "4 hours", "8 hours", "2 hours"],
    correctAnswer: 2,
    explanation:
      "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. Given the available options, the best answer is 8 hours.",
  },
  {
    id: "81212a07-45eb-49a1-ab05-463b8bd418f4",
    chapter: 3,
    question:
      "True or False: According to Scrum, Scrum Teams are typically not cross-functional.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Scrum Teams are indeed cross-functional. This means that a Scrum Team’s members have all the skills necessary to create value each Sprint.",
  },
  {
    id: "a665fabd-3fe8-4d8b-8594-a42345c7d083",
    chapter: 3,
    question:
      "When does Product Backlog refinement occur in Scrum?\n(choose the best answer)",
    options: [
      "Before the Sprint Review",
      "During the Daily Scrum",
      "During the Sprint, in preparation for future Sprints",
      "After the Sprint Retrospective",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, Product Backlog refinement occurs during the Sprint, in preparation for future Sprints. It is an ongoing activity that ensures that the Product Backlog is constantly updated, ordered, and refined to provide the necessary transparency and understanding for the upcoming work. The refinement process involves reviewing, revising, and estimating Product Backlog items to ensure they are well-understood and ready for inclusion in future Sprints.",
  },
  {
    id: "9d97c172-1861-4307-859d-20612da97c36",
    chapter: 3,
    question:
      "Who is responsible for deciding the Sprint length in Scrum?\n(choose the best answer)",
    options: [
      "Before the Sprint Review",
      "During the Daily Scrum",
      "The Scrum Team",
      "After the Sprint Retrospective",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Team, which includes the Product Owner, the Developers, and the Scrum Master, collectively decide the length of the Sprint. Once determined, the Sprint length should remain consistent throughout the development effort to provide a predictable rhythm. While the team can reconsider the Sprint length, for example during a Sprint Retrospective, frequent changes are not recommended as they may disrupt this rhythm and predictability.",
  },
  {
    id: "663c4915-861e-4f80-abc5-44b7c8a89969",
    chapter: 3,
    question:
      "If the duration of the Sprint is two weeks, what is the maximum permissible duration of the Sprint Planning event according to Scrum?\n(choose the best answer)",
    options: ["4 hours", "8 hours", "2 hours", "6 hours"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "a840691e-ba1a-4c41-8a8a-c9cfd7a28774",
    chapter: 3,
    question:
      "What is the primary accountability of the Product Owner in Scrum?\n(choose the best answer)",
    options: [
      "Facilitating the Sprint Review meetings",
      "Providing technical expertise to the Developers",
      "Maximizing the value of the product resulting from the work of the Scrum Team",
      "Creating the detailed implementation plans for the Sprint",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. This includes managing the Product Backlog, ensuring it is transparent and ordered, and making decisions regarding the content and priority of the items. The Product Owner collaborates with stakeholders to understand their needs and communicates the product vision to the Scrum Team. While the Product Owner is responsible for facilitating the development process, they are not accountable for managing the development work.",
  },
  {
    id: "8305d527-1048-453c-8b3a-fb9c84e459cb",
    chapter: 3,
    question:
      "When is the Increment considered valuable in Scrum?\n(choose the best answer)",
    options: [
      "When it is usable",
      "When it is delivered on time",
      "When it has all the features that the Scrum Team expected",
      "When it has all the features that the stakeholders expected",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Increment is a key artifact of Scrum. It is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. The Increment must be usable, meaning it must be in a potentially releasable state and meet the Definition of Done. Usability is a crucial aspect of the Increment because it allows stakeholders to use and provide feedback on the product, enabling inspection and adaptation.",
  },
  {
    id: "ec5855c1-5155-4185-96ce-26eed73117ad",
    chapter: 3,
    question:
      "True or False: If the Scrum Team is collocated, the Daily Scrum can be skipped on days when there are no important updates.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the purpose of the Daily Scrum is for the Developers to synchronize activities, create a plan for the next 24 hours, and identify any obstacles that may impede progress. It is a time-boxed event that occurs every day during the Sprint, regardless of the team's location. Even if the team is collocated, it is still important to conduct the Daily Scrum to ensure transparency, collaboration, and continuous progress towards the Sprint Goal.",
  },
  {
    id: "f36425e1-b1cf-45cd-a28d-368e794a9933",
    chapter: 3,
    question:
      "Which factors may the Product Owner consider when maximizing value? Select all that apply.\n(choose all that apply)",
    options: [
      "Customer satisfaction",
      "Cost of development",
      "Market competition",
      "Number of user logins",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      "The Product Owner, while maximizing value, can consider various factors such as customer satisfaction, development costs, market competition, and user engagement metrics like the number of logins. Customer satisfaction can lead to product loyalty and recommendations, while understanding development costs aids in balancing expenses against value. Being aware of market competition helps prioritize features that set the product apart. Lastly, metrics like user logins can indicate how engaged users are with the product, but their relevance may vary depending on the specific product and its usage.",
  },
  {
    id: "78a18c52-1489-4bc1-aadc-001013d93fd5",
    chapter: 3,
    question: "How can Scrum be best described?\n(choose the best answer)",
    options: [
      "A software development methodology",
      "A project management framework",
      "An agile product development framework",
      "A quality assurance framework",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum is a framework for managing and delivering complex products. By promoting transparency, inspection, and adaptation, Scrum helps teams uncover issues, impediments, and risks early on, allowing them to find the best solutions collectively.",
  },
  {
    id: "c7feca5e-11cc-44bf-be5b-9160d91b5d87",
    chapter: 3,
    question: "When does Sprint Planning occur?\n(choose the best answer)",
    options: [
      "At the discretion of the Product Owner.",
      "As determined by the Developers consensus.",
      "At the start of each Sprint.",
      "During the first week of each Sprint.",
    ],
    correctAnswer: 2,
    explanation:
      "Sprint Planning occurs at the start of each Sprint. It is a time-boxed event where the Scrum Team collaboratively plans the work to be done in the upcoming Sprint. During this event, the Product Owner discusses the Product Backlog items with the Scrum Team, and together they select the items to be worked on in the Sprint. The Developers then creates a plan for how to accomplish the selected Product Backlog items.",
  },
  {
    id: "b5d146e0-5636-4cbb-90b1-67479cd488cc",
    chapter: 3,
    question:
      "True or False: In complex environments, it is better to make a decision despite incomplete information than to not make any decision at all.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "In complex environments, where there is uncertainty and incomplete information, making a decision is often preferable to not making any decision at all. This is because inaction can lead to delays and missed opportunities. Scrum encourages empiricism, where decisions are made based on observation and experimentation, allowing for adjustments as new information becomes available.",
  },
  {
    id: "736e149e-901a-4d48-bd93-370005f02d4e",
    chapter: 3,
    question:
      "Which accountability is committed to creating creating any aspect of a usable Increment each Sprint?\n(choose the best answer)",
    options: [
      "Scrum Master",
      "Product Owner",
      "The Developers lead",
      "Developers",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Developers Developers are the people in the Scrum Team that are committed to creating any aspect of a usable Increment each Sprint.",
  },
  {
    id: "d0b1548c-9ec6-4952-9d89-9a52b881c40e",
    chapter: 3,
    question:
      "True or False: The Sprint Goal is established during the Sprint Planning event.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Sprint Goal is a key element of Scrum that provides focus and direction to the Scrum Team during the Sprint. It serves as an objective that guides the team's work and helps them understand why the Sprint is valuable. The whole Scrum Team then collaborates to define a Sprint Goal that communicates why the Sprint is valuable to stakeholders. The Sprint Goal must be finalized prior to the end of Sprint Planning.",
  },
  {
    id: "d7f9a77b-eb1c-43cc-8d98-eb3192f4f5fc",
    chapter: 3,
    question: "Who attends the Sprint Review?\n(choose the best answer)",
    options: [
      "The Scrum Team & stakeholders",
      "The entire organization",
      "The Product Owner & stakeholders",
      "The Scrum Master, Product Owner, and stakeholders",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Review is attended by the Scrum Team and stakeholders. It is an informal event held at the end of the Sprint where the Scrum Team presents the Increment and seeks feedback from stakeholders. The purpose is to inspect the Increment and adapt the Product Backlog if necessary, based on stakeholder input and market changes.",
  },
  {
    id: "0d9601cf-5f5c-42bf-b170-875095d026c7",
    chapter: 3,
    question:
      "How long is the timebox for the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "1 hour or less",
      "3 hours or less",
      "6 hours or less",
      "8 hours or less",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Retrospective concludes the Sprint. It is timeboxed to a maximum of three hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "63bf9214-b913-49cb-9c0d-3a6aff927e75",
    chapter: 3,
    question:
      "True or False: Specific practices for refining the Product Backlog refinement are detailed in the Scrum Guide.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum provides guidance on the events, accountabilties, and artifacts, but it does not prescribe specific practices for refining the Product Backlog. The Scrum Guide states that refinement is an ongoing activity throughout the Sprint. The Scrum Team collaborates to ensure that the Product Backlog items are well understood, appropriately ordered, and ready for selection in the Sprint Planning event.",
  },
  {
    id: "56ee9c93-f425-4b98-a886-f4179867d189",
    chapter: 3,
    question:
      "What is the single source of work undertaken by the Scrum Team?\n(choose the best answer)",
    options: [
      "The Sprint Master",
      "The Scrum Team, stakeholders, and external subject matter experts",
      "The Product Backlog",
      "The Scrum Master, Product Owner, and stakeholders",
      "The entire organization",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Guide states that the Product Backlog is the single source of work undertaken by the Scrum Team. It is a dynamic, ordered list of all the requirements, features, enhancements, and fixes that constitute the product. The Product Backlog is owned and maintained by the Product Owner, and it represents the requirements and priorities for the product.",
  },
  {
    id: "6361fa9e-7ef1-4b94-bbab-4523fe75deda",
    chapter: 3,
    question:
      "Which of the following is not an accountability in Scrum?\n(choose the best two answers)",
    options: [
      "Product Owner",
      "Scrum Master",
      "Team Leader",
      "Developers",
      "Stakeholders",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Scrum Team is made up of three accountabilities: the Product Owner, the Scrum Master and the Developers. Scrum does not recognize Product Manager or Team Leader accountabilities within the framework.",
  },
  {
    id: "3a30d401-130e-4eb3-bf61-21b46d7667af",
    chapter: 3,
    question:
      "What is the role of the Sprint Backlog in Scrum?\n(choose the best answer)",
    options: [
      "The Product Owner manages it",
      "It is the Scrum Master's responsibility",
      "It is the Developers' plan for the Sprint",
      "Each of its items must be estimated in hours",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the correct statement about the Sprint Backlog is that it is the Developers' plan for the Sprint. The Developers creates the Sprint Backlog during Sprint Planning to forecast the work needed to deliver the Sprint Goal. The Sprint Backlog is a dynamic list of Product Backlog items selected for the Sprint, along with a plan to achieve them and the Sprint Goal.",
  },
];

// Practice Test #4 — 181 questions
export const questionsPracticeTest4: Question[] = [
  {
    id: "342f1ad5-8acc-4f8f-bfed-3203a257da41",
    chapter: 4,
    question:
      "Which events are time-boxed according to the Scrum Guide?\n\n A. Sprint 0.  \nB. Project Retrospective.  \nC. Sprint Review.  \nD. Design Sprint.  \nE. Stabilization.  \nF. The Sprint.  \nG. Daily Scrum.  \n\n(choose the best answer)",
    options: [
      "A, C and F are TRUE",
      "B, C and E are FALSE",
      "C, D and G are FALSE",
      "C, F and G are TRUE",
      "D, E and F are TRUE",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Guide states that all Scrum Events are time-boxed. The Sprint (one month or less), Sprint Planning (maximum eight hours for a one-month sprint; usually shorter for shorter Sprints), Daily Scrum (15-minutes), Sprint Review (maximum four hours for a one-month Sprint; usually shorter for shorter Sprints), and the Sprint Retrospective (maximum three hours for a one-month Sprint; usually shorter for shorter Sprints).",
  },
  {
    id: "81ca1ac9-87d2-48d0-ac0a-cc7bc44a5f06",
    chapter: 4,
    question:
      "The Scrum Team is composed of: \n\nI. The Scrum Master \nII. The Developers \nIII. The Product Owner \nIV. Quality Analyst \nV. Team Project Manager \nVI. UX Designer \n\n(choose the best answer)",
    options: [
      "I and III are FALSE",
      "I, II and IV are TRUE",
      "I, II, and III are TRUE",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Team consists of the Scrum Master (promotes and supports Scrum), the Product Owner (maximizes the value of the product resulting from the work of the Scrum Team), and the Developers (committed to creating any aspect of a usable Increment each Sprint).",
  },
  {
    id: "93157df1-76d9-4541-bbc2-9d7156f7985c",
    chapter: 4,
    question: 'True or False: Scrum has a role called "project manager."',
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "A Scrum Team comprises only of a Product Owner, Developers, and a Scrum Master.",
  },
  {
    id: "10b22421-b1ee-4389-b684-70b8f9acd18c",
    chapter: 4,
    question:
      "What does it mean to say that an event has a time-box?\n(choose the best answer)",
    options: [
      "The event must happen at a set time.",
      "The event can take no more than a maximum amount of time (upper limit).",
      "The event must happen by a given time.",
      "The event must take at least a minimum amount of time (lower limit).",
      "The event might have to finish given a maximum amount of time.",
    ],
    correctAnswer: 1,
    explanation:
      "Time-boxed events are events that have a maximum duration (upper limit).",
  },
  {
    id: "0971bed9-8e37-4bb3-9929-be32dbfbb83d",
    chapter: 4,
    question:
      'A project stakeholder asks the Developers to add a "very important" item to a Sprint already in progress. What should the Developers do?\n(choose the best answer)',
    options: [
      "Automatically, schedule the item to the next Sprint.",
      'Since it is "very important" and agile is about "welcoming change", add the item to the current.',
      "Sprint without any adjustments.",
      "Inform the Product Owner so he/she can work with the stakeholder.",
      "Add the item to the current Sprint and drop an item of equal size.",
    ],
    correctAnswer: 3,
    explanation:
      "During the Sprint, the scope may be clarified and renegotiated with the Product Owner as more is learned. Further, the Sprint Backlog is a plan by and for the Developers.",
  },
  {
    id: "dac03789-3700-4109-83b4-a33b3164d7ff",
    chapter: 4,
    question: "When does the next Sprint begin?\n(choose the best answer)",
    options: [
      "Immediately after the conclusion of the previous Sprint.",
      "When the Product Owner is ready.",
      "Immediately following the next Sprint Planning.",
      "Next week.",
      "When the Project Manager says so.",
    ],
    correctAnswer: 0,
    explanation:
      "A new Sprint starts immediately after the conclusion of the previous Sprint.",
  },
  {
    id: "5d7a548f-14ef-432c-9eb1-4b3bcb4ca08f",
    chapter: 4,
    question: "Who creates the Definition of Done?\n(choose the best answer)",
    options: [
      "The Scrum Team.",
      "The development organization and/or the Scrum Team.",
      "The Product Owner.",
      "The Scrum Master.",
    ],
    correctAnswer: 1,
    explanation:
      "If the Definition of Done for an increment is part of the organization's standards, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriately for the product.",
  },
  {
    id: "847a2824-dff1-4ab9-a7c2-0f33eeee7041",
    chapter: 4,
    question:
      "Which of the following best describes the responsibility of the Scrum Master with regards to the Daily Scrum?\n(choose the best answer)",
    options: [
      "Manage turns.",
      "The Scrum Master teaches the Developers to keep the Daily Scrum within the 15-minute time- box.",
      "Make sure that all Developers answer the 3 questions correctly.",
      "Make sure the Developers discuss about the technical stuff.",
      "All answers apply.",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Master serves the Scrum Team ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.",
  },
  {
    id: "aff67ea6-5c9b-40ed-bfd5-0da50f62aba4",
    chapter: 4,
    question:
      "Who is accountable for developing and explicitly communicating the Product Goal?\n(choose the best answer)",
    options: [
      "The Project Manager",
      "The Developers",
      "The Scrum Master",
      "The Product Owner",
      "The Product Manager",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Owner is accountable for effective Product Backlog management, which includes Developing and explicitly communicating the Product Goal.",
  },
  {
    id: "a4caaafa-60b1-4d61-bfb7-c26d2dabf31b",
    chapter: 4,
    question:
      "What is the time-box for the Daily Scrums?\n(choose the best answer)",
    options: [
      "Three hours.",
      "15 minutes.",
      "It should be scheduled every day at the same time to avoid complexity.",
      "It depends on the team size.",
      "15 minutes for a one-month sprint (usually shorter for shorter sprints).",
    ],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team, independent of the Sprint's length.",
  },
  {
    id: "460c63dd-8560-444c-8317-d88eed91e960",
    chapter: 4,
    question: "Who must attend the Daily Scrum?\n(choose the best answer)",
    options: [
      "The Scrum team.",
      "The Scrum Master, but not the Product Owner.",
      "The Developers.",
      "The Developers and the Scrum Master.",
      "The Product Owner and the Developers.",
      "The Scrum Team and key stakeholders.",
    ],
    correctAnswer: 2,
    explanation:
      "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. It is held simultaneously and placed every working day of the Sprint to reduce complexity. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.",
  },
  {
    id: "f1feb28f-f575-4fa8-b5d0-958ba71e4a3d",
    chapter: 4,
    question:
      "The Developers should have all the skills needed to:\n(choose the best answer)",
    options: [
      "Deliver the project given the Iron Triangle restrictions.",
      "Do all of the development work and most testing, except for specialized testing, such as security or performance.",
      "Deliver usable Done Increment.",
      "Do all of the development and testing work.",
    ],
    correctAnswer: 2,
    explanation:
      "The specific skills needed by the Developers are often broad and will vary with the domain of work. However, Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value for each Sprint.",
  },
  {
    id: "bc1692b5-e83e-41eb-9350-9d6adc65fbcd",
    chapter: 4,
    question: "Scrum is:\n(choose the best answer)",
    options: [
      "A body of knowledge with the best practices for agile software development.",
      "A defined and predictive process founded on empirical process control theory or empiricism.",
      "A lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.",
      "A complete methodology that defines how to deliver complex products.",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum is not a process, technique, or definitive method. Rather, it is a framework to employ various processes and techniques.",
  },
  {
    id: "e01576c6-f3c1-4b8a-a0f0-cc320b38ad4f",
    chapter: 4,
    question:
      "How much work must the Developers do to a Product Backlog item it selects for a Sprint?\n(choose the best answer)",
    options: [
      "Codification and some testing, depending on the context.",
      "The work is necessary to deliver a usable Increment of the Done product at the end of each Sprint, as agreed with the Product Owner during Sprint Planning.",
      "The best they can during the Sprint.",
      "Analysis, design, codification, testing, transition and documentation.",
    ],
    correctAnswer: 1,
    explanation:
      "The purpose of each Sprint is to deliver a usable Done Increment.",
  },
  {
    id: "19eb8512-5c0c-4298-b77d-4953f4eee3f6",
    chapter: 4,
    question:
      "True or False: The Scrum Team must include at least one high-priority process improvement, identified in the Sprint Retrospective in the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint. Thus, such a rule does not exist.",
  },
  {
    id: "abc95660-d2bf-4ed0-ad09-8e421bcfa162",
    chapter: 4,
    question:
      "True or False: Practices to forecast progress can replace empiricism.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Various practices exist to forecast progress, like burn-downs, burn-ups, or cumulative flows. While proving useful, these do not replace the importance of empiricism. In complex environments, what will happen is unknown. Only what has already happened may be used for forward-looking decision-making.",
  },
  {
    id: "ba9e5155-9c81-43f1-9c39-e9da0b9cfa09",
    chapter: 4,
    question: "The Sprint Review is ...\n(choose the best answer)",
    options: [
      "It is an event to monitor and control the Developers' activities.",
      "It is a demonstration at the end of the Sprint in which all the stakeholders can check on the work done.",
      "It is held at the end of the Sprint to inspect the outcome of the Sprint and determine future adaptations.",
    ],
    correctAnswer: 2,
    explanation:
      "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.",
  },
  {
    id: "9a74fb98-d12a-4b1e-806f-c266367921d4",
    chapter: 4,
    question:
      "When does a Developer become the sole owner of a Sprint Backlog item?\n(choose the best answer)",
    options: [
      "At the second part of the Sprint planning meeting.",
      "During Daily Scrums.",
      'Never. All the Sprint Backlog Items are always "owned" by the entire Scrum Team. They might end up being implemented by an individual Developer, but the entire Scrum Team will keep "owning" the Sprint Backlog work.',
      "Whenever a team member can accommodate more work.",
      "During Pair Negotiation.",
    ],
    correctAnswer: 2,
    explanation:
      "The entire Scrum Team collectively owns the Sprint Backlog and its items. Individuals can not claim ownership over a Sprint Backlog Item as it hinders collaboration.",
  },
  {
    id: "c6fc88d6-a1cc-4700-9848-071c4db8d9c7",
    chapter: 4,
    question:
      "Scrum is based upon a specific type of process control. What is its name?\n(choose the best answer)",
    options: ["Adaptive", "Complex", "Empiricism", "Flexible"],
    correctAnswer: 2,
    explanation:
      "Scrum is founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience and making decisions based on observation. Lean thinking reduces waste and focuses on the essentials.",
  },
  {
    id: "32ce86c9-d498-4169-a5b4-11894eb28643",
    chapter: 4,
    question:
      "The Product Owner is accountable for ...\n(choose the best answer)",
    options: [
      "Making sure the project is delivered within the Iron Triangle restrictions.",
      "Protecting the Developers from being distracted by external stakeholders.",
      "Maximizing the value of the product resulting from the work of the Scrum Team.",
      "Managing the Developers.",
    ],
    correctAnswer: 2,
    explanation:
      "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. This includes managing the Product Backlog, setting priorities, and making decisions that will deliver the most valuable features to customers and stakeholders. The Product Owner works closely with the Scrum Team to ensure that the Increment meets the needs of the users and the organization and represents the highest possible value at the end of each Sprint.",
  },
  {
    id: "17918427-35e6-4bfe-a4a1-bd1458b66b72",
    chapter: 4,
    question:
      "Which are the three pillars of empiricism?\n(choose the best answer)",
    options: [
      "Flow, Talent, Quality",
      "Quality Maintenance, Eliminating Waste, Kaizen.",
      "Collaboration, Kaizen, Eliminating Waste.",
      "Inspection, Transparency, Adaptation.",
      "Plan, Do, Check",
    ],
    correctAnswer: 3,
    explanation:
      "Three pillars uphold every implementation of empiricism: transparency, inspection, and adaptation.",
  },
  {
    id: "4be03a0d-5b28-4430-bc02-c797a5dcf4fd",
    chapter: 4,
    question: "What is Management's role in Scrum?\n(choose the best answer)",
    options: [
      "Micromanage the Developers.",
      "Make sure the Developers is producing giving the organization's expectations.",
      "Support the Scrum Team, giving them healthy working conditions, insights, and information into high-value product and system capabilities. Further, it should support the Scrum Master regarding empirical product development and increase the effectiveness of Scrum in the organization.",
    ],
    correctAnswer: 2,
    explanation:
      "Management has no active role in the actual product development through Scrum. However, management external to the Scrum team is critical in setting the vision and strategy to guide the organization's overall direction.",
  },
  {
    id: "dfe3e689-4913-4fea-90f8-362c74715a28",
    chapter: 4,
    question:
      "True or False: The Sprint's purpose is to create a Done, useable product Increment.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Sprints are the heartbeat of Scrum, where ideas are turned into value through the development of a Done, usable product Increment.",
  },
  {
    id: "236483e7-1724-4100-b500-9fad3e741e52",
    chapter: 4,
    question:
      "Which of the below are accountabilities on a Scrum Team? \n\nI. Developers. \nII. Product Owner. \nIII. Users \nIV. Scrum Master \nV. Quality Manager  \n\n(choose the best answer)",
    options: [
      "I, II and III",
      "I,II and IV",
      "II, IV and V",
      "II, III and V",
      "III, IV and V",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Team consists of a Product Owner, Developers, and a Scrum Master.",
  },
  {
    id: "6f12cf60-a89a-4b80-996c-e0b9aef6fe04",
    chapter: 4,
    question: "When might a Sprint be canceled?\n(choose the best answer)",
    options: [
      "When the Sprint Goal becomes obsolete.",
      "When the Developers recognize that they won't be done with the Sprint Backlog by the end of the Sprint.",
      "When the marketing or sales reps come up with new business opportunities.",
    ],
    correctAnswer: 0,
    explanation:
      "A Sprint can be canceled before the Sprint time-box is over. A Sprint will be canceled if the Sprint Goal becomes obsolete. That might occur if the company changes direction or if market or technology conditions change.",
  },
  {
    id: "aa1e29ab-3b80-49da-8f92-c5406e0c4471",
    chapter: 4,
    question:
      "Who is responsible for creating the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The whole Scrum Team",
      "The Developers",
      "The key stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Goal is created collaboratively by the entire Scrum Team during the Sprint Planning event. It is a shared understanding of what the team aims to achieve during the Sprint. The Product Owner provides input regarding the priorities and desired outcomes, while the Developers contribute their insights on what is technically feasible and how the work can be accomplished. The Scrum Master facilitates the discussion and ensures that the Sprint Goal aligns with the overall product vision and goals. The involvement of the entire Scrum Team in creating the Sprint Goal promotes transparency, collaboration, and commitment to the Sprint's objectives.",
  },
  {
    id: "7fddbac3-5884-47f5-a42e-2663263d4124",
    chapter: 4,
    question:
      "Why is the Daily Scrum held at the same time and same place?\n(choose the best answer)",
    options: [
      "Because the Project Manager requires.",
      "To increase complexity.",
      "Makes it easier to arrange room scheduling.",
      "To reduce complexity.",
    ],
    correctAnswer: 3,
    explanation:
      "The Daily Scrum is held at the same time and place each day to reduce complexity.",
  },
  {
    id: "db440a6f-a95e-4836-8253-309c3b0516eb",
    chapter: 4,
    question:
      "Which of the following four behaviors demonstrate that a team is NOT following the Scrum Guide? \n\nI. Project Stakeholders attend the Daily Scrum to check progress. \nII. External stakeholders participate during Sprint Planning, assisting the Developers in turning a Product Backlog item into an Increment via a complete and detailed Sprint Backlog. \nIII. The Scrum Team is structured and empowered by the organization to organize and manage its work. \nIV. The Developers work given their functional description such as analyst, developer, and tester. \nV. Developers individually select their work during the Sprint. \nVI. The Developers own the Sprint Backlog.  \n\n(choose the best answer)",
    options: [
      "I, II, IV and V",
      "I, II, III and IV",
      "II, III, IV, and VI",
      "III, IV, V and VI",
      "III, IV, V and VI",
    ],
    correctAnswer: 0,
    explanation:
      'I- The Daily Scrum is an internal meeting for the Developers to inspect progress toward the Sprint Goal and adjust their plan for the next 24 hours. While passive observation by stakeholders might occasionally happen, actively using the Daily Scrum as a forum for stakeholders to "check progress" undermines the event\'s purpose and can lead to micromanagement—something that is against the principles of self-management in Scrum.\n\nII- During Sprint Planning, the entire Scrum Team collaborates on understanding the work of the Sprint. The Developers define the work for the first days of the Sprint. The Sprint Backlog emerges during the Sprint. \n\nIII- Scrum Team members self-organize. \n\nIV- Scrum recognizes no sub-teams within the Scrum Team. \n\nV- The Developers collaboratively plan work execution. \n\nVI- The Sprint Backlog is owned by the Developers.',
  },
  {
    id: "4bf80b97-8e87-4575-9726-170697d64a86",
    chapter: 4,
    question:
      "Which size should the Scrum Team have?\n(choose the best answer)",
    options: [
      "3 to 9",
      "Typically, 10 or fewer people",
      "at least, 5",
      "5 plus or minus 2",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically ten or fewer people. In general, we have found that smaller teams communicate better and are more productive. If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner.",
  },
  {
    id: "4b9d6c01-563d-43bf-8a40-18f0e8661763",
    chapter: 4,
    question:
      "Which of the following best describes transparency?\n(choose the best answer)",
    options: [
      "The process should be visible and understood by stakeholders and project managers.",
      "The emergent process and work must be visible to those performing the work as well as those receiving the work.",
      "Significant aspects of the process must be visible to stakeholders and project managers.",
      "The whole process should be visible to everyone.",
    ],
    correctAnswer: 1,
    explanation:
      "Transparency in Scrum refers to the visibility of the Scrum Team's processes, artifacts, and progress. It ensures that everyone involved, both within the team and external stakeholders, has a clear understanding of the work being done, the status of the project, and any impediments or issues that may arise. This transparency fosters collaboration, trust, and effective decision-making. It allows the Scrum Team to inspect and adapt their work and enables stakeholders to provide valuable feedback and make informed decisions based on the available information.",
  },
  {
    id: "d49809ac-3940-4b40-9f0a-c07157d1e658",
    chapter: 4,
    question:
      "Which of the following statements is FALSE?\n(choose the best answer)",
    options: [
      "The Sprint Backlog emerges during the Sprint.",
      "At any moment during the Sprint, the Developers might ask the Product Owner for help clarifying or optimizing the Sprint.",
      "The Sprint Backlog is defined during the Sprint Planning meeting and must not be changed during the Sprint.",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Backlog is a plan with enough detail that changes in progress can be understood in the Daily Scrum. The Development Team modifies the Sprint Backlog throughout the Sprint, and the Sprint Backlog emerges during the Sprint. This emergence occurs as the Development Team works through the plan and learns more about the work needed to achieve the Sprint Goal.",
  },
  {
    id: "4e605b03-74e4-4a44-8c02-4cb0a9b27bed",
    chapter: 4,
    question: "The Product Backlog is ordered by:\n(choose the best answer)",
    options: [
      "Technical Dependencies.",
      "Size.",
      "Risk.",
      "The factors deemed appropriate by the Product Owner to maximize value delivery.",
      "Just In Time",
    ],
    correctAnswer: 3,
    explanation:
      "It is up to the Product Owner to decide how to order the ProIt is up to the Product Owner to decide how to order the Product Backlog to maximize the value of the product resulting from the work of the Scrum Team.duct Backlog for maximizing the value of the product resulting from the work of the Scrum Team.",
  },
  {
    id: "b66101a3-53bd-4fcd-9b43-b6016a07ab37",
    chapter: 4,
    question:
      "What are Developers supposed to do when they have trouble working on a Product Backlog Item because they do not understand it?\n(choose the best answer)",
    options: [
      "Ask the Scrum Master to remove this restriction.",
      "Do as much of the item as feasible and, in the Sprint Review meeting, produce a lighter perception of what is required.",
      "Delay the item to the next Sprint.",
      "Discuss with the Product Owner to see better understand the work to be done.",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Owner is accountable for clearly communicating Product Backlog items. Thus, the Developers should talk to him or her.",
  },
  {
    id: "a699f70e-f927-4e97-ab33-8265579f7b4e",
    chapter: 4,
    question: "True or False: In Scrum, one must use User Stories.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Using User Stories to form the Product Backlog items might be useful. However, it is not a technique prescribed by the Scrum Guide.",
  },
  {
    id: "c8bf3ae8-fca0-4f98-869a-8bab3d01db53",
    chapter: 4,
    question:
      "Which of the Scrum events is the most appropriate for capturing and using lessons learned?\n(choose the best answer)",
    options: [
      "Sprint Planning",
      "Sprint Review",
      "Product Backlog Refinement",
      "Sprint Retrospective",
    ],
    correctAnswer: 3,
    explanation:
      "Sprint Retrospective is essentially about lessons learned because it has to do with discussing how work was done and finding ways to improve it hereafter.",
  },
  {
    id: "97dc086c-8ea9-4987-8445-83c91e138c70",
    chapter: 4,
    question:
      "True or False: If there are multiple Product Goals, they must be organized into a Product Roadmap.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation: "The Scrum Guide does not prescribe using a Product Roadmap.",
  },
  {
    id: "02a0bac5-7447-4e79-9df5-0bf9bd2a495d",
    chapter: 4,
    question:
      "True or False: Scrum is a methodology for developing, delivering, and sustaining complex products.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum is considered a framework, not a methodology, process, or technique.",
  },
  {
    id: "5f59e56d-f844-4882-bcdf-f7ea234236aa",
    chapter: 4,
    question:
      "Choose the statement that best describes the Product Backlog:\n(choose the best answer)",
    options: [
      "The Product Backlog is useful for producing the project plan.",
      "The Product Backlog does not get complete and is easily updated.",
      "The Product Backlog makes all available data that allows Developers to create a product. It is a list of requirements approved by the product manager.",
      "The Product Backlog is full of recognized tasks by the Developers. It contains many user stories.",
    ],
    correctAnswer: 1,
    explanation:
      "There is no project plan in Scrum. The Product Backlog is an ordered list of everything known to be needed in the product. It is the single source of requirements for any changes to the product.",
  },
  {
    id: "1ba0a6a9-4a15-4866-87e4-9645ab2d7663",
    chapter: 4,
    question:
      "An organization adopted Scrum. During the adoption process, they changed Scrum terminology to better suit their culture. What are the possible effects of such a change?\n\nI. Organizations must tailor Scrum to suit the project because this methodology is incomplete. \nII. Organizations may feel less enthusiastic about the change. \nIII. They will improve their outcomes in adopting Scrum this way. \nIV. The change might not be evident to everyone, and some advantages may be missed.\n\n(choose the best answer)",
    options: ["I and II", "II and III", "II and IV", "III and IV"],
    correctAnswer: 2,
    explanation:
      "I. False. Scrum is not a methodology. Further, according to the Scrum Guide, you must complement Scrum, not tailor it, where tailor means changing the rules. \n\nII. True. By changing Scrum's terminology, its effects might be minimized, causing less impact and, consequently, enthusiasm. \n\nIII. False. Its effects might be minimized, causing less impact and, consequently, reducing the organization's outcomes. \n\nIV. True. Changing the terminology might hinder adopting some of Scrum's practices and waste the opportunities.",
  },
  {
    id: "b244a116-bad5-46d3-b357-891a9573a1ef",
    chapter: 4,
    question:
      "True or False: The first Sprint can only be started after the Product Backlog is complete.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Backlog is never complete. It is always evolving adaptive techniques.",
  },
  {
    id: "90b23275-7c91-4a7c-bbae-6ee9274e1da9",
    chapter: 4,
    question:
      "True or False: The velocity of Scrum Teams should be normalized so that administrators can measure and compare their performance.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Progress measurements are done internally, not by external managers. Also, comparing the velocity (dependent on the estimates) of two different teams is unreliable.",
  },
  {
    id: "b88fd944-5d41-4004-bc23-e6cac14f0a38",
    chapter: 4,
    question:
      "Choose three alternatives that may occur at the Sprint Retrospective meeting: \n\nI. To refine the Product Backlog. \nII. To talk about the upcoming Sprint goal. \nIII. To talk about what (from the Product Backlog) will be used for the upcoming Sprint. \nIV. To talk about how, throughout the Sprints, Product Backlog Refinement is done. \nV. To discuss the timeboxed duration of Sprints. \nVI. To discuss progress toward the Product Goal. \nVII. To discuss the Definition of Done.\n\n(choose the best answer)",
    options: [
      "I, II and III",
      "II, IV, and V",
      "I, III and IV",
      "I, III and VI",
      "IV, V and VII",
    ],
    correctAnswer: 4,
    explanation:
      "The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. The Sprint Retrospective occurs after the Sprint Review and prior to the next Sprint Planning. This is at most a three-hour meeting for one-month Sprints. For shorter Sprints, the event is usually shorter. The Scrum Master ensures that the event takes place and that attendants understand its purpose. The Scrum Master ensures that the meeting is positive and productive. The Scrum Master teaches all to keep it within the time-box.",
  },
  {
    id: "8d497581-4952-448e-94ef-7475a566bdce",
    chapter: 4,
    question:
      "Choose the best option that precisely describes the effects of changes in the project environment of the Product Backlog:\n(choose the best answer)",
    options: [
      "There's no impact on the Product Backlog.",
      "A new baseline Product Backlog is developed for the project, once the old one is saved.",
      "It gets refined to consider the changes.",
      "The Product Backlog must be maintained in a high standard of tolerance for resisting changes.",
      "The Product Backlog should be kept high-level enough to tolerate such changes, but the items are not affected.",
    ],
    correctAnswer: 2,
    explanation: "The Product Backlog emerges as more is learned.",
  },
  {
    id: "41d0d27a-114b-47e3-89e7-e12c40b3c3d3",
    chapter: 4,
    question:
      "Which events of the following are formal opportunities for inspecting and adapting (feedback loops) in Scrum?\n \nI. Sprint Review \nII. Product Backlog Refinement \nIII. Sprint Planning \nIV. Release Planning \nV. Sprint Retrospective \nVI. Daily Scrum\n\n(choose the best answer)",
    options: [
      "II, IV, V, and VI",
      "I, II, III, and IV",
      "I, III, V, and VI",
      "II, III, V, and VI",
      "III, IV, V, and VI",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum prescribes four formal events for inspection and adaptation: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
  },
  {
    id: "93b31a34-fe14-4236-a02e-9b21f5d56222",
    chapter: 4,
    question: "True or False: The Scrum Master can not be a Developer.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "It is not recommended at all, but it is not forbidden. One person can have more than one accountability in Scrum.",
  },
  {
    id: "df511ed7-0a84-4512-8053-b9a698b78975",
    chapter: 4,
    question:
      "Choose two alternatives among the statements below that are true about an undone Product Backlog item. \n\nI. Consider the done part of the item in velocity calculation and then create a new item in the Product Backlog for the remaining work. \nII. Demonstrate it in the Sprint Review meeting, even if it is not within the terms of acceptance. It is important to get feedback. \nIII. Move it back to the Product Backlog. \nIV. Do not include it in the Increment. \nV. It could be added to the Increment if it does not fail in the user acceptance tests. \n\n(choose the best answer)",
    options: ["I and II", "I and V", "II and III", "III and IV", "IV and V"],
    correctAnswer: 3,
    explanation:
      "Work cannot be considered part of an Increment unless it meets the Definition of Done. If a Product Backlog item does not meet the Definition of Done, it cannot be released or presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.",
  },
  {
    id: "cecd4167-0238-43cc-9dd3-6930ee8e2152",
    chapter: 4,
    question:
      "Choose two alternatives among the items below that can be appraised as real outputs of a Sprint. \n\nI. Done features added to the last version of the Increment developed last Sprint. \nII. A proposal for the following Sprints \nIII. A part of the software that is available to the end-users \nIV. New features that are available for integration\n\n(choose the best answer)",
    options: ["I and II", "I and III", "II and III", "II and IV", "III and IV"],
    correctAnswer: 1,
    explanation:
      'The Increment is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. At the end of a Sprint, the new Increment must be "Done," which means it must be in usable condition and meet the Scrum Team’s definition of "Done". An increment is a body of inspectable, done work that supports empiricism at the end of the Sprint. The increment is a step toward the Product Goal. The Increment must be in usable condition regardless of whether the Scrum Team decides to release it.',
  },
  {
    id: "29035989-8b40-4bdd-b4e6-d85ff6678f91",
    chapter: 4,
    question:
      "What is the timeboxed duration of Sprint Planning in a one-month Sprint?\n(choose the best answer)",
    options: [
      "Maximum 8 hours",
      "Maximum 6 hours",
      "Minimum 6 hours",
      "Minimum of 8 hours",
    ],
    correctAnswer: 0,
    explanation:
      "Sprint Planning is time-boxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "e5f78186-14ce-4485-a673-7c1789c137f1",
    chapter: 4,
    question:
      "Which of the following is not allowed in Scrum? \n\nI. Release Planning \nII. Using Planning Poker \nIII. Integration Sprints \nIV. Using User Stories \nV. Canceling a Sprint \n\n(choose the best answer)",
    options: ["I", "II", "III", "IV", "V"],
    correctAnswer: 2,
    explanation:
      "I, II, IV. Adopting Release Planning, Planning Poker, and User Stories is OK. It doesn't break any of the Scrum rules. III. You can't have Integration Sprints, because it would break a key Scrum rule: every Sprint must deliver value. In other words, in practice, this means that for every Sprint, you must deliver a new piece of business functionality, no matter how small. Integration Sprints break this rule because they focus on only integration code. V. If the Sprint Goal becomes obsolete, the Product Owner might cancel the Sprint. This is made explicit in the Scrum Guide.",
  },
  {
    id: "7cb5250b-bdd8-4ba2-9477-1000c31618b9",
    chapter: 4,
    question:
      "True or False: When there are multiple Scrum Teams working on the same product, their Sprints must start and end on the same day.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Sprints of the Scrum Teams do not need to be synchronized. The Scrum Teams self-manage and decide the best scheduling for them.",
  },
  {
    id: "22542a0e-6b0d-4523-a3fe-7792655076b8",
    chapter: 4,
    question:
      "True or False: Adding new Developers to the Scrum Team may make a short-term reduction in productivity.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "When more Developers are added to the team, there's usually a short-term decrease in productivity because other members have to spend time and effort familiarizing the new members with the solution and the environment of the project. After a while, the existence of new members may increase productivity, but even if it does, it's usually not a linear increase because, for example, having more people increases communication channels, which consumes some of the capacity.",
  },
  {
    id: "6de7fc51-1e9c-4a69-b25c-3041b9347a3c",
    chapter: 4,
    question:
      "When should the Developers cancel a Sprint?\n(choose the best answer)",
    options: [
      "The Developers don't have the authority to cancel the Sprint.",
      "When the company changes direction",
      "When the market or technology conditions change",
      "When the Sprint Goal becomes obsolete",
    ],
    correctAnswer: 0,
    explanation:
      "A Sprint could be canceled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint.",
  },
  {
    id: "650ff597-cde5-400e-8a8a-0660b85449cb",
    chapter: 4,
    question:
      "True or False: The Product Backlog items consist of a description, order, and size.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "That is not a rule. The Attributes of Product Backlog items often vary with the domain of work.",
  },
  {
    id: "7defb127-5a52-4a55-8546-023543a84412",
    chapter: 4,
    question: "True or False: Sprint Review is not a formal meeting.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Scrum prescribes four formal events for inspection and adaptation: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Be alert: the word formal is used in two distinct ways! First, the four formal events for inspection and adaptation, which means a formal opportunity. A formal meeting means a meeting where people approve something and exchange signatures. In that sense, none of the events are formal meetings. The Sprint Review meeting is informal, not a status meeting, and the Increment presentation is intended to elicit feedback and foster collaboration.",
  },
  {
    id: "aa03cf5d-e43b-415c-925c-0c8d053d9e99",
    chapter: 4,
    question:
      "Which three of the following are not timeboxed? \n\nI. Sprint Zero \nII. Sprint Review \nIII. Product Backlog Refinement \nIV. Sprint \nV. Release Planning \nVI. Sprint Planning\n\n(choose the best answer)",
    options: [
      "I, II and III",
      "II, IV and VI",
      "II, V, VI",
      "III, IV and V",
      "I, III and V",
    ],
    correctAnswer: 4,
    explanation:
      "The three items that are not timeboxed are I. Sprint Zero, III. Product Backlog Refinement, and V. Release Planning. These activities do not have specific timeboxes defined in Scrum. Sprint Zero is not a recognized Scrum event, Product Backlog Refinement is a continuous activity, and Release Planning can vary in duration based on the complexity of the product and the organization's needs. On the other hand, II. Sprint Review and VI. Sprint Planning are timeboxed events in Scrum, and IV. Sprint represents a timeboxed iteration.",
  },
  {
    id: "15e311ed-caf8-40be-ac9d-a8303f10cd03",
    chapter: 4,
    question:
      "True or False: The self-managing Scrum Team chooses the Scrum artifacts needed for the project.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices.",
  },
  {
    id: "c97af0a8-e9d0-47cd-b8eb-f515442d54e4",
    chapter: 4,
    question:
      "At one team, the performance is shown on a burn-down chart that everyone sees. In this case, The Scrum value demonstrated is:\n(choose the best answer)",
    options: ["Openness", "Cross-functionality", "Earned Value", "Adaptation"],
    correctAnswer: 0,
    explanation:
      "Scrum values are: commitment, courage, focus, openness, and respect.",
  },
  {
    id: "545382f4-16c3-4ffc-ad5b-c8301de37080",
    chapter: 4,
    question:
      "True or False: The Scrum Team might pursue multiple Product Goals.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next.",
  },
  {
    id: "0982153a-ed14-49aa-b2ce-b62fb994c94a",
    chapter: 4,
    question:
      "True or False: If a Product Backlog item is not Ready it can be considered for Sprint Planning",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'The correct answer is A. True. The Scrum Guide allows Product Backlog items that are not "Ready" to be considered for Sprint Planning. However, the Scrum Team must ensure that during Sprint Planning, they collaboratively define the work needed to make the item "Ready" for implementation. The Product Owner, with input from the Development Team, is responsible for ensuring that the selected items are appropriately prepared and have sufficient detail and clarity before being brought into the Sprint.',
  },
  {
    id: "a7afc7b6-a04f-4705-aec8-635483f56792",
    chapter: 4,
    question:
      "What's the role of a Scrum Master during Sprint Retrospectives?\n(choose the best answer)",
    options: [
      "Participating as a Scrum Team member",
      "Answering issues of developers and managing delays",
      "Compiling and summarize the conclusions of the meeting to stakeholders",
      "They should not participate in this meeting",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum Master ensures that the meeting is positive and productive. The Scrum Master teaches all to keep it within the time-box. The Scrum Master participates as a peer team member in the meeting from the accountability over the Scrum process.",
  },
  {
    id: "aefb2453-9e53-4fac-a952-f11f6dda020c",
    chapter: 4,
    question:
      "The Increment commits to the Definition of Done. Which of the following explain what Done means? \n\nI - An Increment that could be released to end-users. \nII - The work that the Scrum Team is capable of doing given their skills and expertise.  \nIII - All work performed that meets the Definition of Done.  \nIV - An Increment that is ready for quality control activities such as testing.  \nV - An Increment that is ready for the Product Owner to perform acceptance testing.  \n\n(choose the best answer)",
    options: ["I and III", "Only I", "I, II, and III", "I and IV"],
    correctAnswer: 0,
    explanation:
      "II - Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. \n\nIV - The Definition of Done must reflect the quality measures required for the product, including all quality control activities; \n\nV - The Definition of Done must reflect the quality measures required for the product, including acceptance criteria, if the Scrum Team judges to be necessary.",
  },
  {
    id: "f126c57e-785c-44f2-9499-3b7ac1fd87bc",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team from an organization that is known to consider on-time delivery and reliability very seriously. A manager detected that your team is not up to speed and that it should increase velocity by 15%. He came to you, the Scrum Master, expecting you to make it happen. How do you respond?\n(choose the best answer)",
    options: [
      "You tell the manager to talk to the Product Owner since she is the person responsible for having accurate forecasts.",
      "You present this challenge as a company goal for the Scrum Team while leaving them responsible to define how to achieve it.",
      "You explain how a Scrum Team uses velocity as a forecast for the work to be done next Sprint but not as a prediction of future productivity. Further, you encourage the manager to communicate with the Product Owner for information about the product development progress.",
      "You teach the manager that the velocity only concerns the Scrum Team but invite him to participate in the Sprint Retrospective to help the team improve.",
    ],
    correctAnswer: 2,
    explanation:
      "First, it is expected that management will sant to stay updated regarding progress and, you should ensure management and the Product Owner are aligned regarding this matter. Second, you should explain that velocity shouldn’t be used to measure future productivity because it is not an accurate measure of overall value. Focusing solely on increasing velocity may sacrifice other important aspects of successful product development, such as maintaining sustainable pace, ensuring high-quality deliverables, and fostering a healthy team dynamic. Instead of using velocity as a measure of productivity, it is more beneficial to focus on creating a supportive and empowered environment for the team, fostering open communication, and continuously improving the Scrum processes. This approach allows the team to deliver value consistently while adapting to changing requirements and improving their overall effectiveness.",
  },
  {
    id: "44d569e3-ea91-4da0-9279-e8fb72ca174e",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team. During the Daily Scrum, one Developer is constantly discussing technical topics that are interesting but not relevant for the Daily Scrum. What would you do? \n\nI - Manage turn-taking on the Daily Scrum by passing a token around. Each person only speaks while owning the token, which lasts an allotted amount of time.  \nII - Coach the Developers to help them find a way to solve the problem and own the solution.  \nIII - Use a timer to limit the time that each Developer can speak at the Daily Scrum.  \nIV - In private, ask the Developer what he believes are the key outcomes for the Daily Scrum.  Use the opportunity to coach him and help create focus during the Daily Scrum.  \nV - Raise the issue as an impediment to the Developer's manager and ask her to resolve this matter.  \n(choose the best answer)",
    options: ["I and III", "II and IV", "I, III, and IV", "Il and V"],
    correctAnswer: 1,
    explanation:
      "I - This hurts self-management.; \nIII - This hurts self-management; \nV - This hurts self-management.",
  },
  {
    id: "fe833c15-3cef-403f-b4c9-7c2c74ca6c85",
    chapter: 4,
    question:
      "John is a Product Owner working on a Scrum Team on a new release for his product. John used the velocity of the previous release as the reference to estimate that the new release would take ten Sprints. The average velocity of the previous release was twenty Story Points per Sprint. Development is four Sprints underway, with seven more Sprints to go until the release. Further, the Product Backlog has not changed much. \nOver the first three Sprints, the average velocity is fifteen, but not all the delivered functionality was tested as needed. The Developers estimate that the unfinished testing would have required 25% of a Sprint’s time. The Developers believe that the required velocity of twenty-three is within their reach. What is the most effective way to recover? \n (choose the best answer)",
    options: [
      "The Developers inform John that the progress that he has perceived to date is not correct, because the delivered functionality is not fully tested. In other words, the Increment is not releasable. They tell John their estimated effort for paying off the technical debt and suggest paying it off before proceeding with new features. The Developers also re-estimate the effort to complete the remaining Product Backlog, including testing activities.",
      "The Developers make sure that, for the next Sprints, the selected Product Backlog items are as done as possible. In case the work for a given Sprint is not done, they add it to the next Sprint's Sprint Backlog.",
      "The Developers talk to John and schedule a hardening Sprint to take care of the accumulated technical debt caused by lack of testing. It is John's responsibility to inform key stakeholders of the impact on the release date.",
      "The Scrum Team must restore transparency by updating the Product Backlog with the undone work. Further, to compensate for the flaws in the past Sprints, the Developers must figure out how to improve their velocity in future Sprints. If needed, the Scrum Master must step in to improve the development process. In case the situation gets out of hand, the Scrum Master assigns a new Scrum Team or cancels the project.",
    ],
    correctAnswer: 0,
    explanation:
      "In case the work for a given Sprint is not Done, it is moved back to the Product Backlog. The most effective way to recover in this situation is for the Developers to communicate to John that the delivered functionality is not fully tested and the Increment is not releasable. They should estimate the effort required to pay off the technical debt and suggest addressing it before proceeding with new features. The Developers should also re-estimate the effort needed to complete the remaining Product Backlog, taking into account testing activities. This approach ensures that the necessary testing is performed and the Increment is of high quality before moving forward. Finally, remember that, each Sprint, the Scrum Team should aim to get all the selected Product Backlog items to Done, and should have at least one Increment, fully conforming to the Definition of Done, developed.",
  },
  {
    id: "5fe6f1ff-d729-4375-8f21-e72a219e4099",
    chapter: 4,
    question:
      "A Scrum Team is having a hard time scheduling the Daily Scrums because not all Developers work full time and some regularly work from home. To solve this issue, a Developer suggested having Daily Scrums twice a week, when everyone is in the office. \nWhat would be three key concerns if the frequency of the Daily Scrum is reduced? \n \nI - The opportunities to inspect progress toward the Sprint Goal and adapt the Sprint Backlog are reduced. Re-aligning is bound to become even more difficult.  \nII - It becomes challenging for the Scrum Master to update the Burndown chart daily, which hinders the Scrum Master from fulfilling his/her duty of tracking the Sprint’s progress.  \nIII - The plan for the Sprint might become inaccurate and transparency over progress toward the Sprint Goal is reduced.  \nIV - It becomes challenging for the Product Owner to accurately report progress about the state of the forecasted work to the stakeholders.  \nV - Impediments are raised and resolved more slowly.  \n\n(choose the best answer)",
    options: [
      "I and III",
      "I, III, and V",
      "III and V",
      "I, II, III, and V",
      "II and IV",
    ],
    correctAnswer: 1,
    explanation:
      "II - It is not the Scrum Master’s duty to track the Sprint’s progress; \nIV - It is not the Product Owner’s duty to report progress of the Sprint to stakeholders.",
  },
  {
    id: "22adbf7c-ad6c-4766-95f3-b22313f30456",
    chapter: 4,
    question:
      "Which of the following statements are correct regarding large-scale product development with Scrum? \n\nI- A well-ordered Product Backlog can minimize or even often eliminate having Developers work on multiple Scrum Teams simultaneously.  \nII - Scrum Team members must be working full-time on a team.  \nIII - A person working on multiple Scrum Teams at once is often less productive than working on a single Scrum Team.  \nIV - It is necessary to change the core Scrum framework for successfully employing Scrum at scale.  \n\n(choose the best answer)",
    options: ["I and III", "Only III", "I, III, and IV", "I, II, III, and IV"],
    correctAnswer: 0,
    explanation:
      "II - Scrum does not mandate having full time members; \n\nIV - Scaled Scrum is still Scrum. Nexus does not change the core design or ideas of Scrum, or leave out elements, or negate the rules of Scrum. Doing so covers up problems and limits the benefits of Scrum, potentially even rendering it useless.",
  },
  {
    id: "04783743-ef73-4836-8baf-a334bac7cb7d",
    chapter: 4,
    question:
      "At the sixth Sprint Retrospective, the Product Owner is very disappointed. He claims that the technical debt has increased and that the product is not up to his expectations. Consequently, he claims that the product will need extra Sprints to meet security requirements. Which of the following could be true about this Scrum Team?  \n\nI - The Sprint Retrospectives have not been used effectively by the Scrum Team.  \nII - The Developers have not instilled the necessary quality into the product.  \nIII - The Developers are fulfilling their accountability and they cannot be held responsible for the product having poor quality.  \nIV - The Scrum Master has not ensured that the Scrum Team is being transparent.  \n\n(choose the best answer)",
    options: ["III and IV", "I, II and IV", "I and IV", "II, III, and IV"],
    correctAnswer: 1,
    explanation:
      "III - The Developers are responsible for instilling quality by adhering to the Definition of Done. Further, having an appropriate Definition of Done is an accountability shared by the whole Scrum Team.",
  },
  {
    id: "7c66d4ab-67c5-4090-8ebd-afab4219198b",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team. Your team is conducting a Sprint Planning. The timebox of the event is almost expiring and the Product Owner and Developers have not been able to get into an agreement about the highest order Product Backlog items. Because of this situation, the Developers are having a hard time forecasting which Product Backlog items they could get Done by the end of the Sprint. However, at the beginning of the event, the Product Owner successfully point the Scrum Team to the business objective that she was hoping to achieve this Sprint. Which of the following action would you support?\n(choose the best answer)",
    options: [
      "They discuss in the upcoming Sprint Review why this happened and what changes will make it less likely to recur.",
      "The team should interrupt the Sprint Planning so that everybody takes as much time as they need to study the Product Backlog items first. Whenever they are ready, they meet again to wrap up Sprint Planning before the Sprint can start.",
      "If everybody agrees, they should continue with the Sprint Planning past its timebox until they are able to define the Sprint Backlog.",
      "The Developers forecast the Product Backlog items that are most likely to meet the business objective and define the Sprint Backlog. Once the timebox of Sprint Planning elapses, the event is done, and the Scrum Team starts working on the Product Backlog. During the Sprint, they continue to refine additional functionality as needed.",
    ],
    correctAnswer: 3,
    explanation:
      "A Sprint, or any of the contained events, cannot be interrupted. Further, there are no intervals between Sprints.In this case, The Developers should forecast the Product Backlog items that are most likely to meet the business objective and define the Sprint Backlog within the timebox of the Sprint Planning event. Once the timebox expires, the event is done, and the Scrum Team starts working on the defined Sprint Backlog. Additional refinement and adjustments can be made during the Sprint as needed. It's important to adhere to the timebox to maintain the cadence and rhythm of the Scrum events. Later, the Scrum Team might discuss the causes of these issues during the Sprint Retrospective.",
  },
  {
    id: "f2d22b3a-9137-44d9-be5a-67c8a7da141b",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team. During Sprint Planning, the Developers selected five Product Backlog items for the current Sprint. However, at the end of the Sprint, they were not able to meet the Definition of Done for two of the selected Product Backlog items. Given this, they ask you what should they do with these incomplete Product Backlog items? What would you suggest they do? \n\nI - The items are not included in the Increment for this Sprint.  \nII - The items are put on the Product Backlog for the Product Owner to decide what to do with it. \nIII - The items must be reviewed during Sprint Review. Further, the done part of each of these items should be considered for the team’s velocity. Finally, new Product Backlog items must be created for the remaining work.  \nIV - It is up to the stakeholders to decide over accepting undone work or even releasing it.  \n\n(choose the best answer)",
    options: [
      "I and II.",
      "I and III.",
      "I, II, III and IV.",
      "I, II, and IV.",
    ],
    correctAnswer: 0,
    explanation:
      "III - If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration; \n\nIV - It does not depend on the stakeholders. If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration.",
  },
  {
    id: "a601c7e4-5b4a-4b9c-89d9-6e50c1b35895",
    chapter: 4,
    question:
      "You are working with a product which has performance as a key requirement. The manager of a Scrum Team which has you as the Scrum Master suggests to you that performance testing should only be performed every other Sprint because it is too costly. He wants to know your opinion. What would you say?\n(choose the best answer)",
    options: [
      "It depends on what is stated in their Definition of Done.",
      "It is not a good idea, because the Increment will lose transparency, making the feedback longer than needed, and hinder empiricism.",
      "It is a good idea, because we could save money.",
    ],
    correctAnswer: 1,
    explanation:
      "Since performance is a key requirement, it must be part of the Definition of Done. It is not a good idea to perform performance testing every other Sprint because it can compromise the transparency of the Increment and hinder the effectiveness of feedback and empiricism. Performance is a critical requirement, and regular testing ensures that the desired performance levels are achieved and maintained throughout the development process. Skipping performance testing in alternate Sprints may lead to delayed detection of performance issues, making it more challenging to address them promptly and impacting the overall quality of the product. Therefore, it is important to prioritize performance testing as an integral part of each Sprint to ensure the desired performance standards are met.",
  },
  {
    id: "e6c5cd67-f1f0-4192-b9af-3b915c9418f3",
    chapter: 4,
    question:
      "True or False: By adopting Scrum you guarantee that adding more people to a team proportionally increases the value delivered",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Changing the team’s structure might reduce its productivity in the short term. Further, the more people you have in a team, the more complex is communication.",
  },
  {
    id: "3ed59271-7a49-4348-8fe6-9a5bdae92e15",
    chapter: 4,
    question:
      "You are a Scrum Master assisting five Scrum Teams that are working on the same product. At this point, you are discussing with them about integrating their work for developing the Increments. Many opinions were shared by the future Scrum Team members. Which of the following would you support?\n(choose the best answer)",
    options: [
      "All Scrum Teams agree on a shared Definition of Done that describes all work needed to deliver an Increment that is the integrated sum of the work from all Scrum Teams.",
      "Each Sprint, each Scrum Team works on a separated Increment. During the Sprint Review, they identify the work needed to integrate with the other Scrum Teams. The Product Owner adds the work to the Product Backlog.",
      "On early Sprints, they don't need to worry much about integration. Conversely, they should focus on delivering business value.",
      "Each Sprint, each Scrum Team works on a separated Increment focusing on the feature or components that they are responsible for. Later, they scheduled a release Sprint with the Product Owner for performing the necessary integration and stabilization.",
    ],
    correctAnswer: 0,
    explanation:
      "All Scrum Teams agree on a shared Definition of Done that describes all work needed to deliver an Increment that is the integrated sum of the work from all Scrum Teams. By having a shared Definition of Done, the Scrum Teams ensure that their individual Increments are compatible and can be seamlessly integrated to create a useful, valuable Increment every Sprint. This approach promotes collaboration, alignment, and transparency among the Scrum Teams, enabling them to work towards a common goal and deliver a cohesive product. It also helps identify any dependencies or integration challenges early on and allows for effective coordination and synchronization of efforts across the Scrum Teams.",
  },
  {
    id: "74985a36-03b2-4aff-a2d9-9d7092b9a6ee",
    chapter: 4,
    question:
      "You are the Scrum Master of a novice Scrum Team. Halfway through the Sprint, the Product Owner is worried and looks for your guidance. He claims that the Developers are not going to be able to meet the forecast that they developed during Sprint Planning. What would you tell him?\n(choose the best answer)",
    options: [
      "Teach him that the Scrum Team focuses on achieving the Sprint Goal, not the forecast.",
      "That you will talk to the Developers and motivate them to meet their forecast.",
      "That you will add more Developers to the Scrum Team.",
    ],
    correctAnswer: 0,
    explanation:
      "Adding more Developers will not solve the issue. The Product Owner must first understand the difference of the forecast of the Sprint and Sprint Goal.The Scrum Team's primary focus should be on working collaboratively to achieve the Sprint Goal, which represents the purpose and objective of the current Sprint. While the forecast made during Sprint Planning provides an estimation of the work that the Developers believe they can complete, it is not a rigid commitment. The Scrum Team should adapt and adjust their approach as needed to maximize value delivery and meet the Sprint Goal. It is important to encourage the Product Owner to engage in a conversation with the Developers to understand the reasons behind the concern and explore potential solutions together.",
  },
  {
    id: "b8f08996-0522-4190-a57c-67808264638d",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team. The Product Owner has been using the Daily Scrum to gather information regarding the Sprint progress. He feels that, for the project to succeed, it is vital that he tracks what every Developer is working on every day. What is the best thing for you to do?\n(choose the best answer)",
    options: [
      "Coach the Product Owner and the Developers on the purpose of the Daily Scrum and other Scrum events and let them figure out how to deal with this situation.",
      "Start participating on the Daily Scrum and resolve any conflicts between the Product Owner and the Developers.",
      "Nothing. If the Developers agree with the Product Owner's management style, he can continue attending the Daily Scrums to track progress.",
      "Talk with the Product Owner and tell him to stop attending the Daily Scrum.",
    ],
    correctAnswer: 0,
    explanation:
      "The Daily Scrum is an event for the Developers of the Scrum Team. By letting the Product Owner actively participate in them, the Scrum Master is violating a Scrum rule, which he is accountable for.",
  },
  {
    id: "0d61a1c4-200b-4fc6-b0ac-9f44a0581b31",
    chapter: 4,
    question:
      "You are the Scrum Master for four Scrum Teams working on the same product. One of your organization’s managers suggested standardizing the velocity across all teams. According to her, it would be a way to better assess the delivered value and assist in improving the teams’ productivity. What would you respond to? \n\nI - Velocity is the amount of Product Backlog items turned into an Increment of product during a Sprint, tracked by the Developers for use within the Scrum Team.  \nII - Using velocity as the basis for incentive programs can boost the Scrum Team’s morale.  \nIII - Standardizing the velocity across the four teams will help compare which teams are productive and create more value.  \nIV - There is no direct relationship between velocity and value. \n\n(choose the best answer)",
    options: ["II and III.", "I, II and IV.", "I and IV.", "III and IV."],
    correctAnswer: 2,
    explanation:
      "II - Using the velocity as the basis for incentive programs can boost the Scrum Team’s morale; \n\nIII - Velocity is subjective and an easy indicator to be gamed. By using it as the basis for comparing teams, the members of the Scrum Teams will have the sense of broken trust and frustration.",
  },
  {
    id: "eb395511-3d90-4aa6-b209-990371a46123",
    chapter: 4,
    question:
      "During a Sprint Review, a key stakeholder points that the budget for the project was reduced given external factors. Given this, an emotional argument follows. As a Scrum Master, what is your best option?\n(choose the best answer)",
    options: [
      "Ask for a short break for people to calm down and be objective.",
      "Encourage the stakeholders to keep getting more work for the Scrum Team, so that they are busy.",
      "Argue that the budget cannot be reduced and that additional funding must be provided.",
      "Let the Product Owner handle the matter, since he is responsible for the Sprint Reviews.",
    ],
    correctAnswer: 0,
    explanation:
      "In a situation where emotions are running high and an argument is escalating, it is important to create a space for everyone to regain composure and approach the discussion with a calmer and more objective mindset. Asking for a short break allows time for individuals to gather their thoughts, control their emotions, and promote a more productive and respectful conversation. As the Scrum Master, it is your role to facilitate effective communication and maintain a positive and collaborative atmosphere during Scrum events.",
  },
  {
    id: "9e12f1a2-cd43-49d0-ba16-030c30f18916",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team. After a Sprint Review, the Product Owner comes to talk to you, because he is very worried that the stakeholders are not satisfied with the product. During the Sprint Review, the stakeholders confessed that the product being built is not useful for them. The Product Owner would like you to help him identify what led to this situation. What would you tell him? \n\nI - The frequency of interaction between the Product Owner and the stakeholders is not enough.  \nII - The project manager is not engaged causing the project plan to be inaccurate.  \nIII - The stakeholders are not participating in the Daily Scrum  \nIV - The stakeholders have not been using the Sprint Reviews to actively engage and inspect and evaluate progress.  \nV - The change request process plan has not been followed properly.  \n\n(choose the best answer)",
    options: [
      "I, II, IV, and V.",
      "I and IV.",
      "II and V.",
      "I, II, III, IV, and V.",
    ],
    correctAnswer: 1,
    explanation:
      "II - There is no project plan in Scrum. Further, even if it is the case of Scrum being adopted in a project, this would not be a major cause for the problem; \n\nIII - The Daily Scrum is only for the Developers. \n\nV - Scrum does not prescribe a change request process. Further, even if it is the case, this would not be a major cause for the problem.",
  },
  {
    id: "5f6a16a4-5efa-44d0-ba9b-b32e15d41e73",
    chapter: 4,
    question:
      "Scrum Teams self-manage. What does that mean? \n\nI - The Developers assign the tasks to be worked on during Sprint Planning and make sure to get all the committed tasks done by the end of the Sprint.  \nII - Scrum Teams are able to resolve internal conflicts.  \nIII - The Scrum Master assigns the tasks to the Developers daily. \nIV - Scrum Teams are flexible and creative.  \n\n(choose the best answer)",
    options: [
      "I, II, III and IV.",
      "II and IV.",
      "I, II, and IV.",
      "I and IV.",
    ],
    correctAnswer: 1,
    explanation:
      "I - The Developers commit to the Sprint Goal, not the tasks forecasted during Sprint Planning. Further, throughout the Sprint, they further refine the Sprint Backlog and define what to work on next. \n\nIII - The Developers decide who does what.",
  },
  {
    id: "79cf19fb-613a-4b3e-b191-2aaeefb097c9",
    chapter: 4,
    question:
      "You have just been hired as a Scrum Master by an organization new to Scrum. You are going to be the Scrum Master of three new Scrum Teams that will work on a product. The organization assigned three Product Owners but looks for your input. What would you suggest?\n\nI - Each Scrum Team has a Product Backlog.  \nII - There should only be one Product Backlog for the new product.  \nIII - Having one Product Owner will improve the clarity of accountability to the teams and to the product management department.  \nIV - It is fine to have three Product Owners, but they need to assign a chief Product Owner to centralize decision-making.  \nV - There should only be one Product Owner.  \n\n(choose the best answer)",
    options: ["I and II.", "II and V.", "II, III and V.", "I and IV."],
    correctAnswer: 2,
    explanation:
      'I - Each Product has one Product Backlog. \n\nIV - Each Product has one Product Owner and Scrum does not contain a "chief Product Owner" accountability. --- From what we have studied, we know that II and V would be better worded if it had "must" instead of "should", because they are rules. \n\nBut, the real assessment is not always very strict with these words and you need to analyze the possible answers. In this case, the best answer is II, III, and V, so go for it. If we had the option of marking only "III", it would be the best option.',
  },
  {
    id: "8ea5afa5-4894-43ec-b05f-b4b94854d0c7",
    chapter: 4,
    question:
      "Which of the following statements reflect Scrum's Respect value?\n(choose the best answer)",
    options: [
      "Respect the diversity of opinions, backgrounds, experience, and skills of the Developers.",
      "Respect the Product Owner by letting them change the Sprint Goal during the Sprint.",
      "Respect the Scrum Master by letting him assign tasks during the Daily Scrum.",
      "Respect management by reporting progress during the Daily Scrum.",
      "Respect the Product Owner by making sure that the work forecasted during Sprint Planning is Done by the end of the Sprint.",
    ],
    correctAnswer: 0,
    explanation:
      "Respecting the diversity and contributions of the Developers is an essential aspect of Scrum. It recognizes that every team member brings unique perspectives, knowledge, and skills to the table, promoting collaboration, inclusivity, and valuing each individual's input.",
  },
  {
    id: "9d359706-79e4-4b0e-9892-ef2e9cc35e17",
    chapter: 4,
    question:
      "You have been hired as a Scrum Master for an organization new to Scrum. You are about to start working on your first project with Scrum and the Product Owner seems confused about how to deal with architecture and infrastructure tasks. She asks you how many Sprints the project should schedule to deal with these issues. What would you tell her? \n\nI - She shouldn’t worry about technical issues, because you will keep an eye on the team to make sure they ask for help if needed.  \nII - Teach her that such issues should be added to the Product Backlog.  \nIII - Explain to her that the architecture and infrastructure should emerge alongside developing business functionality to better mitigate risks.  \nIV - Tell her that the risks related to architecture and infrastructure should be dealt with before starting the first Sprint.  \n\n(choose the best answer)",
    options: [
      "II and III.",
      "I, II and III.",
      "I, II, III and IV.",
      "I, II and IV.",
    ],
    correctAnswer: 0,
    explanation:
      "I - Technical work must be added to the Product Backlog. The Product Owner should discuss with the Developers when to work on the Product Backlog items related to technical tasks such as architecture and infrastructure; \n\nIV - Architecture and infrastructure should emerge alongside developing business functionality to better mitigate risks.",
  },
  {
    id: "a83db0c7-58a7-4b2e-b49e-54227d19b6ad",
    chapter: 4,
    question:
      "You are the Scrum Master of a Scrum Team that is experiencing a complicated relationship between the Product Owner and the Developers. The Developers are annoyed with the Product Owner because the requirements are changing too much. Thus, they feel like they are wasting time redoing work constantly. The Product Owner is angry with the Developers because they are not being flexible to handle the change requests in a timely manner. What would you do?\n(choose the best answer)",
    options: [
      "Ask the HR department for guidance on how to mediate the conflict.",
      "Take everyone to a team building activity off-site.",
      "Ask management to step in and tell the Product Owner and Developers that if they must work better as a team, otherwise they will be fired.",
      "Gather with the Product Owner and Developers to discuss why the requirements are changing. Ask them the impact on delivered value of such changes on requirements.",
    ],
    correctAnswer: 3,
    explanation:
      "As the Scrum Master, faced with a conflict between the Product Owner and Developers over changing requirements, it is important to facilitate open communication and understanding. Gather the team to discuss the reasons behind the changes and the impact on delivered value. Encourage both parties to express their concerns and find common ground. Emphasize the Scrum values and principles to guide the team towards a collaborative solution.",
  },
  {
    id: "c65912ff-c175-4807-9874-8745104d8688",
    chapter: 4,
    question:
      "Which statement about the Sprint Goal is false?\n(choose the best answer)",
    options: [
      "The Developers must tell the Product Owner if they feel like it is unachievable.",
      "Is the single objective for the Sprint.",
      "It is a forecast done during Sprint Planning, which might change during the Sprint as more is learned.",
      "The Scrum Team commits to it.",
      "It creates coherence and focus.",
    ],
    correctAnswer: 2,
    explanation:
      "This sentence is about the Sprint Backlog. The Sprint Goal is a commitment and must not change during a Sprint.",
  },
  {
    id: "0d370925-c675-4784-b89f-a9fefb893956",
    chapter: 4,
    question:
      "What needs to be in place before starting the first Sprint?\n(choose the best two answers)",
    options: [
      "A detailed project plan",
      "Definition of Done (DoD)",
      "Just enough Product Backlog items to start the first Sprint",
      "Agreement on Sprint length",
      "A Scrum Team",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation:
      "Before starting the first Sprint, two important things need to be in place. Firstly, there should be just enough Product Backlog items to start the first Sprint. These items should be refined and have enough detail to be worked on by the Developers. Secondly, a Scrum Team needs to be formed, consisting of the Product Owner, Developers, and Scrum Master. The team should be cross-functional and have all the necessary skills to develop the product.",
  },
  {
    id: "199d8bdf-5f71-4560-98b9-e543d7e4e560",
    chapter: 4,
    question:
      "When should the Increment be released?\n(choose the best answer)",
    options: [
      "Immediately after each Sprint",
      "When it is defect-free",
      "When it makes sense based on the business strategy and market conditions",
      "When the Product Owner approves it",
      "When the Developers completes the Sprint Review",
    ],
    correctAnswer: 2,
    explanation:
      'The Increment is the sum of all the Product Backlog items that are "Done" in the current Sprint and all previous Sprints. It represents the work completed by the Developers and is the tangible outcome of the Sprint. However, the timing of releasing the Increment to the market or users depends on various factors, including the business strategy, market conditions, and product readiness. Therefore, the decision of when to release the Increment is context-dependent and may vary for different organizations and products.',
  },
  {
    id: "7024330a-4b56-4ab3-a8d9-f3150fe8e1a0",
    chapter: 4,
    question:
      "True or False: In Scrum, each Sprint can be considered a short project.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Each Sprint in Scrum can be seen as a short project because it has a defined time-box, a specific goal, and produces a potentially releasable increment of the product. During the Sprint, the Scrum Team collaborates to deliver the agreed-upon scope and achieve the Sprint Goal. However, it's important to note that Scrum is an iterative and incremental framework, where multiple Sprints collectively contribute to the overall product development.",
  },
  {
    id: "b37c670a-e13d-46cd-9f13-fe79e9ea8b0e",
    chapter: 4,
    question:
      "When should Product Backlog items be refined?\n(choose the best two answers)",
    options: [
      "Only in the first Sprint",
      "During Sprint Planning events",
      "Throughout the Sprints",
      "During the Sprint, if they have not been refined in the previous Sprints",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, Product Backlog refinement is an ongoing activity.",
  },
  {
    id: "a233485d-a23a-41d4-9147-661199ef11b8",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, Product Backlog refinement requires the Scrum Team to spend at least than 10% of their time.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide does not prescribe a specific time allocation for Product Backlog refinement.",
  },
  {
    id: "0021380c-0dba-4f8e-a24a-4f63f38c3385",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, Product Backlog refinement only takes place during the Sprint Planning and Sprint Review events.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Product Backlog refinement is an ongoing activity that occurs throughout the Sprint. It is not limited to the Sprint Planning and Sprint Review events.",
  },
  {
    id: "1f7bfc70-1ef6-46e8-b174-63fcf95a79f2",
    chapter: 4,
    question:
      "What is a recommended approach to limit the accumulation of technical debt?\n(choose the best answer)",
    options: [
      "Having an appropriate Definition of Done",
      "Reserving 30% of the team’s capacity for paying off technical debt",
      "Holding hardening Sprints",
      "Ignore it and focus on only developing new features",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, one way to limit the accumulation of technical debt is by having an appropriate Definition of Done. The Definition of Done sets the quality criteria that must be met for a Product Backlog item to be considered complete. By continuously refining and improving the Definition of Done, the Scrum Team ensures that each Increment is thoroughly tested, integrated, and meets the required quality standards, reducing the chances of accumulating technical debt.",
  },
  {
    id: "2b67471a-c9cf-44dd-9bd6-2e3e2d1f6e1e",
    chapter: 4,
    question:
      "Who is responsible for updating the Sprint Backlog during the Sprint?\n(choose the best answer)",
    options: [
      "The entire Scrum Team collaboratively",
      "The Scrum Master",
      "The Product Owner",
      "The Developers",
      "The Lead Developer",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Developers, who are members of the Developers, are responsible for determining when it is time to update the Sprint Backlog during the Sprint. They self-manage and collaborate to manage their work, including updating the Sprint Backlog as needed based on their progress and understanding of the work. The Developers are accountable for ensuring that the Sprint Backlog is accurate, up to date, and reflects the work remaining to achieve the Sprint Goal.",
  },
  {
    id: "2ecc0e71-cc83-45fa-ab7c-d40b80d4b1de",
    chapter: 4,
    question:
      "What is true about the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "The Scrum Team and stakeholders participate.",
      "It occurs before the Sprint Review.",
      "It's an opportunity for inspection and adaptation of the process used by the Scrum Team.",
      "It can be facilitated by the Scrum Master, Product Owner, or a designated facilitator.",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Retrospective is an essential event in Scrum where the Scrum Team inspects and adapts its processes. It provides an opportunity to reflect on the Sprint, identify strengths and weaknesses, and plan improvements. The Scrum Team collaboratively discusses what went well, what could be improved, and formulates actionable steps to enhance their effectiveness and efficiency. The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint, but shorter timeboxes are recommended for shorter Sprints. The event occurs after the Sprint Review and involves the participation of the entire Scrum Team, including the Product Owner.",
  },
  {
    id: "8bf0505d-ad9e-4e60-a62e-112642e14daf",
    chapter: 4,
    question:
      "What are potential indicators of success when an organization adopts Scrum?\n(choose the best two answers)",
    options: [
      "Increased number of hours worked by the team members",
      "Increased profitability",
      "Improved team morale and engagement",
      "New features released after each Sprint",
      "Strictly adhering to Scrum rules",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "The most effective ways to measure the success of a Scrum initiative are generally those that focus on the value delivered to the customer, continuous improvement of the team, and the team's ability to deliver work sustainably. The organization should focus on outcomes, instead of the outputs or the means.",
  },
  {
    id: "f83aa9b7-b9b1-466e-85f5-d3149a6f1028",
    chapter: 4,
    question:
      "During a Sprint, the Developers realize that the Sprint Goal has become obsolete. What should the Scrum Master do in this situation?\n(choose the best answer)",
    options: [
      "Do nothing and wait for the Sprint to end.",
      "The Scrum Master should create new Sprint Goal.",
      "The Scrum Master should ensure that the Product Owner is informed.",
      "The Scrum Master should inform the stakeholders about the issue.",
    ],
    correctAnswer: 2,
    explanation:
      "In this situation, the Scrum Master should make sure that the issue is communicated to the Product Owner. The Product Owner is responsible for maximizing the value of the product, and they need to be aware of any changes or concerns related to the Sprint Goal so that appropriate action can be taken. With this information, the Product Owner can decide to cancel the Sprint or not.",
  },
  {
    id: "c58cba48-ab84-4527-8d10-7276d6a570ce",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, the Scrum Team is allowed to pursue multiple Product Goals simultaneously.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next.",
  },
  {
    id: "b94971aa-d53d-4ff4-8f34-d0b9468ed513",
    chapter: 4,
    question:
      "Which of the following statements are correct about the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "It usually takes place before the Daily Scrum",
      "Only the Scrum Master facilitates the event",
      "The Sprint Retrospective is an opportunity to inspect and adapt the Scrum Team's process",
      "Improvements identified during the retrospective must be implemented in the next Sprint.",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Retrospective, as defined in the Scrum Guide, provides an opportunity for the Scrum Team to self-assess and devise improvement plans. Its purpose is to identify methods to enhance quality and effectiveness. The Scrum Team, comprising the Product Owner, Scrum Master, and Developers, actively engages in this retrospective. While the Scrum Guide doesn't prescribe a specific timeframe, the Sprint Retrospective usually occurs after the Sprint Review and prior to the subsequent Sprint Planning. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint, but having them on the next Sprint is not a rule.",
  },
  {
    id: "879d648f-f899-41d4-b530-c006cbd89c2c",
    chapter: 4,
    question:
      "What is the potential consequence of accumulating technical debt?\n(choose the best answer)",
    options: [
      "Projects that are delivered ahead of schedule",
      "Products that are easy to maintain and extend",
      "Increased risk of defects and low-quality software",
      "Processes that are highly automated and efficient",
    ],
    correctAnswer: 2,
    explanation:
      "Technical debt is the result of compromising software design or development during a project, often due to the need for immediate solutions. The Scrum Guide doesn't explicitly address technical debt, but it emphasizes sustainable pace and continuous improvement. Accumulated technical debt can make it challenging to extend or maintain products, as shortcuts and compromises impede the ability to add features, make changes, or resolve issues efficiently.",
  },
  {
    id: "bf102f88-49d9-48df-b8f0-69d5ddc2e736",
    chapter: 4,
    question:
      "Which of the following are the accountabilities of the Developers in Scrum? Select all that apply.\n(choose the best two answers)",
    options: [
      "Providing feedback during the Sprint Review",
      "Estimating the effort required for Product Backlog items",
      "Ordering the Product Backlog",
      "Inspecting and adapting their plan toward the Sprint Goal daily",
      "Releasing the Increment at least once a Sprint",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      'In Scrum, Developers are accountable for estimating the effort required for Product Backlog items, which aids in Sprint planning, and they are also responsible for inspecting and adapting their plan toward the Sprint Goal daily, typically during the Daily Scrum. Although Developers do provide feedback during the Sprint Review and contribute to the creation of a "Done" Increment, these are shared responsibilities or decisions made by the Product Owner, respectively. Also, the Product Owner primarily handles the ordering of the Product Backlog, not the Developers.',
  },
  {
    id: "21fe3bb8-26f6-4f0b-ab47-7642c45606bb",
    chapter: 4,
    question:
      "Which Scrum accountability is responsible for collaborating with stakeholders?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Scrum Team",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, stakeholder collaboration is the responsibility of the entire Scrum Team, which includes the Product Owner, Developers, and Scrum Master. Collaboration with stakeholders is crucial for obtaining feedback, gathering requirements, and ensuring the product's alignment with stakeholder needs.",
  },
  {
    id: "486b1724-bd7d-4bd0-b615-087e27142d5f",
    chapter: 4,
    question:
      "Who within the Scrum Team is primarily responsible for estimating the effort required to complete Product Backlog items?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Scrum Team as a whole",
      "The Product Owner",
      "The Developers",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the accountability responsible for sizing Product Backlog items is the Developers. Sizing refers to the estimation or determination of the effort required to complete a Product Backlog item. The Developers collaborate and use their technical expertise to assess the size or effort needed for each item. This information helps in capacity planning and determining the Sprint Backlog during Sprint Planning.",
  },
  {
    id: "25ba9492-013d-44d4-a604-6b55339613d1",
    chapter: 4,
    question:
      "True or False: In Scrum, Sprints are designed to assist the Scrum Team in limiting work-in-progress.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Sprints in Scrum provide a time-boxed period for the Scrum Team to work on a set of selected Product Backlog items. By having fixed durations, Sprints create a sense of urgency and help the team limit the amount of work they take on. The Scrum Team commits to completing the Sprint Backlog items and achieving the Sprint Goal, thus improving their focus and reducing the risk of accumulating excessive work-in-progress. The time-boxed nature of Sprints encourages focus, collaboration, and timely delivery of a potentially releasable increment.",
  },
  {
    id: "47fb78ba-9adc-418e-a573-d79064bf8578",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, the Product Owner must exclusively utilize user stories to create Product Backlog items.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide does not prescribe a specific format for composing Product Backlog items. While user stories are a commonly used technique, they are not the only option. The Product Owner has the freedom to choose the appropriate format for expressing the Product Backlog items, depending on the needs of the product and the stakeholders. The key aspect is that the Product Backlog items should be clear, actionable, and represent the value to be delivered.",
  },
  {
    id: "5ab86f6e-9b15-4e67-b1bc-3e5c76c6ce28",
    chapter: 4,
    question:
      "Who does the Scrum Master serve as a leader and servant?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Developers",
      "The organization and Scrum Team",
      "The stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Scrum Master serves the Scrum Team, including the Product Owner and the Developers. The Scrum Master is leader that serves the in several ways including facilitating the Scrum Team's effectiveness, causing the removal of impediments, and promoting the understanding and application of Scrum within the organization.",
  },
  {
    id: "ef679bbd-ebca-43e9-8ede-7b33267dbcab",
    chapter: 4,
    question:
      "During Sprint Planning, how much of the Sprint Backlog should be created?\n(choose the best answer)",
    options: [
      "All of the potential work must be planned in full",
      "Just enough to understand the architecture",
      "Just enough for the Scrum Master to be able to assign tasks to Developers",
      "As a minimum, just enough, so the Developers can forecast what it can do and provide enough of a plan for the start of the Sprint. More planning can follow in the Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, during Sprint Planning, the Scrum Team creates a Sprint Backlog that contains the work needed to achieve the Sprint Goal. The amount of Sprint Backlog created during this event should be just enough for the Developers to have a plan for the start of the Sprint and be able to forecast what they can do. More planning and refinement can happen throughout the Sprint as new information emerges.",
  },
  {
    id: "f04f9607-3232-4118-bc07-b7fd5e9e2659",
    chapter: 4,
    question:
      "What does the Sprint Goal provide to the Scrum Team?\n(choose the best answer)",
    options: [
      "A unified objective, directing the team's efforts during a Sprint and aiding in decision-making.",
      "Adaptability in work specifics, granting the Developers room to adjust the work scope as needed.",
      "Team motivation and a tangible and shared purpose, driving a sense of accomplishment upon completion.",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Goal, as stated in the Scrum Guide, serves as the single objective for the Sprint. It provides guidance to the Scrum Team by clearly stating why they are building the Increment. The Sprint Goal also offers flexibility in terms of the specific work required to achieve it, allowing the Developers to adapt and make decisions. Additionally, the Sprint Goal promotes coherence and focus within the Scrum Team, encouraging collaboration and discouraging individual initiatives.",
  },
  {
    id: "23b5ceb6-2e1e-4f30-922e-17d951aa1927",
    chapter: 4,
    question:
      'In the MOSCOW technique, what does the letter "C" represent?\n(choose the best answer)',
    options: ["Could Have", "Cannot Have", "Critical", "Complete"],
    correctAnswer: 0,
    explanation:
      'In the MOSCOW prioritization technique, which is often used in business analysis and software development, the acronym stands for: M: Must have, S: Should have, C: Could have, W: Won\'t have (but would like in the future). So, in this context, "C" stands for "Could Have," which refers to features that are nice to have but not necessary for a successful release.',
  },
  {
    id: "8970b81b-2d86-4427-84c4-104acf46d410",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, the Scrum Team has the authority to eliminate the Sprint Retrospective whenever they see fit.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective is an essential event. It provides an opportunity for the Scrum Team to inspect and adapt their processes, identify improvements, and make changes to enhance their effectiveness. The Scrum Team is responsible for conducting the Sprint Retrospective at the end of each Sprint to continuously improve their way of working. Removing or skipping the Sprint Retrospective would undermine the team's ability to reflect, learn, and adapt, and is not in line with the principles of Scrum.",
  },
  {
    id: "759664b2-d3bb-493d-8bf8-32b1083d31be",
    chapter: 4,
    question:
      "Which of the following options best describes a valid Increment?\n(choose the best answer)",
    options: [
      "A document outlining the future features to be developed in upcoming Sprints.",
      "A breakdown of Product Backlog items into tasks for future Sprints.",
      "A design prototype for the user interface.",
      "The total value of all Product Backlog items that adhere to the Definition of Done.",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, a valid Increment is the sum of all the Product Backlog items that have been "Done" during the Sprint, plus the value of the Increments from all previous Sprints. This means that the Increment represents a usable, releasable, and potentially shippable product that meets the Definition of Done.',
  },
  {
    id: "872af715-838d-4c8e-a08e-121e98b8a0bc",
    chapter: 4,
    question:
      "Who is responsible for setting the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Product Owner",
      "The Stakeholders",
      "The Developers",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Sprint Goal is set by the Scrum Team during the Sprint Planning event. The Sprint Goal represents the objective that the team aims to achieve during the Sprint and provides guidance and focus for the development work.",
  },
  {
    id: "d60ade68-13c2-4832-a1c6-abf83be7976b",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, if a Scrum Team is initially unable to produce a Done Increment, they should refrain from adopting Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The Scrum Guide emphasizes the importance of creating a a valuable, useful Increment every Sprint. However, if a team is unable to create a "Done" increment initially, it does not mean they should avoid using Scrum. Scrum promotes continuous improvement, and the team can work towards achieving the ability to deliver a Done Increment over time. By leveraging the transparency, inspection, and adaptation provided by Scrum, the team can identify and address the impediments preventing them from reaching the goal of a Done Increment.',
  },
  {
    id: "c2375376-8d2e-4672-85fc-00af163fdad5",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, the duration of a Sprint can be modified during the project.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the length of a Sprint is a fixed timebox and once established, it should remain consistent throughout the entire product development (i.e., project). The duration of a Sprint is determined based on factors such as the team's ability to create a valuable, useful Increment, risks, stakeholder availability, organizational constraints, domain complexity, product complexity, team experience, and expected Increment maturity. Changing the length of a Sprint during the project can disrupt the team's rhythm, reduce the effectiveness of Sprint Planning, and make it harder to measure progress and forecast delivery.\n\nHowever, this is a recommendation rather than a strict rule. Changing the Sprint length may be beneficial in certain situations, such as significant shifts in the business environment, team maturity, or changing stakeholder needs. Any decision to alter the Sprint length should be made collaboratively, considering its impact on team dynamics and overall project agility. This flexibility allows teams to adapt their process to better suit evolving requirements and project contexts.",
  },
  {
    id: "382ad87a-4f8e-4a36-a452-a7cd26ec8031",
    chapter: 4,
    question:
      "What does the Sprint Backlog represent?\n(choose the best answer)",
    options: [
      "A detailed plan of all future Sprints",
      "A list of tasks assigned by the Product Owner",
      "The complete set of Product Backlog items",
      "A plan of why, what, and how for the current Sprint",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, the Sprint Backlog is a plan that describes "why, what, and how" of the work to be performed during the current Sprint. It is a dynamic artifact that evolves throughout the Sprint as the work is understood and refined.',
  },
  {
    id: "6a931021-95be-41cc-85c7-eca10a47386c",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, an Increment is expected to be in a usable state.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, an Increment is a concrete stepping stone towards the product's vision. It is required to be usable, which means it should meet the Definition of Done and it typically means it could potentially be released or put into use by the end users. The Increment should provide value to stakeholders and allow for meaningful feedback. By ensuring that each Increment is usable, the Scrum Team maximizes the opportunity to gather insights, make improvements, and deliver value incrementally.",
  },
  {
    id: "b8c5f442-35bc-48d4-a004-557d1945ef94",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, it is permissible for the Sprint Backlog to undergo changes during a Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is a forecast of the work needed to deliver the Sprint Goal. While the Sprint Backlog is the plan for the Sprint, it is not set in stone. As new information emerges, the Scrum Team can collaborate to adjust the Sprint Backlog throughout the Sprint. They may add new items, remove or modify existing ones, and adapt their plan as they learn more about the work. This flexibility allows the Scrum Team to respond to change and optimize their progress towards the Sprint Goal.",
  },
  {
    id: "88abae97-6bd4-420a-8e09-bd50d09bbe0b",
    chapter: 4,
    question:
      "Which accountability is responsible for defining and maintaining the Product Goal?\n(choose the best answer)",
    options: [
      "The entire Scrum Team collaboratively.",
      "The stakeholders in collaboration with the Scrum Team.",
      "The Scrum Team, with periodic input from the Product Owner.",
      "The Product Owner.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, defining and maintaining the Product Goal is included as part of “managing the Prduct Backlog.” The Product Goal is a long-term objective that describes the desired outcome of the Product Backlog. It is the responsibility of the Product Owner to create and maintain the Product Goal, ensuring alignment with stakeholders' needs and the overall vision for the product.",
  },
  {
    id: "fd24f4bc-ba74-461f-a199-424334787557",
    chapter: 4,
    question:
      "Whom does the Scrum Master primarily serve?\n(choose the best answer)",
    options: [
      "The Scrum Team and the organization",
      "Themselves",
      "The Product Owner only",
      "The Developers only",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Scrum Master serves the rest of the Scrum Team and the organization. Their primary focus is on teaching, coaching, facilitating, and causing the removal impediments to help the Scrum Team and the organization in adopting and implementing Scrum effectively.",
  },
  {
    id: "dd11669d-68d0-4f36-83f8-7c4dc1536221",
    chapter: 4,
    question:
      "True or False: As per the Scrum Guide, Scrum mandates the formation of a self-managing and cross-functional Scrum Team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, a fundamental aspect of Scrum is the formation of a cross-functional and self-managing Scrum Team. Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how.",
  },
  {
    id: "531801c8-d70a-45b3-a82e-b6ec67376659",
    chapter: 4,
    question:
      "True or False: The Scrum Guide guarantees that reorganizing organizations to effectively create value through Scrum Teams is always an easy process.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide does not make any statement regarding the ease or difficulty of reorganizing organizations to support Scrum Teams. A challenge faced when adopting Scrum is moving from traditional, department-based structure to having small cross-functional teams. While Scrum promotes the use of small cross-functional teams, the process of reorganizing an organization to embrace this structure can vary in difficulty depending on various factors such as the organization's size, culture, existing hierarchy, and level of change resistance. It is important to recognize that organizational change can be complex and may require careful planning, stakeholder alignment, and ongoing effort to achieve the desired outcome.",
  },
  {
    id: "37aabb86-8572-4b23-8fdd-4be3b2c35b9a",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, when dealing with complex work, it is possible to have complete knowledge of all aspects in advance.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The Scrum Guide acknowledges that complex work inherently involves uncertainty and ambiguity. It states that in complex environments, "what will happen is unknown and must be discovered." Therefore, it is not possible to know everything in advance when dealing with complex work. Scrum embraces an empirical approach where knowledge is gained through inspection and adaptation, allowing the Scrum Team to continuously learn and adapt their approach based on new information and insights.',
  },
  {
    id: "f46265f1-83a8-487d-8ff7-6ee318ca3522",
    chapter: 4,
    question:
      "True or False: According to the Scrum Guide, the Sprint Review is solely focused on demonstrating the work completed during the Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Review is more than just a demonstration of the work completed during the Sprint. While a demonstration is part of the Sprint Review, its primary purpose is to inspect the Increment and adapt the Product Backlog if needed. During the Sprint Review, stakeholders provide feedback and collaborate with the Scrum Team to identify any changes or adjustments that may be necessary. The Sprint Review is an opportunity to gather insights, validate assumptions, and make informed decisions about the product.",
  },
  {
    id: "16caa79c-8b0a-4aa1-ab98-12b82f6a93d3",
    chapter: 4,
    question:
      "Who is accountable for defining the Sprint Goal?\n(choose the best answer)",
    options: [
      "Scrum Team.",
      "The Product Owner, in collaboration with the Scrum Team.",
      "The Scrum Master, facilitating the Scrum Team's discussion.",
      "The Scrum Team, with input from stakeholders.",
      "The entire organization, in alignment with business objectives.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the responsibility for creating the Sprint Goal lies with the Scrum Team. The Sprint Goal is a single objective that provides guidance and coherence for the Scrum Team throughout the Sprint. It helps the team focus on why they are building the Increment and encourages collaboration and alignment among team members.",
  },
  {
    id: "871c3747-bb14-490d-86c7-b8d028deb864",
    chapter: 4,
    question:
      "What is the nature of Product Backlog refinement?\n(choose the best answer)",
    options: [
      "The sole responsibility of the Product Owner",
      "A Scrum event",
      "Conducted once per Sprint",
      "An ongoing process involving collaboration between the Scrum Team",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller more precise items. This is an ongoing activity to add details, such as a description, order, and size. Attributes often vary with the domain of work. For example, during Sprint Planning the Scrum Team may refine the Product Backlog, which increases understanding and confidence.",
  },
  {
    id: "d88bbbcc-a532-43ff-8501-f13e9f3070a2",
    chapter: 4,
    question:
      "Who is responsible for making visible all of the work identified as necessary to meet the Sprint Goal?\n(choose the best answer)",
    options: ["Scrum Team", "Product Owner", "Developers", "Scrum Master"],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is a forecast by the Developers of the work that is identified as necessary to meet the Sprint Goal. It contains the selected Product Backlog items, a plan for delivering the Increment, and other elements such as tasks, dependencies, and estimates. The Sprint Backlog is created during the Sprint Planning event and is a collaborative effort of the Developers.",
  },
  {
    id: "20e2c33c-81bc-4a9a-b29f-efd31c68d5df",
    chapter: 4,
    question:
      "What is the core unit responsible for delivering the product Increment in Scrum?\n(choose the best answer)",
    options: [
      "The cross-functional Developers.",
      "The collaborative effort of the entire organization.",
      "The Scrum Team.",
      "The Developers.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the fundamental organizational unit of Scrum is the Scrum Team. The Scrum Team consists of three accountabilities: the Scrum Master, the Product Owner, and the Developers.The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",
  },
  {
    id: "8443b6cc-6921-4692-b01f-d7caf7956ca0",
    chapter: 4,
    question:
      "How often should Developers review and potentially adapt their plan toward the Sprint Goal during the Sprint?\n(choose the best answer)",
    options: [
      "At leasty, daily",
      "Once a week",
      "Whenever management asks",
      "When significant changes occur or new information emerges",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, Developers review and potentially adapt their plan toward the Sprint Goal at least every day during the Sprint. This frequent inspection and adaptation help the Developers stay on track and make necessary adjustments to achieve the Sprint Goal.",
  },
  {
    id: "56463e21-02d9-4891-b834-dfb903961b29",
    chapter: 4,
    question:
      "You are the Scrum Master for four Scrum Teams working on the same Product. At some point, several of the Developers come to you worried because the work identified for the upcoming two Sprints will require a full-time commitment from an external specialist. What would you suggest they do? \n\nI - Identify the Developers interested in the external specialist’s domain to volunteer to take the work in their respective Scrum Teams.  \nII - Have the Developers re-order the Product Backlog so that the external specialist could work as a full-time member of a Scrum Team.  \nIII - Research other frameworks for scaling Scrum.  \nIV - Create a Scrum Team with the specialist and other Developers that volunteer to learn more about his domain.  \nV - Schedule a release Sprint for the specialist to review all his work.  \n\n(choose the best answer)",
    options: [
      "I and IV.",
      "I, II, IV, and V.",
      "I, III, and V.",
      "I, II, III, and IV.",
    ],
    correctAnswer: 0,
    explanation:
      "II - While collaboration with specialists is important, it should not drive the fundamental planning and prioritization process in Scrum  III - Looking for scaled Scrum frameworks won’t solve the issue;   V - There is no release Sprint in Scrum.",
  },
  {
    id: "32ef090f-c55c-4419-ada6-ec28d1499f52",
    chapter: 4,
    question:
      "You are assigned as the Scrum Master of three newly formed Scrum Teams for developing a product. During the kick-off meeting, one of the Developers asks you who will coordinate the work between the different Scrum Teams. What should you answer?\n(choose the best answer)",
    options: [
      "The product architect.",
      "It is their responsibility to form Scrum Teams with the skills and knowledge to create at least one integrated Increment by the end of every Sprint. If they need any help, you are available to teach them how to do it.",
      "You will, personally, visit the teams daily to facilitate synchronizing the Sprint Backlogs.",
      "They should work on separate branches and only integrate work on Integration Sprints.",
      "They should work separately and discuss the integration issues during the Sprint Review. The outcomes of such discussions serve as the basis for planning the next Sprint to integrate work.",
    ],
    correctAnswer: 1,
    explanation:
      "As the Scrum Master, your role is to guide and support the Scrum Teams in becoming self-organizing and cross-functional. It is the responsibility of the Scrum Teams to collaborate and coordinate their work to deliver an integrated Increment at the end of each Sprint. They should possess the necessary skills and knowledge within their respective teams to accomplish this. Your duty is to facilitate the understanding and adoption of Scrum principles and practices, provide guidance on effective collaboration and communication, and help the teams overcome any challenges they may encounter. If the teams need assistance or guidance in coordinating their work, you are available to teach them how to do it effectively. However, it is ultimately their responsibility to ensure the coordination and integration of their work within the Scrum framework.",
  },
  {
    id: "295cabb3-caf4-4353-a165-5b5c7148ca85",
    chapter: 4,
    question:
      "Your organization is using Scrum to develop three of its major products. Management asks your opinion about how many Product Owners should they assign for these three products. What would you suggest? \n\nI - Having one Product Owner responsible for all three products. In this case, the Product Owner may delegate work to others.  \nII - Depending on the complexity of the requirements, there could be as many Product Owners as needed.  \nIII - Having one Product Owner responsible for all three products. In this case, the Product Owner may not delegate work to others.  \nIV - Having three Product Owners, one for each product. Each Product Owner may delegate Product Backlog management work to others. Further, whenever necessary, they align their work through the Product Backlogs.  \n\n(choose the best answer)",
    options: ["I and III.", "I and IV.", "II.", "I, II and IV."],
    correctAnswer: 1,
    explanation:
      "II - Each product must have a single Product Owner; \n\nIII - The Product Owner may delegate responsibilities to others. Regardless, the Product Owner remains accountable for effective Product Backlog management and maximizing the value of the product resulting from the work of the Scrum Team.",
  },
  {
    id: "a83b77fb-4a84-4dd6-97c1-5295b6b4a56e",
    chapter: 4,
    question:
      "You are the Scrum Master for a Scrum Team. One of the team's Developers, John, is constantly missing the Daily Scrum because he thinks that if he gets his job done, the Daily Scrum is a waste of time. Some of the other Developers agree with him, and others don't. However, no action was taken by the Developers. What should you, the Scrum Master, do?\n(choose the best answer)",
    options: [
      "As soon as possible, invite the Developers for a chat and ask them what the benefits of the Daily Scrum are when everybody attends and what might go wrong if someone is missing.",
      "Wait for the next Sprint Retrospective to discuss the matter.",
      "Invite John for a private conversation and ask him to attend the Daily Scrum every day.",
      "Attend the Daily Scrum and coach the Developers on how to conduct it effectively.",
      "Let the Developers self-manage to solve the issue because they own the Daily Scrum. You do not intervene.",
    ],
    correctAnswer: 0,
    explanation:
      "As the Scrum Master, it is important to address the issue of a Developer consistently missing the Daily Scrum. The best approach is to invite the Developers for a discussion about the benefits of the Daily Scrum and the potential issues that may arise when someone is absent as soon as possible. By creating awareness and facilitating an open dialogue, the team can collectively find a resolution that respects the principles and values of Scrum. The Scrum Master's role is to coach and guide the team, empowering them to self-manage and resolve issues effectively.",
  },
  {
    id: "f94f857a-6ba9-4d37-9182-19cc250207da",
    chapter: 4,
    question:
      "One Scrum Team is developing a product with a velocity of 24 points per Sprint. The product received extra funding and a new team will be added to work on the. What is the most likely impact on the original team's velocity in the short term?\n(choose the best answer)",
    options: [
      "Decrease and be lower than 24.",
      "Increase and be higher than 24.",
      "Stay at 24.",
    ],
    correctAnswer: 0,
    explanation:
      "In the short term, due to the learning curve of the new members and dependencies between teams, the velocity tends to reduce.",
  },
  {
    id: "28b080ca-e03a-461b-8f22-765254d6dc63",
    chapter: 4,
    question:
      "Currently, your organization organizes its teams based on components. Looking for ways to improve, your organization hired an agile consultant. One of her suggestions was to, instead of working with component teams, work with feature teams. According to her, feature teams could enhance the capability of the Scrum Teams to deliver Done Increments every Sprint, because it would reduce the dependencies between them. What is one thing that you must consider when making the transition from component to feature teams?\n(choose the best answer)",
    options: [
      "For you to adopt Scrum by the book, you must use feature teams.",
      "Feature teams eases the process of calculating velocity and comparing the productivity between teams.",
      "In the short-term, productivity will be hindered.",
    ],
    correctAnswer: 2,
    explanation:
      "Any change in the teams’ structure tends to reduce their productivity in the short term. In the case of feature teams, they will need time to adapt and get used to working on a feature from end-to-end.",
  },
  {
    id: "05e9c3ba-dc5a-4cf6-8054-e1b8dd55dfdf",
    chapter: 4,
    question:
      "True or False: In Scrum, when multiple Scrum Teams are developing a single product, each team should maintain its own separate Definition of Done.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done. However, keep in mind that the Nexus Guide states that each Scrum Team may choose to apply a more stringent Definition of Done within their own teams, but cannot apply less rigorous criteria than agreed for the Integrated Increment.",
  },
  {
    id: "81487969-88e0-4809-b3c1-792a912d6955",
    chapter: 4,
    question:
      "How many Product Owners are needed for a single product being built by 4 Scrum Teams?\n(choose the best answer)",
    options: [
      "One Chief Product Owner assisted by four Product Owners",
      "It depends on the organization's structure and needs",
      "One",
      "Four",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, there should be one Product Owner for each product being developed. In this case, since there is one product being built by 4 Scrum Teams, the number of Product Owners required is one.",
  },
  {
    id: "c33c6db1-fbe3-4f41-92f5-4836f6ffb8c4",
    chapter: 4,
    question:
      "What does Velocity represent in Scrum?\n(choose the best answer)",
    options: [
      "The team's capacity for work in a Sprint",
      "Amount of work planned for the Sprint",
      "The team's historical performance and predictability",
      "The amount of Product Backlog turned into an Increment during a Sprint",
    ],
    correctAnswer: 3,
    explanation:
      "Velocity refers to the amount of Product Backlog items that a Developers can complete within a Sprint. It represents the work that is turned into a potentially releasable Increment during the Sprint.",
  },
  {
    id: "1008ccf0-9377-470f-b68d-292cad42e533",
    chapter: 4,
    question:
      "In a scenario where there are multiple Scrum Teams working on the same product, who is responsible for ensuring that their outputs can be integrated into one Increment?\n(choose the best answer)",
    options: [
      "The Scrum Master and The Product Owner",
      "The Product Owner",
      "The Developers of each Scrum Team",
      "The stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "In a multi-team Scrum environment as suggested by the Nexus Guide, it's the Developers of each Scrum Team who are responsible for ensuring that their outputs can be integrated into one Increment. The Nexus Guide introduces the concept of a Nexus Integration Team, which includes the Scrum Master, Product Owner, and members from each of the Scrum Teams. While this team helps to manage dependencies and provides support for integration issues, the onus is still on the Developers within each team to ensure that their work integrates properly into a single, valuable Increment. It's their commitment to quality, continuous integration practices, and collaboration across teams that ensure the production of a unified and potentially releasable Increment at the end of each Sprint.",
  },
  {
    id: "1ce4a956-db9b-416f-93e0-ed29f380d048",
    chapter: 4,
    question:
      "Which accountability in Scrum is responsible for creating Gantt charts?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The project stakeholders or management team",
      "None of the above",
    ],
    correctAnswer: 4,
    explanation: "Creating Gantt charts is not part of the Scrum framework.",
  },
  {
    id: "d1375f14-501a-46d4-ab8c-29222464ab89",
    chapter: 4,
    question:
      "Which artifact serves as the single source of requirements for any changes or additions to the product in Scrum?\n(choose the best answer)",
    options: [
      "The Definition of Done (DoD)",
      "The Product Vision and Roadmap",
      "The Product Backlog",
      "Increment",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Backlog is the single source of work undertaken by the Scrum Team.",
  },
  {
    id: "7b4b368a-a857-40e1-a9d2-01f53f3d1858",
    chapter: 4,
    question:
      "Which of the following are accountabilities of the Product Owner in Scrum?\n(choose the best three answers)",
    options: [
      "Facilitating events",
      "Creating and clearly communicating Product Backlog items",
      "Developing and explicitly communicating the Product Goal",
      "Conducting product design sessions",
      "Ordering Product Backlog items",
      "Managing team conflicts",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Product Owner in Scrum has several accountabilities. These include developing and explicitly communicating the Product Goal, creating and clearly communicating Product Backlog items, and ordering Product Backlog items. The Product Owner is responsible for these activities to ensure the product's vision, value, and priorities are effectively managed.",
  },
  {
    id: "fd44404a-a7f5-47f2-82d5-c742a9277d56",
    chapter: 4,
    question:
      "What is the maximum duration of the Sprint Review event in Scrum? \n(choose the best answer)",
    options: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the maximum duration of the Sprint Review is four hours or less for a one-month Sprint. The Sprint Review is a time-boxed event where the Scrum Team and stakeholders collaborate to inspect the Increment and adapt the Product Backlog.",
  },
  {
    id: "6ac9c9e3-588b-496a-9e72-f652139d2851",
    chapter: 4,
    question:
      'What does the term "cone of uncertainty" represent?\n(choose the best answer)',
    options: [
      "Uncertainty remains constant throughout the product development",
      "Uncertainty decreases as more knowledge about the product is gained over time",
      "Uncertainty increases as the product development progresses",
      "Uncertainty is only influenced by project dependencies and timelines",
    ],
    correctAnswer: 1,
    explanation:
      'The "cone of uncertainty" refers to the concept that the level of uncertainty about a project (product development) decreases as more knowledge and understanding of the product are gained over time. It suggests that at the beginning of a project, when less is known, the range of possible outcomes is broader, and as the project progresses and more information is obtained, the uncertainty decreases.',
  },
  {
    id: "bd9ea6ac-83c7-4ea0-8be5-16831f54f88d",
    chapter: 4,
    question:
      "Which of the following Scrum events has the largest timebox?\n(choose the best answer)",
    options: [
      "Sprint Retrospective",
      "Sprint Review",
      "Sprint Planning",
      "Sprint Kickoff",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective has a maximum timebox of 3 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The Sprint Review has a maximum timebox of 4 hours for a one-month Sprint, while the Sprint Planning has a maximum timebox of 8 hours for a one-month Sprint. The Sprint Kickoff is not a Scrum event.",
  },
  {
    id: "23030613-b619-4131-9623-f82fda4c7529",
    chapter: 4,
    question:
      "Which of the following are not required in Scrum?\n(choose the best two answers)",
    options: [
      "Planning Poker",
      "Product Goal",
      "Release Planning",
      "Sprint Goal",
      "Product Backlog",
      "Daily Scrums",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "Planning Poker and Release Planning are optional in Scrum. They are not mentioned in the Scrum Guide as required artifacts or events. The Product Goal, Sprint Goal, Daily Scrums, and Product Backlog are all required aspects of Scrum.",
  },
  {
    id: "341700c5-e9fd-4b66-a80a-df11139edf6b",
    chapter: 4,
    question:
      'True or False: The Developers must answer the "3 questions" during the Daily Scrums.',
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The statement is false. The "3 questions" are not mandatory at the Daily Scrum. According to the Scrum Guide, the Developers can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal and produces an actionable plan for the next day of work.',
  },
  {
    id: "53fa5e87-25cb-4696-b33b-14ba6d2310de",
    chapter: 4,
    question:
      "Which of the following are included in managing the Product Backlog?\n(choose all that apply)",
    options: [
      "Communicating the Product Goal",
      "Creating Product Backlog items",
      "Ordering Product Backlog items",
      "Ensuring transparency of the Product Backlog",
      "Breaking down the Product Backlog items into technical tasks",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2, 3],
    isMultiSelect: true,
    explanation:
      "Product Backlog management includes developing and explicitly communicating the Product Goal, creating and clearly communicating Product Backlog items, ordering Product Backlog items, and ensuring that the Product Backlog is transparent, visible, and understood. Breaking down the Product Backlog into technical tasks is typically part of the Sprint Backlog and done during Sprint Planning by the Developers.",
  },
  {
    id: "adfadc1e-81d3-47ed-a3a2-1ec8de2ed9da",
    chapter: 4,
    question:
      "True or False: The responsibility for realizing the Scrum values lies solely with the Scrum Master.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Scrum Team as a whole, including the Product Owner, Developer, and Scrum Master, is responsible for embracing and promoting the Scrum values of commitment, courage, focus, openness, and respect. While the Scrum Master plays a crucial role in facilitating the adoption of these values, it is a collective responsibility of the entire Scrum Team to uphold and embody them in their work.",
  },
  {
    id: "f3e12c19-20d7-40b3-93d5-a25eaae4aa7e",
    chapter: 4,
    question:
      "Choose the incorrect statement about the Definition of Done (DoD).\n(choose the best answer)",
    options: [
      "The Product Owner defines the DoD for the Scrum Team.",
      "The DoD is used to assess when work is considered Done and part of the Increment.",
      "The Definition of Done is one of the appropriate topics to be discussed during the Sprint Retrospective.",
      "The DoD can be changed throughout product development.",
    ],
    correctAnswer: 0,
    explanation:
      'The Definition of Done (DoD) is an agreed-upon set of criteria that defines when an increment of work is considered "Done." It is used to ensure the quality of work and assess whether an item is part of the Increment. The DoD is collaboratively established by the Scrum Team, including the Product Owner, Developer, and Scrum Master.',
  },
  {
    id: "74820d68-928a-4d4a-9e77-b428e5ab4152",
    chapter: 4,
    question:
      "Which of the following factors contribute to balancing creativity, efficiency, flexibility, and productivity for the Scrum Team?\n(choose the best answer)",
    options: [
      "Having a Lead Developer.",
      "Relying on external subject matter experts for specialized work.",
      "Empowerment of the Scrum Team for self-management towards a Product Goal.",
      "A performance management system that rewards individual high achievers in the team.",
    ],
    correctAnswer: 2,
    explanation:
      "Empowerment of the Scrum Team for self-management is a critical factor that contributes to balancing creativity, efficiency, flexibility, and productivity. When the Scrum Team has the authority and autonomy to make decisions about how to achieve the Product Goal, they can adapt and respond to changing requirements and conditions effectively. This self-organization allows the team to be creative in their approach, efficient in their work, flexible in handling challenges, and productive in delivering valuable Increments. It fosters a collaborative and motivated environment, ensuring the team works cohesively towards the shared objective.",
  },
  {
    id: "6f92bab0-6dd5-4e8f-b18a-47967d045b40",
    chapter: 4,
    question:
      "True or False: The Scrum Guide mandates a specific structure for the Daily Scrum, requiring every Developer to answer the three questions:  \n1 - What did I do yesterday that helped the Scrum Team meet the Sprint Goal? \n2 - What will I do today to help the Scrum Team meet the Sprint Goal? \n3 - Do I see any impediment that prevents me or the ScrumTeam from meeting the Sprint Goal?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The structure of the Daily Scrum is not mandated by the Scrum framework. The Scrum Guide provides a guideline suggesting that the Daily Scrum is a time-boxed event to plan work for the next 24 hours. It emphasizes the importance of collaboration, inspection, and adaptation. While it is common for teams to use the format of answering the three questions mentioned, it is not a requirement. The goal is for the Developers to plan their work together and make progress toward the Sprint Goal.",
  },
  {
    id: "7ea42b95-2be2-4efd-a5e9-65902b76cb57",
    chapter: 4,
    question:
      "True or False: The Product Backlog exclusively consists of user stories.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Backlog is not limited to just user stories. It is an ordered list of all the requirements, features, enhancements, and fixes that constitute the changes to be made to the product. While user stories are a common way to express these requirements, other types of items, such as technical tasks, bugs, or research items, can also be included in the Product Backlog. The key is that each item should provide value to the product and be necessary for achieving the product's goals.",
  },
  {
    id: "6d626789-f985-480a-89a5-1c101d80e3e0",
    chapter: 4,
    question:
      "True or False: The accountability of the Scrum Master can be distributed among multiple people.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The accountability of the Scrum Master cannot be distributed among multiple people. In the Scrum framework, the role of the Scrum Master is defined as a single individual who is responsible for ensuring that Scrum is understood and followed, and for promoting and supporting the Scrum Team and organization in adopting Scrum principles and practices. Having multiple people fulfilling the Scrum Master role would lead to confusion, lack of clear responsibility, and potentially hinder the effectiveness of the Scrum Master's duties.",
  },
  {
    id: "e4e5ab20-259f-463f-9788-be74a7d5804f",
    chapter: 4,
    question:
      "True or False: Stakeholders are not allowed to communicate with the Developers during a Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the collaboration between stakeholders and Developers is essential in Scrum. Stakeholders have the opportunity to provide clarifications, insights, and feedback to the Developers during the Sprint. This collaboration helps in ensuring that the development efforts align with stakeholder expectations and enables transparency in the progress of the work.",
  },
  {
    id: "98e7ce12-86a3-4655-a8ee-329a9afc1d70",
    chapter: 4,
    question:
      "True or false: The Product Owner may represent a committee's desires and needs in the Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Product Owner may represent the desires of a committee in the Product Backlog. According to the Scrum Guide, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. They are responsible for developing and explicitly communicating the Product Goal, creating and clearly communicating Product Backlog items, ordering Product Backlog items, and ensuring that the Product Backlog is transparent, visible, and understood.",
  },
  {
    id: "37642b26-3ae7-4f34-8dab-f14d6badf088",
    chapter: 4,
    question:
      "Assign the correct timebox to each Scrum event. Assume that the Sprint lasts one calendar month.\n(choose the best answer)",
    options: [
      "Sprint Planning - 4 hours, Daily Scrum - 15 minutes, Sprint Review - 8 hours, Sprint Retrospective - 4 hours.",
      "Sprint Planning - 8 hours, Daily Scrum - 30 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours.",
      "Sprint Planning - 6 hours, Daily Scrum - 15 minutes, Sprint Review - 2 hours, Sprint Retrospective - 2 hours.",
      "Sprint Planning - 8 hours, Daily Scrum - 15 minutes, Sprint Review - 4 hours, Sprint Retrospective - 3 hours.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the timeboxes for each Scrum event are as follows: \n- Sprint Planning: 8 hours per month of Sprint duration.\n- Daily Scrum: 15 minutes.\n- Sprint Review: 4 hours for a monthly Sprint.\n- Sprint Retrospective: 3 hours for a monthly Sprint.",
  },
  {
    id: "32e2c7b8-939b-4cf7-bf9b-c783fab0f213",
    chapter: 4,
    question:
      "True or False: The Scrum Master is accountable for the effectiveness of the Scrum Team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Scrum Master is accountable for the Scrum Team's effectiveness. According to the Scrum Guide, the Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They do this by helping everyone understand Scrum theory and practice, both within the Scrum Team and the organization.",
  },
  {
    id: "e7e0920d-19f6-45da-8f84-fd346d2c0c1a",
    chapter: 4,
    question:
      "How should the time spent on Product Backlog refinement be determined?\n(choose the best answer)",
    options: [
      "As much as the Product Owner and Developers sees the need for creating enough ready Product Backlog Items for the next Sprints.",
      "As much as the Scrum Master says, since he/she is responsible for the Scrum Team’s effectiveness.",
      "At least, 10% of the capacity of the Developers in a Sprint.",
      "As much as the Product Owner sees the need for creating enough ready Product Backlog Items for the next Sprints.",
    ],
    correctAnswer: 0,
    explanation:
      "The time spent on Product Backlog refinement (also known as Backlog Refinement or Grooming) should be determined collaboratively by the Product Owner and the Developers based on the needs of the Scrum Team. The goal of refinement is to ensure that the Product Backlog contains sufficient, well-defined, and actionable items that can be pulled into Sprints for development. The team should dedicate time to refinement as needed to keep the Product Backlog in a healthy state, and this may vary depending on factors such as the complexity of the product, upcoming Sprints, and changing requirements. It is an ongoing activity that takes place throughout the Sprint and is a shared responsibility of the Scrum Team.",
  },
  {
    id: "4fdc7c6e-26d6-4f86-a2e7-207e303fbc92",
    chapter: 4,
    question:
      "True or False: In Scrum, it is optimal to discover issues later in the product development cycle.\n(choose the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "In the context of Scrum, it is better to discover issues sooner rather than later. By identifying problems early in the development lifecycle, teams have a greater opportunity to address and resolve them before they escalate into larger issues. Early detection allows for timely adjustments and mitigations, improving the overall quality and success of the product development initiative.",
  },
  {
    id: "f862b30c-6f1c-44bc-9411-9ff1ebdb29d7",
    chapter: 4,
    question:
      "What is the maximum duration of a Sprint according to the Scrum Guide?\n(choose the best answer)",
    options: ["1 month", "3 weeks", "2 weeks", "1 week"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the maximum duration of a Sprint is one month or less. Answer A correctly states that the maximum duration is 1 month.",
  },
  {
    id: "da387451-4000-4b6a-9546-fc3591687b65",
    chapter: 4,
    question:
      "Who has the authority to change the Sprint Backlog during the Sprint?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Stakeholders",
      "The Developers",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is owned by the Developers. Therefore, only the Developers have the authority to make changes to the Sprint Backlog during the Sprint. Answer A correctly identifies that the Developers can change the Sprint Backlog during the Sprint.",
  },
  {
    id: "7fedb13e-2bab-4d44-a582-697edda7fb77",
    chapter: 4,
    question:
      "True or False: the Scrum Master accountable for establishing Scrum as defined in the Scrum Guide.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Scrum Master is indeed accountable for establishing Scrum as defined in the Scrum Guide. This includes ensuring that the Scrum Team understands and follows the Scrum framework, facilitating Scrum events, causing the removal of impediments, and promoting a culture of continuous improvement. The Scrum Master serves as a guide and coach to the team, helping them embrace the principles and practices of Scrum.",
  },
  {
    id: "8ef2d593-b9c9-4426-9e0d-808b25ce6233",
    chapter: 4,
    question:
      "In which domain does Scrum operate when the level of unknown factors outweighs the known ones?\n(choose the best answer)",
    options: [
      "Simple domain",
      "Complicated domain",
      "Complex domain",
      "Chaotic domain",
    ],
    correctAnswer: 2,
    explanation:
      "The complex domain is characterized by a high level of uncertainty and unpredictability. In this domain, the amount of unknown factors and variables outweighs the known ones. It requires experimentation, adaptation, and an empirical approach to navigate through the complexity and discover solutions.",
  },
  {
    id: "80c24d9a-370b-4046-b5c5-a6bb3abb2772",
    chapter: 4,
    question:
      "What is the recommended frequency for releasing Increments in Scrum?\n(choose the best answer)",
    options: [
      "Frequently enough to maximize value delivery and reduce risks",
      "At least once a year",
      "When development is fully complete",
      "Every 6 months",
      "Every Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum Guide does not specify a fixed frequency for releasing Increments. However, it emphasizes the importance of delivering value early and often. Releasing Increments frequently helps reduce risk by allowing for early feedback, validation, and learning. The specific release frequency may vary depending on the product, context, and stakeholder needs.",
  },
  {
    id: "51e17bdf-8df3-4ec2-b5a9-94a55acdc78f",
    chapter: 4,
    question:
      "Among the following accountabilities, which one is accountable for ensuring that Scrum is understood and enacted, and for facilitating the effectiveness of the Scrum Team?\n(choose the best answer)",
    options: [
      "Scrum Master",
      "Scrum Manager",
      "Product Owner",
      "The Developers",
    ],
    correctAnswer: 0,
    explanation:
      "In the Scrum Team, the accountability of the Scrum Master is well-defined. The Scrum Master serves as a servant-leader for the Scrum Team and the organization. They are responsible for ensuring that Scrum is understood and enacted, and for facilitating the team's effectiveness by removing any impediments that may hinder progress.",
  },
  {
    id: "70dacd90-351b-424e-8d43-6999c7b097df",
    chapter: 4,
    question:
      "True or False: It is mandatory for Scrum Teams to have at most 10 members.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide does not define a specific size for Scrum Teams. Instead, it suggests that a Scrum Team should be small enough to remain nimble and large enough to complete significant work within a Sprint. The size of the Scrum Team may vary depending on the nature of the work, complexity of the product, and the required skills and expertise. While smaller teams are generally recommended for better collaboration and communication, there is no hard limit of 10 people imposed by Scrum.",
  },
  {
    id: "20c9b552-aa80-49a1-aa97-3efb19ea6845",
    chapter: 4,
    question:
      "Which of the following activities are not required to be completed in the first Sprint? \n(choose the best two answers)",
    options: [
      "Conducting Daily Scrums",
      "Designing the full solution",
      "Collaborating with stakeholders",
      "Creating a complete Product Backlog",
      "Developing an Increment",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      'According to the Scrum Guide, in the first Sprint, the Scrum Team\'s primary focus is to develop a "Done" Increment of functionality that is useful and valuable. This indicates that creating a Done Increment is expected to be accomplished within the first Sprint. However, designing the entire solution and creating a comprehensive Product Backlog are not mandatory to be completed during this initial Sprint.',
  },
  {
    id: "186113b2-bcfc-4a37-b838-7863a71dc300",
    chapter: 4,
    question:
      "True or False: A challenge when working on complex environments and adopting Scrum is that people may be resistant to changes.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "It is common for people to resist change or being changed, especially when it disrupts their established routines, accountabilities, or comfort zones. This resistance can arise due to fear of the unknown, loss of control, or perceived threats to personal or professional interests. Recognizing and addressing resistance to change is important for successful implementation of Scrum or any other organizational change initiative.",
  },
  {
    id: "5f605e75-dd8a-46eb-b6de-b13b3fbd96c0",
    chapter: 4,
    question: "True or False: The Sprint Goal is a required element in Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, having a Sprint Goal is a key element of Scrum. The Sprint Goal provides guidance and focus to the Scrum Team, helping them understand the purpose of the Sprint and make decisions about what work to undertake and what to leave aside. It helps create a cohesive vision and enables the team to deliver a valuable increment by the end of the Sprint.",
  },
  {
    id: "9e7fcdcd-5296-4949-986e-c2e6738d8a4b",
    chapter: 4,
    question:
      "True or False: The Product Backlog can be adjusted based on the input from stakeholders during the Sprint Review.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "During the Sprint Review event, the Scrum Team and stakeholders come together to review the work completed during the Sprint and discuss any changes in the business environment. Based on this information, they collaborate on determining the next steps. As part of this collaboration, the Product Backlog can be adjusted to take advantage of new opportunities that arise. Therefore, the statement that the Product Backlog may be reordered following input from Stakeholders at the Sprint Review is true.",
  },
  {
    id: "d85d7201-3986-4a66-80f4-1b5a0d145f46",
    chapter: 4,
    question:
      "Which Scrum event is specifically dedicated to inspecting the process and identifying opportunities for improvement?\n(choose the best answer)",
    options: [
      "Sprint Planning",
      "Sprint Retrospective",
      "Sprint Review",
      "Daily Scrum",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum event that focuses on process improvement is the Sprint Retrospective. During this event, the Scrum Team reflects on their collaboration, identifies opportunities for improvement, and makes a plan for implementing changes to enhance their effectiveness.",
  },
  {
    id: "07b354fa-d403-4a7d-9e4c-df9808e5e803",
    chapter: 4,
    question:
      "True or False: Stakeholder feedback is exclusively captured during the Sprint Review.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide emphasizes that stakeholder feedback is valuable and should be incorporated throughout the Sprint. While the Sprint Review is an important ceremony dedicated to inspecting the Increment and adapting the Product Backlog, it is not the only occasion for capturing stakeholder feedback. Scrum encourages continuous collaboration and feedback loops to ensure that the product meets the stakeholders' needs and expectations.",
  },
  {
    id: "c5ec137c-07d1-40b6-aa82-0bbefe9232c8",
    chapter: 4,
    question:
      "Why is it recommended to hold the Daily Scrum at the same time and same place?\n(choose the best answer)",
    options: [
      "It helps ensure the Scrum Master's availability",
      "It should happen every morning",
      "It simplifies room booking logistics",
      "It promotes consistency and reduces complexity",
    ],
    correctAnswer: 3,
    explanation:
      "The main reason for holding the Daily Scrum at the same time and same place is to reduce complexity. By establishing a consistent time and location, the Scrum Team can develop a habit of coming together daily for effective coordination and collaboration, reducing the need for unnecessary coordination efforts.",
  },
  {
    id: "4a632fe3-bf41-42e7-aff0-57c63ef78806",
    chapter: 4,
    question:
      "Which of the following statements best describes a Scrum Team?\n(choose the best answer)",
    options: [
      "A group of individuals with diverse skills working on multiple objectives simultaneously",
      "A collection of specialists responsible for different phases of product development",
      "A cohesive unit of professionals focused on one objective at a time",
      "A temporary team assembled for a single project",
    ],
    correctAnswer: 2,
    explanation:
      "A Scrum Team is a cohesive unit of professionals working together towards a common objective. They are self-managing and cross-functional, meaning they possess all the necessary skills to deliver a potentially releasable Increment of the product. The Scrum Team collaborates closely and collectively takes responsibility for the product's development.",
  },
  {
    id: "d06b4e51-52de-4eca-91f7-9f4b11df3e41",
    chapter: 4,
    question:
      "True or False: Once Scrum is established and the Scrum Team is autonomous and mature enough, it is possible to remove the Scrum Master from the team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Scrum Master plays a crucial role in promoting and supporting Scrum as defined in the framework. The Scrum Master helps the Scrum Team understand and apply Scrum principles and guides the organization in adopting Scrum. However, Scrum does not allow the removal of the Scrum Master. The Scrum Master continues to provide valuable guidance and support to the team and the organization throughout Scrum implementation.",
  },
  {
    id: "b688e2f5-401f-42fa-b8e0-6ec4a8abf3cb",
    chapter: 4,
    question:
      "True or False: Scrum is the only known way of embracing the Agile mindset.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Scrum is a framework for Agile product development, but there are other Agile approaches such as Kanban and Extreme Programming (XP). Agile is a mindset and a set of values and principles that can be applied in various ways depending on the context and needs of the organization.",
  },
  {
    id: "b4ec5f68-0521-4b26-bc6e-313fd863a720",
    chapter: 4,
    question:
      "True or False: The Sprint Review requires the Developers to explicitly discuss what went well, encountered problems, and their solutions during the Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide states that the purpose of the Sprint Review is to inspect the Increment and adapt the Product Backlog. While the Scrum Guide encourages collaboration and transparency during the Sprint Review, it does not specifically require the Developers to discuss what went well, what problems they faced, and how those problems were solved. The focus of the Sprint Review is on feedback and potential adaptations to the product.",
  },
  {
    id: "5b7f4fe3-f723-4c34-b42b-aec54a6f9eff",
    chapter: 4,
    question:
      "True or False: The Scrum Guide mandates that the Increment must be released at the conclusion of each Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide does not require the Increment to be released at the end of every Sprint. The Increment is a potential releasable version of the product, but its release timing is determined by the Scrum Team (through collaboration with the stakeholders) based on business needs and market conditions. Releasing the Increment can occur at any time during or at the end of a Sprint.",
  },
  {
    id: "8c436cfc-5ed7-4ed3-a17d-212854923474",
    chapter: 4,
    question:
      "Which of the following correctly matches the Scrum Artifacts with their commitments?\n(choose the best answer)",
    options: [
      "Product Backlog - Product Goal, Sprint Backlog - Sprint Goal, Increment - Definition of Done",
      "Product Backlog - Definition of Done, Sprint Backlog - Product Goal, Increment - Sprint Goal",
      "Product Backlog - Sprint Goal, Sprint Backlog - Definition of Done, Increment - Product Goal",
      "Product Backlog - Increment, Sprint Backlog - Product Goal, Increment - Sprint Goal",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Backlog has the Product Goal, the Sprint Backlog has the Sprint Goal, and the Increment has the Definition of Done. These are the three Scrum Artifacts and their associated commitments as defined in the Scrum Guide.",
  },
  {
    id: "bc2e0393-3e1f-45d2-a3ad-d1c969ceeca2",
    chapter: 4,
    question:
      "True or False: The accountability for adhering to a Definition of Done lies only with the Developers.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The Scrum Guide states that "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint." This means that while the Developers are responsible for ensuring that the Increment meets the Definition of Done by “creating any aspect of a usable Increment each Sprint”, the entire Scrum Team, including the Product Owner and the Scrum Master, share the accountability for delivering a valuable, useful Increment every Sprint. It is a collaborative effort of the entire team to create a valuable and high-quality Increment.',
  },
  {
    id: "5453e96c-9c17-402a-83fd-9523193a2e8b",
    chapter: 4,
    question:
      "True or False: In complex environments, it is recommended to build products in a manner that reduces the cost of change, considering the inevitability of change.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Agile principles, in complex environments, it is advisable to build products in a way that minimizes the cost of change. This is because in complex domains, change is inevitable and often difficult to predict or control. By embracing change and designing products with flexibility and adaptability in mind, teams can respond effectively to emerging requirements and market dynamics, reducing the overall cost and effort associated with change.",
  },
  {
    id: "33760d81-5136-41a5-be3e-71d53cf6c004",
    chapter: 4,
    question:
      "True or False: The Sprint Backlog must be fully defined and complete by the end of Sprint Planning.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is a forecast by the Developer about the functionality that will be built during the Sprint. It is created during the Sprint Planning event but does not need to be fully defined or complete at the end of Sprint Planning. The Developer collaboratively works on refining and updating the Sprint Backlog throughout the Sprint as more information and understanding emerges.",
  },
  {
    id: "d157a23c-2662-40c5-b10f-48e2b259714e",
    chapter: 4,
    question:
      "What does the Scrum Team commit to each Sprint? \n\n(choose the best two answers)",
    options: [
      "Getting done with the Sprint Backlog forecasted on Sprint Planning.",
      "The Sprint Goal",
      "Reporting to the Product Owner about the progress on a daily basis.",
      "Seeking stakeholder feedback.",
      "Increasing their velocity.",
      "Updating the Sprint burndown right after each Daily Scrum.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      'Notice that the best answer here is "The Sprint Goal ," but you need to choose two answers, and none of the remaining ones are "perfect" (i.e., a commitment directly found in the Scrum Guide). Thus, you will need to choose the "less bad," the one that is more closely aligned with Scrum\'s values.\n\nWhile "IV - Seeking stakeholder feedback" might not be a direct commitment like the Sprint Goal, it is a crucial aspect of the Scrum framework, emphasizing the importance of stakeholder engagement and feedback for product development. In exams that test deeper understanding and application, such as PSM II, recognizing the importance of stakeholder engagement, even though it\'s not a core commitment like the Sprint Goal, can be a valid choice when compared against other less relevant options. This approach encourages a more comprehensive understanding of Agile and Scrum practices beyond the basics.\n\nComments:\nI - The Sprint Backlog is just a forecast; the Scrum Team commits to the Sprint Goal; \nIII - The Developers don’t need to report progress to the Product Owner. However, they uphold transparency so that the Product Owner has access to the information that she needs. \nV - Increasing velocity is not a focus of the Scrum Team. It might naturally happen whenever they increase their ways of working. \nVI - It is up to the Developers to decide how to track progress.',
  },
  {
    id: "856487f5-ce30-499e-8c89-5a701be83037",
    chapter: 4,
    question:
      "Which events are time-boxed according to the Scrum Guide?\n\n(choose the best three answers)",
    options: [
      "Sprint 0",
      "Project Retrospective",
      "Sprint Review",
      "Design Sprint",
      "Stabilization",
      "The Sprint",
      "Daily Scrum",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 5, 6],
    isMultiSelect: true,
    explanation:
      "The Scrum Guide states that all Scrum Events are time-boxed. The Sprint (one month or less), Sprint Planning (maximum eight hours for a one-month sprint; usually shorter for shorter Sprints), Daily Scrum (15-minutes), Sprint Review (maximum four hours for a one-month Sprint; usually shorter for shorter Sprints), and the Sprint Retrospective (maximum three hours for a one-month Sprint; usually shorter for shorter Sprints).",
  },
];

// Practice Test #5 — 180 questions
export const questionsPracticeTest5: Question[] = [
  {
    id: "e0f60729-a442-4811-90b7-88bca94592c9",
    chapter: 5,
    question:
      "A Sprint has started and you are the Scrum Master. The Product Owner comes to you and asks who defines when it is appropriate to update the Sprint Backlog. What should you tell her?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The stakeholders",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, it is the Developers who determine when it is appropriate to update the Sprint Backlog during a Sprint. The Sprint Backlog is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint, and it belongs solely to the Developers.",
  },
  {
    id: "bafc74ea-7f42-4325-81a7-278e08726097",
    chapter: 5,
    question:
      "Who uses the Sprint Review as an opportunity to inspect and adapt? \n(choose the best answer)",
    options: [
      "The Scrum Team and stakeholders",
      "The Product Owner and the Developers",
      "The Product Owner and management",
      "The Developers and stakeholders",
      "The Product Owner and stakeholders",
      "The Developers and executives",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Review is mainly an inspect and adapt opportunity for the Scrum Team and stakeholders. During the Sprint Review, the Scrum Team and stakeholders collaborate on what was done in the Sprint, and based on that and any changes to the Product Backlog during the Sprint, attendees collaborate on the next things that could be done to optimize value.",
  },
  {
    id: "c3590f6b-4a9c-430c-b8f9-43456051fa01",
    chapter: 5,
    question:
      "Which output from Sprint Planning gives the Scrum Team a clear objective and overall guidance for the Sprint?\n(choose the best answer)",
    options: [
      "The Sprint Backlog",
      "The Sprint plan",
      "The Sprint Goal",
      "The Sprint scope",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Goal is created during the Sprint Planning event and then added to the Sprint Backlog. As the Developers work during the Sprint, they keep the Sprint Goal in mind. It provides the Scrum Team with a target and overarching direction for the Sprint is the Sprint Goal. It is an objective set for the Sprint that can be met through the implementation of Product Backlog. It provides guidance to the Developers on why it is building the Increment.",
  },
  {
    id: "6993ca7f-795c-4f39-8072-4247453b860c",
    chapter: 5,
    question:
      "What is the role of the Scrum Master in the Sprint Retrospective? \n(choose the best answer)",
    options: [
      "Facilitating when necessary and contributing as a member of the Scrum Team.",
      "Reporting the discussions to upper management",
      "Registering the outcomes",
      "Defining the improvement items that will be worked on next Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "During the Sprint Retrospective, the Scrum Master is responsible for participating as a Scrum Team member and facilitating as requested or needed. The Scrum Master encourages the Scrum Team to improve its development process and practices within the Scrum framework, and helps the team create a plan for implementing improvements.",
  },
  {
    id: "3e5d11ab-05f7-4f67-83a7-48206cefa741",
    chapter: 5,
    question:
      "A Sprint has started and you are the Scrum Master. The Developers discover that they have taken on too much work for the Sprint and ask you what they should do. What should you tell them? \n(choose the best answer)",
    options: [
      "Notify the Product Owner during the Sprint Review",
      "Negotiate with management to work extra hours",
      "Collaborate with the Product Owner to remove some work or Product Backlog items as soon as possible",
      "Remove a few of the Definition of Done criteria to speed up development",
    ],
    correctAnswer: 2,
    explanation:
      "If the Developers realize they have selected too much work to finish in the Sprint, they should, as soon as possible in the Sprint, work with the Product Owner to remove some work or Product Backlog items. The Developers and Product Owner will negotiate which items to remove from the Sprint Backlog so that the Developers can still meet the Sprint Goal.",
  },
  {
    id: "cc0dc0e3-d8d3-4572-a37d-7f1fd9915567",
    chapter: 5,
    question:
      "Which Scrum Values are compromised when the team works on low-value Product Backlog items?\n(choose the best three answers)",
    options: [
      "Return on Investment",
      "Focus",
      "Courage",
      "Net Present Value",
      "Respect",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2, 4],
    isMultiSelect: true,
    explanation:
      "The Scrum Values that are violated by building Product Backlog items that have low business value are Focus, Courage, and Respect. Focus is violated because the team is not focusing on delivering the most valuable items first. Courage is violated because the team is not being transparent about the low value of the items and not having the courage to address it. Respect is violated because the team is not respecting the stakeholders’ time and investment by delivering low-value items.",
  },
  {
    id: "a7576d3d-683e-442c-b7d3-177378519c4a",
    chapter: 5,
    question:
      "What is the reason for conducting the Daily Scrum at a consistent time and location?\n(choose the best answer)",
    options: [
      "It makes it easier to schedule rooms",
      "It reduces complexity",
      "The time starts the day knowing what to do",
      "Because it is a Scrum rule",
    ],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum is held at the same time and same place to reduce complexity. The consistency of the time and place helps the team to establish a routine and minimizes the need for scheduling and coordination. This allows the team to focus on the work at hand and use the time effectively.",
  },
  {
    id: "f9de6488-20ef-4155-a0da-1c1db35c2951",
    chapter: 5,
    question:
      "Who is in charge of estimating the size of Product Backlog items? \n(choose the best answer)",
    options: [
      "The Developers after discussing trade-offs and requirements with the Product Owner",
      "The Scrum Master",
      "The Product Owner",
      "The Developers, independently",
      "Senior members of the organization, such as architects and experts",
    ],
    correctAnswer: 0,
    explanation:
      "The Developers are responsible for the sizing of Product Backlog items after clarifying requirements with the Product Owner. The Developers have the technical expertise to estimate the effort required to complete a Product Backlog item, and the Product Owner provides the necessary clarification on the requirements.",
  },
  {
    id: "900da8eb-1af0-4e47-832a-14901b039658",
    chapter: 5,
    question:
      "True or False: The responsibilities of a Scrum Master are equivalent to those of a conventional Project Manager.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "False. A Scrum Master does not fulfill the same accountability as a traditional Project Manager. The Scrum Master is a leader who serves the Scrum Team, responsible for promoting and supporting Scrum by helping everyone understand Scrum theory, practices, rules, and values. The Scrum Master is not responsible for managing the project or the team, but rather for facilitating the Scrum process and causing the removal of impediments.",
  },
  {
    id: "91e013ed-c2ca-48c8-9561-e8182dbf69da",
    chapter: 5,
    question:
      "Which option accurately reflects the scope of Sprint Planning?\n(choose the best answer)",
    options: [
      "The team composition and assignment of roles",
      "Create the schedule",
      "The work that can be done,  how to do it, and why to do it",
      "The Sprint plan and who will work on what",
      "Identify the dependencies between Product Backlog items",
    ],
    correctAnswer: 2,
    explanation:
      'The answer that best describes the topics covered in Sprint Planning is "The work that can be done,  how to do it, and why to do it". During Sprint Planning, the Scrum Team collaborates to define the Sprint Goal, select Product Backlog items for the Sprint, and create a plan for delivering the Increment and achieving the Sprint Goal.',
  },
  {
    id: "65bb4a74-5aaa-4a8c-9b9f-f752003c23fe",
    chapter: 5,
    question:
      "Who is accountable for overseeing the advancement of work within a Sprint? \n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The least experienced team member",
    ],
    correctAnswer: 1,
    explanation:
      "The Developers are accountable for managing the progress of work during a Sprint. They are responsible for organizing and managing their own work to achieve the Sprint Goal. They collaborate and coordinate their work to create a high-quality Increment that meets the Definition of Done.",
  },
  {
    id: "00f3cf66-ffe4-4d21-920b-18caa501eae6",
    chapter: 5,
    question:
      "True or False: A Product Owner and a Scrum Master are mandatory members of every Scrum Team.",
    options: [
      "False. A Scrum Master is only necessary if requested by the team",
      "True. Both must be fully dedicated to the team",
      "False. The Product Owner is not always necessary",
      "True. Their involvement and availability impact the team’s outcomes",
    ],
    correctAnswer: 3,
    explanation:
      "True. Every Scrum Team must have a Product Owner and a Scrum Master. The Product Owner is responsible for maximizing the value of the product resulting from the work of the Scrum Team, while the Scrum Master is responsible for promoting and supporting Scrum by helping everyone understand Scrum theory, practices, rules, and values. Both accountabilities are essential for the success of the Scrum Team.",
  },
  {
    id: "ddc7b106-4c37-429a-a47b-583c1390c43b",
    chapter: 5,
    question:
      "Which of the following is true about estimating work in Scrum? \n(choose the best answer)",
    options: [
      "Estimates must be expressed in relative units",
      "The Product Owner makes the estimates with the support of the Developers",
      "The individuals performing the work are responsible for making the estimates",
      "Product Backlog items must be estimated using story points",
      "Estimation is not allowed in Scrum",
    ],
    correctAnswer: 2,
    explanation:
      "Estimates are made by the people doing the work. In Scrum, it is the Developers who have the technical expertise to estimate the effort required to complete a Product Backlog item. They collaborate with the Product Owner to clarify requirements and provide estimates based on their understanding of the work involved.",
  },
  {
    id: "17b918d9-25f0-420a-ae03-0a96c24623bf",
    chapter: 5,
    question:
      "True or False: Only the Product Owner interacts with stakeholders, while Developers do not.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "False. Developers can and do meet with stakeholders. Developers interact with stakeholders to gain a better understanding of their needs and to gather feedback on the product. This collaboration can help the team to deliver a product that meets the stakeholders’ expectations.",
  },
  {
    id: "91788ca8-9299-4b37-bfa6-3b8b4b1899a1",
    chapter: 5,
    question:
      "How is the Definition of Done determined when several Scrum Teams are collaborating on a single product?\n(choose the best answer)",
    options: [
      "The Scrum Masters from each team jointly establish a shared Definition of Done",
      "Each team creates its own Definition of Done",
      "All teams must agree on and adhere to a common Definition of Done",
      "Each team uses its own Definition of Done, but must communicate it to the other teams",
    ],
    correctAnswer: 2,
    explanation:
      "When multiple Scrum Teams are working on a single product, they must mutually define and comply with the same Definition of Done. The Definition of Done is a shared understanding of what it means for work to be complete and ensures that the work delivered by all teams meets a consistent level of quality. Having a common Definition of Done helps to align the teams and facilitates integration of their work.",
  },
  {
    id: "73f20a78-158a-4b8a-85d4-a7f5466f83ec",
    chapter: 5,
    question:
      "According to Scrum, when must a valuable and useful increment be made available? \n(choose the best answer)",
    options: [
      "At the conclusion of each Sprint",
      "Every other Sprint",
      "During the Release Sprint",
      "After approval by the Quality team",
      "Upon request from the Product Owner",
    ],
    correctAnswer: 0,
    explanation:
      "For the purpose of transparency, Scrum states that a valuable and useful increment must be available at the end of every Sprint. The increment is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. It must be usable and meet the Definition of Done, regardless of whether the Scrum Team decides to release it.",
  },
  {
    id: "aa7a1bf4-2bf1-4242-b252-ad0810d34172",
    chapter: 5,
    question: "What does a burndown chart show?\n(choose the best answer)",
    options: [
      "The productivity of individual team members",
      "The earned value",
      "The costs",
      "The amount of work remaining over time",
    ],
    correctAnswer: 3,
    explanation:
      "If burndown charts are used to visualize progress, they track work remaining across time. A burndown chart is a graphical representation of the amount of work remaining in a Sprint, plotted against time. It provides a clear view of the progress being made by the team and helps to identify any deviations from the planned schedule.",
  },
  {
    id: "3e529988-57ea-4641-a2a9-94c5726a8675",
    chapter: 5,
    question:
      "During Sprint Planning, who is responsible for deciding the number of Product Backlog items to be included in a Sprint? \n(choose the best answer)",
    options: [
      "The stakeholders",
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Scrum Team",
    ],
    correctAnswer: 2,
    explanation:
      "The Developers determine how many Product Backlog items they select for a Sprint. During Sprint Planning, the Developers forecast the amount of work they believe they can complete in the upcoming Sprint. They collaborate with the Product Owner to select the most valuable Product Backlog items that align with the Sprint Goal and can be completed within the Sprint time-box.",
  },
  {
    id: "b0bb4031-d84a-4c0e-be92-798cf0ef7715",
    chapter: 5,
    question:
      "What is the recommended size range for a Scrum Team?\n(choose the best answer)",
    options: [
      "7 members",
      "At most, 9 members",
      "10 or fewer",
      "At least 5 members",
    ],
    correctAnswer: 2,
    explanation:
      "The typical size for a Scrum Team is 10 or fewer people. According to the Scrum Guide, the optimal size for a Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint. Having 10 or fewer 10 people on the team helps to reduce complexity and improve communication and collaboration.",
  },
  {
    id: "0b0b83e3-c418-423d-b1d1-11d52220e624",
    chapter: 5,
    question:
      "If the marketing manager requests a progress report from a Scrum Team during a Sprint and the team seeks guidance from the Scrum Master, what should the Scrum Master do?\n(choose the best answer)",
    options: [
      "Request that the Product Owner send the report to the manager",
      "Explain to the marketing manager that progress is evaluated by inspecting the Increment at the Sprint Review",
      "Prepare and deliver the report to the manager personally",
      "Instruct the Developers to include the report in the Sprint Backlog",
      "The Scrum Team should self-manage and create the report",
    ],
    correctAnswer: 1,
    explanation:
      "If any stakeholder asks a Scrum Team for a status report describing the progress throughout the Sprint and the Scrum Team asks the Scrum Master for advice, the Scrum Master should talk to the marketing manager and explain that progress in Scrum comes from inspecting an increment at the Sprint Review. The Scrum Master can help the marketing manager understand that the best way to assess progress is by attending the Sprint Review and seeing the working product increment.",
  },
  {
    id: "d2cbfb4c-10b5-453e-8977-0c12b63b47e3",
    chapter: 5,
    question:
      "How much time is needed between Sprints to prepare for the next one?\n(choose the best answer)",
    options: [
      "One week for a one-month Sprint, and proportionally less for shorter Sprints",
      "Enough time to have the Product Backlog ready for the next Sprint",
      "The Developers should estimate the time needed for completing documentation and testing",
      "Zero, since a new Sprint begins immediately after the previous one ends",
      "It depends",
    ],
    correctAnswer: 3,
    explanation:
      "No time is required after a Sprint to prepare for the next Sprint. According to the Scrum Guide, a new Sprint starts immediately following the end of the previous Sprint. Sprints are continuous, with no breaks in between, to maintain a sustainable pace of work and to ensure that the team is always focused on delivering value.",
  },
  {
    id: "416c3677-451e-4c64-b29f-a40b3daf2f83",
    chapter: 5,
    question:
      "Which option accurately reflects the purpose of the Sprint Review?\n(choose the best answer)",
    options: [
      "To monitor and regulate the activities of the Developers during a Sprint",
      "To reward or penalize the Developers based on their performance",
      "The Scrum Team and stakeholders review the outcomes of a Sprint and plan the next steps",
      "To demonstrate the work completed during a Sprint to the entire organization",
    ],
    correctAnswer: 2,
    explanation:
      'The statement that best describes the Sprint Review is "The Scrum Team and stakeholders review the outcomes of a Sprint and plan the next steps." The Sprint Review is an opportunity for the Scrum Team and stakeholders to collaborate and review the work completed during the Sprint. They discuss what was accomplished, what challenges were encountered, and what could be improved in the future.',
  },
  {
    id: "c2beac40-ddad-44de-8bed-52eba4bb02b2",
    chapter: 5,
    question:
      "Which accountabilities are included in a Scrum Team?\n(select all that apply)",
    options: [
      "Scrum Master",
      "Product Owner",
      "Developers",
      "Stakeholder",
      "Manager",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2],
    isMultiSelect: true,
    explanation:
      "The Scrum Team consists of the Scrum Master, the Product Owner, and the Developers. The Scrum Master is responsible for promoting and supporting Scrum, the Product Owner is responsible for maximizing the value of the product, and the Developers are committed to creating any aspect of a usable Increment each Sprint.",
  },
  {
    id: "27f86c4d-29a0-49bd-a82e-3e98452ed08d",
    chapter: 5,
    question:
      "At what point does a Developer assume responsibility for the value of a Product Backlog item chosen for a Sprint?\n(choose the best answer)",
    options: [
      "When they have the capacity to take on additional work",
      "During Sprint Planning",
      "Never; the entire Scrum Team is collectively accountable for delivering value each Sprint",
      "During the Daily Scrum",
    ],
    correctAnswer: 2,
    explanation:
      'A Developer never becomes solely accountable for the value of a Product Backlog item selected for the Sprint. The entire Scrum Team is accountable for creating value every Sprint. The Scrum Team collaborates to deliver a potentially releasable Increment of "Done" product at the end of each Sprint, and all members share responsibility for its success.',
  },
  {
    id: "4deab033-a9ea-4b36-9a54-465c1ddeea7b",
    chapter: 5,
    question:
      "Which of the following actions is suitable for a Scrum Master concerning the Daily Scrum?\n(choose the best answer)",
    options: [
      "Facilitate the meeting",
      "Ensure that all team members have answered the three questions",
      "Record who has spoken",
      "Instruct the Developers to keep the Daily Scrum within 15 minutes",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers to plan their work for the next 24 hours. The Scrum Master’s role is to ensure that the event takes place and that the Developers understand its purpose. The Scrum Master teaches the Developers to keep the Daily Scrum within the 15-minute time-box.",
  },
  {
    id: "ee1d19dd-a3ef-400b-9f51-cb5dd73c9c73",
    chapter: 5,
    question:
      "True or False: There is an accountability in Scrum known as “Project Manager.”",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Scrum does not have an accountability called “Project Manager.” Scrum has three accountability: Product Owner, Scrum Master, and Developers. The responsibilities of a traditional project manager are distributed among these three accountability systems.",
  },
  {
    id: "b80258a3-559e-4977-91b9-3a9e6b338e5b",
    chapter: 5,
    question:
      "What is the best approach for a Scrum Team to split a group of 100 individuals into multiple Scrum Teams?\n(choose the best answer)",
    options: [
      "Assign teams based on their expertise in different areas (such as database, UI, etc).",
      "Have management allocate individuals to teams.",
      "Allow the individuals to organize themselves into teams.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Developer should be self-organizing. This means that the team members themselves decide how to best accomplish their work rather than being directed by others outside the team. Therefore, allowing people to divide themselves into teams is the best option.",
  },
  {
    id: "b8437f1a-5a69-404d-b78c-797e240eb84e",
    chapter: 5,
    question:
      "A Scrum Team has Developers located in different places, and they use various meeting rooms for the Daily Scrum. There are several logistical tasks (such as reserving meeting rooms and organizing conference calls) that need to be done beforehand. What is the best course of action for the Scrum Master?\n(choose the best answer)",
    options: [
      "Let the Developers self-manage and decide how to handle it.",
      "Suggest that the Developers take turns being responsible for setting up the meetings.",
      "Request that management resolve the issue.",
      "Arrange the meetings and inform the Scrum Team of the arrangements.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Developers are self-managing, meaning they have the ability to manage their own work. The Scrum Master should allow the Developers to determine for themselves what to do in this situation.",
  },
  {
    id: "279c918a-ad84-49dc-9ee5-be863dff5b3a",
    chapter: 5,
    question:
      "What are the three main purposes of the Definition of Done?\n(choose the best three answers)",
    options: [
      "Enhance transparency.",
      "Define the requirements of each work item.",
      "Establish a common understanding of when work is finished.",
      "Make social expectations explicit and reduce conflicts.",
      "Assist the Developers in determining how many Product Backlog items to choose for the Sprint.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 4],
    isMultiSelect: true,
    explanation:
      "The Definition of Done serves to increase transparency by creating a shared understanding of when work is complete. It also guides the Developers on how many Product Backlog items to select for the Sprint.",
  },
  {
    id: "0cc5ccde-c5e9-46cf-a2c6-53066f58c5ca",
    chapter: 5,
    question:
      "At what point in time is a Sprint Goal established? \n(choose the best answer)",
    options: [
      "Right after the Sprint Planning",
      "Defining the Sprint Goal is optional",
      "The Product Owner defines it before Sprint Planning",
      "During the Sprint Planning event",
      "During the Sprint Review event",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Sprint Goal is an objective set for the Sprint that can be met through the implementation of Product Backlog. It provides guidance to the Developers on why it is building the Increment. The Sprint Goal should be created during Sprint Planning.",
  },
  {
    id: "eaf48eef-f434-45c9-9fd5-ca6250ee49e5",
    chapter: 5,
    question:
      "The Developers suggest that the Daily Scrum should be shortened to 5 minutes and held only once every two days. What are the two best actions for the Scrum Master to take? \n(select the best two answers)",
    options: [
      "Respect and follow the self-managing team’s decision",
      "Evaluate the suggestion and determine how long and how often the Daily Scrum should be",
      "Explain to the team why the Daily Scrum is valuable as a chance to inspect and adapt the plan",
      "Understand the reasons behind the team’s proposal and help them improve the outcome of the Daily Scrum",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is a 15-minute event for the Developers to synchronize their work and create a plan for the next 24 hours. It is held every day of the Sprint at the same time and place. The Scrum Master ensures that the event takes place, but does not decide how it is conducted. The Scrum Master also helps the Developers understand the purpose of the Daily Scrum and optimize its value.",
  },
  {
    id: "52958caa-32f4-4cda-90fb-cdde9ecee2cf",
    chapter: 5,
    question:
      "Identify the three timeboxed events in Scrum:\n(choose the best three answers)",
    options: [
      "Backlog Refinement",
      "Sprint Retrospective",
      "Release Planning",
      "Hardening Sprint",
      "Daily Scrum",
      "Design Sprint",
      "Sprint Planning",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4, 6],
    isMultiSelect: true,
    explanation:
      "In Scrum, timeboxed events are fixed-length activities to create regularity. There are five events: Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
  },
  {
    id: "1f3b4444-cd94-4392-95c5-326da3e10636",
    chapter: 5,
    question:
      "How frequently is it recommended for the composition of a Scrum Team to be modified?\n(choose the best answer)",
    options: [
      "Every Sprint.",
      "Whenever required, without considering changes in efficiency.",
      "Never.",
      "Whenever required, while acknowledging a temporary decrease in efficiency.",
    ],
    correctAnswer: 3,
    explanation:
      "Scrum Team membership should change as needed while considering a short-term reduction in productivity. This is because changes in team composition can disrupt the team's established processes and dynamics, leading to a temporary decrease in productivity. However, it is important to make necessary changes to the team to ensure its long-term success.",
  },
  {
    id: "684687ce-d7cb-4e83-a50d-7c7b59c4483a",
    chapter: 5,
    question:
      "A Scrum Team is facing an increasing number of impediments. What methods would be most effective in this situation? \n(choose the best two answers)",
    options: [
      "Schedule a meeting with upper management to triage the issues.",
      "The Scrum Master should talk about the impediments with the Scrum Team.",
      "As a Scrum Team, prioritize the list and tackle them sequentially.",
      "The Product Owner should include the impediments in the Product Backlog and prioritize accordingly.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "When a Scrum Team is experiencing a growing list of impediments, the most helpful techniques would be for the Scrum Master to discuss the impediments with the Scrum Team and for the team to prioritize the list and work on them in order. This allows the team to collaboratively identify and address the most pressing issues and to develop a plan for resolving them.",
  },
  {
    id: "eb36d8d2-8b60-4e28-b575-b9c93d58619d",
    chapter: 5,
    question:
      "What does it signify for a Scrum Team to possess cross-functionality? \n(choose the best answer)",
    options: [
      "Developers on the Scrum Team collaborate with business analysts, architects, developers, and testers who are not part of the team",
      "The Scrum Team is composed of skilled individuals who collectively possess all the necessary skills to deliver value every Sprint",
      "The Scrum Team is a virtual team composed of separate teams of business analysts, architects, developers, and testers",
      "The Scrum Team is made up of not only developers but also business analysts, architects, and testers",
    ],
    correctAnswer: 1,
    explanation:
      "A Scrum Team is cross-functional when it includes skilled individuals who together have all the skills necessary to create value each Sprint. This means that the team is self-sufficient and does not need to rely on external resources to complete its work. The team members work together to deliver a potentially releasable Increment of “Done” product at the end of each Sprint.",
  },
  {
    id: "40b61fc0-39fc-401c-9cc8-dc682ec01aef",
    chapter: 5,
    question:
      "What are the attributes of the Daily Scrum?\n(choose the best two answers)",
    options: [
      "It is led by the Lead Developer",
      "Its time and location are consistent",
      "Its objective is to review progress towards the Sprint Goal and adjust the Sprint Backlog",
      "It takes place early in the morning",
      "It is facilitated by the Scrum Master",
      "It is a daily moment the Scrum Team has to discuss any unresolved issues",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "The Daily Scrum is a time-boxed event for the Developers to synchronize activities and create a plan for the next 24 hours. The location and time of the Daily Scrum should remain constant to reduce complexity. Its purpose is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. It is not facilitated by the team lead, nor is it held first thing in the morning, nor does it consist of the Scrum Master asking for status.",
  },
  {
    id: "2be7f955-d6b4-449b-aaa7-8d3ee875a479",
    chapter: 5,
    question:
      "True or False: Is it true that, in order to begin building a product using Scrum, all that is needed is a Product Owner with ideas for the first Sprint, Developers to implement those ideas, and a Scrum Master to facilitate the process?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, Scrum requires no more than a Product Owner with enough ideas for a first Sprint, Developers to implement those ideas, and a Scrum Master to help guide the process. This is because Scrum is an empirical process that allows for adaptation and change as the team learns more about the product and its customers.",
  },
  {
    id: "371525d2-82ee-4340-9241-978eed62b21b",
    chapter: 5,
    question:
      "Which statement is true about the duration of a Sprint?\n(choose the best answer)",
    options: [
      "The duration of a Sprint is determined during Sprint Planning and should be long enough to complete all planned work items",
      "The duration of a Sprint must be one month or less",
      "The duration of a Sprint should be adjusted based on the amount of work completed in previous Sprints",
      "The duration of a Sprint is determined during Sprint Planning and should include time for development and testing",
    ],
    correctAnswer: 1,
    explanation:
      'According to the Scrum Guide, the heart of Scrum is a Sprint, which is a time-box of one month or less during which a "Done," usable, and potentially releasable product Increment is created. Sprints have consistent durations throughout a development effort. A new Sprint starts immediately after the conclusion of the previous Sprint.',
  },
  {
    id: "a632c821-1b93-41f6-b48b-96799648d826",
    chapter: 5,
    question:
      "Several new Scrum Teams are working on a single product. Some Developers ask the Scrum Master how to coordinate their work with other teams. What should the Scrum Master do? \n(choose the best answer)",
    options: [
      "Create a consolidated plan for all teams by collecting their Sprint tasks at the end of Sprint Planning",
      "Instruct the Product Owner to work with Lead Developers to order the Product Backlog to minimize overlap during a Sprint",
      "Check each team’s Sprint Backlog daily to ensure alignment",
      "Coach the Developers on their responsibility to coordinate with other teams to create an integrated Increment",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for creating a plan for the Sprint, the Sprint Backlog. They are also responsible for coordinating their work with other teams to create an integrated Increment that meets the Definition of Done. The Scrum Master should teach and coach the Developers to understand their responsibilities and how to work with other teams.",
  },
  {
    id: "251ca4ae-44e4-47a5-b722-1ddf321efdd3",
    chapter: 5,
    question:
      "Who is responsible for ensuring that all tasks for the Sprint are completed by the Scrum Team?\n(choose the best answer)",
    options: [
      "The Project Manager",
      "The Product Owner",
      "The Scrum Master",
      "The Scrum Team",
      "The Developers",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Scrum Team is self-managing, meaning they internally decide who does what, when, and how. The Scrum Team is responsible for all product-related activities, from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required.",
  },
  {
    id: "f4bced57-b253-49b9-a51d-9c3b25c6a0fd",
    chapter: 5,
    question:
      "During a Sprint, what activities might a Product Owner engage in? \n(choose the best answer)",
    options: [
      "Respond to questions from Developers about items in the current Sprint",
      "Facilitate the Daily Scrum",
      "Assign tasks to Developers from the Sprint Backlog",
      "Report to management on the progress of the Sprint",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Product Owner is responsible for maximizing the value of the product resulting from the work of the Scrum Team. During a Sprint, the Product Owner may engage in activities such as answering questions from the Developers about items in the current Sprint to help clarify requirements and ensure that the work being done is aligned with the Product Goal.",
  },
  {
    id: "d587b3b5-2a3a-44e0-8f6a-492cd50dcd6d",
    chapter: 5,
    question:
      "What is the primary accountability of the Scrum Master during the Daily Scrum? \n(choose the best answer)",
    options: [
      "To ensure that all team members follow the Daily Scrum rules",
      "To bring coffee to the Developers",
      "To ensure that the Developers hold a Daily Scrum, but his/her presence is not required",
      "To update the burndown",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers of the Scrum Team to plan work for the next 24 hours. The Scrum Master is responsible for ensuring that the Scrum Team has a Daily Scrum, but their presence is not required. The Scrum Master teaches the Scrum Team to keep the Daily Scrum within the 15-minute time-box and coaches them on how to conduct the Daily Scrum.",
  },
  {
    id: "320ebbec-8829-4284-9b96-b61446110616",
    chapter: 5,
    question:
      "When can new work or further decomposition of work be added to the Sprint Backlog during a Sprint? \n(choose the best answer)",
    options: [
      "When the Product Owner requests it",
      "As soon as it is identified",
      "When the Scrum Master has time to update the Sprint Backlog",
      "After it is approved by the Developers during the Daily Scrum",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is composed of the Sprint Goal, the set of Product Backlog items selected for the Sprint, and a plan for delivering the product Increment and realizing the Sprint Goal. During a Sprint, new work or further decomposition of work can be added to the Sprint Backlog as soon as it is identified.",
  },
  {
    id: "cd83ffd2-64ac-4816-b410-66a97c2e716b",
    chapter: 5,
    question:
      "Which two actions should a Scrum Master take if the team lacks the necessary tools and environment to complete each Product Backlog item? \n(choose the best two answers)",
    options: [
      "Suggest that the Product Owner accept partially completed Increments until conditions improve",
      "Help the team establish a Definition of Done that is achievable given their current circumstances",
      "Declare that the team is not ready for Scrum",
      "Shift the focus of the current Sprint to setting up the team’s environment instead of delivering an Increment",
      "Coach the team to enhance their skills, tools, and environment over time and adjust their Definition of Done accordingly",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Scrum Master helps the Scrum Team to create high-value products by removing impediments to the Scrum Team’s progress. The Scrum Master also helps the team to improve its practices within the Scrum framework.",
  },
  {
    id: "4d07ce52-8ebe-4dfe-864f-cd13421d849a",
    chapter: 5,
    question:
      "If the Product Owner is not working with the Developers during the Sprint, what are two appropriate actions for a Scrum Master to take?\n(choose the best two answers)",
    options: [
      "Report the issue to the Product Owner's manager",
      "Coach the Product Owner on the importance of Scrum values and delivering incrementally",
      "Replace the Product Owner",
      "Ensure the Product Owner is sent to a Scrum training",
      "Address the issue during the Sprint Retrospective",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      "The Scrum Master serves the Product Owner in several ways, including coaching the Product Owner in the values of Scrum and incremental delivery. The Scrum Master also facilitates Scrum events as requested or needed, including the Sprint Retrospective, where the team can inspect and adapt their process.",
  },
  {
    id: "304c8ad8-2920-42c5-a1f7-e1c09956ae34",
    chapter: 5,
    question:
      "Which option is an example of an Increment in Scrum? \n(choose the best answer)",
    options: [
      "The complete product architecture",
      "A complete design of the product’s user interface",
      "A blueprint for the product",
      "A strategy for launching the product",
      "A set of valuable and useful product features",
      "All of the above",
    ],
    correctAnswer: 4,
    explanation:
      "According to the Scrum Guide, an Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together.",
  },
  {
    id: "2cce35bf-5e7b-4189-99ed-14e9c1a9a152",
    chapter: 5,
    question:
      "Which statement accurately describes the nature of the Product Backlog in Scrum?\n(choose the best answer)",
    options: [
      "It provides sufficient information for the Scrum Team to begin designing the product",
      "It includes all anticipated tasks and requirements for the Scrum Team to develop a comprehensive project plan",
      "It can only be modified if approved by the change control board",
      "It evolves and adapts as new information about the product and its customers becomes available",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Guide describes the Product Backlog as an ordered list of everything that is known to be needed in the product. It is the single source of work undertaken by the Scrum Team. The Product Backlog is dynamic; it constantly changes to identify what the product needs to be appropriate, competitive, and useful.",
  },
  {
    id: "301f8905-6c79-4f52-a96c-96b16ac5b7c9",
    chapter: 5,
    question:
      "What is a requirement for every Scrum Team?\n(choose the best answer)",
    options: [
      "A senior developer",
      "The necessary competencies and abilities to deliver a product Increment within a Sprint",
      "At least one representative from key departments such as Quality Assurance, Development, and Marketing",
      "At least 7 members",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required. The Scrum Team must possess all competencies and skills needed to create a product Increment in a Sprint.",
  },
  {
    id: "f10e8b60-e703-4028-926a-9b9e02502c92",
    chapter: 5,
    question:
      "What is the maximum duration of the Sprint Review in Scrum?\n(choose the best answer)",
    options: [
      "One day",
      "As long as necessary",
      "Four hours for a one-month Sprint",
      "Two hours for a one-month Sprint",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Review is an informal meeting, not a status meeting, and the presentation of the Increment is intended to elicit feedback and foster collaboration. The Sprint Review is a maximum of four hours for a one-month Sprint. For shorter Sprints, the event is usually shorter.",
  },
  {
    id: "b63643c8-0e93-4006-ae36-1dd1021f337e",
    chapter: 5,
    question:
      "In Scrum, which three events provide opportunities for feedback and adaptation?\n(choose the best three answers)",
    options: [
      "Sprint Review",
      "Release Planning",
      "Sprint Retrospective",
      "Daily Scrum",
      "Product Backlog Refinement",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      "Scrum provides several opportunities for inspecting and adapting the product and the process through its events. The Sprint Review is an opportunity for the Scrum Team to inspect the Increment and adapt the Product Backlog. The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. The Daily Scrum is an opportunity for the Developers to inspect their progress toward the Sprint Goal and adapt their plan for the day.",
  },
  {
    id: "9d2eab21-6da5-48dc-b748-c5d26e2378eb",
    chapter: 5,
    question:
      "How is the order of items in the Product Backlog determined in Scrum?\n(choose the best answer)",
    options: [
      "By size, with smaller items at the top and larger items at the bottom",
      "By the Product Owner, who prioritizes items based on their value",
      "By risk, with safer items at the top and riskier items at the bottom",
      "By ROI, with the items with the highest ROI at the bottom",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Product Backlog is an ordered list of everything that is known to be needed in the product. The Product Owner is responsible for the Product Backlog, including its content, availability, and ordering. The Product Owner orders the items in the Product Backlog to best achieve goals and missions.",
  },
  {
    id: "3d5b6726-22dc-4088-b2d7-829d1f92989f",
    chapter: 5,
    question:
      "Which three aspects of Scrum support self-management within the Scrum Team?\n(choose the best three answers)",
    options: [
      "Eliminating titles for Scrum Team members",
      "Allowing the Scrum Team to decide what work to do during a Sprint",
      "The Scrum Master shielding the team from external interference",
      "The simplicity of the framework",
      "The Scrum Master removing all the impediments",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 3],
    isMultiSelect: true,
    explanation:
      "Scrum promotes self-management in several ways. Scrum removes titles for all members of the Scrum Team, except for the Product Owner, Scrum Master, and Developers, to foster an environment of equality and collaboration. The Scrum Team decides what work to do in a Sprint, empowering them to take ownership of their work. Scrum is also a lightweight framework that provides the minimum necessary structure for teams to self-manage and continuously improve.",
  },
  {
    id: "e0aeacd7-9e68-4e07-a2d5-2872493a9b35",
    chapter: 5,
    question:
      "Which two statements accurately describe the accountability of the Scrum Master in Scrum?\n(choose the best two answers)",
    options: [
      "The Scrum Master assigns tasks to Developers",
      "The Scrum Master is responsible for updating the Sprint Burndown chart",
      "The Scrum Master facilitates interactions between the Scrum Team and external parties",
      "During the Sprint Review, the Scrum Master summarizes which Product Backlog items were completed",
      "The Scrum Master helps the team use timeboxes effectively",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 4],
    isMultiSelect: true,
    explanation:
      "The Scrum Master serves the Scrum Team in several ways, including helping those outside the team understand which interactions with the team are helpful and which are not. The Scrum Master also helps the team to use timeboxes effectively, ensuring that all Scrum events take place within their respective timeboxes.",
  },
  {
    id: "9e3a6acb-6b24-4678-9471-7b97ec49fc70",
    chapter: 5,
    question:
      "In Scrum, who is responsible for managing the Sprint Backlog?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Scrum Team",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is composed of the Sprint Goal, the set of Product Backlog items selected for the Sprint, and a plan for delivering the Increment and realizing the Sprint Goal. The Sprint Backlog is owned and managed by the Developers.",
  },
  {
    id: "94c379af-4989-4008-81ac-5281167f5816",
    chapter: 5,
    question:
      "According to Scrum values, how should a group of 100 individuals be organized into multiple Scrum Teams?\n(choose the best answer)",
    options: [
      "Consult with HR to determine who has worked together in the past and form teams accordingly",
      "Assign team members randomly and rotate them every Sprint to share knowledge",
      "Allow individuals to form teams based on their understanding of the product, its vision, and the Scrum framework",
      "Use a matrix of skills, experience, and seniority to assign individuals to teams",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum theory emphasizes self-management. Thus the people who will do the work should decide how to organize themselves into teams.",
  },
  {
    id: "2e0589a2-f34e-4880-a7b0-9ae6296dac57",
    chapter: 5,
    question:
      "Which statement accurately describes the primary responsibility of the Product Owner in Scrum?\n(choose the best answer)",
    options: [
      "Writing requirements for the product",
      "Acting as a bridge between the Developers and customers",
      "Maximizing the value of the product",
      "Managing the Scrum Team",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Product Owner is responsible for managing the Product Backlog, including its content, availability, and ordering.",
  },
  {
    id: "12c59dba-9b8f-44cb-8e82-7bb3ef3b06b7",
    chapter: 5,
    question:
      "True or False: Is it accurate to say that the Sprint Backlog is created during Sprint Planning and includes the Sprint Goal?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is composed of the Sprint Goal, the set of Product Backlog items selected for the Sprint, and a plan for delivering the Increment and realizing the Sprint Goal. The Sprint Backlog is created during Sprint Planning, where the Scrum Team collaborates to define a Sprint Goal and select Product Backlog items that will help achieve that goal.",
  },
  {
    id: "96b5fbe1-f2ba-4be1-88da-9f42cea39001",
    chapter: 5,
    question:
      "True or False: Is it the responsibility of the Product Owner to ensure that the Developers select enough Product Backlog items for a Sprint to satisfy stakeholders’ expectations regarding productivity?\n(choose the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for selecting the amount of Product Backlog items they forecast they can complete within a Sprint. The Product Owner is responsible for ensuring that the Product Backlog is ordered and transparent, but it is up to the Developers to determine how much work they can complete within a Sprint.",
  },
  {
    id: "88c86f1b-05fb-4458-b933-48d8ca1d8ab4",
    chapter: 5,
    question:
      "When several Scrum Teams are working from a common Product Backlog, what is the primary concern?\n(choose the best answer)",
    options: [
      "Reducing dependencies between teams",
      "Adhering to original scope projections",
      "Maximizing team velocity",
      "Ensuring that each team has enough work to do",
      "Clearly defining requirements",
    ],
    correctAnswer: 0,
    explanation:
      "When multiple Scrum Teams are working from the same Product Backlog, it is important to minimize dependencies between teams. Dependencies can create bottlenecks and delays, reducing the overall effectiveness of the teams. By minimizing dependencies, teams can work more independently and deliver value more quickly.",
  },
  {
    id: "30542d36-0db4-421f-bc3d-bb86bdd3ce1c",
    chapter: 5,
    question:
      "What is likely to happen if an organization adopts Scrum but changes its terminology to align with existing language?\n(choose the best answer)",
    options: [
      "The lack of new vocabulary may result in minimal change",
      "The organization may not fully understand the changes and benefits of Scrum",
      "Management may feel more comfortable with the transition",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Changing the terminology of Scrum can have several consequences. Without a new vocabulary to remind people of the change, it is possible that little change will actually occur. Additionally, if the organization does not understand the changes that have been made to Scrum, the benefits of the framework may be lost. On the other hand, using familiar terminology may make management feel less anxious about the transition to Scrum.",
  },
  {
    id: "4496201c-72f0-4dc5-80e1-2a34faecc49f",
    chapter: 5,
    question:
      "A Scrum Team needs to produce a done Increment at the end of a Sprint. Select two statements that describe what done means.\n(choose the best two answers)",
    options: [
      "Whatever the Developers agree on as quality",
      "No work remains to fulfill the Definition of Done",
      "Ready to be delivered to end users",
      "All work the Product Owner is willing to accept",
      "Ready for testing",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. It is a shared understanding of what it means for work to be complete, to ensure transparency. The Increment is the sum of all the Product Backlog items completed during a Sprint and the value of the increments of all previous Sprints. It must be in usable condition regardless of whether the Scrum Team decides to release it.",
  },
  {
    id: "fb0da501-2bd8-4df1-bc51-78760cb6cf8d",
    chapter: 5,
    question:
      "Who decides how work is done during the Sprint?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Scrum Team",
      "The Project Manager",
      "The Scrum Master",
      "The Developers",
    ],
    correctAnswer: 4,
    explanation:
      "During the Sprint, the Developers are responsible for organizing and managing their own work to achieve the Sprint Goal. They have the autonomy to determine how to best accomplish their work, rather than being directed by others outside the team. This self-management allows the Developers to be creative and innovative in finding the best solutions to meet the Sprint Goal.",
  },
  {
    id: "9acae3a1-c999-4ddf-b925-4e12920da9ee",
    chapter: 5,
    question:
      "Who is responsible for ensuring that Product Backlog items meet the Definition of Done?\n(choose the best answer)",
    options: [
      "The Testing Team",
      "The Scrum Master",
      "The Developers",
      "The Product Owner",
      "The Scrum Team",
    ],
    correctAnswer: 2,
    explanation:
      "The Developers are required to conform to the Definition of Done. This means that all work required to complete the item, including testing, documentation, and any other necessary activities, has been completed and meets the team's agreed-upon standards. The Definition of Done provides transparency and ensures that the Increment is of high quality and ready for use by the end user.",
  },
  {
    id: "4f0a0fb5-bc07-4b63-9976-d1a17f796234",
    chapter: 5,
    question:
      "When can a Product Backlog item be considered finished?\n(choose the best answer)",
    options: [
      "Whenever it meets performance expectations",
      "Whenever it meets the Definition of Done",
      "At the end of the Sprint",
      "Whenever it is approved by the Product Owner",
    ],
    correctAnswer: 1,
    explanation:
      "A Product Backlog item is considered complete when it meets the Definition of Done. The Definition of Done is a shared understanding of what it means for work to be complete and ensures transparency. It is created by the Scrum Team and may include criteria such as passing all acceptance tests, meeting coding standards, and being fully documented. Meeting the Definition of Done ensures that the Increment is of high quality and ready for use by the end user.",
  },
  {
    id: "7ece5c2c-ae74-42fb-be53-63a4946d026a",
    chapter: 5,
    question:
      "After several Sprints, the Product Owner informs the Scrum Master about a key stakeholder who recently started using the product and is dissatisfied with its quality. What should the Scrum Master do?\n(choose the best two answers)",
    options: [
      "Instruct the Product Owner to leave quality decisions to the Developers",
      "Advise the Product Owner to include quality specifications in the Product Backlog and communicate the stakeholder's concern to the Developers",
      "Request the testers to address the quality issues during their testing activities",
      "Wait until the Sprint Retrospective to discuss the stakeholder's concern",
      "Support the Product Owner on how to discuss such issue with the Developers",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 4],
    isMultiSelect: true,
    explanation:
      "The Scrum Master's responsibility includes coaching the Product Owner and facilitating communication with the Developers. Encouraging the Product Owner to add quality specifications to the Product Backlog helps prioritize quality, and coaching the Product Owner on how to discuss the concern fosters collaboration.",
  },
  {
    id: "84214dde-790d-40ba-a421-7590decda620",
    chapter: 5,
    question:
      "Which Scrum Value is impacted when there is a lack of trust within the Scrum Team?\n(choose the best answer)",
    options: [
      "Focus",
      "Respect",
      "Openness",
      "Courage",
      "Commitment",
      "All of the above",
    ],
    correctAnswer: 5,
    explanation:
      "Trust is a crucial component of a successful Scrum Team, and a lack of trust can negatively impact all of the Scrum Values. Without trust, team members may not feel comfortable being open and transparent, which can hinder collaboration and communication. A lack of trust can also make it difficult for team members to show respect for one another, to have the courage to take risks and speak up, to stay focused on the Sprint Goal, and to fully commit to their work.",
  },
  {
    id: "606eb0b0-b53d-4c8e-8c0b-7b0dbc738ea5",
    chapter: 5,
    question:
      "What is an expected outcome as a Scrum Team becomes more mature?\n(choose the best answer)",
    options: [
      "Remove the Scrum Master",
      "The team will enhance their Definition of Done to include more rigorous criteria",
      "Reduce the frequency of Daily Scrums",
      "Have only on-demand Sprint Planning",
      "Sprint Retrospectives will last longer than 3 hours",
    ],
    correctAnswer: 1,
    explanation:
      "As a Scrum Team matures, it is expected that they will continuously improve their processes and practices, including their Definition of Done. The Definition of Done is a shared understanding of what it means for work to be complete and ensures transparency. As the team gains experience and knowledge, they may choose to enhance their Definition of Done to include more rigorous criteria, such as additional testing or documentation requirements, to ensure that the Increment is of high quality and ready for use by the end user.",
  },
  {
    id: "255c9e77-b8e7-4b50-ae5e-4b73bb1a1b41",
    chapter: 5,
    question:
      "How are managers who are external to the Scrum Team involved in the Daily Scrum?\n(choose the best answer)",
    options: [
      "They participate as a Scrum Team member",
      "The Product Owner speaks on their behalf",
      "They provide a quick market update to the Scrum Team",
      "Managers are not required to attend the Daily Scrum",
    ],
    correctAnswer: 3,
    explanation:
      "The Daily Scrum is an event for the Developers, and managers who are external to the Scrum Team are not required to attend. The purpose of the Daily Scrum is for the Developers to inspect their progress toward the Sprint Goal, to plan their work for the next 24 hours, and to identify any impediments that may be preventing them from achieving the Sprint Goal. While managers may have an interest in the progress of the work, their involvement in the Daily Scrum is not necessary.",
  },
  {
    id: "ff68a5ea-ee2a-4352-9d9e-b99e4b1c46cc",
    chapter: 5,
    question:
      "Which two methods of forming Scrum Teams align with Scrum's values?\n(choose the best two answers)",
    options: [
      "Managers work together to assign individuals to specific teams.",
      "All individuals are brought together and allowed to self-organize into Scrum Teams.",
      "Existing teams suggest how they would like to organize themselves into the new structure.",
      "The Chief Product Owner decides on the new team structures and assignments.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "Scrum values self-management and autonomy, and these values are reflected in the ways that Scrum Teams can be formed. One way to form Scrum Teams that align with these values is to bring all individuals together and allow them to self-organize into teams. Another way is to allow existing teams to suggest how they would like to organize themselves into the new structure. Both of these methods give individuals a voice in the process and empower them to take ownership of their work.",
  },
  {
    id: "842f3465-f172-4cac-9834-fbc8ec3bda3d",
    chapter: 5,
    question:
      "During Sprint Planning, the Product Owner and Developers are unable to agree on the highest priority Product Backlog items. As a result, the Developers cannot forecast how many items they can complete in the upcoming Sprint. However, the Scrum Team agrees on a Sprint Goal. What actions should the Scrum Master encourage?\n(choose the best two answers)",
    options: [
      "Let the Product Owner and Developers work as long as needed to complete the Sprint plan.",
      "Cancel the Sprint and only start a new one whenever the Product Backlog is ready.",
      "Interrupt the event. Let them work by themselves to make the Product Backlog ready and, as soon as possible, start another Sprint Planning meeting.",
      "Create the Sprint Backlog given the best information available, conclude the event, and begin development work. Throughout the Sprint, continue refining the work to be done.",
      "During the next Sprint Retrospective, discuss why this happened and what changes can be made to prevent it from happening again.",
    ],
    correctAnswer: 3,
    correctAnswers: [3, 4],
    isMultiSelect: true,
    explanation:
      "The Scrum Master can support the team by encouraging them to forecast the Product Backlog items most likely to meet the Sprint Goal and create the Sprint Backlog. This allows them to conclude Sprint Planning and begin development work while continuing to analyze and decompose additional functionality during the Sprint. Additionally, during the next Sprint Retrospective, the team can discuss why this situation occurred and what changes can be made to prevent it from happening again in the future.",
  },
  {
    id: "a86bd625-d7b3-43c7-b533-41f57aed5b92",
    chapter: 5,
    question:
      "Which statement best describes the Sprint Backlog resulting from Sprint Planning?\n(choose the best answer)",
    options: [
      "It contains all the tasks to be completed during the Sprint",
      "It contains a schedule for the Sprint",
      "Every task is estimated using hours or points",
      "It represents the Developers' plan for the Sprint",
      "The Developers know which tasks each one will be responsible for during the Sprint",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Backlog is the output of Sprint Planning and represents the Developers' plan for achieving the Sprint Goal. It contains all of the Product Backlog items selected for the Sprint, as well as a plan for delivering them. The Sprint Backlog is owned and managed by the Developers, who have the autonomy to determine how to best accomplish their work. While the Product Owner may provide input and guidance, it is ultimately up to the Developers to create and manage their plan for the Sprint.",
  },
  {
    id: "02877df8-4266-4ed4-9c22-4195f5bdcb7e",
    chapter: 5,
    question:
      "A Scrum Master is introducing Scrum to a new Team. The Team decides that a Sprint Retrospective is unnecessary. What should the Scrum Master do?",
    options: [
      "Escalate the issue to upper management",
      "Initiate and guide productive and valuable Sprint Retrospectives",
      "Accept their decision since they self-manage",
      "Replace the members from the Scrum Team",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Master should advocate for Scrum principles and encourage the Scrum Team to conduct Sprint Retrospectives, as it's a crucial event for continuous improvement. Facilitating productive retrospectives helps the team identify areas for improvement and adapt their processes.",
  },
  {
    id: "db593301-d20b-49f7-a9c1-911e459d0e17",
    chapter: 5,
    question:
      "What is the maximum duration of the Sprint Planning event?\n(choose the best answer)",
    options: [
      "8 hours for a one-month Sprint.",
      "4 hours for a one-month Sprint.",
      "Until it is finished.",
      "Once a month.",
    ],
    correctAnswer: 0,
    explanation:
      "The timebox for the Sprint Planning event is a maximum of 8 hours for a one-month Sprint. For shorter Sprints, the event is usually shorter, with the timebox being proportionally less. The purpose of the timebox is to ensure that the event remains focused and productive, and to prevent it from taking up too much of the team's time. While it is important for the team to thoroughly plan their work for the upcoming Sprint, it is also important to balance this with the need to begin development work.",
  },
  {
    id: "fdc54873-1818-45d7-8bfd-1d7825487cae",
    chapter: 5,
    question:
      "How should Product Backlog items be selected when multiple Scrum Teams are working from the same Product Backlog?\n(choose the best answer)",
    options: [
      "The Lead Developers select work in collaboration with the Product Owner",
      "Each team has its own Product Backlog",
      "The work is divided given the number of members on each team",
      "The Product Owner makes the decision",
      "The Developers select work in collaboration with the Product Owner",
    ],
    correctAnswer: 4,
    explanation:
      "When multiple Scrum Teams are working from the same Product Backlog, the Developers should select work in collaboration with the Product Owner. This allows the teams to coordinate their efforts and ensure that they are working on the most valuable and highest-priority items. The Product Owner can provide guidance and direction, but it is ultimately up to the Developers to select the work that they believe they can complete during the Sprint. This approach promotes collaboration and alignment among the teams.",
  },
  {
    id: "cdc4688f-093d-4911-9761-99f8b9aa13bc",
    chapter: 5,
    question:
      "A Scrum Team is a unified group of professionals that includes which of the following accountabilities?\n(choose all that apply)",
    options: [
      "One Scrum Master",
      "Customers",
      "Developers",
      "One Product Owner",
      "One project manager",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2, 3],
    isMultiSelect: true,
    explanation:
      'A Scrum Team is a cohesive unit of professionals that consists of one Scrum Master, Developers, and one Product Owner. The Scrum Master is responsible for helping the team understand and apply Scrum, the Developers are responsible for delivering a potentially releasable Increment of "Done" product at the end of each Sprint, and the Product Owner is responsible for maximizing the value of the product resulting from the work of the Developers. Customers and end users are not considered part of the Scrum Team.',
  },
  {
    id: "d5c05bf6-5c24-488e-98d4-c3d63953e29e",
    chapter: 5,
    question:
      "True or False: When multiple Scrum Teams are working on the same product or system, each team has its own Product Backlog",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "False. When multiple Scrum Teams are working on the same product or system, they all select work from the same Product Backlog. The Product Backlog is an ordered list of everything that is known to be needed in the product, and it is the single source of work for all of the Scrum Teams. Each team selects work from the Product Backlog in collaboration with the Product Owner, ensuring that they are working on the most valuable and highest-priority items.",
  },
  {
    id: "73a2d482-ab1a-4719-90aa-80f7241f8272",
    chapter: 5,
    question:
      "If a Product Backlog item worked on during a Sprint does not meet the Definition of Done by the end of the Sprint, what two actions should be taken?\n(choose the best two answers)",
    options: [
      "Inspect the item during the Sprint Review, but ensure that it does not account for calculating the team’s velocity.",
      "Do not include the incomplete item in the Increment for this Sprint",
      "If the stakeholders agree, release it to the end users",
      "Return the incomplete item to the Product Backlog",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "If a Product Backlog item worked on during a Sprint does not meet the Definition of Done by the end of the Sprint, it should not be included in the Increment for that Sprint. Instead, it should be returned to the Product Backlog for the Product Owner to decide how to proceed. The Product Owner may choose to prioritize the item for completion in a future Sprint or to deprioritize it in favor of other work. The team should also reflect on why the item was not completed and identify any improvements that can be made to prevent similar situations in future Sprints.",
  },
  {
    id: "5a9f1fe3-5c5b-4424-afe7-7519af9146f7",
    chapter: 5,
    question:
      "What is the primary objective of the Sprint Review?\n(choose the best answer)",
    options: [
      "To foster team cohesion",
      "To evaluate the viability of the project",
      "To review the Scrum Team's activities and processes during the Sprint",
      "To inspect the product Increment with stakeholders and gather feedback on future work",
    ],
    correctAnswer: 3,
    explanation:
      "The primary purpose of the Sprint Review is to inspect the product Increment with stakeholders and gather feedback on future work. During the Sprint Review, the Scrum Team and stakeholders collaborate to review what was accomplished during the Sprint and to discuss what could be done in the next Sprint. This provides an opportunity for stakeholders to provide feedback and input, which can help guide future development work. The Sprint Review is an important event for promoting transparency and collaboration among the Scrum Team and stakeholders.",
  },
  {
    id: "d4146353-5b8b-4ab0-86fa-1703d9e2a4cd",
    chapter: 5,
    question:
      "True or False: A high-performing Scrum Team conducts Release Sprint for making the Increments available to end users.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "False. A Release Sprint is not a concept in Scrum. In Scrum, each Increment must be potentially releasable, meaning that it meets the Definition of Done and is of high quality. The Scrum Team works to deliver a potentially releasable Increment at the end of each Sprint, without the need for a separate Release Sprint. The decision to release an Increment is made by the Product Owner, who may choose to release it immediately or to hold it for release at a later time.",
  },
  {
    id: "637baa16-1144-4d10-99b5-8a0682456a7a",
    chapter: 5,
    question:
      "What does it mean when an event has a timebox?\n(choose the best answer)",
    options: [
      "The event cannot exceed a maximum duration",
      "The event must last for at least a minimum duration",
      "The event must occur by a specific time",
      "The event must occur at a fixed time",
    ],
    correctAnswer: 0,
    explanation:
      "When an event has a timebox, it means that it cannot exceed a maximum duration. In Scrum, all events have a timebox to ensure that they remain focused and productive, and to prevent them from taking up too much of the team's time. For example, the Sprint Planning event has a timebox of 8 hours for a one-month Sprint, while the Daily Scrum has a timebox of 15 minutes. The timebox provides a clear boundary for the event, helping the team to stay on track and make effective use of their time.",
  },
  {
    id: "c1398752-e9d0-4ffe-b483-cbf047a41d9a",
    chapter: 5,
    question:
      "You are the Scrum Master of a recently created Scrum Team responsible for developing a standalone mobile application for the iOS platform. The project manager comes to you and asks who is responsible for the software architecture and design. Which of the following should you respond to?\n(choose the best answer)",
    options: [
      "The lead developer",
      "The Scrum Master",
      "The software architect",
      "The Developers",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for creating any aspect of a usable Increment each Sprint. The \"usable Increment\" includes all aspects of software development such as software architecture and design. Therefore, in a Scrum Team, it's the collective responsibility of the Developers to handle these aspects. This encourages collective ownership, cross-functional skills, and self-organization within the team. An observation to keep in mind is that even though the Scrum Team as a whole is responsible for product-related activities, the specific responsibility of software architecture and design would be more directly attributed to the Developers. Note: The Scrum Guide doesn't recognize roles like 'Lead Developer' or 'Software Architect' within the Scrum Team. The Scrum Team consists of one Scrum Master, one Product Owner, and Developers.",
  },
  {
    id: "77d698f1-5ee0-4372-b00b-df500b70ae2f",
    chapter: 5,
    question:
      "What are the three pillars of the empiricism?\n(choose the best answer)",
    options: [
      "Transparency, Inspection, Adaptation",
      "Control, Stability, Optimization",
      "WIP Limit, Waste Reduction, JIT",
      "Plan, Do, Act, Change",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the three pillars of the empiricism are Transparency, Inspection, and Adaptation.",
  },
  {
    id: "f0d09066-1f7e-4588-ab9d-1a301a52995c",
    chapter: 5,
    question:
      "What is one of the benefits of having a Scrum Team?\n(choose the best answer)",
    options: [
      "Increased collaboration",
      "Faster delivery of features",
      "It is suitable for any problem",
      "It guarantees on-time delivery",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum framework emphasizes teamwork and fosters a high degree of collaboration among individuals within the Scrum Team. This is often characterized by shared learning, cross-functionality, and collective ownership. These elements lead to better problem-solving, innovative solutions, and an overall improvement in the quality of the product. Scrum can potentially result in faster delivery of valuable outcomes, but it's important to remember that its primary focus is not speed. Rather, it emphasizes the continuous delivery of a valuable, \"Done\" Increment. Further, although Scrum is highly adaptable, it is not a one-size-fits-all solution and is not suitable for every problem. It thrives best in complex environments where there's a high degree of uncertainty and creativity required. Lastly, while Scrum promotes transparency, inspection, and adaptation, which could lead to improved predictability over time, it doesn't guarantee on-time delivery. Product development involves inherent complexities and uncertainties that prevent an absolute guarantee of on-time delivery.",
  },
  {
    id: "45428c35-34c0-40ca-8e40-ade2756ded78",
    chapter: 5,
    question:
      "Who is responsible for owning and maintaining the Sprint Backlog?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The Stakeholders",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is owned by the Developers. The Developers are responsible for creating and maintaining the Sprint Backlog, which contains the work necessary to achieve the Sprint Goal.",
  },
  {
    id: "d309fc79-f833-4567-9f06-79c91c902a42",
    chapter: 5,
    question:
      "True or False: Changing the membership of the Scrum Teams frequently can hinder productivity and quality.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Having stable Scrum Teams is desirable. Stable Teams have a higher likelihood of becoming high-performing over time as they develop a better understanding of the work, improve collaboration, and build trust and cohesion among team members. Stable Teams can sustain a consistent pace of work, achieve better productivity, and foster continuous improvement.",
  },
  {
    id: "c7f0b58f-9e27-4f0e-aea6-e9385ad1dcd6",
    chapter: 5,
    question:
      "In a self-managing Scrum Team, what choices are made by the team members themselves?\n(choose the best answer)",
    options: [
      "Who does what, when, and how.",
      "Who does what.",
      "Management makes the decisions.",
      "When a task is done, but not who.",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, a self-managing Scrum Team is responsible for choosing who will work on the tasks, how they will work, and what tasks they will work on. This empowers the team to make decisions and collaborate on the best approach to deliver value.",
  },
  {
    id: "4a7db591-c026-41bf-a1c8-cf60e36ce3a1",
    chapter: 5,
    question:
      "True or False: The Definition of Done can undergo review, inspection, and adaptation during the Sprint Retrospective.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Scrum Guide states that the Definition of Done (DoD) is a shared understanding of the criteria that a product increment must meet to be considered complete. While the DoD can be reviewed, inspected, and adapted at any time, typically any changes to the DoD should not affect the current Sprint, except if it broadens the team's understanding of quality or if circumstances within the Sprint change that require a revision to the DoD.. The DoD is typically refined over time, incorporating feedback and learnings, to ensure a higher level of quality and customer satisfaction in subsequent Sprints.",
  },
  {
    id: "002bb629-eae9-4d0a-a5b6-18d3b058c6dd",
    chapter: 5,
    question:
      "True or false: Holding a Sprint Planning event to kickstart each Sprint is optional.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Sprint Planning is not optional. It is one of the five events in Scrum and is essential for the Scrum Team to plan their work for the upcoming Sprint. During Sprint Planning, the Scrum Team collaborates to define a Sprint Goal and create a Sprint Backlog.",
  },
  {
    id: "a942949f-b97f-47f0-a356-f2add6743508",
    chapter: 5,
    question:
      "True or False: A live demo of the Increment is a mandatory requirement during the Sprint Review.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Review is an opportunity for the Scrum Team to inspect the Increment and adapt the Product Backlog. While it is common for a demo of the Increment to be conducted during the Sprint Review, it is not mandatory. The primary purpose of the Sprint Review is to gather feedback from stakeholders, discuss what was done in the Sprint, and collaborate on future product adaptations.",
  },
  {
    id: "9dc8369c-6d27-4e9f-986c-d3238a9e6988",
    chapter: 5,
    question:
      "True or false: Adaptation becomes easier when the product development team is empowered and self-managing.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Adaptation becomes more difficult when the people involved are not empowered or self-managing. Empowerment and self-management are key principles of Scrum, and they enable the Scrum Team to quickly adapt to changes and continuously improve their processes.",
  },
  {
    id: "21524dc0-58f0-4d7b-87fd-16221357deaa",
    chapter: 5,
    question:
      "True or False: When many Scrum Teams are working on the same product, it may require having multiple Product Owners because one person may not be able to handle all the work required to make the Product Backlog items clear to the Developers.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Even when multiple Scrum Teams work on the same product, there is still one Product Owner for that product. The Product Owner might have a team or support from others to handle the vastness of the product, but the accountability remains with a single Product Owner. This ensures a singular vision and direction for the product.",
  },
  {
    id: "ad072024-43dc-4f00-946d-2b3925203624",
    chapter: 5,
    question:
      "Which of the following is not one of the Scrum events?\n(choose the best answer)",
    options: [
      "Daily Scrum",
      "Sprint Retrospective",
      "Sprint Review",
      "Release Planning",
    ],
    correctAnswer: 3,
    explanation:
      "The Scrum Guide defines four events: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. These events provide opportunities for the Scrum Team to inspect and adapt their progress, product, and processes. The Daily Scrum is a core event in Scrum, where the Developer plans their work for the next 24 hours.",
  },
  {
    id: "2165ac88-8dbd-4c4e-b537-bd917a61e528",
    chapter: 5,
    question:
      "What is the maximum duration of a Sprint according to the Scrum Guide?\n(choose the best answer)",
    options: ["2 weeks", "3 weeks", "4 weeks", "1 month"],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the maximum length of a Sprint is one month or less. It is recommended to have shorter Sprints to promote transparency, inspection, and adaptation.",
  },
  {
    id: "cfe63e82-14b2-436e-bb8f-7757100504cc",
    chapter: 5,
    question:
      "True or False: The Scrum Team must verify or validate the Increment.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Verification and validation activities are a necessary means to assess if the work meets the Definition of Done.",
  },
  {
    id: "3136a92b-460f-4aa1-accf-f8191fd92d1e",
    chapter: 5,
    question:
      "Which Scrum event is designed to support daily inspection and adaptation?\n(choose the best answer)",
    options: [
      "Daily Standup",
      "Daily Scrum",
      "Status Update meeting",
      "Sprint Planning",
    ],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum supports daily inspection and adaptation. It is a 15-minute event for the Developers of the Scrum Team to synchronize activities and create a plan for the next 24 hours. During the Daily Scrum, the Developers inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.",
  },
  {
    id: "6c337f3a-f5b3-4fa0-8813-29e22ef03f54",
    chapter: 5,
    question:
      "Which of the following best describes a Sprint Backlog?\n(choose the best answer)",
    options: [
      "A list of completed Product Backlog items",
      "An ordered list of work for the current Sprint",
      "The Product Backlog items that the Developers commit to completing in the current Sprint",
      "A forecasted plan for achieving the Sprint Goal",
    ],
    correctAnswer: 3,
    explanation:
      "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). The “what” and “how” are a forecast, not a commitment, of the work to be done during the Sprint. The Developers only commit to the Sprint Goal.",
  },
  {
    id: "9d7b1797-4c6c-48ef-8c2e-daf206ce1cf1",
    chapter: 5,
    question:
      "What is the primary focus of the Scrum Team in the first Sprint?\n(choose the best answer)",
    options: [
      "Defining the product vision, project plan, and timeline",
      "Setting up the infrastructure",
      "Developing the reference architecture",
      "Detailing the entire Product Backlog",
      "Creating a valuable, useful Increment",
    ],
    correctAnswer: 4,
    explanation:
      "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint. During the first few Sprints, sometimes, it is natural that the team will spend more time with infrastructure, architecture, and design tasks. Still, they must deliver at least a valuable, useful Increment (i.e., with business functionality).",
  },
  {
    id: "5f2c4db7-ade5-4c5e-b4bd-323cb182477b",
    chapter: 5,
    question:
      "What information does the Sprint burn-down chart provide?\n(choose the best answer)",
    options: [
      "The level of uncertainty in the project",
      "The amount of work remaining until the end of the Sprint",
      "The dependencies, start times and stop times for project tasks",
      "An overview of the release progress by plotting the remaining workload",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint burn-down chart is a visual representation that shows the amount of work remaining in the Sprint over time. It helps the Scrum Team to track their progress and understand if they are on track to completing the work within the Sprint. The burn-down chart displays the remaining work on the y-axis and the time on the x-axis, allowing the team to see how much work is left as the Sprint progresses.",
  },
  {
    id: "59268d1f-d397-4f04-bc69-e98a11f20c21",
    chapter: 5,
    question:
      "What is one benefit of assigning value points to Product Backlog items?\n(choose the best answer)",
    options: [
      "No benefit",
      "It increases transparency",
      "It helps estimate the effort required for each item",
      "It provides a visual representation of the Sprint progress",
    ],
    correctAnswer: 1,
    explanation:
      "Using value points in the Product Backlog can provide increased transparency around the value of Product Backlog items. Value points help the Scrum Team and stakeholders understand the relative importance and impact of each item. By assigning value points, the team can prioritize items more effectively, make informed decisions, and ensure that high-value items are given appropriate attention.",
  },
  {
    id: "e7d699e2-2206-43f5-a970-a9b5a73f318c",
    chapter: 5,
    question:
      "Which Scrum event provides an opportunity for Developers to inspect and adapt their work?\n(choose the best answer)",
    options: [
      "Project Status Meeting",
      "The Daily Scrum",
      "Design Sessions",
      "Architecture review sessions",
    ],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum is an inspect and adapt opportunity for the Developers. It is a 15-minute event for the Developers of the Scrum Team to synchronize activities and create a plan for the next 24 hours. During the Daily Scrum, the Developers inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.",
  },
  {
    id: "ec708873-9a4b-46a9-9b65-3e5e2bdd8567",
    chapter: 5,
    question:
      "In Scrum, which accountability replaces the traditional Project Manager?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "None",
      "The Product Owner",
      "The Developers",
    ],
    correctAnswer: 1,
    explanation:
      "In Scrum, there's no direct equivalent to a traditional Project Manager role. The responsibilities typically handled by a Project Manager in traditional project management are divided among the three accountabilities in Scrum: the Product Owner, the Scrum Master, and the Developers.",
  },
  {
    id: "a8308015-d8cf-497e-b528-8b4693e3da9f",
    chapter: 5,
    question:
      "Which of the following is not one of the three pillars of Empiricism in Scrum?\n(choose the best answer)",
    options: [
      "Adaptation",
      "Inspection",
      "Transparency",
      "Limiting Work In Progress",
    ],
    correctAnswer: 3,
    explanation:
      "Empiricism is one of the three pillars of Scrum, which emphasizes transparency, inspection, and adaptation. Transparency ensures that all aspects of the process are visible and understood by the Scrum Team. Inspection involves regularly reviewing artifacts, progress, and outcomes to identify any deviations from the expected. Adaptation involves making adjustments based on the inspection results to optimize value and effectiveness.",
  },
  {
    id: "dcbd97c6-144c-459c-800a-0bd1ee124e5f",
    chapter: 5,
    question:
      "Which statement best describes the cross-functional nature of a Scrum Team?\n(choose the best answer)",
    options: [
      "They have all the skills necessary to create value each Sprint",
      "They rely on external experts to complete their work",
      "They rely on external experts to complete only part of their work",
      "They decide who does what, when, and how",
      "Teams delegate tasks based on individual expertise",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, a Scrum Team is cross-functional, meaning it consists of individuals with all the necessary skills to create value. This typically includes skills related to analysis, design, development, testing, etc. The team collaborates to develop a valuable, useful Increment every Sprint.",
  },
  {
    id: "260728f2-c696-4a5f-b600-c2bd82b63eba",
    chapter: 5,
    question:
      "True or False: The Scrum Team is expected to identify and plan improvements to increase its effectiveness during the Sprint Retrospective.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective provides an opportunity for the Scrum Team to inspect itself and create a plan for improvements. The purpose is to identify areas of strength and areas that need improvement and to devise actionable steps to enhance the team's effectiveness and productivity. The Scrum Team should actively participate in the retrospective to ensure continuous improvement.",
  },
  {
    id: "1bcd79a6-0e77-4939-9be6-60027f22c5af",
    chapter: 5,
    question:
      "A Scrum Team is waiting for a part of the product that they need to integrate and use for their work. The part is expected to be ready in 3 weeks. The Product Backlog items at the top currently depend on this part. What should the Product Owner do?\n(choose the best answer)",
    options: [
      "During the next 3 weeks, focus only on refining the Product Backlog as well as strategic and technical planning for future work and risk management",
      "Remove the dependent items from the Product Backlog and put them on another list",
      "Interrupt product development until the dependency is resolved.",
      "Make sure the Developers have enough independent Product Backlog items for the upcoming Sprint. This could include technical debt, process improvements, or addressing non-functional requirements. Further, the PO should make the dependency visible in the Product Backlog.",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Owner's job is to maximize the value of the work the Developers do. Therefore, ensuring that they have meaningful work to do, like addressing technical debt or process improvements, during this waiting period is important to continue delivering value. Making the dependency visible in the Product Backlog ensures that all stakeholders are aware of it and can plan accordingly. Note that focusing on refinement, planning, and risk management activities is a good option, but along with that, the Scrum Team must create a valuable, useful Increment every Sprint. Finally, interrupting development is not recommended because it would lead to wasted time and resources, and it does not take advantage of the potential to continue delivering value in other ways.",
  },
  {
    id: "43ca87bf-bbaf-458e-a4b2-107d6511c697",
    chapter: 5,
    question:
      "True or False: In complex environments, the outcome is often uncertain and cannot be known in advance.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, complex environments are inherently unpredictable. The complexity arises from the various interdependencies and interactions within the system, making it difficult to determine specific outcomes or predict what will happen. Scrum embraces complexity and acknowledges that in complex environments, it is impossible to have complete knowledge or certainty about the future.",
  },
  {
    id: "9df666cd-59fd-4007-91a9-a024775b2b3a",
    chapter: 5,
    question:
      "When should the Developers prepare the tools and infrastructure for developing the product?\n(choose the best answer)",
    options: [
      "It is the responsibility of someone else in the organization.",
      "During the first Sprint.",
      "During a special event commonly known as “Sprint Zero”",
      "During Sprints or, if possible, before the first Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "In the Scrum framework, setting up the necessary tools and infrastructure for product development doesn't have a predefined time or event. It can be incorporated within the regular Sprints as part of the work to create a usable Increment. Alternatively, if the circumstances allow, it's also beneficial to prepare the required infrastructure and tools prior to the commencement of the first Sprint. While some may believe that such a setup should be taken care of by other entities within the organization, it's important for the Developers to ensure they have what's needed to deliver a \"Done,\" usable product Increment. The idea that this setup should only happen in the first Sprint can be limiting and is not a rule in Scrum. Moreover, the term \"Sprint Zero\" used to describe a period for preparatory work before the first official Sprint is not recognized in the Scrum Guide and therefore not part of the Scrum framework. While some organizations might adopt such a practice, it's not a prescribed part of Scrum.",
  },
  {
    id: "a31cf099-7006-4b1d-a74c-b4c56af9af43",
    chapter: 5,
    question:
      "True or False: For the Increment to deliver value, it must be in a usable condition.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together. In order to provide value, the Increment must be usable. Notice that usable\" typically means that the Increment is in a state where it could be potentially released to users, providing value in its current form. This does not necessarily mean that the Increment is feature-complete from the perspective of the overall product vision or that it includes all of the features a user might ultimately want. Rather, it means that the Increment is functional, meets the defined Definition of Done, doesn't break anything that was working before, and delivers some form of user value. It's essential to remember that \"usable\" does not dictate that the Increment must be released to users or customers. The decision to release an Increment is up to the Product Owner, and may be influenced by factors such as business strategy, market conditions, feedback cycles, and more. However, the ability to release after every Sprint, if desired, is a critical aspect of Scrum's focus on delivering value and receiving feedback regularly.",
  },
  {
    id: "1068dc0d-d560-4e3d-955c-9aa06babb28e",
    chapter: 5,
    question:
      "How are the results of a Product Owner's decisions made transparent?\n(choose the best answer)",
    options: [
      "By sharing the Project Plan with stakeholders.",
      "There is no need to make the decisions transparent.",
      "Through the reports periodically sent to management.",
      "Through the Product Backlog and Increment.",
    ],
    correctAnswer: 3,
    explanation:
      "Transparency in a Scrum framework regarding a Product Owner's decisions is primarily achieved through the Product Backlog and the Increment. The Product Backlog displays the work prioritized by the Product Owner to reach the Product Goal. The Increment includes all completed tasks within a Sprint, representing the usable work output that reflects the Product Owner's choices. The concept of a Project Plan is not aligned with Scrum's principles, and the notion that there is no need for transparency contradicts its fundamental pillars, which are transparency, inspection, and adaptation. Lastly, management reports may not encompass all decisions made by the Product Owner or be accessible to all stakeholders.",
  },
  {
    id: "c93bf8bb-aeee-4999-9659-0bb369e7e760",
    chapter: 5,
    question:
      "Who has the accountability for ordering the items in the Product Backlog?\n(choose the best answer)",
    options: [
      "The Project Manager",
      "The Product Owner and the Lead Developer",
      "The Chief Product Owner",
      "The Product Owner",
      "The Scrum Master",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for ordering the Product Backlog. The Product Owner is responsible for maximizing the value of the product and ensuring that the items in the Product Backlog are ordered based on their priority.",
  },
  {
    id: "97208171-9fb8-41ec-b1d1-0604daf28815",
    chapter: 5,
    question:
      "True or False: In complex environments, it is necessary to have complete information in order to make informed decisions.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, in complex environments, it is not possible to have complete information to make decisions. Complex problems are inherently unpredictable and uncertain, making it impractical to have all the necessary information upfront. Scrum embraces empiricism, where decisions are based on observations and experimentation, allowing the team to adapt and learn as they progress.",
  },
  {
    id: "3d44551a-626d-4e25-8ca0-21827bd3ef8d",
    chapter: 5,
    question:
      "True or False: It is considered a good practice in Scrum to keep the Product Backlog to a  manageable size.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Keeping the Product Backlog to a manageable size is considered good practice in Scrum. This involves regularly refining and prioritizing the Product Backlog to ensure that it remains concise, relevant, and oriented toward the Product Goal. An excessively large or poorly maintained Product Backlog can lead to confusion, and reduced transparency, and can make it difficult for the Scrum Team to focus on the highest-value work.",
  },
  {
    id: "b6b8ffc8-cdcf-4160-84b2-c4bd07955ab5",
    chapter: 5,
    question:
      "True or False: The timebox for the Daily Scrum can be extended if more time is needed.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is time-boxed to a maximum of 15 minutes, regardless of the team size. This time constraint encourages the team members to keep the meeting focused and concise. The purpose of the Daily Scrum is to provide a quick synchronization opportunity, where the Developers plan their work for the next 24 hours, identify any obstacles, and coordinate their efforts. Therefore, the statement that the 15-minute timebox for the Daily Scrum may be extended if more time is needed is false.",
  },
  {
    id: "c6333fd6-54f6-4be6-a9f7-54f730063ae5",
    chapter: 5,
    question:
      "True or False: The Scrum Guide requires at least one actionable improvement to be added to the Sprint Backlog each Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide emphasizes the importance of continuous improvement. While it encourages Scrum Teams to identify and plan improvements during the Sprint Retrospective, it does not prescribe a specific requirement to add actionable improvements to the Sprint Backlog. The purpose of the Sprint Retrospective is to inspect and adapt the Scrum Team's processes, and it is up to the team to decide how to address identified improvements.",
  },
  {
    id: "8860a757-5a92-460a-9dcf-3c11e326d82c",
    chapter: 5,
    question:
      "Who has the responsibility for estimating the effort or size of Product Backlog items?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The Lead Developer",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs.",
  },
  {
    id: "8ad3fa4b-ee61-48c7-9676-7179d14964a3",
    chapter: 5,
    question:
      "Under what circumstances can a Sprint be canceled?\n(choose the best answer)",
    options: [
      "The Sprint Goal is no longer relevant or valuable",
      "The team encounters unforeseen problems",
      "The team wants to change the work in the Sprint",
      "The team is unable to achieve the Sprint Goal",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, a Sprint can be canceled if the Sprint Goal becomes obsolete. This could happen if there are significant changes in the business environment or if the Product Owner determines that the Sprint Goal is no longer relevant or valuable.",
  },
  {
    id: "e8778d15-de6a-4f89-b31a-15d2506208ea",
    chapter: 5,
    question:
      "What is the Sprint Goal a commitment to?\n(choose the best answer)",
    options: [
      "The Increment",
      "The Product Owner",
      "The Sprint Backlog",
      "The Product Goal",
    ],
    correctAnswer: 2,
    explanation:
      "The Sprint Goal, as defined in the Scrum Guide, is a commitment to the Sprint Backlog. It provides focus and direction to the Developer on what needs to be accomplished during the Sprint. The Sprint Goal represents the objective that the team is working towards and serves as a unifying factor for the team's efforts.",
  },
  {
    id: "38727459-2173-4685-b486-c415735043df",
    chapter: 5,
    question:
      "True or False: Scrum requires delivering a Done Increment at the end of each Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'The Scrum Guide defines the Increment as a "concrete stepping stone toward the Product Goal" and emphasizes the importance of delivering a Done Increment at the end of every Sprint. The Increment should be in a usable condition and meet the Definition of Done as agreed upon by the Scrum Team. This enables the Scrum Team to receive feedback, gather insights, and adapt the product as necessary.',
  },
  {
    id: "36afa3b8-6fc0-47f8-8b40-ac6aa847cca6",
    chapter: 5,
    question:
      "Which artifacts are part of the Scrum framework?\n(choose the best answer)",
    options: [
      "Project Plan, Sprint Plan, Portfolio Backlog",
      "Product Vision, Product Backlog, Sprint Backlog",
      "Product Backlog, Sprint Backlog, Increment",
      "Product Vision, Product Goal, Sprint Goal",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the correct Scrum artifacts are the Product Backlog, the Sprint Backlog, and the Increment.",
  },
  {
    id: "d1223548-824c-4b02-8286-7312eaf2c85b",
    chapter: 5,
    question:
      "Which of the following are the events in Scrum?\n(choose the best answer)",
    options: [
      "Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
      "Sprint, Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective, Backlog Refinement",
      "Release Planning, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
      "Release Planning, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective, Backlog Refinement",
    ],
    correctAnswer: 0,
    explanation:
      "The Scrum events are Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
  },
  {
    id: "53089cab-2693-4269-aab1-e3b379efe264",
    chapter: 5,
    question:
      "True or False: Scrum can be applied to domains beyond software development.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'Scrum is not limited to software development only. The Scrum framework can be applied to various domains and industries beyond software development. The Scrum Guide does not prescribe any specific domain or industry for Scrum. It provides a flexible framework that can be used to manage complex work and deliver value in different contexts. Scrum Guide 2017 claims that “Scrum has been used to develop software, hardware, embedded software, networks of interacting function, autonomous vehicles, schools, government, marketing, managing the operation of organizations and almost everything we use in our daily lives, as individuals and societies. As technology, market, and environmental complexities and their interactions have rapidly increased, Scrum’s utility in dealing with complexity is proven daily.\nScrum proved especially effective in iterative and incremental knowledge transfer. Scrum is now\nwidely used for products, services, and the management of the parent organization".',
  },
  {
    id: "ff0c6b21-7bb2-458b-9528-67de19a6e6f7",
    chapter: 5,
    question:
      "What should the Product Backlog contain?\n(choose the best answer)",
    options: [
      "Only valuable work",
      "Only the work requested by stakeholders.",
      "Any task or request from anyone involved in the project.",
      "Only the high-priority items identified by the Scrum Master.",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Backlog is an ordered list of everything that is known to be needed in the product. It is the single source of requirements for any changes to be made to the product. The Product Backlog should contain only valuable work, as per the principles of lean thinking, which is one of the foundations of Scrum.",
  },
  {
    id: "4f56ae07-9f7f-46ef-9173-fa4ebf0a3d07",
    chapter: 5,
    question:
      "True or False: The responsibility of creating a valuable, useful Increment every Sprint lies with the entire Scrum Team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the entire Scrum Team, including the Product Owner, Developer, and Scrum Master, is collectively accountable for creating a valuable and useful Increment during each Sprint. This emphasizes the collaborative effort and shared responsibility among team members to deliver a high-quality product increment at the end of every Sprint.",
  },
  {
    id: "b7f5e9ae-b93c-41fa-823a-02e90677ebf2",
    chapter: 5,
    question:
      "Which of the following is a responsibility of the Lead Developers when multiple Scrum Teams are working on the same product?\n(choose the best answer)",
    options: [
      "Resolving dependency issues",
      "There are no team leaders in Scrum",
      "Collaborating with the Product Owner to plan the releases",
      "Making sure everybody is busy",
    ],
    correctAnswer: 1,
    explanation:
      "There are no team leaders in Scrum. Scrum is based on the principle of self-management, where the team members take responsibility for managing their own work and collaborating to achieve the Sprint Goal.",
  },
  {
    id: "5b2a78dd-6b82-4b73-9097-d0c70a82dc81",
    chapter: 5,
    question:
      "Why is it important for the Product Owner to consider technical debt?\n(choose the best answer)",
    options: [
      "To evaluate the team's performance",
      "To ensure senior team members are meeting expectations",
      "To estimate the effort required for Release Planning",
      "To understand the impact on the total cost of ownership",
    ],
    correctAnswer: 3,
    explanation:
      "The Product Owner needs to care about and pay attention to technical debt because it affects the total cost of ownership of the product. Technical debt refers to the additional work that arises when suboptimal or quick solutions are implemented instead of more sustainable ones. Ignoring technical debt can lead to increased maintenance costs, decreased productivity, and hindered ability to deliver value to customers effectively.",
  },
  {
    id: "0678a266-5f97-4134-a8e3-f4c94a739e16",
    chapter: 5,
    question:
      "True or False: The Definition of Done facilitates transparency regarding the required level of quality achieved by the Increment.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'According to the Scrum Guide, the Definition of Done serves as a shared understanding within the Scrum Team of the criteria that a product increment must meet to be considered "done" and of high quality. It helps ensure transparency by providing a clear definition of the required level of quality for the Increment. By using the Definition of Done, the Scrum Team can assess if the Increment meets the necessary standards and make informed decisions based on the level of transparency it provides.',
  },
  {
    id: "2be814ff-132a-4f8d-b334-e68b4168207a",
    chapter: 5,
    question:
      "True or False: According to Scrum, an Increment must meet the Definition of Done.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'According to the Scrum Guide, an Increment is a concrete step toward the product goal and must be in a usable condition and meet the Definition of Done. The Definition of Done defines the quality criteria that an Increment must fulfill to be considered "Done." It ensures that each Increment is a potentially releasable product, providing value to the users and stakeholders. Therefore, the statement is true: an Increment must be done to meet the Scrum requirements.',
  },
  {
    id: "f0b95a86-9c61-437a-b234-4c9867071aa6",
    chapter: 5,
    question:
      "True or False: According to Scrum, stakeholders should have an understanding of Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, stakeholders play a crucial role in Scrum. They include individuals and groups who are affected by the product or have an interest in its development and success. It is important for stakeholders to understand Scrum and its principles to effectively collaborate with the Scrum Team, provide feedback, and make informed decisions. This understanding promotes transparency, effective communication, and alignment of expectations. Therefore, the statement is true: stakeholders should understand Scrum.",
  },
  {
    id: "e39c123f-146e-4b2c-9888-7ba1737eea02",
    chapter: 5,
    question:
      "True or False: The primary purpose of the commitments associated with Scrum artifacts is to improve transparency and focus.\n(choose the best answer)",
    options: ["TRUE", "False"],
    correctAnswer: 0,
    explanation:
      "Each artifact contains a commitment to ensure it provides information that enhances transparency and focus against which progress can be measured: For the Product Backlog, it is the Product Goal. For the Sprint Backlog, it is the Sprint Goal. For the Increment, it is the Definition of Done. These commitments exist to reinforce empiricism and the Scrum values for the Scrum Team and their stakeholders. Keep in mind that other benefits might exist, but the Scrum Guide highlights transparency and focus.",
  },
  {
    id: "a9cb1b99-fc6f-4f3b-a874-b4b3019f8006",
    chapter: 5,
    question:
      "What is an expected outcome as Scrum Teams mature?\n(choose the best answer)",
    options: [
      "Sprint Planning becomes optional.",
      "The Scrum Master role becomes obsolete.",
      "Sprint Retrospectives are eliminated.",
      "The Definition of Done includes more stringent criteria.",
      "Timeboxing is no longer necessary for Sprint duration.",
    ],
    correctAnswer: 3,
    explanation:
      "As Scrum Teams mature, one expected outcome is that they improve their Definition of Done to include more stringent criteria. The Definition of Done serves as a shared understanding of what it means for a Product Backlog item to be completed and potentially releasable. By continuously improving the Definition of Done, the team raises the quality standards and ensures that the Increment meets the necessary requirements for delivery.",
  },
  {
    id: "49641ccb-9347-465e-a3b4-db7e06d587a9",
    chapter: 5,
    question:
      "Which of the following are mandatory inputs for Sprint Planning?\n(choose the best answer)",
    options: [
      "Having a detailed plan for each Product Backlog item",
      "Fully refined and estimated Product Backlog",
      "Pre-assigned tasks for each Developer",
      "A well-defined Sprint Goal",
      "None of the options.",
    ],
    correctAnswer: 4,
    explanation:
      "According to the Scrum Guide, none of the options listed are mandatory inputs for Sprint Planning. The Scrum Guide states that the inputs to Sprint Planning include the Product Backlog, the latest product Increment, their Definition of Done, the projected capacity of the Developer, and past performance data. However, none of the options mentioned in the answer choices are specifically mandated as inputs to Sprint Planning.",
  },
  {
    id: "4b8d3d9a-8e97-438e-b37b-a278f6dac871",
    chapter: 5,
    question:
      "When can adaptation take place in Scrum?\n(choose the best answer)",
    options: [
      "Only during the Sprint Retrospective",
      "The moment it learns anything new through inspection",
      "Only during the Sprint Planning and Sprint Review",
      "Only during the Daily Scrum",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, a Scrum Team is expected to adapt the moment it learns anything new through inspection. For example, it can happen during Sprint Planning when the Product Backlog is refined and adjusted, during the Daily Scrum when the Developer plans the work for the upcoming day, during the Sprint Review when feedback is received on the Increment, and during the Sprint Retrospective when the Scrum Team reflects on its processes and identifies areas for improvement.",
  },
  {
    id: "37193d9f-c477-41a2-a680-332918a348c3",
    chapter: 5,
    question:
      "What is the purpose of the Sprint Retrospective in Scrum?\n(choose the best answer)",
    options: [
      "To plan the work for the next Sprint",
      "To review the work completed during the Sprint",
      "To identify ways to increase quality and effectiveness",
      "To discuss and update the Product Backlog",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be implemented in the next Sprint. It occurs after the Sprint Review and involves the participation of the entire Scrum Team, including the Product Owner, Scrum Master, and Developers. The purpose of the Sprint Retrospective is to identify ways to increase quality and effectiveness, not just for the current Sprint but also for future Sprints.",
  },
  {
    id: "ed9808d9-ef69-464e-aa3a-ad73621bacb7",
    chapter: 5,
    question:
      "What is the primary intended outcome of the Daily Scrum?\n(choose the best answer)",
    options: [
      "Stakeholders are updated regarding the team’ progress",
      "The Developers have an actionable plan for the next day of work",
      "The team is updated by the Product Owner regarding the marketplace",
      "Impediments are discussed and resolved",
      "The Product Owner is updated on the team's progress",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum focuses on progress toward the Sprint Goal and produces an actionable plan for the next day of work. This creates focus and improves self-management. Notice that identifying impediments is typically part of Daily Scrums, but discussing and resolving them during the event would negatively impact on its focusT. Further, the event is not intended for stakeholders to receive a report or solely inform the Product Owner of progress.",
  },
  {
    id: "fb5be1eb-4ad7-489a-b33d-18bd443e3ca0",
    chapter: 5,
    question:
      "Which of the following is promoted by the Definition of Done? \n(choose the best answer)",
    options: [
      "Agility, transparency and expectation management",
      "Speed",
      "Detailed documentation",
    ],
    correctAnswer: 0,
    explanation:
      'The Definition of Done (DoD) in Scrum is a shared understanding within the team of when a Product Backlog item is considered complete. It sets the quality criteria for an Increment to be released or deemed "done." Adhering to the DoD ensures high-quality, complete, and ready-to-release Increments, promoting agility. It enhances transparency by providing a clear standard for evaluating the Increment\'s state. Additionally, it helps manage expectations by establishing a common understanding of a "done" Increment. In summary, adhering to the DoD enables agility, increases transparency, and aids in expectation management.',
  },
  {
    id: "ef9680d3-0c74-48d9-806e-d4664a5ce185",
    chapter: 5,
    question: "True or False: The Scrum Master is the Scrum Team manager.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "False. According to the Scrum Guide, the Scrum Master is not a manager of the Scrum Team. The Scrum Master is a leader who serves and is responsible for promoting and supporting Scrum as defined in the Scrum Guide. Their accountability  includes causing the removal of impediments, facilitating events whenever requested, coaching the team on self-management, and fostering an environment for high-performing teams.",
  },
  {
    id: "97a297d7-b7e3-46dd-a7b6-32cbfbe5ea47",
    chapter: 5,
    question:
      "Which of the following are the three Scrum accountabilities?\n(choose the best three answers)",
    options: [
      "Scrum Master",
      "Product Owner",
      "Developers",
      "Project Manager",
      "Scrum Manager",
      "Chief Executive Officer",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 2],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the three Scrum accountabilities are the Scrum Master, Product Owner, and Developers. These accountabilities have specific responsibilities within the Scrum framework. The Scrum Master is responsible for ensuring that Scrum is understood and enacted, the Product Owner is responsible for maximizing the value of the product and managing the Product Backlog, and the Developers are responsible for delivering a potentially releasable Increment of the product.",
  },
  {
    id: "becd2af9-659c-4cc9-9681-8d109c336f12",
    chapter: 5,
    question:
      "What is the primary accountability of the Product Owner in Scrum?\n(choose the best answer)",
    options: [
      "Maximizing the value of the product resulting from the work of the Scrum Team",
      "Providing clear instructions to the Developers",
      "Making final decisions about the Sprint Backlog",
      "Ensuring efficient utilization of resources within the Scrum Team",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the primary accountability of the Product Owner is to maximize the value of the product resulting from the work of the Scrum Team. The Product Owner achieves this by managing the Product Backlog, prioritizing the items based on value, ensuring that the Product Backlog is visible and transparent, and collaborating with stakeholders to understand their needs.",
  },
  {
    id: "68672a4a-4a0e-40b5-aac2-7eb03a46d72e",
    chapter: 5,
    question:
      "When introducing Scrum to organizations, which of the following is often the case?\n(choose the best answer)",
    options: [
      "It is smooth",
      "It is straightforward",
      "It is challenging",
      "It is optional",
    ],
    correctAnswer: 2,
    explanation:
      "Introducing Scrum to organizations can often be challenging. Implementing Scrum requires a significant shift in mindset, culture, and ways of working. It involves changing traditional hierarchical structures to self-managing, cross-functional teams and embracing bottom-up intelligence. Additionally, it requires buy-in and support from stakeholders at all levels of the organization. Resistance to change, lack of understanding, and fear of losing control can make the adoption of Scrum difficult.",
  },
  {
    id: "81a184e9-987f-4f3b-bf2f-2009a5529a30",
    chapter: 5,
    question:
      "True or False: An Increment is an output of the Scrum Team.\n(choose the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, a Done Increment is the output of a Sprint. It represents a tangible outcome that is potentially releasable and meets the Definition of Done. It is a concrete result that demonstrates value and can be inspected and adapted by stakeholders.",
  },
  {
    id: "a7239ce5-39dd-456a-95f4-3b8fe6e17f80",
    chapter: 5,
    question:
      "What is the primary objective of the Sprint in Scrum?\n(choose the best answer)",
    options: [
      "The Product Backlog",
      "The Increment",
      "The Sprint Backlog",
      "The Sprint Goal",
    ],
    correctAnswer: 3,
    explanation:
      'The single objective for the Sprint in Scrum is to achieve the "Sprint Goal." The Sprint Goal provides a clear, concise description of what the Scrum Team intends to accomplish during the Sprint. It acts as a unifying focus for the team and guides their work and decision-making throughout the Sprint. The Sprint Goal is derived from the Product Goal and helps ensure that the Increment produced during the Sprint adds value to the product and aligns with the overall product vision.',
  },
  {
    id: "3943e056-e91c-415e-8399-5153162a6fa2",
    chapter: 5,
    question:
      "True or False: Each of the three artifacts in Scrum contains a commitment to them",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, each of the three artifacts in Scrum (Product Backlog, Sprint Backlog, and Increment) contains a commitment to them. The commitments serve as a guideline or expectation that helps ensure the effectiveness of the artifact. For example, the Product Backlog contains the commitment to providing transparency, ordering, and optimizing the value of the items. The Sprint Backlog contains the commitment to achieving the Sprint Goal and updating the work remaining. The Increment contains the commitment to being a potentially releasable product.",
  },
  {
    id: "092f1cdd-2339-4865-86ba-b235b8ca5d3f",
    chapter: 5,
    question:
      "In which Scrum event are stakeholders formally invited to provide feedback and collaborate with the Scrum Team?\n(choose the best answer)",
    options: [
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Retrospective",
      "Sprint Review",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, stakeholders are invited to attend the Sprint Review, which is an event that occurs at the end of the Sprint. During the Sprint Review, the Scrum Team and stakeholders collaborate to inspect the Increment and adapt the Product Backlog if necessary. Stakeholders provide feedback, ask questions, and discuss potential changes to the product.",
  },
  {
    id: "f75a10eb-2223-467f-ada6-8c6fdebe57a0",
    chapter: 5,
    question:
      "True or False: It is recommended for the same person to hold both the Scrum Master and Product Owner accountabilities in a Scrum Team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Master and Product Owner accountabilities are distinct according to the Scrum Guide. The Scrum Master facilitates the process, coaches the team, and ensures framework adherence. The Product Owner maximizes product value by managing the Product Backlog and making feature and priority decisions. Although one person can perform both accountabilities, it is generally discouraged. Separate individuals maintain balance and perspectives within the Scrum Team.",
  },
  {
    id: "4224ab87-3158-49c5-b38e-b63b69276cde",
    chapter: 5,
    question:
      "Who bears the primary accountability for defining and communicating the Product Goal in Scrum?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Developer",
      "The Product Owner",
      "The Stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for the Product Goal. The Product Goal describes a future state of the product that the Scrum Team works to achieve. It is the Product Owner's responsibility to create and communicate the Product Goal to the Scrum Team and stakeholders. The Product Owner ensures that the Product Backlog is aligned with the Product Goal and makes decisions regarding its priority and content.",
  },
  {
    id: "5397803e-1d9e-45fc-be5b-b3eca6b07857",
    chapter: 5,
    question:
      "Which approach is considered a good practice in agile product development for delivering increments?\n(choose the best answer)",
    options: [
      "Yearly releases",
      "Monthly releases",
      "Early and frequent releases",
      "Releases after each Sprint",
    ],
    correctAnswer: 2,
    explanation:
      "According to agile product development practices, it is recommended to carry out early and frequent releases. This means delivering increments of the product to customers or users on a regular basis, allowing for faster feedback and validation of the product's value and functionality. Early and frequent releases help in gathering insights, adapting to changes, and maximizing customer satisfaction.",
  },
  {
    id: "62b71371-df7d-46c5-857e-f87d59606bb4",
    chapter: 5,
    question:
      "What does it mean when a Product Backlog item is marked as Done in Scrum?",
    options: [
      "The entire feature is complete",
      "All tasks identified for the item are Done",
      "The item is ready for user acceptance testing",
      "The item has been reviewed and approved by stakeholders",
      "The item completely fulfills the Definition of Done",
    ],
    correctAnswer: 4,
    explanation:
      "In Scrum, when a Product Backlog item is marked as Done, it means that there is no work remaining based on the Definition of Done. The Definition of Done defines the criteria that must be met for a Product Backlog item to be considered complete. It encompasses all necessary activities, such as development, testing, documentation, and any other relevant aspects required for the item to be considered Done.",
  },
  {
    id: "b7da33d4-72ef-47a7-9ce9-ceefe1233076",
    chapter: 5,
    question:
      "During Sprint Planning, the Developers realize that the workload they have selected exceeds their capacity. What should they do in this situation?\n(choose the best answer)",
    options: [
      "Notify the Scrum Master and request additional team members",
      "Extend the Sprint duration to accommodate the additional work",
      "Discuss with the Product Owner and remove Product Backlog items",
      "Prioritize all the work and aim to complete as much as possible within the Sprint",
    ],
    correctAnswer: 2,
    explanation:
      "In this situation, if the Developers realize during Sprint Planning that the workload selected is greater than they can handle, the best course of action is to remove Product Backlog items from the Sprint Backlog that is being created. This allows the Developers to focus on a realistic amount of work for the upcoming Sprint. It is essential for the Developers to collaborate with the Product Owner and make informed decisions about what can be accomplished within the Sprint timebox.",
  },
  {
    id: "923e6ebe-8670-4b2d-b193-a49aa3bcf305",
    chapter: 5,
    question:
      "How frequently should the Scrum Team review and update the Definition of Done?\n(choose the best answer)",
    options: [
      "Once per Sprint",
      "Frequently",
      "Daily",
      "Whenever there are changes to the product vision",
      "Only at the beginning of the project",
    ],
    correctAnswer: 1,
    explanation:
      "The Definition of Done (DoD) should be regularly reviewed and adapted based on the learnings and needs of the Scrum Team. It should not be considered a static document and should evolve as the team's understanding of the product increases and as the product itself changes over time. While there is no explicit frequency defined in the Scrum Guide, it does suggest that teams review and potentially revise the DoD during each Sprint Retrospective. However, this does not preclude teams from discussing and altering it more frequently if necessary. Remember, the key is to maintain open communication within the team and ensure that the DoD continues to reflect what is necessary to build a usable and potentially releasable Increment.",
  },
  {
    id: "18d4fb2d-45fd-41d4-a599-dbb4f3e61e92",
    chapter: 5,
    question:
      "True or False: The Scrum Master has ultimate responsibility for all aspects of the Scrum Team and the organization.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Scrum Master is not responsible for everything within the Scrum Team or the organization. The Scrum Master's primary responsibility is to ensure that the Scrum framework is understood and applied correctly. They are facilitators, coaches, and servant leaders who help the team and the organization in adopting Scrum practices and removing any impediments that hinder progress. The Scrum Master collaborates with the Product Owner and the Developer to create an environment conducive to the team's success.",
  },
  {
    id: "37369733-e124-46b8-9bb1-e118226e1f1c",
    chapter: 5,
    question:
      "During a Sprint, the Developers encounter a situation where they lack understanding of the requirements to deliver the Increment. What should they do?\n(choose the best answer)",
    options: [
      "Seek assistance from a specialist to resolve the issue within the remaining time of the Sprint.",
      "Postpone the work to a future Sprint.",
      "Collaborate closely with the Product Owner to gain a clear understanding of what needs to be accomplished.",
      "Do nothing.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Developers are responsible for understanding the requirements and delivering the Increment. If the Developers realize in the middle of the Sprint that they don't understand the requirements, the best course of action is to collaborate with the Product Owner to gain clarity and understanding. By actively engaging in communication and collaboration with the Product Owner, the Developers can work together to address the issue and ensure that the Sprint goal can still be achieved.",
  },
  {
    id: "c8c8859f-b4fe-44ab-9c5b-2a4d3986a6f1",
    chapter: 5,
    question:
      "How many artifacts are defined in the Scrum framework?\n(choose the best answer)",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Scrum has three specific artifacts: Product Backlog, Sprint Backlog, and Increment.",
  },
  {
    id: "9c8af2b6-7443-4fb9-9e41-f74023b74ba4",
    chapter: 5,
    question:
      "True or False: Product Owners facilitate timely decision-making to maximize the product's value.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the statement that Product Owners facilitate decision-making so that it happens in a timely manner. The Product Owner is responsible for maximizing the product's value and ensuring that the right decisions are made at the right time. By collaborating with stakeholders and understanding the customers' needs, the Product Owner can make informed decisions regarding the product backlog items and prioritize them based on the current understanding and market conditions. This ensures that the decision-making is timely, allowing for adaptive planning and continuous value delivery.",
  },
  {
    id: "2b32b92e-b5de-4ab7-8b03-09abcb8ec653",
    chapter: 5,
    question:
      "During a Sprint Retrospective, what topic is commonly discussed to ensure the quality and completeness of the product increment?\n(choose the best answer)",
    options: [
      "The Product Backlog items to select for the next Sprint",
      "Estimating the size of Product Backlog items",
      "Identifying potential improvements to the Definition of Done",
      "Reviewing the progress towards achieving the Sprint Goal",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and identify improvements. The purpose is to create a plan for implementing changes that will increase the team's effectiveness and efficiency. The retrospective typically focuses on aspects such as the people, relationships, processes, and tools involved in the Scrum Team's work. The Definition of Done, which defines the quality criteria for a product increment, is an important topic discussed during the retrospective to ensure the team's understanding and adherence to it.",
  },
  {
    id: "1d4f6a17-0515-4ecc-a338-1dceecba83cb",
    chapter: 5,
    question:
      "When multiple Scrum Teams are working on the same product, how many Product Backlogs are there?\n(choose the best answer)",
    options: [
      "Each Scrum Team has its own Product Backlog",
      "There is only one Product Backlog for the entire product",
      "There can be multiple Product Backlogs divided by application areas",
      "Each Scrum Team maintains a separate backlog, but all are consolidated into a single integrated Product Backlog",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, when multiple Scrum Teams are working on the same product, there is only one Product Backlog for the product. The Product Backlog represents a single source of requirements for all the teams. It is managed by the Product Owner, who collaborates with the stakeholders and the Scrum Teams to ensure a clear and transparent understanding of the product and its priorities.",
  },
  {
    id: "31a73ca8-60ba-421f-b464-000bfb13e185",
    chapter: 5,
    question:
      "True or False: A Scrum Team can work on multiple Product Goals simultaneously.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the statement that a Scrum Team must only work on a single Product Goal at any time is false. The Product Goal is the long-term objective for the Scrum Team.  They must fulfill (or abandon) one objective before taking on the next.",
  },
  {
    id: "2d08449a-c1a3-4fa7-b3ef-487ca4992eac",
    chapter: 5,
    question:
      "True or False: Scrum encourages the use of committees for making fast and correct decisions in complex environments.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the statement that committees help us make fast and correct decisions in complex environments is false. Scrum promotes self-organizing and cross-functional teams that have the authority and accountability to make decisions. Committees can often introduce delays, bureaucracy, and complexity, hindering the agility of the organization. In Scrum, the decision-making authority is distributed among the Scrum Team members, with the Product Owner responsible for decision-making related to the Product Backlog and the Developer for technical decisions. This enables faster and more effective decision-making, promoting adaptability and responsiveness in complex environments.",
  },
  {
    id: "2a641886-2061-4047-967f-33fe0fcef133",
    chapter: 5,
    question:
      "What does the term “development” mean in the context of Scrum?\n(choose the best answer)",
    options: [
      "Writing code",
      "Testing and quality assurance",
      "Any type of work",
      "Software development",
    ],
    correctAnswer: 2,
    explanation:
      "The Scrum Guide uses the word “developers” in Scrum not to exclude but to simplify. If you get value from Scrum, consider yourself included. Given this, we can infer that “development” means any type of work in which Scrum could be helpful.",
  },
  {
    id: "6d236282-b392-4801-bd4d-fd82bbdbce91",
    chapter: 5,
    question:
      "Who is responsible for setting the Definition of Done?\n(choose the best answer)",
    options: [
      "The Scrum Team",
      "The Scrum Master",
      "The Product Owner",
      "The Developers individually",
    ],
    correctAnswer: 0,
    explanation:
      "If the Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product. The Developers are required to conform to the Definition of Done. If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done.",
  },
  {
    id: "cd16c092-49ae-4171-92b5-3e22ef5257a3",
    chapter: 5,
    question:
      "True or False: According to the Scrum Guide, a Scrum Team must always consist of 10 or fewer people.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The Scrum Guide does not prescribe a specific team size for a Scrum Team. The Scrum Guide states that Scrum Teams are "typically" 10 or fewer people, indicating that this is a general guideline rather than a strict rule. The use of "typically" suggests that while smaller teams are often more effective and manageable in Scrum, there can be exceptions based on the context and requirements of specific projects or organizations. The emphasis is on maintaining a team size that allows for effective collaboration, communication, and the ability to accomplish significant work within a Sprint.',
  },
  {
    id: "539bfc38-0404-4984-ab57-8bc3935b87a6",
    chapter: 5,
    question:
      "True or False: The Scrum Guide mandates that the Product Owner must participate in the Sprint Retrospective.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      'The Scrum Guide states that the Scrum Team consists of one Scrum Master, one Product Owner, and Developers. In the Sprint Retrospective section, it mentions that "the Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done." In this context, since the Product Owner is part of the Scrum Team, they are expected to participate in the Sprint Retrospective',
  },
  {
    id: "783eda7c-ea91-4c75-a6e8-49a4f4a4a493",
    chapter: 5,
    question:
      "True or False: The Scrum Guide states that people will always prefer working in small cross-functional teams.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide does not make a definitive statement about people always preferring to work in small cross-functional teams. The preference for team size can vary based on the context, nature of the work, and individual preferences. While small cross-functional teams are often effective in Scrum, there can be situations where larger or specialized teams are more appropriate. It is important to consider the specific needs and constraints of the organization when determining the optimal team size.",
  },
  {
    id: "2e4e393a-c6cf-478b-aee1-5cbbde946d6e",
    chapter: 5,
    question:
      "True or False: The Definition of Done is an optional component in Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Definition of Done is a mandatory artifact in Scrum. It serves as a shared understanding of what it means for an increment to be complete and potentially releasable. The Scrum Team collaboratively defines the criteria that must be met for work to be considered Done. The Definition of Done ensures transparency and helps manage expectations by providing a clear definition of what it takes to deliver a product increment.",
  },
  {
    id: "4775c40e-05be-46b4-9053-c27ba4ecdef9",
    chapter: 5,
    question:
      "True or False: Once a Sprint has started, its duration can be modified if more time is required to deliver a Done Increment.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, once a Sprint has started, its duration is fixed and cannot be changed. The time-boxed nature of the Sprint ensures a consistent cadence for inspection and adaptation. Changing the length of a Sprint mid-Sprint would disrupt the framework's predictability and undermine the principles of Scrum. The Scrum Team is encouraged to plan their work carefully during Sprint Planning to ensure they can complete a potentially releasable Increment by the end of the Sprint.",
  },
  {
    id: "f3e37895-a906-44a6-8bdd-effa2ca9d17b",
    chapter: 5,
    question:
      "True or False: Spikes are utilized to acquire additional knowledge about a Product Backlog Item before initiating its development.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "A Spike is a time-boxed activity that allows the Scrum Team to investigate and learn more about a specific area of work. It can be used to reduce uncertainty and gain knowledge before starting the development of a Product Backlog Item (PBI). Spikes are often used when the team needs to explore a new technology, research a solution, or conduct experiments to gather information. The outcome of a Spike is the knowledge gained, which can then be used to make informed decisions and estimate the effort required for the PBI.",
  },
  {
    id: "9965e4a5-9f16-4422-8278-c7434f312c8f",
    chapter: 5,
    question:
      "In the context of Scrum, which approach is the empirical approach an alternative to?\n(choose the best answer)",
    options: [
      "The iterative approach",
      "The reactive approach",
      "The flexible approach",
      "The predictive approach",
    ],
    correctAnswer: 3,
    explanation:
      "The empirical approach in Scrum is based on the principles of transparency, inspection, and adaptation. It encourages the Scrum Team to continuously inspect and adapt their work based on real-time feedback and data. It is an alternative to the predictive approach, which relies on detailed upfront planning and assumptions about the future.",
  },
  {
    id: "5f6347cf-f3d5-45f9-829c-2729801fb005",
    chapter: 5,
    question:
      "True or False: Scrum is simple to learn but hard to master and apply effectively.\n(choose the best answer)",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "The fundamental concepts and principles of Scrum are relatively straightforward and easy to learn. The Scrum Guide itself is concise and clear, presenting the core elements of Scrum without much complexity. However, while Scrum may be simple to learn, effectively applying and mastering it can be difficult. This is largely due to the significant shift in mindset it requires, particularly for teams and organizations that are accustomed to more traditional, plan-driven project management methodologies. Implementing Scrum effectively requires a solid understanding of its principles, as well as a commitment to continual learning, adaptation, and improvement.",
  },
  {
    id: "a670bba6-23cc-482c-afd6-072f147bf278",
    chapter: 5,
    question:
      "True or False: Trust plays a vital accountability in the effectiveness of Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "Trust is indeed crucial for the success of Scrum. According to the Scrum Guide, the Scrum Team members must have trust in each other to collaborate effectively and deliver value. Trust enables transparency, open communication, and the ability to make decisions collectively. It fosters a safe environment where team members can take risks, experiment, and learn from their failures. Without trust, collaboration becomes difficult, and the team's ability to self-organize and deliver high-quality increments may be compromised.",
  },
  {
    id: "c2adb93b-2457-4012-8a60-447bbe959aa2",
    chapter: 5,
    question:
      "True or False: The Daily Scrum requires the presence of the entire Scrum Team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developer to synchronize their work and plan the next 24 hours. While it is expected that the Developer members participate in the Daily Scrum, it is not mandatory for the entire Scrum Team to attend. The Product Owner and Scrum Master can attend as observers if they choose, but they should not disrupt the event or turn it into a status meeting. The Daily Scrum is primarily for the Developer to collaborate and make commitments to each other.",
  },
  {
    id: "4c76bba6-526e-40e6-86cb-c473c0b15915",
    chapter: 5,
    question:
      "What happens to a Product Backlog item that was not completed by the end of the Sprint?\n(choose the best two answers)",
    options: [
      "It will be inspected at the Sprint Review",
      "It will be completed in the next Sprint",
      "It will be returned to the Product Backlog",
      "It will not be inspected by the stakeholders at the Sprint Review",
      "The Scrum Master will extend the Sprint duration until the item is completed",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, when a Product Backlog item is not done by the end of the Sprint, it is not considered part of the Increment and is not inspected at the Sprint Review. The unfinished item remains on the Product Backlog and can be re-prioritized for future Sprints.",
  },
  {
    id: "f47f39e7-ee1d-4c35-b804-031da9d07b04",
    chapter: 5,
    question:
      "Who is primarily responsible for coaching the Scrum Team and ensuring Scrum is used correctly?\n(choose the best answer)",
    options: ["Product Owner", "Scrum Master", "Developers", "Stakeholders"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Scrum Master is responsible for ensuring Scrum is understood and implemented correctly. They facilitate the Scrum events, coach the Scrum Team, and help remove any obstacles that hinder progress.",
  },
  {
    id: "ddbee26c-e933-4582-a022-d25933063b69",
    chapter: 5,
    question:
      "True or False: The Scrum Team is collectively accountable for delivering a valuable and useful Increment every Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the entire Scrum Team, including the Product Owner, Developer, and Scrum Master, shares accountability for creating a valuable and useful Increment every Sprint. The Product Owner is responsible for maximizing the value of the product, the Developer is responsible for delivering a potentially releasable Increment, and the Scrum Master is responsible for ensuring that Scrum is understood and enacted. Collaboration and collective accountability are crucial for achieving the goal of delivering a valuable Increment at the end of each Sprint.",
  },
  {
    id: "877278e4-cdb2-4108-8158-259255ee67e5",
    chapter: 5,
    question:
      "True or False: The primary purpose of the Sprint Retrospective is to identify opportunities for improvement and enhance the quality and effectiveness of the Scrum Team's work.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the purpose of the Sprint Retrospective is for the Scrum Team to inspect themselves and their processes to identify improvements that can be made to increase the quality and effectiveness of their work. It is an opportunity for the team to reflect on their experiences during the Sprint and find ways to enhance their performance. The Sprint Retrospective provides a dedicated time for the team to collaboratively discuss and plan actions that will lead to continuous improvement in their work and the overall Scrum implementation.",
  },
  {
    id: "09574975-04ec-42d8-b120-8a152687f589",
    chapter: 5,
    question: "How is Scrum best described?\n(choose the best answer)",
    options: [
      "A methodology",
      "A framework",
      "A process",
      "A set of guidelines",
    ],
    correctAnswer: 1,
    explanation:
      "Scrum is best described as a framework. The Scrum Guide defines Scrum as a lightweight framework that helps individuals, teams, and organizations generate value through adaptive solutions for complex problems. It provides a structure for implementing an empirical process of inspection and adaptation.",
  },
  {
    id: "ec3b3f87-11ea-4099-99b9-2c7d4d4cf4a2",
    chapter: 5,
    question: "What is the nature of Scrum?\n(choose the best answer)",
    options: [
      "A methodology",
      "A project management technique",
      "A framework",
      "A software development approach",
    ],
    correctAnswer: 2,
    explanation:
      "Scrum is a framework. The Scrum Guide defines Scrum as a framework within which people can address complex adaptive problems while productively and creatively delivering products of the highest possible value. It is not a methodology or a specific project management technique, but rather a flexible framework that provides guidelines and structure for managing complex projects.",
  },
  {
    id: "043a9ab9-c362-4de6-b845-ce5c30674d94",
    chapter: 5,
    question:
      "Which of the following is not an input to the Sprint Planning event?\n(choose the best answer)",
    options: [
      "The Product Backlog",
      "Sprint Goal",
      "Team's Capacity",
      "Previous Increment",
    ],
    correctAnswer: 1,
    explanation:
      "In the Scrum framework, the Sprint Planning event involves determining the work to be done in the upcoming Sprint. The Product Backlog and the Previous Increment are both important inputs for this event. The Product Backlog contains the prioritized list of items to be worked on, while the Previous Increment helps the Scrum Team assess the progress and plan the next steps. The Sprint Goal, however, is not an input to the Sprint Planning event but rather an outcome. The Sprint Goal is a concise objective set for the Sprint, which guides the team's focus and provides a clear direction for the work.",
  },
  {
    id: "cd972932-b17e-4f27-be24-4021c314ec5d",
    chapter: 5,
    question:
      "Which event provides an opportunity for the Scrum Team to create a plan for improvements to be enacted in future Sprints?\n(choose the best answer)",
    options: [
      "Sprint Planning",
      "Sprint Retrospective",
      "Daily Scrum",
      "Sprint Review",
      "Sprint Refinement",
    ],
    correctAnswer: 1,
    explanation:
      "The event that results in a plan for improvements to be enacted in future Sprintse. The Sprint Retrospective is an opportunity for the Scrum Team to inspect its own processes and identify areas for improvement. The Scrum Team reflects on the previous Sprint and collaboratively decides on actions to enhance their effectiveness and efficiency. These identified improvements are then implemented during the next Sprint, making the Sprint Retrospective a crucial event for continuous improvement.",
  },
  {
    id: "dec6c2d6-5f44-4442-8692-3d45943e080a",
    chapter: 5,
    question:
      "True or False: Developers are responsible for delivering a potentially releasable and usable Increment of the product during each Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Developers within the Scrum Team are responsible for creating a usable Increment of the product during each Sprint. They are committed to delivering a product increment that is potentially releasable, which means it must be in a usable condition and meet the Definition of Done. The Developers collaborate and work together to implement the Product Backlog items and ensure that all aspects necessary for a usable Increment are completed within the Sprint timebox.",
  },
  {
    id: "973f95fe-5e6f-492e-a30b-1024ecffc7da",
    chapter: 5,
    question:
      "True or False: The Sprint Review is the only opportunity to inspect and adapt the product Increment",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'According to the Scrum Guide, the goal of each Sprint is to deliver a "Done" Increment of the product. However, there may be instances where the team faces challenges or unforeseen circumstances that make it difficult to deliver a complete and usable Increment within the Sprint timebox. This can happen due to various reasons such as technical complexities, dependencies, or external factors. It is important for the Scrum Team to continuously improve and strive to achieve a "Done" Increment every Sprint, but it is possible that they may not always be able to accomplish this goal.',
  },
  {
    id: "2a2bdcb5-eac5-4cfd-847f-a62b0c482e9a",
    chapter: 5,
    question:
      "True or False: Releasing an Increment at the end of each Sprint is a mandatory requirement.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, there is no strict requirement that an Increment must be released at the end of each Sprint. While it is desirable to have a releasable Increment at the end of the Sprint, the decision to release it depends on various factors such as the readiness of the Increment, the business context, and the needs of the stakeholders. The Scrum Guide states that an Increment can be released whenever it has been created and makes sense to do so. Releasing an Increment at the end of each Sprint is not mandatory, and there may be valid reasons to delay the release or release it earlier than the end of the Sprint.",
  },
];

// Practice Test #6 — 100 questions
export const questionsPracticeTest6: Question[] = [
  {
    id: "a37a66a4-3195-4414-8a70-d35ebcf960ff",
    chapter: 6,
    question: "True or False: An Increment must be released every 3 Sprints.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, an Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together. In order to provide transparency, an Increment must be available at the end of every Sprint. The Increment must be usable and meet the Definition of Done. The availability of the Increment at least at the end of every Sprint enables inspection and adaptation by the Scrum Team and the stakeholders. The availability of the Increment does not depend on any other phases, requests, or timeframes.",
  },
  {
    id: "08884cd8-82b4-4854-af51-abef8160bccb",
    chapter: 6,
    question:
      "Who should track the progress toward the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Project Manager.",
      "The Scrum Master.",
      "The Product Owner.",
      "The Developers.",
    ],
    correctAnswer: 3,
    explanation:
      'According to the Scrum Guide, the Developers are the people in the Scrum Team who are responsible for creating a "Done" Increment that meets the Sprint Goal. The Developers are also accountable for managing their own work and tracking the progress toward the Sprint Goal. The Developers can use various tools and techniques to monitor the remaining work, such as Sprint Backlog, Sprint Burndown Chart, or Task Board.',
  },
  {
    id: "8e27914d-f3fe-4ad3-bed2-218f1da298f7",
    chapter: 6,
    question:
      "Who is accountable for ordering and clearly expressing the Product Backlog items?\n(choose the best answer)",
    options: [
      "The business analyst who works with the Product Owner.",
      "The Scrum Master, or the Scrum Master may delegate it to the Developers.",
      "The Scrum Master.",
      "The Product Owner.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Product Owner is also responsible for managing and expressing the Product Backlog, which is an ordered list of the work to be done by the Scrum Team. The Product Owner should ensure that the Product Backlog items are transparent, clear, and understood by everyone involved.",
  },
  {
    id: "cb494edb-e98b-4217-b6af-5c3abe0ac5f6",
    chapter: 6,
    question:
      "True or False: A Scrum Master can determine how work is performed during the Sprint if they have more experience and knowledge than the Developers.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Developers are the people in the Scrum Team who are accountable for creating a usable Increment each Sprint. The Developers are self-managing, which means they decide how to organize and perform their work during the Sprint. The Developers are not directed by anyone else, such as subject matter experts, the Scrum Master, the rest of the Scrum Team, or a team manager. The Developers have the skills and autonomy to deliver value to the product.",
  },
  {
    id: "8a366745-4e91-4133-b681-f87919c37bab",
    chapter: 6,
    question:
      "The Scrum Master notices that the Product Owner has difficulty ordering the Product Backlog items. What is a suitable action for the Scrum Master to take?\n(choose the best answer)",
    options: [
      "Tell the Developers to use their technical expertise to order the Product Backlog.",
      "Suggest the Product Owner shorten the Sprint, so he can have more frequent feedback on the Product Backlog.",
      "Serve the Product Owner by ordering the Product Backlog.",
      "Ask the Product Owner to size the Product Backlog items and calculate the ROI.",
      "Offer the Product Owner help in understanding that the purpose of ordering the Product Backlog is to optimize value.",
    ],
    correctAnswer: 4,
    explanation:
      "As a leader who serves and facilitator, the Scrum Master's role is to help the team understand and implement Scrum, including helping the Product Owner understand the purpose of ordering the Product Backlog to optimize value. The Scrum Master can provide guidance, support, and coaching to the Product Owner to enhance their understanding and ability to effectively prioritize and order the Product Backlog.",
  },
  {
    id: "d4893a37-4521-4616-baed-be6f9edeb325",
    chapter: 6,
    question:
      "True or False: A manager should participate in Daily Scrums if they have some feedback or suggestions for the Developers.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers to inspect their progress toward the Sprint Goal and to adapt their Sprint Backlog accordingly. The Daily Scrum is a 15-minute time-boxed event that is held at the same time and place each day. The Daily Scrum is for the Developers, and no one else is required to be there. Management that is external to the Scrum Team is not involved in the Daily Scrum, as this would interfere with the Developers' self-management and ownership of their work.",
  },
  {
    id: "81697c01-f903-40b2-8e0b-b7e047b49226",
    chapter: 6,
    question:
      "You have just joined a company that is new to Scrum. Your manager has asked you to be the Scrum Master of six new Scrum Teams. These teams will work on one product. Select two conditions you should aim for in this situation. \n(choose the best two answers)",
    options: [
      "There should be six Product Owners, each with their own vision and goals.",
      "There should be only one Product Owner.",
      "Each Scrum Team should have a different Product Backlog.",
      "The product has one Product Backlog.",
      "There should be six Product Owners, coordinated by a Senior Product Owner.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "The Scrum Guide states that the Product Owner's primary responsibility is to maximize the product's value created by the Scrum Team. They manage and express the ordered Product Backlog, representing the work to be done. While they may consider a committee's desires, the Product Owner is a single individual, and any changes to priorities must be addressed with them. Regardless of the number of Scrum Teams involved, there is only one Product Backlog. Unnecessary complexity, confusion, or conflict should be avoided in this context.",
  },
  {
    id: "6474da13-dcbc-4045-9ab8-fa31e1a656e3",
    chapter: 6,
    question:
      "True or False: A Product Backlog item can be considered complete before the end of the Sprint if it meets the Definition of Done.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, a Product Backlog item is considered complete when it meets the Definition of Done. The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. The Definition of Done may include acceptance criteria, but it is not limited to them. The Definition of Done applies to all Product Backlog items, regardless of when they are completed within the Sprint. The Definition of Done does not depend on the approval of anyone outside the Scrum Team, such as a product sponsor.",
  },
  {
    id: "452ba412-bede-469e-91d3-21c36d69f2ad",
    chapter: 6,
    question:
      "What are two ways that legal compliance requirements are handled in Scrum? \n(choose the best two answers)",
    options: [
      "They are planned, agreed, and documented before the actual product development Sprints.",
      "They are integrated with the product development of the product.",
      "They are added to the Product Backlog and addressed in early Sprints, while always providing some business functionality.",
      "They are addressed by a separate team who is in charge of compliance requirements.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Scrum Team is responsible for delivering a “Done” product Increment that meets the Definition of Done, which may include regulatory compliance requirements. The Scrum Team should address the compliance issues along with the functional development of the product, as part of the Sprint Goal and the Sprint Backlog. The compliance issues should also be added to the Product Backlog and addressed in early Sprints, while always delivering some business value, no matter how small. The other options are incorrect, as they introduce unnecessary delays, dependencies, or handovers.",
  },
  {
    id: "4829fe0c-24ee-47b4-8074-8a651cab1a58",
    chapter: 6,
    question: "The duration of a Sprint should be: \n(choose the best answer)",
    options: [
      "Short enough to keep the risks manageable.",
      "Short enough to be able to deliver value to the customers frequently.",
      "No longer than one calendar month.",
      "All of the above.",
    ],
    correctAnswer: 3,
    explanation:
      "A Sprint in Scrum is timeboxed to one month or less. This duration is purposefully short to minimize risk, enable frequent delivery of value to customers, and uphold the Scrum framework's principle of frequent inspection and adaptation.",
  },
  {
    id: "43237c97-d3da-4691-bc1a-891b5b585b1d",
    chapter: 6,
    question:
      "Which of the following is mandated by Scrum? \n(choose the best answer)",
    options: [
      "Sprint Goal.",
      "Developers must estimate the Product Backlog items using Story Points.",
      "Sprint Burnup Chart.",
      "Product Roadmap.",
      "All of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Goal is the single objective for the Sprint. Although the Sprint Goal is a commitment by the Developers, it provides flexibility in terms of the exact work needed to achieve it. The Sprint Goal also creates coherence and focus, encouraging the Scrum Team to work together rather than on separate initiatives. The other options are not mandatory in Scrum.",
  },
  {
    id: "7ddbc869-9ca4-4415-a8ab-d9926368a073",
    chapter: 6,
    question:
      "True or False: A Scrum Master should set up the meeting for a Scrum Team that has Developers in different physical locations and tell them how to conduct the Daily Scrum.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Developers are self-managing, which means they decide how to organize and do their work. The Scrum Master should not interfere with their decisions or tell them what to do. The Scrum Master should also not delegate the problem to management or ask the Developers to take turns in setting up the meeting, as these actions would undermine the Developers' autonomy and self-organization.",
  },
  {
    id: "cd879318-32cc-4074-b7db-bc97eeba59b4",
    chapter: 6,
    question:
      "True or False: A Scrum Master can prioritize the resulting action items from the Sprint Retrospective if they have more experience and knowledge than the rest of the Scrum Team.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Sprint Retrospective, as per the Scrum Guide, allows the Scrum Team to review the last Sprint in terms of individuals, interactions, processes, tools, and their Definition of Done. It serves as an opportunity for the team to enhance their quality and effectiveness. The Scrum Master participates as a team member and facilitates the process, aiding in identifying improvements and creating an implementation plan. However, the Scrum Master refrains from prioritizing, capturing, summarizing, or reporting the outcomes, as this preserves the Scrum Team's self-management and ownership of the improvement process.",
  },
  {
    id: "3f999419-5515-47fe-86bb-800dffa0dba6",
    chapter: 6,
    question:
      "A new Developer is not following the Definition of Done agreed by the Scrum Team and causing conflicts with the other Scrum teams. If necessary, who should remove the Developer from the Scrum Team? \n(choose the best answer)",
    options: [
      "The project manager.",
      "The Scrum Team.",
      "The Product Owner.",
      "The Scrum Master.",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Team, as stated in the Scrum Guide, holds accountability for all product-related activities, including stakeholder collaboration, verification, maintenance, operation, experimentation, research, and development, as well as any other required tasks. They are self-managing, making internal decisions on roles, responsibilities, and conflict resolution. The Scrum Team has the authority to remove a Developer if necessary.",
  },
  {
    id: "94a6b73b-9f8a-40a0-b17e-d210a4fb950b",
    chapter: 6,
    question:
      "True or False: A Scrum Team is self-managing if they have a team leader who assigns tasks and monitors their progress.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "A team with a leader who assigns tasks and monitors progress contradicts the principle of self-management in Scrum. This principle empowers the team to take ownership of the work, promoting a high degree of collaboration, innovation, and efficiency.",
  },
  {
    id: "10a7d721-9f09-44f8-a30c-df4c64cb51a0",
    chapter: 6,
    question:
      "True or False: A Daily Scrum should be held at different times and places to reduce complexity.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Daily Scrum, as outlined in the Scrum Guide, is a 15-minute daily event held at the same time and place. Exclusively for Developers, it aims to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. Consistency in timing and location reduces complexity and improves focus, fostering a daily rhythm of inspection and adaptation. This approach also minimizes scheduling overhead and preparation. External factors like room availability or Product Owner's demands should not influence the timing and place of the Daily Scrum.",
  },
  {
    id: "8bd5a747-fc20-42b3-b545-89481daae668",
    chapter: 6,
    question:
      "What are the two mandatory accountabilities in every Scrum Team?\n(choose the best answer)",
    options: [
      "Product Owner and Lead Developer",
      "Product Owner and Scrum Master",
      "Scrum Master and Lead Developer",
      "Product Owner and Project Manager",
    ],
    correctAnswer: 1,
    explanation:
      "Two mandatory accountabilities in every Scrum Team are Product Owner and Scrum Master, as stated in the Scrum Guide.",
  },
  {
    id: "0b58b34c-ee51-44e3-aa3c-576261297f8d",
    chapter: 6,
    question:
      "What are the two main ways a Scrum Master helps a Scrum Team deliver value to the customers? \n(choose the best two answers)",
    options: [
      "By ensuring that the Product Backlog items are clear and testable.",
      "By supporting the Product Owner in Product Backlog management.",
      "By making sure that the Sprint Review is attended by the stakeholders.",
      "By facilitating decision-making.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "A Scrum Master primarily aids a Scrum Team in delivering value by supporting the Product Owner in effective Product Backlog management, ensuring that the team focuses on the highest value items. Furthermore, as a leader who serves, they facilitate the decision-making processes, creating an environment where the team has the necessary information and conditions to make the best decisions, thus enhancing the team's effectiveness and the value delivered.",
  },
  {
    id: "718ac1fd-126c-445a-8cac-d9ca58f9958e",
    chapter: 6,
    question:
      "Which of the following is mandated by Scrum? \n(choose the best answer)",
    options: [
      "Sprint Goal.",
      "Developers must estimate the Product Backlog items using Story Points.",
      "Sprint Burnup Chart.",
      "Product Roadmap.",
      "All of the above.",
    ],
    correctAnswer: 0,
    explanation:
      "The Sprint Retrospective, one of Scrum's five events, aims to enhance quality and effectiveness. The Scrum Team inspects the last Sprint, focusing on individuals, interactions, processes, tools, and their Definition of Done. The other options are not mandatory in Scrum.",
  },
  {
    id: "1721cb09-43d0-419b-acc9-760c8e92ea41",
    chapter: 6,
    question:
      "True or False: A Scrum Master can assign tasks to the Developers based on their skills and availability.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Team is accountable for all product-related activities, including stakeholder collaboration, verification, maintenance, operation, experimentation, research, and development. They are self-managing, deciding who does what, when, and how, without external direction. Scrum doesn't have a Project Manager role, as it deviates from traditional project management. The Product Owner is responsible for the product vision and value, not the work's execution. The Scrum Master helps the team apply Scrum but doesn't direct their tasks.",
  },
  {
    id: "98223308-2f36-4400-b20f-f72bb020c6b5",
    chapter: 6,
    question:
      "You are the Scrum Master of Scrum Team that is suffering from a delay caused by an external supplier. The delay is blocking the development of a few of the the top Product Backlog items. As the Scrum Master, what advice would you give the Product Owner?\n(choose the best answer)",
    options: [
      "Teach that the Product Backlog ordering should mainly focus on reflecting the flow of value.",
      "Suggest having a specific Sprint for handling the work related to the external supplier.",
      "Tell him to focus on making sure the Developers are busy.",
      "Tell him to leave the Product Backlog as it is.",
    ],
    correctAnswer: 0,
    explanation:
      "As per the Scrum Guide, the Product Owner is responsible for maximizing product value resulting from the Scrum Team's work. Effective Product Backlog management involves ordering items to achieve goals. The Scrum Master should remind the Product Owner to prioritize value flow in the Product Backlog, not Developer utilization or external dependencies. The Scrum Master does not dictate actions to the Product Owner, and the backlog should not be ordered based on criteria other than value.",
  },
  {
    id: "4d98d033-0643-4447-b5c7-043c2b39ca82",
    chapter: 6,
    question:
      "What is the purpose of a Sprint in Scrum?\n(choose the best answer)",
    options: [
      "To produce a valuable, useful Increment",
      "To complete all the tasks in the Sprint Backlog",
      "To inspect and adapt the Product Backlog",
      "To review and improve the Scrum process",
    ],
    correctAnswer: 0,
    explanation:
      "The purpose of a Sprint is to produce a valuable, useful Increment, as stated in the Scrum Guide. The other options are not correct because they are not the primary purpose of a Sprint, but rather activities that may happen during or after a Sprint.",
  },
  {
    id: "e26f63af-d639-48a7-83a2-9f58e81ac0d8",
    chapter: 6,
    question:
      "Who has the final say on whether a Sprint should be canceled?\n(choose the best answer)",
    options: [
      "The Stakeholders.",
      "The Scrum Master.",
      "The Scrum Team.",
      "The Product Owner.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Product Owner is the sole person responsible for managing the Product Backlog and ensuring that the value of the work the Scrum Team performs is understood. The Product Owner can cancel a Sprint if they determine that the Sprint Goal is obsolete or that the value of the work done is lower than the cost of completing the Sprint. The other options are incorrect, as they do not have the authority or the accountability to cancel a Sprint.",
  },
  {
    id: "d015fefb-5fca-4c7f-abaa-1cba9a821a08",
    chapter: 6,
    question:
      "You are the Scrum Master of a new product that requires 55 people to develop. How would you advise the group to organize themselves into teams?\n(choose the best answer)",
    options: [
      "Who are the best candidates for each team role?",
      "What is the optimal balance of skills and experience on each team?",
      "Who is going to be the team leader?",
      "How will we ensure that all teams have the necessary capabilities?",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Developers are the people in the Scrum Team who are committed to creating any aspect of a usable Increment each Sprint. The Developers should have all the skills and competencies needed to accomplish the work of the Sprint. Therefore, a good first question for the Scrum Master to suggest is how to ensure that all teams have the right amount of expertise. The other options are incorrect, as they are not aligned with the Scrum values or principles.",
  },
  {
    id: "1c4c3784-bed5-46b6-aea7-7e739de113e2",
    chapter: 6,
    question:
      "True or False: A Scrum Team should never change its membership, even if it means sacrificing the quality of the product or the happiness of the team members.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Scrum Teams should have consistency in their membership to promote trust, collaboration and accountability. However, sometimes changes are unavoidable or beneficial for the team or the product. In such cases, the Scrum Team should be open to change, while acknowledging that it may cause some temporary disruption or loss of productivity.",
  },
  {
    id: "55773820-5e7e-4221-a2fe-38f44cf08e9b",
    chapter: 6,
    question:
      "Who is accountable for maximizing the value of the product resulting from the work of the Scrum Team?",
    options: [
      "The Product Owner",
      "The Developers",
      "The Stakeholders",
      "The Scrum Master",
    ],
    correctAnswer: 0,
    explanation:
      "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team, as stated in the Scrum Guide. The other options are not correct because they are not accountable for this aspect of Scrum, but rather have different roles and responsibilities.",
  },
  {
    id: "45237412-87a6-4158-961e-a52e18de5b2b",
    chapter: 6,
    question:
      "What are the responsibilities and characteristics of the Product Owner?\n(choose the best two answers)",
    options: [
      "The Product Owner is responsible for delivering the product increments.",
      "The Product Owner is one individual who represents all stakeholders.",
      "The Product Owner is a group of people who share the accountability for the product value.",
      "The Product Owner is responsible for managing and ordering the Product Backlog.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Product Owner is also accountable for managing and ordering the Product Backlog. The Product Owner is one person, not a committee, and represents the needs and interests of all stakeholders. Having multiple Product Owners would cause confusion, conflicts and waste.",
  },
  {
    id: "768df4e9-0f2f-4edc-993a-91ce5a19b88e",
    chapter: 6,
    question:
      "What are two aspects of self-managing Developers? \n(choose the best two answers)",
    options: [
      "Decide how to split the work among themselves",
      "Consistently increase their productivity",
      "Select the Product Backlog items for the Sprint",
      "Create a detailed report for management every Sprint",
      "Order the Product Backlog",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "In Scrum, self-managing Developers have the autonomy to decide how to divide the work amongst themselves during a Sprint. This allows the team to best utilize their skills and expertise to deliver the planned work in the most efficient manner. Additionally, in collaboration with the Product Owner, Developers actively participate in selecting the items from the Product Backlog that they will work on during the upcoming Sprint. This self-selection process reinforces their autonomy and allows them to commit to a realistic and achievable scope of work for each Sprint, based on their understanding of their capacity and the Product Owner's input on value and priorities.",
  },
  {
    id: "4176c5fb-7c16-49fb-ad0f-fc5071c6ca30",
    chapter: 6,
    question:
      "True or False: An organization that adopts Scrum should use the same terminology as defined in the Scrum Guide to avoid ambiguity and promote transparency.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, Scrum is a framework with specific roles, events, artifacts and rules. Changing the terminology of Scrum may cause confusion, misunderstanding and resistance to change. The new vocabulary of Scrum is a reminder that Scrum is different from the previous way of working and requires a shift in mindset and behavior. Management may feel less anxious by using familiar terms, but this may also prevent them from fully embracing Scrum and its benefits.",
  },
  {
    id: "adbdac64-db8c-4c46-97dd-3166e3710d91",
    chapter: 6,
    question:
      "As a Scrum Master, how would you help a new Scrum Team get started? \n(choose the best two answers)",
    options: [
      "Ensure the Product Owner brings alignment by providing context such as the product vision and answer questions.",
      "Have the Developers take a personality test and assign roles based on their results.",
      "Ask the Product Owner to create a Product Backlog with enough items for several Sprints.",
      "Make sure the Scrum Team invests enough time creating the Definition of Done.",
      "Introduce a ranking system for the Developers based on their velocity.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. The Scrum Master helps the Scrum Team and the organization adhere to Scrum theory, practices, and rules. One of the activities that would help a newly formed Scrum Team is to ensure they have a clear and shared understanding of what “Done” means for their product. Another activity is to ask the Product Owner to share the product vision, goals, and context with the team, and answer any questions they might have. This would help the team align with the Product Owner and understand the value of their work. The other options are not helpful, as they would undermine the self-management, accountability, and collaboration of the Scrum Team.",
  },
  {
    id: "a6af326a-e3cd-4af4-8ad4-0bb40bc1325e",
    chapter: 6,
    question:
      "True or False: A Scrum Master should ask each Developer to answer three questions during the Daily Scrum:  \n\nWhat did you do yesterday?  \nWhat will you do today?  \nWhat are the impediments?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers to inspect their progress and plan their work for the next 24 hours. The Scrum Master should not lead the discussions, as this would undermine the self-management of the Developers. The Scrum Master should also not enforce a specific format or questions for the Daily Scrum, as this would limit the creativity and adaptability of the Developers. The Scrum Master should only ensure that the Daily Scrum happens and that it is kept within 15 minutes.",
  },
  {
    id: "fa41d705-4824-4d0f-bf9f-b3d57f831d31",
    chapter: 6,
    question:
      "Who is accountable for creating the Definition of Done?\n(choose the best answer)",
    options: [
      "The Developers",
      "The Product Owner",
      "The Scrum Master",
      "The Scrum Team",
      "The Project Manager",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. The Definition of Done is created by the Scrum Team, which consists of the Product Owner, the Developers, and the Scrum Master. The Definition of Done is used to assess when work is complete on the product Increment. The other options are incorrect, as they imply that only one role is responsible for creating the Definition of Done.",
  },
  {
    id: "63d1d830-edbf-40d2-9c40-beee162306dd",
    chapter: 6,
    question:
      "Which of the following are valid work items to be included in the Sprint Backlog?\n(choose the best answer)",
    options: [
      "Technical tasks.",
      "Tests.",
      "Documentation.",
      "Use cases.",
      "All the above.",
    ],
    correctAnswer: 4,
    explanation:
      "The Sprint Backlog in Scrum includes all necessary work identified by the Developers to achieve the Sprint Goal. This encompasses a variety of tasks, such as technical tasks, tests, documentation, and use cases. The Developers have the autonomy to decide what work is necessary and can update the Sprint Backlog throughout the Sprint as they learn more.",
  },
  {
    id: "5be5a775-f88e-4fba-9ec1-956898260c11",
    chapter: 6,
    question:
      "What are some of the questions that the Developers should ask themselves at the Daily Scrum to inspect their progress toward the Sprint Goal?\n(choose the best three answers)",
    options: [
      "How will our progress affect the next Sprint?",
      "How much time did I spend on each task yesterday?",
      "Why are you late?",
      "What will I do tomorrow?",
      "What are the most valuable things that we can work on today to move closer to the Sprint Goal?",
      "How can we help each other overcome any obstacles or challenges that are hindering our progress toward the Sprint Goal?",
      "What did we learn from yesterday's work, and how can we adjust our plan accordingly to optimize our chances of meeting the Sprint Goal?",
    ],
    correctAnswer: 4,
    correctAnswers: [4, 5, 6],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developers to inspect their progress and plan their work for the next 24 hours. The topics for the Developers to discuss should be related to the Sprint Goal and how to achieve it. The answers E, F and G are relevant topics, as they help the Developers identify any issues, risks or opportunities that affect their progress toward the Sprint Goal. The answers A, B and C are not relevant topics, as they focus on individual activities, attendance or future work that are not directly related to the Sprint Goal. The answer D is also not relevant, as it concerns a future Sprint that is not in scope of the current Daily Scrum.",
  },
  {
    id: "44a89847-d6b2-4c24-a744-f40731193fbe",
    chapter: 6,
    question:
      "How should the Definition of Done be established when multiple Scrum Teams are collaborating on a product?\n(choose the best answer)",
    options: [
      "The Product Owner from each Scrum Team agrees on a common Definition of Done.",
      "The Scrum Teams create and follow the same Definition of Done.",
      "Each Scrum Team adopts its own, but must communicate their definition to the Product Owner so the expectations are clear.",
      "Each Scrum Team applies its own. The differences are resolved and aligned during a Sprint Review.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, when multiple Scrum Teams are working together on a product, they must mutually define and comply with the same Definition of Done. This ensures that the product Increment is integrated, consistent, and potentially releasable. The other options are incorrect, as they would create confusion, conflicts, and waste among the Scrum Teams. The Scrum Masters are not responsible for defining the Definition of Done, and there is no such thing as a hardening Sprint in Scrum.",
  },
  {
    id: "2db2fab8-a579-4049-82d1-95757bc860e8",
    chapter: 6,
    question:
      "Who should be the most informed about how the Scrum Team is progressing toward the Product Goal?\n(choose the best answer)",
    options: [
      "The Scrum Master.",
      "The Business Analyst.",
      "The Product Owner.",
      "The Developers.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. The Product Owner is also responsible for managing and expressing the Product Backlog, which is aligned with the Product Goal. Therefore, the Product Owner should know the most about the progress toward the Product Goal, and communicate it to stakeholders and the Scrum Team. The other options are incorrect, as they are not accountable for the product value or the Product Goal.",
  },
  {
    id: "63487347-aba8-4b0e-a773-166609cb2577",
    chapter: 6,
    question:
      "True or False: A Definition of Done is a list of tasks that the Developers must complete for each Product Backlog item before they can mark it as done.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Definition of Done (DoD) in Scrum is not simply a list of tasks that Developers must complete for each Product Backlog item. Rather, it's a shared understanding within the Scrum Team about what it means for work to be complete, and it applies to the Increment as a whole, not individual items. The DoD increases transparency and is used to assess when work is complete on the product Increment. It guides the Developers in knowing how many Product Backlog items they can select during a Sprint Planning. Importantly, it must be a clear and concise list of requirements that a software Increment must meet to be considered complete.",
  },
  {
    id: "60c716ba-c6f3-4c2c-a791-148a0630e959",
    chapter: 6,
    question:
      "What is the Product Owner's accountability in the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "Setting the agenda and facilitating the discussions.",
      "Collecting feedback and updating the Product Backlog.",
      "Joining as a Scrum Team member.",
      "The Product Owner does not attend the Sprint Retrospective.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective is an event for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. The Product Owner is a member of the Scrum Team, and therefore should participate in the Sprint Retrospective. The Product Owner can share their perspective, insights, and suggestions for improvement with the rest of the Scrum Team. The other options are incorrect, as they are not part of the Product Owner's role or responsibility during the Sprint Retrospective.",
  },
  {
    id: "5830da95-9393-49d0-94ce-1f7ff8cc0bbc",
    chapter: 6,
    question:
      "Who is accountable for delivering value to stakeholders?\n(choose the best answer)",
    options: [
      "The Product Manager.",
      "The Developers.",
      "The Scrum Master.",
      "The Team Lead.",
      "The Scrum Team.",
    ],
    correctAnswer: 4,
    explanation:
      "According to the Scrum Guide, delivering value to stakeholders is a collective accountability of the entire Scrum Team, which includes the Product Owner, the Developers, and the Scrum Master. While the Product Owner focuses on maximizing value by managing the Product Backlog and working with stakeholders, the Developers are committed to creating any aspect of a usable Increment each Sprint, and the Scrum Master facilitates and promotes Scrum within the team and the organization. Together, they collaborate to deliver value.",
  },
  {
    id: "f33cd818-52e7-4a2b-bebc-ad16763df8fd",
    chapter: 6,
    question:
      "True or False: A Sprint Review is a presentation of the work done by the Developers to the entire organization to check if the work has been done as planned.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Review is an event that occurs at the end of a Sprint, where the Scrum Team and stakeholders collaborate to inspect the Increment and the Product Backlog, and to adapt the Product Backlog if needed. The Sprint Review is not a demo, a control mechanism, or a reward/punishment system. The Sprint Review is an opportunity to inspect and adapt the product and to align on the next steps.",
  },
  {
    id: "750f7685-4df8-4a71-802d-7142239d8cea",
    chapter: 6,
    question:
      "True or False: A Product Owner can update the Sprint Backlog during a Sprint if needed.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Sprint Backlog is composed of the Sprint Goal, the Product Backlog items selected for the Sprint, and the plan for delivering them. The Sprint Backlog is a plan created by the Developers, and they are accountable for updating it throughout the Sprint as more is learned. The Product Owner does not have the authority to update the Sprint Backlog, as this would interfere with the Developers' self-management and ownership of their work.",
  },
  {
    id: "8218e555-1753-4472-8e59-690aa447abbb",
    chapter: 6,
    question:
      "True or False: A Product Owner should order the Product Backlog items by value, so that the largest items are at the top and the smallest items are at the bottom.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "While it's true that the Product Owner should order the Product Backlog, it is not solely based on the size of the items. The ordering should be done based on considerations of value, risk, priority, and dependencies, among others. It's important to remember that larger items aren't necessarily more valuable. A smaller item could provide more value, depending on various factors like business needs, user impact, or strategic objectives.",
  },
  {
    id: "d50ea431-6b96-4b46-aaa5-b0cccea53586",
    chapter: 6,
    question:
      "How long is the timebox for the Daily Scrum event?\n(choose the best answer)",
    options: ["15 minutes.", "30 minutes.", "3 hours.", "As long as needed."],
    correctAnswer: 0,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is a 15-minute event for the Developers of the Scrum Team. The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. The other options are incorrect, as they do not reflect the timebox or the frequency of the Daily Scrum. The Daily Scrum should be held at the same time and place each day, but this is not related to the timebox.",
  },
  {
    id: "f2ea18fa-abb5-4083-a0fe-fff44b4fb62b",
    chapter: 6,
    question:
      "Is it true or false that the Sprint Goal and the Sprint Backlog are outputs from the Sprint Planning?",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Sprint Backlog is initially created during Sprint Planning. Further, the Sprint Goal, the Product Backlog items selected for the Sprint, plus the plan for delivering them are together referred to as the Sprint Backlog. Thus, the statement is true.",
  },
  {
    id: "1e32568d-1018-4f8f-9ada-92aaf6845c26",
    chapter: 6,
    question:
      "What are two valid services that the Scrum Master provides to the Product Owner?\n(choose the best two answers)",
    options: [
      "Helping find techniques for effective Product Goal definition and Product Backlog management",
      "Facilitating stakeholder collaboration as requested or needed",
      "Acting as the middlemen between the Product Owner and stakeholders",
      "Ensuring the Developers follow the plan",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "The Scrum Master serves the Product Owner in several ways, including: Helping find techniques for effective Product Goal definition and Product Backlog management; Helping the Scrum Team understand the need for clear and concise Product Backlog items; Helping establish empirical product planning for a complex environment; and, Facilitating stakeholder collaboration as requested or needed.",
  },
  {
    id: "652c5226-b724-49cb-a276-22388ee4dc6f",
    chapter: 6,
    question:
      "According to the Scrum Guide, who is responsible for creating the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Developers",
      "The Scrum Team",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the Sprint Goal is created by the Scrum Team. The Scrum Team, consisting of the Product Owner, Developer, and Scrum Master, collaboratively establishes the Sprint Goal during the Sprint Planning event. The Sprint Goal provides focus and guidance to the team on what needs to be accomplished during the Sprint.",
  },
  {
    id: "e73e7b73-3fac-4f02-8938-8d55d31f0b7e",
    chapter: 6,
    question:
      "Who is accountable for managing the work during the Sprint?\n(choose the best answer)",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Developers",
      "The stakeholders",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the work during the Sprint is managed by the Developers. The Developers self-organize to determine how to best accomplish the work planned for the Sprint. They collaborate, make decisions, and adapt their plan as necessary to deliver a potentially releasable Increment by the end of the Sprint. The Developers are accountable for creating a plan and organizing their work, while also collaborating with the Product Owner and the Scrum Master as needed.",
  },
  {
    id: "7fb7309f-8959-4279-83c1-9e930d2e23f1",
    chapter: 6,
    question:
      "Which practice is not permitted in Scrum?\n(choose the best answer)",
    options: [
      "Continuous integration",
      "Planning Poker",
      "Hardening Sprints",
      "Release planning",
    ],
    correctAnswer: 2,
    explanation:
      'According to the Scrum Guide, hardening Sprints are not permitted in Scrum. Scrum emphasizes delivering a valuable, useful Increment of the product at the end of every Sprint. Hardening Sprints, which focus solely on bug fixing, stabilization, or "hardening" of the product, are discouraged as they delay delivering valuable working software. Instead, Scrum promotes the idea of maintaining a consistent pace and quality throughout each Sprint, avoiding the need for separate hardening or stabilization periods.',
  },
  {
    id: "d7680eac-ab84-4f91-9254-d737073dc326",
    chapter: 6,
    question:
      "True or False: The Scrum Master is solely responsible for the successful delivery of the product.\n(choose the best answer)",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the statement that the Scrum Master is responsible for everything is false. While the Scrum Master plays a crucial role in facilitating and coaching the Scrum Team, they are not responsible for all aspects of the team or the product development process. The Scrum Master's main focus is on ensuring that the Scrum framework is understood and implemented effectively, helping to remove any impediments that hinder the team's progress. However, the responsibility for delivering the product lies with the entire Scrum Team, including the Product Owner and the Developer.",
  },
  {
    id: "a5057612-75cc-4428-ab76-5d78d4a63a61",
    chapter: 6,
    question:
      "Which are suitable topics for discussion in a Sprint Retrospective?\n(select the best three answers)",
    options: [
      "How the Scrum Team works together.",
      "Definition of Done.",
      "The order of work currently represented in the Product Backlog.",
      "Planning the Sprint Backlog for the next Sprint.",
      "Team dynamics.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1, 4],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Sprint Retrospective is an event for the Scrum Team to inspect how they worked together and plan ways to improve their effectiveness. The topics for discussion may include how the Scrum Team collaborates, communicates, and performs; the Definition of Done and its alignment with the quality standards; and the team dynamics, such as trust, respect, and conflict resolution. The other options are not suitable topics for discussion in a Sprint Retrospective, as they belong to other events, such as Sprint Planning or Product Backlog refinement.",
  },
  {
    id: "27c71ccd-da8d-49f3-bd07-7f12cac05b31",
    chapter: 6,
    question:
      "True or False: The Scrum Team is composed of sub-teams with different roles and responsibilities.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Scrum Team consists of one Scrum Master, one Product Owner, and Developers. Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time, the Product Goal. The Scrum Team must have all the skills and competencies needed to deliver an Increment in a Sprint.",
  },
  {
    id: "924cebe8-b62c-4d42-bd37-543a115663b5",
    chapter: 6,
    question: "True or False: The Sprint Backlog is owned by the Scrum Master.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Sprint Backlog is the set of Product Backlog items selected for the Sprint, plus a plan for delivering the product Increment and realizing the Sprint Goal. The Sprint Backlog is a plan by and for the Developers.",
  },
  {
    id: "6779e5ae-bba6-4f3a-89ee-2ab4bcab20ef",
    chapter: 6,
    question:
      "True or False: There is a break between Sprints to allow the Developers to finish the testing from the last Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Sprints are fixed-length events of one month or less that serve as a container for the other Scrum events and the creation of a product Increment. Sprints have consistent durations throughout a development effort and a new Sprint starts immediately after the conclusion of the previous Sprint.",
  },
  {
    id: "2f542c2b-b3c6-4f05-be4d-b959a5bd94a8",
    chapter: 6,
    question:
      "True or False: Sprint Planning covers how conditions have changed and how the Product Backlog should evolve.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, Sprint Planning covers two topics: the Sprint Goal (why), and the plan for the Sprint Backlog (what and how). The Sprint Goal is an objective that will be met within the Sprint by implementing a subset of the Product Backlog. The plan for the Sprint Backlog is created by the Developers who select and forecast the Product Backlog items they can deliver in the Sprint and how they will do it.",
  },
  {
    id: "12f092d3-c8fa-4cdd-9487-fdc318266e94",
    chapter: 6,
    question:
      "What are two efficient methods for the Scrum Team to clarify non-functional requirements?\n(select the best two answers)",
    options: [
      "Add them to the Product Backlog to ensure visibility.",
      "Add them to the Definition of Done so the work is done every Sprint.",
      "Put them on a separate sheet on the Scrum board, available for all to see.",
      "Run the integration and regression tests before the end of the Sprint, and record the remaining work for the Sprint Backlog of the next Sprint.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 1],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, non-functional requirements are aspects not directly related to product functionality, like performance, security, and usability. They are part of the transparent Product Backlog, which lists all product needs. The Definition of Done sets shared criteria for completed work, including non-functional requirements that must be met each Sprint. Other options are ineffective, creating waste, confusion, or delay in clarifying non-functional requirements.",
  },
  {
    id: "1fbf8cae-2efd-4d6f-a3a1-1ab1483c40f9",
    chapter: 6,
    question:
      "During the Sprint Retrospective a Scrum Team has discovered several high priority process improvements. Which of the following statements is most correct?\n(select the best answer)",
    options: [
      "The Scrum Team should pick at least one high priority process improvement to put in the Product Backlog.",
      "The Scrum Team may include the items in the Sprint Backlog for the next Sprint.",
      "The Scrum Master chooses the most important process improvement and adds it to the Sprint Backlog.",
      "The Scrum Team must include at least one high priority process improvement in the Sprint Backlog for the next Sprint.",
    ],
    correctAnswer: 1,
    explanation:
      "During the Sprint Retrospective, the Scrum Team identifies potential improvements and strategies. From these identified improvements, the team may choose to adapt its Definition of Done or implement changes in the upcoming Sprint. The key thing to remember here is the team's self-managing nature. Any changes, including those involving process improvements, should be discussed and agreed upon by the team as a whole. This means that the process improvements can be included in the Sprint Backlog for the next Sprint if the team decides that they are important and feasible.",
  },
  {
    id: "45c8fe94-5efa-4f04-ab40-82f29db1e08e",
    chapter: 6,
    question:
      "True or False: The Developers are accountable for selecting the Product Owner and reporting productivity.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Developers are accountable for creating a plan for the Sprint, the Sprint Backlog, and organizing the work required to meet the Sprint Goal. They are not accountable for selecting the Product Owner, which is a stakeholder role, or reporting productivity, which is not a Scrum artifact or event",
  },
  {
    id: "a611575c-12cc-44ab-b4d7-1f5df2fa9628",
    chapter: 6,
    question:
      "Which of the following factors can influence the order of items in the Product Backlog?\n(choose all that apply)",
    options: [
      "Size of Product Backlog items",
      "Team size",
      "Product Backlog items age",
      "Business priority of Product Backlog items",
      "Dependencies",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3, 4],
    isMultiSelect: true,
    explanation:
      "Size of Product Backlog items, the Business priority of Product Backlog items and Dependencies are examples of factors that can influence the order of items in the Product Backlog. Team size and age of the Product Backlog items are not generally considered direct influencers of the order in which Product Backlog items are addressed, although they may influence the capacity of the team and the relevance of the items, respectively.",
  },
  {
    id: "fd1b488d-447a-4ab8-b6bc-25b598789cd2",
    chapter: 6,
    question:
      "Which of the following is a recommended approach for reducing technical debt?\n(choose the best answer)",
    options: [
      "Having an appropriate Definition of Done",
      "Allocating more budget for the project",
      "Increasing the number of daily stand-up meetings",
      "Extending the Sprint duration",
    ],
    correctAnswer: 0,
    explanation:
      'Technical debt is the backlog of work required to resolve issues and deficiencies in software development. Reducing technical debt involves enhancing the Definition of Done. By setting explicit and thorough criteria for determining when a Product Backlog item is considered "Done," the Developer can guarantee adherence to quality measures and technical standards throughout the Sprint. This proactive approach minimizes the accrual of technical debt and facilitates the production of superior increments.',
  },
  {
    id: "a331b156-7b90-4565-8a35-6f0c87473c01",
    chapter: 6,
    question:
      "What should the Developers do for each Product Backlog item selected for a Sprint?\n(choose the best answer)",
    options: [
      "Whatever is possible",
      "Everything except for specialized testing such as security or performance",
      "Everything specified by the Scrum Master",
      "Whatever was informed by the Product Owner in light of the Definition of Done",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, the work that Developers must do on a Product Backlog item selected for a Sprint should be based on what the Product Owner has informed will be done for every item. This means that the Developers should work on the item to meet the agreed-upon criteria outlined in the Definition of Done. The Definition of Done defines the required quality and completeness of the work, including analysis, design, programming, testing, and documentation.",
  },
  {
    id: "8d584395-cfc7-490d-b3db-5b9a97ea048d",
    chapter: 6,
    question:
      "Which type of team is empowered to make decisions and responsible for determining the best requirements, architectures, and design?\n(choose the best answer)",
    options: [
      "A centralized team",
      "A self-managing team",
      "A specialized team",
      "A hierarchical team",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, a self-managed team is empowered to make decisions and is responsible for determining the best requirements, architectures, and design for the product. Self-managed teams are cross-functional and have the autonomy to collaborate and leverage their diverse skills and perspectives. They are accountable for delivering high-quality increments and continuously improving their processes. Therefore, option B, a self-managed team, is the correct answer.",
  },
  {
    id: "1b532044-f4ec-4abc-83f9-114bfd15635c",
    chapter: 6,
    question:
      "Which of the following tools is mandatory for the Product Owner to use?\n(choose the best answer)",
    options: [
      "User story mapping",
      "Impact mapping",
      "Product roadmapping",
      "Agile project management software",
      "None of the above",
    ],
    correctAnswer: 4,
    explanation:
      "The Scrum Guide does not mandate specific tools for the Product Owner to use. User story mapping, impact mapping, product roadmapping, and agile project management software are all tools that can be useful, but none are required by the Scrum framework itself. The choice of tools is largely determined by the needs of the product, the team, and the wider organization.",
  },
  {
    id: "ef0bff8f-8917-4737-afde-ff60a4b48582",
    chapter: 6,
    question:
      "Who has the responsibility for determining how the work is accomplished by the Developers and ensuring they meet the Sprint Goal?\n(choose the best answer)",
    options: [
      "The Product Owner",
      "The Scrum Master",
      "The Developers",
      "The Project Manager",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the responsibility for determining how the Developers complete the forecasted Product Backlog items and meet the Sprint Goal lies with the Developers themselves. They are self-managing and cross-functional, meaning they collectively decide how to accomplish the work best. The Scrum Master facilitates and coaches the team, but the decision-making authority lies within the Developers.",
  },
  {
    id: "390ea09c-0ee6-4904-b09a-8acb446a4d18",
    chapter: 6,
    question:
      "What is the accountability of the Product Owner during the Sprint Retrospective?\n(choose the best answer)",
    options: [
      "Facilitating the retrospective meeting.",
      "Providing feedback on the Developer's performance.",
      "Participating as an active member of the Scrum Team.",
      "Determining the next steps for the Sprint Backlog.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, the Product Owner is expected to participate as a member of the Scrum Team during the Sprint Retrospective. While the focus of the retrospective is primarily on the Developer and their processes, the Product Owner's presence allows for open communication and collaboration within the Scrum Team.",
  },
  {
    id: "ffee42f8-5312-4447-b822-15819f13e31d",
    chapter: 6,
    question:
      "What is the recommended action for the Product Owner between the end of the current Sprint and the start of the next Sprint?\n(choose the best answer)",
    options: [
      "Refine the Product Backlog.",
      "Collaborate with the Developer on testing the current Sprint's Increment.",
      "Conduct a review of the project's progress with stakeholders.",
      "There is no gap. A new Sprint starts immediately after the conclusion of the previous Sprint.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, there is no activity gap between Sprints. As soon as one Sprint concludes, the next Sprint starts immediately. This ensures a continuous flow of work and allows the Scrum Team to maintain a sustainable pace.",
  },
  {
    id: "f5babe24-41db-44f2-a3c3-e985f9864fd8",
    chapter: 6,
    question:
      "Is it mandatory for the Product Owner to be present at the Daily Scrum?\n(choose the best answer)",
    options: [
      "Yes, the Product Owner must attend and actively participate.",
      "No, the Product Owner is not required to be present.",
      "Yes, the Product Owner needs to provide updates on the Product Backlog.",
      "No, the Product Owner can only attend if invited by the Scrum Master.",
    ],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, the Daily Scrum is an event for the Developer. The Product Owner and the Scrum Master may attend the Daily Scrum as observers, but they are not required to be there. The purpose of the Daily Scrum is for the Developer to synchronize their activities and plan for the next 24 hours.",
  },
  {
    id: "f833509c-f128-477f-b239-d5abb1c7f8e0",
    chapter: 6,
    question:
      "Which of the following activities is not timeboxed in Scrum?\n(choose the best answer)",
    options: [
      "Sprint Retrospective.",
      "Daily Scrum.",
      "Sprint Planning.",
      "roduct Backlog Refinement.",
      "Sprint Review.",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Scrum Guide, Scrum defines timeboxes for various activities to provide structure and ensure regular inspection and adaptation. The Daily Scrum, Sprint Planning, and Sprint Review all have defined timeboxes. However, Scrum does not define a specific timebox for refining the Product Backlog. Refinement is an ongoing activity that occurs throughout the Sprint to ensure that Product Backlog items are well-prepared and ready for selection in future Sprints.",
  },
  {
    id: "a2866d8b-7f8b-43e9-91ee-1d6ab85dc575",
    chapter: 6,
    question:
      "Which of the following is NOT a mandatory element for applying Scrum?\n(choose the best two answers)",
    options: [
      "Definition of Done.",
      "Daily Scrum.",
      "Release Plan.",
      "User Stories.",
    ],
    correctAnswer: 2,
    correctAnswers: [2, 3],
    isMultiSelect: true,
    explanation:
      "In the Scrum framework, both the Definition of Done and the Daily Scrum are mandatory elements. The Definition of Done provides a shared understanding of what it means for work to be complete, and the Daily Scrum is a daily meeting to plan work for the next 24 hours. On the other hand, a Release Plan and User Stories are not mandatory. Release planning is a useful practice in many contexts, and user stories are a popular way to express Product Backlog items, but neither are specifically required by Scrum. The Scrum Guide does not prescribe specific artifact formats or planning methods.",
  },
  {
    id: "e7dfc63f-efb4-43b0-8414-eb83b796b8cc",
    chapter: 6,
    question:
      "True or False: The Sprint Review is an event where the Scrum Team inspects the outcome of the Sprint and determines future adaptation in collaboration with stakeholders.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "It’s True. The Sprint Review is indeed an event where the Scrum Team inspects the outcome of the Sprint, collaborates with stakeholders, and identifies necessary adaptations for the future. The goal is to ensure the product is evolving in a way that maximizes value and is aligned with stakeholder needs and expectations.",
  },
  {
    id: "3a1b2e80-442f-4be1-a749-53c739323039",
    chapter: 6,
    question:
      "Which of the following statements best describes the accountability of the Product Owner in Scrum?\n(choose the best answer)",
    options: [
      "The Product Owner acts as the project manager.",
      "The Product Owner is external to the Scrum Team and represents the customers’ needs.",
      "The Product Owner defines technical requirements and implementation details for the Developers.",
      "The Product Owner maximizes the value of the product by ordering the Product Backlog and providing clear instructions to the Scrum Team.",
    ],
    correctAnswer: 3,
    explanation:
      "In Scrum, the Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. They do this by maintaining and ordering the Product Backlog, clearly expressing Product Backlog items, and ensuring that the Scrum Team understands items in the Product Backlog to the level needed. The Product Owner is not typically involved in defining technical requirements and implementation details; that is the role of the Developers. The Product Owner is also part of the Scrum Team, not external to it. And, the role of a traditional project manager is not a role defined in Scrum, and the responsibilities are distributed among the Scrum Team members.",
  },
  {
    id: "aa6e737a-0d9d-41c8-822c-e7cf0c7c6ed0",
    chapter: 6,
    question:
      "When should a new Increment be available in Scrum?\n(choose the best answer)",
    options: [
      "When the Developer completes their tasks.",
      "After obtaining approval from stakeholders.",
      "By the end of each Sprint.",
      "When the Product Owner decides it is ready for release.",
      "Once all bugs and issues are resolved.",
    ],
    correctAnswer: 2,
    explanation:
      "According to the Scrum Guide, a new Increment must be available by the end of each Sprint. The Increment is a sum of all the Product Backlog items completed during the Sprint, along with the increments of all previous Sprints. This promotes transparency and provides an opportunity for stakeholders to inspect and adapt the product.",
  },
  {
    id: "6db18c3e-48ad-435e-b100-a3f7e48ecc09",
    chapter: 6,
    question:
      "True or False: The Sprint Goal guides the team toward an overarching target for the Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Sprint Goal is a commitment by the Scrum Team that provides a shared objective for the Sprint. It is a succinct expression of the purpose and desired outcome of the Sprint, created collaboratively by the Developers and the Product Owner during Sprint Planning. The Sprint Goal offers guidance to the Developers on why the Increment is valuable and what needs to be achieved. The Developers can use this overarching target to make decisions about how to do their work and to align their efforts throughout the Sprint, ensuring they are all working toward the same outcome.",
  },
  {
    id: "60e26fa2-c92a-4564-8aa5-e27ecdc7a554",
    chapter: 6,
    question:
      "How do you know that a Scrum Team is self-managing? \n(choose the best answer)",
    options: [
      "Their team is productive.",
      "The Scrum Team internally decides who does what, when, and how.",
      "The Scrum Team has all the skills necessary to create value each Sprint.",
      "The Scrum Master allocates tasks to the Developers.",
    ],
    correctAnswer: 1,
    explanation:
      "A self-managing Scrum Team internally decides who does what, when, and how. This autonomy allows them to organize their work in the most efficient and effective way based on their collective knowledge and skills.",
  },
  {
    id: "f9625dd3-9525-4606-b322-0e5f957a1573",
    chapter: 6,
    question:
      "Why is it important for the Developers to conform with the Definition of Done? \n(choose the best answer)",
    options: [
      "To be able to track the team’s progress and report it to the stakeholders.",
      "To promote transparency regarding the work that has been done.",
      "To know what the team will work on next.",
      "To have control over what has been done and what remains to be done.",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide defines the \"Definition of Done\" as a formal description of the Increment's state when meeting product quality measures. The Product Owner is responsible for maximizing product value from the Scrum Team's work. To achieve transparency and a usable, potentially releasable Increment, the Product Owner expects Developers to adhere to the Definition of Done. The other options are incorrect, as they suggest the Product Owner uses the Definition of Done for different purposes, contrary to Scrum values of respect, openness, and empiricism.",
  },
  {
    id: "9ffc4a0b-127e-4ce8-ad67-60d2b23025ba",
    chapter: 6,
    question:
      "A Scrum Team is having a hard time deciding which practices and procedures to apply. What should the Scrum Master do? \n(choose the best two answers)",
    options: [
      "Use coaching techniques.",
      "Tell them which practices work best for them.",
      "Involve the whole team in the decision-making process.",
      "Ask the more senior members to decide.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 2],
    isMultiSelect: true,
    explanation:
      "In situations where a Scrum Team is having difficulty deciding which practices and procedures to apply, the Scrum Master should employ coaching techniques and involve the whole team in the decision-making process. The Scrum Master's role as a leader who serves allows them to guide the team, using questions and discussions to help identify suitable practices for their specific context. Moreover, by including the entire team in these decisions, the Scrum Master ensures the team maintains its self-managing nature, with everyone's perspective being considered, promoting ownership and fostering effective teamwork.",
  },
  {
    id: "ffb8e6c6-030c-4f3b-93aa-a176cad08ca8",
    chapter: 6,
    question:
      "True or False: A Product Owner must help resolve impediments by adding them to the Product Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The Product Backlog is intended for Product Backlog items that capture features, functionality, and requirements that deliver value to stakeholders. Impediments, on the other hand, are issues that hinder the team's progress towards these goals. Rather than being placed in the Product Backlog, impediments should be addressed and resolved as promptly as possible. The Scrum Master typically takes the lead in facilitating the removal of these obstacles. The Product Owner's focus should remain on maximizing the value of the work that the Developers do.",
  },
  {
    id: "5a8aabbe-a425-47d7-bc2e-6e19d96e7a29",
    chapter: 6,
    question:
      "True or False: A Scrum Team can include an undone Product Backlog item in the Increment if they document what is left to do.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      'The definition of an Increment in Scrum is that it must be "Done." That means it must meet the Definition of Done established by the Scrum Team. If a Product Backlog item is "undone" or incomplete according to this definition, it cannot be included in the Increment, regardless of whether what\'s left to do is documented. This is to ensure transparency about the completeness and releasability of work, and to maintain quality and value of the Increment.',
  },
  {
    id: "165c4ae5-2fc1-4e44-aedb-cf8f8acb8a24",
    chapter: 6,
    question:
      "True or False: If the Developers and Product Owner cannot agree on the Product Backlog items to be developed, Sprint Planning should be canceled and the Sprint should be delayed.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "If there's disagreement between the Product Owner and Developers about what to include in the Sprint, it should be resolved through discussion and collaboration, without delaying the Sprint. The Scrum Master, acting as a facilitator, can help ensure this discussion occurs in a constructive and respectful manner. The Sprint Planning must be concluded and the Scrum Team can discuss more about the product during the Sprint while developing new business functionality. Further, they should discuss during the next Sprint Retrospective the causes for the issue and how to prevent it from happening again.",
  },
  {
    id: "e4571ff4-89b8-46ff-a11e-ab20e7d87d78",
    chapter: 6,
    question:
      "True or False: When multiple Scrum Teams work from the same Product Backlog, the Developers pull work through discussions with the Product Owner.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "When multiple Scrum Teams are working from the same Product Backlog, collaboration and alignment become even more crucial. The Developers from each team work with the Product Owner to understand and select the Product Backlog items that they will focus on during a Sprint. This is a part of the overall effort to ensure a smooth flow of value delivery and to align the teams with the shared product goal. The Product Owner, with the input from all the Developers, is accountable for maximizing the value of the product resulting from the work of all the Scrum Teams.",
  },
  {
    id: "27b88531-883c-49bb-9e4e-0b8d8475d404",
    chapter: 6,
    question:
      "What is the main difference between a Scrum Master and a traditional Project Manager?",
    options: [
      "A Scrum Master manages the product, while a Project Manager manages the project",
      "A Scrum Master establishes Scrum, while a Project Manager plans and controls the project",
      "A Scrum Master leads the team, while a Project Manager coordinates the team",
      "A Scrum Master facilitates the events, while a Project Manager assigns the tasks",
    ],
    correctAnswer: 1,
    explanation:
      "The main difference between a Scrum Master and a traditional Project Manager is that a Scrum Master establishes Scrum, while a Project Manager plans and controls the project, as stated in the Scrum Guide¹². The other options are not correct because they either confuse or contradict the roles and responsibilities of a Scrum Master and a Project Manager.",
  },
  {
    id: "a8142fb9-050b-4033-b66e-bced8deffb65",
    chapter: 6,
    question:
      "When is it most appropriate for a Scrum Team to change the Sprint Goal? \n(choose the best answer)",
    options: [
      "During Daily Scrum.",
      "The Sprint Goal cannot be changed.",
      "During Sprint Review.",
      "When there is a new feature request from a stakeholder.",
    ],
    correctAnswer: 1,
    explanation:
      "The Sprint Goal, once established during the Sprint Planning, provides guidance to the Developers on why it is building the Increment and aligns them throughout the Sprint. The Sprint Goal should remain unchanged to ensure stability and focus.",
  },
  {
    id: "ec1405ae-0dbe-41a9-9a75-79fecc8cda97",
    chapter: 6,
    question:
      "What ensures that an Increment is usable and meets the quality standards for the product?\n(choose the best answer)",
    options: [
      "Following the Definition of Done for all work done in a Sprint.",
      "Tracking Sprint tasks accurately in the electronic tracking tool.",
      'Accounting for and estimating all unfinished work to be done in a "hardening" Sprint.',
      "Communicating Sprint progress to the stakeholders daily.",
    ],
    correctAnswer: 0,
    explanation:
      'The Definition of Done ensures that an Increment is usable and meets the quality standards for the product, as stated in the Scrum Guide. The other options are not correct because they either do not relate to the usability or quality of the Increment, or they imply practices that are not consistent with Scrum, such as "hardening" Sprints or daily reporting to stakeholders.',
  },
  {
    id: "928b747b-13d2-4912-9d08-17e334d0ca98",
    chapter: 6,
    question:
      "You are the Scrum Master for four Scrum Teams working from the same Product Backlog. Some of the Developers tell you that work planned for the next two Sprints will require full-time involvement from a specialist who is not part of the teams.  \n\nWhat should the Scrum Master take into account in this situation?\n(choose the best two answers)",
    options: [
      "Keeping the Developers busy until then.",
      "The advantage of Developers finding a solution by themselves.",
      "The capability of the Scrum Teams to produce integrated Increments.",
      "The need to increase productivity.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      'In a situation where specialist involvement is required, the Scrum Master should consider the potential benefits of the Developers finding a solution by themselves. It could serve as an opportunity to expand the skill set of the Developers and increase the cross-functionality of the team, both of which are desirable aspects in Scrum.\n\nAlso, the Scrum Master should consider the capability of the Scrum Teams to produce integrated Increments. If the specialist is necessary to deliver a "Done" Increment, then this may suggest a lack of skills within the team and prompt a re-evaluation of its composition or a need for upskilling. Remember, the goal of Scrum is not just to increase productivity, but to deliver a valuable, usable increment every Sprint.',
  },
  {
    id: "d78b9d9e-d090-43b8-a179-8dd00c7ae4ff",
    chapter: 6,
    question:
      "What are four Scrum events that enable inspection and adaptation?\n(choose the best answer)",
    options: [
      "Sprint Planning, Daily Scrum, Sprint Retrospective, and Release Planning.",
      "Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
      "Daily Scrum, Refinement Meeting, Sprint Review, and Sprint Retrospective.",
      "Sprint Planning, Refinement Meeting, Sprint Review, and Release Planning.",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide states that Scrum is based on empiricism, which means that knowledge comes from experience and making decisions based on what is observed. Scrum uses an iterative, incremental approach to optimize predictability and control risk. Three pillars support every implementation of empirical process control: transparency, inspection, and adaptation. Scrum defines four formal events for inspection and adaptation, namely Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
  },
  {
    id: "ff60782e-f54c-4516-89cf-bc2b11f3a119",
    chapter: 6,
    question:
      "What are the three elements of the Sprint Backlog that are defined during Sprint Planning?\n(choose the best answer)",
    options: [
      "The Sprint Goal, the selected Product Backlog items, and the Definition of Done.",
      "The Sprint Goal, the selected Product Backlog items, and the plan for delivering the Increment.",
      "The Sprint Goal, the plan for delivering the Increment, and the time-box for the Sprint.",
      "The Product Backlog items, the plan for delivering the Increment, and the Definition of Done.",
    ],
    correctAnswer: 1,
    explanation:
      "The Scrum Guide states that the Sprint Backlog consists of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), and an actionable plan for delivering the Increment (how). The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to do during the Sprint, and it belongs only to the Developers.",
  },
  {
    id: "3f9f996c-9a02-4c47-b9b5-2a24730689bc",
    chapter: 6,
    question:
      "True or False: The Developers manage the stakeholders for the Sprint Review.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "Typically, the Product Owner is accountable for engaging stakeholders and ensuring they attend the Sprint Review, not the Developers. The Sprint Review is an opportunity for stakeholders to provide feedback on the work completed during the sprint and to discuss the Product Backlog. While the Developers certainly participate in this event, and share the work they've done, they do not manage the stakeholders for it.",
  },
  {
    id: "2b6f4634-7641-478c-9c93-2c2c03d206db",
    chapter: 6,
    question:
      "True or False: A high-performance Scrum Team guarantees that each Increment is done by performing a Release Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "According to the Scrum Guide, a Release Sprint is not a concept in Scrum. Each Sprint must result in a potentially releasable Increment that meets the Definition of Done. A high-performance Scrum Team does not need a separate Sprint to finalize or release their work, as they deliver value continuously and frequently.",
  },
  {
    id: "331272db-66c5-408c-8bdc-d82cfa975ef8",
    chapter: 6,
    question:
      "True or False: The Product Owner is responsible for estimating the Product Backlog items.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "The responsibility of estimating the Product Backlog items primarily rests with the Developers, not the Product Owner. The Developers possess the necessary technical knowledge and understanding of the work involved to provide reliable estimates. The Product Owner clarifies the details and the value of the Product Backlog items, but the Developers are responsible for the estimates, which can influence the selection and ordering of items for a Sprint. This collaboration ensures a realistic understanding of what can be accomplished in a given Sprint and promotes transparency and mutual commitment among all members of the Scrum Team.",
  },
  {
    id: "c75ec625-963f-41be-8939-d29378770ff2",
    chapter: 6,
    question:
      "What factor should be the primary driver for determining the Sprint length?\n(select the best answer)",
    options: [
      "The need for the team to inspect and adapt based on delivering work and getting feedback.",
      "The organization's budget cycle.",
      "The frequency at which stakeholders can be engaged.",
      "The organization has standardized similar length Sprints.",
    ],
    correctAnswer: 0,
    explanation:
      'The primary factor for determining the Sprint length is "The need for the team to inspect and adapt based on delivering work and getting feedback." While other factors such as stakeholder engagement and organizational practices may influence the decision, Scrum\'s heart lies in its inspect and adapt ethos. It requires teams to continuously evaluate their work and adjust based on that feedback, leading to the delivery of higher value outcomes. Hence, the Sprint length should facilitate this iterative learning and improvement cycle.',
  },
  {
    id: "ae171326-bc65-49e8-b1ec-d389951b431d",
    chapter: 6,
    question:
      "True or False: The Developers can change the content and order of the Sprint Backlog throughout the Sprint.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Sprint Backlog is a plan for achieving the Sprint Goal, comprising selected Product Backlog items and a delivery plan. It's a highly visible real-time picture of work planned for the Sprint, updated throughout as Developers learn more. The Sprint Backlog emerges as Developers work and learn, with new work added, estimated remaining work updated, and unnecessary elements removed. Only Developers can change its content and order, and new work should be added promptly when identified, not by the Product Owner, Scrum Master, or during the Daily Scrum.",
  },
  {
    id: "2fd75cc2-35be-4f67-80a1-0517385752db",
    chapter: 6,
    question:
      "True or False: The Developers share accountability for all items in the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Developers in the Scrum Team are responsible for creating a usable Increment each Sprint, with diverse skills and collective accountability. They collaborate, support each other, and work as one team, regardless of individual titles or roles. The Sprint Backlog is a plan for achieving the Sprint Goal, comprising selected Product Backlog items and a delivery plan. All estimates and selection of items are their responsibility. There is no individual accountability for items; it is a collective accountability of all Developers in the Scrum Team.",
  },
  {
    id: "e923554c-52af-4ad4-9af2-c8e32ee78613",
    chapter: 6,
    question:
      "At the fifth Sprint Review, the stakeholders are unhappy and frustrated. They have realized that the product or system being developed will not meet their expectations and will exceed their budget. What factors probably caused this?\n(select the best two answers)",
    options: [
      "The Product Owner has not been communicating the status of the project to the stakeholders.",
      "The stakeholders were not involved in ordering Product Backlog items.",
      "The Project Management Office has not been providing adequate guidance.",
      "The stakeholders have not been using the Sprint Reviews to inspect and provide feedback.",
    ],
    correctAnswer: 0,
    correctAnswers: [0, 3],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, the Product Owner is responsible for engaging the stakeholders and ensuring that their needs are reflected in the Product Backlog. The Sprint Review is an opportunity for the stakeholders to inspect the product Increment and give feedback to the Scrum Team. The other options are not relevant, as they are either outside the scope of Scrum or not related to stakeholder satisfaction.",
  },
  {
    id: "969a0aef-5cd8-43c1-a11d-8e4e880bad1a",
    chapter: 6,
    question:
      "True or False: The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Definition of Done in Scrum is a formal description of the Increment's quality measures. It ensures transparency and shared understanding of completed work. Items not meeting the Definition of Done cannot be released or presented at the Sprint Review; they return to the Product Backlog. The Definition of Done varies per Scrum Team and evolves as the team matures, leading to higher quality, increased value, and reduced technical debt in each Increment. Improving the Definition of Done is an expected outcome as the Scrum Team matures.",
  },
  {
    id: "efd4c357-d286-45f3-ad44-bdd46e615985",
    chapter: 6,
    question:
      "True or False: A burndown chart is a graphical representation of work left to do versus time.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Scrum Guide acknowledges the usefulness of projective practices like burn-downs, burn-ups, and cumulative flows for forecasting progress. However, these should not replace the importance of empiricism. In complex environments, only past events can inform future decisions. A burndown chart is a simple graphical representation of work remaining versus time. It shows progress but doesn't track individual productivity, business value, or cost, as these metrics don't align with Scrum's empirical nature and value of collaboration and self-organization.",
  },
  {
    id: "2a504ba9-fbe0-44e7-972b-e7d8f3511355",
    chapter: 6,
    question:
      "Commitment is vital to realize the value of Scrum. What behaviors show the commitment of Scrum Team members?\n(select the best two answers)",
    options: [
      "Always complete all the selected Product Backlog items for the Sprint.",
      "Support your fellow Scrum Team members.",
      "Do your highest quality work.",
      "Work overtime.",
    ],
    correctAnswer: 1,
    correctAnswers: [1, 2],
    isMultiSelect: true,
    explanation:
      "According to the Scrum Guide, commitment is one of the Scrum values, and it means that people have a sense of responsibility and focus on creating value. Commitment is demonstrated by supporting each other as a team and doing the best work possible. The other options are not indicators of commitment, as they are either unrealistic expectations or unsustainable practices.",
  },
  {
    id: "636d3f7d-9a41-4d8d-ba3b-20d0a956919d",
    chapter: 6,
    question:
      "When Developers are facing difficulties delivering an Increment because they do not understand a non-functional requirement, what should they do?\n(select the best answer)",
    options: [
      "Develop what they can and ask for help during Sprint Review.",
      "Postpone the work to the Release Sprint.",
      "Delegate the work to external teams.",
      "Work with the Product Owner to determine what is feasible and acceptable.",
    ],
    correctAnswer: 3,
    explanation:
      'When Developers encounter difficulties due to a misunderstanding of a non-functional requirement, they should opt for "Work with the Product Owner to determine what is feasible and acceptable." This collaboration promotes clearer understanding and aligns both the Developers and the Product Owner on what needs to be delivered, ensuring that the Increment meets the business requirements and delivers value to stakeholders.',
  },
  {
    id: "4aaca63f-f4a8-4e25-a5b4-b36b989ca097",
    chapter: 6,
    question:
      "When should the Product Owner participate in the Daily Scrum?\n(select the best answer)",
    options: [
      "Whenever the Developers need clarification regarding Product Backlog items.",
      "Whenever the Product Owner is working on items on the Sprint Backlog: however, they participate as a Developer.",
      "Whenever the Product Owner has updates regarding the marketplace.",
      "Whenever the Scrum Master tells the Product Owner to be there.",
    ],
    correctAnswer: 1,
    explanation:
      'The Product Owner should participate in the Daily Scrum "Whenever the Product Owner is working on items on the Sprint Backlog: however, they participate as a Developer." The Daily Scrum is an event primarily for the Developers to inspect progress towards the Sprint Goal and adapt the Sprint Backlog as necessary. The Product Owner may attend if they are actively contributing to items in the Sprint Backlog, but they participate as a Developer in this context.',
  },
  {
    id: "d0d92dda-1d4e-4a77-a525-325fd3dd477d",
    chapter: 6,
    question:
      "True or False: The Sprint Goal is crafted by the Scrum Team during the Sprint Planning event.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Sprint Goal is a single objective for the Sprint, providing flexibility in achieving it. It fosters coherence and team focus. Defined during Sprint Planning, the whole Scrum Team collaborates to craft it, expressing the Sprint's purpose. The Sprint Goal is mandatory in Scrum, guiding the team, and should be finalized before Sprint Planning ends, based on Product Backlog selection and ordering.",
  },
  {
    id: "85a12c74-8e4f-4a46-9e9c-e90e2f7c514b",
    chapter: 6,
    question:
      "True or False: The Developers are accountable for creating and managing the Sprint Backlog.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 0,
    explanation:
      "The Sprint Backlog is a plan to achieve the Sprint Goal, comprising selected Product Backlog items and a delivery plan. It's a visible, real-time representation of work planned for the Sprint. The Sprint Planning event involves the entire Scrum Team collaborating to define a Sprint Goal that aligns with the Product Backlog. The Developers create and manage the Sprint Backlog, selecting items they can deliver as a valuable Increment and defining the work needed for a \"Done\" Increment. The plan can be adjusted during the Sprint as more is learned. Hence, the Sprint Backlog is best described as the Developers' plan for the Sprint, resulting from the Sprint Planning event.",
  },
  {
    id: "171cf716-0186-420c-a777-f79dea4a98bb",
    chapter: 6,
    question:
      "True or False: If the Developers realize they have selected too much work to finish in the Sprint, they should reduce the Definition of Done and get all of the Product Backlog items done by the new definition.",
    options: ["TRUE", "FALSE"],
    correctAnswer: 1,
    explanation:
      "If the Developers realize they have taken on too much work for a Sprint, reducing the Definition of Done is not the appropriate response. The Definition of Done is a set of shared understandings about what it means for work to be complete. It should be a standard that ensures quality and is not something that should be changed to accommodate an overbooked Sprint. Instead, the Developers should work with the Product Owner to negotiate which items in the Sprint Backlog can be removed or postponed, ensuring that the most valuable work remains. It is key that the Scrum Team communicates openly and regularly about progress to make these adjustments as necessary.",
  },
];

export const allQuestions: QuestionPSM1[] = [
  ...questionsPracticeTest1,
  ...questionsPracticeTest2,
  ...questionsPracticeTest3,
  ...questionsPracticeTest4,
  ...questionsPracticeTest5,
  ...questionsPracticeTest6,
];

// master export used by the rest of the application
export const questionsPSM1: QuestionPSM1[] = allQuestions;
