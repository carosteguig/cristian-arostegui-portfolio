import './HomePage.scss';
import { Link } from 'react-router-dom';
import LegoFace from '../../assets/images/images/Lego-face-img.png';
import MeFace from '../../assets/images/images/Lego-face-img2.png';
import GithubIcon from '../../assets/images/icons/github-icon.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import EmailIcon from '../../assets/images/icons/email-icon.svg';
import DesignerIcon from '../../assets/images/icons/designer-icon.svg';
import WebDevIcon from '../../assets/images/icons/webDev-icon.svg';
import SimpleMeal from '../../assets/images/images/Simple-Meal-img.png';
import CampIt from '../../assets/images/images/CampIt-img.png';
import Arrow from '../../assets/images/icons/arrow1.svg';
// import Pattern from '../../assets/images/images/pattern-background.svg';
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
        <div className='wrapper'>
            <header className='header'>
                <div className='header__container'>
                    <div className='header__content'>
                        {/* <img className='header__background' src={Pattern} alt='background pattern design' /> */}
                        <img className='header__img' src={LegoFace} alt="Cristian Arostegui's face, or not?" onMouseOver={MeFace} />
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
                            <img className='header__icons-img' src={EmailIcon} />
                        </Link>
                        <Link className='header__icons-link' to={{ pathname: 'https://www.linkedin.com/in/cristianarosteguig/' }} target="_blank">
                            <img className='header__icons-img' src={LinkedinIcon} alt='linkedin button link' />
                        </Link>
                    </div>
                </div>
            </header>

            <main className='main'>
                <section className='main-about'>
                    <div className='main-about__intro'>
                        <h2 className='main-about__title main-titles'>// about</h2>
                        <p className='main-about__text-single'>Furniture designer turned UX designer and Web developer.</p>
                        <p>For the last 3 years I have been learning about UX and UI design and my goal is to combine these skills with web development.
                            I really believe that by combining dev and designs skills, I can design and develop better products. Just like in furniture,
                            by learning how to fabricate and build furniture, I gained a whole new perspective on how to design furniture.<span className='main-about__text-link'>Learn more...</span></p>
                    </div>
                    <div className='main-about__cards'>
                        <SkillCard
                            image={DesignerIcon}
                            altText='pen drawing'
                            title='Designer'
                            description='Trying not to get complicated with simplicity, but simplicity is quite complicated'
                            skillsTitle='Skills'
                            skills={designerSkills}
                        />
                        <SkillCard
                            image={WebDevIcon}
                            altText='code icon'
                            title='Web Developer'
                            description='You know the feeling when a line of code works!  Looking forward to getting many more of those. Excited to what comes later'
                            skillsTitle='Skills'
                            skills={webDevSkills}
                        />
                    </div>
                    {/* <p className='main-about__link'>projects</p>  */}
                </section>
                <section className='main-projects'>
                    <h2 className='main-projects__title main-titles'>// projects</h2>
                    <div className='main-projects__cards'>
                        <div className='main-projects__cards-item'>
                            <ProjectCard
                                name='Simple Meal'
                                description='A recipe web app that allows users to create their own meal plans. Users can choose between 1 to 5 different ingredients and they get up to 10 recipes based on those ingredients.'
                                tags='REACT  SASS  BEM  AXIOS  NODE.js  EXPRESS'
                            />
                            <img className='main-projects__cards-img' src={SimpleMeal} alt='Screens samples of simple meal project' />
                        </div>
                        <div className='main-projects__cards-item'>
                            <ProjectCard
                                name='CampIt!'
                                description='UX case study_Design proposal for user friendly online campsite booking platform in Vancouver Island, Canada'
                                tags='FIGMA   MIRO'
                            />
                            <img className='main-projects__cards-img' src={CampIt} alt='Screens samples of CampIt project' />
                        </div>
                    </div>
                </section>
                <section className='main-contact'>
                    <h2 className='main-contact__title main-titles'>// contact me</h2>
                    <div className='main-contact__content'>
                        <p className='main-contact__text'>Please don’t be rude and say hi,
                            I spent some time designing and coding this portfolio. Let me know how I did!
                        </p>
                        <p className='main-contact__text'>
                            You can find me on any of these links. Thanks for looking!
                        </p>
                    </div>
                    {/* <img className='main-contact__arrow' src={Arrow} alt='arrow' /> */}
                </section>
            </main>
            <footer className='footer'>
                <p className='footer__content'>Designed and developed by Cristian Arostegui G // 2022</p>
                <img className='footer__content-arrow' src={Arrow} alt='arrow' />
            </footer>

        </div>

    );
}
