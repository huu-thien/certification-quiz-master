// Flashcards for PSM1 course
// Grouped theo các phần chính của Scrum Guide (1‑6), không theo từng
// practice test. Mỗi phần là một cụm khái niệm trọng tâm để ôn lý thuyết.
import type { Flashcard } from "../../../types";

// Các phần flashcard PSM1 dựa trên Scrum Guide
// (chỉ dùng cho flashcard, không ảnh hưởng tới practice test 1‑6).
export const PSM1_FLASHCARD_SECTIONS: Record<number, string> = {
  1: "Scrum theory & foundations",
  2: "Scrum Team & accountabilities",
  3: "Scrum events & timeboxing",
  4: "Artifacts & commitments",
  5: "Áp dụng Scrum trong thực tế",
  6: "Mindset khi thi PSM I",
};

export const psm1Flashcards: Flashcard[] = [
  // Practice Test 1 – Scrum foundations & empiricism
  {
    id: "psm1-c1-01",
    chapter: 1,
    term: "Empiricism in Scrum",
    definition:
      "Scrum is founded on empiricism, which means decisions are made based on what is known. Empiricism relies on transparency, inspection, and adaptation to manage risk and optimize value delivery.",
  },
  {
    id: "psm1-c1-02",
    chapter: 1,
    term: "Transparency",
    definition:
      "Transparency means that significant aspects of the process and product must be visible to those responsible for the outcome. Artifacts should be presented with a common standard so observers share a common understanding.",
  },
  {
    id: "psm1-c1-03",
    chapter: 1,
    term: "Inspection",
    definition:
      "Inspection is the frequent examination of Scrum artifacts and progress toward a Sprint Goal to detect undesirable variances. It should not be so frequent that it becomes wasteful, and is most effective when performed at the point of work.",
  },
  {
    id: "psm1-c1-04",
    chapter: 1,
    term: "Adaptation",
    definition:
      "Adaptation is the adjustment of processes, scope, or work when inspection reveals that something is outside acceptable limits. A Scrum Team adapts as soon as possible to minimize further deviation.",
  },
  {
    id: "psm1-c1-05",
    chapter: 1,
    term: "Scrum Team size",
    definition:
      "A Scrum Team is typically 10 or fewer people, including the Scrum Master, Product Owner, and Developers. The team is small enough to remain nimble and large enough to complete significant work in a Sprint.",
  },
  {
    id: "psm1-c1-06",
    chapter: 1,
    term: "Accountabilities in Scrum",
    definition:
      "There are three accountabilities within a Scrum Team: the Scrum Master, the Product Owner, and the Developers. Each accountability focuses on different aspects of maximizing the value of the product.",
  },
  {
    id: "psm1-c1-07",
    chapter: 1,
    term: "Self‑managing teams",
    definition:
      "Scrum Teams are self‑managing, meaning they internally decide who does what, when, and how. No one outside the team assigns tasks or directs how the work is done.",
  },
  {
    id: "psm1-c1-08",
    chapter: 1,
    term: "Cross‑functional teams",
    definition:
      "Scrum Developers are cross‑functional, having all the skills necessary to create a usable Increment each Sprint without depending on people outside the team.",
  },

  // Practice Test 2 – Scrum accountabilities
  {
    id: "psm1-c2-01",
    chapter: 2,
    term: "Product Owner accountability",
    definition:
      "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. They manage the Product Backlog and ensure it is transparent, ordered, and understood.",
  },
  {
    id: "psm1-c2-02",
    chapter: 2,
    term: "Scrum Master accountability",
    definition:
      "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide and for the Scrum Team's effectiveness. They serve the team and the organization as a leader who coaches, facilitates, and removes impediments.",
  },
  {
    id: "psm1-c2-03",
    chapter: 2,
    term: "Developers accountability",
    definition:
      "Developers are the people in the Scrum Team who are committed to creating any aspect of a usable Increment each Sprint. They are accountable for creating a plan for the Sprint, ensuring quality, and adapting their plan daily.",
  },
  {
    id: "psm1-c2-04",
    chapter: 2,
    term: "Single Product Owner",
    definition:
      "There is one Product Owner per product. Multiple individuals cannot share the Product Owner accountability, although they may work as a committee to support the Product Owner's decisions.",
  },
  {
    id: "psm1-c2-05",
    chapter: 2,
    term: "Stakeholder collaboration",
    definition:
      "The Product Owner collaborates with stakeholders to understand needs and opportunities, but remains the single person accountable for Product Backlog content and ordering.",
  },
  {
    id: "psm1-c2-06",
    chapter: 2,
    term: "Scrum Master serving the Product Owner",
    definition:
      "The Scrum Master helps the Product Owner with effective Product Backlog management, facilitating stakeholder collaboration, and understanding empirical product planning in complex environments.",
  },
  {
    id: "psm1-c2-07",
    chapter: 2,
    term: "Scrum Master serving the Developers",
    definition:
      "The Scrum Master coaches the Developers in self‑management, cross‑functionality, and creating high‑value Increments that meet the Definition of Done.",
  },
  {
    id: "psm1-c2-08",
    chapter: 2,
    term: "Scrum Master serving the organization",
    definition:
      "The Scrum Master leads, trains, and coaches the organization in its Scrum adoption, helping remove barriers between stakeholders and Scrum Teams and causing change that increases the productivity of Scrum Teams.",
  },

  // Practice Test 3 – Events and timeboxing
  {
    id: "psm1-c3-01",
    chapter: 3,
    term: "Sprint timebox",
    definition:
      "A Sprint is a fixed‑length event of one month or less to create consistency. A new Sprint starts immediately after the previous one, and the duration is consistent to support learning and predictability.",
  },
  {
    id: "psm1-c3-02",
    chapter: 3,
    term: "Sprint Planning purpose",
    definition:
      "Sprint Planning answers three key questions: Why is this Sprint valuable? What can be done in this Sprint? How will the chosen work be done?",
  },
  {
    id: "psm1-c3-03",
    chapter: 3,
    term: "Daily Scrum goal",
    definition:
      "The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work.",
  },
  {
    id: "psm1-c3-04",
    chapter: 3,
    term: "Sprint Review purpose",
    definition:
      "The Sprint Review is held to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and discusses what to do next.",
  },
  {
    id: "psm1-c3-05",
    chapter: 3,
    term: "Sprint Retrospective purpose",
    definition:
      "The Sprint Retrospective is an opportunity for the Scrum Team to inspect how the last Sprint went with respect to individuals, interactions, processes, tools, and Definition of Done, and then plan improvements.",
  },
  {
    id: "psm1-c3-06",
    chapter: 3,
    term: "Timeboxing of events",
    definition:
      "All Scrum events are timeboxed to provide focus and limit waste. When the timebox expires, the event should end regardless of whether the planned work is complete.",
  },
  {
    id: "psm1-c3-07",
    chapter: 3,
    term: "Cancelling a Sprint",
    definition:
      "Only the Product Owner has the authority to cancel a Sprint, and they may do so when the Sprint Goal becomes obsolete. Cancelling Sprints is rare and disruptive.",
  },
  {
    id: "psm1-c3-08",
    chapter: 3,
    term: "Sprint Goal",
    definition:
      "The Sprint Goal is a single objective for the Sprint, providing focus and flexibility. It is created during Sprint Planning and is part of the Sprint Backlog.",
  },

  // Practice Test 4 – Artifacts & commitments
  {
    id: "psm1-c4-01",
    chapter: 4,
    term: "Product Backlog",
    definition:
      "The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team.",
  },
  {
    id: "psm1-c4-02",
    chapter: 4,
    term: "Product Goal",
    definition:
      "The Product Goal describes a future state of the product that can serve as a target for the Scrum Team. It is the commitment for the Product Backlog.",
  },
  {
    id: "psm1-c4-03",
    chapter: 4,
    term: "Sprint Backlog",
    definition:
      "The Sprint Backlog is composed of the Sprint Goal, the set of Product Backlog items selected for the Sprint, and an actionable plan for delivering the Increment.",
  },
  {
    id: "psm1-c4-04",
    chapter: 4,
    term: "Increment",
    definition:
      "An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and must be usable and meet the Definition of Done.",
  },
  {
    id: "psm1-c4-05",
    chapter: 4,
    term: "Definition of Done",
    definition:
      "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. Work that does not meet the Definition of Done cannot be released or presented as done.",
  },
  {
    id: "psm1-c4-06",
    chapter: 4,
    term: "Commitment to Product Backlog",
    definition:
      "The Product Goal is the commitment associated with the Product Backlog. It provides a long‑term objective and context for ordering Product Backlog items.",
  },
  {
    id: "psm1-c4-07",
    chapter: 4,
    term: "Commitment to Sprint Backlog",
    definition:
      "The Sprint Goal is the commitment associated with the Sprint Backlog. It provides focus and flexibility, guiding the Developers while allowing them to negotiate the scope of work as new learning emerges.",
  },
  {
    id: "psm1-c4-08",
    chapter: 4,
    term: "Commitment to Increment",
    definition:
      "The Definition of Done is the commitment associated with the Increment. It ensures transparency of what 'done' means and provides a shared understanding of quality.",
  },

  // Practice Test 5 – Advanced Scrum concepts
  {
    id: "psm1-c5-01",
    chapter: 5,
    term: "Refinement of the Product Backlog",
    definition:
      "Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller, more precise items. It is an ongoing activity that the Product Owner and Developers collaborate on.",
  },
  {
    id: "psm1-c5-02",
    chapter: 5,
    term: "Forecast for the Sprint",
    definition:
      "During Sprint Planning, the Developers forecast the work they can accomplish in the upcoming Sprint. This forecast is based on past performance, capacity, and upcoming constraints.",
  },
  {
    id: "psm1-c5-03",
    chapter: 5,
    term: "Technical excellence in Scrum",
    definition:
      "Scrum encourages sustainable development and technical excellence. High technical quality makes the product easier to adapt and maintain, supporting frequent inspection and adaptation.",
  },
  {
    id: "psm1-c5-04",
    chapter: 5,
    term: "Scrum in complex environments",
    definition:
      "Scrum is designed for complex environments where requirements are changing and unknown. Empirical process control and small, frequent Increments help manage complexity and risk.",
  },
  {
    id: "psm1-c5-05",
    chapter: 5,
    term: "Done vs. Undone work",
    definition:
      "Only work that meets the Definition of Done is considered part of an Increment. Undone work cannot be shown at the Sprint Review as 'done' and must return to the Product Backlog.",
  },
  {
    id: "psm1-c5-06",
    chapter: 5,
    term: "Scrum and project management",
    definition:
      "Scrum replaces traditional project management roles and artifacts with its own accountabilities and events. Project management responsibilities are distributed across the Scrum Master, Product Owner, and Developers.",
  },
  {
    id: "psm1-c5-07",
    chapter: 5,
    term: "Scaling Scrum",
    definition:
      "When multiple Scrum Teams work on the same product, they share the same Product Goal and Product Backlog. Coordination is achieved through shared events and artifacts rather than new roles.",
  },
  {
    id: "psm1-c5-08",
    chapter: 5,
    term: "Empirical product planning",
    definition:
      "Empirical product planning uses inspection of real Increment results to inform what to build next. Instead of detailed long‑term plans, Scrum relies on frequent adaptation toward the Product Goal.",
  },

  // Practice Test 6 – Exam mindset & tricky areas
  {
    id: "psm1-c6-01",
    chapter: 6,
    term: "Scrum Guide as single source of truth",
    definition:
      "For the PSM I exam, the Scrum Guide is the primary reference. Many questions check for subtle wording differences, so understanding the exact language is critical.",
  },
  {
    id: "psm1-c6-02",
    chapter: 6,
    term: "Responsibilities vs. accountabilities",
    definition:
      "The Scrum Guide uses the word 'accountabilities' rather than 'roles'. Exam questions may test whether you know who is accountable for which outcome in Scrum.",
  },
  {
    id: "psm1-c6-03",
    chapter: 6,
    term: "Misconceptions about the Scrum Master",
    definition:
      "The Scrum Master is not a project manager, people manager, or task assigner. They are a true servant‑leader focused on improving the team's effectiveness and helping the organization adopt Scrum.",
  },
  {
    id: "psm1-c6-04",
    chapter: 6,
    term: "No partial 'Done'",
    definition:
      "In Scrum there is no '90% done'. Work is either done according to the Definition of Done or it is not done and remains in the Product Backlog for future consideration.",
  },
  {
    id: "psm1-c6-05",
    chapter: 6,
    term: "Changing scope during the Sprint",
    definition:
      "The Sprint Goal cannot be changed during the Sprint, but scope may be clarified and renegotiated between the Product Owner and Developers as more is learned.",
  },
  {
    id: "psm1-c6-06",
    chapter: 6,
    term: "Scrum and predictive planning",
    definition:
      "Scrum does not eliminate planning; it replaces large, upfront predictive plans with frequent, lightweight planning at Sprint boundaries and ongoing Product Backlog refinement.",
  },
  {
    id: "psm1-c6-07",
    chapter: 6,
    term: "Use of metrics in Scrum",
    definition:
      "Metrics such as cycle time, throughput, or forecast accuracy can help a Scrum Team inspect and adapt, but they must not be used to control or punish individuals.",
  },
  {
    id: "psm1-c6-08",
    chapter: 6,
    term: "Focus on value, not utilization",
    definition:
      "Scrum emphasizes delivering value and outcomes over keeping people 'busy'. High utilization can hide problems and reduce the team's ability to adapt quickly.",
  },
];
