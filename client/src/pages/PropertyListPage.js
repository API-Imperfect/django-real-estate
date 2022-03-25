import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPropertyList } from "../store/property/propertiesThunks";
import ReusableLoader from "../components/common/ReusableLoader";
import ReusableErrorAlert from "../components/common/ReusableErrorAlert";

function PropertyListPage() {
	const dispatch = useDispatch();

	const propertiesList = useSelector((state) => state.propertiesList);

	const { loading, error, properties } = propertiesList;

	useEffect(() => {
		dispatch(fetchPropertyList());
	}, [dispatch]);
	return (
		<>
			<ReusableLoader loading={loading} />
			<ReusableErrorAlert error={error} />
			<Row>
				<Col span={24}>
					<h2 className="margin--top">Our Catalog of Properties</h2>
				</Col>
				{properties.map((property) => (
					<Col key={property.id} sm={12} md={6} lg={4} xs={3}>
						<p>{property.title}</p>
					</Col>
				))}
			</Row>
		</>
	);
}

export default PropertyListPage;
