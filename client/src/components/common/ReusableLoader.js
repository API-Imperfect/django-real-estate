import React from "react";
import { Spin } from "antd";

const ReusableLoader = ({ loading }) => {
	return loading ? (
		<div className="spinner">
			<Spin size="large" />
		</div>
	) : null;
};

export default ReusableLoader;
