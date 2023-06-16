<template>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <device-table/>
                    </v-col>
                    <v-col>
                        <google-map/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <data-table/>
                    </v-col>
                    <v-col>
                        <v-row>
                            <device-control/>
                        </v-row>
                            <current-weather/>
                        <v-row>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <video-stream/>
                </v-row>
            </v-container>
</template>

<script>
import DeviceTable from '../components/DeviceTable';
import DataTable from '../components/DataTable';
import GoogleMap from '../components/GoogleMap';
import DeviceControl from '../components/DeviceControl';
import CurrentWeather from '../components/CurrentWeather';
import VideoStream from '../components/VideoStream';

export default {
  name: 'App',
  components: {
    DeviceTable,
    DataTable,
    DeviceControl,
    CurrentWeather,
    GoogleMap,
    VideoStream
  },
  data: () => ({
    //
  }),
  created(){
    this.$socket.on('smart',function(data){
        alert(JSON.stringify(data));
    });
    this.$socket.emit('rint',{data:"first Request"});
  }
}
</script>