import React from "react";
import { Alert } from "antd";

const ReusableErrorAlert = ({ error }) => {
	return error ? (
		<Alert
			type="error"
			message={error}
			showIcon
			className="alert-margin--top"
		/>
	) : null;
};

export default ReusableErrorAlert;
