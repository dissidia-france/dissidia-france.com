export default {
  methods: {
    scrollTo: function (el) {
      document.querySelector(el).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
