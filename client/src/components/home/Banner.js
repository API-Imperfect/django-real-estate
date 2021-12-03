import { SearchOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import React from "react";

const items = [
	{
		key: "1",
		title: "Buy or sell properties",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		key: "2",
		title: "Buy or sell land",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		key: "3",
		title: "Buy or sell office space",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
];

function Banner() {
	return (
		<div id="banner" className="banner-section">
			<Carousel>
				{items.map((item) => {
					return (
						<div key={item.key} className="fluid-container">
							<div className="content">
								<h3>{item.title}</h3>
								<p>{item.content}</p>
								<div className="btn-group">
									<Button type="primary" size="large">
										Learn More
									</Button>
									<Button
										icon={<SearchOutlined />}
										size="large"
									>
										Search
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default Banner;
