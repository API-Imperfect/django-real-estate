import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { getProperties } from "../features/properties/propertySlice";

const PropertiesPage = () => {
	const { properties, isLoading, isSuccess } = useSelector(
		(state) => state.properties
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProperties());
	}, [dispatch]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<Container>
				<Row>
					<Col className="mg-top">
						<h1>Properties will be displayed here</h1>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default PropertiesPage;
