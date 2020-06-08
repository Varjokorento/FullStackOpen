import React from 'react'
import {Part} from './Part.js'

export const Content = (props)  => {
    return (
        props.partArray.map(function(part, i){
        return <Part key={i} partTitle={part.partTitle} partExercises={part.partExercises}/>
    })
    )
}
