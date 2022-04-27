import './HomePage.scss';
import { Link } from 'react-router-dom';
import LegoFace from '../../assets/images/images/Lego-face-imgSmall.svg';
// import MeFace from '../../assets/images/images/Lego-face-img2.png';
import GithubIcon from '../../assets/images/icons/github-icon.svg';
import LinkedinIcon from '../../assets/images/icons/linkedin-icon.svg';
import EmailIcon from '../../assets/images/icons/email-icon.svg';
import DesignerIcon from '../../assets/images/icons/designer-icon.svg';
import WebDevIcon from '../../assets/images/icons/webDev-icon.svg';
import SimpleMeal from '../../assets/images/images/Simple-Meal-img.png';
import CampIt from '../../assets/images/images/CampIt-img.png';
import Logo from '../../assets/images/logo/logo-circle2.png';

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

    // function handleMouseEnter(e) {
    //     console.log(e.target);
    // }

    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='header__container'>
                    <div className='header__content'>
                        <img className='header__img' src={LegoFace} alt="Cristian Arostegui's face, or not?"
                        // onMouseEnter={handleMouseEnter}
                        />
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
                            description='Trying not to get complicated with simplicity, but simplicity is quite complicated. I love easy interactions'
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
                <section className='main-projects' id='projects'>
                    <h2 className='main-projects__title main-titles'>// projects</h2>
                    <div className='main-projects__cards'>
                        <div className='main-projects__cards-item'>
                            <ProjectCard
                                name='Simple Meal'
                                description='A recipe web app that allows users to create their own meal plans. Users can choose between 1 to 5 different ingredients and they get up to 10 recipes based on those ingredients.'
                                tags='REACT  SASS  BEM  AXIOS  NODE.js  EXPRESS'
                                text1='Live Site'
                                webAddress='https://simple-meal-client-react.herokuapp.com/'
                                text2='Repository'
                                webAddress2='https://github.com/carosteguig/capstone-client'
                            />
                            <img className='main-projects__cards-img' src={SimpleMeal} alt='Screens samples of simple meal project' />
                        </div>
                        <div className='main-projects__cards-item'>
                            <ProjectCard
                                name='CampIt!'
                                description='UX case study. Design proposal for user friendly online campsite booking platform in Vancouver Island, Canada. Currently working on adding the full study to the portfolio. In the meantime, please review the study in PDF format.'
                                tags='FIGMA   MIRO'
                                text1='Review Study'
                                webAddress='https://drive.google.com/file/d/1-5nQcuB7Nlx4N0z6mMOOsb4FRRiwn7e-/view'
                                text2='Prototype'
                                webAddress2='https://www.figma.com/proto/npl6IJhacFvtqcC0FbWiw5/Udacity-UX-course-file?node-id=251%3A585&scaling=scale-down'
                            />
                            <img className='main-projects__cards-img' src={CampIt} alt='Screens samples of CampIt project' />
                        </div>
                    </div>
                </section>
                <section className='main-contact'>
                    <h2 className='main-contact__title main-titles'>// contact me</h2>
                    <div className='main-contact__content'>
                        <p className='main-contact__text'>Please don’t be rude and say hi. Would ove to hear from you.
                            I did spend some time designing and coding this portfolio. Let me know how I did, I would really appreciate it!
                        </p>
                        <p className='main-contact__text'>
                            You can find me on any of these links. Thanks for looking!
                        </p>                       
                    </div>
                    <p className='main-contact__text--bottom'>
                        If you are in Beatuful Victoria, British Columbia, let me know. I would be more than happy
                         to take you for coffee and talk about UX-Web-Furniture design, tennis, 
                         footbal (soccer for just a few), movies and maybe why I used a lego character that looks like my wife as a profile photo!!
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
