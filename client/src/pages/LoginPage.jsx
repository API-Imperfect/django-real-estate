import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import { login, reset } from "../features/auth/authSlice";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [isError, isSuccess, message, user, navigate, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!email) {
			toast.error("An email must be provided");
		}

		if (!password) {
			toast.error("A password must be provided");
		}

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<>
			<Title title="login" />
			<Container>
				<Row>
					<Col className="mg-top text-center">
						<section>
							<h1>
								<FaSignInAlt /> Login
							</h1>
							<hr className="hr-text" />
						</section>
					</Col>
				</Row>

				{isLoading && <Spinner />}
				<Row className="mt-3">
					<Col className="justify-content-center">
						<Form onSubmit={submitHandler}>
							<Form.Group controlId="email">
								<Form.Label>Email Addrss</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Form.Group>

							<Button
								type="submit"
								variant="primary"
								className="mt-3"
							>
								Sign In
							</Button>
						</Form>
					</Col>
				</Row>

				<Row className="py-3">
					<Col>
						New Customer?
						<Link to="/register">Register Here.....</Link>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LoginPage;
