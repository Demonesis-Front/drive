import React, { ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";

type LinkContainerPropsType = {
	to: string;
	children: ReactNode;
};

export const LinkContainer = ({ to, children }: LinkContainerPropsType) => {
	return (
		<Link to={to} style={link}>
			{children}
		</Link>
	);
};

const link: CSSProperties = {
	textDecoration: "none",
};
