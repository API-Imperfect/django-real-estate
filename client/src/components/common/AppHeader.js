import { Anchor, Button, Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AppHeader() {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const closeDrawer = () => {
		setVisible(false);
	};

	return (
		<div className="fluid-container">
			<div className="header">
				<div className="logo">
					<i className="fas fa-home fa-2x"></i>
					<Link to="/"> Real Estate</Link>
				</div>
				<div className="mobileHidden">
					<Anchor targetOffset="65">
						<Anchor.Link href="#banner" title="Home" />
						<Anchor.Link href="#about" title="About" />
						<Anchor.Link href="#options" title="Options" />
						<Anchor.Link href="#faq" title="FAQ" />
						<Link
							to="/properties"
							className="ant-anchor-link-title"
						>
							Properties
						</Link>
					</Anchor>
				</div>
				<div className="mobileVisible">
					<Button type="primary" onClick={showDrawer}>
						<i className="fas fa-bars"></i>
					</Button>
					<Drawer
						placement="right"
						closable={false}
						onClose={closeDrawer}
						visible={visible}
					>
						<Anchor targetOffset="65">
							<Anchor.Link href="#banner" title="Home" />
							<Anchor.Link href="#about" title="About" />
							<Anchor.Link href="#options" title="Options" />
							<Anchor.Link href="#faq" title="FAQ" />
							<Link
								to="/properties"
								className="ant-anchor-link-title"
							>
								Properties
							</Link>
						</Anchor>
					</Drawer>
				</div>
			</div>
		</div>
	);
}

export default AppHeader;
