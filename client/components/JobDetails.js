import React from 'react'


class JobDetails extends React.Component{
constructor(){
    super()
    this.state={
        jobs: [
            {
                title: "Developer", 
                description: "Excellent problem solver. Solid understanding of Object Oriented Programming",
                experience: 'entry',
                Rating: '5',
                company: 'https://www.linkedin.com'
            },
            {
                title: "QA", 
                description: "Contributes to process improvement, proposing and arguing for changes in a collaborative, team-based approach",
                experience: 'entry',
                Rating: '5',
                company: 'https://www.linkedin.com'
            }
        ]
    }
}

    

    render(){
         return(
             <div>
                 <ul>
             {this.state.jobs.map((job) => {
                 return <li key={job.id}>
                 Job Title: {job.title}
                 {"  "}
                 Decription: {job.description}
                 {"  "}
                 Experience: {job.experience}
                 {"  "}
                 Rating: {job.Rating}
                 {"  "}
                 Company: 
                 {"    "}
                  {job.company}
                 <a href= {job.company} target="_blank" >
                {job.company}
                 </a>
                 </li>
             })}
    </ul>

    <button style={{
   display: 'flex'
   

    }}
    >Swipe
    </button>
                 </div>
         )
    }
}

export default JobDetails