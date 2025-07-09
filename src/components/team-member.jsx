import { BsLinkedin, BsEnvelopeAt  } from "react-icons/bs";

export default function TeamMember ({name, photo, role, linkedinLink, email}) {
    return (
        <div className="flex flex-col items-center gap-5">
            <img src={photo} alt={name} height={160} width={160} className="rounded-full"/>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <h2 className="text-center">{role}</h2>
            <div className="flex flex-row items-center gap-4">
                {linkedinLink && <a href={linkedinLink}><BsLinkedin size={24}/></a>}
                {email && <BsEnvelopeAt size={24}/>}
            </div>
        </div>
    )
}