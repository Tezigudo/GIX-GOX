import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Player extends Component{
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