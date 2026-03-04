// Auto-generated - ISTQB Foundation Flashcards
// Source: mockexamnetwork.com
// Date: 2026-03-04T14:27:03.319Z
// Total flashcards: 142

export interface Flashcard {
  id: string;
  chapter: number;
  term: string;
  definition: string;
}

// Chapter 1: Fundamentals of Testing
export const flashcardsChapter1: Flashcard[] = [
  {
    id: "b625a4b3-e5cd-451c-b1cf-35cd12e4cbc1",
    chapter: 1,
    term: "Purpose of software testing",
    definition: "Software testing helps evaluate product quality and reduce risks associated with defects. It verifies that the system behaves as intended and validates that it meets user and business needs.",
  },
  {
    id: "622197e7-8cf3-4d22-8f9c-590d940f6afa",
    chapter: 1,
    term: "Testing vs. Debugging",
    definition: "Testing identifies the presence of defects, while debugging is the process of locating and correcting those defects. Testing tells you that something is wrong; debugging explains why.",
  },
  {
    id: "b85abe10-1f23-4ed5-a77e-303bd042f7d8",
    chapter: 1,
    term: "Why testing is necessary",
    definition: "Even simple systems can fail in unexpected ways. Testing uncovers defects introduced during development, supports quality assurance, and provides confidence that the software meets requirements.",
  },
  {
    id: "92e0f64e-b62f-4670-b289-10ace37f513f",
    chapter: 1,
    term: "Quality assurance and testing relationship",
    definition: "Testing is a subset of quality assurance. QA defines the framework for achieving quality, and testing provides evidence that those quality goals are met.",
  },
  {
    id: "3141020c-f83c-4d75-8ec9-cbf35e57c1b4",
    chapter: 1,
    term: "What is a defect, error, and failure",
    definition: "An error is a human mistake, a defect is an implementation issue caused by that mistake, and a failure is the visible incorrect behavior when the defect is executed.",
  },
  {
    id: "81fdd7e4-f05e-4332-90cb-de82fc6d61ca",
    chapter: 1,
    term: "Cost of defects over time",
    definition: "The earlier a defect is found, the cheaper it is to fix. A requirement defect caught during reviews may cost minutes to resolve, while the same defect in production can cost thousands.",
  },
  {
    id: "31c43faf-22a8-4508-ae04-0b90bc05015a",
    chapter: 1,
    term: "Seven testing principles",
    definition: "1. Testing shows presence of defects, not their absence.\n2. Exhaustive testing is impossible.\n3. Early testing saves time and money.\n4. Defects cluster together.\n5. Beware of the pesticide paradox.\n6. Testing is context-dependent.\n7. Absence-of-errors fallacy.",
  },
  {
    id: "f4011729-2724-46a6-9f65-ba78331e7afe",
    chapter: 1,
    term: "Principle 1 – Testing shows presence of defects",
    definition: "Testing can reveal that defects exist, but it can never prove that no defects remain. The goal is risk reduction, not perfection.",
  },
  {
    id: "d94642c7-8c17-496f-8f3e-ebca13ec1e00",
    chapter: 1,
    term: "Principle 2 – Exhaustive testing is impossible",
    definition: "Testing all input combinations is rarely feasible. Prioritization and risk-based testing are essential to focus effort where failures would have the greatest impact.",
  },
  {
    id: "d34aa2a4-5989-407f-ad47-4cce666c525b",
    chapter: 1,
    term: "Principle 3 – Early testing saves time and money",
    definition: "Testing should start as early as possible in the SDLC. Static testing such as reviews and walkthroughs can catch defects before code even exists.",
  },
  {
    id: "1d9d406e-ca4d-4a27-a03a-6886de26aec3",
    chapter: 1,
    term: "Principle 4 – Defects cluster together",
    definition: "A small number of modules typically contain most of the defects. Understanding this helps focus regression and exploratory testing on those high-risk areas.",
  },
  {
    id: "876e43b4-ff86-46ef-880d-c9f96952cd8c",
    chapter: 1,
    term: "Principle 5 – Pesticide paradox",
    definition: "Repeating the same tests eventually stops finding new defects. Test cases need regular review and updates to remain effective.",
  },
  {
    id: "bebf7259-f475-4312-a575-5026d155e21d",
    chapter: 1,
    term: "Principle 6 – Testing is context dependent",
    definition: "Different systems require different test approaches. Testing safety-critical software isn’t the same as testing a mobile game; the risk and techniques differ.",
  },
  {
    id: "8181412e-2b78-43bd-ab52-18fef3d66cc2",
    chapter: 1,
    term: "Principle 7 – Absence-of-errors fallacy",
    definition: "A system that passes all tests may still fail to meet user needs. Building the right product matters as much as building the product right.",
  },
  {
    id: "cdad5a24-90e8-4cf9-a6a5-d55a3416af7d",
    chapter: 1,
    term: "The test process overview",
    definition: "The fundamental test process includes planning and control, analysis and design, implementation and execution, evaluating exit criteria, and test closure. These steps repeat across levels.",
  },
  {
    id: "a6a0ef43-2c76-4272-88eb-bb7a41593053",
    chapter: 1,
    term: "Test planning and control",
    definition: "Test planning defines objectives, scope, and approach. Control monitors progress and compares actual results with the plan so adjustments can be made when risks change.",
  },
  {
    id: "fe74f89a-07bd-42d5-9453-1970b8833a48",
    chapter: 1,
    term: "Test analysis and design",
    definition: "During analysis and design, testers identify what to test, derive test conditions from requirements, and create test cases, data, and procedures.",
  },
  {
    id: "b88574b2-f44e-4009-b1d3-eef97f4cc80b",
    chapter: 1,
    term: "Test implementation and execution",
    definition: "This stage involves building test procedures, prioritizing them, and executing the tests. Actual results are compared to expected results, and defects are logged for review.",
  },
  {
    id: "b80418c8-69e9-4224-a33b-5e399c37d0d0",
    chapter: 1,
    term: "Evaluating exit criteria and reporting",
    definition: "Exit criteria determine whether testing has achieved its objectives. Test summary reports describe coverage, results, and residual risks to support release decisions.",
  },
  {
    id: "ce8028cb-994a-4549-a845-9223c4523b7c",
    chapter: 1,
    term: "Test closure activities",
    definition: "After completion, testers collect artifacts, summarize findings, evaluate lessons learned, and archive materials for maintenance and audits.",
  },
  {
    id: "e1507a4b-4fc8-4edf-840d-10f55e237ea5",
    chapter: 1,
    term: "Tester mindset vs. developer mindset",
    definition: "Developers focus on building functionality; testers focus on discovering what could go wrong. Both mindsets complement each other to ensure higher quality outcomes.",
  },
  {
    id: "811eac97-a1dd-4ff5-8c93-9bcae7bdd90b",
    chapter: 1,
    term: "Independence in testing",
    definition: "Independent testing increases objectivity. It can range from developers testing their own code to external specialists testing a final product.",
  },
  {
    id: "31e16bad-736a-4704-b7ed-02d4707b0805",
    chapter: 1,
    term: "Importance of communication in testing",
    definition: "Clear, respectful communication between testers, developers, and stakeholders ensures defects are understood, prioritized, and resolved efficiently.",
  },
  {
    id: "7e36b4af-9c8a-4001-877a-6f58eaf7e19a",
    chapter: 1,
    term: "How testing contributes to risk management",
    definition: "Testing identifies and helps mitigate product and project risks by providing objective information about the software’s behavior and quality.",
  },
  {
    id: "4636a009-fbe4-4e6b-b2ab-d3b53ac4afa9",
    chapter: 1,
    term: "Testing and quality in production",
    definition: "Even after release, testing continues in the form of monitoring, feedback, and maintenance testing to ensure the product remains reliable and valuable to users.",
  },
];

