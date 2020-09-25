import React from 'react';
import {StyleSheet, Modal,Text, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const InternetCheck = () => {
  const netInfo = useNetInfo().isConnected;
  return(
      <>
      {netInfo ? null : (
        <Modal animationType="fade" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Sorry we are Offline 🤪</Text>

             
            </View>
          </View>
        </Modal>
      )}
      </>
  )
};

export default InternetCheck;


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  
