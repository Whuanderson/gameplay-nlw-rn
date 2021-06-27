import React, { useState } from "react";
import { View, Text, Alert } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";
import { Button } from "../Button";
import { ModalViewOut } from "../ModalViewOut"
import { theme } from "../../global/styles/theme";
export function Profile() {
  const [openLogoutModa, setOpenLogoutModa] = useState(false);
  const { user, signOut } = useAuth();

  function handleOpenLogoutModa() {
    setOpenLogoutModa(true)
  }
  function handleCloseLogoutModa() {
    setOpenLogoutModa(false)
  }

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja realmente sair?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ])
  }

  return (
    <>
      <View style={styles.container}>


        <Avatar urlImage={user.avatar} />

        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>
              Olá,
            </Text>
            <Text style={styles.username}>
              {user.firstName}
            </Text>
          </View>

          <Text style={styles.message}>
            Hoje é dia de vitória
          </Text>
        </View>
      </View>

      <RectButton onPress={handleOpenLogoutModa}>
        <Text style={styles.logout}>Logout</Text>
      </RectButton>

      <ModalViewOut visible={openLogoutModa}  >
        <View style={styles.modal} >
          <Text style={{color: theme.colors.heading, fontFamily: theme.fonts.title700, fontSize: 20}}>Deseja sair do GamePlay?</Text>
          <View style={styles.buttons}>
            <View style={styles.button1}>
              <Button title="não" onPress={handleCloseLogoutModa} />
            </View>
            <View style={styles.button2}>
              <Button title="sim" onPress={handleSignOut}/>
            </View>
          </View>
        </View>
      </ModalViewOut>
    </>
  )
}