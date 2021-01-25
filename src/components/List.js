import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Weathercard from './Weathercard'

const List = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather, wind}) => (
                <Col key={dt}>
                    <Weathercard 
                    temp_max={main.temp_max} 
                    temp_min={main.temp_min} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                    humidity={main.humidity}
                    wind_speed={wind.speed}
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default List
