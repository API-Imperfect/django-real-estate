import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiHouse } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar
				fixed="top"
				bg="dark"
				variant="dark"
				expand="lg"
				collapseOnSelect
			>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<GiHouse className="nav-icon" /> Real Estate
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="ml-auto">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/properties">
								<Nav.Link>Properties</Nav.Link>
							</LinkContainer>

							<NavDropdown
								title="Dropdown"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item href="#action/3.1">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
