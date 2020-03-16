import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

export default function GenreSelect({ options, value, onChange }) {
	return (
		<Select
			closeMenuOnSelect={true}
			components={animatedComponents}
			isMulti
			options={options}
			value={value}
			onChange={onChange}
		/>
	)
}
