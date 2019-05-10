<script>
export default {
  name: 'Tab',
  props: {
    index: {
      required: true,
      type: [Number, String]
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  mounted () {
    this.$parent.panes.push(this)
  },
  computed: {
    active () {
      return this.$parent.value === this.index  //如果不是严格意义上的parent，就无法使用该方法， 可以使用provide()
    }
  },
  methods: {
    handleClick () {
      this.$parent.onChange(this.index)
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      tab: true,
      active: this.active
    }
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    )
  }
}
</script>

<style lang="stylus" scoped>
// ul li{
//   // padding: 10px 20px;
//   display: inline-block;
//   // white-space:nowrap;
// }
.tab
  display inline
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid blue
  &:last-child
    margin-right 0
</style>

