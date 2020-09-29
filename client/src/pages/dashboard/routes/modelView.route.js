import React, {useEffect, useState} from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import ModelTable from '../components/modelTable.component';
import AddItemForm from '../components/addItemForm.component';
import EditItemForm from '../components/editItemForm.component';
import { useLocation } from 'react-router-dom';

function ModelView({model, template, setItem, onlyTable }){
    let modelProperties = Object.keys(template);
    const location = useLocation();
    const [pressedItem, setPressedItem] = useState({});

    useEffect(() => {
        setPressedItem(model ? model[0] :{});
    },[location]);

    return (
        <Container className='model-view'>
            {!onlyTable &&
            <Row>
                {/* create item */}
                <Col className='create-model-item'>
                    <AddItemForm inputList={modelProperties} setItem={setItem} />
                </Col>

                {/* edit item */}
                <Col className='graph'>
                    <EditItemForm 
                        inputList={modelProperties} 
                        setItem={setItem}
                        pressedItem={pressedItem}
                        setPressedItem={setPressedItem}
                    />
                </Col>
            </Row>
            }
            
            <Row>
                {/* items display */}
                <Col className='model-table'>
                    <ModelTable 
                        headlines={modelProperties} 
                        items={model ?? []} 
                        setItems={setItem}
                        pressedItem={pressedItem}
                        setPressedItem={setPressedItem}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ModelView;