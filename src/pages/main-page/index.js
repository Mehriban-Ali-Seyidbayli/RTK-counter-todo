import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, setCounter } from "../../features/counterSlice";

export default function MainPage() {

    const counterState = useSelector(state => state.counterState)

    // useSelector(state => {
    //     console.log("bura statedir", state);
    //     return state
    // })

    const dispatch = useDispatch();

    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Counter</h1>
                <p className="lead">Let's develop Counter by using Redux-toolkit</p>
            </div>

            <Row className="justify-content-center">
                <Col sm={4}>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal text-center">Counter</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title text-center my-5">{counterState.counter}</h1>

                            <button onClick={e => dispatch(increase())} type="button" className="btn btn-lg w-100 btn-block mb-3 btn-success">Increase</button>
                            <button onClick={e => dispatch(decrease())} type="button" className="btn btn-lg w-100 btn-block  mb-3 btn-danger">Decrease</button>
                            <button onClick={e => dispatch(setCounter(0))} type="button" className="btn btn-lg w-100 btn-block mb-3 btn-primary">Reset</button>
                            <button onClick={e => dispatch(setCounter(1))} type="button" className="btn btn-lg w-100 btn-block btn-success">1</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}