// Chapter 2: Testing Throughout the SDLC
export const flashcardsChapter2: Flashcard[] = [
  {
    id: "5d0166f3-71fa-4826-8888-dc2d3127263b",
    chapter: 2,
    term: "Purpose of testing throughout the SDLC",
    definition: "Testing provides feedback and validation at every stage of the software development life cycle. Early testing reduces risk and cost by finding defects before integration or release.",
  },
  {
    id: "f2d6e622-e6f6-4bef-99de-c9a8fcfcc73a",
    chapter: 2,
    term: "Testing in traditional (sequential) life cycles",
    definition: "In sequential models such as Waterfall or V-Model, testing occurs in defined phases that correspond to development activities, e.g., system testing after system design, acceptance testing after implementation.",
  },
  {
    id: "fa014e8c-9459-4c90-ae8c-643e51d46255",
    chapter: 2,
    term: "Advantages of early testing",
    definition: "Finding defects during requirements or design reviews is cheaper than after coding or deployment. Early testing also clarifies expectations and prevents misunderstandings between teams.",
  },
  {
    id: "58701e43-b894-4496-931d-997c4d6a4041",
    chapter: 2,
    term: "The role of verification and validation",
    definition: "Verification checks that work products meet specified requirements; validation ensures that the final product satisfies user needs. Both activities run throughout the SDLC, not just at the end.",
  },
  {
    id: "dd83c6e0-accc-4291-bb5a-70acdac95875",
    chapter: 2,
    term: "Testing in iterative and incremental models",
    definition: "In iterative development, each iteration includes analysis, design, coding, and testing. Testing verifies the new functionality and performs regression tests to ensure existing features still work.",
  },
  {
    id: "9f8c2f65-7fe6-4f01-a3ba-d345cdf97446",
    chapter: 2,
    term: "Testing in Agile projects",
    definition: "Testing is integrated into daily development. Testers collaborate closely with developers and product owners, applying continuous integration, test automation, and frequent feedback cycles.",
  },
  {
    id: "5d033b12-2526-439c-b74b-97eb14fd609a",
    chapter: 2,
    term: "Regression testing in iterative models",
    definition: "Because new features are added frequently, regression testing ensures that existing behavior remains correct after each change. Automated regression tests are especially valuable here.",
  },
  {
    id: "e1bee092-9ff7-4989-8376-b752c74d1777",
    chapter: 2,
    term: "Testing in DevOps and continuous delivery",
    definition: "Testing becomes a shared responsibility. Automated tests verify each code commit, and monitoring provides production feedback. The goal is faster, safer releases through continuous validation.",
  },
  {
    id: "528120c1-25f2-4dd7-bae1-0391dad42e29",
    chapter: 2,
    term: "Levels of testing overview",
    definition: "Typical levels include unit (component) testing, integration testing, system testing, and acceptance testing. Each level has specific objectives and focuses on different aspects of the product.",
  },
  {
    id: "1b7ab64c-7e36-4c31-9f1e-f49255f10c31",
    chapter: 2,
    term: "Component (unit) testing",
    definition: "Tests individual units of code such as functions or classes. Focuses on correctness, robustness, and handling of boundary conditions. Often automated and performed by developers.",
  },
  {
    id: "2766e809-d112-42a3-9c4c-9e1e56305143",
    chapter: 2,
    term: "Integration testing",
    definition: "Tests interactions between integrated components or systems to detect interface defects. Can be bottom-up, top-down, or a hybrid approach depending on architecture.",
  },
  {
    id: "8b33249a-55a9-405d-8d77-b6bf3c8ef447",
    chapter: 2,
    term: "System testing",
    definition: "Validates that the complete system meets specified requirements. It simulates real-world use and verifies functional and non-functional qualities like performance and usability.",
  },
  {
    id: "7195fdb0-4ad5-42fb-9c8f-223629ae2fe2",
    chapter: 2,
    term: "Acceptance testing",
    definition: "Determines whether the system satisfies user and business needs. Often performed by customers or end-user representatives to decide on production release readiness.",
  },
  {
    id: "d98f3bfc-bb44-499c-9e98-ef5338115566",
    chapter: 2,
    term: "Objectives of testing at each level",
    definition: "Each level targets different risks: unit tests catch coding errors, integration tests find interface issues, system tests verify end-to-end behavior, and acceptance tests confirm fitness for use.",
  },
  {
    id: "e5d7df30-d5a1-4a7a-a87a-359e3fe441b8",
    chapter: 2,
    term: "Test basis and test objects",
    definition: "Test basis are the documents or sources used to design tests (requirements, designs, user stories). Test objects are the items being tested (modules, APIs, systems). They must align.",
  },
  {
    id: "b8c8d052-d6c1-4497-9da0-d96de65d8555",
    chapter: 2,
    term: "Test environment considerations",
    definition: "Each level requires an environment reflecting that scope. Component testing may use stubs or mocks, while system testing requires production-like data and configurations.",
  },
  {
    id: "573dcef5-ec21-4658-b2a3-0c24b5778de5",
    chapter: 2,
    term: "Maintenance testing",
    definition: "Occurs after release to verify that fixes, patches, or enhancements haven’t introduced new defects. It includes confirmation testing and regression testing of impacted areas.",
  },
  {
    id: "4d97c66b-547b-46cf-828e-b6b909ab6439",
    chapter: 2,
    term: "Impact analysis in maintenance testing",
    definition: "Evaluates which parts of the system are affected by a change. This helps testers determine which tests to repeat and where to focus regression testing efforts.",
  },
  {
    id: "1c90b7ed-dc95-4185-9187-730a2d3140e8",
    chapter: 2,
    term: "Typical triggers for maintenance testing",
    definition: "Maintenance testing is triggered by changes such as bug fixes, environment updates, configuration changes, or migrations to new platforms.",
  },
  {
    id: "93dfb428-4280-4110-ad12-99a8ab159f6b",
    chapter: 2,
    term: "Challenges of testing in different life cycles",
    definition: "Testers must adapt to varying documentation, team structures, and release cadences. In Agile, testing is fast and continuous; in traditional projects, it’s phase-driven and heavily planned.",
  },
];

