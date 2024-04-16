import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { AuthContext } from "../contexts/AuthContext";
function Routes(){
    const {isAuthenticated,loading} =useContext(AuthContext);
    

    if(loading){
        return(
            <View style={{flex:1,
            backgroundColor:'#bc0010',
            justifyContent:'center',
            alignItems:'center'}}>
            <ActivityIndicator size={60} color="#fea3a9"/>
            </View>
        )
    }

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;