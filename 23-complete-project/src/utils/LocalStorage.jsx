// this is my data 

// const employees = [
  
//     { "id": 1, "email": "employee1@company.com", "password": "123" },
//     { "id": 2, "email": "employee2@company.com", "password": "123" },
//     { "id": 3, "email": "employee3@company.com", "password": "123" },
//     { "id": 4, "email": "employee4@company.com", "password": "123" },
//     { "id": 5, "email": "employee5@company.com", "password": "123" }

// ]

// const admin = [

// {
//     "id": 1,
//     "email": "admin@company.com",
//     "password": "123"
//   }


// ]

// do one thing, give each employee a task array with 3-10 task with properties like active (true or false), new Task (true or false), completed(true or false), failed(true or false) and task title, task description, task date, category

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Create monthly sales report for management",
        date: "2025-01-05",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Call pending clients and update CRM",
        date: "2025-01-06",
        category: "Client",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend weekly sales sync meeting",
        date: "2025-01-07",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@company.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Bug Fixing",
        description: "Resolve login page validation bugs",
        date: "2025-01-04",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from junior devs",
        date: "2025-01-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API Integration",
        description: "Integrate payment gateway API",
        date: "2025-01-08",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@company.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create UI mockups for homepage",
        date: "2025-01-03",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "UX Research",
        description: "Analyze user feedback and heatmaps",
        date: "2025-01-06",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Banner Design",
        description: "Design promotional banners",
        date: "2025-01-09",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Vikas",
    email: "employee4@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Verify stock levels in warehouse",
        date: "2025-01-02",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Vendor Coordination",
        description: "Coordinate with vendors for restocking",
        date: "2025-01-07",
        category: "Operations",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Audit Preparation",
        description: "Prepare documents for internal audit",
        date: "2025-01-10",
        category: "Compliance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@company.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Social Media Post",
        description: "Create Instagram promotional post",
        date: "2025-01-05",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Ad Campaign",
        description: "Launch Google Ads campaign",
        date: "2025-01-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Analytics Review",
        description: "Review ad performance metrics",
        date: "2025-01-09",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Suresh",
    email: "admin@company.com",
    password: "123"
  }
];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

//  console.log(employees,admin);

return{employees,admin}
 
//  console.log(JSON.parse(data));
}