// Chapter 3: Static Testing
export const flashcardsChapter3: Flashcard[] = [
  {
    id: "8d5ca6b4-c006-43e1-bb11-63c592bc1de7",
    chapter: 3,
    term: "Purpose of static testing",
    definition: "Static testing examines work products without executing the code. It detects defects early, improves quality, and helps ensure that requirements and designs are correct before implementation.",
  },
  {
    id: "c9866b5b-fa84-4ba1-901e-8b368b33193c",
    chapter: 3,
    term: "Static vs. dynamic testing",
    definition: "Static testing analyses code, documents, or models; dynamic testing executes software to observe behaviour. Both approaches complement each other and improve defect detection coverage.",
  },
  {
    id: "e31118c2-f859-469a-9d87-e274edc8f52d",
    chapter: 3,
    term: "Examples of static testing techniques",
    definition: "Techniques include reviews, walkthroughs, inspections, and static analysis using tools that check source code for complexity, style violations, or potential defects.",
  },
  {
    id: "f6b1d31c-028a-4257-a82d-1205097a7758",
    chapter: 3,
    term: "Benefits of static testing",
    definition: "Defects are found earlier and are cheaper to fix. It improves maintainability, enhances communication among stakeholders, and raises the overall quality of documentation and code.",
  },
  {
    id: "36252ad2-74d7-479e-89da-46c18a0395dd",
    chapter: 3,
    term: "Work products suitable for static testing",
    definition: "Requirements specifications, design documents, test plans, test cases, code, user guides, and even contracts or regulations can all be reviewed statically.",
  },
  {
    id: "086bd051-ff8a-4043-a7a0-33e72c975031",
    chapter: 3,
    term: "Defects found by static testing",
    definition: "Typical defects include ambiguous requirements, missing functionality, incorrect algorithms, inconsistent interfaces, and deviations from coding or design standards.",
  },
  {
    id: "81b35ee1-a2b6-446d-aa45-ea313606dc99",
    chapter: 3,
    term: "Roles and responsibilities in reviews",
    definition: "Common roles: author (creates the work product), reviewer(s), moderator (facilitates), and scribe (records findings). Each role contributes to effective defect detection.",
  },
  {
    id: "20cc2efc-db10-474c-9879-3b1c05186a25",
    chapter: 3,
    term: "Review process overview",
    definition: "Formal reviews follow steps: planning, kick-off, individual preparation, review meeting, rework, and follow-up. Each step ensures structure and accountability.",
  },
  {
    id: "af1c7072-93a9-4d99-b4fe-ca8cf29fa998",
    chapter: 3,
    term: "Formal review vs. informal review",
    definition: "Informal reviews are quick and flexible (e.g., peer desk checks). Formal reviews or inspections follow defined procedures, roles, and documentation for high-criticality products.",
  },
  {
    id: "c14ed51c-683f-4d14-b51f-8f19bd4f3b9e",
    chapter: 3,
    term: "Kick-off meeting purpose",
    definition: "The kick-off ensures all participants understand objectives, process, roles, and review materials. It motivates reviewers and aligns expectations before preparation.",
  },
  {
    id: "a66ba4f6-621e-4129-9699-4168df09eb05",
    chapter: 3,
    term: "Review entry and exit criteria",
    definition: "Entry criteria define prerequisites such as completed documents and availability of reviewers. Exit criteria define when the review is considered complete—e.g., all major defects resolved.",
  },
  {
    id: "7cec6588-025c-4a76-a511-7b619630f2ea",
    chapter: 3,
    term: "Review metrics",
    definition: "Typical metrics include number of defects found, defect density, review rate, and effort spent. These metrics evaluate review effectiveness and support process improvement.",
  },
  {
    id: "361891a8-ea7a-4e73-b45f-3231bcd5fd9a",
    chapter: 3,
    term: "Success factors for effective reviews",
    definition: "Management support, adequate preparation time, defined roles, limited review size, and a constructive attitude among participants are essential for success.",
  },
  {
    id: "cc6feee4-ea97-495f-94c5-99285d1b2e5d",
    chapter: 3,
    term: "Static analysis by tools",
    definition: "Static analysis tools automatically examine code for potential issues such as unreachable code, security vulnerabilities, or non-compliance with coding standards.",
  },
  {
    id: "9a815b48-6aba-45cb-b24e-f1075a7171a4",
    chapter: 3,
    term: "Typical defects found by static analysis",
    definition: "Findings can include memory leaks, null pointer dereferences, unused variables, data flow anomalies, and violations of architectural rules.",
  },
  {
    id: "e6af306c-2ab0-40eb-8c5e-7225a608ba90",
    chapter: 3,
    term: "Limitations of static analysis",
    definition: "It cannot detect issues that depend on runtime behaviour or system integration, such as performance problems or incorrect data handling between components.",
  },
  {
    id: "972ef580-cb32-4300-a22d-80f6f4b20e76",
    chapter: 3,
    term: "Integrating static analysis into the process",
    definition: "Run static analysis automatically in the build pipeline. Combine it with code reviews to catch structural issues early and enforce coding standards.",
  },
  {
    id: "086d31c4-3a4e-409c-a1a1-072cbacbe443",
    chapter: 3,
    term: "Review effectiveness compared with testing",
    definition: "Reviews often find different defect types than dynamic tests—especially requirement and design flaws—making them a powerful complement to execution-based testing.",
  },
  {
    id: "02ac8683-8e95-4eac-be51-f3b0e93d3196",
    chapter: 3,
    term: "Checklists in reviews",
    definition: "Checklists guide reviewers to focus on common defect areas. For example: clarity, completeness, consistency, traceability, and adherence to standards.",
  },
  {
    id: "6382b8b2-dc04-4bbe-8db7-104bb0c2158a",
    chapter: 3,
    term: "Psychological aspects of reviews",
    definition: "A positive, blame-free culture encourages open communication. The goal is improving the product, not criticizing the author.",
  },
  {
    id: "cd4c6417-c278-43a7-85b1-7af05b7f2ec6",
    chapter: 3,
    term: "Benefits of combining reviews and static analysis",
    definition: "Together they uncover a wide range of defects: reviews catch logic and requirements issues, while static analysis detects code-level or structural problems.",
  },
];

