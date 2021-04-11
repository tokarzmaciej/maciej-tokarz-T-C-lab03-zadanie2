import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getUsers, postUser } from '../operations/users'
import { Formik, Field, Form } from 'formik';
import Put from '../components/Put'

function Users({ users, fetchUsers, postUser }) {

    useEffect(() => { fetchUsers() }, [fetchUsers])
    const handleSubmit = (values) => {
        postUser(values)
    }

    return (

        <div className="container">
            <Formik
                initialValues={{
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
                        <button type="submit">POST</button>
                    </Form>
                )}
            </Formik>
            {users.map(user =>
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>username: {user.username}</p>
                    <p>email: {user.email}</p>
                    <Put id={user.id}></Put>
                </div>)}

        </div>

    );
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(getUsers()),
        postUser: (payload) => dispatch(postUser(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
