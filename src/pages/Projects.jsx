import ProjectsSlides from "../components/ProjectsSlides"

const Projects = ({setCurrentImg}) => {
  return (
    <section className="blank flex flex-col">
        <h1 className="pl-[1rem] md:pl-[2rem] titleFont font-extrabold text-[2rem] mb-[2rem] md:mb-[0rem] md:text-[4rem] lg:text-[6rem]">PROJECTS</h1>
        <ProjectsSlides  setCurrentImg={setCurrentImg}/>
    </section>
  )
}

export default Projects