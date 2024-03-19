import React from 'react'
import profilePic from '../img/fotoperfil.jpg';
function MonCV() {
  return (
    <div className="w-full max-w-screen-xl mx-auto md:py-8">
      <div className=" text-gray-700 p-4 px-16">
      <div className="w-full max-w-screen-xl mx-2 py-12 px-4 sm:px-10 lg:px-20 bg-stone-100 rounded-lg">
        <div className="text-center">
          <img
            src={profilePic} 
            alt="Imagen de Perfil"
            className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-orange-300 hover:border-orange-500 transition duration-300"
          />
          <h1 className="text-4xl font-bold text-orange-500 mt-4">YISMAEL DIAZ</h1>
          <p className="text-xl text-stone-400">Développeur Web</p>
          <section className="mt-8 text-center">
        
        <div className="flex justify-center mt-4 gap-4 flex-wrap">
          {/* Icono de Correo */}
          <a href="mailto:tuemail@example.com" className="flex flex-col items-center text-orange-500 hover:text-orange-600 transition duration-300">
            <i className="fas fa-envelope fa-2x"></i>
            <span>yismaeldiazh@gmail.com</span>
          </a>
          {/* Icono de Celular */}
          <a href="tel:+33760463110" className="flex flex-col items-center text-orange-500 hover:text-orange-600 transition duration-300">
            <i className="fas fa-phone-alt fa-2x"></i>
            <span>+33 7 60 46 31 10</span>
          </a>
          {/* Icono de LinkedIn */}
          <a href="https://www.linkedin.com/in/yismael-diaz-dev/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-orange-500 hover:text-orange-600 transition duration-300">
            <i className="fab fa-linkedin fa-2x"></i>
            <span>@yismael-diaz-dev</span>
          </a>
          {/* Icono de GitHub */}
          <a href="https://github.com/YismaelDiazH" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-orange-500 hover:text-orange-600 transition duration-300">
            <i className="fab fa-github fa-2x"></i>
            <span>@YismaelDiazH</span>
          </a>
          {/* Agrega más iconos de redes sociales según sea necesario */}
        </div>
      </section>

          <a
            href="/assets/yismaeldiaz_cv_web.pdf" // Cambia esto por el path de tu CV en PDF
            className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold text-sm transition duration-300 hover:bg-orange-600"
            download="yismaeldiaz_cv_web.pdf"
          >
            Télécharger le CV
          </a>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-orange-400">About Me</h2>
          <p className="mt-4"> Je suis un étudiant passionné en Développement Web. Ma motivation repose sur la confiance, l'honnêteté et une mentalité forte. J'aspire à évoluer dans le domaine du développement frontend, en explorant de nouvelles technologies et tendances.
.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold text-orange-400">expériences professionelles</h2>
          <section className="mt-4">
            <h3 className="text-2xl text-orange-500 hover:text-orange-600 transition duration-300">CDS Centro de Desarrollo UTEZ</h3>
            <p className="text-stone-400">STAGIARE - Juillet - Septembre 2023 | Morelos, Mexique</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Développement de preuve de concept</li>
              <li>automatiser l'enregistrement des présences scolaires</li>
              <li>mise en œuvre de la reconnaissance faciale avec la bibliothèque YOLOv8</li>
            </ul>
          </section>
          <section className="mt-4">
            <h3 className="text-2xl text-orange-500 hover:text-orange-600 transition duration-300">Université Technologique Emiliano Zapata</h3>
            <p className="text-stone-400">DÉVELOPPEUR (Projet interne) - Janvier - Avril 2023 | Morelos, Mexique</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Développement et documentation</li>
            </ul>
          </section>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold text-orange-400">Formation académique</h2>
          <div className="mt-4">
            <h3 className="text-2xl text-orange-500">IUT1 Grenoble Alpes</h3>
            <p>2023 - aujourd’hui | Grenoble, France</p>
            <p className="text-stone-400">BAC+3 Métiers du Multimédia et de l'Internet (MMI) :  Développement Web et dispositifs interactifs</p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl text-orange-500">Université Technologique Emiliano Zapata</h3>
            <p>22021 - 2023 | Morelos, Mexique</p>
            <p className="text-stone-400">BAC+2 Technicien Superieur Universitaire: domaine
Developpment de Logiciels Multiplataformes</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold text-orange-400">Compétences</h2>
          <div className="mt-4 flex flex-wrap">
            <span className="m-2 bg-orange-200 text-orange-700 rounded-lg px-4 py-1 transition duration-300">Capacité d'adaptation</span>
            <span className="m-2 bg-orange-200 text-orange-700 rounded-lg px-4 py-1 transition duration-300">Créativité
</span>
<span className="m-2 bg-orange-200 text-orange-700 rounded-lg px-4 py-1 transition duration-300">Intégrité</span>
            <span className="m-2 bg-orange-200 text-orange-700 rounded-lg px-4 py-1 transition duration-300">Leadership
</span>
<span className="m-2 bg-orange-200 text-orange-700 rounded-lg px-4 py-1 transition duration-300">Proactivité
</span>
           
          </div>
        </section>

      </div>
    </div>
    </div>
  )
}

export default MonCV