import React, { Component, ReactElement } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
// import styles from './index.module.scss';

interface Props {
    title: string;
    isDarkMode: boolean;
    isDisabled?: boolean | null;
    children?: any;
    onPress: () => void;
}

class HoverableButton extends Component<Props> {

    private _backgroundColor: string = '#826969';
    private _borderColor: string = '#050505';
    private _underlayColor: string = '#050505';
    private _loaderColor: string = '#474747';
    private _isDarkMode: boolean = false;

    constructor(props: Props) {
        super(props);
        this._isDarkMode = this.props.isDarkMode;
        this.state = {...props};
        this._setColors();
    }

    buttonTitle = (): ReactElement => {
      return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text
        style={[
          {
            color: this.props.isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {this.props.title}
      </Text>
      </LinearGradient>
      );
    }

    _setColors(): void {
      // pSBC() https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js) 
      // ToDO: change color shade runtime 
      if(this.props.isDisabled) {
        this._backgroundColor = "#787777";
        this._underlayColor = "#8a8a8a";
        this._borderColor = "#050505";
        // this._loaderColor = this._isDarkMode ? "#cccccc" : "#474747";
      } else {
        this._backgroundColor = this._isDarkMode ? "#614444" : "#ab7b7b";
        this._underlayColor = this._isDarkMode ? "#8a6262" : "#d19494";
        this._borderColor = this._isDarkMode ? "#050505" : "#050505";
      }
    }

    render(): ReactElement {
        return (
            <TouchableHighlight
                style={[
                styles.button,
                {
                  borderColor: this._borderColor,
                  backgroundColor: this._backgroundColor,
                  // shadowColor: this._backgroundColor,
                },
              ]}
              underlayColor={this._underlayColor}
              disabled={this.props.isDisabled}
              onPress={this.props.onPress}
              >
                {
                this.props.isDisabled 
                ? <>
                  <ActivityIndicator color={this._loaderColor} style={{
                    paddingRight: 10,
                  }} size="large" />
                  {this.buttonTitle()}
                </>
                :
                this.buttonTitle()
              }
            </TouchableHighlight>
        );
    }


}

const styles = StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      borderWidth: 1,
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
  }); 

  export default HoverableButton;