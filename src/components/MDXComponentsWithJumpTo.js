import * as motion from "motion/react-client"
import { Hash, Copy } from 'lucide-react'
import { toast } from "sonner"


const handleClick = (id) => {
  if (id) {
    const url = window.location.href.split('#')[0] + '#' + id;
    window.history.pushState(null, '', url); 

	console.log(id)

    const element = document.getElementById(id);
    if (element) {
			console.log("hd")

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

const handleCopy = (id) => {
	
}

export const MDXComponents = {
	h1: (props) => (
	<h1
		className="text-5xl font-semibold my-10 relative cursor-pointer group/heading"
		onClick={() => handleClick(props.id)}
    >
		<motion.span
			className="group/icon absolute left-[-50px] top-[6px] transform opacity-0 group-hover/heading:opacity-100 transition-opacity duration-500"
			onClick={() => handleCopy(props.id)}
		>
			<Hash className="absolute inset-0 size-9 group-hover/icon:opacity-0 transition-opacity duration-300" />
			<Copy className="absolute inset-0 size-9 group-hover/icon:opacity-100 opacity-0 transition-opacity duration-300" />
		</motion.span>
		{props.children}

    </h1>
	),

	h2: (props) => (
	<h2
		className="text-3xl font-semibold my-10 relative cursor-pointer group/heading"
		onClick={() => handleClick(props.id)}
    >
		<motion.span
			className="group/icon absolute left-[-40px] top-[5px] transform opacity-0 group-hover/heading:opacity-100 transition-opacity duration-500"
		>
			<Hash className="absolute inset-0 size-6 group-hover/icon:opacity-0 transition-opacity duration-300" />
			<Copy className="absolute inset-0 size-6 group-hover/icon:opacity-100 opacity-0 transition-opacity duration-300" />
		</motion.span>
		{props.children}

    </h2>
	),
	h3: (props) => (
	<h3
		className="text-2xl font-medium my-10 relative cursor-pointer group/heading"
		onClick={() => handleClick(props.id)}
    >
		<motion.span
			className="group/icon absolute left-[-30px] top-[5px] transform opacity-0 group-hover/heading:opacity-100 transition-opacity duration-500"
		>
			<Hash className="absolute inset-0 size-5 group-hover/icon:opacity-0 transition-opacity duration-300" />
			<Copy className="absolute inset-0 size-5 group-hover/icon:opacity-100 opacity-0 transition-opacity duration-300" />
		</motion.span>
		{props.children}

    </h3>

	),
	p: (props) => <p className="mb-10 text-lg leading-relaxed" {...props} />,
	ul: (props) => <ul className="mb-10 text-lg list-disc mx-10" {...props} />,
	ol: (props) => <ul className="mb-10 text-lg list-decimal mx-10" {...props} />,
	li: (props) => <li className="mb-8" {...props} />,
	strong: (props) => <strong className="font-semibold" {...props} />,
	a: (props) => <a className="underline text-blue-800" {...props} />
};
