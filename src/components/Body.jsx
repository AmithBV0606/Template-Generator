import useInput from "../context/InputContext";
import { useRef } from "react";

function Body() {
    const {role, companyName, platform, jobLink, copyRef} = useInput()

    return(
        <div className="flex flex-col items-start justify-start gap-5 text-lg">
            <p>Subject: Referral Request for {role}.</p>

            <p>Greetings,</p>

            <p>
                I hope this email finds you well.
            </p>

            <p>
                I came across the advertisement for the {role} position at {companyName}, and I am very interested in the role. Frontend development is something I am truly passionate about, and I am excited about the opportunity to contribute to {companyName}'s projects.
            </p>

            <p>
                Although I am a fresher with no formal work experience, I have completed several projects that showcase my abilities and dedication to frontend development.
                Instead of just sending my CV, I wanted to share my portfolio and source code with you. I believe this work will demonstrate my skills and why I would be a great candidate for the job.
            </p>

            <p>
                You can access my portfolio and GitHub repositories through the following links:
            </p>

            <ul className="list-disc ml-10">
                <li>Portfolio: https://sams-hub-profile.netlify.app/</li>
                <li>GitHub: https://github.com/SaMs-Hub/</li>
                <li>
                    Resume: https://drive.google.com/file/d/1NiGdBG-C7Pgz-kXe1jbf8boGLWXFmKJ7/view?usp=sharing
                </li>
            </ul>

            <p>
                I found the job description via {platform}, <br />
                ({jobLink})
            </p>

            <p>
                I would love to schedule a time to discuss my suitability for the role and explore how I can contribute to {companyName}. I am available at your convenience.
            </p>

            <div className="flex flex-col">
                <span>Sincerely,</span>
                <span>Amith B V,</span>
                <span>amithrao0606@gmail.com,</span>
                <span>+91 6361670056</span>
            </div>
        </div>
    );
}

export default Body;