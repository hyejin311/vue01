const App ={
data(){
    return{
        name:'welcome'
    }
},
methods:{
    // action: function(){}
    action(event){
    alert('Hello' + this.name + '!');
    }
}
}
Vue.createApp(App).mount('#app');