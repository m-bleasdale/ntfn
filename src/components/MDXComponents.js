import Pointer from "@/components/references/pointer"

export const MDXComponents = {
	h1: (props) => <h1 className="text-4xl font-semibold mt-10 mb-4" {...props}/>,
	h2: (props) => <h2 className="text-3xl font-semibold mt-10 mb-4" {...props}/>,
	h3: (props) => <h2 className="text-2xl font-semibold mt-10 mb-4" {...props}/>,
	p: (props) => <p className="mb-10 text-lg leading-relaxed" {...props} />,
	ul: (props) => <ul className="mb-10 text-lg list-disc mx-10" {...props} />,
	ol: (props) => <ul className="mb-10 text-lg list-decimal mx-10" {...props} />,
	li: (props) => <li className="mb-8" {...props} />,
	strong: (props) => <strong className="font-semibold" {...props} />,
	a: (props) => <a className="underline text-blue-800" {...props} />,
	Pointer: (props) => <Pointer {...props} />
};
