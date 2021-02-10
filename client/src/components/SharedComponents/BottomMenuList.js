import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

export default function BottomMenuList() {
    return (
        <Card className="mt-5"> 
            <ListGroup variant="flush">
                <ListGroup.Item> <Link to="/bloodsugar">My Blood Sugar</Link>  </ListGroup.Item>
                <ListGroup.Item><Link to="/medication">Manage My Medications</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/questions">Questions?</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/"></Link>Home</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}
