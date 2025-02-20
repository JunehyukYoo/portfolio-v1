export const About = () => {

    const fullstackSkills = ["React", "HTML", "Javascript/Typescript", "CSS/TailwindCSS", "Node.js", "Vite", "Python", "Prisma"];
    const programmingLanguage = ["C", "C++", "Java", "Assembly", "Verilog", "OOP", "Machine learning"];
    const humanLanguage = ["English (fluent)", "Korean (semi-fluent)", "Chinese (intermediate)"]
    const miscSkills = ["Circuit management", "Call-servers", "Wiring/Cabling", "Human Centered Design"];

    return <section id="about" className="min-h-screen flex justify-center items-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">A developer who is always ready and willing to learn and hone new skills.</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Education */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all">
                        <h3 className="text-xl font-bold mb-4"> Education </h3>
                        <ul className="list-inside list-disc text-gray-300 space-y-2">
                            <li className="list-none"> 
                                <a href="https://siebelschool.illinois.edu/academics/undergraduate/degree-program-options/cs-x-degree-programs/computer-science-linguistics"
                                className="inline-flex items-center font-bold hover:text-blue-400"
                                target="_blank"
                                rel="noopener noreferrer">
                                    B.S. in Computer Science and Linguistics
                                    <img 
                                    src="https://brand.illinois.edu/wp-content/uploads/2024/02/Color-Variation-Orange-Block-I-White-Background.png" 
                                    alt="University of Illinois at Urbana-Champaign Logo" 
                                    className="h-10 w-auto"
                                    />
                                </a>
                                University of Illinois at Urbana-Champaign (2020-Present)
                            </li>

                            <li>
                                Cumulative GPA: 3.80
                            </li>
                            <li className="text-sm">
                                Relevant coursework: Applied Machine Learning, Algorithms and Models of Computation, Systems Programming, 
                                Data Structures, Computer Architecture, Discrete Structures, Elements of Syntax, Elements Semantics & Pragmatics...
                            </li>
                            <li className="text-sm">Expected graduation: May 2026</li>

                        </ul>
                </div>

                {/* Experience */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all">
                        <h3 className="text-xl font-bold mb-4"> Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <ul className="list-inside text-gray-300 space-y-2">
                                    <li className="list-none"> 
                                        <a href="https://namu.wiki/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0#s-4.1.5"
                                        className="inline-flex items-center font-bold hover:text-blue-400"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            Exchange Systems Operator (교환병)
                                        </a>
                                        <br></br>Capital Defense Command, ROKA (Nov 2022 - May 2024)
                                    </li>
                                    <li className="text-sm">
                                        Managed Seoul's inter/intra military base communications via commercial and military-grade call servers. 
                                        Created and maintained circuits for analog phone lines (and H/L), military satellites, radio networks, CCTVs, emergency alarm systems, etc.
                                    </li>
                                </ul>

                                <ul className="list-inside text-gray-300 space-y-2 pt-4">
                                    <li className="list-none"> 
                                        <a href="https://deepmetrics.co/"
                                            className="inline-flex items-center font-bold hover:text-blue-400"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                                Software Engineering Intern
                                        </a>
                                        <br></br>DeepMetrics (July - Oct 2024)
                                    </li>
                                    <li className="text-sm">
                                        Handled data processing and analysis of vital files from ventilated patients in Seoul National University Hospital 
                                        in order to develop an offline reinforcement learning algorithm to assist clinicians with manual mechanical ventilator control.
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    </section>
};