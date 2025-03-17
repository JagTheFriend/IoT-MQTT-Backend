import { connect } from "mqtt";

const client = connect(process.env.MQTT_BROKER_URL);

export function mqttConnect(callback: (data: string) => unknown) {
  client.on("connect", () => {
    console.log("Connected to MQTT");
  });

  client.on("message", (_topic, message) => {
    // message is Buffer
    callback(message.toString());
  });
}
