import { PropsWithChildren } from "react"

interface IProps {
	onClick: () => void
	className?: string
}

export const ButtonWithEffect: React.FC<PropsWithChildren<IProps>> = ({ onClick, className, children }) => {
	return (
		<button
			onClick={onClick}
			className={`mt-[30px] bg-red-400 flex items-center justify-center h-[100px] w-[100px] ${className}`}
		>
			{children}
		</button>
	)
}
