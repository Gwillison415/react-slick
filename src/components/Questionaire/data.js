export const surveyData = {
  id: 76,
  role: "custom",
  name: "NewCompany4 - Default",
  state: "",
  sections: [
    {
      name: "intro",
      type: "intro",
      logo: {
        medium: "https://cdn.allvoices.co/companies/newco/v2/logo-navy@2x.png",
      },
      data: {
        content:
          "If you've experienced something challenging at work, we want to make sure you feel heard. You can use AllVoices to share your feedback, questions or concerns. NewCo will be able to communicate with you via AllVoices anonymous messaging portal, but will never know your phone number.",
        ctaText: null,
      },
    },
    {
      name: "culture",
      type: "culture",
      questions: [
        {
          id: 1070,
          role: "cultureSubIssue",
          type: "dropdown",
          required: true,
          message: "What type of issue did you experience?",
          description: null,
          richDescription: null,
          placeholder: "What type of issue did you experience?",
          choices: [
            {
              id: 3214,
              position: 1,
              name: "notWelcome",
              message: "Culture is not welcoming or inclusive",
            },
            {
              id: 3215,
              position: 2,
              name: "micromanaging",
              message: "Micromanaging / lack of autonomy",
            },
            {
              id: 3216,
              position: 3,
              name: "missingCollaboration",
              message: "Not enough collaboration / social support",
            },
            {
              id: 3217,
              position: 4,
              name: "longWorkingHours",
              message: "Long working hours / lack of work-life balance",
            },
            {
              id: 3218,
              position: 5,
              name: "notHeard",
              message: "Not being heard, acknowledged, or recognized",
            },
            {
              id: 3219,
              position: 6,
              name: "lackOfOpportunity",
              message: "Lack of opportunity to grow / develop",
            },
            {
              id: 3220,
              position: 7,
              name: "punishing",
              message: "Punished for mistakes and failures",
            },
            {
              id: 3221,
              position: 8,
              type: "longText",
              required: false,
              name: "otherCultureIssue",
              message: "Other (please describe below)",
            },
          ],
        },
        {
          id: 1076,
          role: "department",
          type: "dropdown",
          required: true,
          message: "Which department did this happen in?",
          description: null,
          richDescription: null,
          placeholder: "Which department did this happen in?",
          choices: [
            {
              id: 3251,
              position: 1,
              name: "businessDevelopment",
              message: "Business Development",
            },
            {
              id: 3252,
              position: 2,
              name: "engineering",
              message: "Engineering",
            },
            { id: 3253, position: 3, name: "finance", message: "Finance" },
            {
              id: 3254,
              position: 4,
              name: "accounting",
              message: "Accounting",
            },
            { id: 3255, position: 5, name: "hr", message: "HR" },
            { id: 3256, position: 6, name: "product", message: "Product" },
            { id: 3257, position: 7, name: "design", message: "Design" },
            {
              id: 3258,
              position: 8,
              name: "operations",
              message: "Operations",
            },
            { id: 3259, position: 9, name: "marketing", message: "Marketing" },
            { id: 3260, position: 10, name: "admin", message: "Admin" },
            {
              id: 3261,
              position: 11,
              name: "declineToState",
              message: "Decline to state",
            },
          ],
        },
        {
          id: 1077,
          role: "location",
          type: "dropdown",
          required: true,
          message: "Which location did this happen in?",
          description: null,
          richDescription: null,
          placeholder: "Which location did this happen in?",
          choices: [
            {
              id: 3262,
              position: 1,
              name: "losAngeles",
              message: "Los Angeles",
            },
            { id: 3263, position: 2, name: "newYork", message: "New York" },
            { id: 3289, position: 3, name: "seattle", message: "Seattle" },
            { id: 3288, position: 4, name: "portland", message: "Portland" },
            { id: 3287, position: 5, name: "austin", message: "Austin" },
            {
              id: 3265,
              position: 6,
              name: "declineToState",
              message: "Decline to state",
            },
            {
              id: 1080,
              role: "cultureDetails",
              type: "longText",
              required: false,
              message: "Anything else you'd like to share? (optional)",
              description: null,
              richDescription: null,
              placeholder: "Anything else you'd like to share? (optional)",
            },
          ],
          data: { title: "Tell us more about the issue." },
        },
        {
          id: 1080,
          role: "cultureDetails",
          type: "longText",
          required: false,
          message: "Anything else you'd like to share? (optional)",
          description: null,
          richDescription: null,
          placeholder: "Anything else you'd like to share? (optional)",
        },
      ],
    },
    {
      name: "enterprise",
      type: "enterprise",
      questions: [
        {
          id: 1083,
          role: "whyAllVoices",
          type: "dropdown",
          required: true,
          message: "What is your reason for using AllVoices?",
          description: null,
          richDescription: null,
          placeholder: "What is your reason for using AllVoices?",
          choices: [
            {
              id: 3266,
              position: 1,
              name: "bigEnough",
              message:
                "I'm not sure if this is a big enough issue to report to leadership",
            },
            {
              id: 3267,
              position: 2,
              name: "directManager",
              message: "My direct supervisor / manager is the issue",
            },
            {
              id: 3268,
              position: 3,
              name: "retaliation",
              message: "I'm afraid of retaliation",
            },
            {
              id: 3269,
              position: 4,
              name: "noInvestigation",
              message:
                "I don't want to make a big deal or trigger an investigation",
            },
            {
              id: 3270,
              position: 5,
              name: "notInPerson",
              message: "I don't want to talk about it in person",
            },
            {
              id: 3271,
              position: 6,
              name: "notResolved",
              message: "I reported the issue but it hasn't been resolved",
            },
            {
              id: 3272,
              position: 7,
              name: "otherReason",
              message: "None of the above",
            },
          ],
        },
        {
          id: 1084,
          role: "howToResolve",
          type: "longText",
          required: true,
          message: "How would you like to see this issue resolved?",
          description: null,
          richDescription: null,
          placeholder: "How would you like to see this issue resolved?",
        },
      ],
      data: { title: "Please provide more details." },
    },
    {
      name: "deanonymize",
      type: "deanonymize",
      questions: [
        {
          id: 1085,
          role: "deanonymize",
          type: "singleChoice",
          required: true,
          message: "Would you like to remain anonymous?",
          description: null,
          richDescription: null,
          choices: [
            {
              id: 3273,
              position: 1,
              name: "yes",
              message: "Yes, I want to remain anonymous.",
              annotation: null,
            },
            {
              id: 3274,
              position: 2,
              name: "no",
              message: "No, I want NewCo to know my identity.",
              annotation: null,
            },
          ],
        },
        {
          id: 1086,
          role: "reporterFirstName",
          type: "shortText",
          required: false,
          message: "First name",
          description: null,
          richDescription: null,
          placeholder: "First name",
        },
        {
          id: 1087,
          role: "reporterLastName",
          type: "shortText",
          required: false,
          message: "Last name",
          description: null,
          richDescription: null,
          placeholder: "Last name",
        },
        {
          id: 1088,
          role: "reporterEmail",
          type: "shortText",
          required: false,
          message: "Email address",
          description: null,
          richDescription: null,
          placeholder: "Email address",
        },
      ],
      data: { title: "Do you want this feedback to remain anonymous?" },
    },
  ],
};
