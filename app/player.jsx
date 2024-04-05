import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

class Player extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            val: ""
        }
    }

    render(){
        return(
            <View>
                <Text>Player</Text>
            </View>
        )
    }
}


export default Player
