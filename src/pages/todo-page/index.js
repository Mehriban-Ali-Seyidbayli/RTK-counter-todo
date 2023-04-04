import { Button, Table, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../features/todoSlice";

export default function TodoPage() {

    const todoState = useSelector(state => state.todoState)
    const dispatch = useDispatch();


    return (
        <div className="my-3">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Todo List</h1>
                <p className="lead">Let's develop Todo App by using Redux-toolkit</p>
            </div>

            <Form onSubmit={e => {
                e.preventDefault();

                const formData = new FormData(e.target);
                const formValueJson = Object.fromEntries(formData.entries());

                dispatch(addTodo(formValueJson))

            }}>
                <Row>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>
                                Todo title
                            </Form.Label>

                            <Form.Control type="text" name="title" />

                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>
                                Done/Undone
                            </Form.Label>
                            <Form.Check name="done" value="1" />
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Button type="submit" className="mt-4">
                            Add Todo
                        </Button>
                    </Col>
                </Row>
            </Form>


            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Done/Undone</th>
                        <th>Process</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        todoState.todos.map((item, index) => {


                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td> <input type="checkbox" checked={item.done} /> </td>
                                    <td>
                                        <Button onClick={e => dispatch(deleteTodo(index))} variant="danger" className="me-1">Delete</Button>
                                        <Button onClick={e => dispatch(updateTodo(item.id))} variant="success">Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}