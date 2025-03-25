<template>
   <section id="home" class="home">
      <div class="greetings">
         <div>
            <h2>Hi, There!</h2>
            <h1>I'm Pedro Rizquez</h1>
            <p>Passionate about building efficient solutions through code.</p>
         </div>
         <div>
            <img src="@/assets/images/freelancer.svg" alt="">
         </div>
      </div>
      <div class="resume">
         <p class="es">Download CV (es)</p>
         <p class="en">Download CV (en)</p>
      </div>
   </section>

   <!-- <section id="about" class="about">
      <div class="experience">
         <div class="me">
            <p>I am a software developer with experience in process automation, web development and cloud infrastructure management.</p>
            <p>I currently work as a lead developer at LETSMEP, where I lead custom solutions using technologies such as Python, C#, Azure and Docker.</p>
            <p>I have specialised training in artificial intelligence, big data and cross-platform development, and I am always looking for new challenges to boost my professional growth.</p>
            <p class="slogan">Code that optimises, solutions that transform.</p>
         </div>
         <div class="information">
            <p><span>Speciality:</span> Backend & Cloud Developer with focus on automation, artificial intelligence and DevOps</p>
            <p><span>Experience:</span> 2 years and 3 months</p>
            <p><span>Address:</span> Barcelona, Spain</p>
            <p><span>Email:</span> pedro.rizquez.94@hotmail.com</p>
            <p><span>Phone:</span> +34 633504225</p>
            <div>
               <a href="https://github.com/Rizquez" target="_blank"><img src="@/assets/images/github.png" alt="Github"></a>
               <a href="https://www.linkedin.com/in/pedro-rizquez/" target="_blank"><img src="@/assets/images/linkedin.png" alt="LinkedIn"></a>
            </div>
         </div>
      </div>
   </section> -->

   <!-- <section>
      <div>
         <h4>Jummy</h4>
         <p>App to digitise the restaurant experience, allowing customers to browse menus, manage orders and pay from their mobile. It optimises restaurant operations and improves the user experience.</p>
         <p><span>Technologies:</span> Python, SQL, JavaScript, HTML, CSS, Auth0, Netlify, Render, Clever Cloud.</p>
         <p><span>Note:</span> You will need credentials to access, please request them in case you want to test the application.</p>
         <div>
            <a href="https://karla-project.onrender.com/" target="_blank">Deployment</a>
            <a href="https://github.com/Rizquez/eco_balance" target="_blank">Repository</a>
         </div>
      </div>
      <div>
         <h4>EcoBalance</h4>
         <p>Interface to calculate and analyse CO<sub>2</sub> sequestration by tree species, promoting sustainable solutions to climate change.</p>
         <p><span>Technologies:</span> Python, SQL, JavaScript, HTML, CSS, Render, Clever Cloud.</p>
         <p><span>Note:</span> The service may take a couple of seconds to load the first time as the server must be up if it is not active.</p>
         <div>
            <a href="https://jummy-ifp.netlify.app/" target="_blank">Deployment</a>
            <a href="https://github.com/Rizquez/Jummy" target="_blank">Repository</a>
         </div>
      </div>
   </section> -->
</template>

<style scoped>
.home {
   padding-top: 50px;
}
.greetings {
   display: flex;
   margin: 0 auto;
   padding: 40px 100px 0px 100px;
   justify-content: space-between;
}
.greetings img {
   max-width: 500px;
}
.greetings h1 {
   font-size: var(--h1-font);
   color: var(--accent-100);
}
.greetings h2 {
   font-size: var(--h2-font);
   color: var(--accent-100);
}
.greetings p {
   font-size: var(--p-font);
   font-style: oblique;
   color: var(--primary-200);
}

.resume {
   display: flex;
   flex-direction: row;
   justify-content: right;
   align-items: center;
   padding-right: 100px;
   gap: 20px;
}
.resume .en, .es {
   cursor: pointer;
   font-size: var(--p-font);
   color: var(--text-100);
   text-decoration: underline;
}
.resume .en:hover, .es:hover {
   color: var(--primary-100);
}

.about {
   padding-top: 200px;
}
.about h2 {
   text-align: center;
   font-size: var(--h2-font);
   color: var(--accent-100);
}

/* .experience {
   display: flex;
   flex-direction: row;
   padding: 0px 100px;
   gap: 40px;
}
.experience > div {
   flex: 1;
   border: 3px solid var(--primary-300);
   background-color: var(--bg-200);
   padding: 20px;
}
.experience p {
   color: var(--accent-100);
   text-align: justify;
}
.experience span {
   font-weight: bolder;
}
.experience .slogan {
   font-style: oblique;
   text-align: right;
   padding-top: 40px;
}

.information div {
   display: flex;
   justify-content: right;
   gap: 10px;
   padding-top: 15px;
}
.information img {
   max-width: 40px;
} */
</style>