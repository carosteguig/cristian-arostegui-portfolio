import './HomePage.scss';
import { Link } from 'react-router-dom';
import Mememe from '../../assets/images/images/me-image-text.png';
import GithubIcon from '../../assets/images/icons/github-icon.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import EmailIcon from '../../assets/images/icons/email-icon.svg';
import DesignerIcon from '../../assets/images/icons/designer-icon.svg';
import WebDevIcon from '../../assets/images/icons/webDev-icon.svg';
import SimpleMeal from '../../assets/images/images/Simple-Meal-img.png';
import Portfolio from '../../assets/images/images/portfolio-img.png';
import CampIt from '../../assets/images/images/CampIt-img.png';
import FurnDesign from '../../assets/images/images/furn-design.png';
import Logo from '../../assets/images/logo/logo-circle2.png';
import SkillCard from '../../components/SkillCard/SkillCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { NavHashLink } from 'react-router-hash-link';


export default function HomePage() {

    // Array of skills for the desgin card
    const designerSkills = [
        'Research',
        'Wireframing',
        'Branding',
        'Figma',
        'Miro',
        'Photoshop',
        'Illustrator',
        '3DS Max',
        'Visual Communication'
    ]

    // Array of skills for the web dev card
    const webDevSkills = [
        'HTML',
        'SASS',
        'BEM',
        'JavaScript',
        'React',
        'Axios',
        'Node.js',
        'Express',
        'Git',
        'Postman'
    ]


    return (
        <div className='wrapper' id='home'>
            <header className='header'>
                <div className='header__container'>
                    <div className='header__content'>
                        <img className='header__img' src={Mememe} alt="Cristian Arostegui's face, or not?" />
                        <div className='header__info'>
                            <h1 className='header__info-title'>Cristian Arostegui G.</h1>
                            <p className='header__info-text'>UX designer / Web developer based in Victoria, BC, Canada</p>
                        </div>
                    </div>
                    <div className='header__icons'>
                        <Link className='header__icons-link' to={{ pathname: 'https://github.com/carosteguig' }} target="_blank">
                            <img className='header__icons-img' src={GithubIcon} alt="Github button link" />
                        </Link>
                        <Link className='header__icons-link' to={{ pathname: 'mailto:carosteguig@gmail.com' }} target="_blank"> {/*Need to sort the mailto link problem*/}
                            <img className='header__icons-img' src={EmailIcon} alt='email button link' />
                        </Link>
                        <Link className='header__icons-link' to={{ pathname: 'https://www.linkedin.com/in/cristianarosteguig/' }} target="_blank">
                            <img className='header__icons-img' src={LinkedinIcon} alt='linkedin button link' />
                        </Link>
                    </div>
                </div>
            </header>

            <main className='main'>
                <section className='main-about' id='about'>
                    <div className='main-about__intro'>
                        <h2 className='main-about__title main-titles'>// about</h2>
                        <p className='main-about__text-single'>Chilean furniture designer turned UX designer and Web developer.</p>
                        <p>Hola! Nice to meet you!
                            For over 10 years I have honed my design and attention to detail skills in the furniture design industry. In the last 3 years I have brought this experience to compliment web development and UX design.
                            You may not sit on a website, but just like furniture, they need to be functional, beautiful and user-friendly ;). I’ve got that covered!
                            When I’m not coding and designing, you can find me running around after my two kiddos, playing tennis or futbol (I have a hard time calling it soccer!) and watching movies that my partner would describe as boringly artistic.
                        </p>
                    </div>
                    <div className='main-about__cards'>
                        {/* Skills card- reusable component */}
                        <SkillCard
                            image={DesignerIcon}
                            altText='pen drawing'
                            title='Designer'
                            description='Trying not to get complicated with simplicity, but simplicity is quite complicated. I love designing easy user interactions'
                            skillsTitle='Skills'
                            skills={designerSkills}
                        />
                        {/* Skills card- reusable component */}
                        <SkillCard
                            image={WebDevIcon}
                            altText='code icon'
                            title='Web Developer'
                            description='You know that feeling when a line of code works! Looking forward to a career full of those endorphin rushes'
                            skillsTitle='Skills'
                            skills={webDevSkills}
                        />
                    </div>
                </section>
                <section className='main-projects' id='projects'>
                    <h2 className='main-projects__title main-titles'>// projects</h2>
                    <div className='main-projects__cards'>
                        <div className='main-projects__cards-item'>
                            {/* Project card- reusable component */}
                            <ProjectCard
                                name='Portfolio'
                                description='Oh yes, I am adding my portfolio. While designing and coding this site, I enhance my knowledge on by using reusable components such as the
                                about cards section, the projects cards and buttons section'
                                tags='REACT / SASS / BEM  / REUSABLE COMPONENTS'
                                text1='Demo'
                                webAddress='https://cristianag-portfolio.herokuapp.com/'
                                text2='Repository'
                                webAddress2='https://github.com/carosteguig/cristian-arostegui-portfolio'
                            />
                            <img className='main-projects__cards-img' src={Portfolio} alt='Screens samples of simple meal project' />
                        </div>
                        <div className='main-projects__cards-item'>
                            {/* Project card- reusable component */}
                            <ProjectCard
                                name='Simple Meal'
                                description='A recipe web app that allows users to create their own meal plans. Users can choose between 1 to 5 different 
                                ingredients they wish to use up and get up to 10 recipes based on those ingredients. The goal was to simplify meal planning, 
                                reduce food waste and help people stay on budget by using foods they already have on hand.'
                                tags='REACT / SASS / BEM  / AXIOS / NODE.js / EXPRESS'
                                text1='Demo'
                                webAddress='https://simple-meal-client-react.herokuapp.com/'
                                text2='Repository'
                                webAddress2='https://github.com/carosteguig/capstone-client'
                            />
                            <img className='main-projects__cards-img' src={SimpleMeal} alt='Screens samples of simple meal project' />
                        </div>
                        <div className='main-projects__cards-item'>
                            {/* Project card- reusable component */}
                            <ProjectCard
                                name='CampIt!'
                                description='UX case study. Design proposal for a more user-friendly online campsite booking platform in Vancouver Island, 
                                Canada (if you’ve ever tried to camp on this beautiful island, you’ll know the frustration of the current sites!). 
                                Currently working on adding the full study to the portfolio. In the meantime, please review the study in PDF format.'
                                tags='FIGMA / MIRO'
                                text1='Review Study'
                                webAddress='https://drive.google.com/file/d/1-5nQcuB7Nlx4N0z6mMOOsb4FRRiwn7e-/view'
                                text2='Prototype'
                                webAddress2='https://www.figma.com/proto/npl6IJhacFvtqcC0FbWiw5/Udacity-UX-course-file?node-id=251%3A585&scaling=scale-down'
                            />
                            <img className='main-projects__cards-img' src={CampIt} alt='Screens samples of CampIt project' />
                        </div>
                        <div className='main-projects__cards-item'>
                            {/* Project card- reusable component */}
                            <ProjectCard
                                name='Furniture Design'
                                description='Before entering the world of web development and UX design, I honed my design, attention to detail and creative problem-solving skills while ensuring positive relationships with clients in the furniture design industry. This design background, now coupled with the hard coding skills, help me create functional and beautiful products. '
                                tags='AUTOCAD / 3DS-MAX'
                                text1='Arostegui Studio'
                                webAddress='https://www.douglasmagazine.com/arostegui-studio-creates-furniture-blends-form-function/'
                                text2='Caramba'
                                webAddress2='https://wp.vancouver.interiordesignshow.com/embedded/2020/05/ids-360-virtual-series-caramba-furniture/'
                            />
                            <img className='main-projects__cards-img' src={FurnDesign} alt='Screens samples of CampIt project' />
                        </div>
                    </div>
                </section>
                <section className='main-contact' id='contact'>
                    <h2 className='main-contact__title main-titles'>// contact me</h2>
                    <div className='main-contact__content'>
                        <p className='main-contact__text'>Say hi, don't be shy! I would love to hear from you. I spent some time designing and coding this
                            portfolio. Let me know how I did! Feedback is always welcome! (assuming no one looking at this is a crazy mean troll of course…).

                        </p>
                        <p className='main-contact__text'>
                            You can find me on any of these links below or on your right, depending if you are looking at this on a mobile phone or tablet/desktop. Thanks for looking!
                        </p>
                    </div>
                    <p className='main-contact__text--bottom'>
                        If you ever  find yourself  in beautiful Victoria, BC, let me know. I’m always happy to chat about development and design
                        (or futbol or tennis or many other random topics) over a cup of coffee.
                    </p>
                </section>
            </main>
            <footer className='footer'>
                <div className='footer__container'>
                    <img className='footer__logo' src={Logo} alt='Cristian Arostegui logo' />
                    <p className='footer__content'>Designed and developed by Cristian Arostegui G // 2022</p>
                </div>
            </footer>

        </div>

    );
}
