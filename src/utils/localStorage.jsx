
//localStorage.clear()

const employees =[

  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "total": 3,
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "failed": false,
        "newTask": true,
        "completed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Generate Q2 sales report for review meeting.",
        "taskDate": "2025-06-28",
        "category": "Reporting"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly sync-up meeting with the marketing team.",
        "taskDate": "2025-06-26",
        "category": "Meetings"
      },
      {
        "active": false,
        "failed": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Client Follow-Up",
        "taskDescription": "Did not follow up with client as scheduled.",
        "taskDate": "2025-06-25",
        "category": "Communication"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "total": 4,
      "active": 2,
      "completed": 2,
      "failed": 0,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "failed": false,
        "newTask": true,
        "completed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the pull request #423 from frontend team.",
        "taskDate": "2025-06-30",
        "category": "Development"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Update API Docs",
        "taskDescription": "Document new API endpoints released in v2.1.",
        "taskDate": "2025-06-27",
        "category": "Documentation"
      },
      {
        "active": true,
        "failed": false,
        "newTask": false,
        "completed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve login redirect issue reported by QA.",
        "taskDate": "2025-06-29",
        "category": "Bugfix"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Merge Dev Branch",
        "taskDescription": "Merge development into main branch after sprint review.",
        "taskDate": "2025-06-24",
        "category": "Version Control"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rajesh",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "total": 3,
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "failed": false,
        "newTask": true,
        "completed": false,
        "taskTitle": "Social Media Strategy",
        "taskDescription": "Draft a content calendar for July.",
        "taskDate": "2025-06-30",
        "category": "Marketing"
      },
      {
        "active": false,
        "failed": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Survey Analysis",
        "taskDescription": "Analyze employee feedback from the latest engagement survey.",
        "taskDate": "2025-06-25",
        "category": "HR"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Budget Draft",
        "taskDescription": "Submit draft for next quarter's marketing budget.",
        "taskDate": "2025-06-27",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Kavita",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "total": 4,
      "active": 1,
      "completed": 2,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "failed": false,
        "newTask": true,
        "completed": false,
        "taskTitle": "Deploy App",
        "taskDescription": "Deploy the latest build to staging environment.",
        "taskDate": "2025-06-30",
        "category": "DevOps"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Security Audit",
        "taskDescription": "Complete internal security checklist for the new release.",
        "taskDate": "2025-06-26",
        "category": "Security"
      },
      {
        "active": false,
        "failed": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Fix Deployment Script",
        "taskDescription": "Broken shell script caused rollback during last deploy.",
        "taskDate": "2025-06-25",
        "category": "DevOps"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Optimize Database",
        "taskDescription": "Add indexes to improve query performance.",
        "taskDate": "2025-06-23",
        "category": "Database"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Ravi",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "total": 3,
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "failed": false,
        "newTask": true,
        "completed": false,
        "taskTitle": "Customer Support Shift",
        "taskDescription": "Handle customer queries from 9am to 1pm.",
        "taskDate": "2025-06-30",
        "category": "Support"
      },
      {
        "active": false,
        "failed": false,
        "newTask": false,
        "completed": true,
        "taskTitle": "Ticket Escalation",
        "taskDescription": "Escalate unresolved tickets older than 48 hours.",
        "taskDate": "2025-06-28",
        "category": "Support"
      },
      {
        "active": false,
        "failed": true,
        "newTask": false,
        "completed": false,
        "taskTitle": "Training Attendance",
        "taskDescription": "Missed mandatory product training session.",
        "taskDate": "2025-06-25",
        "category": "Training"
      }
    ]
  }
]


const admin = [
    {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

 return {employees,admin}
}