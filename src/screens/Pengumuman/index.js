import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import Carousel from 'react-native-snap-carousel';

import styles from "./styles";

class Anatomy extends Component {

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
}
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Pengumuman</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
          <Text>1. Qiraati An-Nur beroperasi seperti biasa pada hari selasa, rabu dan khamis pada jam 7 malam sehingga 9 malam.</Text>
          <Text>2. Qiraati akan mengadakan Majlis hari raya pada 8 Januari 2019 iaitu pada hari selasa.</Text>
        </Content>

      </Container>
    );
  }
}

export default Anatomy;
