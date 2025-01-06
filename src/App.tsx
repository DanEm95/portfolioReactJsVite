function App() {
  return (
    // h-[100vh]
    <main className="bg-gray-800 text-white"> 


      {/* Navbar */}
      <nav className="border-b flex justify-between items-center p-5 md:px-10">
        <div className="text-xl md:text-2xl font-bold">Daniel Malychko</div>
        <ul className="flex justify-between items-center gap-10">
          <a href="" className="text-sm md:text-xl">Home</a>
          <a href="" className="text-sm md:text-xl">Projects</a>
          <a href="" className="text-sm md:text-xl">About</a>
        </ul>
      </nav>
      {/* Navbar */}


      {/* Header */}
      <header className="grid grid-cols-1 md:grid-cols-2">
        <img src="Assets/headshot.png" className="p-20 md:p-32" />
        <div className="text flex flex-col items-center text-center md:text-start md:items-start gap-5 justify-center p-20 md:p-32 md:pl-10">
          <div className="text-7xl font-bold">Hi, I'm Daniel!</div>
          <div className="text-xl text-gray-300">
            I'm a full-stack developer based in Hamburg, Germany.<br />
            Working towards creating software that makes life easier<br />
            and more meaningful.
          </div>
          <button className="bg-green-700 p-3 px-6 rounded-lg hover:bg-green-900 transition">
            Projects
          </button>
        </div>
      </header>
      <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
        </svg>
      </div>
      {/* Header */}


      {/* About Me */}
      <section className="p-10 md:p-32">
        <div className="text-4xl text-center font-bold">About Me</div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">

          <div className="flex flex-col gap-3">
            <div className="text-xl font-bold">Get to know me!</div>
            <div className="text-lg text-gray-300">
              Hi, my name is Daniel Malychko and I am a highly ambitious, self-motivated and driven software engineer.
            </div >
            <div className="text-lg text-gray-300">
              I graduated from the IHK, Hamburg in 2025 as Computer Science Expert Subject Area: Software Development and have been working in this field ever since.
            </div >
            <div className="text-lg text-gray-300">
              I have a wide range of hobbies and passions that keep me busy. From reading, sports, travelling to creating wonderful software, I am always looking for new experiences and love to keep myself busy and learn new things.
            </div>
            <div className="text-lg text-gray-300">
              I believe you should never stop growing and that's what I strive for, I have a passion for technology and a desire to push the boundaries of what is possible. I am excited to see where my career takes me and am always open to new opportunities 🙂!
            </div>
          </div>

          <div className="2">
            <div className="text-xl font-bold">My Skills!</div>
            <div className="flex flex-wrap py-3 space-x-3 gap-4">
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                HTML
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                CSS
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                JAVASCRIPT
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                REACT JS
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                NEXT JS
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                GIT
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                PYTHON
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                FLASK
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                OPENEDGE
              </button>
              <button className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-gray-200 px-5">
                C#
              </button>

            </div>
            <img src="/Assets/hero-image.png" className="p-20" />
          </div>
        </div>
      </section>
      {/* About Me */}


      {/* Projects */}
      <section className="p-10 md:px-32">
        <div className="text-4xl text-center font-bold">Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
            <img src="/Assets/passwordManager.png" className="rounded-2xl" />
            <div className="text flex flex-col justify-center items-start gap-3">
              <div className="text-3xl font-bold">Password Manager</div>
              <div className="text-xl text-gray-300">
                passwordManager is a simple Python application that helps you securely store and manage your passwords.
              </div>
              <div className="flex">
                <img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10 w-10 rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
            <img src="/Assets/passwordManager.png" className="rounded-2xl" />
            <div className="text flex flex-col justify-center items-start gap-3">
              <div className="text-3xl font-bold">Blog With Users</div>
              <div className="text-xl text-gray-300">
                blogWithUsers is a Python web application that enables global communication where users share thoughts, stories and connections through an intuitive digital interface.
              </div>
              <div className="flex">
                <img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10 w-10 rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 space-x-5 space-y-5">
            <img src="/Assets/passwordManager.png" className="rounded-2xl" />
            <div className="text flex flex-col justify-center items-start gap-3">
              <div className="text-3xl font-bold">PHP MySql Website</div>
              <div className="text-xl text-gray-300">
                The php-mysql-website is a MVC3 based web application that uses PHP for backend logic and XAMPP MySQL-PDO for database management, with structured user and admin areas while still under development.
              </div>
              <div className="flex">
                <img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-10 w-10 rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </div>
          </div>
          
      </section>
      {/* Projects */}
      
      
      {/* footer */}
      <div className="px-10 md:px-32">
        <div className="border "></div>
      </div>
      <div className="flex justify-between items-center p-10 px-32">
        <div className="">© 2025 Daniel Malychko</div>
        <div className="">
          <img src="https://s.yimg.com/fz/api/res/1.2/BMbAkWtLKPyUuTo9jK0WNQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/1a0d1629-cdce-359c-81fe-b83c39d6c2da/t_500x300" className="h-7 w-7 rounded-full" />
        </div>
      </div>
      {/* Footer */}


    </main>
  )
}
export default App
