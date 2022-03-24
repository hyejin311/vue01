const App = {
data(){
    return{
        name : 'flower title',
        title: 'flower01',
        description:'description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        imgSrc:'./images/source04.JPG',
        price: '500'
    }
}
}
Vue.createApp(App).mount('#app');