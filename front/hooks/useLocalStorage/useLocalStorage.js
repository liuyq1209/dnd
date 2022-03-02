import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
	const isObject = () => {
		return Object.prototype.toString.call(initialValue) === '[object Object]'
	}

	const [state, setState] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			console.log(item)
			return isObject() && item ? JSON.parse(item) : item || initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})

	const setLocalStorage = (newState) => {
		try {
			const newStateValue =
				typeof newState === 'function' ? newState(state) : newState
			setState(newStateValue)
			window.localStorage.setItem(
				key,
				isObject() ? JSON.stringify(newStateValue) : newStateValue
			)
		} catch (error) {
			console.log(`store ${key}'s new value failed, error info:`, error)
		}
	}
	return [state, setLocalStorage]
}

export default useLocalStorage
