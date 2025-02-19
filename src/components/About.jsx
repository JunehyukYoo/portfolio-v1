export const About = () => {

    const fullstackSkills = ["React", "HTML", "Javascript/Typescript", "CSS/TailwindCSS", "Node.js", "Python"];
    const programmingLanguage = ["C", "C++", "Java", "Assembly", "Verilog", "OOP"];
    const humanLanguage = ["English (fluent)", "Korean (semi-fluent)", "Chinese (intermediate)"]
    const miscSkills = ["Circuit management", "Call-servers", "Wiring/Cabling", "Human Centered Design"];

    return <section id="about" className="min-h-screen flex justify-center items-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 text-center">A developer who is always ready and willing to learn.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Fullstack skills display */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Fullstack Development Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {fullstackSkills.map((skill, key) => (
                                <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Programming languages display */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-l font-bold mb-4">Other Programming Languages/Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {programmingLanguage.map((skill, key) => (
                                <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Human language skills display */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Human Languages Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {humanLanguage.map((skill, key) => (
                                <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Misc language skills display */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Miscellaneous Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {miscSkills.map((skill, key) => (
                                <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
};