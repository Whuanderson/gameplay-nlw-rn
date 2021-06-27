import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { parseISO, formatDistanceStrict, addHours } from "date-fns";
import * as Linking from 'expo-linking'

import {
  ImageBackground,
  Text,
  View,
  Share,
  Alert,
  Platform,
  FlatList,
} from 'react-native'

import BannerImg from '../../assets/banner.png';

import { theme } from "../../global/styles/theme";
import { styles } from './styles';
import { api } from "../../services/api";

import { AppointmentProps } from "../../components/Appointment";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Load } from '../../components/Load';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const route = useRoute();
  const { guildSelected } = route.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data);
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  function dateToAppointment(dateTime: number | Date) {
    let response = "";

    if (parseISO(String(dateTime)) > addHours(new Date(), -3)) {
      const distance = formatDistanceStrict(
        parseISO(String(dateTime)),
        addHours(new Date(), -3),
        {
          unit: "minute",
        }
      );

      const time = Number(distance.split(" ")[0]);

      if (time / 60 / 24 >= 30) {
        response = `Falta mais de um mês para a partida começar!`;
      } else {
        if (time / 60 >= 24) {
          response = `Falta ${Math.floor(
            time / 60 / 24
          )} dia(s) para a partida começar!`;
        } else {
          if (time > 60) {
            response = `Falta ${Math.floor(
              time / 60
            )} hora(s) para a partida começar!`;
          } else {
            response = `Falta ${time} minuto(s) para a partida começar!`;
          }
        }
      }
    } else {
      response = `Essa partida já aconteceu`;
    }

    return response;
  }

  useEffect(() => {
    fetchGuildWidget();
  }, [])
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            {guildSelected.guild.name}
          </Text>

          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>

      {
        error ? (
          <View style={styles.errorContainer}>
            <View>
              <Text style={styles.errorTitle}>Não foi possivel carregar os jogadores</Text>
              <Text style={styles.errorMessage}>
                Verifique as configurações do servidor. {"\n"}
                O widget está habilitado?
              </Text>
            </View>
          </View>
        ) :
          loading ? <Load /> :
            <>
              <ListHeader
                title="Jogadores"
                subtitle={`Total ${widget.members.length ? widget.members.length : 0}`}
              />
              <FlatList
                data={widget.members ? widget.members : []}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
                ListEmptyComponent={() => (
                  <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                      Não há ninguém online agora.
                    </Text>
                  </View>
                )}
              />
            </>
      }

      <Text style={styles.footer}>
        {dateToAppointment(guildSelected.dateTimeNotification)}
      </Text>

      {
        guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            title="Entrar na partida"
            onPress={handleOpenGuild}
          />
        </View>
      }
    </Background>
  )
}