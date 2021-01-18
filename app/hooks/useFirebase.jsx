import { useState } from 'react'
import * as firebase from 'firebase'

export function useLogin() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    function exec({ email, password }) {
        setLoading(true)
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    resolve()
                    setData(res)
                    setLoading(false)
                })
                .catch(error => {
                    reject(error)
                    setError(error)
                    setLoading(false)
                })
        })
    }

    return [
        exec,
        {
            loading,
            error,
            data
        }
    ]
}

export function useRegister() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    function exec({ email, password }) {
        setLoading(true)
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
                    resolve()
                    setData(res)
                    setLoading(false)
                })
                .catch(error => {
                    reject(error)
                    setError(error)
                    setLoading(false)
                })
        })
    }

    return [
        exec,
        {
            loading,
            error,
            data
        }
    ]
}

export function useLogout() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function exec() {
        setLoading(true)
        return new Promise((resolve, reject) => {
            firebase.auth().signOut()
                .then(() => {
                    resolve()
                    setLoading(false)
                })
                .catch(err => {
                    reject(err)
                    setError(err)
                    setLoading(false)
                })
        })
    }

    return [
        exec,
        {
            loading,
            error
        }
    ]
}

export function useResetPassword() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function exec(email) {
        setLoading(true)
        return new Promise((resolve, reject) => {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    setLoading(false)
                    resolve()
                })
                .catch(err => {
                    setLoading(false)
                    setError(err)
                    reject(err)
                })
        })
    }

    return [
        exec,
        {
            loading,
            error
        }
    ]
}