// Chapter 4: Test Analysis and Design
export const flashcardsChapter4: Flashcard[] = [
  {
    id: "3cb4f790-a069-4bd1-944c-c083bd7a9936",
    chapter: 4,
    term: "Purpose of test design techniques",
    definition: "Test design techniques help derive test cases systematically from test conditions or requirements. They make testing more efficient, effective, and measurable.",
  },
  {
    id: "0dd413cc-7ec8-4832-b378-27c21e8fd7e2",
    chapter: 4,
    term: "Categories of test techniques",
    definition: "Test techniques fall into three main groups: black-box (specification-based), white-box (structure-based), and experience-based techniques. Each provides different insights into quality.",
  },
  {
    id: "ca41d259-c180-4e88-845f-a3d737f79afb",
    chapter: 4,
    term: "Equivalence Partitioning (EP)",
    definition: "EP divides input data into partitions where test cases can be expected to behave similarly. Testing one representative value from each valid and invalid partition is usually sufficient.",
  },
  {
    id: "9e2759d5-79cb-4cbe-9c88-60d6c922997e",
    chapter: 4,
    term: "Boundary Value Analysis (BVA)",
    definition: "BVA focuses on values at the edges of input ranges because defects often occur there. Typical tests include minimum, maximum, just-inside, and just-outside boundary values.",
  },
  {
    id: "fefa097d-a319-4397-861d-d36a6c5d794b",
    chapter: 4,
    term: "Decision Table Testing",
    definition: "Decision tables model business rules as combinations of conditions and actions. They ensure coverage of all relevant input combinations and help identify missing or contradictory rules.",
  },
  {
    id: "ce09f1d8-64ee-4296-82ca-0820c80ffe90",
    chapter: 4,
    term: "State Transition Testing",
    definition: "State transition testing models a system’s behaviour as states and events. Testers verify valid transitions, invalid transitions, and correct responses when changing state.",
  },
  {
    id: "78ecee1f-ef1c-4e89-97d1-864eee4aabe5",
    chapter: 4,
    term: "Use Case Testing",
    definition: "Use case testing derives tests from user interactions and scenarios. It validates end-to-end behaviour and ensures that functional flows align with business goals.",
  },
  {
    id: "aad4273a-31b8-4373-9b94-a31326a62ecb",
    chapter: 4,
    term: "White-box testing overview",
    definition: "White-box techniques use knowledge of code structure to design tests. They target control flow paths, conditions, and statements to ensure the internal logic works correctly.",
  },
  {
    id: "103f6c7c-53b7-4c18-adf5-18217826a131",
    chapter: 4,
    term: "Statement testing and coverage",
    definition: "Statement testing ensures that each executable statement in the code is executed at least once. 100 % statement coverage means all lines were exercised.",
  },
  {
    id: "b8bd714b-3ce7-4061-9743-158a2a144a75",
    chapter: 4,
    term: "Decision (branch) testing and coverage",
    definition: "Decision testing verifies that every branch of control flow (e.g., true/false outcomes) is executed. It detects missing conditions that statement testing might miss.",
  },
  {
    id: "faae3155-d1c0-478b-ad0c-fb22dc75249d",
    chapter: 4,
    term: "Condition coverage",
    definition: "Condition coverage ensures each atomic condition in a decision takes both true and false outcomes at least once. It provides deeper insight than branch coverage.",
  },
  {
    id: "4cb6ac34-b469-4648-b300-79b5e1a1da1d",
    chapter: 4,
    term: "Path coverage",
    definition: "Path coverage aims to execute all possible paths through a program or component. It provides high confidence but is usually impractical for complex systems due to combinatorial explosion.",
  },
  {
    id: "b0e027cb-3e1a-4b2f-873d-6c2532c79a2b",
    chapter: 4,
    term: "Experience-based testing techniques",
    definition: "These rely on the tester’s knowledge, intuition, and experience with similar systems. Techniques include exploratory testing, error guessing, and checklist-based testing.",
  },
  {
    id: "2929f0f1-c77e-4fec-90c7-edbc5317a55d",
    chapter: 4,
    term: "Exploratory testing",
    definition: "Exploratory testing is simultaneous learning, test design, and execution. It’s valuable when documentation is limited or when rapid feedback is required.",
  },
  {
    id: "11186a2a-58dc-47e0-9d82-b84d5c4370bb",
    chapter: 4,
    term: "Error guessing",
    definition: "Error guessing uses intuition about likely problem areas—such as boundary conditions, input combinations, or past defect patterns—to design additional tests beyond formal techniques.",
  },
  {
    id: "fb95f7a0-e1b9-4186-9c93-62703c8183aa",
    chapter: 4,
    term: "Checklist-based testing",
    definition: "Testers use pre-defined checklists of typical defects, quality attributes, or process steps to ensure consistency and coverage across test sessions.",
  },
  {
    id: "06468093-ed40-4f21-9b9f-294f1629596d",
    chapter: 4,
    term: "Choosing appropriate test techniques",
    definition: "Technique selection depends on factors like risk, documentation, system type, tester skills, and the project’s goals. Often multiple techniques are combined for best coverage.",
  },
  {
    id: "8944ec92-9827-44ec-83f8-a259ab0438b0",
    chapter: 4,
    term: "Factors influencing technique selection",
    definition: "Key factors include product risk level, regulatory requirements, development lifecycle, team experience, and the type of system (e.g., safety-critical vs. consumer app).",
  },
  {
    id: "4282b34c-274b-43c7-a5a2-b25b4349509d",
    chapter: 4,
    term: "Coverage measurement and metrics",
    definition: "Coverage metrics quantify how much of the test basis or code has been exercised. They guide decisions on additional testing and support exit-criteria evaluation.",
  },
  {
    id: "113ecaee-5a28-4c9b-83a8-a2a2c75cf534",
    chapter: 4,
    term: "Common pitfalls in applying techniques",
    definition: "Misinterpreting boundaries, neglecting invalid inputs, and over-reliance on one technique can reduce effectiveness. Balanced technique use finds more defect types.",
  },
  {
    id: "dc188d01-738f-4ece-b228-ca3656e5a413",
    chapter: 4,
    term: "Benefits of combining black-box and white-box testing",
    definition: "Black-box tests validate external behaviour; white-box tests verify internal logic. Combining both improves coverage and confidence in overall system quality.",
  },
  {
    id: "37f616c8-70c5-4486-b62b-df4d3773c781",
    chapter: 4,
    term: "When to apply experience-based testing",
    definition: "Experience-based approaches are particularly useful in exploratory phases, maintenance testing, or when documentation is incomplete or rapidly changing.",
  },
  {
    id: "35004ae7-b678-4384-a1c9-9d4cc5d4d8ce",
    chapter: 4,
    term: "Relation between test techniques and test levels",
    definition: "Different test levels favour different techniques: unit testing uses white-box, system and acceptance use black-box, and exploratory fits across all levels for risk areas.",
  },
  {
    id: "b5b22833-811c-4537-bf03-03a4c18b96ab",
    chapter: 4,
    term: "Advantages of systematic test design",
    definition: "Systematic design reduces duplication, supports traceability to requirements, and improves communication among testers and stakeholders.",
  },
  {
    id: "725432a3-6053-41f5-a0fe-9b39e727f224",
    chapter: 4,
    term: "Importance of negative testing",
    definition: "Negative tests ensure the system handles invalid, unexpected, or extreme inputs gracefully. They complement positive tests derived from normal conditions.",
  },
  {
    id: "a8bad371-0348-4564-832c-1d5d45db26ca",
    chapter: 4,
    term: "Equivalence partitioning vs. boundary value analysis",
    definition: "EP selects representative values from partitions, while BVA focuses on edges of those partitions. Used together, they maximise input coverage efficiently.",
  },
];

