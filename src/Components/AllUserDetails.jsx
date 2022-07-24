import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function AllUserDetail(props) {
	return (
		<>
			{props.userData.map((item, index) => {
				return (
					<Card style={{ width: "18rem" }} key={index}>
						<Card.Body>
							<Card.Title>Name : {item.name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								<Card.Title>Email :{item.email}</Card.Title> 
							</Card.Subtitle>
							<Card.Title>Gen : {item.gen}</Card.Title>
							
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				);
			})}
		</>
	);
}

export default AllUserDetail;