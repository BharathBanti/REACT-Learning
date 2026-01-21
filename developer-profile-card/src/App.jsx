import './App.css';

const developerData = {
  name : "Bharath Dasari",
  photo : "/car.jpg",
  bio : "Front-End developer with strong JavaScript(ES6+), and pursuing React to develop large and complex projects. Also familiar with the DSA like Number theory, Math, Bit Manipulation, Searching. Confident with using AI tools in the live development like Cursor AI, Windsurf AI, Firebase Studio and Google AI Studio.",
  skills : ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Git & GitHub", "React.js", "DSA - Fundamentals"],
  skillColors : ["blue", "red", "orange", "violet", "brown", "green", "magenta"],
  skillEmojis : ["👍", "🤏", "😊", "🥳", "🤷‍♂️", "🎯", "🤭"]
}

function App() {
  return(
    <Card/>
  )
}

function Card(){
  return(
    <div className='card'>
      <DeveloperPhoto photo={developerData.photo} name={developerData.name}/>
      <DeveloperName name={developerData.name}/>
      <DeveloperBio bio={developerData.bio}/>
      <SkillsList skills={developerData.skills} skillColors={developerData.skillColors} skillEmojis={developerData.skillEmojis}/>
    </div>
  )
}

function DeveloperPhoto(props){
  return <img className="profile-image" src={props.photo} alt={props.name} />
}

function DeveloperName(props){
  return <h3 className='name'>{props.name}</h3>
}

function DeveloperBio(props){
  return <p className='bio'>{props.bio}</p>
}

function SkillsList(props){
  return (
  <ul className='skillList'>
    {props.skills.map((skill, index) => (
      <li key={index} style={{color : props.skillColors[index]}}>{skill}{props.skillEmojis[index]}</li>
    ))}
  </ul>
  );
}

export default App
