import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#FF6C00",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  buttonContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  textInput: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingLeft: 10,
    borderRadius: 35,
  },
  formButton: {
    backgroundColor: "#FF6C00",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
  },
  closeButtonContainer: {
    backgroundColor: "#FF6C00",
    borderRadius: 35,
    height: 50,
    width: 50,
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    alignItems: "center",
  },
  closeButtonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default styles;
