import React from "react";
import Link from "next/link";

const Layout = (props) => {
	return (
		<React.Fragment>
			<h1>Header</h1>
			<nav>
				<Link href="/">Inicio</Link>
				<Link href="/nosotros">Nosotros</Link>
			</nav>
			<main>{props.children}</main>
		</React.Fragment>
	);
};
export default Layout;
