<template>
    <div>
        <div class="eventId">{{eventId}}</div>
        <div class="description">{{description}}</div>
        <img src="http://192.168.8.19:5000/video_feed" width="320" height="240">
        <!-- 라즈베리파이 ip주소 -->
    </div>
</template>
<script>
    export default {
        name: 'video-stream',
        data(){
            return{
                eventId:'ttt',
                description:'ttt'
            }
        },
        created(){
            this.$socket.on('smart',(data)=>{this.displayEvent(data)})
        },
        methods:{
            displayEvent(data){
                console.log(JSON.stringify(data))
                this.eventId=data.eventId;
                this.description=data.description;                
            }
        }
    }
</script>
