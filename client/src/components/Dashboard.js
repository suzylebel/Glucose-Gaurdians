import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from './SharedComponents/Navbar'
import DataRangeCard from './SharedComponents/DataRangeCard'

import API from '../utils/API'
import Local from "../utils/localStorage"



export default function Dashboard() {

    const [error, setError] = useState("")
    const [lastBS, setLastBS] = useState()
    const { currentUser } = useAuth()

    function getLastBS() {

        const testArr = Local.getTestsArr()

        if(testArr.length > 0){
           setLastBS(testArr[(testArr.length -1)].glucose)
        } else {
            setLastBS("No Blood Sugars Entered Yet")
        }
        
    }

    useEffect(()=> {
        console.log(currentUser.displayName)

        API.userLookUp(currentUser.uid).then(({data}) => {
            
            if(!data) {

                API.newUserCreate(currentUser.uid)
                .then((info) => {

                    Local.setTestsArr(info.data.tests)
                    Local.setMedsArr(info.data.meds)

                    getLastBS()
                })
                .catch(err => {
                    console.log(err)
                    setError('Unable to create new account')
                })
            } else{

                Local.setTestsArr(data.tests)
                Local.setMedsArr(data.meds)

                getLastBS()
                
            }
        })
    },[currentUser])


    return (
        <div>
            <NavbarComponent />
            <Container className="justify-content-around align-items-center">
                <Row>
                    <Col><DataRangeCard title="Last Blood Sugar" value={lastBS} /></Col>
                    <Col><DataRangeCard /></Col>
                </Row>
            </Container>
        </div>
    )
}
