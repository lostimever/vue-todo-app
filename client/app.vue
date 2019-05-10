<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <p>{{counter}}</p>
    <p>{{fullName}}</p> -->
    <!-- <router-link to='/app'>app</router-link>
    <router-link to='/login'>login</router-link> -->
    <!-- <Todo></Todo> -->
    <transition name='fade'>
      <router-view/>
    </transition>

    <Footer></Footer>
    <!-- <notification content="test notify"/> -->
    <!-- <button @click="notify">click it</button> -->
    <!-- <transition name='a'>
      <router-view/>
    </transition> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'WLF\'s todo app'
  },
  components: {
    Header,
    Footer,
    // Todo
  },
  mounted () {
    // console.log(this.$store)
    // this.updateCountAsync ({
    //   num: 5,
    //   time: 2000
    // })
    // this.updateText('123')
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    // let i = 0;
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++, 2333)
    // }, 1000)
    // setInterval(() => {
    //   this.updateCount({
    //     num:i++,
    //     num2: 2333
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    ...mapState({
      counter: (state) => state.count,
      // textA: (state) => state.a.text,
      // textC: (state) => state.c.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    ...mapGetters({
      'fullName': 'fullName',
      // textPlus: 'a/textPlus'
    })
  }
}
</script>

<style lang="stylus" scoped>
// scoped 仅应用于此组件内
#app {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}

#cover {
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color #555
  opacity 0.5
  z-index -1
}
</style>

