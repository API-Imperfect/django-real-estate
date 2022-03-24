import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className="py-3 text-center">
						Copyright &copy; Real Estate {new Date().getFullYear()}
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
