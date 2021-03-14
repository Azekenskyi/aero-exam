import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Camera } from "expo-camera";

class CameraScreen extends Component {
  state = {
    video: null,
    picture: null,
    recording: false
  };

  _StopRecord = async () => {
    this.setState({ recording: false }, () => {
      const example = this.cam.stopRecording();
      console.log('example', example);
    });
    console.log(this.props);
    const response = fetch('http://test.aeroexam.org/api/files/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiIDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMSIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.uZyBka_iTmXHomLYmXqq2FzKoKIOqwSQyNrIAbztk5E'
      },
      body: JSON.stringify({
        file: video
      })
    })
  };

  _StartRecord = async () => {
    if (this.cam) {
      this.setState({ recording: true }, async () => {
        const video = await this.cam.recordAsync();
        this.setState({ video });
      });
    }
  };

  toogleRecord = () => {
    const { recording } = this.state;

    if (recording) {
      this._StopRecord();
    } else {
      this._StartRecord();
    }
  };

  render() {
    const { recording, video } = this.state;
    return (
      <Camera
        ref={cam => (this.cam = cam)}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          width: "100%"
        }}
      >
        {video && (
          <TouchableOpacity
            onPress={this._saveVideo}
            style={{
              padding: 20,
              width: "100%",
              backgroundColor: "#fff"
            }}
          >
            <Text style={{ textAlign: "center" }}>save</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={this.toogleRecord}
          style={{
            padding: 20,
            width: "100%",
            backgroundColor: recording ? "#ef4f84" : "#4fef97"
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {recording ? "Stop" : "Record"}
          </Text>
        </TouchableOpacity>
      </Camera>
    );
  }
}

class QuestionScreen extends Component {
  state = {
    showCamera: false
  };

  _showCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();

    if (status === "granted") {
      this.setState({ showCamera: true });
    }else{
      Alert.alert("Ошибка", "Вы не дали разрешение на запись!")
      this.state({  showCamera: false })
    }
  };

  render() {
    const { showCamera } = this.state;
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          width: "100%"
        }}
      >
        {showCamera ? (
          <CameraScreen />
        ) : (
          <TouchableOpacity onPress={this._showCamera}>
            <Text> Начать запись</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default QuestionScreen;