import {
    Dimensions,
    Platform,
    StyleSheet,
} from 'react-native';

let scale = Dimensions.get('window').width / 360;
let lineHeight = Platform.OS === 'ios' ? 50 * scale : null;
let ios = Platform.OS === 'ios';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: "#f2f2f2"
    },
    headerStyle: {
        backgroundColor: "#00a0e9"
    },
    headerTitleStyle: {
        flex: 1,
        //标题的文字颜色
        color: "white",
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: "center",
        textAlign: "center"
    },
    title: {
        width: Dimensions.get('window').width,
        height: 54 * scale,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "#00a0e9",
        fontSize: 20 * scale,
        color: "white"
    },
    formSelection: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#dedede",
    },
    formLabel: {
        width: (Dimensions.get('window').width - 8) / 3,
        height: 54 * scale,
        lineHeight: ios ? 50 * scale : null,
        justifyContent: 'flex-start',
        fontSize: 16 * scale,
        textAlignVertical: "center",
        marginLeft: 32
    },
    formTextInput: {
        padding: 0,
        textAlign: "left",
        fontSize: 16 * scale
    },
    formFeild: {
        width: (Dimensions.get('window').width - 8) * 2 / 3,
        height: 54 * scale,
        justifyContent: 'flex-start'
    },
    button: {
        width: 300 * scale,
        height: 54 * scale,
        borderRadius: 5,
        alignSelf: "center", //子View的属性  alignItem父View的属性
        justifyContent: "center",
        backgroundColor: "#00a0e9",
        margin: 30 * scale
    },
    button_text: {
        color: "white",
        alignSelf: "center",
        fontSize: 16 * scale
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default styles;