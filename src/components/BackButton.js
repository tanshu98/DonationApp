import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet } from "react-native";

const BackButton = ({onPress})=> {
    return (
    <Pressable style={styles.container} onPress={()=> onPress()}>
        <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
    )
};

export default BackButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFAFA',
        // opacity:0.7,
        width: 44,
        height:44,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    }
})

// 1st thing, this back button is pressable..so we use pressable