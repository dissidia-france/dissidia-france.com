<script>
export default {
  name: 'PageTitle',
  props: ['titleValue'],
  methods: {
    setTitle: function () {
      if (this.titleValue !== 'default') {
        document.title = this.titleValue + ' - Dissidia France'
      } else {
        document.title = 'Dissidia France'
      }
    }
  },
  created () {
    this.setTitle()
  },
  watch: {
    titleValue: function () {
      this.setTitle()
    }
  },
  render () {
  }
}
</script>