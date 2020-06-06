import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddFriend = (props) => {
	return (
		<Form>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label for="nameLabel">Name</Label>
						<Input
							type="text"
							name="name"
							id="nameLabel"
							placeholder="Frankie Holiday"
						/>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="emailLabel">Email</Label>
						<Input
							type="email"
							name="email"
							id="emailLabel"
							placeholder="frankie@holiday.com"
						/>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="ageLabel">Age</Label>
						<Input type="number" name="age" id="ageLabel" placeholder="27" />
					</FormGroup>
				</Col>
			</Row>
			<Button>Add</Button>
		</Form>
	);
};

export default AddFriend;
