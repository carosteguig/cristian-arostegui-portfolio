import './HomePage.scss';
import { Link } from 'react-router-dom';
import LegoFace from '../../assets/images/images/Lego-face-img.png';
import GithubIcon from '../../assets/images/icons/github-icon.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import EmailIcon from '../../assets/images/icons/email-icon.svg';
import DesignerIcon from '../../assets/images/icons/designer-icon.svg';
import WebDevIcon from '../../assets/images/icons/webDev-icon.svg';
import SkillCard from '../../components/SkillCard/SkillCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';


export default function HomePage() {

    const designerSkills = [
        'Research',
        'Wireframing',
        'Branding',
        'Figma',
        'Miro',
        'Photoshop',
        'Illustrator',
        '3DS Max'
    ]

    const webDevSkills = [
        'HTML',
        'SASS',
        'BEM',
        'JavaScript',
        'React',
        'Axios',
        'Node.js',
        'Express',
        'Git'
    ]

    return (
        <div>
            <header>
                <div>
                    <div>
                        <img src={LegoFace} alt="Cristian Arostegui's face, or not?" />
                    </div>
                    <div>
                        <h1>Cristian Arostegui G.</h1>
                        <p>UX designer / Web developer based in Victoria, BC, Canada</p>
                    </div>
                </div>
                <div>
                    <Link to='https://github.com/carosteguig'>
                        <img src="" alt="Github button link" />
                    </Link>
                    <Link to='https://www.linkedin.com/in/cristianarosteguig/'>
                        <img src='' alt='linkedin button link' />
                    </Link>
                    <Link to='mailto:carosteguig@gmail.com'>
                        <img src='' alt='email button link' />
                    </Link>
                </div>
            </header>

            <main>
                <section>
                    <div>
                        <h2>// about</h2>
                        <p>Furniture designer turned UX designer and Web developer.</p>
                        <p>For the last 3 years I have been learning about UX and UI design and my goal is to combine these skills with web development.
                            I really believe that by combining dev and designs skills, I can design and develop better products. Just like in furniture,
                            by learning how to fabricate and build furniture, I gained a whole new perspective on how to design furniture.<span>Learn more...</span></p>
                    </div>
                    <div>
                        <SkillCard
                        image= {DesignerIcon}
                        altText='pen drawing'
                        title='Designer'
                        description='Trying not to get complicated with simplicity, but simplicity is quite complicated'
                        skillsTitle='Skills'
                        skills={designerSkills}
                        />
                        <SkillCard 
                        image= {WebDevIcon}
                        altText='code icon'
                        title='Web Developer'
                        description='You know the feeling when a line of code works!  Looking forward to getting many more of those. Excited to what comes later'
                        skillsTile='Skills'
                        skills={webDevSkills}
                        />
                    </div>
                    <p>projects</p> 
                </section>
                <section>
                    <h2>// projects</h2>
                    <div>
                        <ProjectCard  
                        name='Simple Meal'
                        description='A recipe web app that allows users to create their own meal plans. Users can choose between 1 to 5 different ingredients and they get up to 10 recipes based on those ingredients.'
                        tags='REACT  SASS  BEM  AXIOS  NODE.js  EXPRESS'
                        />
                        <ProjectCard 
                        name='CampIt!'
                        description='UX case study_Design proposal for user friendly online campsite booking platform in Vancouver Island, Canada'
                        tags='FIGMA   MIRO'
                        />
                    </div>
                </section>
                <section>
                    <h2>// contact me</h2>
                    <div>
                        <p>Please don’t be rude and say hi, I spent some time designing and coding this portfolio. Let me know how I did!
                        you can find me on any of these links.
                        Thanks for looking!
                        </p>
                    </div>
                </section>
            </main>
            <footer>
                <p>
                    Designed and developed by Cristian Arostegui G // 2022
                </p>
            </footer>

        </div>

    );
}
