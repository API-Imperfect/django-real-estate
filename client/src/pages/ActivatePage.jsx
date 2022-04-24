import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import { activate, reset } from "../features/auth/authSlice";

const ActivatePage = () => {
	const { uid, token } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess) {
			navigate("/");
		}

		dispatch(reset());
	}, [isError, isSuccess, message, navigate, dispatch]);

	const submitHandler = () => {
		const userData = {
			uid,
			token,
		};

		dispatch(activate(userData));
		toast.success("Your account has been activated! You can login now");
	};

	return (
		<>
			<Title title="Activate User" />
			<Container>
				<Row>
					<Col className="mg-top text-center">
						<section>
							<h1>
								<FaCheckCircle /> Activate your account
							</h1>
							<hr className="hr-text" />
						</section>
					</Col>
				</Row>
				{isLoading && <Spinner />}
				<Row className="mt-3">
					<Col className="text-center">
						<Button
							type="submit"
							variant="outline-success"
							size="lg"
							className="mt-3 large-btn"
							onClick={submitHandler}
						>
							Activate
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ActivatePage;
