import { Button, Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

function Faqs() {
	return (
		<div id="faq" className="block faq-block">
			<div className="fluid-container">
				<div className="title-section">
					<h2>Frequently Asked Questions</h2>
					<p>
						What are the most frequently asked questions regarding
						properties?
					</p>
				</div>
				<Collapse defaultActiveKey={["1"]}>
					<Panel header="How do I find the right property?">
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap.
						</p>
					</Panel>
					<Panel header="How do I know I can trust your agents?">
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap.
						</p>
					</Panel>
					<Panel header="Who are your major clients?">
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap.
						</p>
					</Panel>
					<Panel header="How do I get in touch?">
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap.
						</p>
					</Panel>
					<Panel header="Do I need to create an account?">
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap.
						</p>
					</Panel>
				</Collapse>
				<div className="quick-support">
					<h3>Want expedited support?</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Pariatur velit necessitatibus praesentium aliquid
						eos in neque recusandae, incidunt esse dolore voluptatum
						nesciunt quod soluta consequuntur voluptatibus ab
						excepturi nobis! Porro!
					</p>
					<Button type="primary" size="large">
						<i className="fas fa-envelope"></i> Email your question!
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Faqs;
