import mqtt from 'mqtt';
// const mqtt = require('mqtt');

const brokerUrl = 'mqtt://91.121.93.94:1883';
const client = mqtt.connect(brokerUrl);
const topic = 'aswar';

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    } else {
      console.error('Subscription error:', err);
    }
  });

});

client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`);
});


client.on('error', (error) => {
  console.error('Connection error:', error);
  client.end();
});
