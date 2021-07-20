import React from 'react'
import HomeNavigation from './HomeNavigation'
import AuthNavigation from './AuthNavigation'

const RootNavigation = (props) => {
    const {
        userId
    } = props
    return userId?(
        <HomeNavigation />
    ) : (
        <AuthNavigation />
    )
}

export default RootNavigation