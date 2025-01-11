import { useEffect, useState } from "react";
import $ from 'jquery';
import './index.css';
import './App.css';



function App() {
  const [activeSection, setActiveSection] = useState('home');
  // add fake historie to activate the browser back button
  // if browser backbutton is clicked jump to the top of the page  
  useEffect(() => {
    window.history.pushState({ page: 1 }, "", window.location.href);
    const handlePopState = () => {
      const targetElement = document.getElementById("home");
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState({ page: 1 }, "", window.location.href);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // prevent URL from changing when a href from a button is clicked
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.slice(1);
    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };


  // changing header button logic
  const getButtonClass = (section: string): string => {
    return activeSection === section ? "btn-new primary-dark" : "btn-new silent dark-mode";
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'home', 'projects'];
      
      for (const section of sections) {
        const $element = $(`#${section}`);
        if ($element.offset()?.top && 
            $element.offset()!.top - 100 < $(window).scrollTop()! && 
            $element.offset()!.top + 100 > $(window).scrollTop()!) {
          setActiveSection(section);
          break;
        }
      }
    };

    $(window).on('scroll', handleScroll);
    handleScroll(); // Check initial state
  
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);
  

  
  return (
    <main className="bg-custom text-custom">

      {/* Navbar */}
      <header className="dark css-1ryjgam border-b">
      <nav className="flex justify-between items-center p-5 md:px-10">
        <div className="text-xl md:text-2xl font-bold">Daniel Malychko</div>
        <ul className="flex justify-between items-center gap-2">
          <a href="#projects" onClick={handleClick} className={getButtonClass('projects')}><span className="css-17qgsod">Projects</span></a>
          <a href="#about" onClick={handleClick} className={getButtonClass('about')}><span className="css-17qgsod">About</span></a>
          <a href="#home" onClick={handleClick} className={getButtonClass('home')}><span className="css-17qgsod">Home</span></a>
        </ul>
      </nav>
      </header>
      {/* Navbar */}


      {/* Header */}
      <header id="home" className="grid grid-cols-1 md:grid-cols-2 css-1ytyau7">
        <img src="Assets/headshot.png" className="p-20 md:p-32" />
        <div className="text flex flex-col items-center text-center md:text-start md:items-start gap-5 justify-center p-20 md:p-32 md:pl-10">
          <div className="text-7xl font-bold">Hi, I'm Daniel!</div>
          <div className="text-xl text-gray-300">
            I'm a full-stack developer based in Hamburg, Germany.<br />
            Working towards creating software that makes life easier<br />
            and more meaningful.
          </div>
          <a className="btn-new secondary-dark" href="#projects" onClick={handleClick}><span className="css-17qgsod">Projects</span></a>
        </div>
      </header>
      <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
        </svg>
      </div>
      {/* Header */}


      {/* About Me */}
      <section id="about" className="p-10 md:p-32">
        <div className="text-4xl text-center font-bold">About Me</div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10">

          <div className="flex flex-col gap-3">
            <div className="active css-10flozr">
              <div className="outline"></div>
              <div className="active css-5ootq8">
                <div className="bg-custom rounded-lg p-6 text-white">
                    <div className="text-xl font-bold pb-1">Get to know me!</div>
                    <div className="text-lg py-4">
                      Hi, my name is Daniel Malychko and I am a highly ambitious, self-motivated and driven software engineer.
                    </div >
                    <div className="text-lg pb-4">
                      In 2025 I graduated with a degree in software development from the IHK Hamburg. Since then I have been designing digital worlds and living my dream of technology and creativity.
                    </div >
                    <div className="text-lg pb-4">
                      I have a wide range of hobbies and passions that keep me busy. From reading, sports, travelling to creating wonderful software, I am always looking for new experiences and love to keep myself busy and learn new things.
                    </div>
                    <div className="text-lg">
                      I believe you should never stop growing and that's what I strive for, I have a passion for technology and a desire to push the boundaries of what is possible. I am excited to see where my career takes me and am always open to new opportunities 🙂!
                    </div>
                    </div>
                </div>
              </div>
            </div>


          <div className="2 px-8 py-4 sm:py-0">
            <div className="text-xl font-bold flex justify-center">My Skills!</div>
            <div className="flex flex-wrap justify-center items-center gap-6 py-4">
              <a className="btn-new secondary-dark"><span className="css-17qgsod">HTML</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">CSS</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">JAVASCRIPT</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">REACT JS</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">GIT</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">PYTHON</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">FLASK</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">OPENEDGE</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">C#</span></a>
              <a className="btn-new secondary-dark"><span className="css-17qgsod">PHP</span></a>
            </div>
            <img src="/Assets/hero-image.png" className="p-20" />
          </div>

        </div>
      </section>
      {/* About Me */}


      {/* Projects */}

      <section id="projects" className="p-10 md:px-32">
        <div className="text-4xl text-center font-bold">Projects</div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
            <div className="css-1i54mzy">
              <div className="css-9ofyvk eok8cxg2 snipcss0-3-3-9"><svg viewBox="0 0 68 251" fill="none" className="snipcss0-4-9-10">
                      <g clipPath="url(#clip0_360_14725)" className="snipcss0-5-10-11">
                          <path d="M67 1.01262L5.67 60.3426C5.67 60.3426 1 65.0126 1 71.6726C1 78.3326 28 242.343 29 246.343C30 250.343 35.33 251.343 35 245.673C34.71 240.703 38.22 175.013 38.22 154.333C38.22 152.333 38.44 149.223 39.11 147.663C40.05 145.463 43 144.113 43 144.113L66.33 123.673C66.33 123.673 67.66 0.34264 67 1.00264V1.01262Z" fill="#F4834F" stroke="#452650" strokeMiterlimit="10"></path>
                          <path d="M66.3401 123.683C66.3401 123.683 66.5201 106.953 66.7201 85.8525L10.0601 131.673C18.0101 181.283 28.4001 243.893 29.0101 246.353C30.0101 250.353 35.3401 251.353 35.0101 245.683C34.7201 240.713 38.1201 176.803 38.1201 156.123C38.1201 154.123 38.3401 151.013 39.0101 149.453C39.9501 147.253 43.9001 143.673 43.9001 143.673L66.3401 123.673V123.683Z" fill="#DF5128" stroke="#452650" strokeMiterlimit="10"></path>
                      </g>
                      <defs className="snipcss0-5-10-12">
                          <clipPath id="clip0_360_14725" className="snipcss0-6-12-13">
                              <rect width="68" height="251" fill="white"></rect>
                          </clipPath>
                      </defs>
                  </svg>
                </div>

              <div className="css-1si77cx eok8cxg1 snipcss0-3-3-14"><svg viewBox="0 0 68 251" fill="none" className="snipcss0-4-14-15">
                      <g clipPath="url(#clip0_360_14726)" className="snipcss0-5-15-16">
                          <path d="M1.18376 1.01262L62.5138 60.3426C62.5138 60.3426 67.1838 65.0126 67.1838 71.6726C67.1838 78.3326 40.1838 242.343 39.1838 246.343C38.1838 250.343 32.8538 251.343 33.1838 245.673C33.4738 240.703 29.9638 175.013 29.9638 154.333C29.9638 152.333 29.7438 149.223 29.0738 147.663C28.1338 145.463 25.1838 144.113 25.1838 144.113L1.85381 123.673C1.85381 123.673 0.523761 0.34264 1.18376 1.00264V1.01262Z" fill="#F4834F" stroke="#452650" strokeMiterlimit="10"></path>
                          <path d="M1.85388 123.683C1.85388 123.683 1.67388 106.953 1.47388 85.8525L58.1339 131.673C50.1839 181.283 39.7938 243.893 39.1838 246.353C38.1838 250.353 32.8538 251.353 33.1838 245.683C33.4738 240.713 30.0739 176.803 30.0739 156.123C30.0739 154.123 29.8538 151.013 29.1838 149.453C28.2438 147.253 24.2939 143.673 24.2939 143.673L1.85388 123.673V123.683Z" fill="#DF5128" stroke="#452650" strokeMiterlimit="10"></path>
                      </g>
                      <defs className="snipcss0-5-15-17">
                          <clipPath id="clip0_360_14726" className="snipcss0-6-17-18">
                              <rect width="68" height="251" fill="white"></rect>
                          </clipPath>
                      </defs>
                  </svg>
                </div>
                  
              <div className="tracing css-rvu8qh evjj7za0 snipcss0-3-3-23">
                  <div className="background snipcss0-4-23-24"><span className="css-1lbs7b evjj7za2 snipcss0-5-24-25">Loading image for Find and fix the problem, no matter where it occurs media</span></div>
                  <div className="arcade active css-1jxtjvn eh3x5v20 snipcss0-4-23-26">
                      <div className="eh3x5v21 css-18nadfl e9fbm7j2 snipcss0-5-26-27"><iframe src="https://player.vimeo.com/video/1045059130?autoplay=1&amp;dnt=1&amp;background=1" allow="accelerometer; encrypted-media; fullscreen; gyroscope; picture-in-picture" loading="lazy" className="css-srctpx e9fbm7j1 snipcss0-6-27-28"></iframe></div>
                  </div>
              </div>
          </div>

          <div className="text flex flex-col justify-center items-start gap-3">
            <div className="text-3xl font-bold">Password Manager</div>
            <div className="text-xl text-gray-300">
              passwordManager is a simple Python application that helps you securely store and manage your passwords.
            </div>
            <div className="flex">
              <a href="https://github.com/DanEm95/passwordManager" target="_blank"><img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10 w-10 rounded-full" /></a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </div>
        </div>


          <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
            <div className="css-1i54mzy">
              <div className="css-9ofyvk eok8cxg2 snipcss0-3-3-9"><svg viewBox="0 0 68 251" fill="none" className="snipcss0-4-9-10">
                      <g clipPath="url(#clip0_360_14725)" className="snipcss0-5-10-11">
                          <path d="M67 1.01262L5.67 60.3426C5.67 60.3426 1 65.0126 1 71.6726C1 78.3326 28 242.343 29 246.343C30 250.343 35.33 251.343 35 245.673C34.71 240.703 38.22 175.013 38.22 154.333C38.22 152.333 38.44 149.223 39.11 147.663C40.05 145.463 43 144.113 43 144.113L66.33 123.673C66.33 123.673 67.66 0.34264 67 1.00264V1.01262Z" fill="#F4834F" stroke="#452650" strokeMiterlimit="10"></path>
                          <path d="M66.3401 123.683C66.3401 123.683 66.5201 106.953 66.7201 85.8525L10.0601 131.673C18.0101 181.283 28.4001 243.893 29.0101 246.353C30.0101 250.353 35.3401 251.353 35.0101 245.683C34.7201 240.713 38.1201 176.803 38.1201 156.123C38.1201 154.123 38.3401 151.013 39.0101 149.453C39.9501 147.253 43.9001 143.673 43.9001 143.673L66.3401 123.673V123.683Z" fill="#DF5128" stroke="#452650" strokeMiterlimit="10"></path>
                      </g>
                      <defs className="snipcss0-5-10-12">
                          <clipPath id="clip0_360_14725" className="snipcss0-6-12-13">
                              <rect width="68" height="251" fill="white"></rect>
                          </clipPath>
                      </defs>
                  </svg>
                </div>

              <div className="css-1si77cx eok8cxg1 snipcss0-3-3-14"><svg viewBox="0 0 68 251" fill="none" className="snipcss0-4-14-15">
                      <g clipPath="url(#clip0_360_14726)" className="snipcss0-5-15-16">
                          <path d="M1.18376 1.01262L62.5138 60.3426C62.5138 60.3426 67.1838 65.0126 67.1838 71.6726C67.1838 78.3326 40.1838 242.343 39.1838 246.343C38.1838 250.343 32.8538 251.343 33.1838 245.673C33.4738 240.703 29.9638 175.013 29.9638 154.333C29.9638 152.333 29.7438 149.223 29.0738 147.663C28.1338 145.463 25.1838 144.113 25.1838 144.113L1.85381 123.673C1.85381 123.673 0.523761 0.34264 1.18376 1.00264V1.01262Z" fill="#F4834F" stroke="#452650" strokeMiterlimit="10"></path>
                          <path d="M1.85388 123.683C1.85388 123.683 1.67388 106.953 1.47388 85.8525L58.1339 131.673C50.1839 181.283 39.7938 243.893 39.1838 246.353C38.1838 250.353 32.8538 251.353 33.1838 245.683C33.4738 240.713 30.0739 176.803 30.0739 156.123C30.0739 154.123 29.8538 151.013 29.1838 149.453C28.2438 147.253 24.2939 143.673 24.2939 143.673L1.85388 123.673V123.683Z" fill="#DF5128" stroke="#452650" strokeMiterlimit="10"></path>
                      </g>
                      <defs className="snipcss0-5-15-17">
                          <clipPath id="clip0_360_14726" className="snipcss0-6-17-18">
                              <rect width="68" height="251" fill="white"></rect>
                          </clipPath>
                      </defs>
                </svg>
              </div>
                  

              <div className="tracing css-rvu8qh evjj7za0 snipcss0-3-3-23">
                  <div className="background snipcss0-4-23-24"><span className="css-1lbs7b evjj7za2 snipcss0-5-24-25">Loading image for Find and fix the problem, no matter where it occurs media</span></div>
                  <div className="arcade active css-1jxtjvn eh3x5v20 snipcss0-4-23-26">
                      <div className="eh3x5v21 css-18nadfl e9fbm7j2 snipcss0-5-26-27"><iframe src="https://player.vimeo.com/video/1045072963?autoplay=1&amp;dnt=1&amp;background=1" allow="accelerometer;  encrypted-media; fullscreen; gyroscope; picture-in-picture" loading="lazy" className="css-srctpx e9fbm7j1 snipcss0-6-27-28"></iframe></div>
                  </div>
              </div>
          </div>


          <div className="text flex flex-col justify-center items-start gap-3">
            <div className="text-3xl font-bold">Blog With Users</div>
            <div className="text-xl text-gray-300">
              blogWithUsers is a Python web application that enables global communication where users share thoughts, stories and connections through an intuitive digital interface.
            </div>
            <div className="flex">
              <a href="https://github.com/DanEm95/blogWithUsers" target="__blank"><img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10 w-10 rounded-full" /></a>
              <a href="https://my-amazing-blog-with-users.onrender.com/" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg></a>
            </div>
          </div>
        </div>


          <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
            {/* <img src="/Assets/passwordManager.png" className="rounded-2xl" /> */}
            <div className="css-1i54mzy">
              <div className="css-9ofyvk eok8cxg2 snipcss0-3-3-9"><svg viewBox="0 0 68 251" fill="none" className="snipcss0-4-9-10">
                      <g clipPath="url(#clip0_360_14725)" className="snipcss0-5-10-11">
                          <path d="M67 1.01262L5.67 60.3426C5.67 60.3426 1 65.0126 1 71.6726C1 78.3326 28 242.343 29 246.343C30 250.343 35.33 251.343 35 245.673C34.71 240.703 38.22 175.013 38.22 154.333C38.22 152.333 38.44 149.223 39.11 147.663C40.05 145.463 43 144.113 43 144.113L66.33 123.673C66.33 123.673 67.66 0.34264 67 1.00264V1.01262Z" fill="#F4834F" stroke="#452650" strokeMiterlimit="10"></path>
                          <path d="M66.3401 123.683C66.3401 123.683 66.5201 106.953 66.7201 85.8525L10.0601 131.673C18.0101 181.283 28.4001 243.893 29.0101 246.353C30.0101 250.353 35.3401 251.353 35.0101 245.683C34.7201 240.713 38.1201 176.803 38.1201 156.123C38.1201 154.123 38.3401 151.013 39.0101 149.453C39.9501 147.253 43.9001 143.673 43.9001 143.673L66.3401 123.673V123.683Z" fill="#DF5128" stroke="#452650" strokeMiterlimit="10"></path>
                      </g>
                      <defs className="snipcss0-5-10-12">
                          <clipPath id="clip0_360_14725" className="snipcss0-6-12-13">
                              <rect width="68" height="251" fill="white"></rect>
                          </clipPath>
                      </defs>
                  </svg>
                </div>

              <div className="css-1si77cx eok8cxg1 snipcss0-3-3-14"><svg viewBox="0 0 68 251" fill="none" className="snipcss0-4-14-15">
                      <g clipPath="url(#clip0_360_14726)" className="snipcss0-5-15-16">
                          <path d="M1.18376 1.01262L62.5138 60.3426C62.5138 60.3426 67.1838 65.0126 67.1838 71.6726C67.1838 78.3326 40.1838 242.343 39.1838 246.343C38.1838 250.343 32.8538 251.343 33.1838 245.673C33.4738 240.703 29.9638 175.013 29.9638 154.333C29.9638 152.333 29.7438 149.223 29.0738 147.663C28.1338 145.463 25.1838 144.113 25.1838 144.113L1.85381 123.673C1.85381 123.673 0.523761 0.34264 1.18376 1.00264V1.01262Z" fill="#F4834F" stroke="#452650" strokeMiterlimit="10"></path>
                          <path d="M1.85388 123.683C1.85388 123.683 1.67388 106.953 1.47388 85.8525L58.1339 131.673C50.1839 181.283 39.7938 243.893 39.1838 246.353C38.1838 250.353 32.8538 251.353 33.1838 245.683C33.4738 240.713 30.0739 176.803 30.0739 156.123C30.0739 154.123 29.8538 151.013 29.1838 149.453C28.2438 147.253 24.2939 143.673 24.2939 143.673L1.85388 123.673V123.683Z" fill="#DF5128" stroke="#452650" strokeMiterlimit="10"></path>
                      </g>
                      <defs className="snipcss0-5-15-17">
                          <clipPath id="clip0_360_14726" className="snipcss0-6-17-18">
                              <rect width="68" height="251" fill="white"></rect>
                          </clipPath>
                      </defs>
                </svg>
              </div>
                  

              <div className="tracing css-rvu8qh evjj7za0 snipcss0-3-3-23">
                  <div className="background snipcss0-4-23-24"><span className="css-1lbs7b evjj7za2 snipcss0-5-24-25">Loading image for Find and fix the problem, no matter where it occurs media</span></div>
                  <div className="arcade active css-1jxtjvn eh3x5v20 snipcss0-4-23-26">
                      <div className="eh3x5v21 css-18nadfl e9fbm7j2 snipcss0-5-26-27"><iframe src="https://player.vimeo.com/video/1045286922?autoplay=1&amp;dnt=1&amp;background=1" allow="accelerometer;  encrypted-media; fullscreen; gyroscope; picture-in-picture" loading="lazy" className="css-srctpx e9fbm7j1 snipcss0-6-27-28"></iframe></div>
                  </div>
              </div>
          </div>


            <div className="text flex flex-col justify-center items-start gap-3">
              <div className="text-3xl font-bold">PHP MySql Website</div>
              <div className="text-xl text-gray-300">
                The php-mysql-website is a MVC3 based web application that uses PHP for backend logic and XAMPP MySQL-PDO for database management, with structured user and admin areas while still under development.
              </div>
              <div className="flex">
                <a href="https://github.com/DanEm95/php-mysql-website" target="__blank"><img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10 w-10 rounded-full" /></a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          </div>
          

      </section>
      {/* Projects */}
      
      
      {/* footer */}
      <div className="px-10 md:px-32 pt-12">
        <div className="border" style={{
          backgroundSize: '250% 100%',
          border: '1.5px solid transparent',
          borderImage: 'linear-gradient(120deg, #c83852, #b44092 25%, #6a5fc1 50%, #fa7faa, #ff9691) 1',
          width: '100%',
        }}>
        </div>
      </div>

      <div className="flex justify-between items-center p-10 px-32">
        <div className="" style={{
            background: 'linear-gradient(120deg, #c83852, #b44092 25%, #6a5fc1 50%, #fa7faa, #ff9691)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // fontSize: '24px'
          }}>© 2025 Daniel Malychko</div>

          <div className="relative h-6 w-6">
              <img 
                  src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" 
                  className="h-6 w-6 rounded-full" 
                  style={{ position: 'absolute', top: 0, left: 0 }} 
              />
              <div 
                  className="absolute inset-0 rounded-full" 
                  style={{
                      background: 'linear-gradient(120deg, #c83852, #b44092 25%, #6a5fc1 50%, #fa7faa, #ff9691)',
                      opacity: 0.5
                  }} 
              />
          </div>
      </div>
      {/* Footer */}


    </main>
  )
}
export default App
