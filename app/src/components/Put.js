import React from 'react';
import { connect } from 'react-redux'
import { putUser } from '../operations/users'
import { Formik, Field, Form } from 'formik';


function Put({ id, putUser }) {

    const handleSubmit = (values) => {
        putUser(values, id)
    }

    return (

        <div className="container">
            <Formik
                initialValues={{
                    id: id,
                    name: "",
                    username: "",
                    email: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values)
                    resetForm({ values: '' });

                }}
            >
                {(formProps) => (
                    <Form onSubmit={formProps.handleSubmit}>
                        <Field type="text" name="name" placeholder="name" />
                        <Field type="text" name="username" placeholder="username" />
                        <Field type="email" name="email" placeholder="email" />
                        <button type="submit">PUT</button>
                    </Form>
                )}
            </Formik>

        </div>

    );
}


const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        putUser: (payload, id) => dispatch(putUser(payload, id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Put);
