import { Alert, Col, Row, Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../store/property/propertiesThunks";
import { selectPropertySlice } from "../store/property/propertiesSelectors";

function PropertyListPage() {
	const dispatch = useDispatch();

	const propertySlice = useSelector(selectPropertySlice);

	const { loading, error, properties } = propertySlice;

	useEffect(() => {
		dispatch(fetchProperties());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<div className="spinner">
					<Spin size="large" />
				</div>
			) : error ? (
				<Alert
					type="error"
					message={error}
					showIcon
					className="alert-margin--top"
				/>
			) : (
				<>
					<Row>
						<Col span={24}>
							<h2 className="margin--top">
								Our Catalog of Properties
							</h2>
						</Col>
						{properties.map((property) => (
							<Col key={property.id} sm={12} md={6} lg={4} xs={3}>
								<p>{property.title}</p>
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
}

export default PropertyListPage;