// Chapter 5: Managing the Test Activities
export const flashcardsChapter5: Flashcard[] = [
  {
    id: "322cd56e-f823-4629-bf08-221b43b11b5d",
    chapter: 5,
    term: "Purpose of test management",
    definition: "Test management ensures that testing is planned, organized, monitored, and controlled effectively. It aligns testing activities with project goals and manages risks, resources, and deliverables.",
  },
  {
    id: "172c3a70-ac63-4356-849d-a921a37966f5",
    chapter: 5,
    term: "Components of the test process under management",
    definition: "Test planning, monitoring and control, analysis and design, implementation and execution, evaluating exit criteria, and closure activities all require coordination by test management.",
  },
  {
    id: "3ebcc2d3-deb6-43a1-829e-d74e1a5ac986",
    chapter: 5,
    term: "Test planning activities",
    definition: "Define the scope, objectives, approach, schedule, resources, and responsibilities. Identify test items, environments, entry and exit criteria, and deliverables such as reports or logs.",
  },
  {
    id: "7d62a268-c232-42da-94d4-5950ab7095e6",
    chapter: 5,
    term: "Test plan contents",
    definition: "A test plan describes what will be tested, who will test it, how and when testing will occur, and what criteria will determine completion. It’s the baseline for monitoring progress.",
  },
  {
    id: "901dbad4-5527-45ec-9b66-5068258f02ae",
    chapter: 5,
    term: "Test monitoring and control",
    definition: "Monitoring compares actual progress with the plan. Control means taking corrective action when deviations occur—such as reprioritizing tests or adding resources.",
  },
  {
    id: "37201d44-37fd-41f9-a577-74f7da2b1714",
    chapter: 5,
    term: "Common test progress metrics",
    definition: "Examples include percentage of test cases executed, pass/fail rates, number and severity of defects found, defect density, and test effort spent.",
  },
  {
    id: "b35c7288-a8c9-4a99-8812-5b0c4ece597f",
    chapter: 5,
    term: "Importance of exit criteria",
    definition: "Exit criteria define when testing can be considered complete. They might include required coverage levels, number of open defects, or milestone delivery dates.",
  },
  {
    id: "a062ae06-c634-4c9f-b4bb-ae585cb284f6",
    chapter: 5,
    term: "Configuration management in testing",
    definition: "Configuration management tracks versions of test items, data, environments, and tools. It ensures traceability and that correct items are tested together.",
  },
  {
    id: "54fb2f96-fda4-4494-b00c-e06387ff279e",
    chapter: 5,
    term: "Risk-based testing overview",
    definition: "Risk-based testing prioritizes test effort based on the probability and impact of potential failures. High-risk areas receive more thorough and early testing.",
  },
  {
    id: "3634488a-cd33-4e7a-9a10-a890d31530cf",
    chapter: 5,
    term: "Product vs. project risks",
    definition: "Product risks relate to the system’s potential failure to meet quality expectations. Project risks concern schedule, budget, and resource issues that can affect testing success.",
  },
  {
    id: "68734f4f-8b58-4a23-9148-1c16f6a2fd35",
    chapter: 5,
    term: "Risk assessment steps",
    definition: "Identify risks, analyze likelihood and impact, determine priority, and plan mitigation actions. Testing is then aligned with these priorities.",
  },
  {
    id: "6a34e2f1-5bfa-4bcd-876f-517e57f02095",
    chapter: 5,
    term: "Risk mitigation actions",
    definition: "Typical actions include preventive measures (reviews, standards), detective measures (testing), and contingency plans if risks materialize.",
  },
  {
    id: "f4bab39c-a219-4a03-b24e-7f95ac00de25",
    chapter: 5,
    term: "Estimating test effort",
    definition: "Effort estimation uses metrics from past projects, complexity assessments, or expert judgment. It supports realistic scheduling and resource planning.",
  },
  {
    id: "feed7303-7f60-4359-a36d-2543a40ea683",
    chapter: 5,
    term: "Factors influencing test effort",
    definition: "Size and complexity of the system, quality of documentation, team experience, test environment availability, and level of automation all affect effort.",
  },
  {
    id: "15cea81b-da79-4d6d-9abb-20a2a2a9a04b",
    chapter: 5,
    term: "Test leader responsibilities",
    definition: "The test leader manages planning, monitors progress, reports status, coordinates testers, and ensures adherence to standards and processes.",
  },
  {
    id: "7a9241b0-7ef8-4f9d-9e95-7a4933ff0a11",
    chapter: 5,
    term: "Tester responsibilities",
    definition: "Testers design, implement, and execute tests, report defects, evaluate results, and contribute to process improvement by identifying recurring issues.",
  },
  {
    id: "3b123750-34e9-49dd-a0d8-e0ff7b1f13e0",
    chapter: 5,
    term: "Test progress reporting",
    definition: "Reports summarize what has been tested, coverage achieved, defects found, and remaining risks. They inform management decisions about release readiness.",
  },
  {
    id: "8d40a0da-464b-4d7b-b2d4-e91da8586edd",
    chapter: 5,
    term: "Defect management process",
    definition: "Covers the life cycle from detection to closure. Steps include logging, classification, investigation, fixing, re-testing, and final verification of resolved defects.",
  },
  {
    id: "687b76e4-1108-43ba-995c-3d4921339d55",
    chapter: 5,
    term: "Defect report contents",
    definition: "A good defect report includes an ID, summary, steps to reproduce, observed and expected results, environment details, severity, priority, and reporter information.",
  },
  {
    id: "93f3d440-9fe9-441c-9dfa-50aa467deab7",
    chapter: 5,
    term: "Defect classification by severity and priority",
    definition: "Severity reflects impact on the system; priority reflects the urgency to fix. A cosmetic issue may have low severity but high priority if it affects business perception.",
  },
  {
    id: "679ac960-408a-4362-aa3d-5400bd975c1e",
    chapter: 5,
    term: "Defect density and trends",
    definition: "Defect density measures defects per size unit (e.g., per KLOC or function point). Tracking trends helps assess product stability and process quality over time.",
  },
  {
    id: "db9eb48c-b826-497e-87da-75622533a6a8",
    chapter: 5,
    term: "Test management tools overview",
    definition: "Tools support planning, scheduling, progress tracking, and reporting. They integrate with requirement and defect tracking tools for end-to-end traceability.",
  },
  {
    id: "e613660d-5ed3-4f86-a58a-ba46f8070b4c",
    chapter: 5,
    term: "Benefits of using test management tools",
    definition: "They centralize information, automate reporting, enforce workflow consistency, and provide dashboards for stakeholders.",
  },
  {
    id: "19cdd88a-cfe6-4cd0-9bce-048a118e57f9",
    chapter: 5,
    term: "Potential risks of using tools",
    definition: "Over-reliance can reduce critical thinking. Poor tool integration, inadequate training, or unrealistic expectations can lead to inefficiencies.",
  },
  {
    id: "0b882cb6-47b7-40f0-8a60-4d97716cbd99",
    chapter: 5,
    term: "Lessons learned and continuous improvement",
    definition: "At test closure, teams analyze what worked and what didn’t. Insights feed into process improvement for future projects.",
  },
];

