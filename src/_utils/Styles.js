import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.mainColor,
        elevation: 5
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    businessesSearchInputSearch: {
        backgroundColor:"#2980b9",
        width: "100%",
        borderRadius: 10,
        marginTop: 2,
        color: "#ecf0f1",
        paddingBottom: 5,
    },
    businessesSearchHeaderBody:{
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    businessesSearchGrid:{
        flexDirection:"column",
        flex: 1,
        padding: 10
    },
    businessesSearchImage: {
        width: "100%",
        height: 150,
        borderRadius: 10
    },
    businessesSearchName: {
        fontWeight: "bold"
    },
    businessesDetailDesc: {
        flexDirection: "column", marginTop: 50
    },
    businessesDetailReview: {
        alignItems: "center", paddingTop: 30, paddingBottom: 30, borderColor: "#bdc3c7", borderWidth: 1, marginBottom:0
    },
    businessesDetailDescBottom: {
        flexDirection:"row", marginTop:0
    },
    businessesDetailDescBottomItem: {
        flex:1, alignItems: "center", paddingTop: 30, paddingBottom: 30, borderColor: "#bdc3c7", borderWidth: 1, marginTop:0, justifyContent: "center"
    },
});

export default Styles;