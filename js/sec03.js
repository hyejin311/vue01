const App = {
    data(){
        return {
            name : 'welcome01'
        }
    }
}
Vue.createApp(App).mount('#app');

const AppSec ={
    data(){
        return{
            name : 'welcome02'
        }
    }
}
Vue.createApp(AppSec).mount('#appSec');