// Chapter 6: Test Tools
export const flashcardsChapter6: Flashcard[] = [
  {
    id: "957f85f4-8090-4018-b3ad-af72c0a3c25a",
    chapter: 6,
    term: "Purpose of test tools in software testing",
    definition: "Test tools increase the efficiency, effectiveness, and consistency of testing activities. They help automate repetitive tasks, improve accuracy, and provide better reporting and traceability.",
  },
  {
    id: "535ee199-b97d-4d34-82f5-b41e16990661",
    chapter: 6,
    term: "Categories of test tools",
    definition: "Main categories include test management tools, static analysis tools, test execution and automation tools, performance testing tools, and tools for defect tracking and coverage analysis.",
  },
  {
    id: "a957e2bd-1e6e-4173-b2a9-770c579642de",
    chapter: 6,
    term: "Benefits of using test tools",
    definition: "Automation saves time, improves repeatability, enhances accuracy, and provides faster feedback. Tools also support continuous integration and large-scale regression testing.",
  },
  {
    id: "7c41e9d6-9459-46b8-9998-b24cd75c3db6",
    chapter: 6,
    term: "Risks and challenges of using test tools",
    definition: "Tools can introduce maintenance overhead, high license costs, and steep learning curves. Unrealistic expectations or poor implementation can reduce overall ROI.",
  },
  {
    id: "3d5e46dd-763f-4b7c-9c02-5d40162e71a7",
    chapter: 6,
    term: "Tool support across the test process",
    definition: "Tools support every test activity: planning, design, implementation, execution, logging, and reporting. Some tools specialize in one phase, others integrate across all.",
  },
  {
    id: "d0813564-e713-4ba2-bb8c-1dd1eb0b9b71",
    chapter: 6,
    term: "Test management tools",
    definition: "They support planning, scheduling, progress tracking, reporting, and traceability. Integration with requirement and defect management systems improves transparency and control.",
  },
  {
    id: "49fd6f26-9d1a-41a3-ab9a-e68d1406a2c2",
    chapter: 6,
    term: "Static analysis tools",
    definition: "These tools analyze source code or models without executing them. They find issues such as security vulnerabilities, code complexity, or violations of coding standards.",
  },
  {
    id: "243cf957-f818-4743-8426-5c1633e3dc5e",
    chapter: 6,
    term: "Test execution and automation tools",
    definition: "They automate test case execution, compare actual versus expected results, and report discrepancies. They are crucial for regression testing and continuous delivery pipelines.",
  },
  {
    id: "065db81e-4529-41f1-86cd-e94a81cc04c1",
    chapter: 6,
    term: "Performance and load testing tools",
    definition: "Simulate multiple users or transactions to measure system responsiveness, stability, and scalability under load. Results help identify bottlenecks before production.",
  },
  {
    id: "cc6448cd-1af6-4500-8a0d-e359115f85fd",
    chapter: 6,
    term: "Coverage measurement tools",
    definition: "Measure how much of the code, requirements, or data has been exercised during testing. They guide test completion decisions and help identify untested areas.",
  },
  {
    id: "0d1ff06a-112e-411b-805f-dbb945febe62",
    chapter: 6,
    term: "Defect management tools",
    definition: "Provide centralized tracking for defect reporting, classification, and workflow. Integration with test tools allows automatic defect creation from failed tests.",
  },
  {
    id: "0c0df7e2-583a-4ee5-8f4a-7f5c3d5b3729",
    chapter: 6,
    term: "Test data preparation tools",
    definition: "Generate, anonymize, or subset test data for use across environments. They ensure realistic yet compliant data is available for consistent test execution.",
  },
  {
    id: "35af375e-a737-4b59-92f3-2d35e0bb38af",
    chapter: 6,
    term: "Requirements management tools",
    definition: "Support requirements documentation, change tracking, and traceability. Test cases can be linked to requirements to verify coverage and completeness.",
  },
  {
    id: "1099bbcd-f65b-44bf-8c25-b6ad5c322e1f",
    chapter: 6,
    term: "Tool integration benefits",
    definition: "Integrating tools enables end-to-end traceability from requirements through tests to defects, improving efficiency and consistency across the SDLC.",
  },
  {
    id: "25bbb309-b7c3-4559-9558-4222ae623c1b",
    chapter: 6,
    term: "Tool integration challenges",
    definition: "Different vendors, data formats, and APIs can make integration complex. Custom connectors and maintenance are often required to keep systems synchronized.",
  },
  {
    id: "afccb585-4764-4916-9d3a-640fe9db2d36",
    chapter: 6,
    term: "Open-source vs. commercial tools",
    definition: "Open-source tools are free and flexible but require internal expertise for maintenance. Commercial tools provide support and features but at higher cost.",
  },
  {
    id: "707f2fef-4270-4dcf-8c33-a3de18664628",
    chapter: 6,
    term: "Process for introducing a new test tool",
    definition: "Steps include identifying needs, evaluating options, piloting in a controlled environment, assessing ROI, training users, and deploying gradually across the organization.",
  },
  {
    id: "8023a71d-2401-4513-9e3d-968a8c460cca",
    chapter: 6,
    term: "Pilot projects for tool introduction",
    definition: "Pilots validate a tool’s suitability in real scenarios. They reveal technical, process, or skill gaps and prevent costly mistakes before full adoption.",
  },
  {
    id: "e072ea8c-00bb-49b6-8165-d06fcbf4ed14",
    chapter: 6,
    term: "Success factors for tool adoption",
    definition: "Management support, realistic expectations, dedicated champions, clear objectives, adequate training, and measurable success criteria drive effective tool use.",
  },
  {
    id: "ee862d32-3143-4952-9137-ba6c88076fb8",
    chapter: 6,
    term: "Importance of training and mentoring",
    definition: "Without proper training, tools are underused or misapplied. Ongoing mentoring ensures the team continuously improves efficiency and automation maturity.",
  },
  {
    id: "59a16dd0-3963-4b5a-8749-00d4bb3f7154",
    chapter: 6,
    term: "Maintaining test automation scripts",
    definition: "Automation requires regular updates to keep pace with UI or system changes. Poor maintenance leads to false positives, reduced confidence, and wasted effort.",
  },
  {
    id: "53ba6250-ffb6-4cb0-957d-e241b0c223d1",
    chapter: 6,
    term: "Test automation framework concepts",
    definition: "Frameworks define standards for organizing, maintaining, and reusing automated tests. Examples include data-driven, keyword-driven, and hybrid frameworks.",
  },
  {
    id: "dc88a8fa-2682-42d0-9519-607cc4509b51",
    chapter: 6,
    term: "Tool support for Agile and DevOps",
    definition: "Continuous integration tools, version control, automated build and deployment, and monitoring systems enable rapid feedback loops and continuous quality.",
  },
  {
    id: "6cf0869b-348f-440b-9361-f7caaf12ba6a",
    chapter: 6,
    term: "Balancing automation and manual testing",
    definition: "Automation accelerates regression and repetitive tests, while manual testing remains essential for exploratory, usability, and ad-hoc verification.",
  },
  {
    id: "590f7d53-0495-450a-93c6-fe271acde0ce",
    chapter: 6,
    term: "Continuous improvement with tools",
    definition: "Review tool usage regularly, retire obsolete tools, and adapt new ones as processes evolve. Measure ROI through saved effort, coverage, and defect detection improvements.",
  },
];

export const allFlashcards: Flashcard[] = [
  ...flashcardsChapter1,
  ...flashcardsChapter2,
  ...flashcardsChapter3,
  ...flashcardsChapter4,
  ...flashcardsChapter5,
  ...flashcardsChapter6,
];
