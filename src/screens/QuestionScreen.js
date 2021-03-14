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
    this.setState({ recording: false }, async () => {
      const example = await this.cam.stopRecording();
      console.log(example)
    });
    let data = new FormData();
    const { video } = this.state;
    data.append({'file': this.state.video});
    fetch('http://test.aeroexam.org/api/files/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.nHHXsHcibnpaxMgzqnf1UsNktOVmrEQEFg0OEuvkwb8'
      },
      body: data
    }).then((response) => console.log(response.status))
    .catch((err) => {
      console.log(err);
    })
  };

  _StartRecord = async () => {
    if (this.cam) {
      this.setState({ recording: true }, async () => {
        const video = await this.cam.recordAsync();
        this.setState({video: video});
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
    const { recording } = this.state;
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