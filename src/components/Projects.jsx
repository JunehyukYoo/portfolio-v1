import { RevealOnScroll } from "./sections/RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Project 1: Portfolio */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Portfolio v1</h3>
                            <p className="text-gray-400 mb-4">My personal portfolio website that you are currently viewing. It was created primarily with React and TailwindCSS.
                                See Github for more info.</p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Vite", "Node.js", "Javascript", "TailwindCSS", "HTML"].map((skill, key) => (
                                    <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end items-center pt-2">
                                <a href="https://github.com/JunehyukYoo/portfolio-v1" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors mt-10"
                                    target="_blank"
                                    rel="noopener noreferrer"> 
                                    View Project »
                                </a>
                            </div>
                        </div>

                        {/* Project 2: Competify @KKeySimon */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Competify</h3>
                            <p className="text-gray-400 mb-4">
                                Assisted in development of a full-stack web application promoting habit-building through interactive and social competitions.
                                Focused on fixing bugs and tweaking function logic during production. 
                                </p>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Node.js", "Prisma", "Typescript"].map((skill, key) => (
                                    <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end items-center pt-2">
                                <a href="https://github.com/KKeySimon/Competify/tree/main" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors mt-14"
                                    target="_blank"
                                    rel="noopener noreferrer"> 
                                    View Project »
                                </a>
                            </div>
                        </div>

                        {/* Project 3: Under progress div */}
                        <div className="flex flex-col justify-center align-center p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all text-center">
                            <h3 className="text-xl font-bold">Under Construction</h3>
                            <p className="text-gray-400">
                                Check again later! 
                            </p>
                        </div>

                        {/* Project 4: Under progress div */}
                        <div className="flex flex-col justify-center align-center p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                        hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all text-center">
                            <h3 className="text-xl font-bold">Under Construction</h3>
                            <p className="text-gray-400">
                                Check again later! 
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}